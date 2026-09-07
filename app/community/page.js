'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import SupabaseSetupNotice from '@/components/elements/SupabaseSetupNotice'

const SAMPLE_COMMUNITY_MEMBERS = [
    {
        id: "member-1",
        full_name: "Eleanor Vance",
        role_title: "Chief Human Resources Officer at GlobalTech",
        approved_articles_count: 2,
        approved_reviews_count: 1,
        articles: [
            {
                id: "art-1",
                title: "From Internal Operator to Industry Authority: The 90-Day Blueprint",
                category: "Executive Presence",
                body: "For senior leaders, your reputation precedes you into every boardroom. But far too many brilliant executives remain invisible outside their immediate organization...",
                published_at: "2026-08-18T12:00:00Z"
            }
        ]
    },
    {
        id: "member-2",
        full_name: "Marcus Sterling",
        role_title: "Managing Director & Executive Talent Advisor",
        approved_articles_count: 1,
        approved_reviews_count: 1,
        articles: [
            {
                id: "art-2",
                title: "Why Google Is Your First Interview for Board Roles",
                category: "Digital Reputation",
                body: "Executive search consultants don't rely on PDF resumes alone anymore. They audit your digital footprint, your published perspectives, and your media citations...",
                published_at: "2026-08-05T09:00:00Z"
            }
        ]
    },
    {
        id: "member-3",
        full_name: "Dr. Aris Thorne",
        role_title: "Senior VP of People Strategy at BioHealth",
        approved_articles_count: 1,
        approved_reviews_count: 1,
        articles: [
            {
                id: "art-3",
                title: "Authentic Executive Voice in the Age of Synthetic Content",
                category: "Thought Leadership",
                body: "In a noisy media ecosystem flooded with automated takes, executive authenticity and lived operational wisdom are the highest currency...",
                published_at: "2026-07-30T15:00:00Z"
            }
        ]
    }
]

