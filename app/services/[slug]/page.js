import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getServiceBySlug, getAllServiceSlugs, SERVICES_DATA } from '@/lib/servicesData'

export async function generateStaticParams() {
    return getAllServiceSlugs()
}

export async function generateMetadata({ params }) {
    const service = getServiceBySlug(params.slug)
    if (!service) {
        return {
            title: 'Service Not Found | Prominence',
            description: 'The requested executive service does not exist.',
        }
    }

    return {
        title: `${service.title} | Executive Capabilities | Prominence`,
        description: service.shortDescription,
        alternates: {
            canonical: `/services/${service.slug}`,
        },
        openGraph: {
            title: `${service.title} — Prominence Executive Capabilities`,
            description: service.shortDescription,
            url: `https://www.prominence.agency/services/${service.slug}`,
            siteName: 'Prominence.agency',
            images: [
                {
                    url: service.heroImage,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
            type: 'article',
        },
    }
}

export default function ServiceDetailPage({ params }) {
    const service = getServiceBySlug(params.slug)

    if (!service) {
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
                        name: 'Services',
                        item: 'https://www.prominence.agency/services',
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: service.title,
                        item: `https://www.prominence.agency/services/${service.slug}`,
                    },
                ],
            },
            {
                '@type': 'Service',
                name: service.title,
                provider: {
                    '@type': 'Organization',
                    name: 'Prominence',
                    url: 'https://www.prominence.agency',
                },
                description: service.shortDescription,
                areaServed: 'Worldwide',
                serviceType: service.title,
            },
            {
                '@type': 'FAQPage',
                mainEntity: service.faqs.map((faq) => ({
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

    const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3)

    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle={service.shortTitle}>
                
                {/* Service Hero Banner */}
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="tag_text" style={{ marginBottom: "16px" }}>
                                    <h6>{service.badge}</h6>
                                </div>
                                <h1 style={{ fontSize: "44px", fontWeight: "700", color: "#0f1013", lineHeight: "1.2", marginBottom: "16px", fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>
                                    {service.title}
                                </h1>
                                <p style={{ fontSize: "17px", fontWeight: "700", color: "#b89058", marginBottom: "18px", fontFamily: "var(--primary-font)", letterSpacing: "0.2px" }}>
                                    {service.tagline}
                                </p>
                                <p style={{ fontSize: "17px", color: "#475569", lineHeight: "28px", marginBottom: "32px", maxWidth: "620px" }}>
                                    {service.shortDescription}
                                </p>
                                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                                    <Link href="/contact" className="btn_style_one">
                                        Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/resources/assessment" className="btn_style_two">
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
                                        src={service.heroImage} 
                                        alt={service.title} 
                                        style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem vs. Strategic Value */}
                <section className="pt_100 pb_90" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb_30">
                                <div style={{ 
                                    background: "#fafbfc", 
                                    border: "1px solid #e5e7eb", 
                                    borderRadius: "14px", 
                                    padding: "40px", 
                                    height: "100%" 
                                }}>
                                    <span style={{ color: "#64748b", fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "12px", fontFamily: "var(--primary-font)" }}>
                                        The Executive Reality
                                    </span>
                                    <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#0f1013", marginBottom: "18px", fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>
                                        The Cost of Unmanaged Presence
                                    </h2>
                                    <p style={{ color: "#475569", fontSize: "16px", lineHeight: "28px", margin: 0 }}>
                                        {service.problem}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 mb_30">
                                <div style={{ 
                                    background: "#0f1013", 
                                    border: "1px solid rgba(255,255,255,0.08)", 
                                    borderRadius: "14px", 
                                    padding: "40px", 
                                    height: "100%",
                                    color: "#ffffff"
                                }}>
                                    <span style={{ color: "#b89058", fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "12px", fontFamily: "var(--primary-font)" }}>
                                        Strategic Imperative
                                    </span>
                                    <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#ffffff", marginBottom: "18px", fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>
                                        Why Sovereign Stature Matters
                                    </h2>
                                    <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "28px", margin: 0 }}>
                                        {service.whyItMatters}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scope & Deliverables */}
                <section className="pt_90 pb_90" style={{ background: "#f8fafd", borderTop: "1px solid #edf2f7", borderBottom: "1px solid #edf2f7" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 60px" }}>
                            <div className="tag_text">
                                <h6>Definitive Scope</h6>
                            </div>
                            <h2 style={{ fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>What Prominence Architects &amp; Delivers</h2>
                            <p style={{ color: "#59606a", fontSize: "17px", marginTop: "12px", lineHeight: "28px" }}>
                                An exhaustive, institutional-grade delivery system built for zero executive friction.
                            </p>
                        </div>

                        <div className="row">
                            {service.deliverables.map((item, idx) => (
                                <div key={idx} className="col-lg-6 mb_24">
                                    <div style={{ 
                                        background: "#ffffff", 
                                        borderRadius: "12px", 
                                        border: "1px solid #e2e8f0", 
                                        padding: "24px 28px", 
                                        display: "flex", 
                                        alignItems: "flex-start", 
                                        gap: "18px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.02)" 
                                    }}>
                                        <span style={{ 
                                            fontSize: "12px", 
                                            fontWeight: "700", 
                                            color: "#94a3b8", 
                                            fontFamily: "var(--primary-font)", 
                                            minWidth: "24px", 
                                            paddingTop: "2px" 
                                        }}>
                                            0{idx + 1}
                                        </span>
                                        <div>
                                            <p style={{ margin: 0, fontSize: "15.5px", fontWeight: "600", color: "#1e293b", lineHeight: "24px" }}>
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4-Step Process Timeline */}
                <section className="pt_100 pb_90" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 60px" }}>
                            <div className="tag_text">
                                <h6>Execution Protocol</h6>
                            </div>
                            <h2 style={{ fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>How We Deliver: The 4-Stage Protocol</h2>
                            <p style={{ color: "#59606a", fontSize: "17px", marginTop: "12px", lineHeight: "28px" }}>
                                Engineered for complete executive discretion, compliance, and under 30 minutes of client time per month.
                            </p>
                        </div>

                        <div className="row">
                            {service.process.map((step, idx) => (
                                <div key={idx} className="col-lg-3 col-md-6 mb_30">
                                    <div style={{ 
                                        background: "#fafbfc", 
                                        border: "1px solid #e2e8f0", 
                                        borderRadius: "12px", 
                                        padding: "32px 24px", 
                                        height: "100%", 
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <span style={{ 
                                            fontSize: "12px", 
                                            fontWeight: "700", 
                                            color: "#94a3b8", 
                                            letterSpacing: "1.5px", 
                                            textTransform: "uppercase", 
                                            marginBottom: "12px", 
                                            fontFamily: "var(--primary-font)" 
                                        }}>
                                            Stage {step.step}
                                        </span>
                                        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f1013", marginBottom: "12px", lineHeight: "1.35" }}>
                                            {step.name}
                                        </h3>
                                        <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "22px", margin: 0, flex: 1 }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expected Outcomes & Who It's For */}
                <section className="pt_90 pb_90" style={{ background: "#0f1013", color: "#ffffff" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb_40">
                                <span style={{ color: "#b89058", fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "12px", fontFamily: "var(--primary-font)" }}>
                                    Authority Milestones
                                </span>
                                <h2 style={{ fontSize: "30px", fontWeight: "700", color: "#ffffff", marginBottom: "24px", fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>
                                    Expected Outcomes &amp; Impact
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {service.expectedOutcomes.map((outcome, idx) => (
                                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b89058", marginTop: "10px", flexShrink: 0 }}></span>
                                            <p style={{ color: "#cbd5e1", fontSize: "15.5px", lineHeight: "26px", margin: 0 }}>
                                                {outcome}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-lg-6 mb_40">
                                <span style={{ color: "#94a3b8", fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "12px", fontFamily: "var(--primary-font)" }}>
                                    Target Stature
                                </span>
                                <h2 style={{ fontSize: "30px", fontWeight: "700", color: "#ffffff", marginBottom: "24px", fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>
                                    Engineered Specifically For
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {service.whoItsFor.map((persona, idx) => (
                                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b89058", marginTop: "10px", flexShrink: 0 }}></span>
                                            <p style={{ color: "#cbd5e1", fontSize: "15.5px", lineHeight: "26px", margin: 0 }}>
                                                {persona}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service-Specific FAQs */}
                <section className="pt_100 pb_90" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 50px" }}>
                            <div className="tag_text"><h6>Clarifications</h6></div>
                            <h2>Questions About {service.shortTitle}</h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    {service.faqs.map((faq, i) => (
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

                {/* Related Capabilities */}
                <section className="pt_80 pb_80" style={{ background: "#f8fafd", borderTop: "1px solid #edf2f7" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ marginBottom: "40px" }}>
                            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>
                                Complementary Capabilities
                            </h2>
                        </div>
                        <div className="row">
                            {otherServices.map((rel) => (
                                <div key={rel.slug} className="col-lg-4 col-md-6 mb_20">
                                    <div className="prominence_card_equal_height" style={{ background: "#ffffff", border: "1px solid #eaedf0", borderRadius: "12px", padding: "28px" }}>
                                        <div className="prominence_card_body">
                                            <span style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px", fontFamily: "var(--primary-font)", display: "block" }}>
                                                Pillar {rel.number}
                                            </span>
                                            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>
                                                <Link href={`/services/${rel.slug}`} style={{ color: "#0f1013", textDecoration: "none" }}>
                                                    {rel.title}
                                                </Link>
                                            </h3>
                                            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "22px", margin: 0 }}>
                                                {rel.shortDescription}
                                            </p>
                                        </div>
                                        <div className="prominence_card_footer" style={{ marginTop: "18px" }}>
                                            <Link href={`/services/${rel.slug}`} className="btn_style_ghost">
                                                View Scope <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Consultation CTA */}
                <section className="pt_90 pb_90" style={{ background: "#f8fafd", borderTop: "1px solid #edf2f7", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
                                <h6>Confidential Engagement</h6>
                            </div>
                            <h2 style={{ fontSize: "38px", fontWeight: "700", color: "#0f1013", marginBottom: "16px", fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>
                                Discuss Your Executive Positioning
                            </h2>
                            <p style={{ color: "#59606a", fontSize: "17px", lineHeight: "28px", marginBottom: "32px" }}>
                                Schedule a 30-minute private consultation with our advisory team. We will review your current search footprint, executive narrative, and scope a tailored engagement.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/contact" className="btn_style_one">
                                    Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link href="/solutions" className="btn_style_two">
                                    Explore Solutions by Role <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    )
}
