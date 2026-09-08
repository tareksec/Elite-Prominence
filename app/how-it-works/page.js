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
            overview: 'Before writing a single word or configuring a domain, we conduct a forensic investigation into your current public footprint across Google search, corporate databases, news archives, and professional networks.',
            deliverables: [
                'Forensic audit of your Google Page 1 results, namesake conflicts, and search sentiment',
                'Comprehensive inventory of existing corporate bios, interview archives, and conference recordings',
                'One 45-minute narrative extraction session with a senior executive communications strategist',
                'Reputational gap analysis comparing your public footprint against peer industry leaders'
            ]
        },
        {
            number: '02',
            name: 'Position',
            tagline: 'Strategic Governance Thesis & Editorial Guardrails',
            duration: 'Weeks 2–3',
            clientTime: '15 Minutes Review',
            overview: 'We crystallize your leadership thesis into an unassailable executive narrative. We establish clear boundaries with your corporate PR and legal teams to guarantee 100% compliance with non-disclosure agreements.',
            deliverables: [
                'Calibrated Executive Positioning Document outlining your 3 core thought leadership pillars',
                'Boardroom-ready executive biography, board candidate profile, and media summary',
                'Corporate compliance protocol aligning all public output with employer communications policies',
                'Voice and speech pattern analysis guide ensuring all written materials replicate your authentic cadence'
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
                <section className="pt_120 pb_70" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "860px", margin: "0 auto" }}>
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
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
                                    The 6-Stage Methodology
                                </span>
                            </div>
                            <h1 style={{ fontSize: "44px", fontWeight: "800", color: "#0d1b2a", lineHeight: "1.2", marginBottom: "20px" }}>
                                The Sovereign Stature Architecture Protocol
                            </h1>
                            <p style={{ fontSize: "19px", color: "#475569", lineHeight: "1.7" }}>
                                Building a commanding executive digital presence requires strategic rigor, journalistic precision, and absolute discretion. Our 6-stage protocol is engineered to deliver complete turnkey ownership with less than 30 minutes of your time per month.
                            </p>
                            <div style={{ marginTop: "32px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "14px 32px", fontSize: "15px" }}>
                                    Schedule a Confidential Briefing
                                </Link>
                                <Link href="/case-studies" className="btn_style_two" style={{ padding: "14px 28px", fontSize: "15px", background: "#fff" }}>
                                    View Pilot Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6 Stages Deep Dive */}
                <section className="pt_100 pb_90">
                    <div className="container">
                        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
                            {stages.map((stage, idx) => (
                                <div key={stage.number} style={{ 
                                    background: "#fff", 
                                    border: "1px solid #e2e8f0", 
                                    borderRadius: "16px", 
                                    padding: "48px", 
                                    boxShadow: "0 10px 35px rgba(0,0,0,0.04)" 
                                }}>
                                    <div className="row align-items-start">
                                        <div className="col-lg-4 mb_30 mb-lg-0">
                                            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
                                                <span style={{ fontSize: "48px", fontWeight: "900", color: "#2460e2", lineHeight: "1" }}>
                                                    {stage.number}
                                                </span>
                                                <span style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>
                                                    Stage {stage.number} of 06
                                                </span>
                                            </div>
                                            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0d1b2a", marginBottom: "12px" }}>
                                                {stage.name}
                                            </h2>
                                            <p style={{ fontSize: "15px", fontWeight: "600", color: "#2460e2", marginBottom: "20px" }}>
                                                {stage.tagline}
                                            </p>
                                            
                                            <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "16px", border: "1px solid #eef2f6" }}>
                                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px" }}>
                                                    <span style={{ color: "#64748b" }}>Execution Horizon:</span>
                                                    <strong style={{ color: "#0d1b2a" }}>{stage.duration}</strong>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                                                    <span style={{ color: "#64748b" }}>Client Time Required:</span>
                                                    <strong style={{ color: "#10b981" }}>{stage.clientTime}</strong>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-8">
                                            <div style={{ paddingLeft: "15px" }}>
                                                <p style={{ fontSize: "17px", color: "#334155", lineHeight: "1.8", marginBottom: "28px" }}>
                                                    {stage.overview}
                                                </p>

                                                <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#475569", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
                                                    Tangible Stage Deliverables:
                                                </h3>

                                                <div className="row">
                                                    {stage.deliverables.map((del, i) => (
                                                        <div key={i} className="col-md-6 mb_16">
                                                            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                                                <span style={{ color: "#2460e2", fontWeight: "bold", fontSize: "14px", marginTop: "2px" }}>✓</span>
                                                                <span style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>{del}</span>
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
                <section className="pt_90 pb_90" style={{ background: "#0d1b2a", color: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 60px" }}>
                            <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Institutional Trust
                            </span>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#fff", marginTop: "12px" }}>
                                Enterprise Confidentiality & PR Governance
                            </h2>
                            <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "12px", lineHeight: "1.7" }}>
                                We work with executives managing sensitive public company disclosures, imminent transactions, and complex governance environments. Our standards are non-negotiable.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb_30">
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "32px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#d29d2b", marginBottom: "16px" }}>🔒</div>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                                        Strict Non-Disclosure
                                    </h3>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                                        All team members sign comprehensive NDAs. We never disclose client identities, private advisory notes, or confidential strategy documents without express written consent.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb_30">
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "32px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#38bdf8", marginBottom: "16px" }}>⚖️</div>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                                        Corporate PR Alignment
                                    </h3>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                                        We establish clear topic guardrails that complement employer PR policies. We never publish speculative operational forecasts, insider disclosures, or sensitive corporate data.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb_30">
                                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "32px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#34d399", marginBottom: "16px" }}>🛡️</div>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                                        Sovereign Ownership
                                    </h3>
                                    <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                                        You own 100% of the domains, content, code, and digital assets we build. Nothing is leased, locked in proprietary platforms, or dependent on our ongoing involvement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Consultation CTA */}
                <section className="pt_90 pb_90" style={{ background: "#ecf3ff", borderTop: "1px solid #dbeafe", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
                            <span style={{ color: "#2460e2", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Initiate Engagement
                            </span>
                            <h2 style={{ fontSize: "38px", fontWeight: "800", color: "#0d1b2a", marginTop: "12px", marginBottom: "16px" }}>
                                Put the Prominence Protocol to Work for Your Career
                            </h2>
                            <p style={{ color: "#475569", fontSize: "17px", lineHeight: "1.7", marginBottom: "32px" }}>
                                Connect directly with our managing partners for a 30-minute private consultation. We will analyze your public search posture and explain how Stage 01 will proceed.
                            </p>
                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "16px" }}>
                                    Book a Private Consultation
                                </Link>
                                <Link href="/pricing" className="btn_style_two" style={{ padding: "16px 32px", fontSize: "16px", background: "#fff" }}>
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
