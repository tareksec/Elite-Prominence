import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home3/Testimonial'
import { SERVICES_DATA } from '@/lib/servicesData'

export const metadata = {
    title: 'Executive Personal Branding & Reputation Services | Prominence',
    description: 'Bespoke digital reputation management, personal executive websites, LinkedIn thought leadership, executive SEO, and personal brand strategy for CEOs, CHROs, and high-level leaders.',
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: 'Executive Personal Branding & Digital Reputation Services | Prominence',
        description: 'Comprehensive, done-for-you reputation architecture: Executive Digital HQ, Google search dominance, strategic ghostwriting, and authority building.',
        url: 'https://www.prominence.agency/services',
        siteName: 'Prominence.agency',
        locale: 'en_US',
        type: 'website',
    },
}

const serviceSchema = {
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
                    name: 'Services',
                    item: 'https://www.prominence.agency/services',
                },
            ],
        },
        {
            '@type': 'Service',
            name: 'Executive Personal Branding & Digital Reputation Services',
            provider: {
                '@type': 'Organization',
                name: 'Prominence',
                url: 'https://www.prominence.agency',
            },
            description: 'Discreet, turnkey executive reputation architecture for CEOs, CHROs, enterprise founders, and senior executives.',
            areaServed: 'Worldwide',
            serviceType: 'Executive Reputation Management, Personal Branding, Executive Ghostwriting, Digital HQ Development, Executive SEO',
        },
    ],
}

