'use client'
import React from 'react'
import Link from "next/link"

export default function FinalCta() {
    return (
        <section
            style={{
                backgroundColor: "#F7F5FC",
                borderTop: "1px solid #eaedf0",
                borderBottom: "1px solid #eaedf0",
                padding: "var(--ep-section-py) 0",
                position: "relative",
                textAlign: "center"
            }}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
        >
            <div className="container">
                <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                    <div className="tag_text" style={{ marginBottom: "14px" }}>
                        <span className="prominence_tracker">
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6D28D9" }}></span>
                            Strictly Limited Client Roster
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: "clamp(26px, 3.8vw, 38px)",
                        fontWeight: "700",
                        color: "#0D0D14",
                        marginBottom: "16px",
                        lineHeight: "1.25",
                        fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)"
                    }}>
                        Ready to Command Sovereign Stature?
                    </h2>
                    <p style={{
                        fontSize: "17px",
                        color: "#4B5563",
                        lineHeight: "28px",
                        maxWidth: "620px",
                        margin: "0 auto 36px"
                    }}>
                        We accept a strictly limited roster of CEOs, CHROs, Founders, and senior leaders each quarter to maintain uncompromising discretion, bespoke engineering, and dedicated partner attention.
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                        <Link href="/contact" className="btn_style_gold btn_md">
                            Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link href="/resources/assessment" className="btn_style_two btn_md">
                            Evaluate Your Stature <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>

                    {/* Executive Credentials & Trust Guarantee Badges */}
                    <div style={{
                        marginTop: "40px",
                        paddingTop: "28px",
                        borderTop: "1px solid #e2e8f0",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "14px"
                    }}>
                        {[
                            { icon: "fa-solid fa-user-tie", label: "Managing Partner Advisory", color: "#6D28D9" },
                            { icon: "fa-solid fa-shield-halved", label: "Strict NDA & Discretion", color: "#059669" },
                            { icon: "fa-solid fa-globe", label: "100% Owned Real Estate", color: "#2563EB" },
                            { icon: "fa-solid fa-bolt", label: "45-Day Google Page 1 Placement", color: "#D97706" }
                        ].map((badge, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    backgroundColor: "#ffffff",
                                    padding: "8px 16px",
                                    borderRadius: "30px",
                                    border: "1px solid #eaedf0",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                                    fontSize: "12.5px",
                                    fontWeight: "600",
                                    color: "#0D0D14"
                                }}
                            >
                                <i className={badge.icon} style={{ color: badge.color, fontSize: "13px" }}></i>
                                <span>{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
