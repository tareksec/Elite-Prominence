'use client'

import React from 'react'
import { StaggerText } from '@/components/ui/stagger-text'

export default function Clients() {
    return (
        <section
            className="problem_section"
            style={{
                padding: "110px 0",
                backgroundColor: "#FAF8F5",
                borderBottom: "1.5px solid #E5E7EB",
                fontFamily: "var(--primary-font, -apple-system, sans-serif)"
            }}
        >
            <div className="container">
                <div className="row align-items-center g-5">
                    
                    {/* Left Column: The Governance Paradox */}
                    <div className="col-lg-7 pe-lg-4" data-aos="fade-right" data-aos-duration="500">
                        {/* Pill Eyebrow */}
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "9999px", backgroundColor: "#EDE9FE", border: "1.5px solid rgba(109, 40, 217, 0.2)", marginBottom: "20px" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7C3AED" }} />
                            <span style={{ fontSize: "12px", fontWeight: "700", color: "#6D28D9", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                The Governance Paradox
                            </span>
                        </div>

                        <h2
                            style={{
                                fontSize: "clamp(28px, 3.8vw, 44px)",
                                fontWeight: "800",
                                color: "#0F1117",
                                lineHeight: "1.16",
                                letterSpacing: "-0.8px",
                                marginBottom: "22px"
                            }}
                        >
                            Your real-world leadership is in the top 5%.
                            <span
                                style={{
                                    display: "block",
                                    color: "#7C3AED",
                                    marginTop: "6px"
                                }}
                            >
                                Your public digital stature isn't in the top 50%.
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: "17px",
                                color: "#4B5563",
                                lineHeight: "1.7",
                                marginBottom: "36px",
                                maxWidth: "620px"
                            }}
                        >
                            When search committees, capital partners, and corporate nominating chairs evaluate your credentials before an appointment, Google is your first interview. A fragmented, outdated, or absent digital footprint creates an unvetted perception risk — regardless of your operational track record. Prominence permanently closes this authority deficit.
                        </p>

                        {/* Institutional Credential Grid (Editorial 2-Column Neo Cards) */}
                        <div>
                            <div
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "800",
                                    letterSpacing: "0.8px",
                                    color: "#71717A",
                                    textTransform: "uppercase",
                                    marginBottom: "16px"
                                }}
                            >
                                Institutional Mandates Represented
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                    gap: "14px",
                                    maxWidth: "600px"
                                }}
                            >
                                {[
                                    { sector: "Fortune 500 Enterprises", tier: "C-Suite Officers & SVPs", icon: "fa-solid fa-building-columns", color: "#7C3AED", bg: "#F5F3FF" },
                                    { sector: "Private Equity Portfolios", tier: "Chairs & Operating Partners", icon: "fa-solid fa-chart-line", color: "#059669", bg: "#ECFDF5" },
                                    { sector: "High-Growth Scale-Ups", tier: "Enterprise Founders & CEOs", icon: "fa-solid fa-rocket", color: "#DB2777", bg: "#FDF2F8" },
                                    { sector: "Management Consultancies", tier: "Senior Partners & Directors", icon: "fa-solid fa-briefcase", color: "#2563EB", bg: "#EFF6FF" }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="neo-card"
                                        style={{
                                            padding: "16px 18px",
                                            backgroundColor: "#FFFFFF",
                                            borderRadius: "18px",
                                            border: "1.5px solid #E5E7EB",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "14px"
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "42px",
                                                height: "42px",
                                                borderRadius: "12px",
                                                backgroundColor: item.bg,
                                                color: item.color,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "16px",
                                                border: `1.5px solid ${item.bg}`,
                                                flexShrink: 0
                                            }}
                                        >
                                            <i className={item.icon} />
                                        </div>
                                        <div>
                                            <div
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "800",
                                                    color: "#0F1117",
                                                    lineHeight: "1.25"
                                                }}
                                            >
                                                {item.sector}
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "3px" }}>
                                                {item.tier}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Neo-Brutalist Stature Diagnostic Card */}
                    <div className="col-lg-5" data-aos="fade-left" data-aos-duration="550">
                        <div style={{ position: "relative", maxWidth: "460px", margin: "0 auto" }}>
                            
                            {/* Floating Badge */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-16px",
                                    right: "20px",
                                    fontSize: "12px",
                                    fontWeight: "800",
                                    color: "#0F1117",
                                    padding: "8px 18px",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "9999px",
                                    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.1)",
                                    zIndex: 5,
                                    border: "1.5px solid #18181B",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <i className="fa-solid fa-shield-halved" style={{ color: "#7C3AED" }} />
                                <span>Confidential Audit</span>
                            </div>

                            {/* Main Card with Neo Shadow Offset */}
                            <div
                                className="neo-card"
                                style={{
                                    padding: "0",
                                    overflow: "hidden",
                                    border: "2px solid #0F1117",
                                    borderRadius: "28px",
                                    backgroundColor: "#FFFFFF",
                                    boxShadow: "6px 6px 0px #0F1117"
                                }}
                            >
                                {/* Visual Header */}
                                <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
                                    <img
                                        src="/assets/images/elite/executive_presence_platform.jpg"
                                        alt="Executive Stature Audit & Digital Presence Platform"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center 20%",
                                            display: "block"
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(180deg, rgba(15, 17, 23, 0.1) 0%, rgba(15, 17, 23, 0.7) 100%)"
                                        }}
                                    />
                                    
                                    {/* Overlay Tags */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "14px",
                                            left: "20px",
                                            right: "20px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "10.5px",
                                                fontWeight: "800",
                                                letterSpacing: "0.8px",
                                                textTransform: "uppercase",
                                                color: "#FFFFFF",
                                                backgroundColor: "rgba(15, 17, 23, 0.8)",
                                                backdropFilter: "blur(6px)",
                                                padding: "5px 12px",
                                                borderRadius: "8px",
                                                border: "1px solid rgba(255, 255, 255, 0.2)"
                                            }}
                                        >
                                            Entity Diagnostic
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "11px",
                                                fontWeight: "800",
                                                color: "#10B981",
                                                backgroundColor: "#FFFFFF",
                                                padding: "5px 12px",
                                                borderRadius: "8px",
                                                border: "1.5px solid #10B981"
                                            }}
                                        >
                                            Top 1% Benchmark
                                        </span>
                                    </div>
                                </div>

                                {/* Metrics Content */}
                                <div style={{ padding: "26px 28px" }}>
                                    <div style={{ borderBottom: "1.5px solid #F4F4F5", paddingBottom: "18px", marginBottom: "20px" }}>
                                        <div style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", color: "#71717A" }}>
                                            Executive Stature Audit
                                        </div>
                                        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginTop: "6px" }}>
                                            <span style={{ fontSize: "36px", fontWeight: "800", color: "#0F1117", letterSpacing: "-1px" }}>
                                                -48%
                                            </span>
                                            <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#DC2626", backgroundColor: "#FEF2F2", padding: "3px 10px", borderRadius: "9999px", border: "1px solid rgba(220, 38, 38, 0.2)" }}>
                                                Perception Deficit
                                            </span>
                                        </div>
                                        <p style={{ fontSize: "13px", color: "#6B7280", margin: "6px 0 0", lineHeight: "1.5" }}>
                                            The quantifiable gap between enterprise achievement and external public discoverability.
                                        </p>
                                    </div>

                                    {/* Gauges */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "22px" }}>
                                        {/* 1. Track Record */}
                                        <div>
                                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", fontWeight: "700", marginBottom: "6px" }}>
                                                <span style={{ color: "#0F1117" }}>Real-World Leadership Track Record</span>
                                                <span style={{ color: "#0F1117", fontWeight: "800" }}>95th %ile</span>
                                            </div>
                                            <div style={{ height: "7px", backgroundColor: "#F4F4F5", borderRadius: "9999px", overflow: "hidden" }}>
                                                <div style={{ width: "95%", height: "100%", backgroundColor: "#0F1117", borderRadius: "9999px" }} />
                                            </div>
                                        </div>

                                        {/* 2. Public Presence (Before) */}
                                        <div>
                                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", fontWeight: "700", marginBottom: "6px" }}>
                                                <span style={{ color: "#71717A" }}>Public Digital Presence (Before)</span>
                                                <span style={{ color: "#DC2626", fontWeight: "800" }}>42nd %ile</span>
                                            </div>
                                            <div style={{ height: "7px", backgroundColor: "#F4F4F5", borderRadius: "9999px", overflow: "hidden" }}>
                                                <div style={{ width: "42%", height: "100%", backgroundColor: "#CBD5E1", borderRadius: "9999px" }} />
                                            </div>
                                        </div>

                                        {/* 3. Post-Prominence */}
                                        <div
                                            style={{
                                                padding: "14px 16px",
                                                backgroundColor: "#F5F3FF",
                                                borderRadius: "14px",
                                                border: "1.5px solid rgba(124, 58, 237, 0.2)"
                                            }}
                                        >
                                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", fontWeight: "800", marginBottom: "6px" }}>
                                                <span style={{ color: "#6D28D9" }}>Prominence Sovereign Architecture</span>
                                                <span style={{ color: "#6D28D9" }}>98th %ile</span>
                                            </div>
                                            <div style={{ height: "7px", backgroundColor: "rgba(124, 58, 237, 0.15)", borderRadius: "9999px", overflow: "hidden" }}>
                                                <div style={{ width: "98%", height: "100%", background: "linear-gradient(90deg, #7C3AED 0%, #EC4899 100%)", borderRadius: "9999px" }} />
                                            </div>
                                            <div style={{ fontSize: "11.5px", color: "#6D28D9", fontWeight: "700", marginTop: "6px" }}>
                                                Google Page 1 #1, Knowledge Graph, Inbound Inquiries
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Guarantee */}
                                    <div
                                        style={{
                                            fontSize: "12.5px",
                                            color: "#4B5563",
                                            lineHeight: "1.5",
                                            paddingTop: "14px",
                                            borderTop: "1.5px solid #F4F4F5",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px"
                                        }}
                                    >
                                        <i className="fa-solid fa-circle-check" style={{ color: "#16A34A", fontSize: "15px", flexShrink: 0 }} />
                                        <span>Closing this deficit unlocks the asymmetric board directorships your career warrants.</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