export default function CommunityPage() {
    const configured = isSupabaseConfigured()
    const [members, setMembers] = useState(SAMPLE_COMMUNITY_MEMBERS)
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [loading, setLoading] = useState(!configured ? false : true)

    useEffect(() => {
        const loadCommunity = async () => {
            if (!configured) {
                setMembers(SAMPLE_COMMUNITY_MEMBERS)
                setLoading(false)
                return
            }

            try {
                const supabase = getSupabaseBrowserClient()

                // Fetch approved articles
                const { data: approvedArticles, error: artErr } = await supabase
                    .from('articles')
                    .select('id, user_id, title, body, category, published_at')
                    .eq('status', 'approved')
                    .order('published_at', { ascending: false })

                // Fetch approved reviews
                const { data: approvedReviews } = await supabase
                    .from('reviews')
                    .select('id, user_id')
                    .eq('status', 'approved')

                // Unique user IDs that have at least one approved item
                const userIds = new Set([
                    ...(approvedArticles || []).map(a => a.user_id),
                    ...(approvedReviews || []).map(r => r.user_id)
                ])

                if (userIds.size === 0) {
                    setMembers(SAMPLE_COMMUNITY_MEMBERS)
                    setLoading(false)
                    return
                }

                // Fetch profiles for these users
                const { data: profiles } = await supabase
                    .from('profiles')
                    .select('id, full_name, role_title')
                    .in('id', Array.from(userIds))

                if (profiles && profiles.length > 0) {
                    const formatted = profiles.map(p => {
                        const userArts = (approvedArticles || []).filter(a => a.user_id === p.id)
                        const userRevs = (approvedReviews || []).filter(r => r.user_id === p.id)
                        return {
                            id: p.id,
                            full_name: p.full_name,
                            role_title: p.role_title,
                            approved_articles_count: userArts.length,
                            approved_reviews_count: userRevs.length,
                            articles: userArts
                        }
                    })
                    setMembers(formatted)
                } else {
                    setMembers(SAMPLE_COMMUNITY_MEMBERS)
                }
            } catch (err) {
                setMembers(SAMPLE_COMMUNITY_MEMBERS)
            } finally {
                setLoading(false)
            }
        }

        loadCommunity()
    }, [configured])

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <section style={{
                    backgroundColor: "#f8fafd",
                    padding: "100px 0 100px",
                    minHeight: "80vh",
                    fontFamily: "var(--primary-font)"
                }}>
                <div className="container">
                    {!configured && <SupabaseSetupNotice feature="Community Directory & Approved Thought Leadership" />}

                    {/* Hero Header */}
                    <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px" }}>
                        <span style={{
                            display: "inline-block",
                            fontSize: "13px",
                            fontWeight: "700",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            color: "#2460e2",
                            backgroundColor: "rgba(36, 96, 226, 0.08)",
                            border: "1px solid rgba(36, 96, 226, 0.2)",
                            padding: "4px 16px",
                            borderRadius: "20px",
                            marginBottom: "14px"
                        }}>
                            Executive Directory
                        </span>
                        <h1 style={{ fontSize: "clamp(28px, 5.5vw, 44px)", fontWeight: "700", color: "#1b2534", marginBottom: "18px", lineHeight: "1.25" }}>
                            Executive Community &amp; Contributors
                        </h1>
                        <p style={{ fontSize: "clamp(16px, 2.5vw, 19px)", color: "#59606a", lineHeight: "1.7", margin: 0 }}>
                            Explore perspectives and verified profiles of industry leaders, chief people officers, and advisors who contribute to the Elite Prominence network.
                        </p>

                        <div style={{ marginTop: "26px" }}>
                            <Link
                                href="/signup"
                                style={{
                                    backgroundColor: "#2460e2",
                                    color: "#ffffff",
                                    padding: "12px 28px",
                                    minHeight: "44px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "30px",
                                    fontSize: "15px",
                                    fontWeight: "700",
                                    textDecoration: "none",
                                    boxShadow: "0 4px 14px rgba(36, 96, 226, 0.25)"
                                }}
                            >
                                Join the Network →
                            </Link>
                        </div>
                    </div>

                    {/* Member Cards Grid */}
                    <div style={{ textAlign: "center", marginBottom: "32px" }}>
                        <h2 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: "700", color: "#1b2534", margin: 0 }}>
                            Directory of Executive Contributors
                        </h2>
                    </div>
                    <div className="community_grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "28px",
                        marginBottom: "60px"
                    }}>
                        {members.map((member) => (
                            <div key={member.id} className="community_card" style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                                padding: "32px 28px",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                                overflowWrap: "break-word",
                                wordBreak: "break-word"
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "18px" }}>
                                    <div style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "50%",
                                        backgroundColor: "#2460e2",
                                        color: "#ffffff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "20px",
                                        fontWeight: "700",
                                        flexShrink: 0
                                    }}>
                                        {member.full_name?.charAt(0) || 'E'}
                                    </div>
                                    <div>
                                        <h3 style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: "700", color: "#1b2534" }}>
                                            {member.full_name}
                                        </h3>
                                        <div style={{ fontSize: "14px", color: "#64748b", fontStyle: "italic" }}>
                                            {member.role_title || 'Executive Leader'}
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    display: "flex",
                                    gap: "12px",
                                    marginBottom: "22px",
                                    fontSize: "13px",
                                    color: "#475569",
                                    borderTop: "1px solid #edf2f7",
                                    borderBottom: "1px solid #edf2f7",
                                    padding: "10px 0",
                                    flexWrap: "wrap"
                                }}>
                                    <span>
                                        <strong>{member.approved_articles_count}</strong> {member.approved_articles_count === 1 ? 'Article' : 'Articles'}
                                    </span>
                                    <span>•</span>
                                    <span>
                                        <strong>{member.approved_reviews_count}</strong> {member.approved_reviews_count === 1 ? 'Endorsement' : 'Endorsements'}
                                    </span>
                                </div>

                                {member.articles && member.articles.length > 0 ? (
                                    <div>
                                        <div style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#64748b", marginBottom: "10px" }}>
                                            Featured Writing:
                                        </div>
                                        {member.articles.map(art => (
                                            <div 
                                                key={art.id} 
                                                onClick={() => setSelectedArticle({ ...art, author: member.full_name, role_title: member.role_title })}
                                                style={{
                                                    backgroundColor: "#f8fafd",
                                                    padding: "14px 16px",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    marginBottom: "8px",
                                                    transition: "all 0.2s ease",
                                                    border: "1px solid #e2e8f0"
                                                }}
                                            >
                                                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#2460e2", marginBottom: "2px" }}>
                                                    {art.category}
                                                </div>
                                                <div style={{ fontSize: "15px", fontWeight: "700", color: "#1b2534", lineHeight: "1.4" }}>
                                                    {art.title} →
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ fontSize: "14px", color: "#94a3b8", fontStyle: "italic" }}>
                                        Verified executive client of Elite Prominence.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Full Article Reader Modal */}
                    {selectedArticle && (
                        <div style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(13, 20, 36, 0.75)",
                            backdropFilter: "blur(4px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 9999,
                            padding: "16px"
                        }}>
                            <div className="community_modal_content" style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                                maxWidth: "720px",
                                width: "100%",
                                maxHeight: "88vh",
                                overflowY: "auto",
                                padding: "36px",
                                position: "relative",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.25)"
                            }}>
                                <button
                                    onClick={() => setSelectedArticle(null)}
                                    aria-label="Close article modal"
                                    style={{
                                        position: "absolute",
                                        top: "16px",
                                        right: "16px",
                                        background: "#f1f5f9",
                                        border: "1px solid #e2e8f0",
                                        color: "#475569",
                                        borderRadius: "50%",
                                        width: "44px",
                                        height: "44px",
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    ✕
                                </button>

                                <span style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    textTransform: "uppercase",
                                    color: "#2460e2",
                                    backgroundColor: "rgba(36, 96, 226, 0.08)",
                                    border: "1px solid rgba(36, 96, 226, 0.2)",
                                    padding: "3px 12px",
                                    borderRadius: "12px",
                                    display: "inline-block",
                                    marginBottom: "12px"
                                }}>
                                    {selectedArticle.category}
                                </span>

                                <h2 style={{ fontSize: "clamp(22px, 4.5vw, 28px)", fontWeight: "700", color: "#1b2534", marginBottom: "8px", lineHeight: "1.3" }}>
                                    {selectedArticle.title}
                                </h2>

                                <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "24px", borderBottom: "1px solid #edf2f7", paddingBottom: "16px" }}>
                                    By <strong>{selectedArticle.author}</strong> ({selectedArticle.role_title}) • {new Date(selectedArticle.published_at).toLocaleDateString()}
                                </div>

                                <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#334155", whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
                                    {selectedArticle.body}
                                </div>
                            </div>
                        </div>
                    )}

                    <style jsx>{`
                        @media (max-width: 767px) {
                            .community_grid {
                                grid-template-columns: 1fr !important;
                                gap: 20px !important;
                            }
                            .community_card {
                                padding: 24px 18px !important;
                            }
                            .community_modal_content {
                                padding: 24px 18px !important;
                            }
                        }
                    `}</style>
                </div>
            </section>
        </Layout>
        </div>
    )
}
