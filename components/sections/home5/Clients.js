'use client'
import React from 'react'

export default function Clients() {
    return (
        <section className="problem_section" style={{ padding: "var(--ep-section-py) 0", background: "#f8fafc", borderTop: "1px solid #eaedf0", borderBottom: "1px solid #eaedf0" }}>
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Left Column: The Governance Paradox (Editorial Typography as a Design Element) */}
                    <div className="col-lg-7 pe-lg-5" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                            <span style={{
                                fontSize: "11px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                letterSpacing: "1.4px",
                                color: "#b89058",
                                fontFamily: "var(--primary-font)"
                            }}>
                                The Governance Paradox
                            </span>
                            <span style={{ flex: 1, maxWidth: "60px", height: "1px", backgroundColor: "#b89058", opacity: 0.5 }}></span>
                        </div>

                        <h2 style={{
                            fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                            fontSize: "clamp(26px, 4vw, 38px)",
                            fontWeight: "700",
                            color: "#0f1013",
                            lineHeight: "1.22",
                            letterSpacing: "-0.6px",
                            marginBottom: "20px"
                        }}>
                            Your real-world leadership is in the top 5%.
                            <span style={{ display: "block", color: "#b89058", marginTop: "6px" }}>
                                Your public digital stature isn't in the top 50%.
                            </span>
                        </h2>

                        <p style={{
                            fontSize: "16.5px",
                            color: "#59606a",
                            lineHeight: "28px",
                            marginBottom: "32px",
                            maxWidth: "600px"
                        }}>
                            When search committees, capital partners, and corporate nominating chairs evaluate your credentials before an appointment, Google is your first interview. A fragmented, outdated, or absent digital footprint creates an unvetted perception risk — regardless of your operational track record. Prominence permanently closes this authority deficit.
                        </p>

                        {/* Institutional Credential Grid (Editorial 2-Column Matrix) */}
                        <div>
                            <div style={{
                                fontSize: "11px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                color: "#94a3b8",
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
                                    { sector: "Fortune 500 Enterprises", tier: "C-Suite Officers & SVPs" },
                                    { sector: "Private Equity Portfolios", tier: "Chairs & Operating Partners" },
                                    { sector: "High-Growth Scale-Ups", tier: "Enterprise Founders & CEOs" },
                                    { sector: "Management Consultancies", tier: "Senior Partners & Directors" }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            padding: "12px 16px",
                                            backgroundColor: "#ffffff",
                                            borderRadius: "10px",
                                            border: "1px solid #eaedf0",
                                            boxShadow: "0 2px 8px rgba(15, 16, 19, 0.02)"
                                        }}
                                    >
                                        <div style={{
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            color: "#0f1013",
                                            fontFamily: "var(--primary-font)",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        }}>
                                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#b89058", flexShrink: 0 }}></span>
                                            {item.sector}
                                        </div>
                                        <div style={{ fontSize: "11.5px", color: "#64748b", marginTop: "2px", paddingLeft: "14px" }}>
                                            {item.tier}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dimensional Executive Stature Diagnostic Card */}
                    <div className="col-lg-5 mt-5 mt-lg-0" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="550">
                        <div style={{ position: "relative", maxWidth: "460px", margin: "0 auto" }}>
                            
                            {/* Floating Reassurance Badge */}
                            <div
                                className="prominence_floating_badge"
                                style={{
                                    top: "-16px",
                                    right: "16px",
                                    fontSize: "11.5px",
                                    fontWeight: "700",
                                    fontFamily: "var(--primary-font)",
                                    color: "#0f1013",
                                    padding: "8px 14px"
                                }}
                            >
                                <i className="fa-solid fa-shield-halved" style={{ color: "#b89058" }}></i>
                                Confidential Audit
                            </div>

                            {/* Main Diagnostic Card with Layered Depth */}
                            <div className="prominence_depth_card" style={{ padding: "36px 30px", borderTop: "3px solid #b89058" }}>
                                <div style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "18px", marginBottom: "22px" }}>
                                    <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#64748b", fontFamily: "var(--primary-font)" }}>
                                        Executive Stature Audit
                                    </div>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginTop: "4px" }}>
                                        <span style={{ fontSize: "34px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", letterSpacing: "-0.5px" }}>
                                            -48%
                                        </span>
                                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#b91c1c", backgroundColor: "#fef2f2", padding: "2px 8px", borderRadius: "6px" }}>
                                            Perception Deficit
                                        </span>
                                    </div>
                                    <p style={{ fontSize: "12px", color: "#64748b", margin: "6px 0 0" }}>
                                        The quantifiable gap between enterprise achievement and external public discoverability.
                                    </p>
                                </div>

                                {/* Layered Stature Progress Gauges */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "24px" }}>
                                    {/* 1. Real World Track Record */}
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", marginBottom: "6px", fontFamily: "var(--primary-font)" }}>
                                            <span style={{ color: "#0f1013" }}>Real-World Leadership Track Record</span>
                                            <span style={{ color: "#0f1013" }}>95th %ile</span>
                                        </div>
                                        <div style={{ height: "7px", backgroundColor: "#f1f5f9", borderRadius: "4px", overflow: "hidden" }}>
                                            <div style={{ width: "95%", height: "100%", backgroundColor: "#0f1013", borderRadius: "4px" }}></div>
                                        </div>
                                        <div style={{ fontSize: "11px", color: "#64748b", marginTop: "3px" }}>
                                            P&amp;L ownership, enterprise scale, M&amp;A execution
                                        </div>
                                    </div>

                                    {/* 2. Public Digital Stature (Before) */}
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", marginBottom: "6px", fontFamily: "var(--primary-font)" }}>
                                            <span style={{ color: "#64748b" }}>Public Digital Presence (Before)</span>
                                            <span style={{ color: "#b91c1c" }}>42nd %ile</span>
                                        </div>
                                        <div style={{ height: "7px", backgroundColor: "#f1f5f9", borderRadius: "4px", overflow: "hidden" }}>
                                            <div style={{ width: "42%", height: "100%", backgroundColor: "#cbd5e1", borderRadius: "4px" }}></div>
                                        </div>
                                        <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "3px" }}>
                                            Fragmented Google results, dormant profile, unvetted
                                        </div>
                                    </div>

                                    {/* 3. Post-Prominence Sprint */}
                                    <div style={{
                                        padding: "12px 14px",
                                        backgroundColor: "#fafbfc",
                                        borderRadius: "10px",
                                        border: "1px solid #eaedf0"
                                    }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", marginBottom: "6px", fontFamily: "var(--primary-font)" }}>
                                            <span style={{ color: "#0f1013" }}>Prominence Sovereign Architecture</span>
                                            <span style={{ color: "#b89058" }}>98th %ile</span>
                                        </div>
                                        <div style={{ height: "7px", backgroundColor: "#eaedf0", borderRadius: "4px", overflow: "hidden" }}>
                                            <div style={{ width: "98%", height: "100%", background: "linear-gradient(90deg, #0f1013 0%, #b89058 100%)", borderRadius: "4px" }}></div>
                                        </div>
                                        <div style={{ fontSize: "11px", color: "#b89058", fontWeight: "600", marginTop: "4px" }}>
                                            Google Page 1 #1, Knowledge Graph, Inbound Inquiries
                                        </div>
                                    </div>
                                </div>

                                {/* Outcome Reassurance Tag */}
                                <div style={{
                                    fontSize: "12px",
                                    color: "#59606a",
                                    lineHeight: "1.6",
                                    paddingTop: "14px",
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
        </section>
    )
}

