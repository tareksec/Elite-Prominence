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
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="prominence_header_centered" style={{ maxWidth: '780px', margin: '0 auto' }}>
                            <span className="prominence_tracker">Executive Reputation Advisory</span>
                            <h1 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", fontWeight: '700', color: '#0f1013', lineHeight: '1.2' }}>
                                Architecting Sovereign Digital Stature for Enterprise Leaders
                            </h1>
                            <p className="prominence_lead_text">
                                Every executive we counsel has already accomplished the formidable part: leading enterprise transformations, governing risk, and directing complex organizations. What most lack is an owned digital footprint that communicates their caliber before they walk into the room. Prominence exists to permanently close that authority gap.
                            </p>
                            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn_style_one btn_md">
                                    Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link href="/how-it-works" className="btn_style_two btn_md">
                                    Review Our 6-Stage Protocol <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Narrative & Stature */}
                <section className="prominence_section" style={{ background: '#fff' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
                                <div className="prominence_card" style={{
                                    overflow: 'hidden',
                                    padding: 0,
                                    maxWidth: '420px',
                                    margin: '0 auto'
                                }}>
                                    <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden' }}>
                                        <img
                                            src="/assets/images/elite/tarek-portrait.jpg"
                                            alt="Md Tarek — Founder & Managing Partner at Prominence"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center top'
                                            }}
                                        />
                                    </div>
                                    <div style={{ padding: '28px', textAlign: 'center', background: '#ffffff' }}>
                                        <div style={{ marginBottom: '8px' }}>
                                            <span className="prominence_badge">
                                                Founder & Managing Partner
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '22px', fontFamily: 'var(--primary-font)', fontWeight: '700', color: '#0f1013', margin: '0 0 4px 0' }}>
                                            Md Tarek
                                        </h3>
                                        <p style={{ fontSize: '13.5px', color: '#64748b', margin: '0 0 16px 0', fontWeight: '500' }}>
                                            Executive Brand Advisor & Author
                                        </p>
                                        <a
                                            href="https://www.linkedin.com/in/mdtarek404/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn_style_two btn_sm"
                                        >
                                            <i className="fa-brands fa-linkedin" style={{ color: '#0a66c2' }}></i>
                                            <span>Connect on LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 ps-lg-5">
                                <span className="prominence_tracker">The Founding Conviction</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", fontWeight: '700', color: '#0f1013', marginBottom: '20px', lineHeight: '1.25' }}>
                                    Reputation Is Sovereign Infrastructure, Not Superficial Vanity
                                </h2>
                                <blockquote style={{ fontSize: '17px', fontWeight: '600', color: '#1e293b', borderLeft: '3px solid var(--ep-gold, #b89058)', paddingLeft: '20px', margin: '0 0 24px 0', lineHeight: '1.6' }}>
                                    &ldquo;In executive leadership, opportunity is not won by shouting in the town square. It is won by unmistakable credibility recognized before the due diligence begins.&rdquo;
                                </blockquote>
                                <p style={{ fontSize: '15.5px', lineHeight: '1.8', color: '#475569', marginBottom: '16px' }}>
                                    Prominence was established on a single undeniable reality: the most accomplished leaders are frequently the least visible online. While they orchestrate nine-figure acquisitions, overhaul enterprise technology, and lead thousands of personnel, their digital footprint often consists of an outdated corporate bio and an unmanaged LinkedIn feed.
                                </p>
                                <p style={{ fontSize: '15.5px', lineHeight: '1.8', color: '#475569', marginBottom: '28px' }}>
                                    When board nominating committees, venture partners, or journalists look them up, that silence surrenders narrative control. We provide turnkey, dignified reputation stewardship so your public presence permanently reflects your actual business stature.
                                </p>
                                <Link href="/contact" className="btn_style_one">
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The 4 Firm Principles */}
                <section className="prominence_section" style={{ background: '#0f1013', color: '#fff' }}>
                    <div className="container">
                        <div className="prominence_header_split">
                            <div>
                                <span className="prominence_tracker" style={{ color: '#b89058' }}>Institutional Pillars</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", fontWeight: '700', color: '#fff' }}>
                                    The Four Prominence Principles
                                </h2>
                            </div>
                            <div>
                                <p className="prominence_lead_text" style={{ color: '#94a3b8' }}>
                                    How our advisory firm differs fundamentally from traditional marketing agencies.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb_30">
                                <div className="prominence_card_dark" style={{ padding: '32px', height: '100%' }}>
                                    <div style={{ fontSize: '22px', color: '#fff', marginBottom: '18px' }}>
                                        <i className="fa-solid fa-landmark" style={{ color: '#b89058' }}></i>
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontFamily: 'var(--primary-font)', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                                        Sovereign Assets
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.7', margin: 0 }}>
                                        Social algorithms are rented land. We build permanent, owned assets: your custom executive domain, Google Knowledge Graph presence, and curated search results.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb_30">
                                <div className="prominence_card_dark" style={{ padding: '32px', height: '100%' }}>
                                    <div style={{ fontSize: '22px', color: '#fff', marginBottom: '18px' }}>
                                        <i className="fa-solid fa-pen-nib" style={{ color: '#b89058' }}></i>
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontFamily: 'var(--primary-font)', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                                        Substance Over Noise
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.7', margin: 0 }}>
                                        Zero engagement-bait or AI clichés. Every essay and keynote abstract is authored to boardroom editorial standards, demonstrating your intellectual rigor.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb_30">
                                <div className="prominence_card_dark" style={{ padding: '32px', height: '100%' }}>
                                    <div style={{ fontSize: '22px', color: '#fff', marginBottom: '18px' }}>
                                        <i className="fa-solid fa-shield-halved" style={{ color: '#b89058' }}></i>
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontFamily: 'var(--primary-font)', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                                        Absolute Discretion
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.7', margin: 0 }}>
                                        Full compliance with employer PR, non-disclosure agreements, and regulatory guardrails. We operate in the background as your confidential strategic counsel.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb_30">
                                <div className="prominence_card_dark" style={{ padding: '32px', height: '100%' }}>
                                    <div style={{ fontSize: '22px', color: '#fff', marginBottom: '18px' }}>
                                        <i className="fa-solid fa-clock" style={{ color: '#b89058' }}></i>
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontFamily: 'var(--primary-font)', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                                        Minimal Time Tax
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.7', margin: 0 }}>
                                        We know your operational schedule is overloaded. Our turnkey model requires under 30 minutes of your time per month, delivering maximum executive leverage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Consultation CTA */}
                <section className="prominence_section" style={{ background: '#FAF8F2', borderTop: '1px solid #eaedf0', textAlign: 'center' }}>
                    <div className="container">
                        <div className="prominence_header_centered" style={{ maxWidth: '740px', margin: '0 auto' }}>
                            <span className="prominence_tracker">Private Engagement</span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.8vw, 36px)', fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", fontWeight: '700', color: '#0f1013', marginBottom: '16px' }}>
                                Ready to Align Your Reputation With Your Stature?
                            </h2>
                            <p className="prominence_lead_text" style={{ marginBottom: '32px' }}>
                                Schedule a confidential 30-minute private consultation with our managing partners.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn_style_one btn_md">
                                    Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link href="/resources/assessment" className="btn_style_two btn_md">
                                    Evaluate Digital Stature <i className="fa-solid fa-arrow-right"></i>
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