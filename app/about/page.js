import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home3/Testimonial'

export const metadata = {
    title: 'About Prominence | Executive Reputation & Personal Branding Advisory',
    description: 'Prominence is a premier executive reputation advisory firm counseling CEOs, CHROs, enterprise founders, and senior leaders on sovereign digital stature.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Prominence — Executive Reputation Advisory',
        description: 'We architect sovereign digital assets that represent enterprise leaders before they walk into the room.',
        url: 'https://www.prominence.agency/about',
        siteName: 'Prominence.agency',
        locale: 'en_US',
        type: 'website',
    },
}

const aboutSchemaGraph = {
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
                    name: 'About',
                    item: 'https://www.prominence.agency/about',
                },
            ],
        },
        {
            '@type': 'AboutPage',
            '@id': 'https://www.prominence.agency/about/#webpage',
            url: 'https://www.prominence.agency/about',
            name: 'About Prominence | Executive Personal Branding Advisory',
            description: 'Prominence advises enterprise executives on sovereign digital stature, Google search dominance, executive websites, and strategic thought leadership.',
            mainEntity: {
                '@id': 'https://www.prominence.agency/#founder',
            },
        },
        {
            '@type': 'Organization',
            '@id': 'https://www.prominence.agency/#organization',
            name: 'Prominence',
            url: 'https://www.prominence.agency',
            logo: 'https://www.prominence.agency/assets/images/Elite%20Prominence/EliteProminence-iocn.png',
            founder: {
                '@id': 'https://www.prominence.agency/#founder',
            },
            sameAs: [
                'https://www.linkedin.com/company/elite-prominence',
            ],
        },
        {
            '@type': 'Person',
            '@id': 'https://www.prominence.agency/#founder',
            name: 'Md Tarek',
            jobTitle: 'Founder & Managing Partner',
            worksFor: {
                '@id': 'https://www.prominence.agency/#organization',
            },
            url: 'https://www.prominence.agency/about',
            sameAs: [
                'https://www.linkedin.com/in/mdtarek404/',
            ],
            knowsAbout: [
                'Executive Personal Branding',
                'Digital Reputation Management',
                'Google Knowledge Graph Optimization',
                'Executive Search Dominance',
                'Board Governance Advisory',
            ],
            description: 'Managing Partner counseling enterprise CEOs, CHROs, and founders on sovereign digital reputation architecture, Google Page 1 ownership, and discreet thought leadership.',
        },
    ],
}

