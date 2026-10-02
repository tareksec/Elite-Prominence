import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
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
        <div className="mlab-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ModernHeader activeNav="case-studies" />

            {/* Breadcrumb Navigation */}
            <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(18,19,22,0.08)", background: "#FAF9F5", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#8A8F9E" }}>
                        <Link href="/" style={{ color: "#8A8F9E", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <Link href="/case-studies" style={{ color: "#8A8F9E", textDecoration: "none" }}>Case Studies</Link>
                        <span>/</span>
                        <span style={{ color: "#121316", fontWeight: 600 }}>{cs.shortTitle || cs.title}</span>
                    </div>
                </div>
            </div>

            <main>
                {/* Hero Header */}
                <section style={{ padding: '72px 0 60px', background: '#FAF9F5', borderBottom: '1px solid rgba(18,19,22,0.08)' }}>
                    <div className="container">
                        <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
                                <span className="editorial-badge">
                                    <span className="editorial-badge-dot">✦</span> {cs.type}
                                </span>
                                <span style={{ fontSize: '13px', color: '#555A68', fontWeight: '600', background: 'rgba(18,19,22,0.04)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(18,19,22,0.08)' }}>
                                    {cs.clientRole} • {cs.clientIndustry}
                                </span>
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(32px, 5vw, 52px)',
                                fontWeight: 850,
                                color: '#121316',
                                lineHeight: '1.15',
                                letterSpacing: '-0.03em',
                                marginBottom: '20px'
                            }}>
                                {cs.title}
                            </h1>
                            <p style={{ fontSize: '18px', fontWeight: '500', color: '#555A68', lineHeight: '1.6', maxWidth: '780px', margin: '0 auto 32px' }}>
                                {cs.tagline}
                            </p>

                            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="prominence-btn-primary">
                                    <span>Book a Private Consultation</span>
                                    <span>&rarr;</span>
                                </Link>
                                <Link href="/case-studies" className="prominence-btn-outline">
                                    <span>All Case Studies</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metrics Bar */}
                <section style={{ padding: '48px 0', background: '#121316', color: '#FFFFFF', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="container">
                        <div className="row text-center g-4 justify-content-center">
                            {cs.metrics.map((m, idx) => (
                                <div key={idx} className="col-lg-3 col-6">
                                    <div style={{
                                        fontSize: 'clamp(32px, 4.5vw, 46px)',
                                        fontWeight: 900,
                                        color: '#FF3B81',
                                        letterSpacing: '-0.03em',
                                        lineHeight: 1.1,
                                        marginBottom: '6px'
                                    }}>
                                        {m.value}
                                    </div>
                                    <div style={{
                                        fontSize: '12px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        color: 'rgba(255,255,255,0.65)',
                                        fontWeight: 600
                                    }}>
                                        {m.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Narrative Breakdown: Challenge → Strategy → Execution → Results */}
                <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                
                                {/* 01. The Challenge */}
                                <div style={{ marginBottom: '64px' }}>
                                    <span className="editorial-badge" style={{ marginBottom: '14px' }}>
                                        <span className="editorial-badge-dot">✦</span> PHASE 01 • THE INITIAL CHALLENGE
                                    </span>
                                    <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800, color: '#121316', letterSpacing: '-0.02em', marginBottom: '16px' }}>
                                        {cs.challenge.headline}
                                    </h2>
                                    <p style={{ fontSize: '16.5px', color: '#555A68', lineHeight: '1.75', marginBottom: '24px' }}>
                                        {cs.challenge.summary}
                                    </p>
                                    <div style={{
                                        background: '#FAF9F5',
                                        borderRadius: '20px',
                                        border: '1.5px solid rgba(18,19,22,0.08)',
                                        padding: '28px 32px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                                    }}>
                                        <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#121316', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
                                            Reputational Vulnerabilities Identified
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {cs.challenge.points.map((pt, i) => (
                                                 <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '15px', color: '#555A68', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#FF3B81', fontWeight: 800, fontSize: '16px', lineHeight: '20px' }}>&times;</span>
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 02. The Strategy */}
                                <div style={{ marginBottom: '64px' }}>
                                    <span className="editorial-badge" style={{ marginBottom: '14px' }}>
                                        <span className="editorial-badge-dot">✦</span> PHASE 02 • STRATEGIC FORMULATION
                                    </span>
                                    <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800, color: '#121316', letterSpacing: '-0.02em', marginBottom: '16px' }}>
                                        {cs.strategy.headline}
                                    </h2>
                                    <p style={{ fontSize: '16.5px', color: '#555A68', lineHeight: '1.75', marginBottom: '28px' }}>
                                        {cs.strategy.summary}
                                    </p>
                                    <div className="row g-4">
                                        {cs.strategy.pillars.map((pillar, i) => (
                                            <div key={i} className="col-md-4">
                                                <div style={{
                                                    background: '#FFFFFF',
                                                    borderRadius: '20px',
                                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                                    padding: '28px 24px',
                                                    height: '100%',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                                                }}>
                                                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FAF9F5', border: '1px solid rgba(18,19,22,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, color: '#FF3B81', marginBottom: '16px' }}>
                                                        0{i + 1}
                                                    </div>
                                                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#121316', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                                                        {pillar.name}
                                                    </h3>
                                                    <p style={{ fontSize: '14px', color: '#555A68', lineHeight: '1.65', margin: 0 }}>
                                                        {pillar.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 03. The Execution Protocol */}
                                <div style={{ marginBottom: '64px' }}>
                                    <span className="editorial-badge" style={{ marginBottom: '14px' }}>
                                        <span className="editorial-badge-dot">✦</span> PHASE 03 • EXECUTION PROTOCOL
                                    </span>
                                    <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800, color: '#121316', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                                        {cs.execution.headline}
                                    </h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        {cs.execution.timeline.map((step, i) => (
                                            <div key={i} style={{
                                                background: '#FAF9F5',
                                                borderRadius: '20px',
                                                border: '1.5px solid rgba(18,19,22,0.08)',
                                                padding: '24px 28px',
                                                display: 'flex',
                                                gap: '20px',
                                                alignItems: 'flex-start',
                                                flexWrap: 'wrap'
                                            }}>
                                                <div style={{ minWidth: '120px' }}>
                                                    <span className="editorial-badge" style={{ fontSize: '11px', padding: '4px 10px' }}>
                                                        {step.phase}
                                                    </span>
                                                </div>
                                                <div style={{ flex: 1, minWidth: '260px' }}>
                                                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#121316', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                                                        {step.title}
                                                    </h3>
                                                    <p style={{ color: '#555A68', fontSize: '14.5px', lineHeight: '1.65', margin: 0 }}>
                                                        {step.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 04. Measurable Results */}
                                <div style={{ marginBottom: '64px' }}>
                                    <span className="editorial-badge" style={{ marginBottom: '14px' }}>
                                        <span className="editorial-badge-dot">✦</span> PHASE 04 • MEASURABLE OUTCOMES
                                    </span>
                                    <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800, color: '#121316', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                                        {cs.results.headline}
                                    </h2>
                                    <div style={{
                                        background: '#FFFFFF',
                                        borderRadius: '24px',
                                        border: '1.5px solid rgba(18,19,22,0.08)',
                                        padding: '32px 36px',
                                        boxShadow: '0 4px 24px rgba(0,0,0,0.04)'
                                    }}>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            {cs.results.points.map((res, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '14px', fontSize: '15.5px', color: '#121316', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#FF3B81', fontWeight: 800, fontSize: '18px', lineHeight: '22px' }}>✦</span>
                                                    <span style={{ lineHeight: '1.6' }}>{res}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 05. Client Perspective */}
                                {cs.clientPerspective && (
                                    <div style={{
                                        background: '#121316',
                                        color: '#FFFFFF',
                                        borderRadius: '24px',
                                        padding: '44px 48px',
                                        marginBottom: '40px',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        boxShadow: '0 12px 36px rgba(0,0,0,0.15)'
                                    }}>
                                        <span className="editorial-badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.15)', marginBottom: '20px' }}>
                                            <span className="editorial-badge-dot" style={{ background: '#FF3B81' }}>✦</span> VERIFIED CLIENT TESTIMONY
                                        </span>
                                        <p style={{ fontSize: '19px', fontStyle: 'italic', lineHeight: '1.75', color: '#F8FAFC', marginBottom: '24px' }}>
                                            &ldquo;{cs.clientPerspective.quote}&rdquo;
                                        </p>
                                        <div>
                                            <p style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                                                {cs.clientPerspective.author}
                                            </p>
                                            <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
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
                    <section style={{ padding: '80px 0', background: '#FAF9F5', borderTop: '1px solid rgba(18,19,22,0.08)' }}>
                        <div className="container">
                            <div className="text-center" style={{ marginBottom: '48px' }}>
                                <span className="editorial-badge" style={{ marginBottom: '12px' }}>
                                    <span className="editorial-badge-dot">✦</span> RELATED OUTCOMES
                                </span>
                                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 850, color: '#121316', letterSpacing: '-0.02em' }}>
                                    Additional Executive Proof Briefings
                                </h2>
                            </div>
                            <div className="row justify-content-center g-4">
                                {otherCaseStudies.map((oth) => (
                                    <div key={oth.slug} className="col-lg-6">
                                        <div style={{
                                            background: '#FFFFFF',
                                            borderRadius: '24px',
                                            border: '1.5px solid rgba(18,19,22,0.08)',
                                            padding: '32px',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                                        }}>
                                            <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                                                {oth.type}
                                            </span>
                                            <h3 style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '10px' }}>
                                                <Link href={`/case-studies/${oth.slug}`} style={{ color: '#121316', textDecoration: 'none' }}>
                                                    {oth.shortTitle}
                                                </Link>
                                            </h3>
                                            <p style={{ fontSize: '14.5px', color: '#555A68', lineHeight: '1.65', flex: 1, marginBottom: '20px' }}>
                                                {oth.tagline}
                                            </p>
                                            <Link href={`/case-studies/${oth.slug}`} className="prominence-btn-outline" style={{ alignSelf: 'flex-start' }}>
                                                <span>Read Breakdown &rarr;</span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Final Consultation CTA */}
                <section style={{ padding: '96px 0', background: '#121316', color: '#FFFFFF', textAlign: 'center' }}>
                    <div className="container">
                        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                            <span className="editorial-badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.15)', marginBottom: '20px' }}>
                                <span className="editorial-badge-dot" style={{ background: '#FF3B81' }}>✦</span> CONFIDENTIAL ENGAGEMENT
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(28px, 4vw, 42px)',
                                fontWeight: 850,
                                color: '#FFFFFF',
                                letterSpacing: '-0.03em',
                                marginBottom: '18px',
                                lineHeight: '1.2'
                            }}>
                                Build Your Sovereign Stature
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', lineHeight: '1.7', marginBottom: '36px' }}>
                                Connect directly with our managing partners for a 30-minute private consultation.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="prominence-btn-primary">
                                    <span>Book a Private Consultation</span>
                                    <span>&rarr;</span>
                                </Link>
                                <Link href="/how-it-works" className="prominence-btn-outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}>
                                    <span>Review Methodology</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <ModernFooter />
        </div>
    )
}
