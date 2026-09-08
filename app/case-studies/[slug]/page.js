import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getCaseStudyBySlug, getAllCaseStudySlugs, CASE_STUDIES_DATA } from '@/lib/caseStudiesData'

export async function generateStaticParams() {
    return getAllCaseStudySlugs()
}

export async function generateMetadata({ params }) {
    const cs = getCaseStudyBySlug(params.slug)
    if (!cs) {
        return {
            title: 'Case Study Not Found | Prominence',
            description: 'The requested executive case study does not exist.',
        }
    }

    return {
        title: `${cs.title} | Case Studies | Prominence`,
        description: cs.tagline,
        alternates: {
            canonical: `/case-studies/${cs.slug}`,
        },
        openGraph: {
            title: `${cs.title} — Executive Case Study`,
            description: cs.tagline,
            url: `https://www.prominence.agency/case-studies/${cs.slug}`,
            siteName: 'Prominence.agency',
            images: [
                {
                    url: cs.heroImage,
                    width: 1200,
                    height: 630,
                    alt: cs.title,
                },
            ],
            type: 'article',
        },
    }
}

export default function CaseStudyDetailPage({ params }) {
    const cs = getCaseStudyBySlug(params.slug)

    if (!cs) {
        notFound()
    }

    const jsonLd = {
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
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: cs.shortTitle,
                        item: `https://www.prominence.agency/case-studies/${cs.slug}`,
                    },
                ],
            },
            {
                '@type': 'Article',
                headline: cs.title,
                description: cs.tagline,
                image: cs.heroImage,
                publisher: {
                    '@type': 'Organization',
                    name: 'Prominence',
                    url: 'https://www.prominence.agency',
                },
            },
        ],
    }

    const otherCaseStudies = CASE_STUDIES_DATA.filter((c) => c.slug !== cs.slug)

    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle={cs.shortTitle}>
                
                {/* Hero Header */}
                <section className="pt_120 pb_80" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <div className="container">
                        <div style={{ maxWidth: "880px" }}>
                            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
                                <span style={{ 
                                    background: "#0d1b2a", 
                                    color: cs.typeBadgeColor || "#d29d2b", 
                                    padding: "4px 14px", 
                                    borderRadius: "20px", 
                                    fontSize: "12px", 
                                    fontWeight: "700" 
                                }}>
                                    {cs.type}
                                </span>
                                <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>
                                    {cs.clientRole} • {cs.clientIndustry}
                                </span>
                            </div>

                            <h1 style={{ fontSize: "42px", fontWeight: "800", color: "#0d1b2a", lineHeight: "1.2", marginBottom: "16px" }}>
                                {cs.title}
                            </h1>
                            <p style={{ fontSize: "20px", fontWeight: "600", color: "#2460e2", lineHeight: "1.5", marginBottom: "28px" }}>
                                {cs.tagline}
                            </p>

                            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "14px 32px", fontSize: "15px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/case-studies" className="btn_style_two" style={{ padding: "14px 28px", fontSize: "15px", background: "#fff" }}>
                                    All Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metrics Bar */}
                <section className="pt_50 pb_50" style={{ background: "#0d1b2a", color: "#fff" }}>
                    <div className="container">
                        <div className="row text-center">
                            {cs.metrics.map((m, idx) => (
                                <div key={idx} className="col-lg-3 col-6 mb_20 mb-lg-0">
                                    <div style={{ fontSize: "36px", fontWeight: "900", color: "#d29d2b", lineHeight: "1" }}>
                                        {m.value}
                                    </div>
                                    <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "8px", fontWeight: "600" }}>
                                        {m.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Narrative Breakdown: Challenge → Strategy → Execution → Results */}
                <section className="pt_100 pb_90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                
                                {/* 01. The Challenge */}
                                <div style={{ marginBottom: "70px" }}>
                                    <span style={{ color: "#e53e3e", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>
                                        01 — The Initial Challenge
                                    </span>
                                    <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0d1b2a", marginBottom: "16px" }}>
                                        {cs.challenge.headline}
                                    </h2>
                                    <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.8", marginBottom: "24px" }}>
                                        {cs.challenge.summary}
                                    </p>
                                    <div style={{ background: "#fff9f9", border: "1px solid #fed7d7", borderRadius: "10px", padding: "28px" }}>
                                        <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#c53030", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>
                                            Core Reputational Vulnerabilities:
                                        </h4>
                                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                                            {cs.challenge.points.map((pt, i) => (
                                                <li key={i} style={{ display: "flex", gap: "10px", fontSize: "15px", color: "#4a5568" }}>
                                                    <span style={{ color: "#e53e3e", fontWeight: "bold" }}>✕</span>
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 02. The Strategy */}
                                <div style={{ marginBottom: "70px" }}>
                                    <span style={{ color: "#2460e2", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>
                                        02 — Strategic Formulation
                                    </span>
                                    <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0d1b2a", marginBottom: "16px" }}>
                                        {cs.strategy.headline}
                                    </h2>
                                    <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.8", marginBottom: "28px" }}>
                                        {cs.strategy.summary}
                                    </p>
                                    <div className="row">
                                        {cs.strategy.pillars.map((pillar, i) => (
                                            <div key={i} className="col-md-4 mb_20">
                                                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", height: "100%" }}>
                                                    <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#0d1b2a", marginBottom: "10px" }}>
                                                        {pillar.name}
                                                    </h3>
                                                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                                                        {pillar.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 03. The Execution Protocol */}
                                <div style={{ marginBottom: "70px" }}>
                                    <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>
                                        03 — 90-Day Execution Protocol
                                    </span>
                                    <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0d1b2a", marginBottom: "28px" }}>
                                        {cs.execution.headline}
                                    </h2>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                        {cs.execution.timeline.map((step, i) => (
                                            <div key={i} style={{ display: "flex", gap: "24px", alignItems: "flex-start", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px 28px" }}>
                                                <div style={{ minWidth: "120px" }}>
                                                    <span style={{ background: "#ecf3ff", color: "#2460e2", fontWeight: "700", fontSize: "12px", padding: "4px 12px", borderRadius: "20px" }}>
                                                        {step.phase}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0d1b2a", marginBottom: "6px" }}>
                                                        {step.title}
                                                    </h3>
                                                    <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                                                        {step.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 04. Measurable Results */}
                                <div style={{ marginBottom: "70px" }}>
                                    <span style={{ color: "#10b981", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>
                                        04 — Measurable Outcomes
                                    </span>
                                    <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0d1b2a", marginBottom: "24px" }}>
                                        {cs.results.headline}
                                    </h2>
                                    <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "32px" }}>
                                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                                            {cs.results.points.map((res, i) => (
                                                <li key={i} style={{ display: "flex", gap: "12px", fontSize: "16px", color: "#166534" }}>
                                                    <span style={{ fontWeight: "bold" }}>✓</span>
                                                    <span>{res}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 05. Client Perspective */}
                                {cs.clientPerspective && (
                                    <div style={{ background: "#0d1b2a", borderRadius: "14px", padding: "40px", color: "#fff", marginBottom: "40px" }}>
                                        <span style={{ fontSize: "36px", color: "#d29d2b", lineHeight: "1", display: "block", marginBottom: "12px" }}>“</span>
                                        <p style={{ fontSize: "18px", fontStyle: "italic", lineHeight: "1.8", color: "#f8fafc", marginBottom: "20px" }}>
                                            {cs.clientPerspective.quote}
                                        </p>
                                        <div>
                                            <p style={{ fontSize: "15px", fontWeight: "700", color: "#fff", margin: 0 }}>
                                                {cs.clientPerspective.author}
                                            </p>
                                            <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
                                                {cs.clientPerspective.company}
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Case Studies */}
                {otherCaseStudies.length > 0 && (
                    <section className="pt_80 pb_80" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
                        <div className="container">
                            <div className="section_title centred" style={{ marginBottom: "40px" }}>
                                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#0d1b2a" }}>
                                    Additional Executive Case Studies
                                </h2>
                            </div>
                            <div className="row justify-content-center">
                                {otherCaseStudies.map((oth) => (
                                    <div key={oth.slug} className="col-lg-6 mb_20">
                                        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "28px", height: "100%", display: "flex", flexDirection: "column" }}>
                                            <span style={{ fontSize: "11px", fontWeight: "700", color: "#2460e2", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
                                                {oth.type}
                                            </span>
                                            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>
                                                <Link href={`/case-studies/${oth.slug}`} style={{ color: "#0d1b2a", textDecoration: "none" }}>
                                                    {oth.shortTitle}
                                                </Link>
                                            </h3>
                                            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", flex: 1, marginBottom: "16px" }}>
                                                {oth.tagline}
                                            </p>
                                            <Link href={`/case-studies/${oth.slug}`} style={{ fontSize: "13px", fontWeight: "700", color: "#2460e2", textDecoration: "none" }}>
                                                Read Breakdown →
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Final Consultation CTA */}
                <section className="pt_90 pb_90" style={{ background: "#0d1b2a", color: "#fff", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                            <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Confidential Engagement
                            </span>
                            <h2 style={{ fontSize: "38px", fontWeight: "800", color: "#fff", marginTop: "12px", marginBottom: "16px" }}>
                                Build Your Sovereign Stature
                            </h2>
                            <p style={{ color: "#94a3b8", fontSize: "17px", lineHeight: "1.7", marginBottom: "32px" }}>
                                Connect directly with our managing partners for a 30-minute private consultation.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "16px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/how-it-works" className="btn_style_two" style={{ padding: "16px 32px", fontSize: "16px", background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
                                    Review Methodology
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    )
}
