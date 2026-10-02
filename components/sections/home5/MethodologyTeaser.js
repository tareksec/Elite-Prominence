'use client'

import React from 'react'
import Link from 'next/link'
import { StaggerText } from '@/components/ui/stagger-text'

const PHASES = [
    {
        phase: "Phase I: Forensic Foundation",
        timeline: "Month 1",
        stages: [
            {
                num: "01",
                name: "Discover",
                badge: "Forensic Audit",
                icon: "fa-solid fa-magnifying-glass-chart",
                desc: "Forensic audit of your Google Page 1 footprint, namesake conflicts, and strategic narrative extraction."
            },
            {
                num: "02",
                name: "Position",
                badge: "Boardroom Framing",
                icon: "fa-solid fa-chess",
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
                icon: "fa-solid fa-cubes-stacked",
                desc: "Bespoke Next.js Executive Digital HQ engineering and structured Google Knowledge Graph entity schema deployment."
            },
            {
                num: "04",
                name: "Publish",
                badge: "Ghostwriting",
                icon: "fa-solid fa-feather-pointed",
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
                icon: "fa-solid fa-bullhorn",
                desc: "Securing tier-1 executive podcast appearances, keynote invitations, and strategic press syndication."
            },
            {
                num: "06",
                name: "Measure",
                badge: "Entity Defense",
                icon: "fa-solid fa-shield-halved",
                desc: "Continuous Google Page 1 monitoring, automated namesake defense, and inbound board advisory inquiry tracking."
            }
        ]
    }
]

export default function MethodologyTeaser() {
    return (
        <section
            style={{
                backgroundColor: "#FAF8F5",
                padding: "110px 0",
                borderBottom: "1.5px solid #E5E7EB",
                fontFamily: "var(--primary-font, -apple-system, sans-serif)",
                position: "relative"
            }}
        >
            <div className="container">
                {/* Section Header: Editorial Split */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        flexWrap: "wrap",
                        gap: "24px",
                        marginBottom: "50px"
                    }}
                >
                    <div>
                        <div style={{ marginBottom: "14px" }}>
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "6px 16px",
                                    borderRadius: "9999px",
                                    backgroundColor: "#EDE9FE",
                                    color: "#6D28D9",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    border: "1.5px solid rgba(109, 40, 217, 0.2)"
                                }}
                            >
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7C3AED" }} />
                                The Prominence Protocol
                            </span>
                        </div>
                        <h2
                            style={{
                                fontSize: "clamp(30px, 4vw, 44px)",
                                fontWeight: "800",
                                color: "#0F1117",
                                letterSpacing: "-0.8px",
                                lineHeight: "1.16",
                                margin: 0
                            }}
                        >
                            Our 6-Stage Sovereign Architecture
                        </h2>
                    </div>
                    <div>
                        <p
                            style={{
                                color: "#4B5563",
                                fontSize: "16.5px",
                                lineHeight: "1.7",
                                maxWidth: "520px",
                                margin: 0
                            }}
                        >
                            A disciplined, turnkey methodology engineered to establish permanent executive stature with under 30 minutes of client time per month.
                        </p>
                    </div>
                </div>

                {/* 3-Phase Roadmap Grid */}
                <div className="row g-4 mb-4">
                    {PHASES.map((block, idx) => (
                        <div key={idx} className="col-lg-4 col-md-12">
                            <div
                                className="neo-card"
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    border: "2px solid #0F1117",
                                    borderRadius: "26px",
                                    padding: "36px 30px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: "6px 6px 0px #0F1117",
                                    position: "relative"
                                }}
                            >
                                {/* Phase Header */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "28px",
                                        paddingBottom: "18px",
                                        borderBottom: "1.5px solid #F4F4F5"
                                    }}
                                >
                                    <span style={{ fontSize: "14px", fontWeight: "800", color: "#0F1117" }}>
                                        {block.phase}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "11px",
                                            fontWeight: "800",
                                            padding: "4px 12px",
                                            backgroundColor: "#EDE9FE",
                                            color: "#6D28D9",
                                            borderRadius: "9999px",
                                            border: "1px solid rgba(124, 58, 237, 0.2)"
                                        }}
                                    >
                                        {block.timeline}
                                    </span>
                                </div>

                                {/* Stages */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "26px", flexGrow: 1 }}>
                                    {block.stages.map((stage) => (
                                        <div key={stage.num} style={{ position: "relative", paddingLeft: "52px" }}>
                                            {/* Stage Icon */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: "0px",
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "12px",
                                                    backgroundColor: "#0F1117",
                                                    color: "#C084FC",
                                                    fontSize: "15px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    boxShadow: "0 4px 12px rgba(15, 23, 42, 0.15)"
                                                }}
                                            >
                                                <i className={stage.icon} />
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                                                <span style={{ fontSize: "12px", fontWeight: "800", color: "#7C3AED" }}>
                                                    {stage.num}.
                                                </span>
                                                <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#0F1117", margin: 0 }}>
                                                    {stage.name}
                                                </h3>
                                                <span
                                                    style={{
                                                        fontSize: "10.5px",
                                                        fontWeight: "700",
                                                        color: "#52525B",
                                                        backgroundColor: "#FAF8F5",
                                                        padding: "2px 8px",
                                                        borderRadius: "6px",
                                                        border: "1px solid #E5E7EB"
                                                    }}
                                                >
                                                    {stage.badge}
                                                </span>
                                            </div>

                                            <p style={{ color: "#52525B", fontSize: "13.5px", lineHeight: "1.6", margin: 0 }}>
                                                {stage.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: "44px" }}>
                    <Link href="/how-it-works" className="neo-btn-primary" style={{ padding: "14px 30px" }}>
                        Explore Full Methodology Protocol <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
