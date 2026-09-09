'use client'
import React from 'react'

export default function Clients() {
    return (
        <section className="problem_section" style={{ padding: "var(--ep-section-py) 0", background: "#F7F5FC", borderTop: "1px solid #eaedf0", borderBottom: "1px solid #eaedf0" }}>
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Left Column: The Governance Paradox (Editorial Typography as a Design Element) */}
                    <div className="col-lg-7 pe-lg-5" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                            <span style={{
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "0.5px",
                                color: "#6D28D9",
                                fontFamily: "var(--primary-font)"
                            }}>
                                The Governance Paradox
                            </span>
                            <span style={{ flex: 1, maxWidth: "60px", height: "1px", backgroundColor: "#6D28D9", opacity: 0.5 }}></span>
                        </div>

                        <h2 style={{
                            fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                            fontSize: "clamp(26px, 4vw, 38px)",
                            fontWeight: "700",
                            color: "#0D0D14",
                            lineHeight: "1.22",
                            letterSpacing: "-0.6px",
                            marginBottom: "20px"
                        }}>
                            Your real-world leadership is in the top 5%.
                            <span style={{ display: "block", color: "#6D28D9", marginTop: "6px" }}>
                                Your public digital stature isn't in the top 50%.
                            </span>
                        </h2>

                        <p style={{
                            fontSize: "16.5px",
                            color: "#4B5563",
                            lineHeight: "28px",
                            marginBottom: "32px",
                            maxWidth: "600px"
                        }}>
                            When search committees, capital partners, and corporate nominating chairs evaluate your credentials before an appointment, Google is your first interview. A fragmented, outdated, or absent digital footprint creates an unvetted perception risk — regardless of your operational track record. Prominence permanently closes this authority deficit.
                        </p>

                        {/* Institutional Credential Grid (Editorial 2-Column Matrix) */}
                        <div>
                            <div style={{
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "0.5px",
                                color: "#4B5563",
                                marginBottom: "14px",
                                fontFamily: "var(--primary-font)"
                            }}>
                                Institutional Mandates Represented
                            </div>

                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                gap: "12px",
                                maxWidth: "580px"
                            }}>
                                {[
                                    { sector: "Fortune 500 Enterprises", tier: "C-Suite Officers & SVPs", icon: "fa-solid fa-building-columns", color: "#6D28D9", bg: "rgba(109, 40, 217, 0.08)" },
                                    { sector: "Private Equity Portfolios", tier: "Chairs & Operating Partners", icon: "fa-solid fa-chart-line", color: "#059669", bg: "rgba(5, 150, 105, 0.08)" },
                                    { sector: "High-Growth Scale-Ups", tier: "Enterprise Founders & CEOs", icon: "fa-solid fa-rocket", color: "#EC4899", bg: "rgba(236, 72, 153, 0.08)" },
                                    { sector: "Management Consultancies", tier: "Senior Partners & Directors", icon: "fa-solid fa-briefcase", color: "#2563EB", bg: "rgba(37, 99, 235, 0.08)" }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            padding: "14px 16px",
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            border: "1px solid #eaedf0",
                                            boxShadow: "0 4px 12px rgba(13, 13, 20, 0.03)",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        <div style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "8px",
                                            backgroundColor: item.bg,
                                            color: item.color,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "15px",
                                            flexShrink: 0
                                        }}>
                                            <i className={item.icon}></i>
                                        </div>
                                        <div>
                                            <div style={{
                                                fontSize: "13.5px",
                                                fontWeight: "700",
                                                color: "#0D0D14",
                                                fontFamily: "var(--primary-font)",
                                                lineHeight: "1.3"
                                            }}>
                                                {item.sector}
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#4B5563", marginTop: "2px" }}>
                                                {item.tier}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dimensional Executive Stature Diagnostic Card with Image */}
                    <div className="col-lg-5 mt-5 mt-lg-0" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="550">
                        <div style={{ position: "relative", maxWidth: "480px", margin: "0 auto" }}>
                            
                            {/* Floating Reassurance Badge */}
                            <div
                                className="prominence_floating_badge"
                                style={{
                                    position: "absolute",
                                    top: "-14px",
                                    right: "18px",
                                    fontSize: "11.5px",
                                    fontWeight: "700",
                                    fontFamily: "var(--primary-font)",
                                    color: "#0D0D14",
                                    padding: "8px 16px",
                                    background: "#ffffff",
                                    borderRadius: "30px",
                                    boxShadow: "0 8px 24px rgba(13, 13, 20, 0.12)",
                                    zIndex: 4,
                                    border: "1px solid #eaedf0",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <i className="fa-solid fa-shield-halved" style={{ color: "#8B5CF6" }}></i>
                                <span>Confidential Audit</span>
                            </div>

                            {/* Main Diagnostic Card with Image & Layered Depth */}
                            <div
                                className="prominence_depth_card"
                                style={{
                                    padding: "0",
                                    overflow: "hidden",
                                    borderTop: "3px solid #8B5CF6",
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    border: "1px solid #eaedf0",
                                    boxShadow: "0 16px 36px rgba(13, 13, 20, 0.08)"
                                }}
                            >
                                {/* Executive Visual Header */}
                                <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
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
                                    <div style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(180deg, rgba(13, 13, 20, 0.1) 0%, rgba(13, 13, 20, 0.55) 100%)"
                                    }} />
                                    
                                    {/* Overlay Tags over Image */}
                                    <div style={{
                                        position: "absolute",
                                        bottom: "12px",
                                        left: "18px",
                                        right: "18px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <span style={{
                                            fontSize: "10px",
                                            fontWeight: "700",
                                            letterSpacing: "0.8px",
                                            textTransform: "uppercase",
                                            color: "#ffffff",
                                            background: "rgba(13, 13, 20, 0.7)",
                                            backdropFilter: "blur(6px)",
                                            padding: "4px 10px",
                                            borderRadius: "6px",
                                            border: "1px solid rgba(255, 255, 255, 0.2)"
                                        }}>
                                            Verified Entity Diagnostic
                                        </span>
                                        <span style={{
                                            fontSize: "10.5px",
                                            fontWeight: "700",
                                            color: "#10B981",
                                            background: "rgba(16, 185, 129, 0.2)",
                                            backdropFilter: "blur(6px)",
                                            padding: "4px 10px",
                                            borderRadius: "6px",
                                            border: "1px solid rgba(16, 185, 129, 0.3)"
                                        }}>
                                            Top 1% Benchmark
                                        </span>
                                    </div>
                                </div>

                                {/* Diagnostic Metrics Body */}
                                <div style={{ padding: "26px 28px" }}>
                                    <div style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "16px", marginBottom: "20px" }}>
                                        <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#6B7280", fontFamily: "var(--primary-font)" }}>
                                            Executive Stature Audit
                                        </div>
                                        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginTop: "4px" }}>
                                            <span style={{ fontSize: "32px", fontWeight: "700", color: "#0D0D14", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", letterSpacing: "-0.5px" }}>
                                                -48%
                                            </span>
                                            <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#b91c1c", backgroundColor: "#fef2f2", padding: "2px 8px", borderRadius: "6px" }}>
                                                Perception Deficit
                                            </span>
                                        </div>
                                        <p style={{ fontSize: "12px", color: "#6B7280", margin: "5px 0 0", lineHeight: "18px" }}>
                                            The quantifiable gap between enterprise achievement and external public discoverability.
                                        </p>
                                    </div>

                                    {/* Layered Stature Progress Gauges */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "20px" }}>
                                        {/* 1. Real World Track Record */}
                                        <div>
                                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", marginBottom: "5px", fontFamily: "var(--primary-font)" }}>
                                                <span style={{ color: "#0D0D14" }}>Real-World Leadership Track Record</span>
                                                <span style={{ color: "#0D0D14" }}>95th %ile</span>
                                            </div>
                                            <div style={{ height: "6px", backgroundColor: "#f1f5f9", borderRadius: "4px", overflow: "hidden" }}>
                                                <div style={{ width: "95%", height: "100%", backgroundColor: "#0D0D14", borderRadius: "4px" }}></div>
                                            </div>
                                            <div style={{ fontSize: "11px", color: "#6B7280", marginTop: "2px" }}>
                                                P&amp;L ownership, enterprise scale, M&amp;A execution
                                            </div>
                                        </div>

                                        {/* 2. Public Digital Stature (Before) */}
                                        <div>
                                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", marginBottom: "5px", fontFamily: "var(--primary-font)" }}>
                                                <span style={{ color: "#6B7280" }}>Public Digital Presence (Before)</span>
                                                <span style={{ color: "#b91c1c" }}>42nd %ile</span>
                                            </div>
                                            <div style={{ height: "6px", backgroundColor: "#f1f5f9", borderRadius: "4px", overflow: "hidden" }}>
                                                <div style={{ width: "42%", height: "100%", backgroundColor: "#cbd5e1", borderRadius: "4px" }}></div>
                                            </div>
                                            <div style={{ fontSize: "11px", color: "#6B7280", marginTop: "2px" }}>
                                                Fragmented Google results, dormant profile, unvetted
                                            </div>
                                        </div>

                                        {/* 3. Post-Prominence Sprint */}
                                        <div style={{
                                            padding: "12px 14px",
                                            backgroundColor: "#F7F5FC",
                                            borderRadius: "10px",
                                            border: "1px solid #eaedf0"
                                        }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", marginBottom: "5px", fontFamily: "var(--primary-font)" }}>
                                                <span style={{ color: "#0D0D14" }}>Prominence Sovereign Architecture</span>
                                                <span style={{ color: "#6D28D9" }}>98th %ile</span>
                                            </div>
                                            <div style={{ height: "6px", backgroundColor: "#eaedf0", borderRadius: "4px", overflow: "hidden" }}>
                                                <div style={{ width: "98%", height: "100%", background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)", borderRadius: "4px" }}></div>
                                            </div>
                                            <div style={{ fontSize: "11.5px", color: "#6D28D9", fontWeight: "700", marginTop: "4px" }}>
                                                Google Page 1 #1, Knowledge Graph, Inbound Inquiries
                                            </div>
                                        </div>
                                    </div>

                                    {/* Outcome Reassurance Tag */}
                                    <div style={{
                                        fontSize: "12px",
                                        color: "#4B5563",
                                        lineHeight: "1.5",
                                        paddingTop: "12px",
                                        borderTop: "1px solid #f1f5f9",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}>
                                        <i className="fa-solid fa-circle-check" style={{ color: "#16a34a", fontSize: "14px", flexShrink: 0 }}></i>
                                        <span>Closing this gap unlocks the asymmetric board directorships and advisory invitations your career warrants.</span>
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

