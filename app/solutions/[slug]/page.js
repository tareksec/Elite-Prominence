import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getSolutionBySlug, getAllSolutionSlugs, SOLUTIONS_DATA } from '@/lib/solutionsData'

export async function generateStaticParams() {
    return getAllSolutionSlugs()
}

export async function generateMetadata({ params }) {
    const solution = getSolutionBySlug(params.slug)
    if (!solution) {
        return {
            title: 'Solution Not Found | Prominence',
            description: 'The requested executive solution does not exist.',
        }
    }

    return {
        title: `${solution.title} | Prominence`,
        description: solution.executiveSummary,
        alternates: {
            canonical: `/solutions/${solution.slug}`,
        },
        openGraph: {
            title: `${solution.title} — Prominence Executive Solutions`,
            description: solution.executiveSummary,
            url: `https://www.prominence.agency/solutions/${solution.slug}`,
            siteName: 'Prominence.agency',
            images: [
                {
                    url: solution.heroImage,
                    width: 1200,
                    height: 630,
                    alt: solution.title,
                },
            ],
            type: 'article',
        },
    }
}

export default function SolutionDetailPage({ params }) {
    const solution = getSolutionBySlug(params.slug)

    if (!solution) {
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
                        name: 'Solutions',
                        item: 'https://www.prominence.agency/solutions',
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: solution.shortTitle,
                        item: `https://www.prominence.agency/solutions/${solution.slug}`,
                    },
                ],
            },
            {
                '@type': 'Service',
                name: solution.title,
                provider: {
                    '@type': 'Organization',
                    name: 'Prominence',
                    url: 'https://www.prominence.agency',
                },
                description: solution.executiveSummary,
                areaServed: 'Worldwide',
                serviceType: solution.title,
            },
            {
                '@type': 'FAQPage',
                mainEntity: solution.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                    },
                })),
            },
        ],
    }

    const otherSolutions = SOLUTIONS_DATA.filter((s) => s.slug !== solution.slug).slice(0, 3)

    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle={solution.shortTitle}>
                
                {/* Hero Banner */}
                <section className="pt_120 pb_80" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div style={{ marginBottom: "16px" }}>
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
                                        {solution.badge}
                                    </span>
                                </div>
                                <h1 style={{ fontSize: "44px", fontWeight: "800", color: "#0d1b2a", lineHeight: "1.2", marginBottom: "16px" }}>
                                    {solution.title}
                                </h1>
                                <p style={{ fontSize: "20px", fontWeight: "600", color: "#2460e2", marginBottom: "18px" }}>
                                    {solution.subtitle}
                                </p>
                                <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.7", marginBottom: "30px", maxWidth: "620px" }}>
                                    {solution.executiveSummary}
                                </p>
                                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                                    <Link href="/contact" className="btn_style_one" style={{ padding: "14px 32px", fontSize: "15px" }}>
                                        Book a Private Consultation
                                    </Link>
                                    <Link href="/resources/assessment" className="btn_style_two" style={{ padding: "14px 28px", fontSize: "15px", background: "#fff" }}>
                                        Audit Your Digital Stature
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 mt-4 mt-lg-0">
                                <div style={{ 
                                    borderRadius: "16px", 
                                    overflow: "hidden", 
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    border: "1px solid #e2e8f0" 
                                }}>
                                    <img 
                                        src={solution.heroImage} 
                                        alt={solution.title} 
                                        style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Unique Reputation Challenges */}
                <section className="pt_100 pb_90" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "780px", margin: "0 auto 60px" }}>
                            <span style={{ color: "#e53e3e", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                The Reputation Landscape
                            </span>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a", marginTop: "12px" }}>
                                Distinct Reputation Pressures You Face
                            </h2>
                            <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>
                                High-profile leadership carries specific reputational vulnerabilities that generic PR agencies fail to comprehend.
                            </p>
                        </div>

                        <div className="row">
                            {solution.uniqueChallenges.map((challenge, idx) => (
                                <div key={idx} className="col-lg-6 mb_30">
                                    <div style={{ 
                                        background: "#fff9f9", 
                                        border: "1px solid #fed7d7", 
                                        borderRadius: "12px", 
                                        padding: "32px", 
                                        height: "100%" 
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                                            <span style={{ color: "#e53e3e", fontSize: "20px", fontWeight: "bold" }}>✕</span>
                                            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1a202c", margin: 0 }}>
                                                {challenge.title}
                                            </h3>
                                        </div>
                                        <p style={{ color: "#4a5568", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                                            {challenge.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What Prominence Builds */}
                <section className="pt_100 pb_90" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "780px", margin: "0 auto 60px" }}>
                            <span style={{ color: "#2460e2", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Bespoke Architecture
                            </span>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a", marginTop: "12px" }}>
                                How Prominence Architects Your Sovereign Presence
                            </h2>
                            <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>
                                A turnkey operational framework that protects, amplifies, and monetizes your executive authority.
                            </p>
                        </div>

                        <div className="row">
                            {solution.whatProminenceDoes.map((item, idx) => (
                                <div key={idx} className="col-lg-6 mb_30">
                                    <div style={{ 
                                        background: "#fff", 
                                        border: "1px solid #e2e8f0", 
                                        borderRadius: "12px", 
                                        padding: "32px", 
                                        height: "100%",
                                        boxShadow: "0 4px 15px rgba(0,0,0,0.02)" 
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                                            <span style={{ 
                                                width: "30px", 
                                                height: "30px", 
                                                borderRadius: "50%", 
                                                background: "#ecf3ff", 
                                                color: "#2460e2", 
                                                display: "flex", 
                                                alignItems: "center", 
                                                justifyContent: "center", 
                                                fontWeight: "800", 
                                                fontSize: "14px",
                                                flexShrink: 0
                                            }}>
                                                ✓
                                            </span>
                                            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0d1b2a", margin: 0 }}>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Recommended Services */}
                <section className="pt_90 pb_90" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 50px" }}>
                            <span style={{ color: "#2460e2", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Core Modular Capabilities
                            </span>
                            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0d1b2a", marginTop: "10px" }}>
                                Tailored Service Combination
                            </h2>
                            <p style={{ color: "#64748b", fontSize: "15px", marginTop: "8px" }}>
                                Recommended foundational pillars for this executive profile.
                            </p>
                        </div>

                        <div className="row">
                            {solution.relevantServices.map((srv, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 mb_20">
                                    <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", height: "100%", display: "flex", flexDirection: "column" }}>
                                        <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>
                                            <Link href={`/services/${srv.slug}`} style={{ color: "#0d1b2a", textDecoration: "none" }}>
                                                {srv.name}
                                            </Link>
                                        </h3>
                                        <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", flex: 1, marginBottom: "16px" }}>
                                            {srv.desc}
                                        </p>
                                        <Link href={`/services/${srv.slug}`} style={{ fontSize: "13px", fontWeight: "700", color: "#2460e2", textDecoration: "none" }}>
                                            Explore Pillar Scope →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Vignette / Proof of Concept Callout */}
                {solution.caseVignette && (
                    <section className="pt_90 pb_90" style={{ background: "#0d1b2a", color: "#fff" }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb_30 mb-lg-0">
                                    <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                        Demonstration Case Vignette
                                    </span>
                                    <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#fff", marginTop: "12px", marginBottom: "20px" }}>
                                        {solution.caseVignette.title}
                                    </h2>
                                    <div style={{ marginBottom: "18px" }}>
                                        <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                                            The Challenge:
                                        </h4>
                                        <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.7" }}>
                                            {solution.caseVignette.challenge}
                                        </p>
                                    </div>
                                    <div style={{ marginBottom: "18px" }}>
                                        <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                                            The Prominence Intervention:
                                        </h4>
                                        <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.7" }}>
                                            {solution.caseVignette.solution}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#34d399", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                                            The Outcome:
                                        </h4>
                                        <p style={{ color: "#e2e8f0", fontSize: "15px", fontWeight: "600", lineHeight: "1.7" }}>
                                            {solution.caseVignette.outcome}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "14px", padding: "40px" }}>
                                        <span style={{ fontSize: "40px", color: "#d29d2b", lineHeight: "1", display: "block", marginBottom: "16px" }}>“</span>
                                        <p style={{ fontSize: "18px", color: "#f8fafc", fontStyle: "italic", lineHeight: "1.8", marginBottom: "24px" }}>
                                            {solution.caseVignette.quote}
                                        </p>
                                        <div>
                                            <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0, fontWeight: "600" }}>
                                                — {solution.caseVignette.authorTitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Persona FAQs */}
                <section className="pt_100 pb_90" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 50px" }}>
                            <div className="tag_text"><h6>Specific Inquiries</h6></div>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a" }}>
                                Inquiries for {solution.shortTitle}
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    {solution.faqs.map((faq, i) => (
                                        <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: "10px", padding: "28px 32px", background: "#f8fafc" }}>
                                            <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#0d1b2a", marginBottom: "12px" }}>
                                                {faq.question}
                                            </h3>
                                            <p style={{ color: "#475569", lineHeight: "1.7", margin: 0, fontSize: "15px" }}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Solutions Strip */}
                <section className="pt_80 pb_80" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ marginBottom: "40px" }}>
                            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#0d1b2a" }}>
                                Explore Other Leadership Roles
                            </h2>
                        </div>
                        <div className="row">
                            {otherSolutions.map((oth) => (
                                <div key={oth.slug} className="col-lg-4 col-md-6 mb_20">
                                    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", height: "100%", display: "flex", flexDirection: "column" }}>
                                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#2460e2", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
                                            {oth.badge}
                                        </span>
                                        <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>
                                            <Link href={`/solutions/${oth.slug}`} style={{ color: "#0d1b2a", textDecoration: "none" }}>
                                                {oth.shortTitle}
                                            </Link>
                                        </h3>
                                        <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", flex: 1, marginBottom: "16px" }}>
                                            {oth.tagline}
                                        </p>
                                        <Link href={`/solutions/${oth.slug}`} style={{ fontSize: "13px", fontWeight: "700", color: "#2460e2", textDecoration: "none" }}>
                                            View Profile Architecture →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pt_90 pb_90" style={{ background: "#0d1b2a", color: "#fff", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                            <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Private Engagement
                            </span>
                            <h2 style={{ fontSize: "38px", fontWeight: "800", color: "#fff", marginTop: "12px", marginBottom: "16px" }}>
                                Align Your Digital Reputation With Your Leadership Mandate
                            </h2>
                            <p style={{ color: "#94a3b8", fontSize: "17px", lineHeight: "1.7", marginBottom: "32px" }}>
                                Schedule a 30-minute confidential discussion with our partners. We will audit your current search footprint and scope a sovereign reputation architecture tailored for your role.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "16px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/resources/assessment" className="btn_style_two" style={{ padding: "16px 32px", fontSize: "16px", background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
                                    Take 3-Min Assessment
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    )
}
