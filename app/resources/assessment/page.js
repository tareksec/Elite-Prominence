'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'

const QUESTIONS = [
    {
        id: 'google',
        dimension: '01. Google Search & Name Dominance',
        subtitle: 'What appears on Page 1 when an investor or board chair searches your full name?',
        options: [
            { points: 0, text: 'Namesake confusion, outdated directory entries, or irrelevant search results dominate Page 1.' },
            { points: 1, text: 'Only my current employer bio and a standard LinkedIn link appear; no personal assets.' },
            { points: 2, text: 'Strong corporate press and active LinkedIn, but no owned personal website or Knowledge Panel.' },
            { points: 3, text: 'Definitive Page 1 control: My personal website ranks #1 alongside verified profiles, interviews, and press.' },
        ]
    },
    {
        id: 'website',
        dimension: '02. Owned Digital HQ (Sovereignty)',
        subtitle: 'Do you possess an independent, sovereign digital headquarters online?',
        options: [
            { points: 0, text: 'No personal website or domain name registered.' },
            { points: 1, text: 'I own my domain name, but it simply redirects to LinkedIn or is an inactive placeholder.' },
            { points: 2, text: 'I have a personal site, but it lacks boardroom positioning, case studies, or entity schema.' },
            { points: 3, text: 'Bespoke Executive Digital HQ featuring governance thesis, board dossier, media kit, and rich JSON-LD schema.' },
        ]
    },
    {
        id: 'linkedin',
        dimension: '03. LinkedIn Executive Gravitas',
        subtitle: 'Does your LinkedIn profile convey institutional authority or an operational job search?',
        options: [
            { points: 0, text: 'Inactive or dated profile that reads like a junior operational resume.' },
            { points: 1, text: 'Polished profile, but passive—rarely updated and contains no published strategic perspectives.' },
            { points: 2, text: 'Regular company reposts, but lacks a distinct executive voice or original leadership commentary.' },
            { points: 3, text: 'Authoritative leadership presence with distinct positioning, calibrated essays, and engagement from industry peers.' },
        ]
    },
    {
        id: 'content',
        dimension: '04. Strategic Voice & Thought Leadership',
        subtitle: 'How consistently are your strategic viewpoints articulated in public?',
        options: [
            { points: 0, text: 'Zero public essays, articles, or strategic commentary published under my name.' },
            { points: 1, text: 'Infrequent, ad-hoc posts with inconsistent cadence and no thematic focus.' },
            { points: 2, text: 'Regular posting, but primarily summarizing common business news rather than original industry frameworks.' },
            { points: 3, text: 'High-signal, ghostwritten or authored essays published monthly that shape industry conversation.' },
        ]
    },
    {
        id: 'media',
        dimension: '05. Third-Party Proof & Authority Signals',
        subtitle: 'What external credibility signals validate your executive stature?',
        options: [
            { points: 0, text: 'No external press quotes, podcast appearances, keynote recordings, or advisory boards.' },
            { points: 1, text: 'Occasional corporate press releases where my name is listed among company officers.' },
            { points: 2, text: 'Several podcast interviews and regional conference panel appearances.' },
            { points: 3, text: 'Regular tier-one media quotes, keynote addresses at premier global summits, or paid board directorships.' },
        ]
    },
    {
        id: 'compliance',
        dimension: '06. PR Compliance & Crisis Resilience',
        subtitle: 'How resilient is your public presence against reputational shocks and PR conflicts?',
        options: [
            { points: 0, text: 'Vulnerable to competitor attacks, unmanaged search queries, or negative commentary.' },
            { points: 1, text: 'Unclear guardrails with employer corporate communications; potential compliance risk.' },
            { points: 2, text: 'Compliant with corporate PR, but passive—lacks positive search assets to buffer reputational risk.' },
            { points: 3, text: 'Robust, employer-aligned guardrails with permanent positive assets that insulate against reputational shocks.' },
        ]
    }
]

