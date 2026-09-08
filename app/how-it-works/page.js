import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Testimonial from '@/components/sections/home3/Testimonial'

export const metadata = {
    title: 'How It Works | Executive Reputation Methodology | Prominence',
    description: 'The 6-stage Prominence methodology for building sovereign executive presence: Discover, Position, Build, Publish, Amplify, and Measure.',
    alternates: {
        canonical: '/how-it-works',
    },
    openGraph: {
        title: 'How It Works — The Prominence Executive Reputation Methodology',
        description: 'A 6-stage strategic protocol engineered for complete discretion, corporate PR compliance, and under 30 minutes of executive time per month.',
        url: 'https://www.prominence.agency/how-it-works',
        siteName: 'Prominence.agency',
        locale: 'en_US',
        type: 'website',
    },
}

const howItWorksSchema = {
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
                    name: 'How It Works',
                    item: 'https://www.prominence.agency/how-it-works',
                },
            ],
        },
        {
            '@type': 'HowTo',
            name: 'The Prominence Executive Reputation Architecture Protocol',
            description: 'A 6-stage turnkey methodology for establishing sovereign digital presence and search authority for C-suite leaders.',
            step: [
                {
                    '@type': 'HowToStep',
                    position: 1,
                    name: 'Discover',
                    text: 'Comprehensive search audit, digital asset inventory, and 45-minute narrative extraction interview.',
                },
                {
                    '@type': 'HowToStep',
                    position: 2,
                    name: 'Position',
                    text: 'Formulating your leadership thesis, boardroom credentials, and strict corporate compliance guardrails.',
                },
                {
                    '@type': 'HowToStep',
                    position: 3,
                    name: 'Build',
                    text: 'Engineering your custom Executive Digital HQ and structured JSON-LD Google Knowledge Graph schema.',
                },
                {
                    '@type': 'HowToStep',
                    position: 4,
                    name: 'Publish',
                    text: 'Discreet, high-caliber executive ghostwriting authored by veteran business journalists in your authentic voice.',
                },
                {
                    '@type': 'HowToStep',
                    position: 5,
                    name: 'Amplify',
                    text: 'Securing tier-one podcast interviews, keynote stage pitches, and syndicated industry quotations.',
                },
                {
                    '@type': 'HowToStep',
                    position: 6,
                    name: 'Measure',
                    text: 'Continuous Google Page 1 monitoring, inbound opportunity tracking, and ongoing narrative governance.',
                },
            ],
        },
    ],
}

