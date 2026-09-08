'use client'
import React from 'react'
import Link from 'next/link'

const PHASES = [
    {
        phase: "Phase I: Forensic Foundation",
        timeline: "Month 1",
        stages: [
            {
                num: "01",
                name: "Discover",
                badge: "Forensic Audit",
                desc: "Forensic audit of your Google Page 1 footprint, namesake conflicts, and strategic narrative extraction."
            },
            {
                num: "02",
                name: "Position",
                badge: "Boardroom Framing",
                desc: "Crafting your sovereign leadership thesis, governance credentials, and strict corporate PR compliance guardrails."
            }
        ]
    },
    {
        phase: "Phase II: Sovereign Asset Build",
        timeline: "Month 2",
        stages: [
            {
                num: "03",
                name: "Build",
                badge: "Digital HQ",
                desc: "Bespoke Next.js Executive Digital HQ engineering and structured Google Knowledge Graph entity schema deployment."
            },
            {
                num: "04",
                name: "Publish",
                badge: "Ghostwriting",
                desc: "Senior editorial ghostwriting authored in your authentic voice, requiring under 20 minutes monthly executive briefing."
            }
        ]
    },
    {
        phase: "Phase III: Dominance & Governance",
        timeline: "Month 3 & Ongoing",
        stages: [
            {
                num: "05",
                name: "Amplify",
                badge: "Media Stature",
                desc: "Securing tier-1 executive podcast appearances, keynote invitations, and strategic press syndication."
            },
            {
                num: "06",
                name: "Measure",
                badge: "Entity Defense",
                desc: "Continuous Google Page 1 monitoring, automated namesake defense, and inbound board advisory inquiry tracking."
            }
        ]
    }
]

export default function MethodologyTeaser() {
    return (
        <section className="prominence_section" style={{ background: '#F7F5FC', borderTop: '1px solid #eaedf0', borderBottom: '1px solid #eaedf0', fontFamily: 'var(--primary-font)' }}>
            <div className="container">
                {/* Section Header: Editorial Split */}
                <div className="prominence_header_split">
                    <div>
                        <div style={{ marginBottom: '12px' }}>
                            <span className="prominence_tracker">
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6' }}></span>
                                The Prominence Protocol
                            </span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 36px)', fontWeight: '700', color: '#0D0D14', letterSpacing: '-0.5px', lineHeight: '1.24', margin: 0, fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                            Our 6-Stage Sovereign Architecture
                        </h2>
                    </div>
                    <div>
                        <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '27px', maxWidth: '520px', margin: 0 }}>
                            A disciplined, turnkey methodology engineered to establish permanent executive stature with under 30 minutes of client time per month.
                        </p>
                    </div>
                </div>

                {/* 3-Phase Roadmap Grid */}
                <div className="row g-4 mb-4">
                    {PHASES.map((block, idx) => (
                        <div key={idx} className="col-lg-4 col-md-12">
                            <div className="prominence_depth_card" style={{
                                background: '#ffffff',
                                border: '1px solid #eaedf0',
                                borderTop: '3px solid #8B5CF6',
                                borderRadius: '14px',
                                padding: '34px 28px',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative'
                            }}>
                                {/* Phase Header */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #eaedf0' }}>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#0D0D14', letterSpacing: '0.5px' }}>
                                        {block.phase}
                                    </span>
                                    <span className="prominence_badge prominence_badge_gold" style={{ fontSize: '11px', padding: '3px 10px' }}>
                                        {block.timeline}
                                    </span>
                                </div>

                                {/* Stages in this Phase */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flexGrow: 1 }}>
                                    {block.stages.map((stage) => (
                                        <div key={stage.num} style={{ position: 'relative', paddingLeft: '44px' }}>
                                            {/* Stage Number Bullet */}
                                            <div style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '2px',
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '6px',
                                                background: '#0D0D14',
                                                color: '#8B5CF6',
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontFamily: 'var(--primary-font)',
                                                border: '1px solid rgba(139, 92, 246, 0.25)'
                                            }}>
                                                {stage.num}
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0D0D14', margin: 0, fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                                    {stage.name}
                                                </h3>
                                                <span style={{ fontSize: '10.5px', fontWeight: '600', color: '#6B7280', background: '#F7F5FC', padding: '2px 8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                                                    {stage.badge}
                                                </span>
                                            </div>

                                            <p style={{ color: '#6B7280', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>
                                                {stage.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '40px' }}>
                    <Link href="/how-it-works" className="btn_style_one btn_md">
                        Explore the Full Methodology Protocol <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}
