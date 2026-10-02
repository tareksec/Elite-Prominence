'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
import { MANDATES_DATA, PARTNER_BENEFITS, HIRING_PROTOCOL } from '@/lib/careersData'

const MANDATES = MANDATES_DATA


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
        <div className="mlab-page">
            <ModernHeader activeNav="about" />

            {/* Breadcrumb Navigation */}
            <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(18,19,22,0.08)", background: "#FAF9F5", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#8A8F9E" }}>
                        <Link href="/" style={{ color: "#8A8F9E", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <span style={{ color: "#121316", fontWeight: 600 }}>Careers &amp; Mandates</span>
                    </div>
                </div>
            </div>

            <main>
                
                {/* Hero Section: Charter Narrative */}
                <section style={{ backgroundColor: '#FAF9F5', padding: '80px 0 68px', borderBottom: '1px solid rgba(18,19,22,0.08)' }}>
                    <div className="container">
                        <div className="text-center" style={{ maxWidth: '860px', margin: '0 auto' }}>
                            <span className="editorial-badge" style={{ marginBottom: '18px' }}>
                                <span className="editorial-badge-dot">✦</span> PRACTICE CHARTER &amp; MANDATES
                            </span>
                            <h1 style={{
                                fontSize: 'clamp(32px, 5vw, 54px)',
                                fontWeight: 850,
                                color: '#121316',
                                lineHeight: '1.15',
                                letterSpacing: '-0.03em',
                                marginBottom: '20px'
                            }}>
                                Counsel the Leaders Who Shape Global Industry
                            </h1>
                            <p style={{ color: '#555A68', fontSize: '18px', lineHeight: '1.65', maxWidth: '760px', margin: '0 auto 32px' }}>
                                Prominence is not a marketing agency. We are a specialized executive advisory firm entrusted by CEOs, CHROs, and institutional leaders to architect their sovereign digital stature, defend their search footprint, and articulate their thought leadership.
                            </p>
                            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="#open-mandates" className="prominence-btn-primary">
                                    <span>Review Open Mandates</span>
                                    <span>&darr;</span>
                                </a>
                                <a href="#apply-dossier" className="prominence-btn-outline">
                                    <span>Submit Direct Dossier</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operating Principles: Asymmetrical Editorial Manifesto */}
                <section style={{ background: '#FFFFFF', padding: '88px 0', borderBottom: '1px solid rgba(18,19,22,0.08)' }}>
                    <div className="container">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-4">
                            <div style={{ maxWidth: '600px' }}>
                                <span className="editorial-badge" style={{ marginBottom: '14px' }}>
                                    <span className="editorial-badge-dot">✦</span> OUR PROFESSIONAL CREED
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 850, color: '#121316', margin: 0, letterSpacing: '-0.03em', lineHeight: '1.2' }}>
                                    The Three Tenets of the Prominence Practice
                                </h2>
                            </div>
                            <div style={{ maxWidth: '440px' }}>
                                <p style={{ color: '#555A68', fontSize: '16px', lineHeight: '1.65', margin: 0 }}>
                                    We maintain an uncompromising standard of intellectual rigor. We work with a small, elite cohort of specialists who prize quality over volume and discretion over self-promotion.
                                </p>
                            </div>
                        </div>

                        {/* Asymmetrical Editorial Grid */}
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-12">
                                <div style={{
                                    background: '#FAF9F5',
                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                    borderRadius: '24px',
                                    padding: '36px 32px',
                                    height: '100%',
                                    boxShadow: '0 4px 20px rgba(18, 19, 22, 0.02)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                                            Tenet I
                                        </div>
                                        <h3 style={{ fontSize: '21px', fontWeight: 800, color: '#121316', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                                            Journalistic Rigor &amp; Commercial Truth
                                        </h3>
                                        <p style={{ color: '#555A68', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                                            We reject synthetic social noise and generic algorithmic platitudes. Every essay and commentary we craft is grounded in genuine operational truth, balance sheet reality, and boardroom gravity.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid rgba(18,19,22,0.08)', fontSize: '12px', color: '#8A8F9E', fontWeight: '600' }}>
                                        Zero AI Platitudes &bull; Nuanced Executive Tone
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div style={{
                                    background: '#FAF9F5',
                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                    borderRadius: '24px',
                                    padding: '36px 32px',
                                    height: '100%',
                                    boxShadow: '0 4px 20px rgba(18, 19, 22, 0.02)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                                            Tenet II
                                        </div>
                                        <h3 style={{ fontSize: '21px', fontWeight: 800, color: '#121316', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                                            Inviolable Discretion &amp; Governance
                                        </h3>
                                        <p style={{ color: '#555A68', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                                            Our clients govern publicly traded enterprises, sovereign funds, and market-shaping startups. Absolute confidentiality and institutional security are non-negotiable foundations of our firm.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid rgba(18,19,22,0.08)', fontSize: '12px', color: '#8A8F9E', fontWeight: '600' }}>
                                        Strict Legal Non-Disclosure &bull; Zero Leakage
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div style={{
                                    background: '#FAF9F5',
                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                    borderRadius: '24px',
                                    padding: '36px 32px',
                                    height: '100%',
                                    boxShadow: '0 4px 20px rgba(18, 19, 22, 0.02)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                                            Tenet III
                                        </div>
                                        <h3 style={{ fontSize: '21px', fontWeight: 800, color: '#121316', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                                            Intellectual Autonomy &amp; Deep Space
                                        </h3>
                                        <p style={{ color: '#555A68', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                                            We operate globally and asynchronously. We do not track keystrokes or enforce arbitrary office hours. We measure talent exclusively by craftsmanship, strategic acumen, and client impact.
                                        </p>
                                    </div>
                                    <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid rgba(18,19,22,0.08)', fontSize: '12px', color: '#8A8F9E', fontWeight: '600' }}>
                                        Asynchronous Focus &bull; Deep Mastery
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Appointment Protocol: Visual 4-Stage Roadmap */}
                <section style={{ background: '#121316', color: '#ffffff', padding: '88px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="container">
                        <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto 52px' }}>
                            <span className="editorial-badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.15)', marginBottom: '16px' }}>
                                <span className="editorial-badge-dot" style={{ background: '#FF3B81' }}>✦</span> VETTING &amp; INDUCTION PROTOCOL
                            </span>
                            <h2 style={{
                                color: '#ffffff',
                                fontSize: 'clamp(28px, 4vw, 42px)',
                                fontWeight: 850,
                                letterSpacing: '-0.03em',
                                marginBottom: '14px'
                            }}>
                                The 4-Stage Evaluation Architecture
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16.5px', lineHeight: '1.6' }}>
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
                                        background: 'rgba(255, 255, 255, 0.04)',
                                        border: '1.5px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '20px',
                                        padding: '32px 26px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <div style={{ fontSize: '28px', fontWeight: '900', color: '#FF3B81', marginBottom: '14px', letterSpacing: '-0.03em' }}>
                                            {item.stage}
                                        </div>
                                        <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                                            {item.title}
                                        </h4>
                                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.65', margin: 0 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Mandates: Editorial Role Dossiers */}
                <section id="open-mandates" style={{ background: '#FAF9F5', padding: '88px 0', borderBottom: '1px solid rgba(18,19,22,0.08)' }}>
                    <div className="container">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-4">
                            <div style={{ maxWidth: '600px' }}>
                                <span className="editorial-badge" style={{ marginBottom: '14px' }}>
                                    <span className="editorial-badge-dot">✦</span> ACTIVE RETAINED SEARCHES
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 850, color: '#121316', margin: 0, letterSpacing: '-0.03em' }}>
                                    Current Practice Mandates
                                </h2>
                            </div>
                            <div style={{ maxWidth: '440px' }}>
                                <p style={{ color: '#555A68', fontSize: '16px', lineHeight: '1.65', margin: 0 }}>
                                    Each mandate represents a key pillar in our executive reputation and thought leadership advisory.
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '980px', margin: '0 auto' }}>
                            {MANDATES.map((role) => (
                                <div key={role.id} style={{
                                    background: '#ffffff',
                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                    borderRadius: '24px',
                                    padding: 'clamp(28px, 4vw, 42px)',
                                    boxShadow: '0 4px 20px rgba(18, 19, 22, 0.03)'
                                }}>
                                    {/* Dossier Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '20px', paddingBottom: '18px', borderBottom: '1px solid rgba(18,19,22,0.08)' }}>
                                        <div>
                                            <span style={{ fontSize: '11px', fontWeight: '800', color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                                {role.mandate} &bull; {role.practice}
                                            </span>
                                            <h3 style={{ fontSize: '24px', fontWeight: 850, color: '#121316', marginTop: '6px', marginBottom: 0, letterSpacing: '-0.02em' }}>
                                                {role.title}
                                            </h3>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span className="editorial-badge">
                                                <span className="editorial-badge-dot">✦</span> {role.arrangement}
                                            </span>
                                            <div style={{ fontSize: '12.5px', color: '#8A8F9E', marginTop: '6px', fontWeight: 600 }}>
                                                {role.location}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mission Statement */}
                                    <p style={{ color: '#555A68', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                                        {role.mission}
                                    </p>

                                    {/* Two-Column Mandate Specs */}
                                    <div className="row g-4 mb-4">
                                        <div className="col-md-7">
                                            <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#121316', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                                                Key Imperatives
                                            </h4>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {role.imperatives.map((imp, i) => (
                                                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#555A68', marginBottom: '10px', lineHeight: '1.55' }}>
                                                        <span style={{ color: '#FF3B81', fontWeight: 800 }}>✦</span>
                                                        <span>{imp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-md-5">
                                            <div style={{ background: '#FAF9F5', padding: '22px 24px', borderRadius: '16px', border: '1.5px solid rgba(18,19,22,0.08)', height: '100%' }}>
                                                <div style={{ fontSize: '11px', fontWeight: '800', color: '#8A8F9E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                                                    Compensation Terms
                                                </div>
                                                <div style={{ fontSize: '15px', fontWeight: '800', color: '#FF3B81', marginBottom: '14px' }}>
                                                    {role.compensation}
                                                </div>
                                                <div style={{ fontSize: '11px', fontWeight: '800', color: '#8A8F9E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                                                    Ideal Background
                                                </div>
                                                <p style={{ fontSize: '13px', color: '#555A68', lineHeight: '1.6', margin: 0 }}>
                                                    {role.idealProfile}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '18px', borderTop: '1px solid rgba(18,19,22,0.08)', flexWrap: 'wrap', gap: '14px' }}>
                                        <Link 
                                            href={`/careers/${role.slug || role.id}`}
                                            className="prominence-btn-outline"
                                            style={{ fontSize: '13.5px' }}
                                        >
                                            <span>View Full Mandate Dossier &rarr;</span>
                                        </Link>
                                        <a 
                                            href="#apply-dossier" 
                                            onClick={() => setSelectedRole(role.title)}
                                            className="prominence-btn-primary"
                                            style={{ fontSize: '13.5px', padding: '10px 20px' }}
                                        >
                                            <span>Apply for Mandate &darr;</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits & Partner Privileges */}
                <section style={{ background: '#FFFFFF', padding: '88px 0', borderBottom: '1px solid rgba(18,19,22,0.08)' }}>
                    <div className="container">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-4">
                            <div style={{ maxWidth: '600px' }}>
                                <span className="editorial-badge" style={{ marginBottom: '14px' }}>
                                    <span className="editorial-badge-dot">✦</span> PARTNER PRIVILEGES
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 850, color: '#121316', margin: 0, letterSpacing: '-0.03em' }}>
                                    The Sovereign Standard of Stewardship
                                </h2>
                            </div>
                            <div style={{ maxWidth: '440px' }}>
                                <p style={{ color: '#555A68', fontSize: '16px', lineHeight: '1.65', margin: 0 }}>
                                    We treat specialists as equity partners, not fungible agency cogs. Our practice is built around autonomy, world-class compensation, and deep intellectual space.
                                </p>
                            </div>
                        </div>

                        <div className="row g-4">
                            {PARTNER_BENEFITS.map((b, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: '#FAF9F5',
                                        border: '1.5px solid rgba(18,19,22,0.08)',
                                        borderRadius: '24px',
                                        padding: '36px 30px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        boxShadow: '0 4px 20px rgba(18, 19, 22, 0.02)'
                                    }}>
                                        <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid rgba(18,19,22,0.08)', color: '#FF3B81', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '20px' }}>
                                            <i className={b.icon}></i>
                                        </div>
                                        <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#121316', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                                            {b.title}
                                        </h3>
                                        <p style={{ fontSize: '14.5px', color: '#555A68', lineHeight: '1.65', margin: 0 }}>
                                            {b.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Direct Dossier Submission Form */}
                <section id="apply-dossier" style={{ background: '#FAF9F5', padding: '88px 0' }}>
                    <div className="container">
                        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                            <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 44px' }}>
                                <span className="editorial-badge" style={{ marginBottom: '14px' }}>
                                    <span className="editorial-badge-dot">✦</span> CONFIDENTIAL DOSSIER TRANSMISSION
                                </span>
                                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 850, color: '#121316', letterSpacing: '-0.03em', marginBottom: '14px' }}>
                                    Submit Your Credentials
                                </h2>
                                <p style={{ color: '#555A68', fontSize: '16.5px', lineHeight: '1.6' }}>
                                    Every submission is handled with strict professional discretion. Please provide links to published pieces, codebases, or past advisory portfolios.
                                </p>
                            </div>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} style={{
                                    background: '#FFFFFF',
                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                    borderRadius: '24px',
                                    padding: 'clamp(32px, 4vw, 48px)',
                                    boxShadow: '0 4px 24px rgba(18, 19, 22, 0.04)'
                                }}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="prominence_label">
                                                Mandate of Interest
                                            </label>
                                            <select 
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                required
                                                className="prominence_select"
                                                style={{ borderRadius: '12px', border: '1.5px solid rgba(18,19,22,0.1)' }}
                                            >
                                                <option value="">Select an open mandate...</option>
                                                {MANDATES.map((r) => (
                                                    <option key={r.id} value={r.title}>{r.title}</option>
                                                ))}
                                                <option value="General Strategic Inquiry">General Strategic Advisory Inquiry / Unlisted Specialization</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="prominence_label">
                                                Full Legal Name
                                            </label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="e.g. Julian Vance" 
                                                className="prominence_input"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="prominence_label">
                                                Direct Contact Email
                                            </label>
                                            <input 
                                                type="email" 
                                                required 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="e.g. name@domain.com" 
                                                className="prominence_input"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="prominence_label">
                                                LinkedIn Profile URL
                                            </label>
                                            <input 
                                                type="url" 
                                                required 
                                                value={linkedin}
                                                onChange={(e) => setLinkedin(e.target.value)}
                                                placeholder="https://linkedin.com/in/username" 
                                                className="prominence_input"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="prominence_label">
                                                Portfolio / Publication Archive URL
                                            </label>
                                            <input 
                                                type="url" 
                                                value={portfolio}
                                                onChange={(e) => setPortfolio(e.target.value)}
                                                placeholder="https://archive.com or articles portfolio" 
                                                className="prominence_input"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="prominence_label">
                                                Why Prominence? (Executive Rationale)
                                            </label>
                                            <textarea 
                                                rows="4" 
                                                required 
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                                placeholder="Articulate why your editorial rigor or technical depth aligns with high-stakes C-suite representation..." 
                                                className="prominence_textarea"
                                                style={{ resize: "vertical" }}
                                            />
                                        </div>
                                        <div className="col-12 text-center mt-4">
                                            <button type="submit" className="prominence-btn-primary w-100 justify-content-center" style={{ border: 'none', cursor: 'pointer', fontSize: '15px', padding: '16px 28px' }}>
                                                <span>Transmit Confidential Application</span>
                                                <span>&rarr;</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div style={{
                                    background: '#ffffff',
                                    border: '1.5px solid rgba(18,19,22,0.08)',
                                    borderRadius: '24px',
                                    padding: '50px 40px',
                                    textAlign: 'center',
                                    boxShadow: '0 8px 30px rgba(18, 19, 22, 0.04)'
                                }}>
                                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#FAF9F5', border: '1.5px solid #FF3B81', color: '#FF3B81', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '18px' }}>
                                        ✓
                                    </div>
                                    <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#121316', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                                        Dossier Successfully Transmitted
                                    </h3>
                                    <p style={{ color: '#555A68', fontSize: '15.5px', maxWidth: '540px', margin: '0 auto', lineHeight: '1.65' }}>
                                        Thank you, {name}. Your credentials have been transferred directly to our managing advisory partners. If there is mutual alignment with our active mandates, we will schedule a private dialogue.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

            </main>
            <ModernFooter />
        </div>
    )
}