export default function Service_Page() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Executive Reputation Architecture">
                
                {/* Services Hero Header */}
                <section className="service_page_intro pt_120 pb_70" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
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
                                    The 7 Core Capabilities
                                </span>
                            </div>
                            <h1 style={{ fontSize: "44px", fontWeight: "800", color: "#0d1b2a", lineHeight: "1.2", marginBottom: "20px" }}>
                                Sovereign Digital Stature Engineered for Enterprise Leaders
                            </h1>
                            <p style={{ fontSize: "19px", color: "#475569", lineHeight: "1.7" }}>
                                Prominence does not offer generic marketing retainers or superficial social management. We build permanent, owned reputation assets that establish institutional authority, protect against reputational risk, and unlock boardroom, investor, and career opportunities.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "14px 32px", fontSize: "15px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/resources/assessment" className="btn_style_two" style={{ padding: "14px 28px", fontSize: "15px", background: "#fff" }}>
                                    Evaluate Your Digital Stature
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The 7 Core Services Grid */}
                <section className="service_details_section pt_100 pb_90">
                    <div className="container">
                        <div className="row">
                            {SERVICES_DATA.map((service, idx) => (
                                <div key={service.slug} className="col-lg-4 col-md-6 col-sm-12 mb_40">
                                    <div className="service_card_executive" style={{ 
                                        height: "100%", 
                                        background: "#fff", 
                                        borderRadius: "14px", 
                                        overflow: "hidden", 
                                        boxShadow: "0 10px 35px rgba(0,0,0,0.06)", 
                                        border: "1px solid #eef2f6",
                                        display: "flex", 
                                        flexDirection: "column",
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease" 
                                    }}>
                                        <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                                            <img 
                                                src={service.heroImage} 
                                                alt={service.title} 
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
                                                padding: "4px 12px", 
                                                borderRadius: "20px",
                                                letterSpacing: "0.5px"
                                            }}>
                                                {service.badge}
                                            </div>
                                        </div>
                                        <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column" }}>
                                            <span style={{ fontSize: "12px", fontWeight: "700", color: "#2460e2", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>
                                                {service.tagline}
                                            </span>
                                            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#0d1b2a", marginBottom: "14px", lineHeight: "1.3" }}>
                                                <Link href={`/services/${service.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                                                    {service.title}
                                                </Link>
                                            </h3>
                                            <p style={{ color: "#64748b", lineHeight: "1.7", marginBottom: "24px", fontSize: "15px", flex: 1 }}>
                                                {service.shortDescription}
                                            </p>

                                            <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "18px", marginBottom: "24px" }}>
                                                <h4 style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>
                                                    Core Strategic Deliverables
                                                </h4>
                                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                                    {service.deliverables.slice(0, 3).map((item, i) => (
                                                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#334155", marginBottom: "6px" }}>
                                                            <span style={{ color: "#2460e2", fontWeight: "bold" }}>✓</span>
                                                            <span style={{ lineHeight: "1.4" }}>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                <Link 
                                                    href={`/services/${service.slug}`} 
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
                                                    Explore Full Scope <span>→</span>
                                                </Link>
                                                <Link 
                                                    href="/contact" 
                                                    style={{ 
                                                        fontSize: "13px", 
                                                        fontWeight: "600", 
                                                        color: "#64748b",
                                                        textDecoration: "none" 
                                                    }}
                                                >
                                                    Inquire
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Strategic Comparison: Owned Authority vs. Rented Noise */}
                <section className="pt_90 pb_90" style={{ background: "#0d1b2a", color: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "800px", margin: "0 auto 60px" }}>
                            <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                The Prominence Difference
                            </span>
                            <h2 style={{ fontSize: "38px", fontWeight: "800", color: "#fff", marginTop: "12px" }}>
                                Owned Authority vs. Rented Noise
                            </h2>
                            <p style={{ color: "#94a3b8", fontSize: "17px", marginTop: "14px", lineHeight: "1.7" }}>
                                Traditional marketing agencies treat executives like influencers, chasing superficial vanity metrics. Prominence operates as a private strategic communications counsel, building sovereign institutional assets.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 mb_30">
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "40px", height: "100%" }}>
                                    <span style={{ color: "#ef4444", fontWeight: "700", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>
                                        ✕ Typical Digital Agencies & Freelancers
                                    </span>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px", color: "#cbd5e1", fontSize: "15px" }}>
                                        <li style={{ display: "flex", gap: "12px" }}>
                                            <span style={{ color: "#ef4444" }}>—</span>
                                            <div><strong>Generic Templates:</strong> Cheap WordPress or Wix sites that look indistinguishable from junior consultants.</div>
                                        </li>
                                        <li style={{ display: "flex", gap: "12px" }}>
                                            <span style={{ color: "#ef4444" }}>—</span>
                                            <div><strong>Shallow Social Posts:</strong> Generic AI-generated platitudes that dilute executive gravitas and embarrass corporate PR.</div>
                                        </li>
                                        <li style={{ display: "flex", gap: "12px" }}>
                                            <span style={{ color: "#ef4444" }}>—</span>
                                            <div><strong>Rented Land Only:</strong> 100% dependent on LinkedIn algorithms with zero owned domain presence or Google Knowledge Panel.</div>
                                        </li>
                                        <li style={{ display: "flex", gap: "12px" }}>
                                            <span style={{ color: "#ef4444" }}>—</span>
                                            <div><strong>High Client Time Tax:</strong> Constant review requests, confusing task boards, and dozens of revisions.</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 mb_30">
                                <div style={{ background: "linear-gradient(135deg, rgba(36,96,226,0.15) 0%, rgba(210,157,43,0.1) 100%)", border: "1px solid rgba(36,96,226,0.4)", borderRadius: "12px", padding: "40px", height: "100%" }}>
                                    <span style={{ color: "#38bdf8", fontWeight: "700", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>
                                        ✓ The Prominence Sovereign Standard
                                    </span>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px", color: "#f8fafc", fontSize: "15px" }}>
                                        <li style={{ display: "flex", gap: "12px" }}>
                                            <span style={{ color: "#38bdf8" }}>✓</span>
                                            <div><strong>Bespoke Engineering:</strong> Next.js custom Digital HQ architected for boardroom due diligence and instant credibility.</div>
                                        </li>
                                        <li style={{ display: "flex", gap: "12px" }}>
                                            <span style={{ color: "#38bdf8" }}>✓</span>
                                            <div><strong>Substantive Editorial Content:</strong> Strategic essays authored by senior journalists calibrated to your exact executive voice.</div>
                                        </li>
                                        <li style={{ display: "flex", gap: "12px" }}>
                                            <span style={{ color: "#38bdf8" }}>✓</span>
                                            <div><strong>Permanent Search Domination:</strong> Page 1 Google control, structured JSON-LD entity schema, and media syndication.</div>
                                        </li>
                                        <li style={{ display: "flex", gap: "12px" }}>
                                            <span style={{ color: "#38bdf8" }}>✓</span>
                                            <div><strong>Frictionless Execution:</strong> Requires under 30 minutes of your time per month with complete discretion.</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="pt_100 pb_90" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 50px" }}>
                            <div className="tag_text"><h6>Common Questions</h6></div>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a" }}>
                                Frequently Asked Executive Inquiries
                            </h2>
                            <p style={{ color: "#64748b", marginTop: "12px", fontSize: "16px" }}>
                                Answers regarding corporate compliance, time commitment, confidentiality, and measurable ROI.
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    {[
                                        {
                                            q: "Will this service conflict with my company's corporate communications or PR team?",
                                            a: "No. In fact, enterprise PR departments routinely welcome our work because we relieve them of managing personal leadership profiles while strictly adhering to corporate communication guidelines, disclosure restrictions, and brand guardrails."
                                        },
                                        {
                                            q: "How much of my personal time is required each month?",
                                            a: "We have engineered our operational model specifically for time-starved executives. On average, clients spend between 20 to 30 minutes per month total—typically one concise voice-note briefing or quarterly narrative check-in. We handle all architecture, research, drafting, engineering, and distribution."
                                        },
                                        {
                                            q: "How do you capture an executive's authentic voice without sounding generic?",
                                            a: "We do not use generic AI templates. Every engagement pairs you with a senior editorial writer with deep business journalism experience. Through our initial narrative extraction interview and speech pattern analysis, we build a calibrated personal style dossier that reflects your cadence, vocabulary, and intellectual rigor."
                                        },
                                        {
                                            q: "What makes Prominence different from an SEO or PR agency?",
                                            a: "SEO agencies focus on keywords; PR agencies focus on temporary press cycles. Prominence builds sovereign digital assets you own permanently—your personal website, Google Knowledge Graph presence, curated search results, and verified thought leadership repository."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: "10px", padding: "28px 32px", background: "#f8fafc" }}>
                                            <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#0d1b2a", marginBottom: "12px" }}>
                                                {faq.q}
                                            </h3>
                                            <p style={{ color: "#475569", lineHeight: "1.7", margin: 0, fontSize: "15px" }}>
                                                {faq.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Strip */}
                <section className="pt_80 pb_80" style={{ background: "#ecf3ff", borderTop: "1px solid #dbeafe" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <span style={{ color: "#2460e2", fontWeight: "700", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>
                                    Private Consultation
                                </span>
                                <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0d1b2a", marginTop: "8px" }}>
                                    Ready to Architect Your Sovereign Executive Presence?
                                </h2>
                                <p style={{ color: "#475569", fontSize: "16px", marginTop: "8px", margin: 0 }}>
                                    Schedule a confidential 30-minute advisory conversation to audit your search footprint and align your personal brand with your enterprise stature.
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                <Link href="/contact" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "16px" }}>
                                    Book a Private Consultation
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