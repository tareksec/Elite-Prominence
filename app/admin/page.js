'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import SupabaseSetupNotice from '@/components/elements/SupabaseSetupNotice'

export default function AdminPage() {
    const router = useRouter()
    const configured = isSupabaseConfigured()

    const [adminUser, setAdminUser] = useState(null)
    const [adminProfile, setAdminProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('pending') // 'pending' | 'reviews' | 'articles' | 'users'

    // Moderation Data
    const [pendingReviews, setPendingReviews] = useState([])
    const [pendingArticles, setPendingArticles] = useState([])
    const [allReviews, setAllReviews] = useState([])
    const [allArticles, setAllArticles] = useState([])
    const [allProfiles, setAllProfiles] = useState([])

    const [actionLoading, setActionLoading] = useState({})
    const [feedbackMessage, setFeedbackMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const fetchData = async (supabase, authUser) => {
        try {
            // Fetch Profile to verify role
            const { data: prof, error: pErr } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', authUser.id)
                .single()

            if (pErr || !prof || prof.role !== 'admin') {
                router.push('/dashboard?error=unauthorized_admin')
                return
            }

            setAdminProfile(prof)

            // Fetch Pending Reviews
            const { data: pRevs } = await supabase
                .from('reviews')
                .select('*, profiles:user_id(full_name, role_title)')
                .eq('status', 'pending')
                .order('created_at', { ascending: false })

            if (pRevs) setPendingReviews(pRevs)

            // Fetch Pending Articles
            const { data: pArts } = await supabase
                .from('articles')
                .select('*, profiles:user_id(full_name, role_title)')
                .eq('status', 'pending')
                .order('created_at', { ascending: false })

            if (pArts) setPendingArticles(pArts)

            // Fetch All Reviews
            const { data: aRevs } = await supabase
                .from('reviews')
                .select('*, profiles:user_id(full_name, role_title)')
                .order('created_at', { ascending: false })

            if (aRevs) setAllReviews(aRevs)

            // Fetch All Articles
            const { data: aArts } = await supabase
                .from('articles')
                .select('*, profiles:user_id(full_name, role_title)')
                .order('created_at', { ascending: false })

            if (aArts) setAllArticles(aArts)

            // Fetch All Profiles
            const { data: profs } = await supabase
                .from('profiles')
                .select('*')
                .order('created_at', { ascending: false })

            if (profs) setAllProfiles(profs)

        } catch (err) {
            setErrorMessage(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!configured) {
            setLoading(false)
            return
        }

        const checkAdmin = async () => {
            const supabase = getSupabaseBrowserClient()
            const { data: { user: authUser } } = await supabase.auth.getUser()

            if (!authUser) {
                router.push('/login?next=/admin')
                return
            }

            setAdminUser(authUser)
            await fetchData(supabase, authUser)
        }

        checkAdmin()
    }, [configured, router])

    const handleReviewAction = async (id, newStatus) => {
        setActionLoading(prev => ({ ...prev, [id]: true }))
        setFeedbackMessage('')
        setErrorMessage('')

        try {
            const supabase = getSupabaseBrowserClient()
            const { error } = await supabase
                .from('reviews')
                .update({
                    status: newStatus,
                    reviewed_at: new Date().toISOString(),
                    reviewed_by: adminUser.id
                })
                .eq('id', id)

            if (error) throw error

            setFeedbackMessage(`Review ${newStatus === 'approved' ? 'approved and published live!' : 'rejected.'}`)
            await fetchData(supabase, adminUser)
        } catch (err) {
            setErrorMessage(err.message)
        } finally {
            setActionLoading(prev => ({ ...prev, [id]: false }))
        }
    }

    const handleArticleAction = async (id, newStatus) => {
        setActionLoading(prev => ({ ...prev, [id]: true }))
        setFeedbackMessage('')
        setErrorMessage('')

        try {
            const supabase = getSupabaseBrowserClient()
            const updatePayload = {
                status: newStatus,
            }
            if (newStatus === 'approved') {
                updatePayload.published_at = new Date().toISOString()
            }

            const { error } = await supabase
                .from('articles')
                .update(updatePayload)
                .eq('id', id)

            if (error) throw error

            setFeedbackMessage(`Article ${newStatus === 'approved' ? 'approved and published live to Community!' : 'rejected.'}`)
            await fetchData(supabase, adminUser)
        } catch (err) {
            setErrorMessage(err.message)
        } finally {
            setActionLoading(prev => ({ ...prev, [id]: false }))
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
                padding: "3px 10px",
                borderRadius: "14px",
                fontSize: "12px",
                fontWeight: "700",
                backgroundColor: bg,
                color: color,
                textTransform: "uppercase"
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
                    padding: "100px 0 90px",
                minHeight: "85vh",
                fontFamily: "var(--primary-font)"
            }}>
                <div className="container">
                    {!configured && <SupabaseSetupNotice feature="Admin Moderation Panel" />}

                    {/* Admin Header */}
                    <div style={{
                        backgroundColor: "#162d20",
                        color: "#FAF8F2",
                        padding: "30px 36px",
                        borderRadius: "16px",
                        marginBottom: "30px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "18px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
                    }}>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                                <span style={{
                                    backgroundColor: "#D29D2B",
                                    color: "#1e3b2b",
                                    fontSize: "11px",
                                    fontWeight: "800",
                                    padding: "2px 8px",
                                    borderRadius: "10px",
                                    textTransform: "uppercase"
                                }}>
                                    Administrator
                                </span>
                                <span style={{ fontSize: "14px", color: "#d1dec9" }}>Moderation Console</span>
                            </div>
                            <h2 style={{ fontSize: "30px", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                                Elite Prominence Admin
                            </h2>
                        </div>

                        <div style={{ display: "flex", gap: "12px" }}>
                            <Link
                                href="/dashboard"
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                                    color: "#ffffff",
                                    border: "1px solid rgba(255, 255, 255, 0.25)",
                                    padding: "10px 20px",
                                    borderRadius: "30px",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    textDecoration: "none"
                                }}
                            >
                                &larr; User Dashboard
                            </Link>
                            <Link
                                href="/feedback"
                                target="_blank"
                                style={{
                                    backgroundColor: "#FAF8F2",
                                    color: "#1e3b2b",
                                    padding: "10px 20px",
                                    borderRadius: "30px",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                    textDecoration: "none"
                                }}
                            >
                                View Feedback Page &nearr;
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div style={{
                        display: "flex",
                        gap: "8px",
                        borderBottom: "2px solid #e5e3db",
                        marginBottom: "28px",
                        overflowX: "auto"
                    }}>
                        <button
                            onClick={() => setActiveTab('pending')}
                            style={{
                                padding: "12px 22px",
                                border: "none",
                                background: "none",
                                fontSize: "16px",
                                fontWeight: "700",
                                color: activeTab === 'pending' ? "#1e3b2b" : "#72777a",
                                borderBottom: activeTab === 'pending' ? "3px solid #1e3b2b" : "3px solid transparent",
                                cursor: "pointer",
                                fontFamily: "var(--primary-font)",
                                marginBottom: "-2px"
                            }}
                        >
                            ⏳ Pending Queue ({pendingReviews.length + pendingArticles.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            style={{
                                padding: "12px 22px",
                                border: "none",
                                background: "none",
                                fontSize: "16px",
                                fontWeight: "700",
                                color: activeTab === 'reviews' ? "#1e3b2b" : "#72777a",
                                borderBottom: activeTab === 'reviews' ? "3px solid #1e3b2b" : "3px solid transparent",
                                cursor: "pointer",
                                fontFamily: "var(--primary-font)",
                                marginBottom: "-2px"
                            }}
                        >
                            ⭐ All Reviews ({allReviews.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('articles')}
                            style={{
                                padding: "12px 22px",
                                border: "none",
                                background: "none",
                                fontSize: "16px",
                                fontWeight: "700",
                                color: activeTab === 'articles' ? "#1e3b2b" : "#72777a",
                                borderBottom: activeTab === 'articles' ? "3px solid #1e3b2b" : "3px solid transparent",
                                cursor: "pointer",
                                fontFamily: "var(--primary-font)",
                                marginBottom: "-2px"
                            }}
                        >
                            📰 All Articles ({allArticles.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('users')}
                            style={{
                                padding: "12px 22px",
                                border: "none",
                                background: "none",
                                fontSize: "16px",
                                fontWeight: "700",
                                color: activeTab === 'users' ? "#1e3b2b" : "#72777a",
                                borderBottom: activeTab === 'users' ? "3px solid #1e3b2b" : "3px solid transparent",
                                cursor: "pointer",
                                fontFamily: "var(--primary-font)",
                                marginBottom: "-2px"
                            }}
                        >
                            👥 User Directory ({allProfiles.length})
                        </button>
                    </div>

                    {feedbackMessage && (
                        <div style={{
                            backgroundColor: "#f0fdf4",
                            color: "#15803d",
                            padding: "14px 20px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            marginBottom: "24px",
                            border: "1px solid #86efac"
                        }}>
                            {feedbackMessage}
                        </div>
                    )}

                    {errorMessage && (
                        <div style={{
                            backgroundColor: "#fdf2f2",
                            color: "#b91c1c",
                            padding: "14px 20px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            marginBottom: "24px",
                            border: "1px solid #fca5a5"
                        }}>
                            {errorMessage}
                        </div>
                    )}

                    {/* TAB 1: PENDING QUEUE */}
                    {activeTab === 'pending' && (
                        <div>
                            {pendingReviews.length === 0 && pendingArticles.length === 0 ? (
                                <div style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "14px",
                                    padding: "60px 40px",
                                    textAlign: "center",
                                    border: "1px solid #e5e3db"
                                }}>
                                    <div style={{ fontSize: "36px", marginBottom: "12px" }}>🎉</div>
                                    <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1e3b2b", margin: "0 0 8px" }}>
                                        Moderation Queue is Empty
                                    </h3>
                                    <p style={{ color: "#72777a", margin: 0, fontSize: "15px" }}>
                                        All submitted reviews and articles have been moderated. New submissions will automatically appear here.
                                    </p>
                                </div>
                            ) : (
                                <div style={{ display: "grid", gap: "30px" }}>
                                    {/* Pending Reviews */}
                                    {pendingReviews.length > 0 && (
                                        <div>
                                            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1e3b2b", marginBottom: "16px" }}>
                                                Pending Reviews ({pendingReviews.length})
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
                                                                <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#1e3b2b" }}>
                                                                    {rev.profiles?.full_name || 'Anonymous User'}
                                                                </h4>
                                                                <div style={{ fontSize: "14px", color: "#72777a" }}>
                                                                    {rev.profiles?.role_title || 'Client'} • {new Date(rev.created_at).toLocaleString()}
                                                                </div>
                                                            </div>
                                                            <div style={{ color: "#d97706", fontSize: "18px" }}>
                                                                {'★'.repeat(rev.rating || 5)}{'☆'.repeat(5 - (rev.rating || 5))}
                                                            </div>
                                                        </div>

                                                        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#2d3748", margin: "0 0 20px" }}>
                                                            "{rev.content}"
                                                        </p>

                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            <button
                                                                onClick={() => handleReviewAction(rev.id, 'approved')}
                                                                disabled={actionLoading[rev.id]}
                                                                style={{
                                                                    backgroundColor: "#1e3b2b",
                                                                    color: "#FAF8F2",
                                                                    border: "none",
                                                                    borderRadius: "6px",
                                                                    padding: "8px 20px",
                                                                    fontSize: "14px",
                                                                    fontWeight: "700",
                                                                    cursor: "pointer"
                                                                }}
                                                            >
                                                                ✓ Approve & Publish
                                                            </button>
                                                            <button
                                                                onClick={() => handleReviewAction(rev.id, 'rejected')}
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
                                            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1e3b2b", marginBottom: "16px" }}>
                                                Pending Articles ({pendingArticles.length})
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
                                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                                                            <div>
                                                                <span style={{
                                                                    fontSize: "12px",
                                                                    fontWeight: "700",
                                                                    textTransform: "uppercase",
                                                                    color: "#1e3b2b",
                                                                    backgroundColor: "rgba(30, 59, 43, 0.08)",
                                                                    padding: "3px 10px",
                                                                    borderRadius: "12px",
                                                                    display: "inline-block",
                                                                    marginBottom: "6px"
                                                                }}>
                                                                    {art.category}
                                                                </span>
                                                                <h4 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#1e3b2b" }}>
                                                                    {art.title}
                                                                </h4>
                                                                <div style={{ fontSize: "14px", color: "#72777a", marginTop: "4px" }}>
                                                                    By {art.profiles?.full_name || 'Contributor'} ({art.profiles?.role_title || 'Executive'}) • {new Date(art.created_at).toLocaleString()}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style={{
                                                            backgroundColor: "#faf9f5",
                                                            borderRadius: "8px",
                                                            padding: "16px",
                                                            fontSize: "15px",
                                                            lineHeight: "1.6",
                                                            color: "#374151",
                                                            margin: "16px 0 20px",
                                                            maxHeight: "220px",
                                                            overflowY: "auto",
                                                            whiteSpace: "pre-wrap"
                                                        }}>
                                                            {art.body}
                                                        </div>

                                                        <div style={{ display: "flex", gap: "10px" }}>
                                                            <button
                                                                onClick={() => handleArticleAction(art.id, 'approved')}
                                                                disabled={actionLoading[art.id]}
                                                                style={{
                                                                    backgroundColor: "#1e3b2b",
                                                                    color: "#FAF8F2",
                                                                    border: "none",
                                                                    borderRadius: "6px",
                                                                    padding: "8px 20px",
                                                                    fontSize: "14px",
                                                                    fontWeight: "700",
                                                                    cursor: "pointer"
                                                                }}
                                                            >
                                                                ✓ Approve & Publish Article
                                                            </button>
                                                            <button
                                                                onClick={() => handleArticleAction(art.id, 'rejected')}
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

                    {/* TAB 2: ALL REVIEWS */}
                    {activeTab === 'reviews' && (
                        <div style={{ display: "grid", gap: "16px" }}>
                            {allReviews.map((rev) => (
                                <div key={rev.id} style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    padding: "20px 24px",
                                    border: "1px solid #e5e3db"
                                }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                                        <div>
                                            <strong>{rev.profiles?.full_name}</strong> ({rev.profiles?.role_title || 'Member'})
                                            <span style={{ color: "#d97706", marginLeft: "10px" }}>
                                                {'★'.repeat(rev.rating || 5)}
                                            </span>
                                        </div>
                                        {renderStatusBadge(rev.status)}
                                    </div>
                                    <p style={{ margin: "0 0 12px", fontSize: "15px", color: "#374151" }}>
                                        "{rev.content}"
                                    </p>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        {rev.status !== 'approved' && (
                                            <button
                                                onClick={() => handleReviewAction(rev.id, 'approved')}
                                                style={{ backgroundColor: "#1e3b2b", color: "#fff", border: "none", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                            >
                                                Approve
                                            </button>
                                        )}
                                        {rev.status !== 'rejected' && (
                                            <button
                                                onClick={() => handleReviewAction(rev.id, 'rejected')}
                                                style={{ backgroundColor: "#fef2f2", color: "#991b1b", border: "1px solid #fca5a5", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                            >
                                                Reject
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* TAB 3: ALL ARTICLES */}
                    {activeTab === 'articles' && (
                        <div style={{ display: "grid", gap: "16px" }}>
                            {allArticles.map((art) => (
                                <div key={art.id} style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    padding: "22px 26px",
                                    border: "1px solid #e5e3db"
                                }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#1e3b2b" }}>
                                            {art.category}
                                        </span>
                                        {renderStatusBadge(art.status)}
                                    </div>
                                    <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1e3b2b", margin: "4px 0" }}>
                                        {art.title}
                                    </h4>
                                    <div style={{ fontSize: "13px", color: "#72777a", marginBottom: "12px" }}>
                                        Author: {art.profiles?.full_name} • Submitted: {new Date(art.created_at).toLocaleDateString()}
                                    </div>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        {art.status !== 'approved' && (
                                            <button
                                                onClick={() => handleArticleAction(art.id, 'approved')}
                                                style={{ backgroundColor: "#1e3b2b", color: "#fff", border: "none", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                            >
                                                Approve
                                            </button>
                                        )}
                                        {art.status !== 'rejected' && (
                                            <button
                                                onClick={() => handleArticleAction(art.id, 'rejected')}
                                                style={{ backgroundColor: "#fef2f2", color: "#991b1b", border: "1px solid #fca5a5", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                            >
                                                Reject
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* TAB 4: USERS DIRECTORY */}
                    {activeTab === 'users' && (
                        <div style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            border: "1px solid #e5e3db",
                            overflow: "hidden"
                        }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                                <thead>
                                    <tr style={{ backgroundColor: "#faf9f5", borderBottom: "1px solid #e5e3db" }}>
                                        <th style={{ padding: "14px 20px", fontSize: "14px", fontWeight: "700", color: "#1e3b2b" }}>Name</th>
                                        <th style={{ padding: "14px 20px", fontSize: "14px", fontWeight: "700", color: "#1e3b2b" }}>Executive Title</th>
                                        <th style={{ padding: "14px 20px", fontSize: "14px", fontWeight: "700", color: "#1e3b2b" }}>Role</th>
                                        <th style={{ padding: "14px 20px", fontSize: "14px", fontWeight: "700", color: "#1e3b2b" }}>Registered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allProfiles.map((prof) => (
                                        <tr key={prof.id} style={{ borderBottom: "1px solid #f0eee6" }}>
                                            <td style={{ padding: "14px 20px", fontSize: "15px", fontWeight: "600", color: "#1e3b2b" }}>
                                                {prof.full_name}
                                            </td>
                                            <td style={{ padding: "14px 20px", fontSize: "14px", color: "#59606a" }}>
                                                {prof.role_title || '—'}
                                            </td>
                                            <td style={{ padding: "14px 20px" }}>
                                                <span style={{
                                                    backgroundColor: prof.role === 'admin' ? "#D29D2B" : "#e5e7eb",
                                                    color: prof.role === 'admin' ? "#1e3b2b" : "#374151",
                                                    fontSize: "11px",
                                                    fontWeight: "800",
                                                    padding: "2px 8px",
                                                    borderRadius: "10px",
                                                    textTransform: "uppercase"
                                                }}>
                                                    {prof.role}
                                                </span>
                                            </td>
                                            <td style={{ padding: "14px 20px", fontSize: "14px", color: "#72777a" }}>
                                                {new Date(prof.created_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
        </div>
    )
}
