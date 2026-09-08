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
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Executive Resources & Tools">
                
                {/* Hero Header */}
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="prominence_header_centered">
                            <div style={{ marginBottom: '12px' }}>
                                <span className="prominence_tracker">
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6' }}></span>
                                    Executive Toolkits &amp; Diagnostic Frameworks
                                </span>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(28px, 4.5vw, 42px)',
                                fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                                fontWeight: '700',
                                color: '#0D0D14',
                                lineHeight: '1.24',
                                marginBottom: '16px'
                            }}>
                                Frameworks for Evaluating Executive Stature
                            </h1>
                            <p className="prominence_lead_text" style={{ margin: '0 auto' }}>
                                Diagnostic tools, architectural checklists, and editorial standards developed by Prominence to help enterprise leaders benchmark their digital footprint and eliminate their authority gap.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Flagship Assessment Feature Banner */}
                <section className="prominence_section_compact" style={{ background: '#F7F5FC' }}>
                    <div className="container">
                        <div className="prominence_card_dark prominence_depth_card_dark" style={{ padding: 'clamp(32px, 5vw, 52px)', borderTop: '3px solid #8B5CF6' }}>
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div style={{ marginBottom: '16px' }}>
                                        <span className="prominence_badge prominence_badge_white">
                                            Featured Diagnostic Tool
                                        </span>
                                    </div>
                                    <h2 style={{
                                        fontSize: 'clamp(24px, 3.5vw, 32px)',
                                        fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                                        fontWeight: '700',
                                        color: '#fff',
                                        marginBottom: '16px'
                                    }}>
                                        The Executive Digital Presence Assessment
                                    </h2>
                                    <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.7', marginBottom: '24px', maxWidth: '640px' }}>
                                        Assess your digital standing across Google visibility, personal website ownership, LinkedIn authority, and third-party validation in 3 minutes. Zero fluff, completely transparent scoring rubric.
                                    </p>
                                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#cbd5e1' }}>
                                            <i className="fa-solid fa-circle-check" style={{ color: '#8B5CF6' }}></i> 6 Objective Stature Dimensions
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#cbd5e1' }}>
                                            <i className="fa-solid fa-circle-check" style={{ color: '#8B5CF6' }}></i> Immediate Calculated Score (0–100%)
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#8B5CF6' }}>
                                            <i className="fa-solid fa-circle-check" style={{ color: '#8B5CF6' }}></i> Tailored Advisory Recommendations
                                        </div>
                                    </div>
                                    <Link href="/resources/assessment" className="btn_style_gold btn_md">
                                        Start Assessment Now <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="col-lg-4 text-center mt-4 mt-lg-0">
                                    <div style={{ 
                                        background: 'rgba(255,255,255,0.04)', 
                                        border: '1px solid rgba(255,255,255,0.1)', 
                                        borderRadius: '12px', 
                                        padding: '32px', 
                                        display: 'inline-block' 
                                    }}>
                                        <div style={{ fontSize: '48px', fontFamily: 'var(--title-font, "PT Serif", Georgia, serif)', fontWeight: '700', color: '#fff', lineHeight: '1' }}>
                                            3 Min
                                        </div>
                                        <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '10px', fontWeight: '600', letterSpacing: '0.5px' }}>
                                            Confidential Self-Audit
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Guides & Checklists */}
                <section className="prominence_section" style={{ background: '#F7F5FC', borderTop: '1px solid #eaedf0' }}>
                    <div className="container">
                        <div className="prominence_header_left">
                            <div style={{ marginBottom: '10px' }}>
                                <span className="prominence_tracker">
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6' }}></span>
                                    Operational Frameworks
                                </span>
                            </div>
                            <h2 style={{ fontSize: '28px', fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", fontWeight: '700', color: '#0D0D14' }}>
                                Strategic Toolkits &amp; Blueprints
                            </h2>
                        </div>

                        <div className="row">
                            {resources.filter(r => !r.featured).map((res, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 mb_30">
                                    <div className="prominence_card prominence_card_equal_height prominence_depth_card" style={{ 
                                        padding: '36px 32px', 
                                        height: '100%',
                                        borderTop: '3px solid #8B5CF6'
                                    }}>
                                        <div className="prominence_card_body">
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                                                <div style={{
                                                    width: '38px',
                                                    height: '38px',
                                                    borderRadius: '8px',
                                                    background: 'rgba(139, 92, 246, 0.12)',
                                                    border: '1px solid rgba(139, 92, 246, 0.25)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#8B5CF6',
                                                    fontSize: '15px'
                                                }}>
                                                    <i className={res.icon}></i>
                                                </div>
                                                <span className="prominence_badge prominence_badge_dark">
                                                    {res.badge}
                                                </span>
                                            </div>
                                            <h3 style={{ fontSize: '20px', fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", fontWeight: '700', color: '#0D0D14', marginBottom: '8px', lineHeight: '1.35' }}>
                                                <Link href={res.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                    {res.title}
                                                </Link>
                                            </h3>
                                            <p style={{ fontSize: '13px', fontWeight: '600', color: '#8B5CF6', marginBottom: '14px' }}>
                                                {res.tagline}
                                            </p>
                                            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.7', marginBottom: '18px' }}>
                                                {res.description}
                                            </p>

                                            {/* Micro-Metadata Chips */}
                                            <div className="prominence_meta_grid" style={{ marginBottom: '20px' }}>
                                                <div className="prominence_meta_item">
                                                    <span className="prominence_meta_label">Specification</span>
                                                    <span className="prominence_meta_value" style={{ fontSize: '12px' }}>{res.format}</span>
                                                </div>
                                                <div className="prominence_meta_item">
                                                    <span className="prominence_meta_label">Scope</span>
                                                    <span className="prominence_meta_value" style={{ fontSize: '12px' }}>{res.scope}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prominence_card_footer" style={{ borderTop: '1px solid #eaedf0', paddingTop: '16px' }}>
                                            <Link 
                                                href={res.href} 
                                                className="btn_style_ghost"
                                                style={{ padding: 0 }}
                                            >
                                                {res.ctaText} <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
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
