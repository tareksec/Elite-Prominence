import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Testimonial from '@/components/sections/home3/Testimonial'

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
            badgeColor: '#2460e2',
            title: 'Executive Digital Presence Assessment',
            tagline: 'Audit your public stature across 6 objective dimensions in 3 minutes',
            description: 'Evaluate your Google search dominance, personal website sovereignty, LinkedIn gravitas, media proof, and corporate PR compliance. Receive an immediate authority score and gap analysis.',
            href: '/resources/assessment',
            ctaText: 'Start Assessment →',
            featured: true
        },
        {
            badge: 'Audit Checklist',
            badgeColor: '#059669',
            title: 'The Sovereign Digital HQ Architecture Checklist',
            tagline: '12-Point Technical & Content Blueprint',
            description: 'A comprehensive specification of what a Fortune 500 CEO or board director website requires: domain sovereignty, JSON-LD schema, board dossier presentation, and strict data security.',
            href: '/services/executive-digital-hq',
            ctaText: 'Explore Blueprint →',
            featured: false
        },
        {
            badge: 'Search Guide',
            badgeColor: '#d97706',
            title: 'Executive Google Search & Entity Optimization Guide',
            tagline: 'Defeating Namesake Conflicts & Owning Page 1',
            description: 'Understand how Google indexes executive names, how Knowledge Graph entity reconciliation works, and how to permanently control your first 10 search results.',
            href: '/services/digital-reputation',
            ctaText: 'View Guide →',
            featured: false
        },
        {
            badge: 'Editorial Rubric',
            badgeColor: '#7c3aed',
            title: 'LinkedIn Gravitas & Boardroom Profile Audit',
            tagline: 'Moving from Operational Resume to Strategic Authority',
            description: 'How to rewrite your LinkedIn headline, summary thesis, and experience section to signal enterprise governance and attract board directorship inquiries.',
            href: '/services/linkedin-authority',
            ctaText: 'Review Rubric →',
            featured: false
        }
    ]

    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Executive Resources & Tools">
                
                {/* Hero Header */}
                <section className="pt_120 pb_70" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "860px", margin: "0 auto" }}>
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
                                <span style={{ 
                                    display: 'inline-block', 
                                    padding: '6px 16px', 
                                    background: '#ecf3ff', 
                                    color: '#2460e2', 
                                    fontWeight: '700', 
                                    fontSize: '12px', 
                                    letterSpacing: '1px', 
                                    textTransform: 'uppercase', 
                                    borderRadius: '50px' 
                                }}>
                                    Executive Toolkits & Self-Audits
                                </span>
                            </div>
                            <h1 style={{ fontSize: "44px", fontWeight: "800", color: "#0d1b2a", lineHeight: "1.2", marginBottom: "20px" }}>
                                Practical Frameworks for Evaluating Executive Stature
                            </h1>
                            <p style={{ fontSize: "19px", color: "#475569", lineHeight: "1.7" }}>
                                Diagnostic tools, architectural checklists, and editorial standards developed by Prominence to help enterprise leaders evaluate their digital footprint and close their authority gap.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Flagship Assessment Feature Banner */}
                <section className="pt_80 pb_60">
                    <div className="container">
                        <div style={{ 
                            background: "linear-gradient(135deg, #0d1b2a 0%, #1e3a8a 100%)", 
                            borderRadius: "16px", 
                            padding: "50px", 
                            color: "#fff",
                            boxShadow: "0 20px 45px rgba(13,27,42,0.15)"
                        }}>
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <span style={{ 
                                        background: "#d29d2b", 
                                        color: "#0d1b2a", 
                                        fontWeight: "800", 
                                        fontSize: "11px", 
                                        padding: "4px 12px", 
                                        borderRadius: "20px", 
                                        textTransform: "uppercase", 
                                        letterSpacing: "1px" 
                                    }}>
                                        Featured Diagnostic Tool
                                    </span>
                                    <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#fff", marginTop: "16px", marginBottom: "16px" }}>
                                        The Executive Digital Presence Assessment
                                    </h2>
                                    <p style={{ fontSize: "17px", color: "#cbd5e1", lineHeight: "1.7", marginBottom: "24px", maxWidth: "680px" }}>
                                        Assess your digital standing across Google visibility, personal website ownership, LinkedIn authority, and third-party validation in 3 minutes. Zero fluff, completely transparent scoring rubric.
                                    </p>
                                    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "28px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#93c5fd" }}>
                                            <span>✓</span> 6 Objective Stature Dimensions
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#93c5fd" }}>
                                            <span>✓</span> Immediate Calculated Score (0–100%)
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#93c5fd" }}>
                                            <span>✓</span> Tailored Advisory Recommendations
                                        </div>
                                    </div>
                                    <Link href="/resources/assessment" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "15px" }}>
                                        Start Assessment Now →
                                    </Link>
                                </div>
                                <div className="col-lg-4 text-center mt-4 mt-lg-0">
                                    <div style={{ 
                                        background: "rgba(255,255,255,0.08)", 
                                        border: "1px solid rgba(255,255,255,0.15)", 
                                        borderRadius: "14px", 
                                        padding: "30px", 
                                        display: "inline-block" 
                                    }}>
                                        <div style={{ fontSize: "56px", fontWeight: "900", color: "#d29d2b", lineHeight: "1" }}>
                                            3 Min
                                        </div>
                                        <div style={{ fontSize: "14px", color: "#e2e8f0", marginTop: "8px", fontWeight: "600" }}>
                                            Confidential Self-Audit
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Guides & Checklists */}
                <section className="pt_40 pb_90">
                    <div className="container">
                        <div className="section_title" style={{ marginBottom: "36px" }}>
                            <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#0d1b2a" }}>
                                Strategic Toolkits & Blueprints
                            </h2>
                        </div>

                        <div className="row">
                            {resources.filter(r => !r.featured).map((res, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 mb_30">
                                    <div style={{ 
                                        background: "#fff", 
                                        border: "1px solid #e2e8f0", 
                                        borderRadius: "12px", 
                                        padding: "32px", 
                                        height: "100%", 
                                        display: "flex", 
                                        flexDirection: "column",
                                        boxShadow: "0 4px 15px rgba(0,0,0,0.03)" 
                                    }}>
                                        <span style={{ 
                                            display: "inline-block", 
                                            fontSize: "11px", 
                                            fontWeight: "700", 
                                            color: res.badgeColor, 
                                            textTransform: "uppercase", 
                                            letterSpacing: "1px", 
                                            marginBottom: "10px" 
                                        }}>
                                            {res.badge}
                                        </span>
                                        <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0d1b2a", marginBottom: "8px", lineHeight: "1.3" }}>
                                            <Link href={res.href} style={{ color: "inherit", textDecoration: "none" }}>
                                                {res.title}
                                            </Link>
                                        </h3>
                                        <p style={{ fontSize: "13px", fontWeight: "600", color: "#2460e2", marginBottom: "14px" }}>
                                            {res.tagline}
                                        </p>
                                        <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.7", marginBottom: "24px", flex: 1 }}>
                                            {res.description}
                                        </p>
                                        <Link 
                                            href={res.href} 
                                            style={{ 
                                                fontSize: "14px", 
                                                fontWeight: "700", 
                                                color: "#2460e2", 
                                                textDecoration: "none", 
                                                marginTop: "auto",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "6px" 
                                            }}
                                        >
                                            {res.ctaText}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Testimonial/>

            </Layout>
        </div>
    )
}
