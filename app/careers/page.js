'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

const MANDATES = [
    {
        id: 'executive-ghostwriter',
        mandate: 'Mandate Ref. EP-GHOST-01',
        title: 'Executive Ghostwriter & Senior Editorial Strategist',
        practice: 'Editorial Architecture & Thought Leadership',
        arrangement: 'Retained Advisory / Full-Time',
        compensation: 'Top 1% Global Retainer + Advisory Bonuses',
        location: 'Remote (London / NY / Zurich / Global)',
        mission: 'Extract, architect, and author high-signal thought leadership essays for Fortune 500 CEOs, CHROs, and enterprise founders. Must command the nuanced language of governance, talent strategy, and commercial transformation.',
        imperatives: [
            'Conduct 30-minute monthly forensic narrative extraction interviews with C-suite clients',
            'Author publish-ready essays, op-eds, and keynote outlines matching individual executive voices',
            'Enforce rigorous journalistic standards with zero synthetic or AI-generated filler',
            'Coordinate with legal/PR teams to ensure absolute compliance with corporate communication disclosures'
        ],
        idealProfile: 'Former senior business journalist (FT, WSJ, Bloomberg) or C-suite executive communications counsel with 6+ years advising enterprise leadership.'
    },
    {
        id: 'search-reputation-engineer',
        mandate: 'Mandate Ref. EP-SEARCH-02',
        title: 'Search Reputation & Entity Knowledge Graph Architect',
        practice: 'Technical Reputation & Search Governance',
        arrangement: 'Full-Time Practice Appointment',
        compensation: 'Senior Engineering Retainer + Entity Equity Incentives',
        location: 'Remote (Global)',
        mission: 'Engineer permanent Google Page 1 stature for globally recognized executive names. Establish immutable Knowledge Graph authority, resolve namesake collision ambiguities, and structure semantic JSON-LD entity graphs.',
        imperatives: [
            'Architect and deploy comprehensive schema.org Person and Organization entity structures',
            'Claim, reconcile, and monitor Google Knowledge Panels for top-tier executives',
            'Develop defensive search buffers through strategic syndication and owned digital assets',
            'Analyze organic search engine result pages (SERPs) across global jurisdictions continuously'
        ],
        idealProfile: 'Deep technical SEO & entity engineer with proven track record in executive reputation defense, semantic Web standards, and Knowledge Graph validation.'
    },
    {
        id: 'executive-frontend-designer',
        mandate: 'Mandate Ref. EP-DESIGN-03',
        title: 'Senior Executive UI/UX & Next.js Design Engineer',
        practice: 'Sovereign Digital HQ Engineering',
        arrangement: 'Full-Time Practice Appointment',
        compensation: 'Senior Staff Engineering Package',
        location: 'Remote (Global)',
        mission: 'Design and build bespoke Next.js Executive Digital HQs that reflect boardroom gravitas. Balance architectural elegance, subtle micro-interactions, and 98+ Core Web Vitals performance benchmarks.',
        imperatives: [
            'Translate high-level executive personas into museum-grade, bespoke web properties',
            'Implement semantic, accessible, and responsive components using Next.js App Router and Vanilla CSS',
            'Eliminate all generic startup and SaaS visual tropes in favor of dignified editorial typography',
            'Ensure sub-second load times, hardened security, and zero tracking scripts'
        ],
        idealProfile: 'Craftsman design technologist with an extensive portfolio of high-end editorial, luxury, or financial institution web architecture.'
    },
    {
        id: 'client-advisory-partner',
        mandate: 'Mandate Ref. EP-ADVISORY-04',
        title: 'Executive Advisory Partner (Client Governance)',
        practice: 'Client Advisory & Engagement Leadership',
        arrangement: 'Senior Leadership Appointment',
        compensation: 'Base Executive Retainer + Client Portfolio Share',
        location: 'Remote (US/UK/EU Working Hours)',
        mission: 'Act as the strategic counsel and direct liaison to our CEO and CHRO clients. Guide narrative evolution, coordinate cross-functional delivery, and ensure an effortless executive client experience requiring under 30 minutes monthly.',
        imperatives: [
            'Lead client onboarding, executive intake interviews, and annual narrative strategic reviews',
            'Translate client commercial milestones into tactical briefs for our editorial and search teams',
            'Uphold unwavering confidentiality and institutional discretion at all touchpoints',
            'Expand executive client opportunities into board appointments and high-tier speaking engagements'
        ],
        idealProfile: 'Former management consultant (McKinsey, Bain, BCG), executive search partner (Egon Zehnder, Spencer Stuart, Korn Ferry), or senior corporate affairs director.'
    }
]

