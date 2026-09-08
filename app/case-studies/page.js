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
                                    Documented Impact
                                </span>
                            </div>
                            <h1 style={{ fontSize: "44px", fontWeight: "800", color: "#0d1b2a", lineHeight: "1.2", marginBottom: "20px" }}>
                                Proof of Sovereign Authority & Commercial Value
                            </h1>
                            <p style={{ fontSize: "19px", color: "#475569", lineHeight: "1.7" }}>
                                Every executive engagement is anchored in rigorous execution: Challenge → Strategy → Execution → Measurable Results. Below are verified pilot projects, demonstration engagements, and selected client work.
                            </p>
                            <div style={{ marginTop: "24px" }}>
                                <span style={{ 
                                    display: "inline-block", 
                                    fontSize: "13px", 
                                    color: "#64748b", 
                                    background: "#fff", 
                                    padding: "6px 16px", 
                                    borderRadius: "4px", 
                                    border: "1px solid #e2e8f0" 
                                }}>
                                    🔒 Client names and proprietary corporate disclosures are anonymized to honor executive non-disclosure agreements.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aggregate Proof Metrics Bar */}
                <section className="pt_60 pb_60" style={{ background: "#0d1b2a", color: "#fff" }}>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-3 col-6 mb_20 mb-lg-0">
                                <div style={{ fontSize: "40px", fontWeight: "900", color: "#d29d2b", lineHeight: "1" }}>#1</div>
                                <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "8px", fontWeight: "600" }}>Google Page 1 Search Ownership</div>
                            </div>
                            <div className="col-lg-3 col-6 mb_20 mb-lg-0">
                                <div style={{ fontSize: "40px", fontWeight: "900", color: "#38bdf8", lineHeight: "1" }}>2</div>
                                <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "8px", fontWeight: "600" }}>Paid NED Board directorships secured</div>
                            </div>
                            <div className="col-lg-3 col-6 mb_20 mb-lg-0">
                                <div style={{ fontSize: "40px", fontWeight: "900", color: "#34d399", lineHeight: "1" }}>&lt; 25 min</div>
                                <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "8px", fontWeight: "600" }}>Average monthly executive time tax</div>
                            </div>
                            <div className="col-lg-3 col-6 mb_20 mb-lg-0">
                                <div style={{ fontSize: "40px", fontWeight: "900", color: "#fff", lineHeight: "1" }}>100%</div>
                                <div style={{ fontSize: "14px", color: "#94a3b8", marginTop: "8px", fontWeight: "600" }}>Sovereign domain & IP client ownership</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className="pt_100 pb_90">
                    <div className="container">
                        <div className="row">
                            {CASE_STUDIES_DATA.map((cs) => (
                                <div key={cs.slug} className="col-lg-4 col-md-6 mb_40">
                                    <div style={{ 
                                        background: "#fff", 
                                        borderRadius: "14px", 
                                        border: "1px solid #e2e8f0", 
                                        overflow: "hidden", 
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
                                            <img 
                                                src={cs.heroImage} 
                                                alt={cs.title} 
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                            <div style={{ 
                                                position: "absolute", 
                                                top: "16px", 
                                                left: "16px", 
                                                background: "rgba(13, 27, 42, 0.9)", 
                                                color: cs.typeBadgeColor || "#fff", 
                                                fontSize: "11px", 
                                                fontWeight: "700", 
                                                padding: "4px 12px", 
                                                borderRadius: "20px" 
                                            }}>
                                                {cs.type}
                                            </div>
                                        </div>

                                        <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column" }}>
                                            <div style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                                                {cs.clientRole} • {cs.clientIndustry}
                                            </div>

                                            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0d1b2a", marginBottom: "12px", lineHeight: "1.3" }}>
                                                <Link href={`/case-studies/${cs.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                                                    {cs.shortTitle}
                                                </Link>
                                            </h3>

                                            <p style={{ color: "#2460e2", fontSize: "14px", fontWeight: "600", marginBottom: "16px", lineHeight: "1.5" }}>
                                                {cs.tagline}
                                            </p>

                                            <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px", flex: 1 }}>
                                                {cs.challenge.summary.substring(0, 120)}...
                                            </p>

                                            {/* Metrics preview */}
                                            <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "14px", marginBottom: "20px", border: "1px solid #eef2f6" }}>
                                                <div className="row g-2">
                                                    {cs.metrics.slice(0, 2).map((m, i) => (
                                                        <div key={i} className="col-6">
                                                            <div style={{ fontSize: "20px", fontWeight: "800", color: "#0d1b2a" }}>{m.value}</div>
                                                            <div style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.3" }}>{m.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                                                <Link 
                                                    href={`/case-studies/${cs.slug}`} 
                                                    style={{ 
                                                        fontSize: "14px", 
                                                        fontWeight: "700", 
                                                        color: "#2460e2", 
                                                        display: "inline-flex", 
                                                        alignItems: "center", 
                                                        gap: "6px",
                                                        textDecoration: "none" 
                                                    }}
                                                >
                                                    Read Full Case Study <span>→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Consultation CTA */}
                <section className="pt_90 pb_90" style={{ background: "#0d1b2a", color: "#fff", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                            <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Private Engagement
                            </span>
                            <h2 style={{ fontSize: "38px", fontWeight: "800", color: "#fff", marginTop: "12px", marginBottom: "16px" }}>
                                Architect Your Own Executive Proof Story
                            </h2>
                            <p style={{ color: "#94a3b8", fontSize: "17px", lineHeight: "1.7", marginBottom: "32px" }}>
                                Schedule a 30-minute private consultation with our managing partners to evaluate your current digital posture and define measurable authority milestones.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "16px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/how-it-works" className="btn_style_two" style={{ padding: "16px 32px", fontSize: "16px", background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
                                    Review Our 6-Stage Process
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
