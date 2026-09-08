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
    const [openFaq, setOpenFaq] = useState(0)
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
                    .select('id, full_name, role_title, company, industry, location, core_expertise, is_public_directory')
                    .in('id', Array.from(userIds))

                if (profiles && profiles.length > 0) {
                    const formatted = profiles.map(p => {
                        const userArts = (approvedArticles || []).filter(a => a.user_id === p.id)
                        const userRevs = (approvedReviews || []).filter(r => r.user_id === p.id)
                        return {
                            id: p.id,
                            full_name: p.full_name,
                            role_title: p.role_title,
                            company: p.company,
                            industry: p.industry,
                            location: p.location,
                            core_expertise: p.core_expertise,
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
            <Layout headerStyle={4} footerStyle={1}>
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
                        <span className="prominence_badge">
                            Executive Directory
                        </span>
                        <h1 style={{ fontSize: "clamp(28px, 5.5vw, 44px)", fontWeight: "700", color: "#1b2534", marginBottom: "18px", lineHeight: "1.25" }}>
                            Executive Community &amp; Contributors
                        </h1>
                        <p style={{ fontSize: "clamp(16px, 2.5vw, 19px)", color: "#59606a", lineHeight: "1.7", margin: 0 }}>
                            The Elite Prominence Executive Community is an invitation-only collective of senior HR executives, Chief People Officers, and board talent advisors. We empower leaders to translate their operational wisdom into high-visibility personal authority, Google search prominence, and meaningful board advisory appointments.
                        </p>

                        <div style={{ marginTop: "26px" }}>
                            <Link
                                href="/signup"
                                className="btn_style_one"
                            >
                                Join the Network
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
                                        background: "linear-gradient(180deg, #2b2d32 0%, #151619 100%)",
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
                                            {member.role_title || 'Executive Leader'} {member.company ? `• ${member.company}` : ''}
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    display: "flex",
                                    gap: "12px",
                                    marginBottom: "16px",
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
                                    {member.location && (
                                        <>
                                            <span>•</span>
                                            <span><i className="fal fa-map-marker-alt" style={{ marginRight: "4px" }}></i>{member.location}</span>
                                        </>
                                    )}
                                </div>

                                {member.articles && member.articles.length > 0 ? (
                                    <div style={{ marginBottom: "18px" }}>
                                        <div style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#64748b", marginBottom: "10px" }}>
                                            Featured Writing:
                                        </div>
                                        {member.articles.slice(0, 2).map(art => (
                                            <div 
                                                key={art.id} 
                                                onClick={() => setSelectedArticle({ ...art, author: member.full_name, role_title: member.role_title })}
                                                style={{
                                                    backgroundColor: "#f8fafd",
                                                    padding: "12px 14px",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    marginBottom: "8px",
                                                    transition: "all 0.2s ease",
                                                    border: "1px solid #e2e8f0"
                                                }}
                                            >
                                                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#162d20", marginBottom: "2px" }}>
                                                    {art.category}
                                                </div>
                                                <div style={{ fontSize: "14px", fontWeight: "700", color: "#1b2534", lineHeight: "1.4" }}>
                                                    {art.title} <i className="fal fa-arrow-right" style={{ fontSize: "11px", marginLeft: "4px" }}></i>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ fontSize: "14px", color: "#94a3b8", fontStyle: "italic", marginBottom: "18px" }}>
                                        Verified executive member of Elite Prominence Network.
                                    </div>
                                )}

                                <div style={{ borderTop: "1px solid #edf2f7", paddingTop: "14px" }}>
                                    <Link
                                        href={`/community/${member.id}`}
                                        style={{
                                            color: "#162d20",
                                            fontWeight: "800",
                                            fontSize: "14px",
                                            textDecoration: "none",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        }}
                                    >
                                        View Full Executive Profile & Articles &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Architectural Pillars of the Network */}
                    <div style={{
                        marginTop: "80px",
                        marginBottom: "70px",
                        padding: "60px 40px",
                        backgroundColor: "#ffffff",
                        borderRadius: "20px",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)"
                    }}>
                        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px" }}>
                            <span className="prominence_badge">
                                Network Architecture
                            </span>
                            <h2 style={{ fontSize: "clamp(24px, 4.5vw, 34px)", fontWeight: "700", color: "#1b2534", marginBottom: "16px" }}>
                                Four Pillars of the Elite Prominence Network
                            </h2>
                            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.7", margin: 0 }}>
                                Designed specifically for senior HR leaders, managing directors, and executive talent advisors who require a dignified, high-yield digital presence without the friction of daily social media management.
                            </p>
                        </div>

                        <div className="community_pillars_grid" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "28px"
                        }}>
                            <div style={{
                                padding: "30px 24px",
                                borderRadius: "14px",
                                backgroundColor: "#f8fafd",
                                border: "1px solid #e2e8f0"
                            }}>
                                <div style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "10px",
                                    backgroundColor: "#0D1322",
                                    color: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    marginBottom: "18px"
                                }}>
                                    01
                                </div>
                                <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#1b2534", marginBottom: "10px" }}>
                                    Selective Peer Assembly
                                </h3>
                                <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.7", margin: 0 }}>
                                    The directory is restricted to proven enterprise executives—Chief Human Resources Officers, VP People, and senior advisory partners. We preserve an environment free of commercial solicitations, algorithmic chasing, and low-signal noise.
                                </p>
                            </div>

                            <div style={{
                                padding: "30px 24px",
                                borderRadius: "14px",
                                backgroundColor: "#f8fafd",
                                border: "1px solid #e2e8f0"
                            }}>
                                <div style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "10px",
                                    backgroundColor: "#0D1322",
                                    color: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    marginBottom: "18px"
                                }}>
                                    02
                                </div>
                                <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#1b2534", marginBottom: "10px" }}>
                                    Editorial Governance &amp; Rigor
                                </h3>
                                <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.7", margin: 0 }}>
                                    Every article published under our community banner is curated for strategic substance. We translate real-world human capital challenges, executive compensation nuances, and board governance models into definitive frameworks that withstand executive scrutiny.
                                </p>
                            </div>

                            <div style={{
                                padding: "30px 24px",
                                borderRadius: "14px",
                                backgroundColor: "#f8fafd",
                                border: "1px solid #e2e8f0"
                            }}>
                                <div style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "10px",
                                    backgroundColor: "#0D1322",
                                    color: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    marginBottom: "18px"
                                }}>
                                    03
                                </div>
                                <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#1b2534", marginBottom: "10px" }}>
                                    Google Search &amp; Entity Authority
                                </h3>
                                <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.7", margin: 0 }}>
                                    When board nominating committees, executive search partners, or conference organizers research your name, your thought leadership articles and verified contributor bio occupy prime digital real estate, establishing your definitive knowledge graph entity.
                                </p>
                            </div>

                            <div style={{
                                padding: "30px 24px",
                                borderRadius: "14px",
                                backgroundColor: "#f8fafd",
                                border: "1px solid #e2e8f0"
                            }}>
                                <div style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "10px",
                                    backgroundColor: "#0D1322",
                                    color: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    marginBottom: "18px"
                                }}>
                                    04
                                </div>
                                <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#1b2534", marginBottom: "10px" }}>
                                    Board &amp; Advisory Pipeline
                                </h3>
                                <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.7", margin: 0 }}>
                                    A verified public portfolio of executive writing positions you as a leading voice on human capital risk and corporate culture, directly creating opportunities for non-executive director (NED) seats, advisory boards, and high-value private consulting engagements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How It Works: Contributor Journey */}
                    <div style={{ marginBottom: "70px" }}>
                        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 44px" }}>
                            <span className="prominence_badge">
                                Contributor Process
                            </span>
                            <h2 style={{ fontSize: "clamp(24px, 4.5vw, 34px)", fontWeight: "700", color: "#1b2534", marginBottom: "14px" }}>
                                The 3-Step Journey to Executive Visibility
                            </h2>
                            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.7", margin: 0 }}>
                                A structured, time-efficient editorial model engineered specifically for time-constrained C-suite leaders.
                            </p>
                        </div>

                        <div className="community_steps_grid" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "28px"
                        }}>
                            <div style={{
                                backgroundColor: "#ffffff",
                                padding: "34px 28px",
                                borderRadius: "16px",
                                border: "1px solid #e2e8f0",
                                position: "relative"
                            }}>
                                <div style={{ fontSize: "13px", fontWeight: "800", color: "#0D1322", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                                    Stage 01
                                </div>
                                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1b2534", marginBottom: "12px" }}>
                                    Executive Verification &amp; Profile Build
                                </h3>
                                <p style={{ fontSize: "14px", color: "#59606a", lineHeight: "1.7", margin: 0 }}>
                                    Create your executive account with verified credentials. We configure your public profile, executive title, domain areas, and link back to your personal digital headquarters or LinkedIn presence.
                                </p>
                            </div>

                            <div style={{
                                backgroundColor: "#ffffff",
                                padding: "34px 28px",
                                borderRadius: "16px",
                                border: "1px solid #e2e8f0",
                                position: "relative"
                            }}>
                                <div style={{ fontSize: "13px", fontWeight: "800", color: "#0D1322", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                                    Stage 02
                                </div>
                                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1b2534", marginBottom: "12px" }}>
                                    Framework Co-Creation &amp; Review
                                </h3>
                                <p style={{ fontSize: "14px", color: "#59606a", lineHeight: "1.7", margin: 0 }}>
                                    Submit your strategic thinking through our intuitive contributor portal. Our editorial advisory team assists with proofing, formatting, and structural polishing to ensure publication-grade caliber.
                                </p>
                            </div>

                            <div style={{
                                backgroundColor: "#ffffff",
                                padding: "34px 28px",
                                borderRadius: "16px",
                                border: "1px solid #e2e8f0",
                                position: "relative"
                            }}>
                                <div style={{ fontSize: "13px", fontWeight: "800", color: "#0D1322", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                                    Stage 03
                                </div>
                                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1b2534", marginBottom: "12px" }}>
                                    Directory Indexing &amp; Distribution
                                </h3>
                                <p style={{ fontSize: "14px", color: "#59606a", lineHeight: "1.7", margin: 0 }}>
                                    Upon review and approval, your article is published with rich schema markup, indexed by search engines, featured in our community directory, and syndicated across executive talent channels.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Editorial Standards & Governance */}
                    <div style={{
                        marginBottom: "70px",
                        padding: "50px 36px",
                        borderRadius: "18px",
                        backgroundColor: "#1b2534",
                        color: "#ffffff"
                    }}>
                        <div style={{ maxWidth: "720px", marginBottom: "36px" }}>
                            <span style={{
                                display: "inline-block",
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                                color: "#c4b5fd",
                                backgroundColor: "rgba(196, 181, 253, 0.15)",
                                border: "1px solid rgba(196, 181, 253, 0.3)",
                                padding: "4px 14px",
                                borderRadius: "20px",
                                marginBottom: "12px"
                            }}>
                                Integrity &amp; Standards
                            </span>
                            <h2 style={{ fontSize: "clamp(24px, 4.5vw, 32px)", fontWeight: "700", color: "#ffffff", marginBottom: "12px" }}>
                                Editorial Principles &amp; Governance
                            </h2>
                            <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: "1.7", margin: 0 }}>
                                To ensure our platform remains an esteemed resource for boards, search consultants, and enterprise practitioners, every contributor aligns with our core governance standards:
                            </p>
                        </div>

                        <div className="community_standards_grid" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "24px"
                        }}>
                            <div style={{
                                padding: "24px 22px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)"
                            }}>
                                <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#f8fafc", marginBottom: "8px" }}>
                                    Substance Over Hype
                                </h4>
                                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>
                                    We disallow generic motivational platitudes or AI-generated filler. Content must address real operational complexities, change management realities, or corporate leadership dilemmas.
                                </p>
                            </div>

                            <div style={{
                                padding: "24px 22px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)"
                            }}>
                                <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#f8fafc", marginBottom: "8px" }}>
                                    Commercial Neutrality
                                </h4>
                                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>
                                    Articles are editorial contributions, not advertisements. Direct vendor promotion or self-serving pitches are declined to safeguard the collective integrity of all members.
                                </p>
                            </div>

                            <div style={{
                                padding: "24px 22px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)"
                            }}>
                                <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#f8fafc", marginBottom: "8px" }}>
                                    Corporate Confidentiality
                                </h4>
                                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>
                                    We protect current and former employer interests. Case studies and strategic insights are anonymized whenever necessary to honor non-disclosure commitments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Community FAQ Section */}
                    <div style={{ marginBottom: "80px", maxWidth: "860px", margin: "0 auto 80px" }}>
                        <div style={{ textAlign: "center", marginBottom: "40px" }}>
                            <span className="prominence_badge">
                                Got Questions?
                            </span>
                            <h2 style={{ fontSize: "clamp(24px, 4.5vw, 32px)", fontWeight: "700", color: "#1b2534", margin: 0 }}>
                                Frequently Asked Questions About the Community
                            </h2>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            {[
                                {
                                    q: "Who qualifies for contributor status in the Executive Directory?",
                                    a: "Eligibility is tailored for senior HR leaders (CHROs, Chief People Officers, SVPs and VPs of HR), executive search partners, and independent human capital advisors with extensive operational track records. We review each application to ensure community alignment and mutual peer caliber."
                                },
                                {
                                    q: "How much time is required to participate as a contributor?",
                                    a: "Our model is engineered for executive efficiency. Contributors can spend as little as 45 minutes reviewing an editorial brief or submitting a recorded voice memo. The Elite Prominence editorial desk handles structural synthesis, copywriting, and search engine optimization."
                                },
                                {
                                    q: "Do I retain ownership of the insights and articles I publish?",
                                    a: "Yes. You retain full copyright and intellectual property rights to your ideas and writing. Elite Prominence receives a non-exclusive license to host, format, and syndicate the piece across our network and public search index."
                                },
                                {
                                    q: "How does this directory help me win board or advisory roles?",
                                    a: "Executive recruiters and nominating committees consistently audit candidate search visibility before making contact. By having high-ranking, publication-grade perspectives indexed in our directory, you present unambiguous proof of domain mastery, strategic acumen, and progressive leadership."
                                }
                            ].map((faq, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "12px",
                                        border: "1px solid #e2e8f0",
                                        overflow: "hidden",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        style={{
                                            width: "100%",
                                            textAlign: "left",
                                            padding: "20px 24px",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "16px",
                                            fontFamily: "inherit"
                                        }}
                                    >
                                        <span style={{ fontSize: "16px", fontWeight: "700", color: "#1b2534" }}>
                                            {faq.q}
                                        </span>
                                        <span style={{
                                            fontSize: "20px",
                                            color: "#0D1322",
                                            fontWeight: "700",
                                            transition: "transform 0.2s ease",
                                            transform: openFaq === idx ? "rotate(45deg)" : "rotate(0deg)"
                                        }}>
                                            +
                                        </span>
                                    </button>
                                    {openFaq === idx && (
                                        <div style={{
                                            padding: "0 24px 22px",
                                            fontSize: "14px",
                                            lineHeight: "1.7",
                                            color: "#59606a",
                                            borderTop: "1px solid #f1f5f9"
                                        }}>
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Executive Final CTA Banner */}
                    <div style={{
                        textAlign: "center",
                        padding: "60px 30px",
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, #2b2d32 0%, #151619 100%)",
                        color: "#ffffff",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                        marginBottom: "40px"
                    }}>
                        <h2 style={{ fontSize: "clamp(24px, 4.5vw, 36px)", fontWeight: "700", color: "#ffffff", marginBottom: "16px" }}>
                            Ready to Claim Your Place in the Executive Network?
                        </h2>
                        <p style={{ fontSize: "16px", color: "#cbd5e1", maxWidth: "640px", margin: "0 auto 32px", lineHeight: "1.7" }}>
                            Join prominent HR leaders who are turning their career expertise into indexed authority, board invitations, and compounding executive prominence.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                            <Link
                                href="/signup"
                                className="btn_style_one"
                            >
                                Apply for Directory Status <i className="fal fa-long-arrow-right"></i>
                            </Link>
                            <Link
                                href="/contact"
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#ffffff",
                                    padding: "14px 32px",
                                    borderRadius: "30px",
                                    fontSize: "15px",
                                    fontWeight: "700",
                                    textDecoration: "none",
                                    border: "1px solid rgba(255, 255, 255, 0.3)"
                                }}
                            >
                                Book Confidential Strategy Call
                            </Link>
                        </div>
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
                                    <i className="fal fa-times"></i>
                                </button>

                                <span style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    textTransform: "uppercase",
                                    color: "#0D1322", backgroundColor: "rgba(13, 19, 34, 0.05)", border: "1px solid rgba(13, 19, 34, 0.12)",
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
                            .community_grid,
                            .community_pillars_grid,
                            .community_steps_grid,
                            .community_standards_grid {
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
