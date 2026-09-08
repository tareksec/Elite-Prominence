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
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Executive Capabilities">
                
                {/* Services Hero Header */}
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "860px", margin: "0 auto" }}>
                            <div className="tag_text">
                                <h6>The 7 Core Capabilities</h6>
                            </div>
                            <h1>Sovereign Digital Stature Engineered for Enterprise Leaders</h1>
                            <p>
                                Prominence does not offer generic marketing retainers or superficial social media management. We build permanent, owned reputation assets that establish institutional authority, protect against reputational risk, and unlock boardroom, investor, and career opportunities.
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

                {/* The 7 Core Services Grid */}
                <section className="pt_100 pb_90" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="row">
                            {SERVICES_DATA.map((service, idx) => (
                                <div key={service.slug} className="col-lg-4 col-md-6 col-sm-12 mb_40">
                                    <div className="prominence_card">
                                        <div style={{ height: "200px", margin: "-36px -32px 28px", overflow: "hidden", position: "relative", borderBottom: "1px solid #edf2f7" }}>
                                            <img 
                                                src={service.heroImage} 
                                                alt={service.title} 
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
                                                letterSpacing: "0.8px",
                                                textTransform: "uppercase",
                                                fontFamily: "var(--primary-font)"
                                            }}>
                                                Pillar {service.number}
                                            </div>
                                        </div>

                                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px", fontFamily: "var(--primary-font)" }}>
                                            {service.tagline}
                                        </span>
                                        <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#0f1013", marginBottom: "14px", lineHeight: "1.3" }}>
                                            <Link href={`/services/${service.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                                                {service.title}
                                            </Link>
                                        </h3>
                                        <p style={{ color: "#59606a", lineHeight: "26px", marginBottom: "24px", fontSize: "15px", flex: 1 }}>
                                            {service.shortDescription}
                                        </p>

                                        <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "20px", marginBottom: "24px" }}>
                                            <h4 style={{ fontSize: "11px", fontWeight: "700", color: "#94a3b8", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontFamily: "var(--primary-font)" }}>
                                                Core Deliverables
                                            </h4>
                                            <ul className="prominence_check_list">
                                                {service.deliverables.slice(0, 3).map((item, i) => (
                                                    <li key={i} style={{ fontSize: "13.5px", color: "#334155", lineHeight: "20px" }}>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid #f8fafc" }}>
                                            <Link 
                                                href={`/services/${service.slug}`} 
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
                                                Explore Scope <i className="fa-solid fa-angle-right" style={{ fontSize: "11px" }}></i>
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
                            ))}
                        </div>
                    </div>
                </section>

                {/* Strategic Comparison: Editorial Table */}
                <section className="pt_90 pb_90" style={{ background: "#f8fafd", borderTop: "1px solid #edf2f7", borderBottom: "1px solid #edf2f7" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "780px", margin: "0 auto 50px" }}>
                            <div className="tag_text">
                                <h6>The Prominence Difference</h6>
                            </div>
                            <h2>Owned Authority vs. Rented Noise</h2>
                            <p style={{ color: "#59606a", fontSize: "17px", marginTop: "12px", lineHeight: "28px" }}>
                                Traditional agencies treat executives like influencers, chasing superficial vanity metrics. Prominence operates as private strategic communications counsel, building sovereign institutional assets.
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                                    <div className="row g-0" style={{ borderBottom: "1px solid #e2e8f0", background: "#fafbfc" }}>
                                        <div className="col-md-6 p-4" style={{ borderRight: "1px solid #e2e8f0" }}>
                                            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.2px", textTransform: "uppercase", color: "#64748b", display: "block" }}>
                                                Conventional Agency Approach
                                            </span>
                                            <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#0f1013", marginTop: "4px" }}>
                                                Rented Social Retainers
                                            </h3>
                                        </div>
                                        <div className="col-md-6 p-4" style={{ background: "#f8fafd" }}>
                                            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.2px", textTransform: "uppercase", color: "#2460e2", display: "block" }}>
                                                The Prominence Sovereign Standard
                                            </span>
                                            <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#0f1013", marginTop: "4px" }}>
                                                Permanent Owned Architecture
                                            </h3>
                                        </div>
                                    </div>

                                    {[
                                        {
                                            dimension: "Asset Ownership",
                                            traditional: "Dependent entirely on LinkedIn algorithms; zero owned website or Knowledge Graph presence.",
                                            prominence: "Sovereign Executive Digital HQ on your custom domain, ranking #1 on Google with rich entity schemas."
                                        },
                                        {
                                            dimension: "Editorial Quality",
                                            traditional: "Junior staff or generic AI prompts producing platitudes that dilute executive gravitas.",
                                            prominence: "Senior business journalists conducting narrative extraction interviews and authoring boardroom-caliber essays."
                                        },
                                        {
                                            dimension: "Search Placement",
                                            traditional: "Unmanaged Page 1 search results leaving namesake confusion and outdated bios visible.",
                                            prominence: "Systematic search reputation management ensuring Page 1 reflects your definitive leadership standing."
                                        },
                                        {
                                            dimension: "Executive Time Tax",
                                            traditional: "Dozens of hours required for reviewing drafts, managing tasks, and providing micro-direction.",
                                            prominence: "Turnkey operational model requiring less than 30 minutes of client time per month."
                                        }
                                    ].map((row, i) => (
                                        <div key={i} className="row g-0" style={{ borderBottom: i < 3 ? "1px solid #f1f5f9" : "none" }}>
                                            <div className="col-md-6 p-4" style={{ borderRight: "1px solid #e2e8f0" }}>
                                                <span style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "4px" }}>
                                                    {row.dimension}
                                                </span>
                                                <p style={{ color: "#64748b", fontSize: "14.5px", lineHeight: "22px", margin: 0 }}>
                                                    {row.traditional}
                                                </p>
                                            </div>
                                            <div className="col-md-6 p-4" style={{ background: "#fafbfc" }}>
                                                <span style={{ fontSize: "12px", fontWeight: "700", color: "#1e293b", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "4px" }}>
                                                    {row.dimension}
                                                </span>
                                                <p style={{ color: "#0f1013", fontSize: "14.5px", lineHeight: "22px", margin: 0, fontWeight: "500" }}>
                                                    {row.prominence}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="pt_100 pb_90" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 50px" }}>
                            <div className="tag_text"><h6>Common Questions</h6></div>
                            <h2>Frequently Asked Executive Inquiries</h2>
                            <p style={{ color: "#59606a", marginTop: "12px", fontSize: "17px", lineHeight: "28px" }}>
                                Answers regarding corporate compliance, time commitment, confidentiality, and measurable outcomes.
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    {[
                                        {
                                            q: "Will this service conflict with my company's corporate communications or PR team?",
                                            a: "No. Enterprise PR departments routinely welcome our counsel because we relieve them of managing personal leadership profiles while strictly adhering to corporate communication guidelines, disclosure restrictions, and brand guardrails."
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
                                        <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: "10px", padding: "28px 32px", background: "#fafbfc" }}>
                                            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f1013", marginBottom: "10px" }}>
                                                {faq.q}
                                            </h3>
                                            <p style={{ color: "#475569", lineHeight: "24px", margin: 0, fontSize: "15px" }}>
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
                <section className="pt_80 pb_80" style={{ background: "#f8fafd", borderTop: "1px solid #edf2f7", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
                                <h6>Private Consultation</h6>
                            </div>
                            <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#0f1013", marginBottom: "14px" }}>
                                Ready to Architect Your Sovereign Executive Presence?
                            </h2>
                            <p style={{ color: "#59606a", fontSize: "17px", lineHeight: "28px", marginBottom: "30px" }}>
                                Schedule a confidential 30-minute advisory conversation to audit your search footprint and align your personal brand with your enterprise stature.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/contact" className="btn_style_one">
                                    Book a Private Consultation
                                </Link>
                                <Link href="/resources/assessment" className="btn_style_two">
                                    Audit Your Stature <i className="fa-solid fa-angle-right ms-2" style={{ fontSize: "12px" }}></i>
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