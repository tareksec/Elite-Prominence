'use client'
import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import SupabaseSetupNotice from '@/components/elements/SupabaseSetupNotice'
import { sanitizeText, sanitizeTitle } from '@/lib/sanitize'
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

const COMMON_EXPERTISES = [
    "Executive Presence",
    "Boardroom Governance",
    "C-Suite Succession",
    "Digital Reputation",
    "Thought Leadership",
    "M&A Talent Integration",
    "Employer Branding",
    "Strategic HR",
    "Executive Search Positioning",
    "Keynote Speaking"
]

export default function DashboardPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const configured = isSupabaseConfigured()

    // Active Navigation Tab
    // 'profile' | 'articles' | 'reviews' | 'playbooks'
    const [activeTab, setActiveTab] = useState('profile')

    // Auth & User State
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    // Data lists
    const [myReviews, setMyReviews] = useState([])
    const [myArticles, setMyArticles] = useState([])

    // Detailed Profile Form State
    const [fullName, setFullName] = useState('')
    const [roleTitle, setRoleTitle] = useState('')
    const [company, setCompany] = useState('')
    const [industry, setIndustry] = useState('Enterprise Technology & Services')
    const [location, setLocation] = useState('')
    const [yearsExp, setYearsExp] = useState('15+ Years')
    const [bio, setBio] = useState('')
    const [linkedinUrl, setLinkedinUrl] = useState('')
    const [twitterUrl, setTwitterUrl] = useState('')
    const [websiteUrl, setWebsiteUrl] = useState('')
    const [speakingTopics, setSpeakingTopics] = useState('')
    const [coreExpertise, setCoreExpertise] = useState([])
    const [customTagInput, setCustomTagInput] = useState('')
    const [isPublicDirectory, setIsPublicDirectory] = useState(true)

    const [updatingProfile, setUpdatingProfile] = useState(false)
    const [profileSuccess, setProfileSuccess] = useState('')

    // Article Form State
    const [articleTitle, setArticleTitle] = useState('')
    const [articleCategory, setArticleCategory] = useState(ARTICLE_CATEGORIES[0])
    const [articleBody, setArticleBody] = useState('')
    const [submittingArticle, setSubmittingArticle] = useState(false)
    const [articleSuccess, setArticleSuccess] = useState('')

    // Review Form State
    const [reviewContent, setReviewContent] = useState('')
    const [reviewRating, setReviewRating] = useState(5)
    const [submittingReview, setSubmittingReview] = useState(false)
    const [reviewSuccess, setReviewSuccess] = useState('')

    const [globalError, setGlobalError] = useState('')

    // -------------------------------------------------------------
    // Initial Load & Auth Check
    // -------------------------------------------------------------
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
                    setFullName(profData.full_name || '')
                    setRoleTitle(profData.role_title || '')
                    setCompany(profData.company || '')
                    if (profData.industry) setIndustry(profData.industry)
                    setLocation(profData.location || '')
                    if (profData.years_of_experience) setYearsExp(profData.years_of_experience)
                    setBio(profData.bio || '')
                    setLinkedinUrl(profData.linkedin_url || '')
                    setTwitterUrl(profData.twitter_url || '')
                    setWebsiteUrl(profData.website_url || '')
                    setSpeakingTopics(profData.speaking_topics || '')
                    setIsPublicDirectory(profData.is_public_directory !== false)

                    if (Array.isArray(profData.core_expertise)) {
                        setCoreExpertise(profData.core_expertise)
                    } else if (typeof profData.core_expertise === 'string' && profData.core_expertise.trim()) {
                        setCoreExpertise(profData.core_expertise.split(',').map(s => s.trim()))
                    } else {
                        setCoreExpertise(["Executive Presence", "Thought Leadership"])
                    }
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

    // -------------------------------------------------------------
    // Profile Completeness Calculation
    // -------------------------------------------------------------
    const completeness = useMemo(() => {
        let score = 0
        if (fullName.trim()) score += 15
        if (roleTitle.trim()) score += 15
        if (company.trim()) score += 15
        if (bio.trim().length > 30) score += 20
        if (linkedinUrl.trim()) score += 15
        if (coreExpertise.length > 0) score += 10
        if (location.trim()) score += 10
        return Math.min(score, 100)
    }, [fullName, roleTitle, company, bio, linkedinUrl, coreExpertise, location])

    // -------------------------------------------------------------
    // Handlers
    // -------------------------------------------------------------
    const handleLogout = async () => {
        const supabase = getSupabaseBrowserClient()
        await supabase.auth.signOut()
        router.push('/')
        router.refresh()
    }

    const toggleExpertiseTag = (tag) => {
        setCoreExpertise(prev => {
            if (prev.includes(tag)) {
                return prev.filter(t => t !== tag)
            } else {
                return [...prev, tag]
            }
        })
    }

    const addCustomTag = (e) => {
        e.preventDefault()
        if (!customTagInput.trim()) return
        const clean = customTagInput.trim()
        if (!coreExpertise.includes(clean)) {
            setCoreExpertise(prev => [...prev, clean])
        }
        setCustomTagInput('')
    }

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        setProfileSuccess('')
        setGlobalError('')

        const cleanName = sanitizeTitle(fullName, 100)
        const cleanTitle = sanitizeTitle(roleTitle, 120)
        if (!cleanName) {
            setGlobalError('Executive Name cannot be blank.')
            return
        }

        setUpdatingProfile(true)
        try {
            const supabase = getSupabaseBrowserClient()

            // Try saving with all extended profile columns
            const extendedPayload = {
                full_name: cleanName,
                role_title: cleanTitle,
                company: company.trim(),
                industry: industry,
                location: location.trim(),
                years_of_experience: yearsExp,
                bio: bio.trim(),
                linkedin_url: linkedinUrl.trim(),
                twitter_url: twitterUrl.trim(),
                website_url: websiteUrl.trim(),
                speaking_topics: speakingTopics.trim(),
                core_expertise: coreExpertise,
                is_public_directory: isPublicDirectory
            }

            const { data, error } = await supabase
                .from('profiles')
                .update(extendedPayload)
                .eq('id', user.id)
                .select()
                .single()

            if (error) {
                // If database schema has not added new columns yet, fallback to base fields
                console.warn('Extended profile save fallback:', error.message)
                const fallbackPayload = {
                    full_name: cleanName,
                    role_title: cleanTitle
                }
                const { data: fbData, error: fbErr } = await supabase
                    .from('profiles')
                    .update(fallbackPayload)
                    .eq('id', user.id)
                    .select()
                    .single()

                if (fbErr) throw fbErr

                setProfile({ ...fbData, ...extendedPayload })
                setProfileSuccess('Basic profile updated! (Run the updated SQL in schema.sql in Supabase to permanently store extended bio & social fields in the DB).')
            } else {
                setProfile(data)
                setProfileSuccess('Executive Profile updated successfully! Your public directory card is updated.')
            }

        } catch (err) {
            setGlobalError(err.message || 'Failed to update profile.')
        } finally {
            setUpdatingProfile(false)
        }
    }

    const handleSubmitArticle = async (e) => {
        e.preventDefault()
        setArticleSuccess('')
        setGlobalError('')

        const cleanTitle = sanitizeTitle(articleTitle, 200)
        const cleanBody = sanitizeText(articleBody, 20000)
        if (!cleanTitle || !cleanBody) {
            setGlobalError('Please enter both an article title and content body.')
            return
        }

        setSubmittingArticle(true)
        try {
            const supabase = getSupabaseBrowserClient()
            const { data, error } = await supabase
                .from('articles')
                .insert({
                    user_id: user.id,
                    title: cleanTitle,
                    category: articleCategory,
                    body: cleanBody,
                    status: 'pending'
                })
                .select()
                .single()

            if (error) throw error

            setMyArticles([data, ...myArticles])
            setArticleTitle('')
            setArticleBody('')
            setArticleSuccess('Your thought leadership article was submitted to the Elite Prominence Editorial Board! It will appear on your public profile and the Community page once approved.')
            setActiveTab('articles')
        } catch (err) {
            setGlobalError(err.message)
        } finally {
            setSubmittingArticle(false)
        }
    }

    const handleSubmitReview = async (e) => {
        e.preventDefault()
        setReviewSuccess('')
        setGlobalError('')

        const cleanContent = sanitizeText(reviewContent, 2000)
        if (!cleanContent) {
            setGlobalError('Please enter testimonial content.')
            return
        }

        setSubmittingReview(true)
        try {
            const supabase = getSupabaseBrowserClient()
            const { data, error } = await supabase
                .from('reviews')
                .insert({
                    user_id: user.id,
                    content: cleanContent,
                    rating: parseInt(reviewRating),
                    status: 'pending'
                })
                .select()
                .single()

            if (error) throw error

            setMyReviews([data, ...myReviews])
            setReviewContent('')
            setReviewRating(5)
            setReviewSuccess('Your testimonial was submitted! It is in moderation and will appear publicly once approved.')
            setActiveTab('reviews')
        } catch (err) {
            setGlobalError(err.message)
        } finally {
            setSubmittingReview(false)
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
                padding: "3px 10px",
                borderRadius: "14px",
                fontSize: "11px",
                fontWeight: "800",
                backgroundColor: bg,
                color: color,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
            }}>
                {text}
            </span>
        )
    }

    const initials = (fullName || profile?.full_name || 'EP')
        .split(' ')
        .map(n => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()

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
                        {!configured && <SupabaseSetupNotice feature="User Dashboard & Executive Portal" />}

                        {/* Error Redirect Notification */}
                        {searchParams.get('error') === 'unauthorized_admin' && (
                            <div style={{
                                backgroundColor: "#fef2f2",
                                border: "1px solid #f87171",
                                color: "#991b1b",
                                padding: "14px 20px",
                                borderRadius: "10px",
                                marginBottom: "24px",
                                fontSize: "14px"
                            }}>
                                <strong>Access Denied:</strong> Administrative privileges are required to access the Admin Panel.
                            </div>
                        )}

                        {/* Top Executive Header Bar */}
                        <div style={{
                            backgroundColor: "#162d20",
                            color: "#FAF8F2",
                            padding: "32px 36px",
                            borderRadius: "18px",
                            marginBottom: "28px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "20px",
                            boxShadow: "0 10px 30px rgba(22, 45, 32, 0.15)",
                            border: "1px solid rgba(210, 157, 43, 0.25)"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                                <div style={{
                                    width: "68px",
                                    height: "68px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FAF8F2",
                                    color: "#162d20",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "24px",
                                    fontWeight: "800",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                    flexShrink: 0
                                }}>
                                    {initials}
                                </div>
                                <div>
                                    <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#D29D2B", fontWeight: "800", marginBottom: "4px" }}>
                                        Verified Member Studio
                                    </div>
                                    <h1 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: "800", color: "#ffffff", margin: 0 }}>
                                        {fullName || profile?.full_name || 'Executive Member'}
                                    </h1>
                                    <p style={{ margin: "4px 0 0", color: "#c1cfc5", fontSize: "15px" }}>
                                        {roleTitle || profile?.role_title || 'Senior Executive'} {company ? `• ${company}` : ''}
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                                {user?.id && (
                                    <Link
                                        href={`/community/${user.id}`}
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
                                            fontSize: "13px",
                                            textDecoration: "none"
                                        }}
                                    >
                                        🌐 View My Public Profile ↗
                                    </Link>
                                )}

                                {profile?.role === 'admin' && (
                                    <Link
                                        href="/admin"
                                        style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                                            color: "#ffffff",
                                            border: "1px solid rgba(255, 255, 255, 0.3)",
                                            padding: "10px 20px",
                                            minHeight: "44px",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            borderRadius: "30px",
                                            fontWeight: "700",
                                            fontSize: "13px",
                                            textDecoration: "none"
                                        }}
                                    >
                                        🛡️ Admin Console
                                    </Link>
                                )}

                                <button
                                    onClick={handleLogout}
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "#cbd5e1",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        padding: "10px 18px",
                                        minHeight: "44px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        borderRadius: "30px",
                                        fontWeight: "600",
                                        fontSize: "13px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>

                        {/* Profile Completeness Bar */}
                        <div style={{
                            backgroundColor: "#ffffff",
                            padding: "20px 26px",
                            borderRadius: "14px",
                            border: "1px solid #e5e3db",
                            marginBottom: "28px",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.03)"
                        }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                                <span style={{ fontSize: "14px", fontWeight: "700", color: "#162d20" }}>
                                    Executive Profile Completeness: <strong>{completeness}%</strong>
                                </span>
                                <span style={{ fontSize: "12px", color: completeness === 100 ? "#16a34a" : "#d97706", fontWeight: "700" }}>
                                    {completeness === 100 ? "✓ Ready for Google Search & Directory Syndication" : "Complete bio and LinkedIn for maximum reach"}
                                </span>
                            </div>
                            <div style={{ width: "100%", height: "8px", backgroundColor: "#f1f5f9", borderRadius: "6px", overflow: "hidden" }}>
                                <div style={{
                                    width: `${completeness}%`,
                                    height: "100%",
                                    backgroundColor: completeness === 100 ? "#22c55e" : "#D29D2B",
                                    borderRadius: "6px",
                                    transition: "width 0.4s ease"
                                }}></div>
                            </div>
                        </div>

                        {/* Flash Alerts */}
                        {profileSuccess && (
                            <div style={{
                                backgroundColor: "#f0fdf4",
                                color: "#15803d",
                                padding: "14px 20px",
                                borderRadius: "10px",
                                fontSize: "14px",
                                marginBottom: "24px",
                                border: "1px solid #86efac"
                            }}>
                                ✓ {profileSuccess}
                            </div>
                        )}

                        {globalError && (
                            <div style={{
                                backgroundColor: "#fdf2f2",
                                color: "#b91c1c",
                                padding: "14px 20px",
                                borderRadius: "10px",
                                fontSize: "14px",
                                marginBottom: "24px",
                                border: "1px solid #fca5a5"
                            }}>
                                ⚠️ {globalError}
                            </div>
                        )}

                        {/* Navigation Tabs */}
                        <div style={{
                            display: "flex",
                            gap: "8px",
                            borderBottom: "2px solid #e5e3db",
                            marginBottom: "28px",
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            WebkitOverflowScrolling: "touch"
                        }}>
                            <button
                                onClick={() => setActiveTab('profile')}
                                style={{
                                    padding: "12px 20px",
                                    minHeight: "44px",
                                    border: "none",
                                    background: "none",
                                    fontSize: "15px",
                                    fontWeight: "700",
                                    color: activeTab === 'profile' ? "#162d20" : "#64748b",
                                    borderBottom: activeTab === 'profile' ? "3px solid #162d20" : "3px solid transparent",
                                    cursor: "pointer",
                                    marginBottom: "-2px"
                                }}
                            >
                                👤 Executive Profile Studio
                            </button>

                            <button
                                onClick={() => setActiveTab('articles')}
                                style={{
                                    padding: "12px 20px",
                                    minHeight: "44px",
                                    border: "none",
                                    background: "none",
                                    fontSize: "15px",
                                    fontWeight: "700",
                                    color: activeTab === 'articles' ? "#162d20" : "#64748b",
                                    borderBottom: activeTab === 'articles' ? "3px solid #162d20" : "3px solid transparent",
                                    cursor: "pointer",
                                    marginBottom: "-2px"
                                }}
                            >
                                📰 Thought Leadership Articles ({myArticles.length})
                            </button>

                            <button
                                onClick={() => setActiveTab('reviews')}
                                style={{
                                    padding: "12px 20px",
                                    minHeight: "44px",
                                    border: "none",
                                    background: "none",
                                    fontSize: "15px",
                                    fontWeight: "700",
                                    color: activeTab === 'reviews' ? "#162d20" : "#64748b",
                                    borderBottom: activeTab === 'reviews' ? "3px solid #162d20" : "3px solid transparent",
                                    cursor: "pointer",
                                    marginBottom: "-2px"
                                }}
                            >
                                ⭐ Client Testimonials ({myReviews.length})
                            </button>

                            <button
                                onClick={() => setActiveTab('playbooks')}
                                style={{
                                    padding: "12px 20px",
                                    minHeight: "44px",
                                    border: "none",
                                    background: "none",
                                    fontSize: "15px",
                                    fontWeight: "700",
                                    color: activeTab === 'playbooks' ? "#162d20" : "#64748b",
                                    borderBottom: activeTab === 'playbooks' ? "3px solid #162d20" : "3px solid transparent",
                                    cursor: "pointer",
                                    marginBottom: "-2px"
                                }}
                            >
                                🧭 Executive Playbooks & Advisory
                            </button>
                        </div>

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 1: DETAILED EXECUTIVE PROFILE STUDIO                      */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'profile' && (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px", alignItems: "start" }}>

                                {/* Form Column */}
                                <div style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    padding: "36px 32px",
                                    border: "1px solid #e5e3db",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)"
                                }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", marginBottom: "6px" }}>
                                        Executive Profile Details
                                    </h3>
                                    <p style={{ fontSize: "14px", color: "#64748b", margin: "0 0 24px" }}>
                                        These credentials power your public profile on Elite Prominence and sync with executive search algorithms.
                                    </p>

                                    <form onSubmit={handleUpdateProfile}>
                                        {/* Name & Title */}
                                        <div style={{ marginBottom: "18px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                placeholder="e.g. Eleanor Vance"
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            />
                                        </div>

                                        <div style={{ marginBottom: "18px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Executive Title *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={roleTitle}
                                                onChange={(e) => setRoleTitle(e.target.value)}
                                                placeholder="e.g. Chief Human Resources Officer / VP People"
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            />
                                        </div>

                                        {/* Company & Industry */}
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "18px" }}>
                                            <div>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                    Current Company / Board
                                                </label>
                                                <input
                                                    type="text"
                                                    value={company}
                                                    onChange={(e) => setCompany(e.target.value)}
                                                    placeholder="e.g. GlobalTech Solutions"
                                                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                                />
                                            </div>

                                            <div>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                    Industry Sector
                                                </label>
                                                <input
                                                    type="text"
                                                    value={industry}
                                                    onChange={(e) => setIndustry(e.target.value)}
                                                    placeholder="e.g. Technology & SaaS"
                                                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                                />
                                            </div>
                                        </div>

                                        {/* Location & Experience */}
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "18px" }}>
                                            <div>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                    Location (City, Country)
                                                </label>
                                                <input
                                                    type="text"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    placeholder="e.g. London, UK or New York"
                                                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                                />
                                            </div>

                                            <div>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                    Leadership Experience
                                                </label>
                                                <select
                                                    value={yearsExp}
                                                    onChange={(e) => setYearsExp(e.target.value)}
                                                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                                >
                                                    <option value="5-10 Years">5–10 Years</option>
                                                    <option value="10-15 Years">10–15 Years</option>
                                                    <option value="15+ Years">15+ Years</option>
                                                    <option value="20+ Years">20+ Years (Senior Authority)</option>
                                                    <option value="25+ Years">25+ Years (Board Veteran)</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Executive Bio */}
                                        <div style={{ marginBottom: "18px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Executive Biography & Leadership Philosophy
                                            </label>
                                            <textarea
                                                rows={5}
                                                value={bio}
                                                onChange={(e) => setBio(e.target.value)}
                                                placeholder="Provide an overview of your operational leadership journey, governance focus, and career milestones..."
                                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px", lineHeight: "1.6" }}
                                            />
                                        </div>

                                        {/* Personal Branding Links */}
                                        <div style={{ marginBottom: "18px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                LinkedIn Profile URL
                                            </label>
                                            <input
                                                type="url"
                                                value={linkedinUrl}
                                                onChange={(e) => setLinkedinUrl(e.target.value)}
                                                placeholder="https://www.linkedin.com/in/your-profile"
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            />
                                        </div>

                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "18px" }}>
                                            <div>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                    Personal / Advisory Website
                                                </label>
                                                <input
                                                    type="url"
                                                    value={websiteUrl}
                                                    onChange={(e) => setWebsiteUrl(e.target.value)}
                                                    placeholder="https://yourname.com"
                                                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                                />
                                            </div>

                                            <div>
                                                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                    Twitter / X Handle
                                                </label>
                                                <input
                                                    type="text"
                                                    value={twitterUrl}
                                                    onChange={(e) => setTwitterUrl(e.target.value)}
                                                    placeholder="@handle"
                                                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                                />
                                            </div>
                                        </div>

                                        {/* Core Competencies & Expertise Tags */}
                                        <div style={{ marginBottom: "20px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "6px" }}>
                                                Core Strategic Domains (Click to toggle)
                                            </label>
                                            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "10px" }}>
                                                {COMMON_EXPERTISES.map((tag) => {
                                                    const selected = coreExpertise.includes(tag)
                                                    return (
                                                        <button
                                                            key={tag}
                                                            type="button"
                                                            onClick={() => toggleExpertiseTag(tag)}
                                                            style={{
                                                                backgroundColor: selected ? "#162d20" : "#f1f5f9",
                                                                color: selected ? "#ffffff" : "#475569",
                                                                border: selected ? "1px solid #162d20" : "1px solid #e2e8f0",
                                                                padding: "4px 12px",
                                                                borderRadius: "16px",
                                                                fontSize: "12px",
                                                                fontWeight: "700",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            {selected ? "✓ " : "+ "}{tag}
                                                        </button>
                                                    )
                                                })}
                                            </div>

                                            {/* Custom tag add */}
                                            <div style={{ display: "flex", gap: "8px" }}>
                                                <input
                                                    type="text"
                                                    value={customTagInput}
                                                    onChange={(e) => setCustomTagInput(e.target.value)}
                                                    placeholder="Add custom domain tag..."
                                                    style={{ flex: 1, padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={addCustomTag}
                                                    style={{ backgroundColor: "#f1f5f9", color: "#1e293b", border: "1px solid #cbd5e1", padding: "8px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                                                >
                                                    Add Tag
                                                </button>
                                            </div>
                                        </div>

                                        {/* Keynote Topics */}
                                        <div style={{ marginBottom: "22px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Keynote & Advisory Mandate Topics
                                            </label>
                                            <input
                                                type="text"
                                                value={speakingTopics}
                                                onChange={(e) => setSpeakingTopics(e.target.value)}
                                                placeholder="e.g. The Sovereign Leader in AI, Boardroom Culture Architecture"
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            />
                                        </div>

                                        {/* Directory Privacy Toggle */}
                                        <div style={{ marginBottom: "26px", padding: "14px 18px", borderRadius: "10px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                                            <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                                                <input
                                                    type="checkbox"
                                                    checked={isPublicDirectory}
                                                    onChange={(e) => setIsPublicDirectory(e.target.checked)}
                                                    style={{ width: "18px", height: "18px" }}
                                                />
                                                <div>
                                                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#162d20" }}>
                                                        Show Profile in Public Executive Directory
                                                    </div>
                                                    <div style={{ fontSize: "12px", color: "#64748b" }}>
                                                        Enables your card and published perspectives on the `/community` directory page.
                                                    </div>
                                                </div>
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={updatingProfile}
                                            style={{
                                                backgroundColor: "#162d20",
                                                color: "#FAF8F2",
                                                border: "none",
                                                borderRadius: "8px",
                                                padding: "14px 28px",
                                                fontSize: "15px",
                                                fontWeight: "800",
                                                cursor: "pointer",
                                                width: "100%",
                                                boxShadow: "0 4px 14px rgba(22, 45, 32, 0.2)"
                                            }}
                                        >
                                            {updatingProfile ? 'Saving Executive Profile...' : '💾 Save & Update Executive Profile'}
                                        </button>
                                    </form>
                                </div>

                                {/* Live Card Preview Column */}
                                <div>
                                    <div style={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "16px",
                                        padding: "30px 26px",
                                        border: "1.5px solid #D29D2B",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                                        position: "sticky",
                                        top: "20px"
                                    }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                                            <span style={{
                                                backgroundColor: "rgba(210, 157, 43, 0.15)",
                                                color: "#92400e",
                                                fontSize: "11px",
                                                fontWeight: "800",
                                                padding: "3px 10px",
                                                borderRadius: "10px",
                                                textTransform: "uppercase"
                                            }}>
                                                Live Directory Preview
                                            </span>
                                            {user?.id && (
                                                <Link
                                                    href={`/community/${user.id}`}
                                                    target="_blank"
                                                    style={{ fontSize: "12px", color: "#162d20", fontWeight: "700", textDecoration: "underline" }}
                                                >
                                                    Open Full Page ↗
                                                </Link>
                                            )}
                                        </div>

                                        {/* Card Header */}
                                        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                                            <div style={{
                                                width: "58px",
                                                height: "58px",
                                                borderRadius: "50%",
                                                backgroundColor: "#162d20",
                                                color: "#D29D2B",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "22px",
                                                fontWeight: "800",
                                                flexShrink: 0
                                            }}>
                                                {initials}
                                            </div>
                                            <div>
                                                <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "800", color: "#162d20" }}>
                                                    {fullName || 'Your Executive Name'}
                                                </h4>
                                                <div style={{ fontSize: "13px", color: "#64748b", fontStyle: "italic", marginTop: "2px" }}>
                                                    {roleTitle || 'Executive Title'} {company ? `• ${company}` : ''}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Metadata */}
                                        <div style={{ display: "flex", gap: "10px", fontSize: "12px", color: "#64748b", marginBottom: "14px", flexWrap: "wrap" }}>
                                            {location && <span>📍 {location}</span>}
                                            {industry && <span>🏢 {industry}</span>}
                                            <span>⏱️ {yearsExp}</span>
                                        </div>

                                        {/* Bio Snippet */}
                                        <p style={{
                                            fontSize: "13px",
                                            lineHeight: "1.6",
                                            color: "#334155",
                                            backgroundColor: "#faf9f5",
                                            padding: "12px 14px",
                                            borderRadius: "8px",
                                            marginBottom: "16px"
                                        }}>
                                            {bio ? (bio.length > 180 ? bio.slice(0, 180) + '...' : bio) : 'Your strategic executive bio will appear here, summarizing your leadership worldview and board experience.'}
                                        </p>

                                        {/* Tags */}
                                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "18px" }}>
                                            {coreExpertise.slice(0, 4).map((tag, idx) => (
                                                <span key={idx} style={{
                                                    backgroundColor: "#FAF8F2",
                                                    color: "#162d20",
                                                    border: "1px solid #e5e3db",
                                                    padding: "3px 10px",
                                                    borderRadius: "12px",
                                                    fontSize: "11px",
                                                    fontWeight: "700"
                                                }}>
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Social Links */}
                                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", borderTop: "1px solid #f1f5f9", paddingTop: "14px" }}>
                                            {linkedinUrl && (
                                                <span style={{ fontSize: "12px", color: "#0077B5", fontWeight: "700" }}>
                                                    in Verified
                                                </span>
                                            )}
                                            {websiteUrl && (
                                                <span style={{ fontSize: "12px", color: "#162d20", fontWeight: "700" }}>
                                                    🌐 Advisory Site
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 2: THOUGHT LEADERSHIP ARTICLES                            */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'articles' && (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
                                {/* Left: My Submissions */}
                                <div>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", marginBottom: "16px" }}>
                                        My Published & Pending Articles ({myArticles.length})
                                    </h3>

                                    {myArticles.length === 0 ? (
                                        <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "14px", textAlign: "center", border: "1px solid #e5e3db" }}>
                                            <div style={{ fontSize: "36px", marginBottom: "10px" }}>✍️</div>
                                            <p style={{ margin: 0, color: "#64748b", fontSize: "15px" }}>
                                                You haven't submitted any thought leadership articles yet. Use the writer studio on the right to publish your first executive article.
                                            </p>
                                        </div>
                                    ) : (
                                        <div style={{ display: "grid", gap: "16px" }}>
                                            {myArticles.map((art) => (
                                                <div key={art.id} style={{
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: "14px",
                                                    padding: "24px",
                                                    border: "1px solid #e5e3db",
                                                    boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
                                                }}>
                                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                                                        <span style={{
                                                            fontSize: "11px",
                                                            fontWeight: "800",
                                                            textTransform: "uppercase",
                                                            color: "#162d20",
                                                            backgroundColor: "rgba(30, 59, 43, 0.08)",
                                                            padding: "3px 8px",
                                                            borderRadius: "8px"
                                                        }}>
                                                            {art.category}
                                                        </span>
                                                        {renderStatusBadge(art.status)}
                                                    </div>

                                                    <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#162d20", margin: "6px 0 8px" }}>
                                                        {art.title}
                                                    </h4>

                                                    <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: "0 0 12px" }}>
                                                        {art.body.slice(0, 160)}...
                                                    </p>

                                                    <div style={{ fontSize: "12px", color: "#64748b" }}>
                                                        Submitted {new Date(art.created_at).toLocaleDateString()}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right: Submit New Article Form */}
                                <div style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    padding: "32px",
                                    border: "1px solid #e5e3db"
                                }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", marginBottom: "6px" }}>
                                        Write Thought Leadership Perspective
                                    </h3>
                                    <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 20px" }}>
                                        Published articles link to your executive profile and appear on the Elite Prominence Community network.
                                    </p>

                                    {articleSuccess && (
                                        <div style={{ backgroundColor: "#f0fdf4", color: "#15803d", padding: "12px 16px", borderRadius: "8px", fontSize: "13px", marginBottom: "18px", border: "1px solid #86efac" }}>
                                            ✓ {articleSuccess}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmitArticle}>
                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Article Title *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={articleTitle}
                                                onChange={(e) => setArticleTitle(e.target.value)}
                                                placeholder="e.g. The Strategic Transition from Operator to Board Advisor"
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            />
                                        </div>

                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Strategic Category
                                            </label>
                                            <select
                                                value={articleCategory}
                                                onChange={(e) => setArticleCategory(e.target.value)}
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            >
                                                {ARTICLE_CATEGORIES.map(cat => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div style={{ marginBottom: "20px" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                                                <label style={{ fontSize: "13px", fontWeight: "700", color: "#162d20" }}>
                                                    Article Content Body *
                                                </label>
                                                <span style={{ fontSize: "12px", color: "#64748b" }}>
                                                    {articleBody.length} characters
                                                </span>
                                            </div>
                                            <textarea
                                                rows={9}
                                                required
                                                value={articleBody}
                                                onChange={(e) => setArticleBody(e.target.value)}
                                                placeholder="Write your article narrative here..."
                                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px", lineHeight: "1.6" }}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={submittingArticle}
                                            style={{
                                                backgroundColor: "#162d20",
                                                color: "#FAF8F2",
                                                border: "none",
                                                borderRadius: "8px",
                                                padding: "12px 24px",
                                                fontSize: "14px",
                                                fontWeight: "800",
                                                cursor: "pointer",
                                                width: "100%"
                                            }}
                                        >
                                            {submittingArticle ? 'Submitting Article...' : '🚀 Submit Article to Editorial Board'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 3: CLIENT TESTIMONIALS & ENDORSEMENTS                     */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'reviews' && (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
                                {/* Left: My Reviews */}
                                <div>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", marginBottom: "16px" }}>
                                        My Endorsements & Reviews ({myReviews.length})
                                    </h3>

                                    {myReviews.length === 0 ? (
                                        <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "14px", textAlign: "center", border: "1px solid #e5e3db" }}>
                                            <div style={{ fontSize: "36px", marginBottom: "10px" }}>⭐</div>
                                            <p style={{ margin: 0, color: "#64748b", fontSize: "15px" }}>
                                                You haven't submitted a client review or advisory endorsement yet.
                                            </p>
                                        </div>
                                    ) : (
                                        <div style={{ display: "grid", gap: "16px" }}>
                                            {myReviews.map((rev) => (
                                                <div key={rev.id} style={{
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: "14px",
                                                    padding: "24px",
                                                    border: "1px solid #e5e3db"
                                                }}>
                                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                                        <span style={{ color: "#d97706", fontSize: "16px" }}>
                                                            {'★'.repeat(rev.rating || 5)}{'☆'.repeat(5 - (rev.rating || 5))}
                                                        </span>
                                                        {renderStatusBadge(rev.status)}
                                                    </div>

                                                    <p style={{ fontSize: "15px", color: "#334155", lineHeight: "1.6", margin: "0 0 12px" }}>
                                                        "{rev.content}"
                                                    </p>

                                                    <div style={{ fontSize: "12px", color: "#64748b" }}>
                                                        Submitted {new Date(rev.created_at).toLocaleDateString()}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right: Submit Review Form */}
                                <div style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    padding: "32px",
                                    border: "1px solid #e5e3db"
                                }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", marginBottom: "6px" }}>
                                        Submit Client Endorsement
                                    </h3>
                                    <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 20px" }}>
                                        Your review will be displayed on the public Feedback page and your executive profile card once approved.
                                    </p>

                                    {reviewSuccess && (
                                        <div style={{ backgroundColor: "#f0fdf4", color: "#15803d", padding: "12px 16px", borderRadius: "8px", fontSize: "13px", marginBottom: "18px", border: "1px solid #86efac" }}>
                                            ✓ {reviewSuccess}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmitReview}>
                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Star Rating
                                            </label>
                                            <select
                                                value={reviewRating}
                                                onChange={(e) => setReviewRating(e.target.value)}
                                                style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px" }}
                                            >
                                                <option value={5}>★★★★★ (5 Stars - Exceptional Service)</option>
                                                <option value={4}>★★★★☆ (4 Stars - Great Impact)</option>
                                                <option value={3}>★★★☆☆ (3 Stars - Satisfactory)</option>
                                            </select>
                                        </div>

                                        <div style={{ marginBottom: "20px" }}>
                                            <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#162d20", marginBottom: "4px" }}>
                                                Endorsement Narrative *
                                            </label>
                                            <textarea
                                                rows={5}
                                                required
                                                value={reviewContent}
                                                onChange={(e) => setReviewContent(e.target.value)}
                                                placeholder="Share your operational experience partnering with Elite Prominence..."
                                                style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px", lineHeight: "1.6" }}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={submittingReview}
                                            style={{
                                                backgroundColor: "#162d20",
                                                color: "#FAF8F2",
                                                border: "none",
                                                borderRadius: "8px",
                                                padding: "12px 24px",
                                                fontSize: "14px",
                                                fontWeight: "800",
                                                cursor: "pointer",
                                                width: "100%"
                                            }}
                                        >
                                            {submittingReview ? 'Submitting Review...' : '⭐ Submit Endorsement'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* ------------------------------------------------------------- */}
                        {/* TAB 4: EXECUTIVE PLAYBOOKS & ADVISORY                         */}
                        {/* ------------------------------------------------------------- */}
                        {activeTab === 'playbooks' && (
                            <div>
                                <div style={{ marginBottom: "24px" }}>
                                    <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#162d20", margin: "0 0 6px" }}>
                                        Executive Career & Personal Authority Toolkits
                                    </h3>
                                    <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>
                                        Curated tactical frameworks designed exclusively for Elite Prominence executive members.
                                    </p>
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "36px" }}>
                                    <div style={{ backgroundColor: "#ffffff", padding: "26px", borderRadius: "16px", border: "1px solid #e5e3db" }}>
                                        <div style={{ fontSize: "28px", marginBottom: "10px" }}>🏛️</div>
                                        <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#162d20", margin: "0 0 8px" }}>
                                            The 90-Day Executive Authority Blueprint
                                        </h4>
                                        <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: "0 0 16px" }}>
                                            How senior leaders systematically build page-one Google search presence, executive bio syndication, and inbound board inquiries.
                                        </p>
                                        <Link href="/blog/how-to-build-a-personal-brand-as-an-hr-leader" style={{ color: "#162d20", fontWeight: "700", fontSize: "13px", textDecoration: "underline" }}>
                                            Read Strategic Guide &rarr;
                                        </Link>
                                    </div>

                                    <div style={{ backgroundColor: "#ffffff", padding: "26px", borderRadius: "16px", border: "1px solid #e5e3db" }}>
                                        <div style={{ fontSize: "28px", marginBottom: "10px" }}>💼</div>
                                        <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#162d20", margin: "0 0 8px" }}>
                                            LinkedIn Architecture for C-Suite Leaders
                                        </h4>
                                        <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: "0 0 16px" }}>
                                            Specific headline formulas, featured asset curation, and engagement protocols that attract executive search recruiters.
                                        </p>
                                        <Link href="/blog/linkedin-strategy-for-senior-hr-professionals" style={{ color: "#162d20", fontWeight: "700", fontSize: "13px", textDecoration: "underline" }}>
                                            Read Strategic Guide &rarr;
                                        </Link>
                                    </div>

                                    <div style={{ backgroundColor: "#ffffff", padding: "26px", borderRadius: "16px", border: "1px solid #e5e3db" }}>
                                        <div style={{ fontSize: "28px", marginBottom: "10px" }}>🔍</div>
                                        <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#162d20", margin: "0 0 8px" }}>
                                            Google Knowledge Graph & Entity Authority
                                        </h4>
                                        <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: "0 0 16px" }}>
                                            Structuring executive digital footprints so Google associates your name with your core operational and boardroom disciplines.
                                        </p>
                                        <Link href="/blog/how-to-rank-on-google-as-an-independent-hr-consultant" style={{ color: "#162d20", fontWeight: "700", fontSize: "13px", textDecoration: "underline" }}>
                                            Read Strategic Guide &rarr;
                                        </Link>
                                    </div>

                                    <div style={{ backgroundColor: "#ffffff", padding: "26px", borderRadius: "16px", border: "1px solid #e5e3db" }}>
                                        <div style={{ fontSize: "28px", marginBottom: "10px" }}>📈</div>
                                        <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#162d20", margin: "0 0 8px" }}>
                                            Executive Brand ROI & Board Placement
                                        </h4>
                                        <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: "0 0 16px" }}>
                                            Translating public thought leadership into non-executive director (NED) seats, speaking engagements, and advisory equity.
                                        </p>
                                        <Link href="/blog/hr-leader-personal-brand-roi" style={{ color: "#162d20", fontWeight: "700", fontSize: "13px", textDecoration: "underline" }}>
                                            Read Strategic Guide &rarr;
                                        </Link>
                                    </div>
                                </div>

                                {/* Advisory Booking Banner */}
                                <div style={{
                                    backgroundColor: "#162d20",
                                    color: "#ffffff",
                                    padding: "36px 40px",
                                    borderRadius: "18px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                    gap: "20px",
                                    border: "1px solid rgba(210, 157, 43, 0.3)"
                                }}>
                                    <div>
                                        <h3 style={{ margin: "0 0 6px", fontSize: "22px", fontWeight: "800", color: "#ffffff" }}>
                                            Schedule an Executive Brand Review
                                        </h3>
                                        <p style={{ margin: 0, color: "#c1cfc5", fontSize: "15px" }}>
                                            Connect directly with Md Tarek and our advisory strategists to audit your digital footprint.
                                        </p>
                                    </div>

                                    <a
                                        href={getWhatsAppUrl("Hi, I am an active Elite Prominence member and would like to schedule a 1-on-1 executive brand review session.")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: "#D29D2B",
                                            color: "#162d20",
                                            padding: "12px 28px",
                                            borderRadius: "30px",
                                            fontWeight: "800",
                                            fontSize: "14px",
                                            textDecoration: "none",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        }}
                                    >
                                        💬 WhatsApp Advisory Session
                                    </a>
                                </div>
                            </div>
                        )}

                    </div>
                </section>
            </Layout>
        </div>
    )
}