export default function CareersPage() {
    const [selectedRole, setSelectedRole] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const [note, setNote] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Advisory Appointments & Mandates">
                
                {/* Hero Section: Charter Narrative */}
                <section className="prominence_page_intro" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #eaedf0', fontFamily: 'var(--primary-font)' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '880px', margin: '0 auto' }}>
                            <div className="tag_text" style={{ marginBottom: '14px' }}>
                                <h6 style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '6px 16px',
                                    background: '#f1f5f9',
                                    borderRadius: '30px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: '#0f1013',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.8px',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#b89058' }}></span>
                                    Practice Charter &amp; Mandates
                                </h6>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(28px, 5vw, 46px)',
                                fontWeight: '700',
                                color: '#0f1013',
                                lineHeight: '1.2',
                                letterSpacing: '-0.5px',
                                marginBottom: '22px',
                                fontFamily: "var(--ep-font-serif, 'PT Serif', serif)"
                            }}>
                                Counsel the Leaders Who Shape Global Industry
                            </h1>
                            <p style={{ fontSize: '18px', color: '#59606a', lineHeight: '1.7', margin: '0 auto 34px', maxWidth: '740px' }}>
                                Prominence is not a marketing agency. We are a specialized executive advisory firm entrusted by CEOs, CHROs, and institutional leaders to architect their sovereign digital stature, defend their search footprint, and articulate their thought leadership.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="#open-mandates" className="btn_style_one">
                                    Review Open Mandates <i className="fa-solid fa-arrow-down"></i>
                                </a>
                                <a href="#apply-dossier" className="btn_style_two">
                                    Submit Direct Dossier
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operating Principles: Asymmetrical Editorial Manifesto */}
                <section className="pt_100 pb_90" style={{ background: '#fafbfc', borderBottom: '1px solid #eaedf0', fontFamily: 'var(--primary-font)' }}>
                    <div className="container">
                        <div className="row align-items-end" style={{ marginBottom: '50px' }}>
                            <div className="col-lg-7">
                                <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#b89058', display: 'block', marginBottom: '8px' }}>
                                    Our Professional Creed
                                </span>
                                <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0f1013', margin: 0, letterSpacing: '-0.5px', lineHeight: '1.25' }}>
                                    The Three Tenets of the Prominence Practice
                                </h2>
                            </div>
                            <div className="col-lg-5 mt-3 mt-lg-0">
                                <p style={{ fontSize: '15.5px', color: '#59606a', lineHeight: '1.65', margin: 0 }}>
                                    We maintain an uncompromising standard of intellectual rigor. We work with a small, elite cohort of specialists who prize quality over volume and discretion over self-promotion.
                                </p>
                            </div>
                        </div>

                        {/* Asymmetrical Editorial Grid */}
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-12">
                                <div style={{
                                    background: '#ffffff',
                                    border: '1px solid #eaedf0',
                                    borderRadius: '14px',
                                    padding: '40px 32px',
                                    height: '100%',
                                    boxShadow: '0 4px 18px rgba(15, 16, 19, 0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#b89058', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
                                            Tenet I
                                        </div>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1013', marginBottom: '16px' }}>
                                            Journalistic Rigor &amp; Commercial Truth
                                        </h3>
                                        <p style={{ color: '#59606a', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                            We reject synthetic social noise and generic algorithmic platitudes. Every essay and commentary we craft is grounded in genuine operational truth, balance sheet reality, and boardroom gravity.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid #f1f5f9', fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>
                                        Zero AI Platitudes &bull; Nuanced Executive Tone
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div style={{
                                    background: '#ffffff',
                                    border: '1px solid #eaedf0',
                                    borderRadius: '14px',
                                    padding: '40px 32px',
                                    height: '100%',
                                    boxShadow: '0 4px 18px rgba(15, 16, 19, 0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#b89058', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
                                            Tenet II
                                        </div>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1013', marginBottom: '16px' }}>
                                            Inviolable Discretion &amp; Governance
                                        </h3>
                                        <p style={{ color: '#59606a', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                            Our clients govern publicly traded enterprises, sovereign funds, and market-shaping startups. Absolute confidentiality and institutional security are non-negotiable foundations of our firm.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid #f1f5f9', fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>
                                        Strict Legal Non-Disclosure &bull; Zero Leakage
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div style={{
                                    background: '#ffffff',
                                    border: '1px solid #eaedf0',
                                    borderRadius: '14px',
                                    padding: '40px 32px',
                                    height: '100%',
                                    boxShadow: '0 4px 18px rgba(15, 16, 19, 0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#b89058', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
                                            Tenet III
                                        </div>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1013', marginBottom: '16px' }}>
                                            Intellectual Autonomy &amp; Deep Space
                                        </h3>
                                        <p style={{ color: '#59606a', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                            We operate globally and asynchronously. We do not track keystrokes or enforce arbitrary office hours. We measure talent exclusively by craftsmanship, strategic acumen, and client impact.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid #f1f5f9', fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>
                                        Asynchronous Focus &bull; Deep Mastery
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Appointment Protocol: Visual 4-Stage Roadmap */}
                <section className="pt_100 pb_90" style={{ background: '#0f1013', color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', fontFamily: 'var(--primary-font)' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '780px', margin: '0 auto 55px' }}>
                            <div className="tag_text" style={{ marginBottom: '12px' }}>
                                <h6 style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '6px 16px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '30px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.8px',
                                    border: '1px solid rgba(255, 255, 255, 0.15)'
                                }}>
                                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#b89058' }}></span>
                                    Vetting &amp; Induction Protocol
                                </h6>
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(26px, 4vw, 36px)',
                                fontWeight: '700',
                                color: '#ffffff',
                                letterSpacing: '-0.5px',
                                fontFamily: "var(--ep-font-serif, 'PT Serif', serif)"
                            }}>
                                The 4-Stage Evaluation Architecture
                            </h2>
                            <p style={{ color: '#94a3b8', fontSize: '16px', marginTop: '12px', lineHeight: '1.7' }}>
                                We evaluate every candidate with the same meticulous rigor we apply to executive client reputations.
                            </p>
                        </div>

                        <div className="row g-4">
                            {[
                                {
                                    stage: '01',
                                    title: 'Portfolio & Artifact Audit',
                                    desc: 'Deep forensic examination of verified published journalism, code repositories, or executive advisory deliverables. Zero resume fluff.'
                                },
                                {
                                    stage: '02',
                                    title: 'Compensated Simulation',
                                    desc: 'A paid, real-world case study: extract a boardroom narrative or diagnose a complex multi-jurisdiction namesake collision.'
                                },
                                {
                                    stage: '03',
                                    title: 'Founding Partner Interview',
                                    desc: 'An in-depth strategic dialogue assessing editorial taste, governance awareness, and intellectual alignment with the practice.'
                                },
                                {
                                    stage: '04',
                                    title: 'Retained Induction',
                                    desc: 'Execution of institutional non-disclosure agreements, security clearances, and client assignment matching.'
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="col-lg-3 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '14px',
                                        padding: '32px 24px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative'
                                    }}>
                                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#b89058', marginBottom: '16px' }}>
                                            {item.stage}
                                        </div>
                                        <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
                                            {item.title}
                                        </h4>
                                        <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: '1.65', margin: 0 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Mandates: Editorial Role Dossiers */}
                <section id="open-mandates" className="pt_100 pb_90" style={{ background: '#f8fafc', borderBottom: '1px solid #eaedf0', fontFamily: 'var(--primary-font)' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '780px', margin: '0 auto 50px' }}>
                            <div className="tag_text" style={{ marginBottom: '12px' }}>
                                <h6 style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '6px 16px',
                                    background: '#ffffff',
                                    borderRadius: '30px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: '#0f1013',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.8px',
                                    border: '1px solid #eaedf0'
                                }}>
                                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#b89058' }}></span>
                                    Active Retained Searches
                                </h6>
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(26px, 4.5vw, 38px)',
                                fontWeight: '700',
                                color: '#0f1013',
                                letterSpacing: '-0.5px',
                                fontFamily: "var(--ep-font-serif, 'PT Serif', serif)"
                            }}>
                                Current Practice Mandates
                            </h2>
                            <p style={{ color: '#59606a', fontSize: '16.5px', marginTop: '14px', lineHeight: '1.7' }}>
                                Each mandate represents a key pillar in our executive reputation and thought leadership advisory.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '980px', margin: '0 auto' }}>
                            {MANDATES.map((role) => (
                                <div key={role.id} style={{
                                    background: '#ffffff',
                                    border: '1px solid #eaedf0',
                                    borderRadius: '16px',
                                    padding: 'clamp(24px, 4vw, 38px)',
                                    boxShadow: '0 4px 20px rgba(15, 16, 19, 0.03)'
                                }}>
                                    {/* Dossier Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '18px', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
                                        <div>
                                            <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#b89058', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                {role.mandate} &bull; {role.practice}
                                            </span>
                                            <h3 style={{ fontSize: '23px', fontWeight: '700', color: '#0f1013', marginTop: '6px', marginBottom: 0 }}>
                                                {role.title}
                                            </h3>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span style={{
                                                fontSize: '11.5px',
                                                fontWeight: '700',
                                                color: '#0f1013',
                                                background: '#f1f5f9',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                border: '1px solid #e2e8f0',
                                                display: 'inline-block'
                                            }}>
                                                {role.arrangement}
                                            </span>
                                            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '6px' }}>
                                                <i className="fa-solid fa-location-dot me-1" style={{ color: '#b89058' }}></i> {role.location}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mission Statement */}
                                    <p style={{ color: '#334155', fontSize: '15.5px', lineHeight: '1.7', marginBottom: '22px' }}>
                                        {role.mission}
                                    </p>

                                    {/* Two-Column Mandate Specs */}
                                    <div className="row g-4 mb-4">
                                        <div className="col-md-7">
                                            <h4 style={{ fontSize: '11.5px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                                                Key Imperatives
                                            </h4>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {role.imperatives.map((imp, i) => (
                                                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: '#475569', marginBottom: '9px', lineHeight: '1.5' }}>
                                                        <i className="fa-solid fa-check" style={{ color: '#b89058', marginTop: '4px', fontSize: '11px' }}></i>
                                                        <span>{imp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-md-5">
                                            <div style={{ background: '#f8fafc', padding: '20px 22px', borderRadius: '12px', border: '1px solid #eaedf0', height: '100%' }}>
                                                <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '6px' }}>
                                                    Compensation Terms
                                                </div>
                                                <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#0f1013', marginBottom: '14px' }}>
                                                    {role.compensation}
                                                </div>
                                                <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
                                                    Ideal Background
                                                </div>
                                                <p style={{ fontSize: '12.5px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                                    {role.idealProfile}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #f1f5f9', flexWrap: 'wrap', gap: '12px' }}>
                                        <span style={{ fontSize: '13px', color: '#64748b' }}>
                                            Discreet, direct application reviewed by practice leaders.
                                        </span>
                                        <a 
                                            href="#apply-dossier" 
                                            onClick={() => setSelectedRole(role.title)}
                                            className="btn_style_one btn_sm"
                                        >
                                            Apply for Mandate <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Direct Dossier Submission Form */}
                <section id="apply-dossier" className="pt_100 pb_100" style={{ background: '#ffffff', fontFamily: 'var(--primary-font)' }}>
                    <div className="container">
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <div className="section_title centred" style={{ marginBottom: '40px' }}>
                                <div className="tag_text" style={{ marginBottom: '12px' }}>
                                    <h6 style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '6px 16px',
                                        background: '#f1f5f9',
                                        borderRadius: '30px',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        color: '#0f1013',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.8px',
                                        border: '1px solid #e2e8f0'
                                    }}>
                                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#b89058' }}></span>
                                        Confidential Dossier Transmission
                                    </h6>
                                </div>
                                <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0f1013', letterSpacing: '-0.5px' }}>
                                    Submit Your Credentials
                                </h2>
                                <p style={{ color: '#59606a', fontSize: '16px', marginTop: '10px', lineHeight: '1.6' }}>
                                    Every submission is handled with strict professional discretion. Please provide links to published pieces, codebases, or past advisory portfolios.
                                </p>
                            </div>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} style={{
                                    background: '#fafbfc',
                                    border: '1px solid #eaedf0',
                                    borderRadius: '16px',
                                    padding: '42px 38px',
                                    boxShadow: '0 4px 20px rgba(15, 16, 19, 0.03)'
                                }}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label style={{ fontSize: '13px', fontWeight: '700', color: '#0f1013', marginBottom: '6px', display: 'block' }}>
                                                Mandate of Interest
                                            </label>
                                            <select 
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                required
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #eaedf0', fontSize: '14px', background: '#ffffff', color: '#0f1013', outline: 'none' }}
                                            >
                                                <option value="">Select an open mandate...</option>
                                                {MANDATES.map((r) => (
                                                    <option key={r.id} value={r.title}>{r.title}</option>
                                                ))}
                                                <option value="General Strategic Inquiry">General Strategic Advisory Inquiry / Unlisted Specialization</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '13px', fontWeight: '700', color: '#0f1013', marginBottom: '6px', display: 'block' }}>
                                                Full Legal Name
                                            </label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="e.g. Julian Vance" 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #eaedf0', fontSize: '14px', background: '#ffffff', color: '#0f1013', outline: 'none' }} 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '13px', fontWeight: '700', color: '#0f1013', marginBottom: '6px', display: 'block' }}>
                                                Direct Contact Email
                                            </label>
                                            <input 
                                                type="email" 
                                                required 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="e.g. name@domain.com" 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #eaedf0', fontSize: '14px', background: '#ffffff', color: '#0f1013', outline: 'none' }} 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '13px', fontWeight: '700', color: '#0f1013', marginBottom: '6px', display: 'block' }}>
                                                LinkedIn Profile URL
                                            </label>
                                            <input 
                                                type="url" 
                                                required 
                                                value={linkedin}
                                                onChange={(e) => setLinkedin(e.target.value)}
                                                placeholder="https://linkedin.com/in/username" 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #eaedf0', fontSize: '14px', background: '#ffffff', color: '#0f1013', outline: 'none' }} 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '13px', fontWeight: '700', color: '#0f1013', marginBottom: '6px', display: 'block' }}>
                                                Portfolio / Publication Archive URL
                                            </label>
                                            <input 
                                                type="url" 
                                                value={portfolio}
                                                onChange={(e) => setPortfolio(e.target.value)}
                                                placeholder="https://archive.com or articles portfolio" 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #eaedf0', fontSize: '14px', background: '#ffffff', color: '#0f1013', outline: 'none' }} 
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label style={{ fontSize: '13px', fontWeight: '700', color: '#0f1013', marginBottom: '6px', display: 'block' }}>
                                                Why Prominence? (Executive Rationale)
                                            </label>
                                            <textarea 
                                                rows="4" 
                                                required 
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                                placeholder="Articulate why your editorial rigor or technical depth aligns with high-stakes C-suite representation..." 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #eaedf0', fontSize: '14px', background: '#ffffff', color: '#0f1013', outline: 'none' }}
                                            />
                                        </div>
                                        <div className="col-12 text-center mt-4">
                                            <button type="submit" className="btn_style_one btn_block btn_lg">
                                                Transmit Confidential Application <i className="fa-solid fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div style={{
                                    background: '#ffffff',
                                    border: '1px solid #eaedf0',
                                    borderRadius: '16px',
                                    padding: '50px 40px',
                                    textAlign: 'center',
                                    boxShadow: '0 8px 30px rgba(15, 16, 19, 0.05)'
                                }}>
                                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#faf6f0', border: '1px solid rgba(184, 144, 88, 0.4)', color: '#b89058', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '18px' }}>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1013', marginBottom: '10px' }}>
                                        Dossier Successfully Transmitted
                                    </h3>
                                    <p style={{ color: '#59606a', fontSize: '15.5px', maxWidth: '540px', margin: '0 auto', lineHeight: '1.65' }}>
                                        Thank you, {name}. Your credentials have been transferred directly to our managing advisory partners. If there is mutual alignment with our active mandates, we will schedule a private dialogue.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    )
}
