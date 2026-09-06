'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import SupabaseSetupNotice from '@/components/elements/SupabaseSetupNotice'

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

export default function DashboardPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const configured = isSupabaseConfigured()

    const [activeTab, setActiveTab] = useState('submissions') // 'submissions' | 'review' | 'article' | 'profile'
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    // Data
    const [myReviews, setMyReviews] = useState([])
    const [myArticles, setMyArticles] = useState([])

    // Forms
    const [reviewContent, setReviewContent] = useState('')
    const [reviewRating, setReviewRating] = useState(5)
    const [submittingReview, setSubmittingReview] = useState(false)
    const [reviewSuccess, setReviewSuccess] = useState('')

    const [articleTitle, setArticleTitle] = useState('')
    const [articleCategory, setArticleCategory] = useState(ARTICLE_CATEGORIES[0])
    const [articleBody, setArticleBody] = useState('')
    const [submittingArticle, setSubmittingArticle] = useState(false)
    const [articleSuccess, setArticleSuccess] = useState('')

    const [editName, setEditName] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [updatingProfile, setUpdatingProfile] = useState(false)
    const [profileSuccess, setProfileSuccess] = useState('')

    const [globalError, setGlobalError] = useState('')

    useEffect(() => {
        if (!configured) {
            setLoading(false)
            return
        }

        const fetchUserData = async () => {
            try {
                const supabase = getSupabaseBrowserClient()
                const { data: { user: authUser }, error: authErr } = await supabase.auth.getUser()

                if (authErr || !authUser) {
                    router.push('/login?next=/dashboard')
                    return
                }

                setUser(authUser)

                // Fetch Profile
                const { data: profData } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', authUser.id)
                    .single()

                if (profData) {
                    setProfile(profData)
                    setEditName(profData.full_name || '')
                    setEditTitle(profData.role_title || '')
                }

                // Fetch user's reviews
                const { data: revData } = await supabase
                    .from('reviews')
                    .select('*')
                    .eq('user_id', authUser.id)
                    .order('created_at', { ascending: false })

                if (revData) setMyReviews(revData)

                // Fetch user's articles
                const { data: artData } = await supabase
                    .from('articles')
                    .select('*')
                    .eq('user_id', authUser.id)
                    .order('created_at', { ascending: false })

                if (artData) setMyArticles(artData)

            } catch (err) {
                setGlobalError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchUserData()
    }, [configured, router])

    const handleLogout = async () => {
        const supabase = getSupabaseBrowserClient()
        await supabase.auth.signOut()
        router.push('/')
        router.refresh()
    }

    const handleSubmitReview = async (e) => {
        e.preventDefault()
        setReviewSuccess('')
        setGlobalError('')

        if (!reviewContent.trim()) return

        setSubmittingReview(true)
        try {
            const supabase = getSupabaseBrowserClient()
            const { data, error } = await supabase
                .from('reviews')
                .insert({
                    user_id: user.id,
                    content: reviewContent.trim(),
                    rating: parseInt(reviewRating),
                    status: 'pending' // Enforced client & server
                })
                .select()
                .single()

            if (error) throw error

            setMyReviews([data, ...myReviews])
            setReviewContent('')
            setReviewRating(5)
            setReviewSuccess('Your review was submitted! It is currently in moderation and will appear publicly once approved.')
            setActiveTab('submissions')
        } catch (err) {
            setGlobalError(err.message)
        } finally {
            setSubmittingReview(false)
        }
    }

    const handleSubmitArticle = async (e) => {
        e.preventDefault()
        setArticleSuccess('')
        setGlobalError('')

        if (!articleTitle.trim() || !articleBody.trim()) return

        setSubmittingArticle(true)
        try {
            const supabase = getSupabaseBrowserClient()
            const { data, error } = await supabase
                .from('articles')
                .insert({
                    user_id: user.id,
                    title: articleTitle.trim(),
                    category: articleCategory,
                    body: articleBody.trim(),
                    status: 'pending' // Enforced client & server
                })
                .select()
                .single()

            if (error) throw error

            setMyArticles([data, ...myArticles])
            setArticleTitle('')
            setArticleBody('')
            setArticleSuccess('Your thought leadership article was submitted! It will appear on the Community page once approved.')
            setActiveTab('submissions')
        } catch (err) {
            setGlobalError(err.message)
        } finally {
            setSubmittingArticle(false)
        }
    }

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        setProfileSuccess('')
        setGlobalError('')

        setUpdatingProfile(true)
        try {
            const supabase = getSupabaseBrowserClient()
            const { data, error } = await supabase
                .from('profiles')
                .update({
                    full_name: editName.trim(),
                    role_title: editTitle.trim(),
                })
                .eq('id', user.id)
                .select()
                .single()

            if (error) throw error

            setProfile(data)
            setProfileSuccess('Profile updated successfully!')
        } catch (err) {
            setGlobalError(err.message)
        } finally {
            setUpdatingProfile(false)
        }
    }

    const renderStatusBadge = (status) => {
        let bg = "#FEF3C7"
        let color = "#92400E"
        let text = "Pending Review"

        if (status === 'approved') {
            bg = "#D1FAE5"
            color = "#065F46"
            text = "Approved & Live"
        } else if (status === 'rejected') {
            bg = "#FEE2E2"
            color = "#991B1B"
            text = "Declined"
        }

        return (
            <span style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "16px",
                fontSize: "12px",
                fontWeight: "700",
                backgroundColor: bg,
                color: color,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
            }}>
                {text}
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
                    {!configured && <SupabaseSetupNotice feature="User Dashboard & Content Submissions" />}

                    {searchParams.get('error') === 'unauthorized_admin' && (
                        <div style={{
                            backgroundColor: "#fef2f2",
                            border: "1px solid #f87171",
                            color: "#991b1b",
                            padding: "14px 20px",
                            borderRadius: "10px",
                            marginBottom: "24px",
                            fontSize: "15px"
                        }}>
                            <strong>Access Denied:</strong> You do not have administrator permissions to access the Admin Panel.
                        </div>
                    )}

                    {/* Dashboard Header Bar */}
                    <div style={{
                        backgroundColor: "#1e3b2b",
                        color: "#FAF8F2",
                        padding: "32px 36px",
                        borderRadius: "16px",
                        marginBottom: "30px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                        boxShadow: "0 10px 30px rgba(30, 59, 43, 0.15)"
                    }}>
                        <div>
                            <div style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.8, marginBottom: "4px" }}>
                                Executive Portal
                            </div>
                            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#ffffff", margin: 0 }}>
                                {profile?.full_name ? `Welcome, ${profile.full_name}` : 'Welcome, Member'}
                            </h2>
                            <p style={{ margin: "4px 0 0", color: "#d1dec9", fontSize: "16px", fontStyle: "italic" }}>
                                {profile?.role_title || user?.email}
                            </p>
                        </div>

                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                            {profile?.role === 'admin' && (
                                <Link
                                    href="/admin"
                                    style={{
                                        backgroundColor: "#FAF8F2",
                                        color: "#1e3b2b",
                                        padding: "10px 22px",
                                        borderRadius: "30px",
                                        fontWeight: "700",
                                        fontSize: "14px",
                                        textDecoration: "none",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                                    }}
                                >
                                    🛡️ Admin Panel
                                </Link>
                            )}
                            <button
                                onClick={handleLogout}
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                                    color: "#ffffff",
                                    border: "1px solid rgba(255, 255, 255, 0.25)",
                                    padding: "10px 20px",
                                    borderRadius: "30px",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    transition: "all 0.2s"
                                }}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div style={{
                        display: "flex",
                        gap: "8px",
                        borderBottom: "2px solid #e5e3db",
                        marginBottom: "32px",
                        overflowX: "auto"
                    }}>
                        <button
                            onClick={() => setActiveTab('submissions')}
                            style={{
                                padding: "12px 24px",
                                border: "none",
                                background: "none",
                                fontSize: "16px",
                                fontWeight: "700",
                                color: activeTab === 'submissions' ? "#1e3b2b" : "#72777a",
                                borderBottom: activeTab === 'submissions' ? "3px solid #1e3b2b" : "3px solid transparent",
                                cursor: "pointer",
                                fontFamily: "var(--primary-font)",
                                marginBottom: "-2px"
                            }}
                        >
                            📋 My Submissions ({myReviews.length + myArticles.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('review')}
                            style={{
                                padding: "12px 24px",
                                border: "none",
                                background: "none",
                                fontSize: "16px",
                                fontWeight: "700",
                                color: activeTab === 'review' ? "#1e3b2b" : "#72777a",
                                borderBottom: activeTab === 'review' ? "3px solid #1e3b2b" : "3px solid transparent",
                                cursor: "pointer",
                                fontFamily: "var(--primary-font)",
                                marginBottom: "-2px"
                            }}
                        >
                            ✍️ Write a Review
                        </button>
                        <button
                            onClick={() => setActiveTab('article')}
                            style={{
                                padding: "12px 24px",
                                border: "none",
                                background: "none",
                                fontSize: "16px",
                                fontWeight: "700",
                                color: activeTab === 'article' ? "#1e3b2b" : "#72777a",
                                borderBottom: activeTab === 'article' ? "3px solid #1e3b2b" : "3px solid transparent",
                                cursor: "pointer",
                                fontFamily: "var(--primary-font)",
                                marginBottom: "-2px"
                            }}
                        >
                            📝 Submit an Article
                        </button>
                        <button
                            onClick={() => setActiveTab('profile')}
                            style={{
                                padding: "12px 24px",
                                border: "none",
                                background: "none",
                                fontSize: "16px",
                                fontWeight: "700",
                                color: activeTab === 'profile' ? "#1e3b2b" : "#72777a",
                                borderBottom: activeTab === 'profile' ? "3px solid #1e3b2b" : "3px solid transparent",
                                cursor: "pointer",
                                fontFamily: "var(--primary-font)",
                                marginBottom: "-2px"
                            }}
                        >
                            ⚙️ Edit Profile
                        </button>
                    </div>

                    {globalError && (
                        <div style={{
                            backgroundColor: "#fdf2f2",
                            color: "#b91c1c",
                            padding: "14px 20px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            marginBottom: "24px",
                            border: "1px solid #fca5a5"
                        }}>
                            {globalError}
                        </div>
                    )}

                    {/* TAB 1: SUBMISSIONS */}
                    {activeTab === 'submissions' && (
                        <div>
                            {reviewSuccess && (
                                <div style={{
                                    backgroundColor: "#f0fdf4",
                                    color: "#15803d",
                                    padding: "14px 20px",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    marginBottom: "24px",
                                    border: "1px solid #86efac"
                                }}>
                                    {reviewSuccess}
                                </div>
                            )}

                            {articleSuccess && (
                                <div style={{
                                    backgroundColor: "#f0fdf4",
                                    color: "#15803d",
                                    padding: "14px 20px",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    marginBottom: "24px",
                                    border: "1px solid #86efac"
                                }}>
                                    {articleSuccess}
                                </div>
                            )}

                            {/* Reviews Section */}
                            <div style={{ marginBottom: "40px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                                    <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1e3b2b", margin: 0 }}>
                                        My Reviews & Testimonials
                                    </h3>
                                    <button
                                        onClick={() => setActiveTab('review')}
                                        style={{
                                            backgroundColor: "#1e3b2b",
                                            color: "#FAF8F2",
                                            border: "none",
                                            borderRadius: "20px",
                                            padding: "6px 16px",
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            cursor: "pointer"
                                        }}
                                    >
                                        + New Review
                                    </button>
                                </div>

                                {myReviews.length === 0 ? (
                                    <div style={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "12px",
                                        padding: "36px",
                                        textAlign: "center",
                                        color: "#72777a",
                                        border: "1px dashed #dcdad3"
                                    }}>
                                        You haven't submitted any reviews yet. Share your experience with Elite Prominence!
                                    </div>
                                ) : (
                                    <div style={{ display: "grid", gap: "16px" }}>
                                        {myReviews.map((rev) => (
                                            <div key={rev.id} style={{
                                                backgroundColor: "#ffffff",
                                                borderRadius: "12px",
                                                padding: "24px",
                                                border: "1px solid rgba(30, 59, 43, 0.1)",
                                                boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
                                            }}>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                                                    <div>
                                                        <span style={{ color: "#d97706", fontSize: "16px", marginRight: "10px" }}>
                                                            {'★'.repeat(rev.rating || 5)}{'☆'.repeat(5 - (rev.rating || 5))}
                                                        </span>
                                                        <span style={{ fontSize: "13px", color: "#8a9097" }}>
                                                            {new Date(rev.created_at).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                    {renderStatusBadge(rev.status)}
                                                </div>
                                                <p style={{ margin: 0, fontSize: "16px", lineHeight: "1.6", color: "#2d3748" }}>
                                                    "{rev.content}"
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Articles Section */}
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                                    <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1e3b2b", margin: 0 }}>
                                        My Thought Leadership Articles
                                    </h3>
                                    <button
                                        onClick={() => setActiveTab('article')}
                                        style={{
                                            backgroundColor: "#1e3b2b",
                                            color: "#FAF8F2",
                                            border: "none",
                                            borderRadius: "20px",
                                            padding: "6px 16px",
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            cursor: "pointer"
                                        }}
                                    >
                                        + Submit Article
                                    </button>
                                </div>

                                {myArticles.length === 0 ? (
                                    <div style={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "12px",
                                        padding: "36px",
                                        textAlign: "center",
                                        color: "#72777a",
                                        border: "1px dashed #dcdad3"
                                    }}>
                                        You haven't submitted any articles yet. Publish your executive insights to our community!
                                    </div>
                                ) : (
                                    <div style={{ display: "grid", gap: "16px" }}>
                                        {myArticles.map((art) => (
                                            <div key={art.id} style={{
                                                backgroundColor: "#ffffff",
                                                borderRadius: "12px",
                                                padding: "24px",
                                                border: "1px solid rgba(30, 59, 43, 0.1)",
                                                boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
                                            }}>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                                                    <span style={{
                                                        fontSize: "12px",
                                                        fontWeight: "700",
                                                        textTransform: "uppercase",
                                                        color: "#1e3b2b",
                                                        backgroundColor: "rgba(30, 59, 43, 0.08)",
                                                        padding: "3px 10px",
                                                        borderRadius: "12px"
                                                    }}>
                                                        {art.category}
                                                    </span>
                                                    {renderStatusBadge(art.status)}
                                                </div>
                                                <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#1e3b2b", margin: "8px 0" }}>
                                                    {art.title}
                                                </h4>
                                                <p style={{ margin: "0 0 12px", fontSize: "15px", lineHeight: "1.6", color: "#59606a" }}>
                                                    {art.body.slice(0, 180)}{art.body.length > 180 ? '...' : ''}
                                                </p>
                                                <div style={{ fontSize: "13px", color: "#8a9097" }}>
                                                    Submitted: {new Date(art.created_at).toLocaleDateString()}
                                                    {art.published_at && ` • Published: ${new Date(art.published_at).toLocaleDateString()}`}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* TAB 2: WRITE REVIEW */}
                    {activeTab === 'review' && (
                        <div style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            padding: "40px",
                            maxWidth: "700px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                            border: "1px solid rgba(30, 59, 43, 0.1)"
                        }}>
                            <h3 style={{ fontSize: "26px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                Write a Review / Testimonial
                            </h3>
                            <p style={{ fontSize: "15px", color: "#59606a", marginBottom: "28px", fontStyle: "italic" }}>
                                Share your personal branding journey and experience with Elite Prominence. All submissions are reviewed by our administration before appearing on the public Feedback page.
                            </p>

                            <form onSubmit={handleSubmitReview}>
                                <div style={{ marginBottom: "20px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                        Rating (1 to 5 Stars)
                                    </label>
                                    <select
                                        value={reviewRating}
                                        onChange={(e) => setReviewRating(e.target.value)}
                                        style={{
                                            width: "100%",
                                            height: "46px",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "0 14px",
                                            fontSize: "15px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none"
                                        }}
                                    >
                                        <option value="5">★★★★★ — 5 Stars (Exceptional)</option>
                                        <option value="4">★★★★☆ — 4 Stars (Very Good)</option>
                                        <option value="3">★★★☆☆ — 3 Stars (Good)</option>
                                        <option value="2">★★☆☆☆ — 2 Stars (Fair)</option>
                                        <option value="1">★☆☆☆☆ — 1 Star (Needs Improvement)</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: "26px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                        Your Testimonial *
                                    </label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={reviewContent}
                                        onChange={(e) => setReviewContent(e.target.value)}
                                        placeholder="Describe how Elite Prominence elevated your digital presence, executive reputation, or speaking engagements..."
                                        style={{
                                            width: "100%",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "14px 16px",
                                            fontSize: "15px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none",
                                            lineHeight: "1.6"
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submittingReview}
                                    style={{
                                        backgroundColor: "#1e3b2b",
                                        color: "#FAF8F2",
                                        border: "none",
                                        borderRadius: "30px",
                                        padding: "14px 32px",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        cursor: submittingReview ? "not-allowed" : "pointer",
                                        opacity: submittingReview ? 0.7 : 1,
                                        boxShadow: "0 4px 14px rgba(30,59,43,0.2)"
                                    }}
                                >
                                    {submittingReview ? 'Submitting...' : 'Submit for Moderation →'}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* TAB 3: SUBMIT ARTICLE */}
                    {activeTab === 'article' && (
                        <div style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            padding: "40px",
                            maxWidth: "760px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                            border: "1px solid rgba(30, 59, 43, 0.1)"
                        }}>
                            <h3 style={{ fontSize: "26px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                Submit a Thought Leadership Article
                            </h3>
                            <p style={{ fontSize: "15px", color: "#59606a", marginBottom: "28px", fontStyle: "italic" }}>
                                Contribute your executive insights, HR strategies, or leadership reflections. Once approved by our team, your article will be published to the Community Directory.
                            </p>

                            <form onSubmit={handleSubmitArticle}>
                                <div style={{ marginBottom: "20px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                        Article Title *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={articleTitle}
                                        onChange={(e) => setArticleTitle(e.target.value)}
                                        placeholder="e.g. Navigating Executive Visibility in the Era of AI"
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "0 16px",
                                            fontSize: "15px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none"
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: "20px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                        Category
                                    </label>
                                    <select
                                        value={articleCategory}
                                        onChange={(e) => setArticleCategory(e.target.value)}
                                        style={{
                                            width: "100%",
                                            height: "46px",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "0 14px",
                                            fontSize: "15px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none"
                                        }}
                                    >
                                        {ARTICLE_CATEGORIES.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div style={{ marginBottom: "26px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                        Article Content (Markdown or Text) *
                                    </label>
                                    <textarea
                                        required
                                        rows={10}
                                        value={articleBody}
                                        onChange={(e) => setArticleBody(e.target.value)}
                                        placeholder="Write your article here..."
                                        style={{
                                            width: "100%",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "16px",
                                            fontSize: "15px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none",
                                            lineHeight: "1.6"
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submittingArticle}
                                    style={{
                                        backgroundColor: "#1e3b2b",
                                        color: "#FAF8F2",
                                        border: "none",
                                        borderRadius: "30px",
                                        padding: "14px 32px",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        cursor: submittingArticle ? "not-allowed" : "pointer",
                                        opacity: submittingArticle ? 0.7 : 1,
                                        boxShadow: "0 4px 14px rgba(30,59,43,0.2)"
                                    }}
                                >
                                    {submittingArticle ? 'Submitting...' : 'Submit Article for Review →'}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* TAB 4: EDIT PROFILE */}
                    {activeTab === 'profile' && (
                        <div style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            padding: "40px",
                            maxWidth: "600px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                            border: "1px solid rgba(30, 59, 43, 0.1)"
                        }}>
                            <h3 style={{ fontSize: "26px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                Edit Member Profile
                            </h3>
                            <p style={{ fontSize: "15px", color: "#59606a", marginBottom: "28px" }}>
                                Update your public display name and professional credentials.
                            </p>

                            {profileSuccess && (
                                <div style={{
                                    backgroundColor: "#f0fdf4",
                                    color: "#15803d",
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    marginBottom: "20px",
                                    border: "1px solid #86efac"
                                }}>
                                    {profileSuccess}
                                </div>
                            )}

                            <form onSubmit={handleUpdateProfile}>
                                <div style={{ marginBottom: "20px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "0 16px",
                                            fontSize: "15px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none"
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: "26px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1e3b2b", marginBottom: "8px" }}>
                                        Executive Role / Title
                                    </label>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        placeholder="e.g. VP People & Culture at Acme Global"
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "0 16px",
                                            fontSize: "15px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none"
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={updatingProfile}
                                    style={{
                                        backgroundColor: "#1e3b2b",
                                        color: "#FAF8F2",
                                        border: "none",
                                        borderRadius: "30px",
                                        padding: "14px 32px",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        cursor: updatingProfile ? "not-allowed" : "pointer",
                                        opacity: updatingProfile ? 0.7 : 1,
                                        boxShadow: "0 4px 14px rgba(30,59,43,0.2)"
                                    }}
                                >
                                    {updatingProfile ? 'Saving Changes...' : 'Save Profile Changes →'}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
        </div>
    )
}
