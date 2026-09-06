import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(request) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // If Supabase is not configured yet, let the page render so it shows setup instructions
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('placeholder')) {
        return response
    }

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
        cookies: {
            get(name) {
                return request.cookies.get(name)?.value
            },
            set(name, value, options) {
                request.cookies.set({ name, value, ...options })
                response = NextResponse.next({
                    request: {
                        headers: request.headers,
                    },
                })
                response.cookies.set({ name, value, ...options })
            },
            remove(name, options) {
                request.cookies.set({ name, value: '', ...options })
                response = NextResponse.next({
                    request: {
                        headers: request.headers,
                    },
                })
                response.cookies.set({ name, value: '', ...options })
            },
        },
    })

    const { data: { user } } = await supabase.auth.getUser()
    const path = request.nextUrl.pathname

    // Protect /dashboard
    if (path.startsWith('/dashboard')) {
        if (!user) {
            const redirectUrl = new URL('/login', request.url)
            redirectUrl.searchParams.set('next', path)
            return NextResponse.redirect(redirectUrl)
        }
    }

    // Protect /admin
    if (path.startsWith('/admin')) {
        if (!user) {
            const redirectUrl = new URL('/login', request.url)
            redirectUrl.searchParams.set('next', path)
            return NextResponse.redirect(redirectUrl)
        }

        // Check user role from profiles
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()

        if (!profile || profile.role !== 'admin') {
            const redirectUrl = new URL('/dashboard', request.url)
            redirectUrl.searchParams.set('error', 'unauthorized_admin')
            return NextResponse.redirect(redirectUrl)
        }
    }

    return response
}

export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*'],
}
