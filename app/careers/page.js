'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

const OPEN_POSITIONS = [
    {
        id: 'executive-ghostwriter',
        title: 'Executive Ghostwriter & Senior Editorial Strategist',
        department: 'Editorial & Narrative',
        location: 'Remote (Global)',
        type: 'Full-Time or Retained Contract',
        description: 'Lead narrative extraction interviews and author high-signal thought leadership essays for Fortune 500 CEOs, CHROs, and enterprise founders. Requires deep business journalism experience and the ability to replicate executive voices with nuance.',
        requirements: [
            '5+ years experience writing for tier-one business publications, executive advisories, or C-suite leaders',
            'Demonstrated ability to translate complex corporate transformations and macro theses into compelling prose',
            'Impeccable editorial judgment with zero reliance on generic generative AI platitudes'
        ]
    },
    {
        id: 'search-reputation-engineer',
        title: 'Search Reputation & Entity Knowledge Graph Engineer',
        department: 'Search & Technical Architecture',
        location: 'Remote (Global)',
        type: 'Full-Time',
        description: 'Architect Page 1 Google search dominance for high-profile executive names. Build structured JSON-LD entity schemas, optimize Google Knowledge Panels, and resolve complex namesake reconciliation challenges.',
        requirements: [
            'Deep expertise in Google Knowledge Graph, entity reconciliation, and executive name search optimization',
            'Proficiency in semantic HTML, structured JSON-LD schemas, and Wikipedia/Wikidata entity guidelines',
            'Experience in managing high-stakes corporate or personal reputation search scenarios'
        ]
    },
    {
        id: 'executive-frontend-designer',
        title: 'Senior Executive UI/UX & Next.js Engineer',
        department: 'Design & Engineering',
        location: 'Remote (Global)',
        type: 'Full-Time',
        description: 'Design and build bespoke Executive Digital HQs that reflect boardroom gravitas. Work with Next.js, modern CSS, micro-interactions, and 95+ Core Web Vitals performance benchmarks.',
        requirements: [
            'Extensive portfolio of minimalist, high-end editorial and executive web applications',
            'Mastery of Next.js App Router, responsive layout architecture, typography, and performance optimization',
            'Strong visual taste: avoiding generic startup templates in favor of bespoke, dignified editorial aesthetics'
        ]
    },
    {
        id: 'client-advisory-partner',
        title: 'Executive Advisory Partner (Client Success)',
        department: 'Client Advisory',
        location: 'Remote (US/UK/EU Hours)',
        type: 'Full-Time',
        description: 'Act as the trusted liaison and strategic counsel to our CEO and CHRO clients. Oversee engagement delivery, ensure strict PR compliance, and lead quarterly narrative reviews.',
        requirements: [
            'Executive presence with experience managing relationships with C-level corporate executives',
            'Background in strategic communications, executive search, or high-tier management consulting',
            'Relentless attention to detail, discretion, and operational excellence'
        ]
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
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Careers at Prominence">
                
                {/* Hero Header */}
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '860px', margin: '0 auto' }}>
                            <div className="tag_text">
                                <h6>Join Our Advisory Practice</h6>
                            </div>
                            <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0f172a', lineHeight: '1.25', marginBottom: '20px' }}>
                                Shape the Sovereign Reputation of Global Leaders
                            </h1>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.7', margin: '0 auto' }}>
                                At Prominence, we advise CEOs, CHROs, enterprise founders, and senior decision-makers. We do not do superficial marketing. We execute high-stakes narrative architecture, sovereign digital engineering, and discreet reputation governance.
                            </p>
                            <div style={{ marginTop: '32px' }}>
                                <a href="#open-roles" className="btn_style_one">
                                    View Open Opportunities
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cultural Pillars */}
                <section className="pt_100 pb_90" style={{ background: '#fff' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '760px', margin: '0 auto 60px' }}>
                            <div className="tag_text">
                                <h6>Operating Philosophy</h6>
                            </div>
                            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', marginTop: '12px' }}>
                                Standards of Intellectual & Professional Rigor
                            </h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb_30">
                                <div className="prominence_card" style={{ padding: '36px', height: '100%' }}>
                                    <div style={{ fontSize: '24px', color: '#0f172a', marginBottom: '18px' }}>
                                        <i className="fal fa-feather-alt"></i>
                                    </div>
                                    <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                                        Journalistic Integrity
                                    </h3>
                                    <p style={{ color: '#64748b', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                                        We reject superficial AI-generated social platitudes. Every piece of thought leadership is grounded in deep commercial reality, intellectual substance, and authentic client perspectives.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb_30">
                                <div className="prominence_card" style={{ padding: '36px', height: '100%' }}>
                                    <div style={{ fontSize: '24px', color: '#0f172a', marginBottom: '18px' }}>
                                        <i className="fal fa-shield-alt"></i>
                                    </div>
                                    <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                                        Absolute Discretion
                                    </h3>
                                    <p style={{ color: '#64748b', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                                        Our clients lead enterprise organizations with high public scrutiny. Confidentiality is not merely a contractual clause—it is the governing ethos of our entire organization.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb_30">
                                <div className="prominence_card" style={{ padding: '36px', height: '100%' }}>
                                    <div style={{ fontSize: '24px', color: '#0f172a', marginBottom: '18px' }}>
                                        <i className="fal fa-globe"></i>
                                    </div>
                                    <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                                        Autonomous & Remote
                                    </h3>
                                    <p style={{ color: '#64748b', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                                        We collaborate with world-class professionals across global financial centers. We judge outcomes, not clocked hours. We communicate asynchronously and protect deep focus work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hiring Process & Standards */}
                <section className="pt_80 pb_80" style={{ background: '#0a0f1d', color: '#fff' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '760px', margin: '0 auto 50px' }}>
                            <div className="tag_text">
                                <h6 style={{ color: '#94a3b8' }}>Evaluation Protocol</h6>
                            </div>
                            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginTop: '12px' }}>
                                Our Editorial & Engineering Hiring Process
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb_20">
                                <div className="prominence_card_dark" style={{ padding: '28px', height: '100%' }}>
                                    <span className="prominence_step_num" style={{ color: '#94a3b8' }}>01</span>
                                    <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#fff', marginTop: '12px', marginBottom: '8px' }}>
                                        Credentials Review
                                    </h4>
                                    <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>
                                        Rigorous evaluation of verified writing clips, code repositories, or advisory portfolio artifacts.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb_20">
                                <div className="prominence_card_dark" style={{ padding: '28px', height: '100%' }}>
                                    <span className="prominence_step_num" style={{ color: '#94a3b8' }}>02</span>
                                    <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#fff', marginTop: '12px', marginBottom: '8px' }}>
                                        Tactical Case Study
                                    </h4>
                                    <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>
                                        A compensated real-world test: extract a narrative thesis or diagnose a complex search scenario.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb_20">
                                <div className="prominence_card_dark" style={{ padding: '28px', height: '100%' }}>
                                    <span className="prominence_step_num" style={{ color: '#94a3b8' }}>03</span>
                                    <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#fff', marginTop: '12px', marginBottom: '8px' }}>
                                        Partner Interview
                                    </h4>
                                    <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>
                                        A strategic conversation with our founding partners on taste, governance, and client acumen.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb_20">
                                <div className="prominence_card_dark" style={{ padding: '28px', height: '100%' }}>
                                    <span className="prominence_step_num" style={{ color: '#94a3b8' }}>04</span>
                                    <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#fff', marginTop: '12px', marginBottom: '8px' }}>
                                        Retained Onboarding
                                    </h4>
                                    <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>
                                        Comprehensive non-disclosure execution, security clearances, and client assignment match.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section id="open-roles" className="pt_90 pb_90" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '760px', margin: '0 auto 50px' }}>
                            <div className="tag_text">
                                <h6>Current Openings</h6>
                            </div>
                            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', marginTop: '12px' }}>
                                Open Advisory & Engineering Roles
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '16px', marginTop: '12px' }}>
                                Explore full-time and retained advisory appointments.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '920px', margin: '0 auto' }}>
                            {OPEN_POSITIONS.map((role) => (
                                <div key={role.id} className="prominence_card" style={{ padding: '36px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
                                        <div>
                                            <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                {role.department}
                                            </span>
                                            <h3 style={{ fontSize: '21px', fontWeight: '800', color: '#0f172a', marginTop: '4px' }}>
                                                {role.title}
                                            </h3>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span className="prominence_badge">
                                                {role.type}
                                            </span>
                                            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '6px' }}>
                                                {role.location}
                                            </div>
                                        </div>
                                    </div>

                                    <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '18px' }}>
                                        {role.description}
                                    </p>

                                    <div style={{ marginBottom: '24px' }}>
                                        <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                                            Core Qualifications
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            {role.requirements.map((req, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#334155', marginBottom: '8px' }}>
                                                    <i className="fal fa-check-circle" style={{ color: '#0f172a', marginTop: '3px', fontSize: '12px' }}></i>
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <a 
                                            href="#apply-form" 
                                            onClick={() => setSelectedRole(role.title)}
                                            className="btn_style_two" 
                                            style={{ fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                                        >
                                            Apply for this Role <i className="fal fa-arrow-right" style={{ fontSize: '11px' }}></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application Form */}
                <section id="apply-form" className="pt_90 pb_100" style={{ background: '#fff' }}>
                    <div className="container">
                        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                            <div className="section_title centred" style={{ marginBottom: '36px' }}>
                                <div className="tag_text">
                                    <h6>Direct Submission</h6>
                                </div>
                                <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>
                                    Submit Your Credentials
                                </h2>
                                <p style={{ color: '#64748b', fontSize: '15px', marginTop: '8px' }}>
                                    We review every application thoroughly. Please share verified work samples, publications, or code repositories.
                                </p>
                            </div>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="prominence_card" style={{ padding: '40px' }}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>Opportunity of Interest</label>
                                            <select 
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                required
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', background: '#fff' }}
                                            >
                                                <option value="">Select an open position...</option>
                                                {OPEN_POSITIONS.map((r) => (
                                                    <option key={r.id} value={r.title}>{r.title}</option>
                                                ))}
                                                <option value="General Strategic Inquiry">General Strategic Inquiry / Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>Full Name</label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Your full name" 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }} 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>Email Address</label>
                                            <input 
                                                type="email" 
                                                required 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your.email@domain.com" 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }} 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>LinkedIn Profile URL</label>
                                            <input 
                                                type="url" 
                                                required 
                                                value={linkedin}
                                                onChange={(e) => setLinkedin(e.target.value)}
                                                placeholder="https://linkedin.com/in/username" 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }} 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>Portfolio / Writing Samples URL</label>
                                            <input 
                                                type="url" 
                                                value={portfolio}
                                                onChange={(e) => setPortfolio(e.target.value)}
                                                placeholder="https://yourportfolio.com or article links" 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }} 
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>Why Prominence?</label>
                                            <textarea 
                                                rows="4" 
                                                required 
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                                placeholder="Describe how your background aligns with our standard of executive reputation rigor..." 
                                                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }}
                                            />
                                        </div>
                                        <div className="col-12 text-center mt-3">
                                            <button type="submit" className="btn_style_one" style={{ width: '100%' }}>
                                                Submit Confidential Application
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div className="prominence_card" style={{ padding: '40px', textAlign: 'center', borderLeft: '4px solid #10b981' }}>
                                    <div style={{ fontSize: '28px', color: '#10b981', marginBottom: '12px' }}>
                                        <i className="fal fa-check-circle"></i>
                                    </div>
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                                        Application Received
                                    </h3>
                                    <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>
                                        Thank you, {name}. Our managing partners will review your credentials and reach out directly at {email} if there is strong strategic alignment.
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