export default function AssessmentPage() {
    const [answers, setAnswers] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [leadName, setLeadName] = useState('')
    const [leadEmail, setLeadEmail] = useState('')
    const [leadRole, setLeadRole] = useState('')
    const [leadCompany, setLeadCompany] = useState('')
    const [consultationBooked, setConsultationBooked] = useState(false)

    const handleSelect = (questionId, points) => {
        setAnswers(prev => ({ ...prev, [questionId]: points }))
    }

    const totalQuestions = QUESTIONS.length
    const answeredCount = Object.keys(answers).length
    const progressPercent = Math.round((answeredCount / totalQuestions) * 100)

    // Calculate score
    const totalPoints = Object.values(answers).reduce((acc, curr) => acc + curr, 0)
    const maxPoints = totalQuestions * 3
    const scorePercent = Math.round((totalPoints / maxPoints) * 100)

    const getScoreTier = (score) => {
        if (score >= 85) {
            return {
                title: 'Sovereign Executive Stature',
                badge: 'Tier 1: Market Leading',
                summary: 'Your digital presence reflects your executive standing. You possess strong narrative assets and defensible search dominance. Your primary opportunity is scaling keynote speaking and tier-one media amplification.',
                priority: 'Amplify: Keynote stages, corporate board positioning, and Google Knowledge Graph optimization.'
            }
        }
        if (score >= 65) {
            return {
                title: 'Emerging Authority',
                badge: 'Tier 2: High Potential',
                summary: 'You have solid professional credibility and active engagement, but your assets are fragmented. Relying primarily on LinkedIn or employer pages leaves your authority vulnerable to algorithm shifts and career transitions.',
                priority: 'Anchor: Build an owned Executive Digital HQ and secure permanent Google Page 1 ownership.'
            }
        }
        if (score >= 40) {
            return {
                title: 'Conventional Executive (Authority Gap)',
                badge: 'Tier 3: The Authority Gap',
                summary: 'There is a significant disconnect between your enterprise responsibility and your public digital footprint. While you command real-world budgets and teams, stakeholders searching your name find silence or outdated bios.',
                priority: 'Establish: Narrative extraction, board-level bio rewriting, and sovereign website engineering.'
            }
        }
        return {
            title: 'Fragmented Public Footprint',
            badge: 'Tier 4: Immediate Action Needed',
            summary: 'Your digital footprint is almost entirely unmanaged. This exposes you to namesake confusion, recruiter oversight, and loss of commercial due diligence confidence before critical meetings.',
            priority: 'Reputation Defense: Urgent search audit, namesake suppression, and digital reputation architecture.'
        }
    }

    const tier = getScoreTier(scorePercent)

    const handleConsultationSubmit = (e) => {
        e.preventDefault()
        setConsultationBooked(true)
    }

    return (
        <div className="mlab-page">
            <ModernHeader />

            {/* Breadcrumb Navigation */}
            <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(18,19,22,0.08)", background: "#FAF9F5", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#8A8F9E" }}>
                        <Link href="/" style={{ color: "#8A8F9E", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <Link href="/resources" style={{ color: "#8A8F9E", textDecoration: "none" }}>Resources</Link>
                        <span>/</span>
                        <span style={{ color: "#121316", fontWeight: 600 }}>Stature Assessment</span>
                    </div>
                </div>
            </div>

            <main>
                {/* Intro Header */}
                <section style={{ backgroundColor: "#FAF9F5", padding: "72px 0 60px", borderBottom: "1px solid rgba(18,19,22,0.08)" }}>
                    <div className="container">
                        <div className="text-center" style={{ maxWidth: "840px", margin: "0 auto" }}>
                            <span className="editorial-badge" style={{ marginBottom: "18px" }}>
                                <span className="editorial-badge-dot">✦</span> OBJECTIVE SELF-AUDIT
                            </span>
                            <h1 style={{
                                fontSize: "clamp(32px, 5vw, 50px)",
                                fontWeight: 850,
                                color: "#121316",
                                lineHeight: "1.15",
                                letterSpacing: "-0.03em",
                                marginBottom: "20px"
                            }}>
                                Executive Digital Presence Assessment
                            </h1>
                            <p style={{ fontSize: "18px", color: "#555A68", lineHeight: "1.65", margin: "0 auto", maxWidth: "740px" }}>
                                Evaluate your public digital authority across 6 core dimensions: Google dominance, website sovereignty, LinkedIn gravitas, thought leadership, media proof, and PR resilience.
                            </p>
                            
                            {/* Progress bar */}
                            <div style={{ marginTop: "32px", maxWidth: "480px", margin: "32px auto 0" }}>
                                <div style={{ background: "rgba(18,19,22,0.08)", borderRadius: "10px", height: "8px", overflow: "hidden" }}>
                                    <div style={{ 
                                        width: `${progressPercent}%`, 
                                        background: "linear-gradient(135deg, #FF3B81 0%, #FF6584 100%)", 
                                        height: "100%", 
                                        transition: "width 0.3s ease" 
                                    }} />
                                </div>
                                <div style={{ marginTop: "12px", fontSize: "13px", color: "#8A8F9E", fontWeight: 600 }}>
                                    {answeredCount} of {totalQuestions} dimensions evaluated ({progressPercent}%)
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Assessment Body */}
                <section style={{ padding: "80px 0 100px", background: "#FFFFFF" }}>
                    <div className="container">
                        {!isSubmitted ? (
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                                        {QUESTIONS.map((q) => (
                                            <div key={q.id} style={{
                                                background: "#FAF9F5",
                                                borderRadius: "24px",
                                                border: "1.5px solid rgba(18,19,22,0.08)",
                                                padding: "36px 40px",
                                                boxShadow: "0 4px 20px rgba(18,19,22,0.02)"
                                            }}>
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                                                    <span style={{ fontSize: "11px", fontWeight: "800", color: "#FF3B81", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                                        {q.dimension}
                                                    </span>
                                                    {answers[q.id] !== undefined && (
                                                        <span className="editorial-badge" style={{ fontSize: "11px", padding: "4px 10px" }}>
                                                            ✓ Evaluated
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 style={{ fontSize: "19px", fontWeight: 800, color: "#121316", marginBottom: "22px", lineHeight: "1.4", letterSpacing: "-0.01em" }}>
                                                    {q.subtitle}
                                                </h3>

                                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                                    {q.options.map((opt, oIdx) => {
                                                        const isSelected = answers[q.id] === opt.points
                                                        return (
                                                            <div 
                                                                key={oIdx}
                                                                onClick={() => handleSelect(q.id, opt.points)}
                                                                style={{ 
                                                                    padding: "16px 20px", 
                                                                    borderRadius: "14px", 
                                                                    border: isSelected ? "1.5px solid #FF3B81" : "1.5px solid rgba(18,19,22,0.08)", 
                                                                    background: isSelected ? "#FFFFFF" : "#FFFFFF", 
                                                                    cursor: "pointer",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "14px",
                                                                    transition: "all 0.2s ease",
                                                                    boxShadow: isSelected ? "0 4px 16px rgba(255, 59, 129, 0.12)" : "none"
                                                                }}
                                                            >
                                                                <div style={{ 
                                                                    width: "18px", 
                                                                    height: "18px", 
                                                                    borderRadius: "50%", 
                                                                    border: isSelected ? "5px solid #FF3B81" : "2px solid #CBD5E1", 
                                                                    background: "#fff",
                                                                    flexShrink: 0
                                                                }} />
                                                                <span style={{ fontSize: "14.5px", color: isSelected ? "#121316" : "#555A68", fontWeight: isSelected ? 700 : 400, lineHeight: "1.55" }}>
                                                                    {opt.text}
                                                                </span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        ))}

                                        {/* Submit Button */}
                                        <div style={{ textAlign: "center", marginTop: "24px" }}>
                                            <button 
                                                onClick={() => setIsSubmitted(true)}
                                                disabled={answeredCount < totalQuestions}
                                                className="prominence-btn-primary"
                                                style={{
                                                    opacity: answeredCount < totalQuestions ? 0.5 : 1,
                                                    cursor: answeredCount < totalQuestions ? 'not-allowed' : 'pointer',
                                                    fontSize: '15px',
                                                    padding: '16px 36px',
                                                    border: 'none'
                                                }}
                                            >
                                                <span>
                                                    {answeredCount === totalQuestions 
                                                        ? 'Calculate Executive Stature Score' 
                                                        : `Complete All Questions (${answeredCount}/${totalQuestions})`}
                                                </span>
                                                <span>&rarr;</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Results View */
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                     {/* Score Card */}
                                     <div style={{ 
                                         background: "#121316",
                                         borderRadius: "28px",
                                         padding: "52px 48px", 
                                         textAlign: "center",
                                         marginBottom: "40px",
                                         color: "#FFFFFF",
                                         border: "1px solid rgba(255, 255, 255, 0.08)",
                                         boxShadow: "0 12px 40px rgba(0,0,0,0.15)"
                                     }}>
                                         <span className="editorial-badge" style={{ background: "rgba(255,255,255,0.08)", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.15)", marginBottom: "16px" }}>
                                             <span className="editorial-badge-dot" style={{ background: "#FF3B81" }}>✦</span> {tier.badge}
                                         </span>

                                         <div style={{ fontSize: "clamp(64px, 8vw, 84px)", fontWeight: 900, color: "#FF3B81", marginTop: "16px", lineHeight: "1", letterSpacing: "-0.04em" }}>
                                             {scorePercent}%
                                         </div>
                                         <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 850, color: "#FFFFFF", marginTop: "14px", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                                             {tier.title}
                                         </h2>
                                         <p style={{ fontSize: "16.5px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", maxWidth: "620px", margin: "0 auto 28px" }}>
                                             {tier.summary}
                                         </p>

                                         <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "20px 24px", textAlign: "left" }}>
                                             <strong style={{ color: "#FF3B81", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
                                                 Recommended Strategic Priority:
                                             </strong>
                                             <p style={{ color: "rgba(255,255,255,0.85)", margin: 0, fontSize: "14.5px", lineHeight: "1.6" }}>
                                                 {tier.priority}
                                             </p>
                                         </div>
                                     </div>

                                     {/* Action Next Step: Private Consultation Booking */}
                                     <div style={{ background: "#FAF9F5", borderRadius: "28px", border: "1.5px solid rgba(18,19,22,0.08)", padding: "48px 40px", boxShadow: "0 4px 24px rgba(18,19,22,0.03)" }}>
                                         <div className="text-center" style={{ marginBottom: "32px" }}>
                                             <span className="editorial-badge" style={{ marginBottom: "12px" }}>
                                                 <span className="editorial-badge-dot">✦</span> CONFIDENTIAL REVIEW
                                             </span>
                                             <h3 style={{ fontSize: "26px", fontWeight: 850, color: "#121316", letterSpacing: "-0.02em", marginTop: "8px" }}>
                                                 Review Your Score With a Prominence Partner
                                             </h3>
                                             <p style={{ color: "#555A68", fontSize: "15.5px", marginTop: "8px", maxWidth: "560px", margin: "8px auto 0" }}>
                                                 Book a confidential 30-minute advisory call. We will review your score breakdown, inspect your current Google Page 1 footprint, and outline how to achieve Tier 1 Sovereign Stature.
                                             </p>
                                         </div>

                                         {!consultationBooked ? (
                                             <form onSubmit={handleConsultationSubmit}>
                                                 <div className="row g-3">
                                                      <div className="col-md-6">
                                                          <label className="prominence_label">Full Name</label>
                                                          <input 
                                                              type="text" 
                                                              required 
                                                              className="prominence_input"
                                                              value={leadName}
                                                              onChange={(e) => setLeadName(e.target.value)}
                                                              placeholder="e.g. Eleanor Vance" 
                                                          />
                                                      </div>
                                                      <div className="col-md-6">
                                                          <label className="prominence_label">Executive Email</label>
                                                          <input 
                                                              type="email" 
                                                              required 
                                                              className="prominence_input"
                                                              value={leadEmail}
                                                              onChange={(e) => setLeadEmail(e.target.value)}
                                                              placeholder="e.g. eleanor@enterprise.com" 
                                                          />
                                                      </div>
                                                      <div className="col-md-6">
                                                          <label className="prominence_label">Executive Role</label>
                                                          <input 
                                                              type="text" 
                                                              required 
                                                              className="prominence_input"
                                                              value={leadRole}
                                                              onChange={(e) => setLeadRole(e.target.value)}
                                                              placeholder="e.g. CEO, CHRO, Founder" 
                                                          />
                                                      </div>
                                                      <div className="col-md-6">
                                                          <label className="prominence_label">Organization / Firm</label>
                                                          <input 
                                                              type="text" 
                                                              className="prominence_input"
                                                              value={leadCompany}
                                                              onChange={(e) => setLeadCompany(e.target.value)}
                                                              placeholder="e.g. Global Tech Partners" 
                                                          />
                                                      </div>
                                                     <div className="col-12 mt-4 text-center">
                                                         <button 
                                                             type="submit" 
                                                             className="prominence-btn-primary w-100 justify-content-center"
                                                             style={{ border: 'none', cursor: 'pointer', fontSize: '15px', padding: '16px 28px' }}
                                                         >
                                                             <span>Request Confidential Score Briefing ({scorePercent}% Stature)</span>
                                                             <span>&rarr;</span>
                                                         </button>
                                                         <span style={{ display: 'block', marginTop: '14px', fontSize: '12px', color: '#8A8F9E' }}>
                                                             Strict NDA applies. Your information is never sold, shared, or publicized.
                                                         </span>
                                                     </div>
                                                 </div>
                                             </form>
                                         ) : (
                                             <div style={{ background: "#FFFFFF", borderRadius: "20px", border: "1.5px solid rgba(18,19,22,0.08)", padding: "36px", textAlign: "center" }}>
                                                 <div style={{ fontSize: "28px", color: "#FF3B81", marginBottom: "12px" }}>
                                                     ✓
                                                 </div>
                                                 <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#121316", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                                                     Briefing Request Received
                                                 </h4>
                                                 <p style={{ color: "#555A68", fontSize: "14.5px", margin: 0 }}>
                                                     Thank you, {leadName}. Our managing partner will review your {scorePercent}% evaluation and reach out directly at {leadEmail} to coordinate your private consultation.
                                                 </p>
                                             </div>
                                         )}

                                         <div style={{ textAlign: "center", marginTop: "24px" }}>
                                             <button 
                                                 type="button"
                                                 onClick={() => { setIsSubmitted(false); setConsultationBooked(false); }}
                                                 className="prominence-btn-outline"
                                                 style={{ border: "1.5px solid rgba(18,19,22,0.12)", background: "transparent", fontSize: "13px", padding: "8px 18px" }}
                                             >
                                                 <span>&larr; Retake Assessment</span>
                                             </button>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

            </main>
            <ModernFooter />
        </div>
    )
}
