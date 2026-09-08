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
            featured: false
        },
        {
            badge: 'Search Guide',
            title: 'Executive Google Search & Entity Optimization Guide',
            tagline: 'Defeating Namesake Conflicts & Owning Page 1',
            description: 'Understand how Google indexes executive names, how Knowledge Graph entity reconciliation works, and how to permanently control your first 10 search results.',
            href: '/services/digital-reputation',
            ctaText: 'View Guide',
            featured: false
        },
        {
            badge: 'Editorial Rubric',
            title: 'LinkedIn Gravitas & Boardroom Profile Audit',
            tagline: 'Moving from Operational Resume to Strategic Authority',
            description: 'How to rewrite your LinkedIn headline, summary thesis, and experience section to signal enterprise governance and attract board directorship inquiries.',
            href: '/services/linkedin-authority',
            ctaText: 'Review Rubric',
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
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '860px', margin: '0 auto' }}>
                            <div className="tag_text">
                                <h6>Executive Toolkits & Diagnostic Frameworks</h6>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(28px, 5vw, 42px)',
                                fontFamily: "var(--ep-font-serif, 'PT Serif', serif)",
                                fontWeight: '700',
                                color: '#0f1013',
                                lineHeight: '1.25',
                                marginBottom: '20px'
                            }}>
                                Frameworks for Evaluating Executive Stature
                            </h1>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.7', margin: '0 auto' }}>
                                Diagnostic tools, architectural checklists, and editorial standards developed by Prominence to help enterprise leaders benchmark their digital footprint and eliminate their authority gap.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Flagship Assessment Feature Banner */}
                <section className="pt_80 pb_60" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div className="prominence_card_dark" style={{ padding: 'clamp(32px, 5vw, 52px)' }}>
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div style={{ marginBottom: '16px' }}>
                                        <span className="prominence_badge" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                                            Featured Diagnostic Tool
                                        </span>
                                    </div>
                                    <h2 style={{
                                        fontSize: 'clamp(24px, 4vw, 34px)',
                                        fontFamily: "var(--ep-font-serif, 'PT Serif', serif)",
                                        fontWeight: '700',
                                        color: '#fff',
                                        marginBottom: '16px'
                                    }}>
                                        The Executive Digital Presence Assessment
                                    </h2>
                                    <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.7', marginBottom: '24px', maxWidth: '680px' }}>
                                        Assess your digital standing across Google visibility, personal website ownership, LinkedIn authority, and third-party validation in 3 minutes. Zero fluff, completely transparent scoring rubric.
                                    </p>
                                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#cbd5e1' }}>
                                            <i className="fa-solid fa-circle-check" style={{ color: '#b89058' }}></i> 6 Objective Stature Dimensions
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#cbd5e1' }}>
                                            <i className="fa-solid fa-circle-check" style={{ color: '#b89058' }}></i> Immediate Calculated Score (0–100%)
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#cbd5e1' }}>
                                            <i className="fa-solid fa-circle-check" style={{ color: '#b89058' }}></i> Tailored Advisory Recommendations
                                        </div>
                                    </div>
                                    <Link href="/resources/assessment" className="btn_style_gold">
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
                                        <div style={{ fontSize: '52px', fontFamily: 'var(--primary-font)', fontWeight: '700', color: '#fff', lineHeight: '1' }}>
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
                <section className="pt_40 pb_90" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div className="section_title" style={{ marginBottom: '36px' }}>
                            <div className="tag_text">
                                <h6>Operational Frameworks</h6>
                            </div>
                            <h2 style={{ fontSize: '28px', fontFamily: 'var(--primary-font)', fontWeight: '700', color: '#0f1013' }}>
                                Strategic Toolkits & Blueprints
                            </h2>
                        </div>

                        <div className="row">
                            {resources.filter(r => !r.featured).map((res, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 mb_30">
                                    <div className="prominence_card prominence_card_equal_height" style={{ 
                                        padding: '32px', 
                                        height: '100%'
                                    }}>
                                        <div className="prominence_card_body">
                                            <div style={{ marginBottom: '12px' }}>
                                                <span className="prominence_badge">
                                                    {res.badge}
                                                </span>
                                            </div>
                                            <h3 style={{ fontSize: '19px', fontFamily: 'var(--primary-font)', fontWeight: '700', color: '#0f1013', marginBottom: '8px', lineHeight: '1.35' }}>
                                                <Link href={res.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                    {res.title}
                                                </Link>
                                            </h3>
                                            <p style={{ fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '14px' }}>
                                                {res.tagline}
                                            </p>
                                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.7', marginBottom: '24px' }}>
                                                {res.description}
                                            </p>
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
