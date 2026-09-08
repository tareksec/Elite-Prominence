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
                <section className="prominence_page_intro" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #eaedf0" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="prominence_tracker">
                                    Pillar {service.number} &bull; {service.badge}
                                </span>
                                <h1 style={{
                                    fontSize: "clamp(30px, 4.8vw, 44px)",
                                    fontWeight: "700",
                                    color: "#0D0D14",
                                    lineHeight: "1.2",
                                    marginBottom: "16px",
                                    fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)"
                                }}>
                                    {service.title}
                                </h1>
                                <p style={{ fontSize: "17.5px", fontWeight: "700", color: "#8B5CF6", marginBottom: "16px", fontFamily: "var(--primary-font)", letterSpacing: "0.2px" }}>
                                    {service.tagline}
                                </p>
                                <p className="prominence_lead_text" style={{ marginBottom: "32px", maxWidth: "640px" }}>
                                    {service.shortDescription}
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
                                    border: "1px solid #e2e8f0",
                                    position: "relative"
                                }}>
                                    <img 
                                        src={service.heroImage} 
                                        alt={service.title} 
                                        style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                                    />
                                    <div style={{
                                        position: "absolute",
                                        bottom: "16px",
                                        left: "16px",
                                        right: "16px",
                                        background: "rgba(13, 13, 20, 0.85)",
                                        backdropFilter: "blur(8px)",
                                        padding: "12px 16px",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255, 255, 255, 0.15)",
                                        color: "#ffffff",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#8B5CF6" }}>
                                            Sovereign Standard
                                        </span>
                                        <span style={{ fontSize: "12px", color: "#cbd5e1" }}>
                                            Turnkey Execution
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 01. Problem: The Sovereign Diagnostic */}
                <section className="prominence_section" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="prominence_header_split">
                            <div>
                                <span className="prominence_tracker">01 · The Sovereign Diagnostic</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                    The Cost of Invisible or Rented Presence
                                </h2>
                            </div>
                            <div>
                                <p className="prominence_lead_text">
                                    In enterprise leadership, narrative silence does not project modesty—it surrenders authority to unmanaged algorithms, outdated articles, and competitor noise.
                                </p>
                            </div>
                        </div>

                        <div className="row g-4 align-items-center">
                            <div className="col-lg-7">
                                <div style={{ fontSize: "16.5px", lineHeight: "29px", color: "#0D0D14" }}>
                                    <p style={{ marginBottom: "20px" }}>
                                        {service.problem}
                                    </p>
                                    <p style={{ color: "#6B7280", fontSize: "15px", margin: 0 }}>
                                        When board nominating panels, private equity partners, or enterprise clients conduct due diligence, they make irreversible impressions within 30 seconds of organic search inspection.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div style={{ background: "#F7F5FC", border: "1px solid #eaedf0", borderLeft: "3px solid #8B5CF6", borderRadius: "12px", padding: "28px 24px" }}>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#8B5CF6", display: "block", marginBottom: "8px" }}>
                                        The Conventional Trap
                                    </span>
                                    <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0D0D14", marginBottom: "10px" }}>
                                        Rented Social Retainers
                                    </h3>
                                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "22px", margin: 0 }}>
                                        Traditional agencies push generic daily posting that vanishes within hours. When algorithms change or you transition corporate roles, rented land disappears.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 02. Insight: The Institutional Reality */}
                <section className="prominence_section" style={{ background: "#F7F5FC", borderTop: "1px solid #eaedf0", borderBottom: "1px solid #eaedf0" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <span className="prominence_tracker">02 · Institutional Insight</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", marginBottom: "20px" }}>
                                    Why Sovereign Stature Matters
                                </h2>
                                <blockquote style={{ fontSize: "17px", fontWeight: "600", color: "#0D0D14", borderLeft: "3px solid #8B5CF6", paddingLeft: "20px", margin: 0, lineHeight: "1.6" }}>
                                    &ldquo;Executive influence is never won by shouting into the feed. It is established by sovereign assets that speak with quiet, undeniable finality.&rdquo;
                                </blockquote>
                            </div>
                            <div className="col-lg-7 ps-lg-5">
                                <p style={{ fontSize: "17px", lineHeight: "30px", color: "#0D0D14", marginBottom: "24px" }}>
                                    {service.whyItMatters}
                                </p>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
                                    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "18px 20px" }}>
                                        <strong style={{ fontSize: "15px", color: "#0D0D14", display: "block", marginBottom: "4px" }}>100% Owned Equity</strong>
                                        <span style={{ fontSize: "13px", color: "#6B7280", lineHeight: "20px", display: "block" }}>Assets that travel with you across career transitions and board mandates.</span>
                                    </div>
                                    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "18px 20px" }}>
                                        <strong style={{ fontSize: "15px", color: "#0D0D14", display: "block", marginBottom: "4px" }}>Institutional Defense</strong>
                                        <span style={{ fontSize: "13px", color: "#6B7280", lineHeight: "20px", display: "block" }}>Protects your name, family, and reputation against scrapers and outdated noise.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 03. Strategy: Sovereign Architecture */}
                <section className="prominence_section" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="prominence_header_split">
                            <div>
                                <span className="prominence_tracker">03 · Strategic Blueprint</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                    The Prominence Strategic Architecture
                                </h2>
                            </div>
                            <div>
                                <p className="prominence_lead_text">
                                    A tailored executive playbook aligning your commercial achievements with an unassailable digital presence.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: "#F7F5FC", border: "1px solid #eaedf0", borderRadius: "16px", padding: "clamp(28px, 5vw, 44px)" }}>
                            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#0D0D14", marginBottom: "14px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                {service.tagline}
                            </h3>
                            <p style={{ fontSize: "16.5px", lineHeight: "28px", color: "#0D0D14", maxWidth: "820px", margin: "0 0 28px 0" }}>
                                {service.strategy}
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", borderTop: "1px solid #e2e8f0", paddingTop: "24px" }}>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#8B5CF6", letterSpacing: "1px", display: "block" }}>Mandate Stature</span>
                                    <strong style={{ fontSize: "15px", color: "#0D0D14" }}>C-Suite, CHRO &amp; Board Level</strong>
                                </div>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#8B5CF6", letterSpacing: "1px", display: "block" }}>Monthly Executive Time</span>
                                    <strong style={{ fontSize: "15px", color: "#0D0D14" }}>&lt; 30 Minutes Total</strong>
                                </div>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#8B5CF6", letterSpacing: "1px", display: "block" }}>Asset Ownership</span>
                                    <strong style={{ fontSize: "15px", color: "#0D0D14" }}>100% Owned Domain &amp; Code</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 04. Execution: Protocol & Scope */}
                <section className="prominence_section" style={{ background: "#F7F5FC", borderTop: "1px solid #eaedf0", borderBottom: "1px solid #eaedf0" }}>
                    <div className="container">
                        <div className="prominence_header_split">
                            <div>
                                <span className="prominence_tracker">04 · Turnkey Execution</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                    The 4-Stage Protocol &amp; Definitive Scope
                                </h2>
                            </div>
                            <div>
                                <p className="prominence_lead_text">
                                    Engineered for zero executive friction. We extract your narrative, build the infrastructure, and monitor search placement.
                                </p>
                            </div>
                        </div>

                        {/* 4-Stage Horizontal Protocol */}
                        <div className="row g-4 mb-5">
                            {service.process.map((step, idx) => (
                                <div key={idx} className="col-lg-3 col-md-6">
                                    <div style={{ background: "#ffffff", border: "1px solid #eaedf0", borderRadius: "14px", padding: "28px 22px", height: "100%", display: "flex", flexDirection: "column" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#8B5CF6", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: "12px" }}>
                                            Stage 0{step.step}
                                        </span>
                                        <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#0D0D14", marginBottom: "10px" }}>
                                            {step.name}
                                        </h4>
                                        <p style={{ fontSize: "13.5px", color: "#6B7280", lineHeight: "22px", margin: 0, flex: 1 }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Deliverables Specification Matrix */}
                        <div style={{ background: "#ffffff", border: "1px solid #eaedf0", borderRadius: "16px", padding: "clamp(28px, 4vw, 36px)" }}>
                            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0D0D14", marginBottom: "20px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                Included Institutional Deliverables
                            </h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
                                {service.deliverables.map((item, idx) => (
                                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "14px 16px", background: "#F7F5FC", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                                        <i className="fa-solid fa-check" style={{ color: "#8B5CF6", marginTop: "4px", fontSize: "12px" }}></i>
                                        <span style={{ fontSize: "14px", color: "#0D0D14", fontWeight: "500", lineHeight: "22px" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 05. Outcome: Authority Milestones & Board Impact */}
                <section className="prominence_section" style={{ background: "#0D0D14", color: "#ffffff" }}>
                    <div className="container">
                        <div className="prominence_header_split">
                            <div>
                                <span className="prominence_tracker" style={{ color: "#8B5CF6" }}>05 · Measurable Impact</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", color: "#ffffff" }}>
                                    Authority Milestones &amp; Outcomes
                                </h2>
                            </div>
                            <div>
                                <p className="prominence_lead_text" style={{ color: "#6B7280" }}>
                                    The measurable commercial, governance, and reputational return engineered for enterprise leaders.
                                </p>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.09)", borderRadius: "14px", padding: "32px 28px", height: "100%" }}>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.2px", color: "#8B5CF6", display: "block", marginBottom: "12px" }}>
                                        Governance &amp; Search Milestones
                                    </span>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", marginBottom: "20px" }}>
                                        Expected Authority Returns
                                    </h3>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                        {service.expectedOutcomes.map((outcome, idx) => (
                                            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8B5CF6", marginTop: "10px", flexShrink: 0 }}></span>
                                                <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
                                                    {outcome}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.09)", borderRadius: "14px", padding: "32px 28px", height: "100%" }}>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.2px", color: "#6B7280", display: "block", marginBottom: "12px" }}>
                                        Target Leadership Stature
                                    </span>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", marginBottom: "20px" }}>
                                        Engineered Specifically For
                                    </h3>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                        {service.whoItsFor.map((persona, idx) => (
                                            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8B5CF6", marginTop: "10px", flexShrink: 0 }}></span>
                                                <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
                                                    {persona}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service-Specific FAQs */}
                <section className="prominence_section" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="prominence_header_split">
                            <div>
                                <span className="prominence_tracker">Clarifications</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                    Questions About {service.shortTitle}
                                </h2>
                            </div>
                            <div>
                                <p className="prominence_lead_text">
                                    Discretion guardrails, employer compliance, and operational deliverables explained.
                                </p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {service.faqs.map((faq, i) => (
                                        <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "26px 30px", background: "#F7F5FC" }}>
                                            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0D0D14", marginBottom: "10px" }}>
                                                {faq.question}
                                            </h3>
                                            <p style={{ color: "#6B7280", lineHeight: "26px", margin: 0, fontSize: "15px" }}>
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
                <section className="prominence_section_compact" style={{ background: "#F7F5FC", borderTop: "1px solid #edf2f7" }}>
                    <div className="container">
                        <div className="prominence_header_split" style={{ marginBottom: "36px" }}>
                            <div>
                                <span className="prominence_tracker">Integrated Capabilities</span>
                                <h3 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                    Complementary Offerings
                                </h3>
                            </div>
                            <div>
                                <Link href="/services" className="btn_style_ghost">
                                    Explore All Services <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="row g-4">
                            {otherServices.map((rel) => (
                                <div key={rel.slug} className="col-lg-4 col-md-6">
                                    <div className="prominence_card_equal_height" style={{ background: "#ffffff", border: "1px solid #eaedf0", borderRadius: "12px", padding: "28px" }}>
                                        <div className="prominence_card_body">
                                            <span style={{ fontSize: "11px", fontWeight: "700", color: "#8B5CF6", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px", fontFamily: "var(--primary-font)", display: "block" }}>
                                                Pillar {rel.number}
                                            </span>
                                            <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>
                                                <Link href={`/services/${rel.slug}`} style={{ color: "#0D0D14", textDecoration: "none" }}>
                                                    {rel.title}
                                                </Link>
                                            </h4>
                                            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "22px", margin: 0 }}>
                                                {rel.shortDescription}
                                            </p>
                                        </div>
                                        <div className="prominence_card_footer" style={{ marginTop: "18px" }}>
                                            <Link href={`/services/${rel.slug}`} className="btn_style_ghost" style={{ fontSize: "13px" }}>
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
                <section className="prominence_section" style={{ background: "#F7F5FC", borderTop: "1px solid #edf2f7", textAlign: "center" }}>
                    <div className="container">
                        <div className="prominence_header_centered" style={{ maxWidth: "740px", margin: "0 auto" }}>
                            <span className="prominence_tracker">Private Consultation</span>
                            <h2 style={{ fontSize: "clamp(26px, 3.8vw, 36px)", fontWeight: "700", color: "#0D0D14", marginBottom: "16px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                Discuss Your Executive Positioning
                            </h2>
                            <p className="prominence_lead_text" style={{ marginBottom: "32px" }}>
                                Schedule a 30-minute private consultation with our advisory team. We will review your current search footprint, executive narrative, and scope a tailored engagement.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/contact" className="btn_style_one btn_md">
                                    Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link href="/solutions" className="btn_style_two btn_md">
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
