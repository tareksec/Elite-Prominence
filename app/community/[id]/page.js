'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import { getWhatsAppUrl } from '@/lib/whatsapp'

const SAMPLE_MEMBERS_MAP = {
    "member-1": {
        id: "member-1",
        full_name: "Eleanor Vance",
        role_title: "Chief Human Resources Officer",
        company: "GlobalTech Solutions",
        industry: "Enterprise Technology & AI",
        location: "New York, USA",
        years_of_experience: "18+ Years",
        bio: "Eleanor Vance is a seasoned Chief Human Resources Officer with nearly two decades of operational experience orchestrating global workforce transitions, talent architecture, and executive succession across Fortune 500 tech enterprises. A frequent keynote speaker on boardroom culture and empathetic leadership.",
        linkedin_url: "https://www.linkedin.com/in/eleanor-vance-example",
        website_url: "https://eleanorvance.com",
        core_expertise: ["Executive Presence", "C-Suite Succession", "M&A Talent Integration", "Workforce Architecture", "Board Governance"],
        speaking_topics: "The Sovereign Leader in the AI Era, Engineering High-Trust Boardroom Cultures",
        articles: [
            {
                id: "art-1",
                title: "From Internal Operator to Industry Authority: The 90-Day Blueprint",
                category: "Executive Presence",
                body: "For senior leaders, your reputation precedes you into every boardroom. But far too many brilliant executives remain invisible outside their immediate organization.\n\nWhen a CHRO or VP spends 15 years operating internally with total discretion, they master talent architecture, crisis mitigation, and board governance. Yet when external stakeholders, executive recruiters, or non-profit boards search their name, they find a sparse LinkedIn profile with 3 bullet points and zero published perspectives.\n\nPersonal branding for C-suite leaders is not vanity; it is risk mitigation. When you build sovereign entity equity, you control how your leadership philosophy is perceived.",
                published_at: "2026-08-18T12:00:00Z"
            }
        ]
    },
    "member-2": {
        id: "member-2",
        full_name: "Marcus Sterling",
        role_title: "Managing Director & Executive Talent Advisor",
        company: "Sterling & Partners Advisory",
        industry: "Executive Search & Advisory",
        location: "London, UK",
        years_of_experience: "22+ Years",
        bio: "Marcus Sterling advises multinational boards, private equity sponsors, and chairpersons on board evaluation and senior leadership appointments. Specializing in confidential executive searches and governance transformation.",
        linkedin_url: "https://www.linkedin.com/in/marcus-sterling-example",
        core_expertise: ["Executive Search Alignment", "Board Evaluations", "Advisory Mandates", "Digital Reputation"],
        speaking_topics: "What Nominations Committees Look for in 2026, The Hidden Executive Job Market",
        articles: [
            {
                id: "art-2",
                title: "Why Google Is Your First Interview for Board Roles",
                category: "Digital Reputation",
                body: "Executive search consultants don't rely on PDF resumes alone anymore. They audit your digital footprint, your published perspectives, and your media citations before picking up the phone.\n\nIf the top 3 search results for your name are inactive alumni directories or obsolete corporate press releases from 2018, you forfeit the strategic advantage to candidates whose thought leadership ranks on page one.",
                published_at: "2026-08-05T09:00:00Z"
            }
        ]
    },
    "member-3": {
        id: "member-3",
        full_name: "Dr. Aris Thorne",
        role_title: "Senior VP of People Strategy",
        company: "BioHealth Diagnostics",
        industry: "Life Sciences & Biotech",
        location: "Boston, USA",
        years_of_experience: "15+ Years",
        bio: "Dr. Aris Thorne pairs behavioral psychology with strategic organizational design in high-growth biotechnology companies. An advocate for human-centered talent infrastructure and executive resilience.",
        linkedin_url: "https://www.linkedin.com/in/dr-aris-thorne-example",
        core_expertise: ["Thought Leadership", "Talent Infrastructure", "Organizational Psychology", "Executive Resilience"],
        speaking_topics: "Human Capital in High-Stakes R&D, The Psychology of Executive Transitions",
        articles: [
            {
                id: "art-3",
                title: "Authentic Executive Voice in the Age of Synthetic Content",
                category: "Thought Leadership",
                body: "In a noisy media ecosystem flooded with automated takes, executive authenticity and lived operational wisdom are the highest currency.\n\nSenior leaders cannot outsource their core worldview to generic ghostwriters who lack executive scars. True thought leadership comes from real battle-tested decisions.",
                published_at: "2026-07-30T15:00:00Z"
            }
        ]
    }
}

