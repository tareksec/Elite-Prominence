'use client'
import React from 'react'
import Link from 'next/link'

export default function MethodologyTeaser() {
    const steps = [
        { num: '01', title: 'Discover', desc: 'Forensic audit of your Google Page 1 footprint, namesake conflicts, and narrative extraction.' },
        { num: '02', title: 'Position', desc: 'Crafting your leadership thesis, boardroom credentials, and strict corporate PR compliance guardrails.' },
        { num: '03', title: 'Build', desc: 'Bespoke Next.js Executive Digital HQ engineering and structured Google Knowledge Graph schema deployment.' },
        { num: '04', title: 'Publish', desc: 'Senior editorial ghostwriting authored in your authentic voice, requiring under 20 minutes monthly briefing.' },
        { num: '05', title: 'Amplify', desc: 'Securing top-tier business podcast appearances, conference keynote stages, and media citations.' },
        { num: '06', title: 'Measure', desc: 'Continuous Google Page 1 monitoring, entity defense, and inbound board/advisory inquiry tracking.' },
    ]

    return (
        <section className="pt_100 pb_90" style={{ background: '#f8fafd', borderTop: '1px solid #edf2f7', borderBottom: '1px solid #edf2f7' }}>
            <div className="container">
                <div className="section_title centred" style={{ maxWidth: '780px', margin: '0 auto 50px' }}>
                    <div className="tag_text">
                        <h6>The Prominence Protocol</h6>
                    </div>
                    <h2>Our 6-Stage Sovereign Architecture</h2>
                    <p style={{ color: '#59606a', fontSize: '17px', marginTop: '14px', lineHeight: '28px' }}>
                        A systematic, turnkey methodology engineered to establish permanent executive stature with less than 30 minutes of client time per month.
                    </p>
                </div>

                <div className="row">
                    {steps.map((step) => (
                        <div key={step.num} className="col-lg-4 col-md-6 mb_30">
                            <div style={{ 
                                background: '#ffffff', 
                                border: '1px solid #e2e8f0', 
                                borderRadius: '12px', 
                                padding: '32px 28px', 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                            }}>
                                <span style={{ fontSize: '13px', fontWeight: '700', color: '#94a3b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--primary-font)' }}>
                                    Stage {step.num}
                                </span>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1013', marginBottom: '10px' }}>
                                    {step.title}
                                </h3>
                                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '22px', margin: 0 }}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '30px' }}>
                    <Link href="/how-it-works" className="btn_style_one">
                        Explore the Full Methodology Protocol
                    </Link>
                </div>
            </div>
        </section>
    )
}
