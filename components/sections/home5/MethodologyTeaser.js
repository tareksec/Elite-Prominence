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
        <section className="pt_100 pb_90" style={{ background: '#fafbfc', borderTop: '1px solid #eaedf0', borderBottom: '1px solid #eaedf0', fontFamily: 'var(--primary-font)' }}>
            <div className="container">
                <div className="section_title centred" style={{ maxWidth: '780px', margin: '0 auto 50px' }}>
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
                            The Prominence Protocol
                        </h6>
                    </div>
                    <h2 style={{ fontSize: '38px', fontWeight: '700', color: '#0f1013', letterSpacing: '-0.5px', lineHeight: '1.25' }}>
                        Our 6-Stage Sovereign Architecture
                    </h2>
                    <p style={{ color: '#59606a', fontSize: '16.5px', marginTop: '14px', lineHeight: '1.7', maxWidth: '640px', margin: '14px auto 0' }}>
                        A disciplined, turnkey methodology engineered to establish permanent executive stature with under 30 minutes of client time per month.
                    </p>
                </div>

                {/* 3-Phase Roadmap Grid */}
                <div className="row g-4 mb-4">
                    {PHASES.map((block, idx) => (
                        <div key={idx} className="col-lg-4 col-md-12">
                            <div style={{
                                background: '#ffffff',
                                border: '1px solid #eaedf0',
                                borderRadius: '14px',
                                padding: '32px 26px',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 4px 18px rgba(15, 16, 19, 0.03)',
                                position: 'relative'
                            }}>
                                {/* Phase Header */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #eaedf0' }}>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f1013', letterSpacing: '0.5px' }}>
                                        {block.phase}
                                    </span>
                                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#b89058', background: '#faf6f0', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(184, 144, 88, 0.3)' }}>
                                        {block.timeline}
                                    </span>
                                </div>

                                {/* Stages in this Phase */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', flexGrow: 1 }}>
                                    {block.stages.map((stage) => (
                                        <div key={stage.num} style={{ position: 'relative', paddingLeft: '44px' }}>
                                            {/* Stage Number Bullet */}
                                            <div style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '2px',
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '8px',
                                                background: '#0f1013',
                                                color: '#ffffff',
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontFamily: 'var(--primary-font)'
                                            }}>
                                                {stage.num}
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f1013', margin: 0 }}>
                                                    {stage.name}
                                                </h3>
                                                <span style={{ fontSize: '10.5px', fontWeight: '600', color: '#64748b', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                                                    {stage.badge}
                                                </span>
                                            </div>

                                            <p style={{ color: '#59606a', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>
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
                    <Link href="/how-it-works" className="btn_style_one">
                        Explore the Full Methodology Protocol <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}