export default function About_Page() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchemaGraph) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About Prominence">

                {/* Hero Banner */}
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
                                    Executive Reputation Advisory
                                </span>
                            </div>
                            <h1 style={{ fontSize: "44px", fontWeight: "800", color: "#0d1b2a", lineHeight: "1.2", marginBottom: "20px" }}>
                                We Architect Sovereign Digital Stature for Enterprise Leaders
                            </h1>
                            <p style={{ fontSize: "19px", color: "#475569", lineHeight: "1.7" }}>
                                Every executive we counsel has already accomplished the formidable part: leading transformations, governing enterprise risk, and directing complex organizations. What most lack is an owned digital footprint that communicates their caliber before they walk into the room. Prominence exists to permanently close that authority gap.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "14px 32px", fontSize: "15px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/how-it-works" className="btn_style_two" style={{ padding: "14px 28px", fontSize: "15px", background: "#fff" }}>
                                    Review Our 6-Stage Protocol
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Narrative & Stature */}
                <section className="pt_100 pb_90" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
                                <div style={{
                                    background: "#ffffff",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
                                    border: "1px solid #e2e8f0",
                                    maxWidth: "420px",
                                    margin: "0 auto"
                                }}>
                                    <div style={{ position: "relative", width: "100%", height: "420px", overflow: "hidden" }}>
                                        <img
                                            src="/assets/images/elite/tarek-portrait.jpg"
                                            alt="Md Tarek — Founder & Managing Partner at Prominence"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                objectPosition: "center top"
                                            }}
                                        />
                                    </div>
                                    <div style={{ padding: "28px", textAlign: "center", background: "#ffffff" }}>
                                        <span style={{
                                            display: "inline-block",
                                            fontSize: "11px",
                                            fontWeight: "700",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            color: "#2460e2",
                                            background: "#ecf3ff",
                                            padding: "4px 12px",
                                            borderRadius: "9999px",
                                            marginBottom: "10px"
                                        }}>
                                            Founder & Managing Partner
                                        </span>
                                        <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0d1b2a", margin: "0 0 4px 0" }}>
                                            Md Tarek
                                        </h3>
                                        <p style={{ fontSize: "14px", color: "#64748b", margin: "0 0 16px 0", fontWeight: "500" }}>
                                            Executive Brand Advisor & Author
                                        </p>
                                        <a
                                            href="https://www.linkedin.com/in/mdtarek404/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                padding: "9px 20px",
                                                borderRadius: "8px",
                                                background: "#0a66c2",
                                                color: "#ffffff",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                textDecoration: "none"
                                            }}
                                        >
                                            <i className="fab fa-linkedin-in" style={{ fontSize: "15px" }}></i>
                                            <span>Connect on LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 ps-lg-5">
                                <span style={{ color: "#2460e2", fontWeight: "700", textTransform: "uppercase", fontSize: "12px", letterSpacing: "1.5px", display: "block", marginBottom: "10px" }}>
                                    The Founding Conviction
                                </span>
                                <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a", marginBottom: "20px", lineHeight: "1.3" }}>
                                    Reputation Is Sovereign Infrastructure, Not Superficial Vanity
                                </h2>
                                <div style={{ fontSize: "19px", fontWeight: "600", color: "#1e293b", borderLeft: "4px solid #2460e2", paddingLeft: "20px", marginBottom: "24px", lineHeight: "1.6" }}>
                                    “In executive leadership, opportunity is not won by shouting in the town square. It is won by unmistakable credibility recognized before the due diligence begins.”
                                </div>
                                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "16px" }}>
                                    Prominence was established on a single undeniable reality: the most accomplished leaders are frequently the least visible online. While they orchestrate nine-figure acquisitions, overhaul enterprise technology, and lead thousands of personnel, their digital footprint often consists of an outdated corporate bio and an unmanaged LinkedIn feed.
                                </p>
                                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "28px" }}>
                                    When board nominating committees, venture partners, or journalists look them up, that silence surrenders narrative control. We provide turnkey, dignified reputation stewardship so your public presence permanently reflects your actual business stature.
                                </p>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "14px 32px", fontSize: "15px" }}>
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The 4 Firm Principles */}
                <section className="pt_100 pb_90" style={{ background: "#0d1b2a", color: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 60px" }}>
                            <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Institutional Pillars
                            </span>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#fff", marginTop: "12px" }}>
                                The Four Prominence Principles
                            </h2>
                            <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "12px" }}>
                                How our advisory firm differs from traditional marketing agencies.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb_30">
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "32px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#d29d2b", marginBottom: "16px" }}>🏛️</div>
                                    <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                                        Sovereign Assets
                                    </h3>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                                        Social algorithms are rented land. We build permanent, owned assets: your custom executive domain, Google Knowledge Graph presence, and curated search results.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb_30">
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "32px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#38bdf8", marginBottom: "16px" }}>✍️</div>
                                    <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                                        Substance Over Noise
                                    </h3>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                                        Zero engagement-bait or AI clichés. Every essay and keynote abstract is authored to boardroom editorial standards, demonstrating your intellectual rigor.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb_30">
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "32px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#34d399", marginBottom: "16px" }}>🔒</div>
                                    <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                                        Absolute Discretion
                                    </h3>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                                        Full compliance with employer PR, non-disclosure agreements, and regulatory guardrails. We operate in the background as your confidential strategic counsel.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb_30">
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "32px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#a855f7", marginBottom: "16px" }}>⏱️</div>
                                    <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                                        Minimal Time Tax
                                    </h3>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                                        We know your operational schedule is overloaded. Our turnkey model requires under 30 minutes of your time per month, delivering maximum leverage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Consultation CTA */}
                <section className="pt_90 pb_90" style={{ background: "#ecf3ff", borderTop: "1px solid #dbeafe", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
                            <span style={{ color: "#2460e2", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Private Engagement
                            </span>
                            <h2 style={{ fontSize: "38px", fontWeight: "800", color: "#0d1b2a", marginTop: "12px", marginBottom: "16px" }}>
                                Ready to Align Your Reputation With Your Stature?
                            </h2>
                            <p style={{ color: "#475569", fontSize: "17px", lineHeight: "1.7", marginBottom: "32px" }}>
                                Schedule a confidential 30-minute private consultation with our managing partners.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "16px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/resources/assessment" className="btn_style_two" style={{ padding: "16px 32px", fontSize: "16px", background: "#fff" }}>
                                    Evaluate Digital Stature
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