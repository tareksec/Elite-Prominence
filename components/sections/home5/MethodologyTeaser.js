'use client'
import React from 'react'
import Link from 'next/link'

export default function MethodologyTeaser() {
    const steps = [
        { num: '01', title: 'Discover', desc: 'Forensic audit of your Google Page 1 footprint, namesake conflicts, and executive narrative extraction.' },
        { num: '02', title: 'Position', desc: 'Crafting your leadership thesis, boardroom credentials, and strict corporate PR compliance guardrails.' },
        { num: '03', title: 'Build', desc: 'Bespoke Next.js Executive Digital HQ engineering and structured Google Knowledge Graph schema deployment.' },
        { num: '04', title: 'Publish', desc: 'Senior editorial ghostwriting authored in your authentic voice, requiring under 20 minutes monthly client briefing.' },
        { num: '05', title: 'Amplify', desc: 'Securing top-tier business podcast appearances, conference keynote stages, and media citations.' },
        { num: '06', title: 'Measure', desc: 'Continuous Google Page 1 monitoring, entity defense, and inbound board/advisory inquiry tracking.' },
    ]

    return (
        <section className="pt_100 pb_90" style={{ background: '#0d1b2a', color: '#fff' }}>
            <div className="container">
                <div className="section_title centred" style={{ maxWidth: '780px', margin: '0 auto 60px' }}>
                    <span style={{ color: '#d29d2b', fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                        The Prominence Protocol
                    </span>
                    <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#fff', marginTop: '12px' }}>
                        Our 6-Stage Sovereign Architecture
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '16px', marginTop: '14px', lineHeight: '1.7' }}>
                        A systematic, turnkey methodology engineered to establish permanent executive stature with less than 30 minutes of client time per month.
                    </p>
                </div>

                <div className="row">
                    {steps.map((step) => (
                        <div key={step.num} className="col-lg-4 col-md-6 mb_30">
                            <div style={{ 
                                background: 'rgba(255, 255, 255, 0.04)', 
                                border: '1px solid rgba(255, 255, 255, 0.1)', 
                                borderRadius: '12px', 
                                padding: '32px 28px', 
                                height: '100%',
                                transition: 'all 0.25s ease'
                            }}>
                                <span style={{ fontSize: '32px', fontWeight: '900', color: '#2460e2', lineHeight: '1', display: 'block', marginBottom: '14px' }}>
                                    {step.num}
                                </span>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>
                                    {step.title}
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '40px' }}>
                    <Link href="/how-it-works" className="btn_style_one" style={{ padding: '14px 36px', fontSize: '15px' }}>
                        Explore the Full Methodology Protocol →
                    </Link>
                </div>
            </div>
        </section>
    )
}
