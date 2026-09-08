import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Testimonial from '@/components/sections/home3/Testimonial'
import { CASE_STUDIES_DATA } from '@/lib/caseStudiesData'

export const metadata = {
    title: 'Case Studies & Executive Proof | Prominence',
    description: 'Documented executive reputation outcomes, pilot demonstration projects, and selected work for enterprise leaders, CHROs, and founders.',
    alternates: {
        canonical: '/case-studies',
    },
    openGraph: {
        title: 'Executive Case Studies & Proof — Prominence',
        description: 'Documented executive reputation outcomes: board appointments, Google search dominance, and authority compounding.',
        url: 'https://www.prominence.agency/case-studies',
        siteName: 'Prominence.agency',
        locale: 'en_US',
        type: 'website',
    },
}

const caseStudiesSchema = {
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
                    name: 'Case Studies',
                    item: 'https://www.prominence.agency/case-studies',
                },
            ],
        },
        {
            '@type': 'CollectionPage',
            name: 'Executive Reputation Case Studies & Pilot Proofs',
            description: 'Structured case studies demonstrating how sovereign digital presence impacts board directorships, enterprise capital raises, and executive authority.',
            url: 'https://www.prominence.agency/case-studies',
        },
    ],
}

export default function CaseStudiesOverviewPage() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Executive Proof & Case Studies">
                
                {/* Hero Header */}
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="prominence_header_centered">
                            <div style={{ marginBottom: '12px' }}>
                                <span className="prominence_tracker">
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6' }}></span>
                                    Documented Impact
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
                                Proof of Sovereign Authority &amp; Commercial Value
                            </h1>
                            <p className="prominence_lead_text" style={{ margin: '0 auto' }}>
                                Every executive engagement is anchored in rigorous execution: Challenge → Strategy → Execution → Measurable Results. Below are selected client outcomes and demonstration engagements.
                            </p>
                            <div style={{ marginTop: '24px' }}>
                                <span className="prominence_badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                    <i className="fa-solid fa-shield-halved" style={{ color: '#8B5CF6' }}></i> Client names and proprietary metrics are anonymized to honor non-disclosure agreements
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aggregate Proof Metrics Bar */}
                <section className="prominence_section_compact" style={{ background: '#0D0D14', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-3 col-6 mb_20 mb-lg-0">
                                <div className="prominence_stat_val">#1</div>
                                <div className="prominence_stat_label">Google Page 1 Search Ownership</div>
                            </div>
                            <div className="col-lg-3 col-6 mb_20 mb-lg-0">
                                <div className="prominence_stat_val">2</div>
                                <div className="prominence_stat_label">Paid NED Board Directorships Secured</div>
                            </div>
                            <div className="col-lg-3 col-6 mb_20 mb-lg-0">
                                <div className="prominence_stat_val">&lt; 25 min</div>
                                <div className="prominence_stat_label">Monthly Executive Time Investment</div>
                            </div>
                            <div className="col-lg-3 col-6 mb_20 mb-lg-0">
                                <div className="prominence_stat_val">100%</div>
                                <div className="prominence_stat_label">Sovereign Domain &amp; IP Ownership</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className="prominence_section" style={{ background: '#F7F5FC' }}>
                    <div className="container">
                        <div className="row">
                            {CASE_STUDIES_DATA.map((cs) => (
                                <div key={cs.slug} className="col-lg-4 col-md-6 mb_40">
                                    <div className="prominence_card prominence_card_equal_height prominence_depth_card" style={{ 
                                        overflow: 'hidden', 
                                        height: '100%',
                                        padding: 0,
                                        borderTop: '3px solid #8B5CF6',
                                        backgroundColor: '#ffffff'
                                    }}>
                                        <div style={{ height: '210px', position: 'relative', overflow: 'hidden' }}>
                                            <img 
                                                src={cs.heroImage} 
                                                alt={cs.title} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                            <div style={{ 
                                                position: 'absolute', 
                                                top: '16px', 
                                                left: '16px', 
                                                background: 'rgba(13, 13, 20, 0.92)', 
                                                color: '#fff', 
                                                fontSize: '11px', 
                                                fontWeight: '700', 
                                                padding: '4px 12px', 
                                                borderRadius: '6px', 
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase'
                                            }}>
                                                {cs.type}
                                            </div>
                                        </div>

                                        <div className="prominence_card_body" style={{ padding: '32px' }}>
                                             <div style={{ fontSize: '12px', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                                                {cs.clientRole} • {cs.clientIndustry}
                                            </div>

                                            <h3 style={{ fontSize: '20px', fontFamily: 'var(--title-font, "PT Serif", Georgia, serif)', fontWeight: '700', color: '#0D0D14', marginBottom: '10px', lineHeight: '1.35' }}>
                                                <Link href={`/case-studies/${cs.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                    {cs.shortTitle}
                                                </Link>
                                            </h3>

                                            <p style={{ color: '#334155', fontSize: '13.5px', fontWeight: '600', marginBottom: '14px', lineHeight: '1.5' }}>
                                                {cs.tagline}
                                            </p>

                                            <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                                                {cs.challenge.summary.substring(0, 115)}...
                                            </p>

                                            {/* Metrics preview */}
                                            <div style={{ background: '#F7F5FC', borderRadius: '8px', padding: '14px 16px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                                                <div className="row g-2">
                                                    {cs.metrics.slice(0, 2).map((m, i) => (
                                                        <div key={i} className="col-6">
                                                            <div style={{ fontSize: '19px', fontFamily: 'var(--title-font, "PT Serif", Georgia, serif)', fontWeight: '700', color: '#0D0D14' }}>{m.value}</div>
                                                            <div style={{ fontSize: '11px', color: '#6B7280', lineHeight: '1.3' }}>{m.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="prominence_card_footer" style={{ padding: '0 32px 32px', borderTop: 'none' }}>
                                            <Link 
                                                href={`/case-studies/${cs.slug}`} 
                                                className="btn_style_ghost"
                                                style={{ padding: 0 }}
                                            >
                                                Read Full Case Study <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Consultation CTA */}
                <section className="prominence_section" style={{ background: '#0D0D14', color: '#fff', textAlign: 'center' }}>
                    <div className="container">
                        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                            <div className="tag_text" style={{ marginBottom: '14px' }}>
                                <h6 style={{ color: '#94a3b8' }}>Private Engagement</h6>
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(26px, 4vw, 36px)',
                                fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                                fontWeight: '700',
                                color: '#fff',
                                marginBottom: '16px'
                            }}>
                                Architect Your Own Executive Proof Story
                            </h2>
                            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
                                Schedule a 30-minute private consultation with our managing partners to evaluate your current digital posture and define measurable authority milestones.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn_style_gold btn_md">
                                    Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link href="/how-it-works" className="btn_style_two_dark btn_md">
                                    Review Methodology
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <Testimonial/>

            </Layout>
        </div>
    )
}
