'use client'
import React from 'react'

export default function Clients() {
    return (
        <section className="problem_section" style={{ padding: "65px 0 60px", background: "#f8fafd", borderTop: "1px solid #edf2f7", borderBottom: "1px solid #edf2f7" }}>
            <div className="container">
                {/* Executive Trust Line & Institutional Badges */}
                <div className="row justify-content-center text-center" style={{ marginBottom: "40px" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="450">
                    <div className="col-xl-9 col-lg-11">
                        <p style={{
                            fontSize: "13px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "1.2px",
                            color: "#64748b",
                            marginBottom: "18px"
                        }}>
                            Trusted by Senior HR Leaders &amp; Executives From
                        </p>

                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px"
                        }}>
                            {[
                                { label: "Fortune 500 Enterprises", icon: "🏛️" },
                                { label: "Tech Unicorn Startups", icon: "🦄" },
                                { label: "Global Management Consultancies", icon: "🌐" },
                                { label: "Boardroom Nominating Networks", icon: "⚖️" },
                                { label: "Private Equity Portfolio CHROs", icon: "📈" }
                            ].map((badge, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "8px 16px",
                                        backgroundColor: "#ffffff",
                                        borderRadius: "9999px",
                                        border: "1px solid #e2e8f0",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        color: "#1e293b"
                                    }}
                                >
                                    <span>{badge.icon}</span>
                                    <span>{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* The Executive Reality & Authority Gap */}
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10 col-md-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <div style={{
                            maxWidth: "840px",
                            margin: "0 auto",
                            padding: "36px 30px",
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
                        }}>
                            <p style={{ fontSize: "23px", fontWeight: "800", color: "#162d20", marginBottom: "10px", lineHeight: "1.35" }}>
                                Your experience is in the top 5% of your field.
                            </p>
                            <p style={{ fontSize: "23px", fontWeight: "800", color: "#2460e2", marginBottom: "14px", lineHeight: "1.35" }}>
                                Your online presence isn't in the top 50%.
                            </p>
                            <p style={{ fontSize: "16.5px", color: "#64748b", margin: 0, lineHeight: "1.65" }}>
                                That gap is quietly costing you board seats, keynote speaking invitations, and inbound advisory mandates. Elite Prominence solves it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
