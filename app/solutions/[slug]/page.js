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
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="tag_text" style={{ marginBottom: "16px" }}>
                                    <h6>{solution.badge}</h6>
                                </div>
                                <h1 style={{ fontSize: "44px", fontWeight: "700", color: "#0f1013", lineHeight: "1.2", marginBottom: "16px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                    {solution.title}
                                </h1>
                                <p style={{ fontSize: "17px", fontWeight: "700", color: "#b89058", marginBottom: "18px", fontFamily: "var(--primary-font)", letterSpacing: "0.2px" }}>
                                    {solution.subtitle}
                                </p>
                                <p style={{ fontSize: "17px", color: "#475569", lineHeight: "28px", marginBottom: "32px", maxWidth: "620px" }}>
                                    {solution.executiveSummary}
                                </p>
                                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                                    <Link href="/contact" className="btn_style_one btn_md">
                                        Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/resources/assessment" className="btn_style_two btn_md">
                                        Audit Your Stature <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 mt-4 mt-lg-0">
                                <div style={{ 
                                    borderRadius: "14px", 
                                    overflow: "hidden", 
                                    boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
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
                <section className="pt_100 pb_90" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "780px", margin: "0 auto 60px" }}>
                            <div className="tag_text">
                                <h6>The Reputation Landscape</h6>
                            </div>
                            <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>Distinct Reputation Pressures You Face</h2>
                            <p style={{ color: "#59606a", fontSize: "17px", marginTop: "12px", lineHeight: "28px" }}>
                                High-profile leadership carries specific reputational vulnerabilities that generic PR agencies fail to comprehend.
                            </p>
                        </div>

                        <div className="row">
                            {solution.uniqueChallenges.map((challenge, idx) => (
                                <div key={idx} className="col-lg-6 mb_30">
                                    <div style={{ 
                                        background: "#fafbfc", 
                                        border: "1px solid #e5e7eb", 
                                        borderRadius: "12px", 
                                        padding: "32px", 
                                        height: "100%" 
                                    }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px", display: "block", fontFamily: "var(--primary-font)" }}>
                                            Friction Point 0{idx + 1}
                                        </span>
                                        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f1013", marginBottom: "12px" }}>
                                            {challenge.title}
                                        </h3>
                                        <p style={{ color: "#475569", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
                                            {challenge.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What Prominence Builds */}
                <section className="pt_100 pb_90" style={{ background: "#FAF8F2", borderTop: "1px solid #edf2f7", borderBottom: "1px solid #edf2f7" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "780px", margin: "0 auto 60px" }}>
                            <div className="tag_text">
                                <h6>Bespoke Architecture</h6>
                            </div>
                            <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>How Prominence Architects Your Sovereign Presence</h2>
                            <p style={{ color: "#59606a", fontSize: "17px", marginTop: "12px", lineHeight: "28px" }}>
                                A turnkey operational framework that protects, amplifies, and monetizes your executive authority.
                            </p>
                        </div>

                        <div className="row">
                            {solution.whatProminenceDoes.map((item, idx) => (
                                <div key={idx} className="col-lg-6 mb_30">
                                    <div style={{ 
                                        background: "#ffffff", 
                                        border: "1px solid #e2e8f0", 
                                        borderRadius: "12px", 
                                        padding: "32px", 
                                        height: "100%",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.02)" 
                                    }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px", display: "block", fontFamily: "var(--primary-font)" }}>
                                            Capability 0{idx + 1}
                                        </span>
                                        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f1013", marginBottom: "12px" }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ color: "#475569", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Recommended Services */}
                <section className="pt_90 pb_90" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 50px" }}>
                            <div className="tag_text">
                                <h6>Core Capabilities</h6>
                            </div>
                            <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>Tailored Capability Combination</h2>
                            <p style={{ color: "#59606a", fontSize: "16px", marginTop: "8px", lineHeight: "26px" }}>
                                Recommended foundational pillars for this executive profile.
                            </p>
                        </div>

                        <div className="row">
                            {solution.relevantServices.map((srv, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 mb_20">
                                    <div className="prominence_card_equal_height" style={{ background: "#fafbfc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "26px" }}>
                                        <div className="prominence_card_body">
                                            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>
                                                <Link href={`/services/${srv.slug}`} style={{ color: "#0f1013", textDecoration: "none" }}>
                                                    {srv.name}
                                                </Link>
                                            </h3>
                                            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "22px", margin: 0 }}>
                                                {srv.desc}
                                            </p>
                                        </div>
                                        <div className="prominence_card_footer" style={{ marginTop: "16px" }}>
                                            <Link href={`/services/${srv.slug}`} className="btn_style_ghost">
                                                Explore Pillar Scope <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Vignette Callout */}
                {solution.caseVignette && (
                    <section className="pt_90 pb_90" style={{ background: "#FAF8F2", borderTop: "1px solid #eaedf0", borderBottom: "1px solid #eaedf0" }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb_30 mb-lg-0">
                                    <div className="tag_text" style={{ marginBottom: "14px" }}>
                                        <h6>Proof Vignette</h6>
                                    </div>
                                    <h2 style={{ fontSize: "30px", fontWeight: "700", color: "#0f1013", marginBottom: "20px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                        {solution.caseVignette.title}
                                    </h2>
                                    <div style={{ marginBottom: "18px" }}>
                                        <h4 style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontFamily: "var(--primary-font)" }}>
                                            Initial Situation:
                                        </h4>
                                        <p style={{ color: "#334155", fontSize: "15px", lineHeight: "24px" }}>
                                            {solution.caseVignette.challenge}
                                        </p>
                                    </div>
                                    <div style={{ marginBottom: "18px" }}>
                                        <h4 style={{ fontSize: "12px", fontWeight: "700", color: "#b89058", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontFamily: "var(--primary-font)" }}>
                                            Strategic Intervention:
                                        </h4>
                                        <p style={{ color: "#334155", fontSize: "15px", lineHeight: "24px" }}>
                                            {solution.caseVignette.solution}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "12px", fontWeight: "700", color: "#166534", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontFamily: "var(--primary-font)" }}>
                                            Verified Outcome:
                                        </h4>
                                        <p style={{ color: "#0f1013", fontSize: "15px", fontWeight: "700", lineHeight: "24px" }}>
                                            {solution.caseVignette.outcome}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{ background: "#ffffff", border: "1px solid #eaedf0", borderRadius: "14px", padding: "40px", boxShadow: "0 4px 18px rgba(15, 16, 19, 0.03)" }}>
                                        <p style={{ fontSize: "17px", color: "#1e293b", fontStyle: "italic", lineHeight: "28px", marginBottom: "20px" }}>
                                            &ldquo;{solution.caseVignette.quote}&rdquo;
                                        </p>
                                        <div>
                                            <p style={{ fontSize: "14px", color: "#64748b", margin: 0, fontWeight: "600" }}>
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
                <section className="pt_100 pb_90" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 50px" }}>
                            <div className="tag_text"><h6>Role Clarifications</h6></div>
                            <h2>Inquiries for {solution.shortTitle}</h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    {solution.faqs.map((faq, i) => (
                                        <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: "10px", padding: "26px 30px", background: "#fafbfc" }}>
                                            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f1013", marginBottom: "10px" }}>
                                                {faq.question}
                                            </h3>
                                            <p style={{ color: "#475569", lineHeight: "24px", margin: 0, fontSize: "15px" }}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pt_90 pb_90" style={{ background: "#FAF8F2", borderTop: "1px solid #edf2f7", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
                                <h6>Private Engagement</h6>
                            </div>
                            <h2 style={{ fontSize: "38px", fontWeight: "700", color: "#0f1013", marginBottom: "16px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                Align Your Digital Reputation With Your Leadership Mandate
                            </h2>
                            <p style={{ color: "#59606a", fontSize: "17px", lineHeight: "28px", marginBottom: "32px" }}>
                                Schedule a 30-minute confidential discussion with our partners. We will audit your current search footprint and scope a sovereign reputation architecture tailored for your role.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/contact" className="btn_style_one btn_md">
                                    Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link href="/resources/assessment" className="btn_style_two btn_md">
                                    Take 3-Min Assessment <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    )
}
