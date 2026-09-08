import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Testimonial from '@/components/sections/home3/Testimonial'
import { SOLUTIONS_DATA } from '@/lib/solutionsData'

export const metadata = {
    title: 'Who We Serve | Executive Solutions | Prominence',
    description: 'Bespoke executive digital presence and reputation architecture tailored for CEOs, CHROs, enterprise founders, senior executives, and elite consultants.',
    alternates: {
        canonical: '/solutions',
    },
    openGraph: {
        title: 'Who We Serve — Prominence Executive Solutions',
        description: 'Bespoke digital presence tailored for CEOs, CHROs, enterprise founders, senior executives, and elite consultants.',
        url: 'https://www.prominence.agency/solutions',
        siteName: 'Prominence.agency',
        locale: 'en_US',
        type: 'website',
    },
}

const solutionsSchema = {
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
                    name: 'Solutions',
                    item: 'https://www.prominence.agency/solutions',
                },
            ],
        },
        {
            '@type': 'Service',
            name: 'Executive Solutions by Leadership Role',
            provider: {
                '@type': 'Organization',
                name: 'Prominence',
                url: 'https://www.prominence.agency',
            },
            description: 'Specialized reputation management and executive digital presence engineered for specific leadership roles: CEOs, CHROs, Founders, Senior Executives, and Consultants.',
            areaServed: 'Worldwide',
        },
    ],
}

export default function SolutionsOverviewPage() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Who We Serve">
                
                {/* Hero Header */}
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "860px", margin: "0 auto" }}>
                            <div className="tag_text">
                                <h6>Executive Solutions by Role</h6>
                            </div>
                            <h1>Reputational Architecture Built for Your Specific Mandate</h1>
                            <p>
                                A CEO faces investor diligence and market valuation pressure. A CHRO targets corporate governance board appointments. A Founder seeks fundraising gravitas. We engineer bespoke reputation architectures calibrated to your unique career objectives.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/contact" className="btn_style_one">
                                    Book a Private Consultation
                                </Link>
                                <Link href="/resources/assessment" className="btn_style_two">
                                    Evaluate Your Stature <i className="fa-solid fa-angle-right ms-2" style={{ fontSize: "12px" }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Persona Cards Grid */}
                <section className="pt_100 pb_90" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="row">
                            {SOLUTIONS_DATA.map((solution) => (
                                <div key={solution.slug} className="col-lg-6 mb_40">
                                    <div className="prominence_card">
                                        <div style={{ height: "220px", margin: "-36px -32px 28px", position: "relative", overflow: "hidden", borderBottom: "1px solid #edf2f7" }}>
                                            <img 
                                                src={solution.heroImage} 
                                                alt={solution.title} 
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                            <div style={{ 
                                                position: "absolute", 
                                                top: "16px", 
                                                left: "16px", 
                                                background: "rgba(15, 16, 19, 0.9)", 
                                                color: "#ffffff", 
                                                fontSize: "11px", 
                                                fontWeight: "700", 
                                                padding: "4px 12px", 
                                                borderRadius: "4px",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.8px",
                                                fontFamily: "var(--primary-font)"
                                            }}>
                                                {solution.badge}
                                            </div>
                                        </div>

                                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontFamily: "var(--primary-font)" }}>
                                            {solution.tagline}
                                        </span>
                                        <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#0f1013", marginBottom: "14px", lineHeight: "1.3" }}>
                                            <Link href={`/solutions/${solution.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                                                {solution.title}
                                            </Link>
                                        </h3>
                                        <p style={{ color: "#59606a", fontSize: "15px", lineHeight: "26px", marginBottom: "24px", flex: 1 }}>
                                            {solution.executiveSummary}
                                        </p>

                                        <div style={{ background: "#fafbfc", borderRadius: "8px", padding: "18px 20px", marginBottom: "24px", border: "1px solid #eef2f6" }}>
                                            <h4 style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "10px", fontFamily: "var(--primary-font)" }}>
                                                Reputation Vulnerabilities Solved:
                                            </h4>
                                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                                {solution.uniqueChallenges.slice(0, 2).map((ch, i) => (
                                                    <li key={i} style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#334155", marginBottom: "8px", lineHeight: "20px" }}>
                                                        <span style={{ color: "#64748b", fontWeight: "700" }}>—</span>
                                                        <span><strong style={{ color: "#0f1013" }}>{ch.title}:</strong> {ch.desc.substring(0, 80)}...</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "12px", borderTop: "1px solid #f8fafc" }}>
                                            <Link 
                                                href={`/solutions/${solution.slug}`} 
                                                style={{ 
                                                    fontSize: "14px", 
                                                    fontWeight: "700", 
                                                    color: "#0f1013", 
                                                    display: "inline-flex", 
                                                    alignItems: "center", 
                                                    gap: "6px",
                                                    textDecoration: "none",
                                                    fontFamily: "var(--primary-font)"
                                                }}
                                            >
                                                Explore Mandate Architecture <i className="fa-solid fa-angle-right" style={{ fontSize: "11px" }}></i>
                                            </Link>
                                            <Link 
                                                href="/contact" 
                                                style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", textDecoration: "none" }}
                                            >
                                                Inquire Confidentially
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Self-Audit Banner */}
                <section className="pt_80 pb_80" style={{ background: "#f8fafd", borderTop: "1px solid #edf2f7" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="tag_text" style={{ marginBottom: "12px" }}>
                                    <h6>Executive Diagnostic</h6>
                                </div>
                                <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#0f1013", marginTop: "8px" }}>
                                    Calculate Your Executive Digital Presence Score
                                </h2>
                                <p style={{ color: "#59606a", fontSize: "16px", marginTop: "8px", margin: 0, maxWidth: "680px", lineHeight: "26px" }}>
                                    Audit your Google search placement, LinkedIn gravitas, owned website sovereignty, and media proof in 3 minutes across 6 objective dimensions.
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                <Link href="/resources/assessment" className="btn_style_one">
                                    Start Assessment
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
