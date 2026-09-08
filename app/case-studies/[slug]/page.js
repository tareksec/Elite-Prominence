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
                <section className="prominence_page_intro">
                    <div className="container">
                        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                <span className="prominence_badge">
                                    {cs.type}
                                </span>
                                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>
                                    {cs.clientRole} • {cs.clientIndustry}
                                </span>
                            </div>

                            <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#0f172a', lineHeight: '1.25', marginBottom: '16px' }}>
                                {cs.title}
                            </h1>
                            <p style={{ fontSize: '18px', fontWeight: '600', color: '#334155', lineHeight: '1.6', marginBottom: '28px' }}>
                                {cs.tagline}
                            </p>

                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn_style_one">
                                    Book a Private Consultation
                                </Link>
                                <Link href="/case-studies" className="btn_style_two">
                                    All Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metrics Bar */}
                <section className="pt_50 pb_50" style={{ background: '#0a0f1d', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="container">
                        <div className="row text-center">
                            {cs.metrics.map((m, idx) => (
                                <div key={idx} className="col-lg-3 col-6 mb_20 mb-lg-0">
                                    <div className="prominence_stat_val">
                                        {m.value}
                                    </div>
                                    <div className="prominence_stat_label">
                                        {m.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Narrative Breakdown: Challenge → Strategy → Execution → Results */}
                <section className="pt_100 pb_90" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                
                                {/* 01. The Challenge */}
                                <div style={{ marginBottom: '60px' }}>
                                    <span style={{ color: '#475569', fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                                        Phase 01 • The Initial Challenge
                                    </span>
                                    <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
                                        {cs.challenge.headline}
                                    </h2>
                                    <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                        {cs.challenge.summary}
                                    </p>
                                    <div className="prominence_card" style={{ padding: '28px', borderLeft: '4px solid #0f172a' }}>
                                        <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
                                            Reputational Vulnerabilities Identified
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {cs.challenge.points.map((pt, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#475569' }}>
                                                    <i className="fal fa-minus-circle" style={{ color: '#94a3b8', marginTop: '4px', fontSize: '13px' }}></i>
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 02. The Strategy */}
                                <div style={{ marginBottom: '60px' }}>
                                    <span style={{ color: '#475569', fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                                        Phase 02 • Strategic Formulation
                                    </span>
                                    <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
                                        {cs.strategy.headline}
                                    </h2>
                                    <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.8', marginBottom: '28px' }}>
                                        {cs.strategy.summary}
                                    </p>
                                    <div className="row">
                                        {cs.strategy.pillars.map((pillar, i) => (
                                            <div key={i} className="col-md-4 mb_20">
                                                <div className="prominence_card" style={{ padding: '24px', height: '100%' }}>
                                                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>
                                                        {pillar.name}
                                                    </h3>
                                                    <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                                        {pillar.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 03. The Execution Protocol */}
                                <div style={{ marginBottom: '60px' }}>
                                    <span style={{ color: '#475569', fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                                        Phase 03 • Execution Protocol
                                    </span>
                                    <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '24px' }}>
                                        {cs.execution.headline}
                                    </h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        {cs.execution.timeline.map((step, i) => (
                                            <div key={i} className="prominence_card" style={{ padding: '22px 26px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                                                <div style={{ minWidth: '110px' }}>
                                                    <span className="prominence_badge">
                                                        {step.phase}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                                                        {step.title}
                                                    </h3>
                                                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                                                        {step.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 04. Measurable Results */}
                                <div style={{ marginBottom: '60px' }}>
                                    <span style={{ color: '#475569', fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                                        Phase 04 • Measurable Outcomes
                                    </span>
                                    <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>
                                        {cs.results.headline}
                                    </h2>
                                    <div className="prominence_card" style={{ padding: '28px', borderLeft: '4px solid #10b981' }}>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                            {cs.results.points.map((res, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '15px', color: '#1e293b' }}>
                                                    <i className="fal fa-check-circle" style={{ color: '#10b981', marginTop: '3px', fontSize: '14px' }}></i>
                                                    <span>{res}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 05. Client Perspective */}
                                {cs.clientPerspective && (
                                    <div className="prominence_card_dark" style={{ padding: '36px 40px', marginBottom: '40px' }}>
                                        <p style={{ fontSize: '17px', fontStyle: 'italic', lineHeight: '1.8', color: '#f8fafc', marginBottom: '20px' }}>
                                            &ldquo;{cs.clientPerspective.quote}&rdquo;
                                        </p>
                                        <div>
                                            <p style={{ fontSize: '15px', fontWeight: '700', color: '#fff', margin: 0 }}>
                                                {cs.clientPerspective.author}
                                            </p>
                                            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
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
                    <section className="pt_80 pb_80" style={{ background: '#fff', borderTop: '1px solid #e2e8f0' }}>
                        <div className="container">
                            <div className="section_title centred" style={{ marginBottom: '40px' }}>
                                <div className="tag_text">
                                    <h6>Related Outcomes</h6>
                                </div>
                                <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>
                                    Additional Executive Proof Briefings
                                </h2>
                            </div>
                            <div className="row justify-content-center">
                                {otherCaseStudies.map((oth) => (
                                    <div key={oth.slug} className="col-lg-6 mb_20">
                                        <div className="prominence_card" style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                                                {oth.type}
                                            </span>
                                            <h3 style={{ fontSize: '19px', fontWeight: '700', marginBottom: '8px' }}>
                                                <Link href={`/case-studies/${oth.slug}`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                                                    {oth.shortTitle}
                                                </Link>
                                            </h3>
                                            <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.6', flex: 1, marginBottom: '16px' }}>
                                                {oth.tagline}
                                            </p>
                                            <Link href={`/case-studies/${oth.slug}`} style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                Read Breakdown <i className="fal fa-arrow-right" style={{ fontSize: '11px' }}></i>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Final Consultation CTA */}
                <section className="pt_90 pb_90" style={{ background: '#0a0f1d', color: '#fff', textAlign: 'center' }}>
                    <div className="container">
                        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                            <div className="tag_text" style={{ marginBottom: '14px' }}>
                                <h6 style={{ color: '#94a3b8' }}>Confidential Engagement</h6>
                            </div>
                            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
                                Build Your Sovereign Stature
                            </h2>
                            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
                                Connect directly with our managing partners for a 30-minute private consultation.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn_style_one">
                                    Book a Private Consultation
                                </Link>
                                <Link href="/how-it-works" className="btn_style_two">
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
