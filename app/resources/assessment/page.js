'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

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
        <div className="boxed_wrapper">
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Executive Stature Assessment">
                
                {/* Intro Header */}
                <section className="prominence_page_intro">
                    <div className="container">
                        <div className="section_title centred" style={{ maxWidth: '820px', margin: '0 auto' }}>
                            <div className="tag_text">
                                <h6>Objective Self-Audit</h6>
                            </div>
                            <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#0f172a', lineHeight: '1.25', marginBottom: '16px' }}>
                                Executive Digital Presence Assessment
                            </h1>
                            <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.7', margin: '0 auto' }}>
                                Evaluate your public digital authority across 6 core dimensions: Google dominance, website sovereignty, LinkedIn gravitas, thought leadership, media proof, and PR resilience.
                            </p>
                            
                            {/* Progress bar */}
                            <div style={{ marginTop: '30px', maxWidth: '480px', margin: '30px auto 0' }}>
                                <div style={{ background: '#e2e8f0', borderRadius: '10px', height: '6px', overflow: 'hidden' }}>
                                    <div style={{ 
                                        width: `${progressPercent}%`, 
                                        background: '#0f172a', 
                                        height: '100%', 
                                        transition: 'width 0.3s ease' 
                                    }} />
                                </div>
                                <div style={{ marginTop: '10px', fontSize: '12.5px', color: '#64748b', fontWeight: '600' }}>
                                    {answeredCount} of {totalQuestions} dimensions evaluated ({progressPercent}%)
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Assessment Body */}
                <section className="pt_70 pb_90" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        {!isSubmitted ? (
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                        {QUESTIONS.map((q) => (
                                            <div key={q.id} className="prominence_card" style={{ padding: '36px 40px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                        {q.dimension}
                                                    </span>
                                                    {answers[q.id] !== undefined && (
                                                        <span className="prominence_badge" style={{ fontSize: '11px', padding: '2px 10px' }}>
                                                            <i className="fal fa-check" style={{ marginRight: '4px' }}></i> Evaluated
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', lineHeight: '1.4' }}>
                                                    {q.subtitle}
                                                </h3>

                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                    {q.options.map((opt, oIdx) => {
                                                        const isSelected = answers[q.id] === opt.points
                                                        return (
                                                            <div 
                                                                key={oIdx}
                                                                onClick={() => handleSelect(q.id, opt.points)}
                                                                style={{ 
                                                                    padding: '16px 20px', 
                                                                    borderRadius: '8px', 
                                                                    border: isSelected ? '1px solid #0f172a' : '1px solid #e2e8f0', 
                                                                    background: isSelected ? '#f1f5f9' : '#fff', 
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '14px',
                                                                    transition: 'all 0.2s ease'
                                                                }}
                                                            >
                                                                <div style={{ 
                                                                    width: '18px', 
                                                                    height: '18px', 
                                                                    borderRadius: '50%', 
                                                                    border: isSelected ? '5px solid #0f172a' : '2px solid #cbd5e1', 
                                                                    background: '#fff',
                                                                    flexShrink: 0
                                                                }} />
                                                                <span style={{ fontSize: '14.5px', color: isSelected ? '#0f172a' : '#475569', fontWeight: isSelected ? '600' : '400', lineHeight: '1.5' }}>
                                                                    {opt.text}
                                                                </span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        ))}

                                        {/* Submit Button */}
                                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                            <button 
                                                onClick={() => setIsSubmitted(true)}
                                                disabled={answeredCount < totalQuestions}
                                                className="btn_style_one"
                                                style={{ 
                                                    cursor: answeredCount === totalQuestions ? 'pointer' : 'not-allowed',
                                                    opacity: answeredCount === totalQuestions ? 1 : 0.5
                                                }}
                                            >
                                                {answeredCount === totalQuestions 
                                                    ? 'Calculate Executive Stature Score' 
                                                    : `Complete All Questions (${answeredCount}/${totalQuestions})`}
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
                                    <div className="prominence_card_dark" style={{ 
                                        padding: '48px', 
                                        textAlign: 'center',
                                        marginBottom: '36px'
                                    }}>
                                        <span className="prominence_badge" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                                            {tier.badge}
                                        </span>

                                        <div style={{ fontSize: '72px', fontWeight: '900', color: '#fff', marginTop: '20px', lineHeight: '1' }}>
                                            {scorePercent}%
                                        </div>
                                        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#fff', marginTop: '12px', marginBottom: '16px' }}>
                                            {tier.title}
                                        </h2>
                                        <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 24px' }}>
                                            {tier.summary}
                                        </p>

                                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '18px 24px', textAlign: 'left' }}>
                                            <strong style={{ color: '#fff', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
                                                Recommended Strategic Priority:
                                            </strong>
                                            <p style={{ color: '#cbd5e1', margin: 0, fontSize: '14.5px', lineHeight: '1.6' }}>
                                                {tier.priority}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Next Step: Private Consultation Booking */}
                                    <div className="prominence_card" style={{ padding: '40px' }}>
                                        <div className="section_title centred" style={{ marginBottom: '28px' }}>
                                            <div className="tag_text">
                                                <h6>Confidential Review</h6>
                                            </div>
                                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>
                                                Review Your Score With a Prominence Partner
                                            </h3>
                                            <p style={{ color: '#64748b', fontSize: '15px', marginTop: '6px' }}>
                                                Book a confidential 30-minute advisory call. We will review your score breakdown, inspect your current Google Page 1 footprint, and outline how to achieve Tier 1 Sovereign Stature.
                                            </p>
                                        </div>

                                        {!consultationBooked ? (
                                            <form onSubmit={handleConsultationSubmit}>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>Full Name</label>
                                                        <input 
                                                            type="text" 
                                                            required 
                                                            value={leadName}
                                                            onChange={(e) => setLeadName(e.target.value)}
                                                            placeholder="e.g. Eleanor Vance" 
                                                            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }} 
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>Executive Email</label>
                                                        <input 
                                                            type="email" 
                                                            required 
                                                            value={leadEmail}
                                                            onChange={(e) => setLeadEmail(e.target.value)}
                                                            placeholder="e.g. eleanor@enterprise.com" 
                                                            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }} 
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>Executive Role</label>
                                                        <input 
                                                            type="text" 
                                                            required 
                                                            value={leadRole}
                                                            onChange={(e) => setLeadRole(e.target.value)}
                                                            placeholder="e.g. CEO, CHRO, Founder" 
                                                            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }} 
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>Organization / Firm</label>
                                                        <input 
                                                            type="text" 
                                                            value={leadCompany}
                                                            onChange={(e) => setLeadCompany(e.target.value)}
                                                            placeholder="e.g. Global Tech Partners" 
                                                            style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px' }} 
                                                        />
                                                    </div>
                                                    <div className="col-12 mt-4 text-center">
                                                        <button 
                                                            type="submit" 
                                                            className="btn_style_one" 
                                                            style={{ width: '100%' }}
                                                        >
                                                            Request Confidential Score Briefing ({scorePercent}% Stature)
                                                        </button>
                                                        <span style={{ display: 'block', marginTop: '14px', fontSize: '12px', color: '#94a3b8' }}>
                                                            <i className="fal fa-shield-alt" style={{ marginRight: '4px' }}></i> Strict NDA applies. Your information is never sold, shared, or publicized.
                                                        </span>
                                                    </div>
                                                </div>
                                            </form>
                                        ) : (
                                            <div className="prominence_card" style={{ padding: '32px', textAlign: 'center', borderLeft: '4px solid #10b981' }}>
                                                <div style={{ fontSize: '28px', color: '#10b981', marginBottom: '12px' }}>
                                                    <i className="fal fa-check-circle"></i>
                                                </div>
                                                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                                                    Briefing Request Received
                                                </h4>
                                                <p style={{ color: '#64748b', fontSize: '14.5px', margin: 0 }}>
                                                    Thank you, {leadName}. Our managing partner will review your {scorePercent}% evaluation and reach out directly at {leadEmail} to coordinate your private consultation.
                                                </p>
                                            </div>
                                        )}

                                        <div style={{ textAlign: 'center', marginTop: '24px' }}>
                                            <button 
                                                onClick={() => { setIsSubmitted(false); setConsultationBooked(false); }}
                                                style={{ background: 'none', border: 'none', color: '#64748b', fontWeight: '600', fontSize: '13.5px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                                            >
                                                <i className="fal fa-arrow-left" style={{ fontSize: '11px' }}></i> Retake Assessment
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </section>

            </Layout>
        </div>
    )
}
