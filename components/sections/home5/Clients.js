'use client'
import React from 'react'

export default function Clients() {
    return (
        <section className="problem_section" style={{ padding: "65px 0 60px", background: "#f8fafd", borderTop: "1px solid #edf2f7", borderBottom: "1px solid #edf2f7" }}>
            <div className="container">
                {/* Executive Trust Line & Institutional Badges */}
                <div className="row justify-content-center text-center" style={{ marginBottom: "40px" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="450">
                    <div className="col-xl-10 col-lg-11">
                        <p style={{
                            fontSize: "12px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "1.2px",
                            color: "#64748b",
                            marginBottom: "18px",
                            fontFamily: "var(--primary-font)"
                        }}>
                            Advising CEOs, CHROs, Enterprise Founders &amp; Board Leaders From
                        </p>

                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                            {[
                                { label: "Fortune 500 Enterprises", icon: "icon-33" },
                                { label: "High-Growth Tech Enterprises", icon: "icon-48" },
                                { label: "Private Equity Portfolios", icon: "icon-32" },
                                { label: "Global Management Consultancies", icon: "icon-31" },
                                { label: "Corporate Board Nominating Networks", icon: "icon-28" }
                            ].map((badge, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "7px 18px",
                                        backgroundColor: "#ffffff",
                                        borderRadius: "9999px",
                                        border: "1px solid #e2e8f0",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        color: "#1e293b",
                                        fontFamily: "var(--primary-font)"
                                    }}
                                >
                                    <i className={badge.icon} style={{ fontSize: "14px", color: "#151619" }}></i>
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
                            maxWidth: "860px",
                            margin: "0 auto",
                            padding: "40px 36px",
                            backgroundColor: "#ffffff",
                            borderRadius: "14px",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 6px 24px rgba(0,0,0,0.03)"
                        }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#0f1013", marginBottom: "8px", lineHeight: "1.35", letterSpacing: "-0.3px" }}>
                                Your real-world leadership is in the top 5% of your industry.
                            </h3>
                            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#2460e2", marginBottom: "14px", lineHeight: "1.35", letterSpacing: "-0.3px" }}>
                                Your public digital presence isn't in the top 50%.
                            </h3>
                            <p style={{ fontSize: "16px", color: "#59606a", margin: 0, lineHeight: "26px", maxWidth: "720px", marginLeft: "auto", marginRight: "auto" }}>
                                That authority gap silently costs you board directorships, capital partner confidence, keynote speaking invitations, and inbound advisory mandates. Prominence permanently closes it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
