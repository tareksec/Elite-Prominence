import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'

function getAdminClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!supabaseUrl || !serviceRoleKey) {
        throw new Error('Supabase Service Role credentials are not configured.')
    }
    return createClient(supabaseUrl, serviceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })
}

async function verifyAdminCaller(request) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // 1. First check via Bearer token in Authorization header
    const authHeader = request.headers.get('authorization')
    let callerUser = null

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.replace('Bearer ', '').trim()
        const adminSupabase = getAdminClient()
        const { data: { user }, error } = await adminSupabase.auth.getUser(token)
        if (!error && user) {
            callerUser = user
        }
    }

    // 2. If no bearer token, check request cookies via SSR client
    if (!callerUser && supabaseUrl && supabaseAnonKey) {
        const ssrClient = createServerClient(supabaseUrl, supabaseAnonKey, {
            cookies: {
                get(name) {
                    return request.cookies.get(name)?.value
                },
                set() {},
                remove() {}
            }
        })
        const { data: { user } } = await ssrClient.auth.getUser()
        if (user) {
            callerUser = user
        }
    }

    if (!callerUser) {
        return { user: null, isAdmin: false, error: 'Authentication required' }
    }

    // 3. Verify user's role from profiles table using elevated admin client
    const adminSupabase = getAdminClient()
    const { data: profile, error: pErr } = await adminSupabase
        .from('profiles')
        .select('role')
        .eq('id', callerUser.id)
        .single()

    if (pErr || !profile || profile.role !== 'admin') {
        return { user: callerUser, isAdmin: false, error: 'Administrative privileges required' }
    }

    return { user: callerUser, isAdmin: true, error: null }
}

