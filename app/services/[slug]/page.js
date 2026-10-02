import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
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
        <div className="mlab-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ModernHeader activeNav="services" />

            {/* Breadcrumb Navigation */}
            <div style={{ padding: "14px 0", borderBottom: "1px solid #eaedf0", background: "#f8f9fa", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#6c757d" }}>
                        <Link href="/" style={{ color: "#6c757d", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <Link href="/services" style={{ color: "#6c757d", textDecoration: "none" }}>Services</Link>
                        <span>/</span>
                        <span style={{ color: "#0D0D14", fontWeight: 600 }}>{service.shortTitle || service.title}</span>
                    </div>
                </div>
            </div>

            <main>
                {/* Service Hero Banner */}
                <section className="py-5" style={{ background: '#FAF7F4', borderBottom: '1px solid rgba(18,19,22,0.06)' }}>
                    <div className="mlab-container py-3">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-7">
                                <span className="editorial-badge mb-3">
                                    <span className="editorial-badge-dot">✦</span> PILLAR {service.number} &bull; {service.badge.toUpperCase()}
                                </span>
                                <h1 style={{
                                    fontSize: 'clamp(34px, 4.4vw, 54px)',
                                    fontWeight: 850,
                                    color: '#121316',
                                    lineHeight: 1.12,
                                    letterSpacing: '-0.03em',
                                    marginBottom: '16px'
                                }}>
                                    {service.title}
                                </h1>
                                <p style={{
                                    fontSize: '17px',
                                    fontWeight: 700,
                                    color: '#FF3B81',
                                    marginBottom: '16px',
                                    letterSpacing: '-0.01em'
                                }}>
                                    {service.tagline}
                                </p>
                                <p style={{
                                    fontSize: '16px',
                                    color: '#5A5D66',
                                    lineHeight: 1.65,
                                    marginBottom: '32px',
                                    maxWidth: '640px'
                                }}>
                                    {service.shortDescription}
                                </p>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <Link href="/contact" className="prominence-btn-primary">
                                        <span>Book a Private Consultation</span>
                                        <span>&rarr;</span>
                                    </Link>
                                    <Link href="/resources/assessment" className="prominence-btn-outline">
                                        <span>Audit Your Stature</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div style={{ 
                                    borderRadius: '24px', 
                                    overflow: 'hidden', 
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                    position: 'relative'
                                }}>
                                    <img 
                                        src={service.heroImage} 
                                        alt={service.title} 
                                        style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '16px',
                                        left: '16px',
                                        right: '16px',
                                        background: 'rgba(255, 255, 255, 0.92)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '12px 18px',
                                        borderRadius: '14px',
                                        border: '1px solid rgba(255, 255, 255, 0.8)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <div>
                                            <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#FF3B81', display: 'block' }}>
                                                Sovereign Standard
                                            </span>
                                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                                                Turnkey Execution
                                            </span>
                                        </div>
                                        <span style={{ fontSize: '12px', fontWeight: 800, background: '#121316', color: '#FFFFFF', padding: '4px 10px', borderRadius: '999px' }}>
                                            Pillar {service.number}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 01. Problem: The Sovereign Diagnostic */}
                <section className="py-5" style={{ background: '#FFFFFF' }}>
                    <div className="mlab-container py-4">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-3">
                            <div style={{ maxWidth: '620px' }}>
                                <span className="editorial-badge mb-2">
                                    <span className="editorial-badge-dot">✦</span> 01 &bull; THE SOVEREIGN DIAGNOSTIC
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', margin: 0 }}>
                                    The Cost of Invisible or Rented Presence
                                </h2>
                            </div>
                            <p style={{ fontSize: '15px', color: '#6B7280', maxWidth: '420px', margin: 0, lineHeight: 1.6 }}>
                                In enterprise leadership, narrative silence does not project modesty—it surrenders authority to unmanaged algorithms and competitor noise.
                            </p>
                        </div>

                        <div className="row g-4 align-items-stretch">
                            <div className="col-lg-7">
                                <div style={{
                                    background: '#FAF7F4',
                                    border: '1.5px solid rgba(18,19,22,0.07)',
                                    borderRadius: '20px',
                                    padding: '36px',
                                    height: '100%'
                                }}>
                                    <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#121316', marginBottom: '18px' }}>
                                        {service.problem}
                                    </p>
                                    <p style={{ color: '#5A5D66', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                                        When board nominating panels, private equity partners, or enterprise clients conduct due diligence, they make irreversible impressions within 30 seconds of organic search inspection.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div style={{
                                    background: '#FFFFFF',
                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                    borderLeft: '5px solid #FF3B81',
                                    borderRadius: '20px',
                                    padding: '36px',
                                    height: '100%',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
                                }}>
                                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#FF3B81', display: 'block', marginBottom: '10px' }}>
                                        The Conventional Trap
                                    </span>
                                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#121316', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                                        Rented Social Retainers
                                    </h3>
                                    <p style={{ fontSize: '14px', color: '#5A5D66', lineHeight: 1.6, margin: 0 }}>
                                        Traditional agencies push generic daily posting that vanishes within hours. When algorithms change or you transition corporate roles, rented land disappears.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 02. Insight: Institutional Reality */}
                <section className="py-5" style={{ background: '#FAF7F4', borderTop: '1px solid rgba(18,19,22,0.06)', borderBottom: '1px solid rgba(18,19,22,0.06)' }}>
                    <div className="mlab-container py-4">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-5">
                                <span className="editorial-badge mb-2">
                                    <span className="editorial-badge-dot">✦</span> 02 &bull; INSTITUTIONAL INSIGHT
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', marginBottom: '20px' }}>
                                    Why Sovereign Stature Matters
                                </h2>
                                <blockquote style={{
                                    fontSize: '16.5px',
                                    fontWeight: 700,
                                    color: '#121316',
                                    borderLeft: '4px solid #FF3B81',
                                    paddingLeft: '20px',
                                    margin: 0,
                                    lineHeight: 1.6,
                                    fontStyle: 'italic'
                                }}>
                                    &ldquo;Executive influence is never won by shouting into the feed. It is established by sovereign assets that speak with quiet, undeniable finality.&rdquo;
                                </blockquote>
                            </div>
                            <div className="col-lg-7 ps-lg-4">
                                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#121316', marginBottom: '24px' }}>
                                    {service.whyItMatters}
                                </p>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div style={{ background: '#FFFFFF', border: '1.5px solid rgba(18,19,22,0.07)', borderRadius: '16px', padding: '22px' }}>
                                            <span style={{ fontSize: '15px', fontWeight: 800, color: '#121316', display: 'block', marginBottom: '6px' }}>
                                                100% Owned Equity
                                            </span>
                                            <span style={{ fontSize: '13px', color: '#5A5D66', lineHeight: 1.5, display: 'block' }}>
                                                Assets that travel with you across career transitions and board mandates.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div style={{ background: '#FFFFFF', border: '1.5px solid rgba(18,19,22,0.07)', borderRadius: '16px', padding: '22px' }}>
                                            <span style={{ fontSize: '15px', fontWeight: 800, color: '#121316', display: 'block', marginBottom: '6px' }}>
                                                Institutional Defense
                                            </span>
                                            <span style={{ fontSize: '13px', color: '#5A5D66', lineHeight: 1.5, display: 'block' }}>
                                                Protects your name, family, and reputation against scrapers and noise.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 03. Strategy: Blueprint */}
                <section className="py-5" style={{ background: '#FFFFFF' }}>
                    <div className="mlab-container py-4">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-3">
                            <div style={{ maxWidth: '620px' }}>
                                <span className="editorial-badge mb-2">
                                    <span className="editorial-badge-dot">✦</span> 03 &bull; STRATEGIC BLUEPRINT
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', margin: 0 }}>
                                    The Prominence Strategic Architecture
                                </h2>
                            </div>
                            <p style={{ fontSize: '15px', color: '#6B7280', maxWidth: '420px', margin: 0, lineHeight: 1.6 }}>
                                A tailored executive playbook aligning your commercial achievements with an unassailable digital presence.
                            </p>
                        </div>

                        <div style={{
                            background: '#FAF7F4',
                            border: '1.5px solid rgba(18,19,22,0.08)',
                            borderRadius: '24px',
                            padding: 'clamp(28px, 4vw, 44px)'
                        }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 850, color: '#121316', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                                {service.tagline}
                            </h3>
                            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#121316', maxWidth: '840px', margin: '0 0 32px 0' }}>
                                {service.strategy}
                            </p>
                            <div className="row g-4 pt-3 border-top">
                                <div className="col-md-4">
                                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#FF3B81', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
                                        Mandate Stature
                                    </span>
                                    <strong style={{ fontSize: '16px', fontWeight: 800, color: '#121316' }}>C-Suite, CHRO &amp; Board Level</strong>
                                </div>
                                <div className="col-md-4">
                                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#FF3B81', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
                                        Monthly Executive Time
                                    </span>
                                    <strong style={{ fontSize: '16px', fontWeight: 800, color: '#121316' }}>&lt; 30 Minutes Total</strong>
                                </div>
                                <div className="col-md-4">
                                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#FF3B81', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
                                        Asset Ownership
                                    </span>
                                    <strong style={{ fontSize: '16px', fontWeight: 800, color: '#121316' }}>100% Owned Domain &amp; Code</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 04. Execution: 4-Stage Protocol & Deliverables */}
                <section className="py-5" style={{ background: '#FAF7F4', borderTop: '1px solid rgba(18,19,22,0.06)', borderBottom: '1px solid rgba(18,19,22,0.06)' }}>
                    <div className="mlab-container py-4">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-3">
                            <div style={{ maxWidth: '620px' }}>
                                <span className="editorial-badge mb-2">
                                    <span className="editorial-badge-dot">✦</span> 04 &bull; TURNKEY EXECUTION
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', margin: 0 }}>
                                    The 4-Stage Protocol &amp; Definitive Scope
                                </h2>
                            </div>
                            <p style={{ fontSize: '15px', color: '#6B7280', maxWidth: '420px', margin: 0, lineHeight: 1.6 }}>
                                Engineered for zero executive friction. We extract your narrative, build the infrastructure, and monitor search placement.
                            </p>
                        </div>

                        {/* 4-Stage Protocol Cards */}
                        <div className="row g-4 mb-5">
                            {service.process.map((step, idx) => (
                                <div key={idx} className="col-lg-3 col-md-6">
                                    <div style={{
                                        background: '#FFFFFF',
                                        border: '1.5px solid rgba(18,19,22,0.07)',
                                        borderRadius: '20px',
                                        padding: '28px 22px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        boxShadow: '0 4px 18px rgba(0,0,0,0.02)'
                                    }}>
                                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                                            Stage 0{step.step}
                                        </span>
                                        <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#121316', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                                            {step.name}
                                        </h4>
                                        <p style={{ fontSize: '13.5px', color: '#5A5D66', lineHeight: 1.6, margin: 0, flex: 1 }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Deliverables Specification Matrix */}
                        <div style={{
                            background: '#FFFFFF',
                            border: '1.5px solid rgba(18,19,22,0.08)',
                            borderRadius: '24px',
                            padding: 'clamp(28px, 4vw, 38px)'
                        }}>
                            <h3 style={{ fontSize: '20px', fontWeight: 850, color: '#121316', marginBottom: '22px', letterSpacing: '-0.02em' }}>
                                Included Institutional Deliverables
                            </h3>
                            <div className="row g-3">
                                {service.deliverables.map((item, idx) => (
                                    <div key={idx} className="col-md-6">
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '12px',
                                            padding: '16px 18px',
                                            background: '#FAF7F4',
                                            borderRadius: '14px',
                                            border: '1px solid rgba(18,19,22,0.06)'
                                        }}>
                                            <i className="fa-solid fa-check" style={{ color: '#10B981', marginTop: '3px', fontSize: '13px' }}></i>
                                            <span style={{ fontSize: '14px', color: '#121316', fontWeight: 600, lineHeight: 1.5 }}>
                                                {item}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 05. Outcome: Authority Milestones */}
                <section className="py-5" style={{ background: '#121316', color: '#FFFFFF' }}>
                    <div className="mlab-container py-4">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-3">
                            <div style={{ maxWidth: '620px' }}>
                                <span className="editorial-badge mb-2" style={{ background: 'rgba(255,255,255,0.1)', color: '#FF3B81', borderColor: 'rgba(255,255,255,0.15)' }}>
                                    <span className="editorial-badge-dot">✦</span> 05 &bull; MEASURABLE IMPACT
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#FFFFFF', margin: 0 }}>
                                    Authority Milestones &amp; Outcomes
                                </h2>
                            </div>
                            <p style={{ fontSize: '15px', color: '#9CA3AF', maxWidth: '420px', margin: 0, lineHeight: 1.6 }}>
                                The measurable commercial, governance, and reputational return engineered for enterprise leaders.
                            </p>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '20px',
                                    padding: '34px 30px',
                                    height: '100%'
                                }}>
                                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#FF3B81', display: 'block', marginBottom: '10px' }}>
                                        Governance &amp; Search Milestones
                                    </span>
                                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '22px' }}>
                                        Expected Authority Returns
                                    </h3>
                                    <div className="d-flex flex-column gap-3">
                                        {service.expectedOutcomes.map((outcome, idx) => (
                                            <div key={idx} className="d-flex align-items-start gap-3">
                                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF3B81', marginTop: '9px', flexShrink: 0 }}></span>
                                                <p style={{ color: '#E5E7EB', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                                                    {outcome}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '20px',
                                    padding: '34px 30px',
                                    height: '100%'
                                }}>
                                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#9CA3AF', display: 'block', marginBottom: '10px' }}>
                                        Target Leadership Stature
                                    </span>
                                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '22px' }}>
                                        Engineered Specifically For
                                    </h3>
                                    <div className="d-flex flex-column gap-3">
                                        {service.whoItsFor.map((persona, idx) => (
                                            <div key={idx} className="d-flex align-items-start gap-3">
                                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', marginTop: '9px', flexShrink: 0 }}></span>
                                                <p style={{ color: '#E5E7EB', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
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
                <section className="py-5" style={{ background: '#FFFFFF' }}>
                    <div className="mlab-container py-4">
                        <div className="text-center mb-5" style={{ maxWidth: '680px', margin: '0 auto 48px' }}>
                            <span className="editorial-badge mb-2">
                                <span className="editorial-badge-dot">✦</span> CLARIFICATIONS
                            </span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', margin: 0 }}>
                                Questions About {service.shortTitle}
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="d-flex flex-column gap-3">
                                    {service.faqs.map((faq, i) => (
                                        <div key={i} style={{
                                            border: '1.5px solid rgba(18,19,22,0.07)',
                                            borderRadius: '16px',
                                            padding: '24px 28px',
                                            background: '#FAF7F4'
                                        }}>
                                            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#121316', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                                                {faq.question}
                                            </h3>
                                            <p style={{ color: '#5A5D66', lineHeight: 1.6, margin: 0, fontSize: '14.5px' }}>
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
                <section className="py-5" style={{ background: '#FAF7F4', borderTop: '1px solid rgba(18,19,22,0.06)' }}>
                    <div className="mlab-container py-4">
                        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                            <div>
                                <span className="editorial-badge mb-2">
                                    <span className="editorial-badge-dot">✦</span> INTEGRATED CAPABILITIES
                                </span>
                                <h3 style={{ fontSize: '26px', fontWeight: 850, color: '#121316', margin: 0, letterSpacing: '-0.02em' }}>
                                    Complementary Offerings
                                </h3>
                            </div>
                            <Link href="/services" className="d-flex align-items-center gap-2 text-decoration-none fw-bold text-dark">
                                <span>Explore all services</span>
                                <span style={{ color: '#FF3B81' }}>&rarr;</span>
                            </Link>
                        </div>

                        <div className="row g-4">
                            {otherServices.map((rel) => (
                                <div key={rel.slug} className="col-lg-4 col-md-6">
                                    <Link href={`/services/${rel.slug}`} className="text-decoration-none">
                                        <div className="p-4 bg-white rounded-4 border h-100 transition-all hover-shadow d-flex flex-column justify-content-between" style={{ border: '1.5px solid rgba(18,19,22,0.08)' }}>
                                            <div>
                                                <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '0.8px', background: '#FFF0F5', padding: '2px 8px', borderRadius: '4px' }}>
                                                    Pillar {rel.number}
                                                </span>
                                                <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#121316', margin: '12px 0 8px', letterSpacing: '-0.02em' }}>
                                                    {rel.title}
                                                </h4>
                                                <p style={{ fontSize: '13.5px', color: '#6B7280', margin: '0 0 16px', lineHeight: 1.55 }}>
                                                    {rel.shortDescription}
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 pt-2 border-top" style={{ fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                                                <span>View Scope</span>
                                                <span style={{ color: '#FF3B81' }}>&rarr;</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Dark Consultation CTA */}
                <section className="py-5" style={{ background: '#FAF7F4' }}>
                    <div className="mlab-container">
                        <div className="custom-solution-cta" style={{ margin: 0 }}>
                            <div className="row align-items-center g-4">
                                <div className="col-lg-8">
                                    <div className="mb-3">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF3B81">
                                            <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" />
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                                        Private Executive Consultation
                                    </span>
                                    <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 40px)', fontWeight: 850, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '14px', lineHeight: 1.2 }}>
                                        Discuss Your Executive Positioning
                                    </h2>
                                    <p style={{ fontSize: '15.5px', color: '#9CA3AF', marginBottom: '28px', maxWidth: '640px', lineHeight: 1.6 }}>
                                        Schedule a 30-minute private consultation with our advisory team. We will review your current search footprint, executive narrative, and scope a tailored engagement.
                                    </p>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <Link href="/contact" className="prominence-btn-primary">
                                            <span>Book a Private Consultation</span>
                                            <span>&rarr;</span>
                                        </Link>
                                        <Link href="/solutions" className="btn btn-outline-light rounded-pill px-4 py-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                                            Explore Solutions by Role
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <ModernFooter />
        </div>
    )
}
