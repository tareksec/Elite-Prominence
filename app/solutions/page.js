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
                                    Executive Solutions by Role
                                </span>
                            </div>
                            <h1 style={{ fontSize: "44px", fontWeight: "800", color: "#0d1b2a", lineHeight: "1.2", marginBottom: "20px" }}>
                                Reputational Architecture Built for Your Specific Mandate
                            </h1>
                            <p style={{ fontSize: "19px", color: "#475569", lineHeight: "1.7" }}>
                                A CEO faces investor diligence and market valuation pressure. A CHRO targets corporate governance board appointments. A Founder seeks fundraising gravitas. We engineer bespoke reputation architectures calibrated to your unique career objectives.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "14px 32px", fontSize: "15px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/resources/assessment" className="btn_style_two" style={{ padding: "14px 28px", fontSize: "15px", background: "#fff" }}>
                                    Take the Digital Presence Assessment
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Persona Cards Grid */}
                <section className="pt_100 pb_90">
                    <div className="container">
                        <div className="row">
                            {SOLUTIONS_DATA.map((solution, idx) => (
                                <div key={solution.slug} className="col-lg-6 mb_40">
                                    <div style={{ 
                                        background: "#fff", 
                                        borderRadius: "14px", 
                                        overflow: "hidden", 
                                        border: "1px solid #e2e8f0", 
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <div style={{ height: "220px", position: "relative", overflow: "hidden" }}>
                                            <img 
                                                src={solution.heroImage} 
                                                alt={solution.title} 
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                            <div style={{ 
                                                position: "absolute", 
                                                top: "16px", 
                                                left: "16px", 
                                                background: "rgba(13, 27, 42, 0.85)", 
                                                backdropFilter: "blur(6px)",
                                                color: "#fff", 
                                                fontSize: "11px", 
                                                fontWeight: "700", 
                                                padding: "4px 14px", 
                                                borderRadius: "20px" 
                                            }}>
                                                {solution.badge}
                                            </div>
                                        </div>

                                        <div style={{ padding: "36px", flex: 1, display: "flex", flexDirection: "column" }}>
                                            <span style={{ fontSize: "12px", fontWeight: "700", color: "#2460e2", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                                                {solution.tagline}
                                            </span>
                                            <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#0d1b2a", marginBottom: "14px", lineHeight: "1.3" }}>
                                                <Link href={`/solutions/${solution.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                                                    {solution.title}
                                                </Link>
                                            </h3>
                                            <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: "24px", flex: 1 }}>
                                                {solution.executiveSummary}
                                            </p>

                                            <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "18px 20px", marginBottom: "24px", border: "1px solid #f1f5f9" }}>
                                                <h4 style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>
                                                    Primary Friction Points Solved:
                                                </h4>
                                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                                    {solution.uniqueChallenges.slice(0, 2).map((ch, i) => (
                                                        <li key={i} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#334155", marginBottom: "6px" }}>
                                                            <span style={{ color: "#e53e3e", fontWeight: "bold" }}>✕</span>
                                                            <span><strong>{ch.title}:</strong> {ch.desc.substring(0, 75)}...</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                                                <Link 
                                                    href={`/solutions/${solution.slug}`} 
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
                                                    View Executive Solution <span>→</span>
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
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Interactive Assessment Teaser Banner */}
                <section className="pt_80 pb_80" style={{ background: "#0d1b2a", color: "#fff" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                    Executive Self-Audit
                                </span>
                                <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#fff", marginTop: "8px" }}>
                                    Calculate Your Executive Digital Presence Score
                                </h2>
                                <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "8px", margin: 0, maxWidth: "680px" }}>
                                    Audit your Google search placement, LinkedIn gravitas, owned website sovereignty, and media proof in 3 minutes across 6 objective dimensions.
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                <Link href="/resources/assessment" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "15px" }}>
                                    Start Free Assessment
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
