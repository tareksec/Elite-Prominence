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
                
                {/* Services Hero Header: Asymmetrical Editorial Intro */}
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8" data-aos="fade-right" data-aos-duration="500">
                                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                                    <span className="prominence_pulse_dot"></span>
                                    <span style={{ fontSize: "11.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.2px", color: "#b89058", fontFamily: "var(--primary-font)" }}>
                                        The 7 Sovereign Capabilities
                                    </span>
                                </div>
                                <h1 style={{
                                    fontSize: "clamp(28px, 5vw, 44px)",
                                    fontWeight: "700",
                                    color: "#0f1013",
                                    lineHeight: "1.2",
                                    letterSpacing: "-0.6px",
                                    marginBottom: "20px",
                                    fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)"
                                }}>
                                    Sovereign Digital Stature Engineered for Enterprise Leaders
                                </h1>
                                <p style={{ fontSize: "17.5px", color: "#59606a", lineHeight: "30px", maxWidth: "680px", margin: 0 }}>
                                    Prominence does not offer generic marketing retainers or superficial social media management. We build permanent, owned reputation assets that establish institutional authority, protect against reputational risk, and unlock boardroom, investor, and advisory opportunities.
                                </p>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0 text-lg-end" data-aos="fade-left" data-aos-duration="550">
                                <div style={{ display: "inline-flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "320px" }}>
                                    <Link href="/contact" className="btn_style_one btn_block btn_md">
                                        Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/resources/assessment" className="btn_style_two btn_block btn_md">
                                        Evaluate Your Stature
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Executive Micro-Metrics Bar */}
                        <div style={{
                            marginTop: "50px",
                            padding: "20px 24px",
                            backgroundColor: "#ffffff",
                            border: "1px solid #eaedf0",
                            borderRadius: "12px",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                            gap: "20px",
                            boxShadow: "0 2px 10px rgba(15, 16, 19, 0.02)"
                        }}>
                            <div>
                                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.8px" }}>Deliverable Model</div>
                                <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--primary-font)", marginTop: "2px" }}>100% Turnkey Execution</div>
                            </div>
                            <div>
                                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.8px" }}>Time Investment</div>
                                <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--primary-font)", marginTop: "2px" }}>&lt; 30 Mins / Month</div>
                            </div>
                            <div>
                                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.8px" }}>Search Placement</div>
                                <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--primary-font)", marginTop: "2px" }}>Page 1 #1 Guaranteed</div>
                            </div>
                            <div>
                                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.8px" }}>Confidentiality</div>
                                <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--primary-font)", marginTop: "2px" }}>100% Strict NDA Adherence</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Capability Architecture Section */}
                <section className="prominence_section" style={{ background: "#ffffff" }}>
                    <div className="container">
                        
                        {/* 1. Flagship Capability Feature: Pillar 01 (Executive Digital HQ) */}
                        <div style={{ marginBottom: "60px" }} data-aos="fade-up" data-aos-duration="500">
                            <div className="prominence_depth_card_dark" style={{ padding: "48px 42px", overflow: "hidden" }}>
                                <div className="row align-items-center">
                                    <div className="col-lg-7 mb-4 mb-lg-0 pe-lg-4">
                                        <div style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            padding: "4px 14px",
                                            backgroundColor: "rgba(184, 144, 88, 0.15)",
                                            border: "1px solid rgba(184, 144, 88, 0.35)",
                                            borderRadius: "6px",
                                            fontSize: "11px",
                                            fontWeight: "700",
                                            color: "#b89058",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                            marginBottom: "18px"
                                        }}>
                                            Flagship Sovereign Asset · Pillar {SERVICES_DATA[0].number}
                                        </div>

                                        <h2 style={{
                                            fontSize: "clamp(26px, 4vw, 34px)",
                                            fontWeight: "700",
                                            color: "#ffffff",
                                            fontFamily: "var(--ep-font-serif, 'PT Serif', serif)",
                                            lineHeight: "1.25",
                                            letterSpacing: "-0.5px",
                                            marginBottom: "16px"
                                        }}>
                                            {SERVICES_DATA[0].title}
                                        </h2>

                                        <p style={{ fontSize: "16px", color: "#cbd5e1", lineHeight: "28px", marginBottom: "26px", maxWidth: "580px" }}>
                                            {SERVICES_DATA[0].whyItMatters}
                                        </p>

                                        {/* Flagship Deliverables Grid */}
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "32px" }}>
                                            {SERVICES_DATA[0].deliverables.slice(0, 4).map((item, i) => (
                                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13.5px", color: "#e2e8f0" }}>
                                                    <i className="fa-solid fa-check" style={{ color: "#b89058", fontSize: "12px", marginTop: "4px" }}></i>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                                            <Link href={`/services/${SERVICES_DATA[0].slug}`} className="btn_style_gold">
                                                Explore Full Digital HQ Scope <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                            <Link href="/contact" className="btn_style_ghost_light">
                                                Commission Asset <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Side: Architectural Specification Metadata Canvas */}
                                    <div className="col-lg-5">
                                        <div style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            borderRadius: "14px",
                                            padding: "28px 24px",
                                            backdropFilter: "blur(12px)"
                                        }}>
                                            <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#b89058", marginBottom: "16px", fontFamily: "var(--primary-font)" }}>
                                                Asset Technical Specifications
                                            </div>

                                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                                {[
                                                    { label: "Architecture", val: "Custom Next.js & Edge CDN" },
                                                    { label: "Deployment Cadence", val: "30-Day Turnkey Protocol" },
                                                    { label: "SEO Indexation", val: "Google Page 1 Guaranteed" },
                                                    { label: "Asset Ownership", val: "100% Client-Owned Domain & Code" },
                                                    { label: "Governance Compliance", val: "Strict NDA & Disclosure Safe" }
                                                ].map((spec, sIdx) => (
                                                    <div key={sIdx} style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        padding: "10px 12px",
                                                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                                                        borderRadius: "8px",
                                                        border: "1px solid rgba(255, 255, 255, 0.06)",
                                                        fontSize: "13px"
                                                    }}>
                                                        <span style={{ color: "#94a3b8" }}>{spec.label}</span>
                                                        <span style={{ color: "#f8fafc", fontWeight: "600", fontFamily: "var(--primary-font)" }}>{spec.val}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div style={{
                                                marginTop: "18px",
                                                padding: "12px 14px",
                                                backgroundColor: "rgba(184, 144, 88, 0.1)",
                                                border: "1px solid rgba(184, 144, 88, 0.25)",
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                fontSize: "12px",
                                                color: "#f8fafc"
                                            }}>
                                                <i className="fa-solid fa-lock" style={{ color: "#b89058" }}></i>
                                                <span>Permanent Sovereign Asset · Independent of Corporate Employers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Core Stature Architecture: Pillars 02–05 (Asymmetrical 2x2 Editorial Grid) */}
                        <div style={{ marginBottom: "70px" }}>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.2px", color: "#b89058", fontFamily: "var(--primary-font)" }}>
                                    Core Reputation Pillars
                                </div>
                                <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--primary-font)", letterSpacing: "-0.4px", marginTop: "4px" }}>
                                    Active Authority &amp; Narrative Architecture
                                </h3>
                            </div>

                            <div className="row">
                                {SERVICES_DATA.slice(1, 5).map((service, idx) => (
                                    <div key={service.slug} className="col-lg-6 mb_40" data-aos="fade-up" data-aos-duration={500 + idx * 50}>
                                        <div className="prominence_depth_card prominence_card_equal_height" style={{ padding: "38px 34px", height: "100%" }}>
                                            <div className="prominence_card_body">
                                                {/* Card Top Metadata Bar */}
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                                                    <span style={{
                                                        fontSize: "11px",
                                                        fontWeight: "700",
                                                        color: "#b89058",
                                                        backgroundColor: "#faf8f2",
                                                        padding: "4px 10px",
                                                        borderRadius: "6px",
                                                        border: "1px solid #f1ebd8",
                                                        letterSpacing: "0.8px",
                                                        textTransform: "uppercase",
                                                        fontFamily: "var(--primary-font)"
                                                    }}>
                                                        Pillar {service.number}
                                                    </span>
                                                    <span style={{ fontSize: "11.5px", color: "#94a3b8", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.6px" }}>
                                                        {service.tagline}
                                                    </span>
                                                </div>

                                                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--primary-font)", lineHeight: "1.3", marginBottom: "12px" }}>
                                                    <Link href={`/services/${service.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                                                        {service.title}
                                                    </Link>
                                                </h3>

                                                <p style={{ fontSize: "15px", color: "#59606a", lineHeight: "26px", marginBottom: "24px" }}>
                                                    {service.shortDescription}
                                                </p>

                                                {/* Structured Metadata Chips */}
                                                <div className="prominence_meta_grid" style={{ marginBottom: "24px" }}>
                                                    <div className="prominence_meta_item">
                                                        <span className="prominence_meta_label">Executive Cadence</span>
                                                        <span className="prominence_meta_value">Under 20 Mins / Month</span>
                                                    </div>
                                                    <div className="prominence_meta_item">
                                                        <span className="prominence_meta_label">Primary Channel</span>
                                                        <span className="prominence_meta_value">
                                                            {service.id === 'google-search-reputation' ? 'Google Knowledge Graph' : service.id === 'strategic-ghostwriting' ? 'LinkedIn Governance Essays' : service.id === 'brand-identity' ? 'Monogram & Palette' : 'Board Nomination Chairs'}
                                                        </span>
                                                    </div>
                                                    <div className="prominence_meta_item">
                                                        <span className="prominence_meta_label">Key Asset</span>
                                                        <span className="prominence_meta_value">
                                                            {service.id === 'google-search-reputation' ? 'Page 1 #1 Knowledge Panel' : service.id === 'strategic-ghostwriting' ? 'Sovereign Narrative Voice' : service.id === 'brand-identity' ? 'Executive Brand Kit' : 'Board CV & Speaking Kit'}
                                                        </span>
                                                    </div>
                                                    <div className="prominence_meta_item">
                                                        <span className="prominence_meta_label">Strategic Scope</span>
                                                        <span className="prominence_meta_value">Enterprise Stature</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Deliverables List */}
                                            <div className="prominence_card_footer" style={{ borderTop: "1px solid #f1f5f9", paddingTop: "18px" }}>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                    <Link
                                                        href={`/services/${service.slug}`}
                                                        className="btn_style_ghost"
                                                        style={{ padding: 0 }}
                                                    >
                                                        Explore Scope <i className="fa-solid fa-arrow-right"></i>
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
                                                        Consult Partner
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Institutional Governance & Crisis Shield: Pillars 06 & 07 (Horizontal Briefing Block) */}
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div style={{
                                backgroundColor: "#fafbfc",
                                border: "1px solid #eaedf0",
                                borderRadius: "16px",
                                padding: "44px 40px",
                                boxShadow: "0 4px 20px rgba(15, 16, 19, 0.03)"
                            }}>
                                <div style={{ borderBottom: "1px solid #eaedf0", paddingBottom: "20px", marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
                                    <div>
                                        <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.2px", color: "#b89058", fontFamily: "var(--primary-font)" }}>
                                            Institutional Protection &amp; Strategic Advisory
                                        </div>
                                        <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--primary-font)", letterSpacing: "-0.4px", marginTop: "4px" }}>
                                            Discreet Media Placements &amp; Reputation Risk Insulation
                                        </h3>
                                    </div>
                                    <div style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        fontSize: "12px",
                                        color: "#0f1013",
                                        fontWeight: "700",
                                        backgroundColor: "#ffffff",
                                        padding: "6px 14px",
                                        borderRadius: "20px",
                                        border: "1px solid #e2e8f0"
                                    }}>
                                        <i className="fa-solid fa-shield-halved" style={{ color: "#b89058" }}></i>
                                        Strict NDA Compliance Guaranteed
                                    </div>
                                </div>

                                <div className="row">
                                    {SERVICES_DATA.slice(5, 7).map((service, idx) => (
                                        <div key={service.slug} className="col-lg-6 mb-4 mb-lg-0 pe-lg-4" style={{ borderRight: idx === 0 ? "1px solid #eaedf0" : "none" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                                                <span style={{ fontSize: "11px", fontWeight: "700", color: "#b89058", letterSpacing: "0.8px", textTransform: "uppercase", fontFamily: "var(--primary-font)" }}>
                                                    Pillar {service.number}
                                                </span>
                                                <span style={{ color: "#cbd5e1" }}>&bull;</span>
                                                <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>{service.tagline}</span>
                                            </div>

                                            <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--primary-font)", marginBottom: "12px", lineHeight: "1.3" }}>
                                                <Link href={`/services/${service.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                                                    {service.title}
                                                </Link>
                                            </h4>

                                            <p style={{ fontSize: "14.5px", color: "#59606a", lineHeight: "24px", marginBottom: "20px" }}>
                                                {service.shortDescription}
                                            </p>

                                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                                                {service.deliverables.slice(0, 3).map((item, i) => (
                                                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#334155", marginBottom: "8px" }}>
                                                        <i className="fa-solid fa-check" style={{ color: "#b89058", fontSize: "11px" }}></i>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="btn_style_ghost"
                                            >
                                                Review Protocol <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Strategic Comparison: Editorial Table */}
                <section className="prominence_section" style={{ background: "#f8fafd", borderTop: "1px solid #edf2f7", borderBottom: "1px solid #edf2f7" }}>
                    <div className="container">
                        <div className="prominence_header_centered" style={{ maxWidth: "780px", margin: "0 auto 48px" }}>
                            <span className="prominence_tracker">The Prominence Difference</span>
                            <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>Owned Authority vs. Rented Noise</h2>
                            <p className="prominence_lead_text">
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
                                        <div className="col-md-6 p-4" style={{ background: "#f8fafc" }}>
                                            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.2px", textTransform: "uppercase", color: "#b89058", display: "block" }}>
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
                <section className="prominence_section" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="prominence_header_split">
                            <div>
                                <span className="prominence_tracker">Common Questions</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>Frequently Asked Executive Inquiries</h2>
                            </div>
                            <div>
                                <p className="prominence_lead_text">
                                    Answers regarding corporate compliance, time commitment, confidentiality, and measurable outcomes.
                                </p>
                            </div>
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
                <section className="prominence_section" style={{ background: "#FAF8F2", borderTop: "1px solid #edf2f7", textAlign: "center" }}>
                    <div className="container">
                        <div className="prominence_header_centered" style={{ maxWidth: "740px", margin: "0 auto" }}>
                            <span className="prominence_tracker">Private Consultation</span>
                            <h2 style={{ fontSize: "clamp(26px, 3.8vw, 36px)", fontWeight: "700", color: "#0f1013", marginBottom: "14px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                Ready to Architect Your Sovereign Executive Presence?
                            </h2>
                            <p className="prominence_lead_text" style={{ marginBottom: "32px" }}>
                                Schedule a confidential 30-minute advisory conversation to audit your search footprint and align your personal brand with your enterprise stature.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/contact" className="btn_style_one btn_md">
                                    Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link href="/resources/assessment" className="btn_style_two btn_md">
                                    Audit Your Stature <i className="fa-solid fa-arrow-right"></i>
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