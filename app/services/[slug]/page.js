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
        title: `${service.title} | Executive Services | Prominence`,
        description: service.shortDescription,
        alternates: {
            canonical: `/services/${service.slug}`,
        },
        openGraph: {
            title: `${service.title} — Prominence Executive Services`,
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

    // Identify other related services
    const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3)

    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle={service.shortTitle}>
                
                {/* Service Hero Banner */}
                <section className="service_detail_hero pt_120 pb_80" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
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
                                        {service.badge}
                                    </span>
                                </div>
                                <h1 style={{ fontSize: "44px", fontWeight: "800", color: "#0d1b2a", lineHeight: "1.2", marginBottom: "16px" }}>
                                    {service.title}
                                </h1>
                                <p style={{ fontSize: "20px", fontWeight: "600", color: "#2460e2", marginBottom: "18px" }}>
                                    {service.tagline}
                                </p>
                                <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.7", marginBottom: "30px", maxWidth: "620px" }}>
                                    {service.shortDescription}
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
                <section className="pt_100 pb_90" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb_30">
                                <div style={{ 
                                    background: "#fff9f9", 
                                    border: "1px solid #fed7d7", 
                                    borderRadius: "12px", 
                                    padding: "40px", 
                                    height: "100%" 
                                }}>
                                    <span style={{ color: "#e53e3e", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
                                        The Executive Dilemma
                                    </span>
                                    <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1a202c", marginBottom: "18px" }}>
                                        The Cost of Unmanaged Presence
                                    </h2>
                                    <p style={{ color: "#4a5568", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                                        {service.problem}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 mb_30">
                                <div style={{ 
                                    background: "linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)", 
                                    border: "1px solid #bfdbfe", 
                                    borderRadius: "12px", 
                                    padding: "40px", 
                                    height: "100%" 
                                }}>
                                    <span style={{ color: "#2563eb", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
                                        Strategic Imperative
                                    </span>
                                    <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", marginBottom: "18px" }}>
                                        Why Sovereign Stature Matters
                                    </h2>
                                    <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                                        {service.whyItMatters}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scope & Deliverables */}
                <section className="pt_90 pb_90" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 60px" }}>
                            <span style={{ color: "#2460e2", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Definitive Scope
                            </span>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a", marginTop: "12px" }}>
                                What Prominence Architects & Delivers
                            </h2>
                            <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>
                                An exhaustive, institutional-grade delivery system built for zero executive friction.
                            </p>
                        </div>

                        <div className="row">
                            {service.deliverables.map((item, idx) => (
                                <div key={idx} className="col-lg-6 mb_24">
                                    <div style={{ 
                                        background: "#fff", 
                                        borderRadius: "10px", 
                                        border: "1px solid #e2e8f0", 
                                        padding: "24px 28px", 
                                        display: "flex", 
                                        alignItems: "flex-start", 
                                        gap: "16px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.02)" 
                                    }}>
                                        <div style={{ 
                                            width: "36px", 
                                            height: "36px", 
                                            borderRadius: "50%", 
                                            background: "#ecf3ff", 
                                            color: "#2460e2", 
                                            display: "flex", 
                                            alignItems: "center", 
                                            justifyContent: "center", 
                                            fontWeight: "800", 
                                            fontSize: "16px", 
                                            flexShrink: 0 
                                        }}>
                                            ✓
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontSize: "16px", fontWeight: "600", color: "#1e293b", lineHeight: "1.6" }}>
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
                <section className="pt_100 pb_90" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 60px" }}>
                            <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Execution Protocol
                            </span>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a", marginTop: "12px" }}>
                                How We Deliver: The 4-Stage Protocol
                            </h2>
                            <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>
                                Engineered for complete executive discretion, compliance, and under 30 minutes of client time per month.
                            </p>
                        </div>

                        <div className="row">
                            {service.process.map((step, idx) => (
                                <div key={idx} className="col-lg-3 col-md-6 mb_30">
                                    <div style={{ 
                                        background: "#f8fafc", 
                                        border: "1px solid #e2e8f0", 
                                        borderRadius: "12px", 
                                        padding: "32px 24px", 
                                        height: "100%", 
                                        position: "relative" 
                                    }}>
                                        <div style={{ 
                                            fontSize: "32px", 
                                            fontWeight: "900", 
                                            color: "#cbd5e1", 
                                            marginBottom: "16px" 
                                        }}>
                                            {step.step}
                                        </div>
                                        <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#0d1b2a", marginBottom: "12px", lineHeight: "1.3" }}>
                                            {step.name}
                                        </h3>
                                        <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expected Outcomes & Who It's For */}
                <section className="pt_90 pb_90" style={{ background: "#0d1b2a", color: "#fff" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb_40">
                                <span style={{ color: "#38bdf8", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                    Authority Milestones
                                </span>
                                <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#fff", marginTop: "12px", marginBottom: "24px" }}>
                                    Expected Outcomes & Business Impact
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    {service.expectedOutcomes.map((outcome, idx) => (
                                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                                            <span style={{ color: "#38bdf8", fontSize: "18px", fontWeight: "bold" }}>✦</span>
                                            <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                                                {outcome}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-lg-6 mb_40">
                                <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                    Target Stature
                                </span>
                                <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#fff", marginTop: "12px", marginBottom: "24px" }}>
                                    Engineered Specifically For
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    {service.whoItsFor.map((persona, idx) => (
                                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                                            <span style={{ color: "#d29d2b", fontSize: "18px", fontWeight: "bold" }}>◼</span>
                                            <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
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
                <section className="pt_100 pb_90" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 50px" }}>
                            <div className="tag_text"><h6>Common Clarifications</h6></div>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a" }}>
                                Questions About {service.shortTitle}
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    {service.faqs.map((faq, i) => (
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

                {/* Related Capabilities */}
                <section className="pt_80 pb_80" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ marginBottom: "40px" }}>
                            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#0d1b2a" }}>
                                Complementary Capabilities
                            </h2>
                        </div>
                        <div className="row">
                            {otherServices.map((rel) => (
                                <div key={rel.slug} className="col-lg-4 col-md-6 mb_20">
                                    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", height: "100%", display: "flex", flexDirection: "column" }}>
                                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#2460e2", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
                                            {rel.badge}
                                        </span>
                                        <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>
                                            <Link href={`/services/${rel.slug}`} style={{ color: "#0d1b2a", textDecoration: "none" }}>
                                                {rel.title}
                                            </Link>
                                        </h3>
                                        <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", flex: 1, marginBottom: "16px" }}>
                                            {rel.shortDescription}
                                        </p>
                                        <Link href={`/services/${rel.slug}`} style={{ fontSize: "13px", fontWeight: "700", color: "#2460e2", textDecoration: "none" }}>
                                            View Details →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Consultation CTA */}
                <section className="pt_90 pb_90" style={{ background: "#0d1b2a", color: "#fff", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                            <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Confidential Engagement
                            </span>
                            <h2 style={{ fontSize: "38px", fontWeight: "800", color: "#fff", marginTop: "12px", marginBottom: "16px" }}>
                                Discuss Your Executive Positioning
                            </h2>
                            <p style={{ color: "#94a3b8", fontSize: "17px", lineHeight: "1.7", marginBottom: "32px" }}>
                                Schedule a 30-minute private consultation with our advisory team. We will review your current search footprint, executive narrative, and scope a tailored engagement.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "16px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/solutions" className="btn_style_two" style={{ padding: "16px 32px", fontSize: "16px", background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
                                    Explore Solutions by Role
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    )
}
