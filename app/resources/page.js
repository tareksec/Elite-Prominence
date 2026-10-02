import React from 'react'
import Link from 'next/link'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'

export const metadata = {
    title: 'Executive Resources & Assessment | Prominence',
    description: 'Executive toolkits, checklists, and the proprietary Executive Digital Presence Assessment for CEOs, CHROs, and enterprise leaders.',
    alternates: {
        canonical: '/resources',
    },
    openGraph: {
        title: 'Executive Resources & Digital Presence Assessment | Prominence',
        description: 'Audit your search footprint, executive website, and LinkedIn gravitas with our executive scorecards and guides.',
        url: 'https://www.prominence.agency/resources',
        siteName: 'Prominence.agency',
        locale: 'en_US',
        type: 'website',
    },
}

const resourcesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.prominence.agency',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Resources',
                    item: 'https://www.prominence.agency/resources',
                },
            ],
        },
        {
            '@type': 'CollectionPage',
            name: 'Executive Reputation Resources & Assessment Tools',
            description: 'Curated guides, checklists, and self-audits designed to help leaders evaluate and improve their digital standing.',
            url: 'https://www.prominence.agency/resources',
        },
    ],
}

export default function ResourcesOverviewPage() {
    const resources = [
        {
            badge: 'Interactive Tool',
            title: 'Executive Digital Presence Assessment',
            tagline: 'Audit your public stature across 6 objective dimensions in 3 minutes',
            description: 'Evaluate your Google search dominance, personal website sovereignty, LinkedIn gravitas, media proof, and corporate PR compliance. Receive an immediate calculated score and gap analysis.',
            href: '/resources/assessment',
            ctaText: 'Start Assessment',
            featured: true
        },
        {
            badge: 'Audit Checklist',
            title: 'The Sovereign Digital HQ Architecture Checklist',
            tagline: '12-Point Technical & Content Blueprint',
            description: 'A comprehensive specification of what a Fortune 500 CEO or board director website requires: domain sovereignty, JSON-LD schema, board dossier presentation, and strict data security.',
            href: '/services/executive-digital-hq',
            ctaText: 'Explore Blueprint',
            featured: false,
            icon: 'fa-solid fa-file-shield',
            format: '12-Point Architecture Spec',
            scope: 'Owned Digital HQ'
        },
        {
            badge: 'Search Guide',
            title: 'Executive Google Search & Entity Optimization Guide',
            tagline: 'Defeating Namesake Conflicts & Owning Page 1',
            description: 'Understand how Google indexes executive names, how Knowledge Graph entity reconciliation works, and how to permanently control your first 10 search results.',
            href: '/services/digital-reputation',
            ctaText: 'View Guide',
            featured: false,
            icon: 'fa-solid fa-magnifying-glass-chart',
            format: 'Algorithm Reconciliation Rubric',
            scope: 'Page 1 & Entity Graph'
        },
        {
            badge: 'Editorial Rubric',
            title: 'LinkedIn Gravitas & Boardroom Profile Audit',
            tagline: 'Moving from Operational Resume to Strategic Authority',
            description: 'How to rewrite your LinkedIn headline, summary thesis, and experience section to signal enterprise governance and attract board directorship inquiries.',
            href: '/services/linkedin-authority',
            ctaText: 'Review Rubric',
            featured: false,
            icon: 'fa-solid fa-id-card-clip',
            format: 'Boardroom Governance Framework',
            scope: 'C-Suite Narrative'
        }
    ]

    return (
        <div className="mlab-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }}
            />
            <ModernHeader />
            
            {/* Breadcrumb Navigation */}
            <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(18,19,22,0.08)", background: "#FAF9F5", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#8A8F9E" }}>
                        <Link href="/" style={{ color: "#8A8F9E", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <span style={{ color: "#121316", fontWeight: 600 }}>Resources &amp; Assessment</span>
                    </div>
                </div>
            </div>

            <main>
                {/* Hero Header */}
                <section style={{ backgroundColor: "#FAF9F5", padding: "72px 0 60px", borderBottom: "1px solid rgba(18,19,22,0.08)" }}>
                    <div className="container">
                        <div className="text-center" style={{ maxWidth: "860px", margin: "0 auto" }}>
                            <span className="editorial-badge" style={{ marginBottom: "18px" }}>
                                <span className="editorial-badge-dot">✦</span> EXECUTIVE TOOLKITS &amp; DIAGNOSTICS
                            </span>
                            <h1 style={{
                                fontSize: "clamp(32px, 5vw, 52px)",
                                fontWeight: 850,
                                color: "#121316",
                                lineHeight: "1.15",
                                letterSpacing: "-0.03em",
                                marginBottom: "20px"
                            }}>
                                Frameworks for Evaluating Executive Stature
                            </h1>
                            <p style={{ color: "#555A68", fontSize: "18px", lineHeight: "1.65", margin: "0 auto", maxWidth: "760px" }}>
                                Diagnostic tools, architectural checklists, and editorial standards developed by Prominence to help enterprise leaders benchmark their digital footprint and eliminate their authority gap.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Flagship Assessment Feature Banner */}
                <section style={{ padding: "64px 0", background: "#FFFFFF" }}>
                    <div className="container">
                        <div style={{
                            background: "#121316",
                            borderRadius: "28px",
                            padding: "clamp(36px, 5vw, 56px)",
                            color: "#FFFFFF",
                            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                            border: "1px solid rgba(255,255,255,0.08)"
                        }}>
                            <div className="row align-items-center g-4">
                                <div className="col-lg-8">
                                    <span className="editorial-badge" style={{ background: "rgba(255,255,255,0.08)", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.15)", marginBottom: "18px" }}>
                                        <span className="editorial-badge-dot" style={{ background: "#FF3B81" }}>✦</span> FEATURED DIAGNOSTIC TOOL
                                    </span>
                                    <h2 style={{
                                        fontSize: "clamp(26px, 3.5vw, 38px)",
                                        fontWeight: 850,
                                        color: "#FFFFFF",
                                        letterSpacing: "-0.02em",
                                        marginBottom: "16px",
                                        lineHeight: "1.2"
                                    }}>
                                        The Executive Digital Presence Assessment
                                    </h2>
                                    <p style={{ fontSize: "16.5px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "28px", maxWidth: "640px" }}>
                                        Assess your digital standing across Google visibility, personal website ownership, LinkedIn authority, and third-party validation in 3 minutes. Zero fluff, completely transparent scoring rubric.
                                    </p>
                                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "36px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
                                            <span style={{ color: "#FF3B81", fontWeight: 800 }}>✦</span> 6 Objective Stature Dimensions
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
                                            <span style={{ color: "#FF3B81", fontWeight: 800 }}>✦</span> Immediate Calculated Score (0–100%)
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#FF3B81", fontWeight: 600 }}>
                                            <span style={{ color: "#FF3B81", fontWeight: 800 }}>✦</span> Tailored Advisory Recommendations
                                        </div>
                                    </div>
                                    <Link href="/resources/assessment" className="prominence-btn-primary">
                                        <span>Start Assessment Now</span>
                                        <span>&rarr;</span>
                                    </Link>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div style={{ 
                                        background: "rgba(255,255,255,0.04)", 
                                        border: "1.5px solid rgba(255,255,255,0.1)", 
                                        borderRadius: "20px", 
                                        padding: "36px 28px", 
                                        display: "inline-block",
                                        minWidth: "200px"
                                    }}>
                                        <div style={{ fontSize: "52px", fontWeight: 900, color: "#FF3B81", lineHeight: "1", letterSpacing: "-0.03em" }}>
                                            3 Min
                                        </div>
                                        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "10px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                                            Confidential Self-Audit
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Guides & Checklists */}
                <section style={{ padding: "80px 0 100px", background: "#FAF9F5", borderTop: "1px solid rgba(18,19,22,0.08)" }}>
                    <div className="container">
                        <div style={{ marginBottom: "44px" }}>
                            <span className="editorial-badge" style={{ marginBottom: "12px" }}>
                                <span className="editorial-badge-dot">✦</span> OPERATIONAL FRAMEWORKS
                            </span>
                            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 850, color: "#121316", letterSpacing: "-0.02em" }}>
                                Strategic Toolkits &amp; Blueprints
                            </h2>
                        </div>

                        <div className="row g-4">
                            {resources.filter(r => !r.featured).map((res, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6">
                                    <div style={{ 
                                        padding: "36px 32px", 
                                        height: "100%",
                                        background: "#FFFFFF",
                                        borderRadius: "24px",
                                        border: "1.5px solid rgba(18,19,22,0.08)",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        boxShadow: "0 4px 20px rgba(18,19,22,0.03)"
                                    }}>
                                        <div>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                                                <div style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "10px",
                                                    background: "#FAF9F5",
                                                    border: "1px solid rgba(18,19,22,0.08)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#FF3B81",
                                                    fontSize: "16px"
                                                }}>
                                                    <i className={res.icon}></i>
                                                </div>
                                                <span className="editorial-badge" style={{ fontSize: "11px", padding: "4px 10px" }}>
                                                    {res.badge}
                                                </span>
                                            </div>
                                            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#121316", marginBottom: "10px", lineHeight: "1.3", letterSpacing: "-0.01em" }}>
                                                <Link href={res.href} style={{ color: "inherit", textDecoration: "none" }}>
                                                    {res.title}
                                                </Link>
                                            </h3>
                                            <p style={{ fontSize: "13px", fontWeight: "700", color: "#FF3B81", marginBottom: "14px" }}>
                                                {res.tagline}
                                            </p>
                                            <p style={{ fontSize: "14px", color: "#555A68", lineHeight: "1.65", marginBottom: "22px" }}>
                                                {res.description}
                                            </p>

                                            {/* Micro-Metadata Chips */}
                                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", background: "#FAF9F5", padding: "14px 16px", borderRadius: "14px", border: "1px solid rgba(18,19,22,0.06)", marginBottom: "24px" }}>
                                                <div>
                                                    <span style={{ fontSize: "10.5px", fontWeight: 700, color: "#8A8F9E", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>Specification</span>
                                                    <span style={{ fontSize: "12px", color: "#121316", fontWeight: 600 }}>{res.format}</span>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: "10.5px", fontWeight: 700, color: "#8A8F9E", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>Scope</span>
                                                    <span style={{ fontSize: "12px", color: "#121316", fontWeight: 600 }}>{res.scope}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ borderTop: "1px solid rgba(18,19,22,0.08)", paddingTop: "18px" }}>
                                            <Link 
                                                href={res.href} 
                                                className="prominence-btn-outline"
                                                style={{ fontSize: "13px", padding: "8px 16px" }}
                                            >
                                                <span>{res.ctaText} &rarr;</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <ModernFooter />
        </div>
    )
}