export async function POST(request) {
    try {
        const { user: adminUser, isAdmin, error: authErr } = await verifyAdminCaller(request)
        if (!isAdmin || !adminUser) {
            return NextResponse.json({ error: authErr || 'Forbidden' }, { status: 403 })
        }

        const body = await request.json()
        const { action, payload = {} } = body
        const adminSupabase = getAdminClient()

        switch (action) {
            // -------------------------------------------------------------
            // OVERVIEW / STATS
            // -------------------------------------------------------------
            case 'get_stats': {
                const [
                    { count: leadsCount },
                    { data: allProfiles },
                    { data: allRevs },
                    { data: allArts }
                ] = await Promise.all([
                    adminSupabase.from('contacts').select('*', { count: 'exact', head: true }),
                    adminSupabase.from('profiles').select('id, role'),
                    adminSupabase.from('reviews').select('id, status'),
                    adminSupabase.from('articles').select('id, status')
                ])

                return NextResponse.json({
                    success: true,
                    stats: {
                        leadsCount: leadsCount || 0,
                        totalUsers: allProfiles?.length || 0,
                        adminCount: allProfiles?.filter(p => p.role === 'admin').length || 0,
                        reviewsApproved: allRevs?.filter(r => r.status === 'approved').length || 0,
                        reviewsPending: allRevs?.filter(r => r.status === 'pending').length || 0,
                        articlesApproved: allArts?.filter(a => a.status === 'approved').length || 0,
                        articlesPending: allArts?.filter(a => a.status === 'pending').length || 0
                    }
                })
            }

            // -------------------------------------------------------------
            // LEADS / CONTACT INQUIRIES
            // -------------------------------------------------------------
            case 'get_leads': {
                const { data: leads, error } = await adminSupabase
                    .from('contacts')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (error) throw error
                return NextResponse.json({ success: true, leads: leads || [] })
            }

            case 'delete_lead': {
                const { contactId } = payload
                if (!contactId) return NextResponse.json({ error: 'contactId is required' }, { status: 400 })

                const { error } = await adminSupabase
                    .from('contacts')
                    .delete()
                    .eq('id', contactId)

                if (error) throw error
                return NextResponse.json({ success: true, message: 'Lead deleted successfully' })
            }

            // -------------------------------------------------------------
            // USER DIRECTORY & ROLES
            // -------------------------------------------------------------
            case 'get_users': {
                const { data: profiles, error } = await adminSupabase
                    .from('profiles')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (error) throw error
                return NextResponse.json({ success: true, profiles: profiles || [] })
            }

            case 'update_user_role': {
                const { userId, role } = payload
                if (!userId || !['user', 'admin'].includes(role)) {
                    return NextResponse.json({ error: 'Valid userId and role (user|admin) are required' }, { status: 400 })
                }

                // Prevent admin from accidentally demoting themselves if they are the only admin
                if (userId === adminUser.id && role !== 'admin') {
                    const { data: adminList } = await adminSupabase
                        .from('profiles')
                        .select('id')
                        .eq('role', 'admin')
                    if (adminList && adminList.length <= 1) {
                        return NextResponse.json({ error: 'Cannot demote the sole administrator.' }, { status: 400 })
                    }
                }

                const { error } = await adminSupabase
                    .from('profiles')
                    .update({ role })
                    .eq('id', userId)

                if (error) throw error
                return NextResponse.json({ success: true, message: `Role updated to ${role}` })
            }

            case 'update_user_profile': {
                const { userId, full_name, role_title } = payload
                if (!userId) return NextResponse.json({ error: 'userId is required' }, { status: 400 })

                const { error } = await adminSupabase
                    .from('profiles')
                    .update({
                        full_name: full_name?.trim(),
                        role_title: role_title?.trim()
                    })
                    .eq('id', userId)

                if (error) throw error
                return NextResponse.json({ success: true, message: 'Profile updated successfully' })
            }

            case 'delete_user': {
                const { userId } = payload
                if (!userId) return NextResponse.json({ error: 'userId is required' }, { status: 400 })

                if (userId === adminUser.id) {
                    return NextResponse.json({ error: 'You cannot delete your own active administrator account.' }, { status: 400 })
                }

                // Delete auth account via admin API (cascades to profiles)
                const { error } = await adminSupabase.auth.admin.deleteUser(userId)
                if (error) {
                    // Fallback to deleting from profiles directly if auth deletion has constraint
                    await adminSupabase.from('profiles').delete().eq('id', userId)
                }

                return NextResponse.json({ success: true, message: 'User deleted successfully' })
            }

            // -------------------------------------------------------------
            // REVIEWS / TESTIMONIALS
            // -------------------------------------------------------------
            case 'create_review_direct': {
                const { author_name, role_title, content, rating = 5, status = 'approved' } = payload
                if (!content) return NextResponse.json({ error: 'Content is required' }, { status: 400 })

                // We attach to admin user_id
                const { data: newReview, error } = await adminSupabase
                    .from('reviews')
                    .insert({
                        user_id: adminUser.id,
                        content: content.trim(),
                        rating: Number(rating) || 5,
                        status: status,
                        reviewed_at: new Date().toISOString(),
                        reviewed_by: adminUser.id
                    })
                    .select()
                    .single()

                if (error) throw error
                return NextResponse.json({ success: true, review: newReview })
            }

            case 'update_review': {
                const { reviewId, content, rating, status } = payload
                if (!reviewId) return NextResponse.json({ error: 'reviewId is required' }, { status: 400 })

                const updateData = {}
                if (content !== undefined) updateData.content = content.trim()
                if (rating !== undefined) updateData.rating = Number(rating)
                if (status !== undefined) {
                    updateData.status = status
                    updateData.reviewed_at = new Date().toISOString()
                    updateData.reviewed_by = adminUser.id
                }

                const { error } = await adminSupabase
                    .from('reviews')
                    .update(updateData)
                    .eq('id', reviewId)

                if (error) throw error
                return NextResponse.json({ success: true, message: 'Review updated successfully' })
            }

            case 'delete_review': {
                const { reviewId } = payload
                if (!reviewId) return NextResponse.json({ error: 'reviewId is required' }, { status: 400 })

                const { error } = await adminSupabase
                    .from('reviews')
                    .delete()
                    .eq('id', reviewId)

                if (error) throw error
                return NextResponse.json({ success: true, message: 'Review deleted successfully' })
            }

            // -------------------------------------------------------------
            // ARTICLES / EDITORIAL CONTENT
            // -------------------------------------------------------------
            case 'create_article_direct': {
                const { title, category, body: articleBody, status = 'approved' } = payload
                if (!title || !articleBody) {
                    return NextResponse.json({ error: 'Title and body are required' }, { status: 400 })
                }

                const { data: newArticle, error } = await adminSupabase
                    .from('articles')
                    .insert({
                        user_id: adminUser.id,
                        title: title.trim(),
                        category: category || 'Executive Presence',
                        body: articleBody.trim(),
                        status: status,
                        created_at: new Date().toISOString(),
                        published_at: status === 'approved' ? new Date().toISOString() : null
                    })
                    .select()
                    .single()

                if (error) throw error
                return NextResponse.json({ success: true, article: newArticle })
            }

            case 'update_article': {
                const { articleId, title, category, body: articleBody, status } = payload
                if (!articleId) return NextResponse.json({ error: 'articleId is required' }, { status: 400 })

                const updateData = {}
                if (title !== undefined) updateData.title = title.trim()
                if (category !== undefined) updateData.category = category
                if (articleBody !== undefined) updateData.body = articleBody.trim()
                if (status !== undefined) {
                    updateData.status = status
                    if (status === 'approved') updateData.published_at = new Date().toISOString()
                }

                const { error } = await adminSupabase
                    .from('articles')
                    .update(updateData)
                    .eq('id', articleId)

                if (error) throw error
                return NextResponse.json({ success: true, message: 'Article updated successfully' })
            }

            case 'delete_article': {
                const { articleId } = payload
                if (!articleId) return NextResponse.json({ error: 'articleId is required' }, { status: 400 })

                const { error } = await adminSupabase
                    .from('articles')
                    .delete()
                    .eq('id', articleId)

                if (error) throw error
                return NextResponse.json({ success: true, message: 'Article deleted successfully' })
            }

            // -------------------------------------------------------------
            // SITE SETTINGS
            // -------------------------------------------------------------
            case 'get_settings': {
                const { data: settings, error } = await adminSupabase
                    .from('site_settings')
                    .select('*')

                if (error) {
                    // Return empty object if table not yet created
                    return NextResponse.json({ success: true, settings: {} })
                }

                const mapped = {}
                settings?.forEach(item => {
                    mapped[item.key] = item.value
                })
                return NextResponse.json({ success: true, settings: mapped })
            }

            case 'update_settings': {
                const { key, value } = payload
                if (!key) return NextResponse.json({ error: 'Key is required' }, { status: 400 })

                const { error } = await adminSupabase
                    .from('site_settings')
                    .upsert({
                        key,
                        value,
                        updated_at: new Date().toISOString()
                    })

                if (error) throw error
                return NextResponse.json({ success: true, message: `Setting ${key} updated` })
            }

            default:
                return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 })
        }
    } catch (err) {
        console.error('Admin API error:', err)
        return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
    }
}
