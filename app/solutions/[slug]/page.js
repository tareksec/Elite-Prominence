import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
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
        <div className="mlab-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ModernHeader activeNav="solutions" />

            {/* Breadcrumb Navigation */}
            <div style={{ padding: "14px 0", borderBottom: "1px solid #eaedf0", background: "#f8f9fa", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#6c757d" }}>
                        <Link href="/" style={{ color: "#6c757d", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <Link href="/solutions" style={{ color: "#6c757d", textDecoration: "none" }}>Solutions</Link>
                        <span>/</span>
                        <span style={{ color: "#0D0D14", fontWeight: 600 }}>{solution.shortTitle || solution.title}</span>
                    </div>
                </div>
            </div>

            <main>
                {/* Hero Banner */}
                <section className="py-5" style={{ background: '#FAF7F4', borderBottom: '1px solid rgba(18,19,22,0.06)' }}>
                    <div className="mlab-container py-3">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-7">
                                <span className="editorial-badge mb-3">
                                    <span className="editorial-badge-dot">✦</span> {solution.badge.toUpperCase()}
                                </span>
                                <h1 style={{
                                    fontSize: 'clamp(34px, 4.4vw, 54px)',
                                    fontWeight: 850,
                                    color: '#121316',
                                    lineHeight: 1.12,
                                    letterSpacing: '-0.03em',
                                    marginBottom: '16px'
                                }}>
                                    {solution.title}
                                </h1>
                                <p style={{
                                    fontSize: '17px',
                                    fontWeight: 700,
                                    color: '#FF3B81',
                                    marginBottom: '16px',
                                    letterSpacing: '-0.01em'
                                }}>
                                    {solution.subtitle}
                                </p>
                                <p style={{
                                    fontSize: '16px',
                                    color: '#5A5D66',
                                    lineHeight: 1.65,
                                    marginBottom: '32px',
                                    maxWidth: '620px'
                                }}>
                                    {solution.executiveSummary}
                                </p>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <Link href="/contact" className="prominence-btn-primary">
                                        <span>Book a Private Consultation</span>
                                        <span>&rarr;</span>
                                    </Link>
                                    <Link href="/resources/assessment" className="prominence-btn-outline">
                                        <span>Take 3-Min Assessment</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div style={{
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={solution.heroImage}
                                        alt={solution.title}
                                        style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '16px',
                                        left: '16px',
                                        right: '16px',
                                        background: 'rgba(255,255,255,0.92)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '14px',
                                        padding: '12px 18px',
                                        border: '1px solid rgba(255,255,255,0.8)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div>
                                            <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block' }}>
                                                Executive Architecture
                                            </span>
                                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                                                {solution.shortTitle}
                                            </span>
                                        </div>
                                        <span style={{ fontSize: '12px', fontWeight: 800, background: '#121316', color: '#FFFFFF', padding: '4px 10px', borderRadius: '999px' }}>
                                            Confidential
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Unique Reputation Challenges */}
                <section className="py-5" style={{ background: '#FFFFFF' }}>
                    <div className="mlab-container py-4">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-3">
                            <div style={{ maxWidth: '620px' }}>
                                <span className="editorial-badge mb-2">
                                    <span className="editorial-badge-dot">✦</span> REPUTATION FRICTION POINTS
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', margin: 0 }}>
                                    Distinct Pressures You Face
                                </h2>
                            </div>
                            <p style={{ fontSize: '15px', color: '#6B7280', maxWidth: '420px', margin: 0, lineHeight: 1.6 }}>
                                High-profile leadership carries specific reputational vulnerabilities that generic PR agencies fail to comprehend.
                            </p>
                        </div>

                        <div className="row g-4">
                            {solution.uniqueChallenges.map((challenge, idx) => (
                                <div key={idx} className="col-lg-6">
                                    <div style={{
                                        background: '#FAF7F4',
                                        border: '1.5px solid rgba(18,19,22,0.07)',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        height: '100%',
                                        transition: 'all 0.25s ease'
                                    }}>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <span style={{
                                                fontSize: '11px',
                                                fontWeight: 800,
                                                color: '#FF3B81',
                                                letterSpacing: '1px',
                                                textTransform: 'uppercase',
                                                background: '#FFF0F5',
                                                padding: '3px 10px',
                                                borderRadius: '999px'
                                            }}>
                                                Friction Point 0{idx + 1}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#121316', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                                            {challenge.title}
                                        </h3>
                                        <p style={{ color: '#5A5D66', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                                            {challenge.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What Prominence Builds */}
                <section className="py-5" style={{ background: '#FAF7F4', borderTop: '1px solid rgba(18,19,22,0.06)', borderBottom: '1px solid rgba(18,19,22,0.06)' }}>
                    <div className="mlab-container py-4">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-3">
                            <div style={{ maxWidth: '620px' }}>
                                <span className="editorial-badge mb-2">
                                    <span className="editorial-badge-dot">✦</span> BESPOKE ARCHITECTURE
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', margin: 0 }}>
                                    How Prominence Architects Your Presence
                                </h2>
                            </div>
                            <p style={{ fontSize: '15px', color: '#6B7280', maxWidth: '420px', margin: 0, lineHeight: 1.6 }}>
                                A turnkey operational framework that protects, amplifies, and monetizes your executive authority.
                            </p>
                        </div>

                        <div className="row g-4">
                            {solution.whatProminenceDoes.map((item, idx) => (
                                <div key={idx} className="col-lg-6">
                                    <div style={{
                                        background: '#FFFFFF',
                                        border: '1.5px solid rgba(18,19,22,0.07)',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        height: '100%',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                                    }}>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <span style={{
                                                fontSize: '11px',
                                                fontWeight: 800,
                                                color: '#7C3AED',
                                                letterSpacing: '1px',
                                                textTransform: 'uppercase',
                                                background: '#F5F0FF',
                                                padding: '3px 10px',
                                                borderRadius: '999px'
                                            }}>
                                                Capability 0{idx + 1}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#121316', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ color: '#5A5D66', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Recommended Services */}
                <section className="py-5" style={{ background: '#FFFFFF' }}>
                    <div className="mlab-container py-4">
                        <div className="mb-4">
                            <span className="editorial-badge mb-2">
                                <span className="editorial-badge-dot">✦</span> INTEGRATED CAPABILITIES
                            </span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', margin: 0 }}>
                                Tailored Capability Combination
                            </h2>
                        </div>

                        <div className="row g-4">
                            {solution.relevantServices.map((srv, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6">
                                    <Link href={`/services/${srv.slug}`} className="text-decoration-none">
                                        <div className="p-4 bg-white rounded-4 border h-100 transition-all hover-shadow d-flex flex-column justify-content-between" style={{ border: '1.5px solid rgba(18,19,22,0.08)' }}>
                                            <div>
                                                <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '0.8px', background: '#FFF0F5', padding: '2px 8px', borderRadius: '4px' }}>
                                                    Pillar 0{idx + 1}
                                                </span>
                                                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#121316', margin: '12px 0 8px', letterSpacing: '-0.02em' }}>
                                                    {srv.name}
                                                </h3>
                                                <p style={{ fontSize: '13.5px', color: '#6B7280', margin: '0 0 16px', lineHeight: 1.55 }}>
                                                    {srv.desc}
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 pt-2 border-top" style={{ fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                                                <span>Explore Pillar Scope</span>
                                                <span style={{ color: '#FF3B81' }}>&rarr;</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Vignette Callout */}
                {solution.caseVignette && (
                    <section className="py-5" style={{ background: '#FAF7F4', borderTop: '1px solid rgba(18,19,22,0.06)', borderBottom: '1px solid rgba(18,19,22,0.06)' }}>
                        <div className="mlab-container py-3">
                            <div className="row align-items-center g-5">
                                <div className="col-lg-6">
                                    <span className="editorial-badge mb-2">
                                        <span className="editorial-badge-dot">✦</span> VERIFIED PROOF VIGNETTE
                                    </span>
                                    <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', marginBottom: '24px' }}>
                                        {solution.caseVignette.title}
                                    </h2>
                                    <div className="mb-3">
                                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
                                            Initial Situation:
                                        </div>
                                        <p style={{ color: '#121316', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                                            {solution.caseVignette.challenge}
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
                                            Strategic Intervention:
                                        </div>
                                        <p style={{ color: '#121316', fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                                            {solution.caseVignette.solution}
                                        </p>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
                                            Verified Outcome:
                                        </div>
                                        <p style={{ color: '#121316', fontSize: '15px', fontWeight: 800, lineHeight: 1.6, margin: 0 }}>
                                            {solution.caseVignette.outcome}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{
                                        background: '#FFFFFF',
                                        border: '1.5px solid rgba(18,19,22,0.08)',
                                        borderRadius: '24px',
                                        padding: '40px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                                    }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF3B81" style={{ marginBottom: '18px', opacity: 0.8 }}>
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                        <p style={{ fontSize: '16.5px', color: '#121316', fontStyle: 'italic', lineHeight: 1.65, marginBottom: '20px' }}>
                                            &ldquo;{solution.caseVignette.quote}&rdquo;
                                        </p>
                                        <div className="d-flex align-items-center gap-2">
                                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span>
                                            <span style={{ fontSize: '13.5px', color: '#6B7280', fontWeight: 700 }}>
                                                {solution.caseVignette.authorTitle}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Persona FAQs */}
                <section className="py-5" style={{ background: '#FFFFFF' }}>
                    <div className="mlab-container py-4">
                        <div className="text-center mb-5" style={{ maxWidth: '680px', margin: '0 auto 48px' }}>
                            <span className="editorial-badge mb-2">
                                <span className="editorial-badge-dot">✦</span> ROLE CLARIFICATIONS
                            </span>
                            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 850, letterSpacing: '-0.03em', color: '#121316', margin: 0 }}>
                                Inquiries for {solution.shortTitle}
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="d-flex flex-column gap-3">
                                    {solution.faqs.map((faq, i) => (
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

                {/* Final Dark Executive CTA */}
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
                                        Private Confidential Engagement
                                    </span>
                                    <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 40px)', fontWeight: 850, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '14px', lineHeight: 1.2 }}>
                                        Align Your Digital Reputation With Your Leadership Mandate
                                    </h2>
                                    <p style={{ fontSize: '15.5px', color: '#9CA3AF', marginBottom: '28px', maxWidth: '640px', lineHeight: 1.6 }}>
                                        Schedule a 30-minute confidential discussion with our partners. We will audit your current search footprint and scope a sovereign reputation architecture tailored for your role.
                                    </p>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <Link href="/contact" className="prominence-btn-primary">
                                            <span>Book a Private Consultation</span>
                                            <span>&rarr;</span>
                                        </Link>
                                        <Link href="/resources/assessment" className="btn btn-outline-light rounded-pill px-4 py-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                                            Take 3-Min Assessment
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
