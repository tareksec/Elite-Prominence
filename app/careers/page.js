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
                <section className="pt_120 pb_70" style={{ background: '#0d1b2a', color: '#fff' }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "860px", margin: "0 auto" }}>
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
                                <span style={{ 
                                    display: 'inline-block', 
                                    padding: '6px 16px', 
                                    background: 'rgba(210, 157, 43, 0.15)', 
                                    color: '#d29d2b', 
                                    fontWeight: '700', 
                                    fontSize: '12px', 
                                    letterSpacing: '1px', 
                                    textTransform: 'uppercase', 
                                    borderRadius: '50px' 
                                }}>
                                    Join Our Advisory Firm
                                </span>
                            </div>
                            <h1 style={{ fontSize: "44px", fontWeight: "800", color: "#fff", lineHeight: "1.2", marginBottom: "20px" }}>
                                Build the Reputation of the People Shaping Tomorrow
                            </h1>
                            <p style={{ fontSize: "19px", color: "#94a3b8", lineHeight: "1.7" }}>
                                At Prominence, we represent CEOs, CHROs, enterprise founders, and senior decision-makers. We do not do superficial marketing. We do high-stakes narrative architecture, sovereign digital engineering, and discreet reputation stewardship.
                            </p>
                            <div style={{ marginTop: "32px" }}>
                                <a href="#open-roles" className="btn_style_one" style={{ padding: "14px 32px", fontSize: "15px" }}>
                                    View Open Opportunities ↓
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cultural Pillars */}
                <section className="pt_100 pb_90" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 60px" }}>
                            <span style={{ color: "#2460e2", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Our Operating Philosophy
                            </span>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a", marginTop: "12px" }}>
                                How We Think, Work, and Deliver
                            </h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb_30">
                                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "36px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#2460e2", marginBottom: "16px" }}>✍️</div>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0d1b2a", marginBottom: "12px" }}>
                                        Journalistic Integrity
                                    </h3>
                                    <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                                        We reject superficial AI-generated social fluff. Every piece of thought leadership is built on real business insight, intellectual rigor, and authenticated client perspective.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb_30">
                                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "36px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#d29d2b", marginBottom: "16px" }}>🔒</div>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0d1b2a", marginBottom: "12px" }}>
                                        Absolute Discretion
                                    </h3>
                                    <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                                        Our clients lead public companies and high-valuation enterprises. Confidentiality is not a legal formality—it is the foundation of our existence.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb_30">
                                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "36px", height: "100%" }}>
                                    <div style={{ fontSize: "28px", color: "#10b981", marginBottom: "16px" }}>🌍</div>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0d1b2a", marginBottom: "12px" }}>
                                        Autonomous & Remote
                                    </h3>
                                    <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                                        We hire top-tier professionals globally and judge outcomes, not clocked hours. We communicate asynchronously, minimize meetings, and respect deep work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section id="open-roles" className="pt_90 pb_90" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: "760px", margin: "0 auto 50px" }}>
                            <span style={{ color: "#d29d2b", fontWeight: "700", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                                Current Openings
                            </span>
                            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#0d1b2a", marginTop: "12px" }}>
                                Open Opportunities
                            </h2>
                            <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>
                                Explore full-time and retained advisory roles.
                            </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "920px", margin: "0 auto" }}>
                            {OPEN_POSITIONS.map((role) => (
                                <div key={role.id} style={{ 
                                    background: "#fff", 
                                    border: "1px solid #e2e8f0", 
                                    borderRadius: "14px", 
                                    padding: "36px", 
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)" 
                                }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "14px" }}>
                                        <div>
                                            <span style={{ fontSize: "12px", fontWeight: "700", color: "#2460e2", textTransform: "uppercase", letterSpacing: "1px" }}>
                                                {role.department}
                                            </span>
                                            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0d1b2a", marginTop: "4px" }}>
                                                {role.title}
                                            </h3>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <span style={{ background: "#ecfdf5", color: "#059669", fontWeight: "700", fontSize: "12px", padding: "4px 12px", borderRadius: "12px", display: "inline-block" }}>
                                                {role.type}
                                            </span>
                                            <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>
                                                {role.location}
                                            </div>
                                        </div>
                                    </div>

                                    <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
                                        {role.description}
                                    </p>

                                    <div style={{ marginBottom: "24px" }}>
                                        <h4 style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                                            Core Qualifications:
                                        </h4>
                                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                            {role.requirements.map((req, i) => (
                                                <li key={i} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#334155", marginBottom: "6px" }}>
                                                    <span style={{ color: "#2460e2", fontWeight: "bold" }}>✓</span>
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
                                            style={{ padding: "10px 24px", fontSize: "13px", background: "#f8fafc" }}
                                        >
                                            Apply for this Role →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application Form */}
                <section id="apply-form" className="pt_90 pb_100" style={{ background: "#fff" }}>
                    <div className="container">
                        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
                            <div className="section_title centred" style={{ marginBottom: "36px" }}>
                                <span style={{ color: "#2460e2", fontWeight: "700", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>
                                    Direct Submission
                                </span>
                                <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0d1b2a", marginTop: "8px" }}>
                                    Submit Your Credentials
                                </h2>
                                <p style={{ color: "#64748b", fontSize: "15px", marginTop: "8px" }}>
                                    We review every application thoroughly. Please share verified work samples or writing clips.
                                </p>
                            </div>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "40px" }}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label style={{ fontSize: "13px", fontWeight: "700", color: "#334155", marginBottom: "6px", display: "block" }}>Opportunity of Interest</label>
                                            <select 
                                                value={selectedRole}
                                                onChange={(e) => setSelectedRole(e.target.value)}
                                                required
                                                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px", background: "#fff" }}
                                            >
                                                <option value="">Select an open position...</option>
                                                {OPEN_POSITIONS.map((r) => (
                                                    <option key={r.id} value={r.title}>{r.title}</option>
                                                ))}
                                                <option value="General Strategic Inequity">General Strategic Inquiry / Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: "13px", fontWeight: "700", color: "#334155", marginBottom: "6px", display: "block" }}>Full Name</label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Your full name" 
                                                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px" }} 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: "13px", fontWeight: "700", color: "#334155", marginBottom: "6px", display: "block" }}>Email Address</label>
                                            <input 
                                                type="email" 
                                                required 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your.email@domain.com" 
                                                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px" }} 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: "13px", fontWeight: "700", color: "#334155", marginBottom: "6px", display: "block" }}>LinkedIn Profile URL</label>
                                            <input 
                                                type="url" 
                                                required 
                                                value={linkedin}
                                                onChange={(e) => setLinkedin(e.target.value)}
                                                placeholder="https://linkedin.com/in/username" 
                                                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px" }} 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: "13px", fontWeight: "700", color: "#334155", marginBottom: "6px", display: "block" }}>Portfolio / Writing Samples URL</label>
                                            <input 
                                                type="url" 
                                                value={portfolio}
                                                onChange={(e) => setPortfolio(e.target.value)}
                                                placeholder="https://yourportfolio.com or article links" 
                                                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px" }} 
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label style={{ fontSize: "13px", fontWeight: "700", color: "#334155", marginBottom: "6px", display: "block" }}>Why Prominence?</label>
                                            <textarea 
                                                rows="4" 
                                                required 
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                                placeholder="Tell us why you are drawn to executive reputation and how your work reflects our standard of excellence..." 
                                                style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "15px" }}
                                            />
                                        </div>
                                        <div className="col-12 text-center mt-3">
                                            <button type="submit" className="btn_style_one" style={{ padding: "16px 40px", fontSize: "16px" }}>
                                                Submit Confidential Application →
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "40px", textAlign: "center" }}>
                                    <div style={{ fontSize: "36px", color: "#10b981", marginBottom: "12px" }}>✓</div>
                                    <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#166534", marginBottom: "8px" }}>
                                        Application Received
                                    </h3>
                                    <p style={{ color: "#15803d", fontSize: "16px", margin: 0 }}>
                                        Thank you, {name}. Our managing partners will review your credentials and reach out directly at {email} if there is a strong alignment.
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
