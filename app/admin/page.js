'use client'
import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import SupabaseSetupNotice from '@/components/elements/SupabaseSetupNotice'
import { getWhatsAppUrl } from '@/lib/whatsapp'

const ARTICLE_CATEGORIES = [
    "Executive Presence",
    "Thought Leadership",
    "Digital Reputation",
    "LinkedIn Strategy",
    "Personal PR & Media",
    "Career Transition",
    "C-Suite Advisory",
    "HR & Talent Strategy",
    "Speaking & Keynotes",
    "Industry Commentary"
]

export default function AdminPage() {
    const router = useRouter()
    const configured = isSupabaseConfigured()

    // Auth & Caller State
    const [adminUser, setAdminUser] = useState(null)
    const [adminProfile, setAdminProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [sessionToken, setSessionToken] = useState('')

    // Active Navigation Tab
    // 'queue' | 'leads' | 'reviews' | 'articles' | 'users' | 'settings'
    const [activeTab, setActiveTab] = useState('queue')

    // Search & Filter
    const [searchQuery, setSearchQuery] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')

    // Data States
    const [leads, setLeads] = useState([])
    const [reviews, setReviews] = useState([])
    const [articles, setArticles] = useState([])
    const [users, setUsers] = useState([])
    const [siteSettings, setSiteSettings] = useState({
        whatsapp_number: '8801645441584',
        announcement: {
            enabled: false,
            text: 'Elite Prominence is accepting executive cohort applications for Q4.',
            link: '/contact',
            bgColor: '#162d20'
        }
    })

    // Action feedback
    const [actionLoading, setActionLoading] = useState({})
    const [feedbackMessage, setFeedbackMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    // Modals
    const [reviewModalOpen, setReviewModalOpen] = useState(false)
    const [editingReview, setEditingReview] = useState(null)
    const [reviewForm, setReviewForm] = useState({ content: '', rating: 5, status: 'approved' })

    const [articleModalOpen, setArticleModalOpen] = useState(false)
    const [editingArticle, setEditingArticle] = useState(null)
    const [articleForm, setArticleForm] = useState({ title: '', category: ARTICLE_CATEGORIES[0], body: '', status: 'approved' })

    const [userModalOpen, setUserModalOpen] = useState(false)
    const [editingUser, setEditingUser] = useState(null)
    const [userForm, setUserForm] = useState({ full_name: '', role_title: '', role: 'user' })

    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [deleteTarget, setDeleteTarget] = useState(null) // { type, id, title }

    // Settings Form
    const [savingSettings, setSavingSettings] = useState(false)
    const [settingsForm, setSettingsForm] = useState({
        whatsapp_number: '8801645441584',
        announcement_enabled: false,
        announcement_text: '',
        announcement_link: '',
        announcement_bgColor: '#162d20'
    })

    // -------------------------------------------------------------
    // Initial Load & Auth Check
    // -------------------------------------------------------------
    const loadAllData = async (token) => {
        try {
            setLoading(true)
            const headers = {
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {})
            }

            const [leadsRes, usersRes, settingsRes] = await Promise.all([
                fetch('/api/admin/actions', { method: 'POST', headers, credentials: 'include', body: JSON.stringify({ action: 'get_leads' }) }),
                fetch('/api/admin/actions', { method: 'POST', headers, credentials: 'include', body: JSON.stringify({ action: 'get_users' }) }),
                fetch('/api/admin/actions', { method: 'POST', headers, credentials: 'include', body: JSON.stringify({ action: 'get_settings' }) })
            ])

            const leadsData = await leadsRes.json()
            const usersData = await usersRes.json()
            const settingsData = await settingsRes.json()

            if (leadsData?.leads) setLeads(leadsData.leads)
            if (usersData?.profiles) setUsers(usersData.profiles)

            if (settingsData?.settings) {
                const s = settingsData.settings
                setSiteSettings(s)
                setSettingsForm({
                    whatsapp_number: s.whatsapp_number || '8801645441584',
                    announcement_enabled: s.announcement?.enabled || false,
                    announcement_text: s.announcement?.text || '',
                    announcement_link: s.announcement?.link || '',
                    announcement_bgColor: s.announcement?.bgColor || '#162d20'
                })
            }

            // Also load reviews and articles via browser client
            const supabase = getSupabaseBrowserClient()
            const [{ data: revs }, { data: arts }] = await Promise.all([
                supabase.from('reviews').select('*, profiles:user_id(full_name, role_title)').order('created_at', { ascending: false }),
                supabase.from('articles').select('*, profiles:user_id(full_name, role_title)').order('created_at', { ascending: false })
            ])

            if (revs) setReviews(revs)
            if (arts) setArticles(arts)

        } catch (err) {
            console.error('Error loading admin data:', err)
            setErrorMessage(err.message || 'Failed to fetch admin data')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!configured) {
            setLoading(false)
            return
        }

        const verifyAuth = async () => {
            const supabase = getSupabaseBrowserClient()
            const { data: { session } } = await supabase.auth.getSession()

            if (!session?.user) {
                router.push('/login?next=/admin')
                return
            }

            setAdminUser(session.user)
            setSessionToken(session.access_token || '')

            // Verify profile role
            const { data: prof, error: pErr } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .single()

            if (pErr || !prof || prof.role !== 'admin') {
                router.push('/dashboard?error=unauthorized_admin')
                return
            }

            setAdminProfile(prof)
            await loadAllData(session.access_token)
        }

        verifyAuth()
    }, [configured, router])

    // Helper to send API actions
    const performAction = async (action, payload = {}) => {
        setErrorMessage('')
        setFeedbackMessage('')
        try {
            const res = await fetch('/api/admin/actions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(sessionToken ? { 'Authorization': `Bearer ${sessionToken}` } : {})
                },
                credentials: 'include',
                body: JSON.stringify({ action, payload })
            })
            const data = await res.json()
            if (!res.ok || data.error) {
                throw new Error(data.error || 'Action failed')
            }
            return data
        } catch (err) {
            setErrorMessage(err.message)
            throw err
        }
    }

    // -------------------------------------------------------------
    // KPI Stats (Memoized)
    // -------------------------------------------------------------
    const pendingReviews = useMemo(() => reviews.filter(r => r.status === 'pending'), [reviews])
    const pendingArticles = useMemo(() => articles.filter(a => a.status === 'pending'), [articles])
    const approvedReviews = useMemo(() => reviews.filter(r => r.status === 'approved'), [reviews])
    const approvedArticles = useMemo(() => articles.filter(a => a.status === 'approved'), [articles])
    const adminCount = useMemo(() => users.filter(u => u.role === 'admin').length, [users])

    // -------------------------------------------------------------
    // Filtered Lists Based on Search Query
    // -------------------------------------------------------------
    const filteredLeads = useMemo(() => {
        let list = leads
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            list = list.filter(l =>
                (l.name && l.name.toLowerCase().includes(q)) ||
                (l.email && l.email.toLowerCase().includes(q)) ||
                (l.message && l.message.toLowerCase().includes(q))
            )
        }
        return list
    }, [leads, searchQuery])

    const filteredReviews = useMemo(() => {
        let list = reviews
        if (filterStatus !== 'all') {
            list = list.filter(r => r.status === filterStatus)
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            list = list.filter(r =>
                (r.content && r.content.toLowerCase().includes(q)) ||
                (r.profiles?.full_name && r.profiles.full_name.toLowerCase().includes(q))
            )
        }
        return list
    }, [reviews, filterStatus, searchQuery])

    const filteredArticles = useMemo(() => {
        let list = articles
        if (filterStatus !== 'all') {
            list = list.filter(a => a.status === filterStatus)
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            list = list.filter(a =>
                (a.title && a.title.toLowerCase().includes(q)) ||
                (a.category && a.category.toLowerCase().includes(q)) ||
                (a.profiles?.full_name && a.profiles.full_name.toLowerCase().includes(q))
            )
        }
        return list
    }, [articles, filterStatus, searchQuery])

    const filteredUsers = useMemo(() => {
        let list = users
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            list = list.filter(u =>
                (u.full_name && u.full_name.toLowerCase().includes(q)) ||
                (u.role_title && u.role_title.toLowerCase().includes(q)) ||
                (u.role && u.role.toLowerCase().includes(q))
            )
        }
        return list
    }, [users, searchQuery])

    // -------------------------------------------------------------
    // Handlers: Leads
    // -------------------------------------------------------------
    const handleDeleteLead = async (contactId) => {
        setActionLoading(prev => ({ ...prev, [contactId]: true }))
        try {
            await performAction('delete_lead', { contactId })
            setLeads(prev => prev.filter(l => l.id !== contactId))
            setFeedbackMessage('Lead inquiry deleted successfully.')
        } catch {} finally {
            setActionLoading(prev => ({ ...prev, [contactId]: false }))
        }
    }

    const exportLeadsToCSV = () => {
        if (!leads.length) {
            alert('No leads available to export.')
            return
        }

        const headers = ['ID', 'Date', 'Name', 'Email', 'Message']
        const rows = leads.map(l => [
            l.id,
            new Date(l.created_at).toLocaleString(),
            `"${(l.name || '').replace(/"/g, '""')}"`,
            `"${(l.email || '').replace(/"/g, '""')}"`,
            `"${(l.message || '').replace(/"/g, '""')}"`
        ])

        const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.setAttribute('href', url)
        link.setAttribute('download', `elite_prominence_leads_${new Date().toISOString().slice(0, 10)}.csv`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    // -------------------------------------------------------------
    // Handlers: Reviews (CRUD)
    // -------------------------------------------------------------
    const handleReviewStatus = async (id, status) => {
        setActionLoading(prev => ({ ...prev, [id]: true }))
        try {
            await performAction('update_review', { reviewId: id, status })
            setReviews(prev => prev.map(r => r.id === id ? { ...r, status } : r))
            setFeedbackMessage(`Review status updated to "${status}".`)
        } catch {} finally {
            setActionLoading(prev => ({ ...prev, [id]: false }))
        }
    }

    const handleSaveReviewModal = async (e) => {
        e.preventDefault()
        setActionLoading(prev => ({ ...prev, reviewSave: true }))
        try {
            if (editingReview) {
                // Update
                await performAction('update_review', {
                    reviewId: editingReview.id,
                    content: reviewForm.content,
                    rating: reviewForm.rating,
                    status: reviewForm.status
                })
                setReviews(prev => prev.map(r => r.id === editingReview.id ? { ...r, ...reviewForm } : r))
                setFeedbackMessage('Review updated successfully.')
            } else {
                // Create
                const res = await performAction('create_review_direct', {
                    content: reviewForm.content,
                    rating: reviewForm.rating,
                    status: reviewForm.status
                })
                if (res.review) {
                    setReviews(prev => [{ ...res.review, profiles: adminProfile }, ...prev])
                }
                setFeedbackMessage('New testimonial published successfully.')
            }
            setReviewModalOpen(false)
            setEditingReview(null)
        } catch {} finally {
            setActionLoading(prev => ({ ...prev, reviewSave: false }))
        }
    }

    // -------------------------------------------------------------
    // Handlers: Articles (CRUD)
    // -------------------------------------------------------------
    const handleArticleStatus = async (id, status) => {
        setActionLoading(prev => ({ ...prev, [id]: true }))
        try {
            await performAction('update_article', { articleId: id, status })
            setArticles(prev => prev.map(a => a.id === id ? { ...a, status } : a))
            setFeedbackMessage(`Article status updated to "${status}".`)
        } catch {} finally {
            setActionLoading(prev => ({ ...prev, [id]: false }))
        }
    }

    const handleSaveArticleModal = async (e) => {
        e.preventDefault()
        setActionLoading(prev => ({ ...prev, articleSave: true }))
        try {
            if (editingArticle) {
                // Update
                await performAction('update_article', {
                    articleId: editingArticle.id,
                    title: articleForm.title,
                    category: articleForm.category,
                    body: articleForm.body,
                    status: articleForm.status
                })
                setArticles(prev => prev.map(a => a.id === editingArticle.id ? { ...a, ...articleForm } : a))
                setFeedbackMessage('Article updated successfully.')
            } else {
                // Create
                const res = await performAction('create_article_direct', {
                    title: articleForm.title,
                    category: articleForm.category,
                    body: articleForm.body,
                    status: articleForm.status
                })
                if (res.article) {
                    setArticles(prev => [{ ...res.article, profiles: adminProfile }, ...prev])
                }
                setFeedbackMessage('New executive article published successfully.')
            }
            setArticleModalOpen(false)
            setEditingArticle(null)
        } catch {} finally {
            setActionLoading(prev => ({ ...prev, articleSave: false }))
        }
    }

    // -------------------------------------------------------------
    // Handlers: Users & Roles
    // -------------------------------------------------------------
    const handleToggleRole = async (userObj) => {
        const nextRole = userObj.role === 'admin' ? 'user' : 'admin'
        if (userObj.id === adminUser.id && nextRole === 'user') {
            if (!confirm('Warning: You are about to remove admin access from your own account. Are you sure?')) {
                return
            }
        }

        setActionLoading(prev => ({ ...prev, [`role_${userObj.id}`]: true }))
        try {
            await performAction('update_user_role', { userId: userObj.id, role: nextRole })
            setUsers(prev => prev.map(u => u.id === userObj.id ? { ...u, role: nextRole } : u))
            setFeedbackMessage(`User "${userObj.full_name}" is now an ${nextRole.toUpperCase()}.`)
        } catch {} finally {
            setActionLoading(prev => ({ ...prev, [`role_${userObj.id}`]: false }))
        }
    }

    const handleSaveUserModal = async (e) => {
        e.preventDefault()
        setActionLoading(prev => ({ ...prev, userSave: true }))
        try {
            await performAction('update_user_profile', {
                userId: editingUser.id,
                full_name: userForm.full_name,
                role_title: userForm.role_title
            })
            if (userForm.role !== editingUser.role) {
                await performAction('update_user_role', {
                    userId: editingUser.id,
                    role: userForm.role
                })
            }
            setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...u, ...userForm } : u))
            setFeedbackMessage('Profile updated successfully.')
            setUserModalOpen(false)
            setEditingUser(null)
        } catch {} finally {
            setActionLoading(prev => ({ ...prev, userSave: false }))
        }
    }

    // -------------------------------------------------------------
    // Handlers: Delete Confirmations
    // -------------------------------------------------------------
    const handleExecuteDelete = async () => {
        if (!deleteTarget) return
        const { type, id } = deleteTarget
        setActionLoading(prev => ({ ...prev, confirmDelete: true }))

        try {
            if (type === 'lead') {
                await performAction('delete_lead', { contactId: id })
                setLeads(prev => prev.filter(l => l.id !== id))
            } else if (type === 'review') {
                await performAction('delete_review', { reviewId: id })
                setReviews(prev => prev.filter(r => r.id !== id))
            } else if (type === 'article') {
                await performAction('delete_article', { articleId: id })
                setArticles(prev => prev.filter(a => a.id !== id))
            } else if (type === 'user') {
                await performAction('delete_user', { userId: id })
                setUsers(prev => prev.filter(u => u.id !== id))
            }
            setFeedbackMessage(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted permanently.`)
            setDeleteModalOpen(false)
            setDeleteTarget(null)
        } catch {} finally {
            setActionLoading(prev => ({ ...prev, confirmDelete: false }))
        }
    }

    // -------------------------------------------------------------
    // Handlers: Site Settings
    // -------------------------------------------------------------
    const handleSaveSettings = async (e) => {
        e.preventDefault()
        setSavingSettings(true)
        try {
            await performAction('update_settings', {
                key: 'whatsapp_number',
                value: settingsForm.whatsapp_number.trim()
            })

            await performAction('update_settings', {
                key: 'announcement',
                value: {
                    enabled: settingsForm.announcement_enabled,
                    text: settingsForm.announcement_text.trim(),
                    link: settingsForm.announcement_link.trim(),
                    bgColor: settingsForm.announcement_bgColor
                }
            })

            // Cache in local storage for instant browser updates
            if (typeof window !== 'undefined') {
                localStorage.setItem('ep_whatsapp_number', settingsForm.whatsapp_number.trim())
            }

            setFeedbackMessage('Site settings updated live across all pages!')
        } catch {} finally {
            setSavingSettings(false)
        }
    }

    const renderStatusBadge = (status) => {
        let bg = "#FEF3C7"
        let color = "#92400E"
        if (status === 'approved') {
            bg = "#D1FAE5"
            color = "#065F46"
        } else if (status === 'rejected') {
            bg = "#FEE2E2"
            color = "#991B1B"
        }
        return (
            <span style={{
                padding: "4px 10px",
                borderRadius: "14px",
                fontSize: "11px",
                fontWeight: "800",
                backgroundColor: bg,
                color: color,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
            }}>
                {status}
            </span>
        )
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <section style={{
                    backgroundColor: "#FAF8F2",
                    padding: "90px 0 90px",
                    minHeight: "90vh",
                    fontFamily: "var(--primary-font)"
                }}>
                    <div className="container">
                        {!configured && <SupabaseSetupNotice feature="Admin Mission Control" />}

                        {/* Top Mission Control Header */}
                        <div style={{
                            backgroundColor: "#162d20",
                            color: "#FAF8F2",
                            padding: "32px 36px",
                            borderRadius: "16px",
                            marginBottom: "24px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "18px",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                            border: "1px solid rgba(210, 157, 43, 0.25)"
                        }}>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                                    <span style={{
                                        backgroundColor: "#D29D2B",
                                        color: "#162d20",
                                        fontSize: "11px",
                                        fontWeight: "800",
                                        padding: "3px 10px",
                                        borderRadius: "8px",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px"
                                    }}>
                                        Mission Control
                                    </span>
                                    <span style={{ fontSize: "13px", color: "#86efac", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }}></span>
                                        Live Admin Console
                                    </span>
                                </div>
                                <h1 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: "800", color: "#ffffff", margin: 0 }}>
                                    Elite Prominence Administration
                                </h1>
                                <p style={{ margin: "6px 0 0", color: "#c1cfc5", fontSize: "14px" }}>
                                    Logged in as <strong>{adminProfile?.full_name || adminUser?.email}</strong> ({adminProfile?.role_title || 'Chief Administrator'})
                                </p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                <Link
                                    href="/dashboard"
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.12)",
                                        color: "#ffffff",
                                        border: "1px solid rgba(255, 255, 255, 0.25)",
                                        padding: "10px 18px",
                                        minHeight: "44px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        borderRadius: "30px",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        textDecoration: "none"
                                    }}
                                >
                                    ← User Dashboard
                                </Link>
                                <Link
                                    href="/community"
                                    target="_blank"
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.12)",
                                        color: "#ffffff",
                                        border: "1px solid rgba(255, 255, 255, 0.25)",
                                        padding: "10px 18px",
                                        minHeight: "44px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        borderRadius: "30px",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        textDecoration: "none"
                                    }}
                                >
                                    Community ↗
                                </Link>
                                <Link
                                    href="/feedback"
                                    target="_blank"
                                    style={{
                                        backgroundColor: "#D29D2B",
                                        color: "#162d20",
                                        padding: "10px 20px",
                                        minHeight: "44px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        borderRadius: "30px",
                                        fontWeight: "800",
                                        fontSize: "14px",
                                        textDecoration: "none"
                                    }}
                                >
                                    Public Reviews ↗
                                </Link>
                            </div>
                        </div>

                        {/* Top KPI Metric Cards */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                            gap: "16px",
                            marginBottom: "28px"
                        }}>
                            <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "14px", border: "1px solid #e5e3db", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                                <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "700", textTransform: "uppercase" }}>📥 Inquiries / Leads</div>
                                <div style={{ fontSize: "32px", fontWeight: "800", color: "#162d20", marginTop: "4px" }}>{leads.length}</div>
                                <div style={{ fontSize: "12px", color: "#16a34a", marginTop: "4px" }}>Active Contact Submissions</div>
                            </div>

                            <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "14px", border: "1px solid #e5e3db", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                                <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "700", textTransform: "uppercase" }}>👥 Executive Members</div>
                                <div style={{ fontSize: "32px", fontWeight: "800", color: "#162d20", marginTop: "4px" }}>{users.length}</div>
                                <div style={{ fontSize: "12px", color: "#d97706", marginTop: "4px" }}>{adminCount} Administrator{adminCount > 1 ? 's' : ''}</div>
                            </div>

                            <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "14px", border: "1px solid #e5e3db", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                                <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "700", textTransform: "uppercase" }}>📰 Executive Articles</div>
                                <div style={{ fontSize: "32px", fontWeight: "800", color: "#162d20", marginTop: "4px" }}>{approvedArticles.length}</div>
                                <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>{pendingArticles.length} pending moderation</div>
                            </div>

                            <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "14px", border: "1px solid #e5e3db", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                                <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "700", textTransform: "uppercase" }}>⭐ Testimonials</div>
                                <div style={{ fontSize: "32px", fontWeight: "800", color: "#162d20", marginTop: "4px" }}>{approvedReviews.length}</div>
                                <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>{pendingReviews.length} pending moderation</div>
                            </div>

                            <div style={{
                                backgroundColor: (pendingReviews.length + pendingArticles.length > 0) ? "#fef3c7" : "#f1f5f9",
                                padding: "20px",
                                borderRadius: "14px",
                                border: (pendingReviews.length + pendingArticles.length > 0) ? "1.5px solid #D29D2B" : "1px solid #e2e8f0"
                            }}>
                                <div style={{ fontSize: "12px", color: "#92400e", fontWeight: "700", textTransform: "uppercase" }}>⏳ Urgent Queue</div>
                                <div style={{ fontSize: "32px", fontWeight: "800", color: "#92400e", marginTop: "4px" }}>
                                    {pendingReviews.length + pendingArticles.length}
                                </div>
                                <div style={{ fontSize: "12px", color: "#b45309", marginTop: "4px" }}>Items Awaiting Decision</div>
                            </div>
                        </div>

                        {/* Navigation Tabs Bar */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "12px",
                            borderBottom: "2px solid #e5e3db",
                            marginBottom: "24px"
                        }}>
                            <div style={{
                                display: "flex",
                                gap: "4px",
                                overflowX: "auto",
                                whiteSpace: "nowrap",
                                WebkitOverflowScrolling: "touch"
                            }}>
                                <button
                                    onClick={() => { setActiveTab('queue'); setSearchQuery(''); setFilterStatus('all'); }}
                                    style={{
                                        padding: "12px 18px",
                                        minHeight: "44px",
                                        border: "none",
                                        background: "none",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        color: activeTab === 'queue' ? "#162d20" : "#64748b",
                                        borderBottom: activeTab === 'queue' ? "3px solid #162d20" : "3px solid transparent",
                                        cursor: "pointer",
                                        marginBottom: "-2px",
                                        flexShrink: 0
                                    }}
                                >
                                    ⏳ Queue ({pendingReviews.length + pendingArticles.length})
                                </button>

                                <button
                                    onClick={() => { setActiveTab('leads'); setSearchQuery(''); setFilterStatus('all'); }}
                                    style={{
                                        padding: "12px 18px",
                                        minHeight: "44px",
                                        border: "none",
                                        background: "none",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        color: activeTab === 'leads' ? "#162d20" : "#64748b",
                                        borderBottom: activeTab === 'leads' ? "3px solid #162d20" : "3px solid transparent",
                                        cursor: "pointer",
                                        marginBottom: "-2px",
                                        flexShrink: 0
                                    }}
                                >
                                    📥 Inquiries ({leads.length})
                                </button>

                                <button
                                    onClick={() => { setActiveTab('reviews'); setSearchQuery(''); setFilterStatus('all'); }}
                                    style={{
                                        padding: "12px 18px",
                                        minHeight: "44px",
                                        border: "none",
                                        background: "none",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        color: activeTab === 'reviews' ? "#162d20" : "#64748b",
                                        borderBottom: activeTab === 'reviews' ? "3px solid #162d20" : "3px solid transparent",
                                        cursor: "pointer",
                                        marginBottom: "-2px",
                                        flexShrink: 0
                                    }}
                                >
                                    ⭐ Reviews ({reviews.length})
                                </button>

                                <button
                                    onClick={() => { setActiveTab('articles'); setSearchQuery(''); setFilterStatus('all'); }}
                                    style={{
                                        padding: "12px 18px",
                                        minHeight: "44px",
                                        border: "none",
                                        background: "none",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        color: activeTab === 'articles' ? "#162d20" : "#64748b",
                                        borderBottom: activeTab === 'articles' ? "3px solid #162d20" : "3px solid transparent",
                                        cursor: "pointer",
                                        marginBottom: "-2px",
                                        flexShrink: 0
                                    }}
                                >
                                    📰 Articles ({articles.length})
                                </button>

                                <button
                                    onClick={() => { setActiveTab('users'); setSearchQuery(''); setFilterStatus('all'); }}
                                    style={{
                                        padding: "12px 18px",
                                        minHeight: "44px",
                                        border: "none",
                                        background: "none",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        color: activeTab === 'users' ? "#162d20" : "#64748b",
                                        borderBottom: activeTab === 'users' ? "3px solid #162d20" : "3px solid transparent",
                                        cursor: "pointer",
                                        marginBottom: "-2px",
                                        flexShrink: 0
                                    }}
                                >
                                    👥 Users ({users.length})
                                </button>

                                <button
                                    onClick={() => { setActiveTab('settings'); setSearchQuery(''); setFilterStatus('all'); }}
                                    style={{
                                        padding: "12px 18px",
                                        minHeight: "44px",
                                        border: "none",
                                        background: "none",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        color: activeTab === 'settings' ? "#162d20" : "#64748b",
                                        borderBottom: activeTab === 'settings' ? "3px solid #162d20" : "3px solid transparent",
                                        cursor: "pointer",
                                        marginBottom: "-2px",
                                        flexShrink: 0
                                    }}
                                >
                                    ⚙️ Site Settings
                                </button>
                            </div>

                            {/* Search and Secondary Actions */}
                            {activeTab !== 'settings' && (
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "8px" }}>
                                    <input
                                        type="text"
                                        placeholder={`Search ${activeTab}...`}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        style={{
                                            padding: "8px 14px",
                                            borderRadius: "20px",
                                            border: "1px solid #cbd5e1",
                                            fontSize: "14px",
                                            minWidth: "200px"
                                        }}
                                    />
                                    {(activeTab === 'reviews' || activeTab === 'articles') && (
                                        <select
                                            value={filterStatus}
                                            onChange={(e) => setFilterStatus(e.target.value)}
                                            style={{
                                                padding: "8px 12px",
                                                borderRadius: "20px",
                                                border: "1px solid #cbd5e1",
                                                fontSize: "13px",
                                                backgroundColor: "#ffffff"
                                            }}
                                        >
                                            <option value="all">All Status</option>
                                            <option value="approved">Approved</option>
                                            <option value="pending">Pending</option>
                                            <option value="rejected">Rejected</option>
                                        </select>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Flash Alerts */}
                        {feedbackMessage && (
                            <div style={{
                                backgroundColor: "#f0fdf4",
                                color: "#15803d",
                                padding: "14px 20px",
                                borderRadius: "10px",
                                fontSize: "14px",
                                marginBottom: "24px",
                                border: "1px solid #86efac",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <span>✓ {feedbackMessage}</span>
                                <button onClick={() => setFeedbackMessage('')} style={{ background: "none", border: "none", cursor: "pointer", color: "#15803d", fontWeight: "700" }}>✕</button>
                            </div>
                        )}

                        {errorMessage && (
                            <div style={{
                                backgroundColor: "#fdf2f2",
                                color: "#b91c1c",
                                padding: "14px 20px",
                                borderRadius: "10px",
                                fontSize: "14px",
                                marginBottom: "24px",
                                border: "1px solid #fca5a5",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <span>⚠️ {errorMessage}</span>
                                <button onClick={() => setErrorMessage('')} style={{ background: "none", border: "none", cursor: "pointer", color: "#b91c1c", fontWeight: "700" }}>✕</button>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 1: URGENT QUEUE                                           */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'queue' && (
                            <div>
                                {pendingReviews.length === 0 && pendingArticles.length === 0 ? (
                                    <div style={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "14px",
                                        padding: "70px 40px",
                                        textAlign: "center",
                                        border: "1px solid #e5e3db"
                                    }}>
                                        <div style={{ fontSize: "40px", marginBottom: "12px" }}>🎉</div>
                                        <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#162d20", margin: "0 0 8px" }}>
                                            Moderation Queue is Clear
                                        </h3>
                                        <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>
                                            All client submissions and executive articles have been reviewed. New submissions will appear here instantly.
                                        </p>
                                    </div>
                                ) : (
                                    <div style={{ display: "grid", gap: "30px" }}>
                                        {/* Pending Reviews */}
                                        {pendingReviews.length > 0 && (
                                            <div>
                                                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", marginBottom: "16px" }}>
                                                    ⭐ Pending Reviews & Testimonials ({pendingReviews.length})
                                                </h3>
                                                <div style={{ display: "grid", gap: "16px" }}>
                                                    {pendingReviews.map((rev) => (
                                                        <div key={rev.id} style={{
                                                            backgroundColor: "#ffffff",
                                                            borderRadius: "12px",
                                                            padding: "24px",
                                                            border: "1.5px solid #D29D2B",
                                                            boxShadow: "0 4px 14px rgba(0,0,0,0.04)"
                                                        }}>
                                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                                                                <div>
                                                                    <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#162d20" }}>
                                                                        {rev.profiles?.full_name || 'Anonymous Client'}
                                                                    </h4>
                                                                    <div style={{ fontSize: "13px", color: "#64748b" }}>
                                                                        {rev.profiles?.role_title || 'Executive Client'} • {new Date(rev.created_at).toLocaleString()}
                                                                    </div>
                                                                </div>
                                                                <div style={{ color: "#d97706", fontSize: "18px" }}>
                                                                    {'★'.repeat(rev.rating || 5)}{'☆'.repeat(5 - (rev.rating || 5))}
                                                                </div>
                                                            </div>

                                                            <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#334155", margin: "0 0 20px" }}>
                                                                "{rev.content}"
                                                            </p>

                                                            <div style={{ display: "flex", gap: "10px" }}>
                                                                <button
                                                                    onClick={() => handleReviewStatus(rev.id, 'approved')}
                                                                    disabled={actionLoading[rev.id]}
                                                                    style={{
                                                                        backgroundColor: "#162d20",
                                                                        color: "#FAF8F2",
                                                                        border: "none",
                                                                        borderRadius: "6px",
                                                                        padding: "8px 20px",
                                                                        fontSize: "14px",
                                                                        fontWeight: "700",
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    ✓ Approve & Publish Live
                                                                </button>
                                                                <button
                                                                    onClick={() => handleReviewStatus(rev.id, 'rejected')}
                                                                    disabled={actionLoading[rev.id]}
                                                                    style={{
                                                                        backgroundColor: "#fef2f2",
                                                                        color: "#991b1b",
                                                                        border: "1px solid #fca5a5",
                                                                        borderRadius: "6px",
                                                                        padding: "8px 18px",
                                                                        fontSize: "14px",
                                                                        fontWeight: "600",
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    ✕ Decline
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Pending Articles */}
                                        {pendingArticles.length > 0 && (
                                            <div>
                                                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", marginBottom: "16px" }}>
                                                    📰 Pending Executive Articles ({pendingArticles.length})
                                                </h3>
                                                <div style={{ display: "grid", gap: "16px" }}>
                                                    {pendingArticles.map((art) => (
                                                        <div key={art.id} style={{
                                                            backgroundColor: "#ffffff",
                                                            borderRadius: "12px",
                                                            padding: "26px",
                                                            border: "1.5px solid #D29D2B",
                                                            boxShadow: "0 4px 14px rgba(0,0,0,0.04)"
                                                        }}>
                                                            <div style={{ marginBottom: "10px" }}>
                                                                <span style={{
                                                                    fontSize: "12px",
                                                                    fontWeight: "700",
                                                                    textTransform: "uppercase",
                                                                    color: "#162d20",
                                                                    backgroundColor: "rgba(30, 59, 43, 0.08)",
                                                                    padding: "3px 10px",
                                                                    borderRadius: "12px",
                                                                    display: "inline-block",
                                                                    marginBottom: "6px"
                                                                }}>
                                                                    {art.category}
                                                                </span>
                                                                <h4 style={{ margin: 0, fontSize: "22px", fontWeight: "800", color: "#162d20" }}>
                                                                    {art.title}
                                                                </h4>
                                                                <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
                                                                    By {art.profiles?.full_name || 'Contributor'} • {new Date(art.created_at).toLocaleString()}
                                                                </div>
                                                            </div>

                                                            <div style={{
                                                                backgroundColor: "#faf9f5",
                                                                borderRadius: "8px",
                                                                padding: "16px",
                                                                fontSize: "14px",
                                                                lineHeight: "1.6",
                                                                color: "#374151",
                                                                margin: "14px 0 18px",
                                                                maxHeight: "180px",
                                                                overflowY: "auto",
                                                                whiteSpace: "pre-wrap"
                                                            }}>
                                                                {art.body}
                                                            </div>

                                                            <div style={{ display: "flex", gap: "10px" }}>
                                                                <button
                                                                    onClick={() => handleArticleStatus(art.id, 'approved')}
                                                                    disabled={actionLoading[art.id]}
                                                                    style={{
                                                                        backgroundColor: "#162d20",
                                                                        color: "#FAF8F2",
                                                                        border: "none",
                                                                        borderRadius: "6px",
                                                                        padding: "8px 20px",
                                                                        fontSize: "14px",
                                                                        fontWeight: "700",
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    ✓ Approve & Publish to Community
                                                                </button>
                                                                <button
                                                                    onClick={() => handleArticleStatus(art.id, 'rejected')}
                                                                    disabled={actionLoading[art.id]}
                                                                    style={{
                                                                        backgroundColor: "#fef2f2",
                                                                        color: "#991b1b",
                                                                        border: "1px solid #fca5a5",
                                                                        borderRadius: "6px",
                                                                        padding: "8px 18px",
                                                                        fontSize: "14px",
                                                                        fontWeight: "600",
                                                                        cursor: "pointer"
                                                                    }}
                                                                >
                                                                    ✕ Decline
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 2: LEADS & INQUIRIES                                      */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'leads' && (
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", margin: 0 }}>
                                        Contact Inquiries & Strategy Leads ({filteredLeads.length})
                                    </h3>
                                    <button
                                        onClick={exportLeadsToCSV}
                                        style={{
                                            backgroundColor: "#162d20",
                                            color: "#FAF8F2",
                                            border: "none",
                                            borderRadius: "20px",
                                            padding: "8px 18px",
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            cursor: "pointer",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        }}
                                    >
                                        📥 Export to CSV / Excel
                                    </button>
                                </div>

                                {filteredLeads.length === 0 ? (
                                    <div style={{ backgroundColor: "#ffffff", padding: "50px 20px", textAlign: "center", borderRadius: "12px", border: "1px solid #e5e3db" }}>
                                        <p style={{ color: "#64748b", margin: 0 }}>No contact inquiries found matching criteria.</p>
                                    </div>
                                ) : (
                                    <div style={{ display: "grid", gap: "14px" }}>
                                        {filteredLeads.map((lead) => (
                                            <div key={lead.id} style={{
                                                backgroundColor: "#ffffff",
                                                borderRadius: "12px",
                                                padding: "20px 24px",
                                                border: "1px solid #e5e3db",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                                            }}>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                                                    <div>
                                                        <h4 style={{ margin: 0, fontSize: "17px", fontWeight: "700", color: "#162d20" }}>
                                                            {lead.name}
                                                        </h4>
                                                        <div style={{ fontSize: "14px", color: "#2563eb", fontWeight: "600", marginTop: "2px" }}>
                                                            <a href={`mailto:${lead.email}`} style={{ textDecoration: "none", color: "inherit" }}>
                                                                ✉️ {lead.email}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <span style={{ fontSize: "12px", color: "#64748b", backgroundColor: "#f1f5f9", padding: "4px 10px", borderRadius: "12px" }}>
                                                        📅 {new Date(lead.created_at).toLocaleString()}
                                                    </span>
                                                </div>

                                                <div style={{
                                                    backgroundColor: "#f8fafc",
                                                    padding: "14px 18px",
                                                    borderRadius: "8px",
                                                    fontSize: "14px",
                                                    lineHeight: "1.6",
                                                    color: "#334155",
                                                    marginBottom: "16px",
                                                    whiteSpace: "pre-wrap"
                                                }}>
                                                    {lead.message}
                                                </div>

                                                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                                                    <a
                                                        href={`mailto:${lead.email}?subject=Regarding your inquiry with Elite Prominence`}
                                                        style={{
                                                            backgroundColor: "#162d20",
                                                            color: "#ffffff",
                                                            padding: "7px 16px",
                                                            borderRadius: "6px",
                                                            fontSize: "13px",
                                                            fontWeight: "700",
                                                            textDecoration: "none",
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "6px"
                                                        }}
                                                    >
                                                        ✉️ Reply via Email
                                                    </a>

                                                    <a
                                                        href={getWhatsAppUrl(`Hi ${lead.name}, thank you for contacting Elite Prominence. We received your message regarding: "${lead.message.slice(0, 60)}..."`)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            backgroundColor: "#25D366",
                                                            color: "#ffffff",
                                                            padding: "7px 16px",
                                                            borderRadius: "6px",
                                                            fontSize: "13px",
                                                            fontWeight: "700",
                                                            textDecoration: "none",
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "6px"
                                                        }}
                                                    >
                                                        💬 WhatsApp
                                                    </a>

                                                    <button
                                                        onClick={() => {
                                                            setDeleteTarget({ type: 'lead', id: lead.id, title: `Inquiry from ${lead.name}` })
                                                            setDeleteModalOpen(true)
                                                        }}
                                                        style={{
                                                            backgroundColor: "transparent",
                                                            color: "#ef4444",
                                                            border: "1px solid #fca5a5",
                                                            padding: "6px 14px",
                                                            borderRadius: "6px",
                                                            fontSize: "13px",
                                                            fontWeight: "600",
                                                            cursor: "pointer",
                                                            marginLeft: "auto"
                                                        }}
                                                    >
                                                        🗑️ Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 3: REVIEWS & TESTIMONIALS                                 */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'reviews' && (
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", margin: 0 }}>
                                        Testimonials & Feedback ({filteredReviews.length})
                                    </h3>
                                    <button
                                        onClick={() => {
                                            setEditingReview(null)
                                            setReviewForm({ content: '', rating: 5, status: 'approved' })
                                            setReviewModalOpen(true)
                                        }}
                                        style={{
                                            backgroundColor: "#162d20",
                                            color: "#FAF8F2",
                                            border: "none",
                                            borderRadius: "20px",
                                            padding: "8px 20px",
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            cursor: "pointer",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        }}
                                    >
                                        ➕ Post Review Directly
                                    </button>
                                </div>

                                <div style={{ display: "grid", gap: "14px" }}>
                                    {filteredReviews.map((rev) => (
                                        <div key={rev.id} style={{
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            padding: "20px 24px",
                                            border: "1px solid #e5e3db"
                                        }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                                                <div>
                                                    <strong style={{ fontSize: "16px", color: "#162d20" }}>{rev.profiles?.full_name || 'Direct Client'}</strong>
                                                    <span style={{ color: "#64748b", fontSize: "13px", marginLeft: "6px" }}>({rev.profiles?.role_title || 'Executive Client'})</span>
                                                    <span style={{ color: "#d97706", marginLeft: "12px", fontSize: "16px" }}>
                                                        {'★'.repeat(rev.rating || 5)}{'☆'.repeat(5 - (rev.rating || 5))}
                                                    </span>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    {renderStatusBadge(rev.status)}
                                                </div>
                                            </div>

                                            <p style={{ margin: "0 0 16px", fontSize: "15px", color: "#334155", lineHeight: "1.6" }}>
                                                "{rev.content}"
                                            </p>

                                            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                                                {rev.status !== 'approved' && (
                                                    <button
                                                        onClick={() => handleReviewStatus(rev.id, 'approved')}
                                                        style={{ backgroundColor: "#162d20", color: "#fff", border: "none", padding: "5px 14px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                                    >
                                                        Approve
                                                    </button>
                                                )}
                                                {rev.status !== 'rejected' && (
                                                    <button
                                                        onClick={() => handleReviewStatus(rev.id, 'rejected')}
                                                        style={{ backgroundColor: "#fef2f2", color: "#991b1b", border: "1px solid #fca5a5", padding: "5px 14px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                                    >
                                                        Reject
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => {
                                                        setEditingReview(rev)
                                                        setReviewForm({ content: rev.content, rating: rev.rating || 5, status: rev.status })
                                                        setReviewModalOpen(true)
                                                    }}
                                                    style={{ backgroundColor: "#f1f5f9", color: "#1e293b", border: "1px solid #cbd5e1", padding: "5px 14px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                                >
                                                    ✏️ Edit
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setDeleteTarget({ type: 'review', id: rev.id, title: `Testimonial from ${rev.profiles?.full_name || 'Client'}` })
                                                        setDeleteModalOpen(true)
                                                    }}
                                                    style={{ backgroundColor: "transparent", color: "#ef4444", border: "1px solid #fca5a5", padding: "5px 14px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer", marginLeft: "auto" }}
                                                >
                                                    🗑️ Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 4: EXECUTIVE ARTICLES                                     */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'articles' && (
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", margin: 0 }}>
                                        Articles & Thought Leadership ({filteredArticles.length})
                                    </h3>
                                    <button
                                        onClick={() => {
                                            setEditingArticle(null)
                                            setArticleForm({ title: '', category: ARTICLE_CATEGORIES[0], body: '', status: 'approved' })
                                            setArticleModalOpen(true)
                                        }}
                                        style={{
                                            backgroundColor: "#162d20",
                                            color: "#FAF8F2",
                                            border: "none",
                                            borderRadius: "20px",
                                            padding: "8px 20px",
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            cursor: "pointer",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        }}
                                    >
                                        ➕ Write & Publish Article
                                    </button>
                                </div>

                                <div style={{ display: "grid", gap: "14px" }}>
                                    {filteredArticles.map((art) => (
                                        <div key={art.id} style={{
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            padding: "22px 26px",
                                            border: "1px solid #e5e3db"
                                        }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                                                <span style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", color: "#162d20", backgroundColor: "#e2e8f0", padding: "2px 8px", borderRadius: "6px" }}>
                                                    {art.category}
                                                </span>
                                                {renderStatusBadge(art.status)}
                                            </div>

                                            <h4 style={{ fontSize: "19px", fontWeight: "800", color: "#162d20", margin: "6px 0" }}>
                                                {art.title}
                                            </h4>
                                            <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "12px" }}>
                                                By {art.profiles?.full_name || 'Editorial Team'} • Submitted: {new Date(art.created_at).toLocaleDateString()}
                                            </div>

                                            <p style={{
                                                fontSize: "14px",
                                                color: "#475569",
                                                lineHeight: "1.6",
                                                maxHeight: "80px",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                marginBottom: "16px"
                                            }}>
                                                {art.body.slice(0, 240)}...
                                            </p>

                                            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                                                {art.status !== 'approved' && (
                                                    <button
                                                        onClick={() => handleArticleStatus(art.id, 'approved')}
                                                        style={{ backgroundColor: "#162d20", color: "#fff", border: "none", padding: "5px 14px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                                    >
                                                        Approve
                                                    </button>
                                                )}
                                                {art.status !== 'rejected' && (
                                                    <button
                                                        onClick={() => handleArticleStatus(art.id, 'rejected')}
                                                        style={{ backgroundColor: "#fef2f2", color: "#991b1b", border: "1px solid #fca5a5", padding: "5px 14px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                                    >
                                                        Reject
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => {
                                                        setEditingArticle(art)
                                                        setArticleForm({ title: art.title, category: art.category, body: art.body, status: art.status })
                                                        setArticleModalOpen(true)
                                                    }}
                                                    style={{ backgroundColor: "#f1f5f9", color: "#1e293b", border: "1px solid #cbd5e1", padding: "5px 14px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                                >
                                                    ✏️ Edit
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setDeleteTarget({ type: 'article', id: art.id, title: art.title })
                                                        setDeleteModalOpen(true)
                                                    }}
                                                    style={{ backgroundColor: "transparent", color: "#ef4444", border: "1px solid #fca5a5", padding: "5px 14px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer", marginLeft: "auto" }}
                                                >
                                                    🗑️ Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 5: USER DIRECTORY & ROLE CONTROLS                         */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'users' && (
                            <div style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "14px",
                                border: "1px solid #e5e3db",
                                overflowX: "auto",
                                WebkitOverflowScrolling: "touch"
                            }}>
                                <table style={{ width: "100%", minWidth: "750px", borderCollapse: "collapse", textAlign: "left" }}>
                                    <thead>
                                        <tr style={{ backgroundColor: "#faf9f5", borderBottom: "1px solid #e5e3db" }}>
                                            <th style={{ padding: "16px 20px", fontSize: "13px", fontWeight: "800", color: "#162d20", textTransform: "uppercase" }}>Executive Name</th>
                                            <th style={{ padding: "16px 20px", fontSize: "13px", fontWeight: "800", color: "#162d20", textTransform: "uppercase" }}>Role Title</th>
                                            <th style={{ padding: "16px 20px", fontSize: "13px", fontWeight: "800", color: "#162d20", textTransform: "uppercase" }}>Role</th>
                                            <th style={{ padding: "16px 20px", fontSize: "13px", fontWeight: "800", color: "#162d20", textTransform: "uppercase" }}>Registered</th>
                                            <th style={{ padding: "16px 20px", fontSize: "13px", fontWeight: "800", color: "#162d20", textTransform: "uppercase", textAlign: "right" }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredUsers.map((u) => (
                                            <tr key={u.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                                                <td style={{ padding: "16px 20px", fontSize: "15px", fontWeight: "700", color: "#162d20" }}>
                                                    {u.full_name || 'Member'}
                                                    {u.id === adminUser?.id && (
                                                        <span style={{ fontSize: "10px", backgroundColor: "#22c55e", color: "#ffffff", padding: "2px 6px", borderRadius: "10px", marginLeft: "6px" }}>YOU</span>
                                                    )}
                                                </td>
                                                <td style={{ padding: "16px 20px", fontSize: "14px", color: "#475569" }}>
                                                    {u.role_title || '—'}
                                                </td>
                                                <td style={{ padding: "16px 20px" }}>
                                                    <span style={{
                                                        backgroundColor: u.role === 'admin' ? "#D29D2B" : "#e2e8f0",
                                                        color: u.role === 'admin' ? "#162d20" : "#334155",
                                                        fontSize: "11px",
                                                        fontWeight: "800",
                                                        padding: "3px 10px",
                                                        borderRadius: "10px",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.5px"
                                                    }}>
                                                        {u.role}
                                                    </span>
                                                </td>
                                                <td style={{ padding: "16px 20px", fontSize: "13px", color: "#64748b" }}>
                                                    {new Date(u.created_at).toLocaleDateString()}
                                                </td>
                                                <td style={{ padding: "16px 20px", textAlign: "right" }}>
                                                    <div style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}>
                                                        <button
                                                            onClick={() => handleToggleRole(u)}
                                                            disabled={actionLoading[`role_${u.id}`]}
                                                            style={{
                                                                backgroundColor: u.role === 'admin' ? "#f1f5f9" : "#D29D2B",
                                                                color: u.role === 'admin' ? "#475569" : "#162d20",
                                                                border: "none",
                                                                borderRadius: "6px",
                                                                padding: "6px 12px",
                                                                fontSize: "12px",
                                                                fontWeight: "700",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            {u.role === 'admin' ? '👤 Demote' : '⭐ Make Admin'}
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                setEditingUser(u)
                                                                setUserForm({ full_name: u.full_name, role_title: u.role_title || '', role: u.role })
                                                                setUserModalOpen(true)
                                                            }}
                                                            style={{
                                                                backgroundColor: "#f8fafc",
                                                                color: "#334155",
                                                                border: "1px solid #cbd5e1",
                                                                borderRadius: "6px",
                                                                padding: "6px 12px",
                                                                fontSize: "12px",
                                                                fontWeight: "600",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            ✏️ Edit
                                                        </button>

                                                        {u.id !== adminUser?.id && (
                                                            <button
                                                                onClick={() => {
                                                                    setDeleteTarget({ type: 'user', id: u.id, title: u.full_name || 'Member Account' })
                                                                    setDeleteModalOpen(true)
                                                                }}
                                                                style={{
                                                                    backgroundColor: "transparent",
                                                                    color: "#ef4444",
                                                                    border: "1px solid #fca5a5",
                                                                    borderRadius: "6px",
                                                                    padding: "6px 10px",
                                                                    fontSize: "12px",
                                                                    fontWeight: "600",
                                                                    cursor: "pointer"
                                                                }}
                                                            >
                                                                🗑️
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 6: SITE SETTINGS & LIVE CONTROLS                          */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'settings' && (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
                                {/* Left Panel: Live WhatsApp & Announcement */}
                                <div style={{ backgroundColor: "#ffffff", padding: "28px", borderRadius: "14px", border: "1px solid #e5e3db" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", marginBottom: "20px" }}>
                                        ⚙️ Live Site Settings
                                    </h3>

                                    <form onSubmit={handleSaveSettings}>
                                        {/* WhatsApp Number Control */}
                                        <div style={{ marginBottom: "24px" }}>
                                            <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#162d20", marginBottom: "6px" }}>
                                                Primary WhatsApp Contact Number
                                            </label>
                                            <input
                                                type="text"
                                                value={settingsForm.whatsapp_number}
                                                onChange={(e) => setSettingsForm(prev => ({ ...prev, whatsapp_number: e.target.value }))}
                                                placeholder="e.g. 8801645441584 or 01645441584"
                                                style={{
                                                    width: "100%",
                                                    padding: "10px 14px",
                                                    borderRadius: "8px",
                                                    border: "1px solid #cbd5e1",
                                                    fontSize: "15px",
                                                    fontFamily: "monospace"
                                                }}
                                            />
                                            <span style={{ fontSize: "12px", color: "#64748b", marginTop: "4px", display: "block" }}>
                                                Updates contact buttons across Header, Mobile Menu, Footer, and Contact Form.
                                            </span>
                                        </div>

                                        <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "24px 0" }} />

                                        {/* Site Announcement Banner Control */}
                                        <div style={{ marginBottom: "20px" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                                                <label style={{ fontSize: "15px", fontWeight: "700", color: "#162d20" }}>
                                                    Top Announcement Banner
                                                </label>
                                                <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={settingsForm.announcement_enabled}
                                                        onChange={(e) => setSettingsForm(prev => ({ ...prev, announcement_enabled: e.target.checked }))}
                                                        style={{ width: "18px", height: "18px", cursor: "pointer" }}
                                                    />
                                                    <span style={{ fontSize: "13px", fontWeight: "700", color: settingsForm.announcement_enabled ? "#16a34a" : "#64748b" }}>
                                                        {settingsForm.announcement_enabled ? "ACTIVE LIVE" : "DISABLED"}
                                                    </span>
                                                </label>
                                            </div>

                                            <div style={{ marginBottom: "14px" }}>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: "4px" }}>
                                                    Banner Text
                                                </label>
                                                <input
                                                    type="text"
                                                    value={settingsForm.announcement_text}
                                                    onChange={(e) => setSettingsForm(prev => ({ ...prev, announcement_text: e.target.value }))}
                                                    placeholder="e.g. Elite Prominence is accepting applications for the Q4 Executive Cohort."
                                                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                                />
                                            </div>

                                            <div style={{ marginBottom: "14px" }}>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: "4px" }}>
                                                    Action Link (optional)
                                                </label>
                                                <input
                                                    type="text"
                                                    value={settingsForm.announcement_link}
                                                    onChange={(e) => setSettingsForm(prev => ({ ...prev, announcement_link: e.target.value }))}
                                                    placeholder="e.g. /contact or /pricing"
                                                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                                />
                                            </div>

                                            <div>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: "4px" }}>
                                                    Banner Background Color
                                                </label>
                                                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                                    <input
                                                        type="color"
                                                        value={settingsForm.announcement_bgColor}
                                                        onChange={(e) => setSettingsForm(prev => ({ ...prev, announcement_bgColor: e.target.value }))}
                                                        style={{ width: "40px", height: "40px", padding: 0, border: "none", cursor: "pointer", borderRadius: "6px" }}
                                                    />
                                                    <span style={{ fontSize: "13px", fontFamily: "monospace", color: "#64748b" }}>
                                                        {settingsForm.announcement_bgColor}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={savingSettings}
                                            style={{
                                                backgroundColor: "#162d20",
                                                color: "#FAF8F2",
                                                border: "none",
                                                borderRadius: "8px",
                                                padding: "12px 24px",
                                                fontSize: "15px",
                                                fontWeight: "800",
                                                cursor: "pointer",
                                                width: "100%",
                                                marginTop: "10px"
                                            }}
                                        >
                                            {savingSettings ? 'Saving Settings...' : '💾 Save & Publish Settings Live'}
                                        </button>
                                    </form>
                                </div>

                                {/* Right Panel: System Infrastructure Status */}
                                <div style={{ backgroundColor: "#ffffff", padding: "28px", borderRadius: "14px", border: "1px solid #e5e3db" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", marginBottom: "20px" }}>
                                        🛡️ Infrastructure Status
                                    </h3>

                                    <div style={{ display: "grid", gap: "16px" }}>
                                        <div style={{ padding: "14px 18px", borderRadius: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <span style={{ fontWeight: "700", color: "#1e293b" }}>Supabase Database</span>
                                                <span style={{ color: "#16a34a", fontWeight: "700", fontSize: "13px" }}>● CONNECTED</span>
                                            </div>
                                            <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#64748b" }}>
                                                RLS Security Active • Real-time Auth Listening
                                            </p>
                                        </div>

                                        <div style={{ padding: "14px 18px", borderRadius: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <span style={{ fontWeight: "700", color: "#1e293b" }}>Brevo SMTP / Email Service</span>
                                                <span style={{ color: "#16a34a", fontWeight: "700", fontSize: "13px" }}>● ACTIVE</span>
                                            </div>
                                            <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#64748b" }}>
                                                Contact form notifications & autoresponders
                                            </p>
                                        </div>

                                        <div style={{ padding: "14px 18px", borderRadius: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <span style={{ fontWeight: "700", color: "#1e293b" }}>Next.js Security Middleware</span>
                                                <span style={{ color: "#16a34a", fontWeight: "700", fontSize: "13px" }}>● ENFORCED</span>
                                            </div>
                                            <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#64748b" }}>
                                                Route protection on `/admin` & `/dashboard`
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: "24px", padding: "16px", borderRadius: "10px", backgroundColor: "#fef9c3", border: "1px solid #fde047" }}>
                                        <h5 style={{ margin: "0 0 6px", color: "#854d0e", fontSize: "14px", fontWeight: "700" }}>
                                            💡 Admin Tip
                                        </h5>
                                        <p style={{ margin: 0, fontSize: "13px", color: "#713f12", lineHeight: "1.5" }}>
                                            Changes to reviews and articles publish directly to the live site. Always verify executive claims and confidentiality before approving.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* MODAL: ADD / EDIT REVIEW                                      */}
                        {/* ------------------------------------------------------------- */}
                        {reviewModalOpen && (
                            <div style={{
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(0,0,0,0.6)",
                                zIndex: 99999,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "20px"
                            }}>
                                <div style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    maxWidth: "540px",
                                    width: "100%",
                                    padding: "30px",
                                    boxShadow: "0 20px 50px rgba(0,0,0,0.2)"
                                }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                                        <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "800", color: "#162d20" }}>
                                            {editingReview ? '✏️ Edit Testimonial' : '➕ Post Direct Testimonial'}
                                        </h3>
                                        <button onClick={() => setReviewModalOpen(false)} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#94a3b8" }}>✕</button>
                                    </div>

                                    <form onSubmit={handleSaveReviewModal}>
                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Star Rating (1 to 5)
                                            </label>
                                            <select
                                                value={reviewForm.rating}
                                                onChange={(e) => setReviewForm(prev => ({ ...prev, rating: Number(e.target.value) }))}
                                                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                                            >
                                                <option value={5}>★★★★★ (5 Stars)</option>
                                                <option value={4}>★★★★☆ (4 Stars)</option>
                                                <option value={3}>★★★☆☆ (3 Stars)</option>
                                                <option value={2}>★★☆☆☆ (2 Stars)</option>
                                                <option value={1}>★☆☆☆☆ (1 Star)</option>
                                            </select>
                                        </div>

                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Publication Status
                                            </label>
                                            <select
                                                value={reviewForm.status}
                                                onChange={(e) => setReviewForm(prev => ({ ...prev, status: e.target.value }))}
                                                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                                            >
                                                <option value="approved">Approved & Published Live</option>
                                                <option value="pending">Pending Review</option>
                                                <option value="rejected">Rejected</option>
                                            </select>
                                        </div>

                                        <div style={{ marginBottom: "20px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Testimonial / Review Content
                                            </label>
                                            <textarea
                                                rows={5}
                                                required
                                                value={reviewForm.content}
                                                onChange={(e) => setReviewForm(prev => ({ ...prev, content: e.target.value }))}
                                                placeholder="Enter testimonial text..."
                                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            />
                                        </div>

                                        <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                                            <button
                                                type="button"
                                                onClick={() => setReviewModalOpen(false)}
                                                style={{ padding: "10px 18px", borderRadius: "6px", border: "1px solid #cbd5e1", background: "none", cursor: "pointer", fontWeight: "600" }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={actionLoading.reviewSave}
                                                style={{ padding: "10px 22px", borderRadius: "6px", border: "none", backgroundColor: "#162d20", color: "#FAF8F2", fontWeight: "700", cursor: "pointer" }}
                                            >
                                                {actionLoading.reviewSave ? 'Saving...' : 'Save Testimonial'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* MODAL: ADD / EDIT ARTICLE                                     */}
                        {/* ------------------------------------------------------------- */}
                        {articleModalOpen && (
                            <div style={{
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(0,0,0,0.6)",
                                zIndex: 99999,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "20px"
                            }}>
                                <div style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    maxWidth: "680px",
                                    width: "100%",
                                    padding: "30px",
                                    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                                    maxHeight: "90vh",
                                    overflowY: "auto"
                                }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                                        <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "800", color: "#162d20" }}>
                                            {editingArticle ? '✏️ Edit Article' : '➕ Write & Publish Executive Article'}
                                        </h3>
                                        <button onClick={() => setArticleModalOpen(false)} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#94a3b8" }}>✕</button>
                                    </div>

                                    <form onSubmit={handleSaveArticleModal}>
                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Article Title
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={articleForm.title}
                                                onChange={(e) => setArticleForm(prev => ({ ...prev, title: e.target.value }))}
                                                placeholder="e.g. Why CHROs Need a Sovereign Personal Brand in 2026"
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px" }}
                                            />
                                        </div>

                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                                            <div>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                    Category
                                                </label>
                                                <select
                                                    value={articleForm.category}
                                                    onChange={(e) => setArticleForm(prev => ({ ...prev, category: e.target.value }))}
                                                    style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                                                >
                                                    {ARTICLE_CATEGORIES.map(cat => (
                                                        <option key={cat} value={cat}>{cat}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                    Publication Status
                                                </label>
                                                <select
                                                    value={articleForm.status}
                                                    onChange={(e) => setArticleForm(prev => ({ ...prev, status: e.target.value }))}
                                                    style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                                                >
                                                    <option value="approved">Approved & Published Live</option>
                                                    <option value="pending">Pending Moderation</option>
                                                    <option value="rejected">Rejected</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: "20px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Article Body (Markdown or Plain Text)
                                            </label>
                                            <textarea
                                                rows={10}
                                                required
                                                value={articleForm.body}
                                                onChange={(e) => setArticleForm(prev => ({ ...prev, body: e.target.value }))}
                                                placeholder="Write full article body here..."
                                                style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px", lineHeight: "1.6" }}
                                            />
                                        </div>

                                        <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                                            <button
                                                type="button"
                                                onClick={() => setArticleModalOpen(false)}
                                                style={{ padding: "10px 18px", borderRadius: "6px", border: "1px solid #cbd5e1", background: "none", cursor: "pointer", fontWeight: "600" }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={actionLoading.articleSave}
                                                style={{ padding: "10px 22px", borderRadius: "6px", border: "none", backgroundColor: "#162d20", color: "#FAF8F2", fontWeight: "700", cursor: "pointer" }}
                                            >
                                                {actionLoading.articleSave ? 'Saving...' : 'Save & Publish Article'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* MODAL: EDIT USER PROFILE                                      */}
                        {/* ------------------------------------------------------------- */}
                        {userModalOpen && (
                            <div style={{
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(0,0,0,0.6)",
                                zIndex: 99999,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "20px"
                            }}>
                                <div style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    maxWidth: "500px",
                                    width: "100%",
                                    padding: "30px",
                                    boxShadow: "0 20px 50px rgba(0,0,0,0.2)"
                                }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                                        <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "800", color: "#162d20" }}>
                                            ✏️ Edit Member Profile
                                        </h3>
                                        <button onClick={() => setUserModalOpen(false)} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#94a3b8" }}>✕</button>
                                    </div>

                                    <form onSubmit={handleSaveUserModal}>
                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={userForm.full_name}
                                                onChange={(e) => setUserForm(prev => ({ ...prev, full_name: e.target.value }))}
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            />
                                        </div>

                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Executive Title
                                            </label>
                                            <input
                                                type="text"
                                                value={userForm.role_title}
                                                onChange={(e) => setUserForm(prev => ({ ...prev, role_title: e.target.value }))}
                                                placeholder="e.g. Chief People Officer, VP Talent"
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            />
                                        </div>

                                        <div style={{ marginBottom: "20px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Account Role
                                            </label>
                                            <select
                                                value={userForm.role}
                                                onChange={(e) => setUserForm(prev => ({ ...prev, role: e.target.value }))}
                                                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                                            >
                                                <option value="user">Regular Member (user)</option>
                                                <option value="admin">Full Administrator (admin)</option>
                                            </select>
                                        </div>

                                        <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                                            <button
                                                type="button"
                                                onClick={() => setUserModalOpen(false)}
                                                style={{ padding: "10px 18px", borderRadius: "6px", border: "1px solid #cbd5e1", background: "none", cursor: "pointer", fontWeight: "600" }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={actionLoading.userSave}
                                                style={{ padding: "10px 22px", borderRadius: "6px", border: "none", backgroundColor: "#162d20", color: "#FAF8F2", fontWeight: "700", cursor: "pointer" }}
                                            >
                                                {actionLoading.userSave ? 'Saving...' : 'Save Profile'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* MODAL: DELETE CONFIRMATION                                    */}
                        {/* ------------------------------------------------------------- */}
                        {deleteModalOpen && (
                            <div style={{
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(0,0,0,0.6)",
                                zIndex: 99999,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "20px"
                            }}>
                                <div style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    maxWidth: "460px",
                                    width: "100%",
                                    padding: "28px",
                                    boxShadow: "0 20px 50px rgba(0,0,0,0.2)"
                                }}>
                                    <div style={{ fontSize: "36px", marginBottom: "10px" }}>⚠️</div>
                                    <h3 style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "800", color: "#991b1b" }}>
                                        Confirm Permanent Deletion
                                    </h3>
                                    <p style={{ margin: "0 0 20px", fontSize: "14px", color: "#475569", lineHeight: "1.5" }}>
                                        Are you sure you want to permanently delete <strong>{deleteTarget?.title}</strong>? This action cannot be undone.
                                    </p>

                                    <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                                        <button
                                            type="button"
                                            onClick={() => setDeleteModalOpen(false)}
                                            style={{ padding: "10px 18px", borderRadius: "6px", border: "1px solid #cbd5e1", background: "none", cursor: "pointer", fontWeight: "600" }}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleExecuteDelete}
                                            disabled={actionLoading.confirmDelete}
                                            style={{ padding: "10px 22px", borderRadius: "6px", border: "none", backgroundColor: "#dc2626", color: "#ffffff", fontWeight: "700", cursor: "pointer" }}
                                        >
                                            {actionLoading.confirmDelete ? 'Deleting...' : 'Yes, Delete Permanently'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </section>
            </Layout>
        </div>
    )
}