export default function MemberProfilePage({ params }) {
    const memberId = params?.id
    const configured = isSupabaseConfigured()

    const [member, setMember] = useState(SAMPLE_MEMBERS_MAP[memberId] || null)
    const [articles, setArticles] = useState(SAMPLE_MEMBERS_MAP[memberId]?.articles || [])
    const [loading, setLoading] = useState(true)
    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(() => {
        if (!memberId) {
            setLoading(false)
            return
        }

        // If it matches our sample map, use it immediately as initial state
        if (SAMPLE_MEMBERS_MAP[memberId]) {
            setMember(SAMPLE_MEMBERS_MAP[memberId])
            setArticles(SAMPLE_MEMBERS_MAP[memberId].articles || [])
            setLoading(false)
            return
        }

        if (!configured) {
            setLoading(false)
            return
        }

        const fetchProfile = async () => {
            try {
                const supabase = getSupabaseBrowserClient()

                // Fetch Profile details
                const { data: prof, error: pErr } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', memberId)
                    .single()

                if (pErr || !prof) {
                    setMember(null)
                    setLoading(false)
                    return
                }

                setMember(prof)

                // Fetch approved articles
                const { data: arts } = await supabase
                    .from('articles')
                    .select('*')
                    .eq('user_id', memberId)
                    .eq('status', 'approved')
                    .order('published_at', { ascending: false })

                if (arts) setArticles(arts)

            } catch (err) {
                console.error('Failed to load member profile:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchProfile()
    }, [memberId, configured])

    if (loading) {
        return (
            <div className="boxed_wrapper">
                <Layout headerStyle={1} footerStyle={1}>
                    <div style={{ padding: "160px 0 120px", textAlign: "center", backgroundColor: "#FAF8F2", minHeight: "80vh" }}>
                        <div style={{ fontSize: "16px", color: "#162d20", fontWeight: "700" }}>
                            Loading Executive Profile...
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }

    if (!member) {
        return (
            <div className="boxed_wrapper">
                <Layout headerStyle={1} footerStyle={1}>
                    <div style={{ padding: "160px 0 120px", textAlign: "center", backgroundColor: "#FAF8F2", minHeight: "80vh" }}>
                        <div className="container" style={{ maxWidth: "600px", margin: "0 auto" }}>
                            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
                            <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#162d20", marginBottom: "12px" }}>
                                Executive Profile Not Found
                            </h2>
                            <p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.6", marginBottom: "24px" }}>
                                The requested executive profile is either confidential, not yet verified, or has been updated.
                            </p>
                            <Link
                                href="/community"
                                style={{
                                    backgroundColor: "#162d20",
                                    color: "#ffffff",
                                    padding: "12px 28px",
                                    borderRadius: "30px",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                    textDecoration: "none",
                                    display: "inline-block"
                                }}
                            >
                                ← Return to Community Directory
                            </Link>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }

    const expertiseList = Array.isArray(member.core_expertise)
        ? member.core_expertise
        : typeof member.core_expertise === 'string' && member.core_expertise.trim()
            ? member.core_expertise.split(',').map(s => s.trim())
            : ["Executive Presence", "Thought Leadership", "Personal Branding", "C-Suite Strategy"]

    const initials = (member.full_name || 'EP')
        .split(' ')
        .map(n => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <section style={{ backgroundColor: "#FAF8F2", padding: "120px 0 90px", minHeight: "85vh", fontFamily: "var(--primary-font)" }}>
                    <div className="container" style={{ maxWidth: "1080px" }}>

                        {/* Breadcrumbs */}
                        <div style={{ marginBottom: "24px", fontSize: "13px", color: "#64748b", display: "flex", gap: "6px", alignItems: "center" }}>
                            <Link href="/" style={{ color: "#162d20", textDecoration: "none", fontWeight: "600" }}>Home</Link>
                            <span>/</span>
                            <Link href="/community" style={{ color: "#162d20", textDecoration: "none", fontWeight: "600" }}>Executive Community</Link>
                            <span>/</span>
                            <span style={{ color: "#D29D2B", fontWeight: "700" }}>{member.full_name}</span>
                        </div>

                        {/* Executive Profile Card Hero */}
                        <div style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "20px",
                            border: "1px solid #e5e3db",
                            boxShadow: "0 10px 40px rgba(22, 45, 32, 0.05)",
                            overflow: "hidden",
                            marginBottom: "36px"
                        }}>
                            {/* Decorative Cover Bar */}
                            <div style={{
                                height: "140px",
                                background: "linear-gradient(135deg, #162d20 0%, #1e3b2b 60%, #D29D2B 100%)",
                                position: "relative"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    bottom: "14px",
                                    right: "20px",
                                    backgroundColor: "rgba(0,0,0,0.3)",
                                    backdropFilter: "blur(8px)",
                                    color: "#ffffff",
                                    fontSize: "11px",
                                    fontWeight: "800",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    padding: "4px 10px",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255,255,255,0.2)"
                                }}>
                                    Verified Executive Directory
                                </div>
                            </div>

                            {/* Profile Body */}
                            <div style={{ padding: "0 36px 36px", position: "relative" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginTop: "-55px", marginBottom: "20px" }}>
                                    {/* Avatar Monogram */}
                                    <div style={{
                                        width: "110px",
                                        height: "110px",
                                        borderRadius: "50%",
                                        backgroundColor: "#162d20",
                                        color: "#D29D2B",
                                        border: "5px solid #ffffff",
                                        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "36px",
                                        fontWeight: "800",
                                        flexShrink: 0
                                    }}>
                                        {initials}
                                    </div>

                                    {/* Action Links */}
                                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                        {member.linkedin_url && (
                                            <a
                                                href={member.linkedin_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    backgroundColor: "#0077B5",
                                                    color: "#ffffff",
                                                    padding: "10px 18px",
                                                    borderRadius: "24px",
                                                    fontSize: "13px",
                                                    fontWeight: "700",
                                                    textDecoration: "none",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "6px"
                                                }}
                                            >
                                                <span>in</span> LinkedIn Profile ↗
                                            </a>
                                        )}

                                        {member.website_url && (
                                            <a
                                                href={member.website_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    backgroundColor: "#f1f5f9",
                                                    color: "#1e293b",
                                                    border: "1px solid #cbd5e1",
                                                    padding: "10px 18px",
                                                    borderRadius: "24px",
                                                    fontSize: "13px",
                                                    fontWeight: "700",
                                                    textDecoration: "none",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "6px"
                                                }}
                                            >
                                                🌐 Personal Website ↗
                                            </a>
                                        )}

                                        <a
                                            href={getWhatsAppUrl(`Hi, I saw ${member.full_name}'s executive profile on Elite Prominence and would like to discuss an advisory engagement.`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                backgroundColor: "#25D366",
                                                color: "#ffffff",
                                                padding: "10px 18px",
                                                borderRadius: "24px",
                                                fontSize: "13px",
                                                fontWeight: "700",
                                                textDecoration: "none",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "6px"
                                            }}
                                        >
                                            💬 Contact via Advisory
                                        </a>
                                    </div>
                                </div>

                                {/* Header Info */}
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
                                        <h1 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: "800", color: "#162d20", margin: 0 }}>
                                            {member.full_name}
                                        </h1>
                                        <span style={{
                                            backgroundColor: "rgba(210, 157, 43, 0.15)",
                                            color: "#92400e",
                                            fontSize: "11px",
                                            fontWeight: "800",
                                            padding: "3px 10px",
                                            borderRadius: "10px",
                                            textTransform: "uppercase"
                                        }}>
                                            ✓ Contributor Member
                                        </span>
                                    </div>

                                    <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#334155", margin: "4px 0 12px" }}>
                                        {member.role_title} {member.company ? `• ${member.company}` : ''}
                                    </h2>

                                    {/* Meta pills */}
                                    <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
                                        {member.industry && (
                                            <span>🏢 <strong>Industry:</strong> {member.industry}</span>
                                        )}
                                        {member.location && (
                                            <span>📍 <strong>Location:</strong> {member.location}</span>
                                        )}
                                        {member.years_of_experience && (
                                            <span>⏱️ <strong>Experience:</strong> {member.years_of_experience}</span>
                                        )}
                                        <span>📰 <strong>Articles:</strong> {articles.length} Published</span>
                                    </div>

                                    <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "20px 0" }} />

                                    {/* Bio / Leadership Thesis */}
                                    <div style={{ marginBottom: "26px" }}>
                                        <h3 style={{ fontSize: "16px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", color: "#162d20", marginBottom: "10px" }}>
                                            Executive Biography & Leadership Philosophy
                                        </h3>
                                        <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#334155", whiteSpace: "pre-wrap", margin: 0 }}>
                                            {member.bio || `${member.full_name} is an active member of the Elite Prominence Executive Community, contributing operational leadership perspectives on organizational transformation, talent architecture, and C-suite presence.`}
                                        </p>
                                    </div>

                                    {/* Core Expertise Tags */}
                                    <div style={{ marginBottom: "26px" }}>
                                        <h3 style={{ fontSize: "16px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", color: "#162d20", marginBottom: "10px" }}>
                                            Core Domains & Strategic Competencies
                                        </h3>
                                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                            {expertiseList.map((tag, idx) => (
                                                <span key={idx} style={{
                                                    backgroundColor: "#FAF8F2",
                                                    color: "#162d20",
                                                    border: "1px solid #e5e3db",
                                                    padding: "6px 14px",
                                                    borderRadius: "20px",
                                                    fontSize: "13px",
                                                    fontWeight: "700"
                                                }}>
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Keynote / Speaking Topics */}
                                    {member.speaking_topics && (
                                        <div style={{ marginBottom: "10px", padding: "16px 20px", borderRadius: "12px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                                            <h4 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: "800", color: "#162d20", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                🎙️ Keynote Topics & Advisory Mandates
                                            </h4>
                                            <p style={{ margin: 0, fontSize: "14px", color: "#475569", lineHeight: "1.5" }}>
                                                {member.speaking_topics}
                                            </p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        {/* Authored Thought Leadership Articles */}
                        <div style={{ marginBottom: "40px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
                                <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#162d20", margin: 0 }}>
                                    Authored Articles & Perspectives ({articles.length})
                                </h3>
                                <span style={{ fontSize: "13px", color: "#64748b" }}>
                                    Peer-reviewed by Elite Prominence Editorial Board
                                </span>
                            </div>

                            {articles.length === 0 ? (
                                <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "16px", textAlign: "center", border: "1px solid #e5e3db" }}>
                                    <p style={{ margin: 0, color: "#64748b", fontSize: "15px" }}>
                                        Articles authored by {member.full_name} are currently undergoing editorial review and will appear here upon publication.
                                    </p>
                                </div>
                            ) : (
                                <div style={{ display: "grid", gap: "18px" }}>
                                    {articles.map((art) => (
                                        <div key={art.id} style={{
                                            backgroundColor: "#ffffff",
                                            borderRadius: "16px",
                                            padding: "26px 30px",
                                            border: "1px solid #e5e3db",
                                            boxShadow: "0 4px 14px rgba(0,0,0,0.02)",
                                            transition: "transform 0.2s ease"
                                        }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                                                <span style={{
                                                    fontSize: "12px",
                                                    fontWeight: "800",
                                                    textTransform: "uppercase",
                                                    color: "#162d20",
                                                    backgroundColor: "rgba(30, 59, 43, 0.08)",
                                                    padding: "3px 10px",
                                                    borderRadius: "12px"
                                                }}>
                                                    {art.category}
                                                </span>
                                                <span style={{ fontSize: "12px", color: "#64748b" }}>
                                                    {new Date(art.published_at || art.created_at).toLocaleDateString()}
                                                </span>
                                            </div>

                                            <h4 style={{ fontSize: "20px", fontWeight: "800", color: "#162d20", margin: "8px 0" }}>
                                                {art.title}
                                            </h4>

                                            <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", margin: "0 0 16px" }}>
                                                {art.body.slice(0, 220)}...
                                            </p>

                                            <button
                                                onClick={() => setSelectedArticle(art)}
                                                style={{
                                                    backgroundColor: "transparent",
                                                    color: "#162d20",
                                                    border: "none",
                                                    padding: 0,
                                                    fontWeight: "800",
                                                    fontSize: "14px",
                                                    cursor: "pointer",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "6px"
                                                }}
                                            >
                                                Read Full Article &rarr;
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Bottom CTA Card */}
                        <div style={{
                            backgroundColor: "#162d20",
                            color: "#ffffff",
                            padding: "36px 40px",
                            borderRadius: "20px",
                            textAlign: "center",
                            border: "1px solid rgba(210, 157, 43, 0.3)"
                        }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#FAF8F2", marginBottom: "8px" }}>
                                Connect with {member.full_name} or Apply for Directory Status
                            </h3>
                            <p style={{ color: "#c1cfc5", maxWidth: "600px", margin: "0 auto 20px", fontSize: "15px", lineHeight: "1.6" }}>
                                Elite Prominence represents C-suite executives, independent board advisors, and senior HR leaders seeking sovereign digital authority and executive search positioning.
                            </p>
                            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link
                                    href="/contact"
                                    style={{
                                        backgroundColor: "#D29D2B",
                                        color: "#162d20",
                                        padding: "12px 28px",
                                        borderRadius: "30px",
                                        fontWeight: "800",
                                        fontSize: "14px",
                                        textDecoration: "none"
                                    }}
                                >
                                    Book Executive Audit
                                </Link>
                                <Link
                                    href="/community"
                                    style={{
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        color: "#ffffff",
                                        border: "1px solid rgba(255,255,255,0.3)",
                                        padding: "12px 24px",
                                        borderRadius: "30px",
                                        fontWeight: "700",
                                        fontSize: "14px",
                                        textDecoration: "none"
                                    }}
                                >
                                    ← Browse All Leaders
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Article Reader Modal */}
                {selectedArticle && (
                    <div style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.7)",
                        zIndex: 99999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px"
                    }}>
                        <div style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            maxWidth: "720px",
                            width: "100%",
                            maxHeight: "85vh",
                            overflowY: "auto",
                            padding: "36px 32px",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                            position: "relative"
                        }}>
                            <button
                                onClick={() => setSelectedArticle(null)}
                                style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "20px",
                                    background: "none",
                                    border: "none",
                                    fontSize: "24px",
                                    cursor: "pointer",
                                    color: "#94a3b8"
                                }}
                            >
                                ✕
                            </button>

                            <span style={{
                                fontSize: "12px",
                                fontWeight: "800",
                                textTransform: "uppercase",
                                color: "#162d20",
                                backgroundColor: "#FAF8F2",
                                border: "1px solid #e5e3db",
                                padding: "4px 12px",
                                borderRadius: "12px",
                                display: "inline-block",
                                marginBottom: "12px"
                            }}>
                                {selectedArticle.category}
                            </span>

                            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#162d20", marginBottom: "8px" }}>
                                {selectedArticle.title}
                            </h2>

                            <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "24px" }}>
                                By {member.full_name} ({member.role_title}) • Published {new Date(selectedArticle.published_at || selectedArticle.created_at).toLocaleDateString()}
                            </div>

                            <div style={{
                                fontSize: "16px",
                                lineHeight: "1.8",
                                color: "#334155",
                                whiteSpace: "pre-wrap",
                                borderTop: "1px solid #f1f5f9",
                                paddingTop: "20px"
                            }}>
                                {selectedArticle.body}
                            </div>
                        </div>
                    </div>
                )}
            </Layout>
        </div>
    )
}