export default function HowItWorksPage() {
    const stages = [
        {
            number: '01',
            name: 'Discover',
            tagline: 'Deep Reputation Audit & Narrative Extraction',
            duration: 'Weeks 1–2',
            clientTime: '45 Minutes Total',
            overview: 'Before authoring positioning copy or configuring technical infrastructure, we conduct a forensic audit across Google search surfaces, proprietary executive databases, news archives, and professional networks.',
            deliverables: [
                'Forensic audit of your Google Page 1 results, namesake conflicts, and search sentiment',
                'Comprehensive inventory of existing corporate bios, interview archives, and conference recordings',
                'One 45-minute structured narrative extraction session with a senior communications partner',
                'Reputational gap analysis benchmarked against peer industry leaders and board candidates'
            ]
        },
        {
            number: '02',
            name: 'Position',
            tagline: 'Strategic Governance Thesis & Editorial Guardrails',
            duration: 'Weeks 2–3',
            clientTime: '15 Minutes Review',
            overview: 'We crystallize your leadership thesis into an authoritative executive narrative. We establish clear boundaries with your corporate PR and legal teams to guarantee 100% compliance with non-disclosure and disclosure standards.',
            deliverables: [
                'Calibrated Executive Positioning Document articulating your core leadership pillars',
                'Boardroom-ready executive biography, committee candidate profile, and media summary',
                'Corporate compliance protocol aligning public commentary with employer communications policies',
                'Cadence and lexicon analysis guide ensuring all written materials replicate your authentic speaking style'
            ]
        },
        {
            number: '03',
            name: 'Build',
            tagline: 'Sovereign Digital HQ & Entity Graph Engineering',
            duration: 'Weeks 3–6',
            clientTime: '15 Minutes Approval',
            overview: 'We design and engineer your owned personal digital headquarters on Next.js, deploy structured JSON-LD entity markup for Google Knowledge Graph recognition, and secure sovereign domain ownership.',
            deliverables: [
                'Bespoke executive personal website built on modern Next.js architecture with 95+ Core Web Vitals',
                'Custom executive domain acquisition, SSL configuration, and enterprise-grade DNS hosting',
                'Interactive career milestone portfolio, major transaction vignettes, and board dossier',
                'Structured JSON-LD schema deployment for Google Search Console indexing and Knowledge Panel linkage'
            ]
        },
        {
            number: '04',
            name: 'Publish',
            tagline: 'Calibrated Ghostwriting & Executive Stature Content',
            duration: 'Ongoing Monthly',
            clientTime: '20 Minutes / Month',
            overview: 'Senior journalists author substantial, provocative, and data-backed essays that demonstrate your macro business acumen. No generic platitudes, no junior social media gimmicks.',
            deliverables: [
                '2 to 4 high-signal strategic essays per month published directly to LinkedIn and your owned Digital HQ',
                'Monthly 20-minute voice-memo briefing or interview to harvest your real-time perspectives',
                'Complete editorial management, comment moderation guidance, and network engagement protocols',
                'Visual asset creation: custom typography graphics, charts, and executive quote cards'
            ]
        },
        {
            number: '05',
            name: 'Amplify',
            tagline: 'Keynote Stages, Tier-One Podcasts & Media Quotations',
            duration: 'Months 2+',
            clientTime: 'Zero Admin Time',
            overview: 'We take your proven ideas beyond your primary audience. We pitch event curators, conference chairs, and high-signal podcast producers to position you on reputable stages.',
            deliverables: [
                'Comprehensive Executive Speaker Kit: keynote abstracts, high-res photography, and technical rider',
                'Proactive pitching to top 2% business, industry, and leadership podcast shows',
                'Keynote submission pitching for reputable global summits and industry panels',
                'Post-appearance asset repurposing: high-definition video clips, transcripts, and press syndication'
            ]
        },
        {
            number: '06',
            name: 'Measure',
            tagline: 'Search Dominance, Due Diligence Protection & ROI Tracking',
            duration: 'Quarterly Reviews',
            clientTime: '10 Minutes Review',
            overview: 'Reputation is not an abstract concept—it produces measurable commercial outcomes. We monitor search ranking resilience, track inbound corporate recruiter inquiries, and evaluate board interest.',
            deliverables: [
                'Quarterly Search Resilience Report tracking Google Page 1 ownership for your exact name',
                'Inbound opportunity attribution tracking: board reach-outs, consulting leads, speaking inquiries',
                'Google Knowledge Panel verification and ongoing entity monitoring',
                'Annual narrative refresh aligning your digital assets with newly achieved enterprise milestones'
            ]
        }
    ]

    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howItWorksSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="The Prominence Methodology">
                
                {/* Hero Header */}
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '860px', margin: '0 auto' }}>
                            <div className="tag_text">
                                <h6>The 6-Stage Methodology</h6>
                            </div>
                            <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0f172a', lineHeight: '1.25', marginBottom: '20px' }}>
                                The Sovereign Stature Architecture Protocol
                            </h1>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.7', margin: '0 auto' }}>
                                Establishing a commanding executive presence demands strategic rigor, journalistic precision, and absolute discretion. Our 6-stage protocol delivers turnkey execution requiring under 30 minutes of executive time each month.
                            </p>
                            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn_style_one">
                                    Schedule a Confidential Briefing
                                </Link>
                                <Link href="/case-studies" className="btn_style_two">
                                    Review Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6 Stages Deep Dive */}
                <section className="pt_100 pb_90" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                            {stages.map((stage) => (
                                <div key={stage.number} className="prominence_card" style={{ padding: '44px 48px' }}>
                                    <div className="row align-items-start">
                                        <div className="col-lg-4 mb_30 mb-lg-0">
                                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
                                                <span className="prominence_step_num">
                                                    {stage.number}
                                                </span>
                                                <span style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                    Stage {stage.number} of 06
                                                </span>
                                            </div>
                                            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                                                {stage.name}
                                            </h2>
                                            <p style={{ fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '24px' }}>
                                                {stage.tagline}
                                            </p>
                                            
                                            <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '16px 20px', border: '1px solid #e2e8f0' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                                                    <span style={{ color: '#64748b' }}>Execution Horizon:</span>
                                                    <strong style={{ color: '#0f172a' }}>{stage.duration}</strong>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                                                    <span style={{ color: '#64748b' }}>Client Time:</span>
                                                    <strong style={{ color: '#0f172a' }}>{stage.clientTime}</strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-8">
                                            <div style={{ paddingLeft: '20px' }}>
                                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                                                    {stage.overview}
                                                </p>

                                                <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                                                    Tangible Stage Deliverables
                                                </h3>

                                                <div className="row">
                                                    {stage.deliverables.map((del, i) => (
                                                        <div key={i} className="col-md-6 mb_16">
                                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                                                <span style={{ color: '#0f172a', fontSize: '12px', marginTop: '3px' }}>
                                                                    <i className="fal fa-check-circle" style={{ color: '#0f172a' }}></i>
                                                                </span>
                                                                <span style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6' }}>{del}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Confidentiality, PR & Legal Governance */}
                <section className="pt_90 pb_90" style={{ background: '#0a0f1d', color: '#fff' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '760px', margin: '0 auto 60px' }}>
                            <div className="tag_text">
                                <h6 style={{ color: '#94a3b8' }}>Institutional Trust</h6>
                            </div>
                            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginTop: '12px' }}>
                                Enterprise Confidentiality & PR Governance
                            </h2>
                            <p style={{ color: '#94a3b8', fontSize: '16px', marginTop: '12px', lineHeight: '1.7' }}>
                                We work with executives managing sensitive public company disclosures, imminent transactions, and complex governance environments. Our security standards are non-negotiable.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb_30">
                                <div className="prominence_card_dark">
                                    <div style={{ fontSize: '22px', color: '#fff', marginBottom: '20px' }}>
                                        <i className="fal fa-file-contract"></i>
                                    </div>
                                    <h3 style={{ fontSize: '19px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                                        Strict Non-Disclosure
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                                        All team members sign comprehensive NDAs. We never disclose client identities, private advisory notes, or confidential strategy documents without express written consent.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb_30">
                                <div className="prominence_card_dark">
                                    <div style={{ fontSize: '22px', color: '#fff', marginBottom: '20px' }}>
                                        <i className="fal fa-balance-scale"></i>
                                    </div>
                                    <h3 style={{ fontSize: '19px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                                        Corporate PR Alignment
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                                        We establish clear topic guardrails that complement employer PR policies. We never publish speculative operational forecasts, insider disclosures, or sensitive corporate data.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb_30">
                                <div className="prominence_card_dark">
                                    <div style={{ fontSize: '22px', color: '#fff', marginBottom: '20px' }}>
                                        <i className="fal fa-shield-alt"></i>
                                    </div>
                                    <h3 style={{ fontSize: '19px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                                        Sovereign Ownership
                                    </h3>
                                    <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                                        You own 100% of the domains, content, code, and digital assets we build. Nothing is leased, locked in proprietary platforms, or dependent on our ongoing involvement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Consultation CTA */}
                <section className="pt_90 pb_90" style={{ background: '#fff', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <div className="container">
                        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                            <div className="tag_text" style={{ marginBottom: '14px' }}>
                                <h6>Initiate Engagement</h6>
                            </div>
                            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
                                Put the Prominence Protocol to Work for Your Career
                            </h2>
                            <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px' }}>
                                Connect directly with our managing partners for a 30-minute private consultation. We will analyze your public search posture and explain how Stage 01 will proceed.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn_style_one">
                                    Book a Private Consultation
                                </Link>
                                <Link href="/pricing" className="btn_style_two">
                                    View Engagement Tiers
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <Testimonial/>

            </Layout>
        </div>
    )
}
