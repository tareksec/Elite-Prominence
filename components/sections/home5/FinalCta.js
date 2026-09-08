'use client'
import React from 'react'
import Link from "next/link"

export default function FinalCta() {
    return (
        <section
            style={{
                backgroundColor: "#f8fafd",
                borderTop: "1px solid #edf2f7",
                borderBottom: "1px solid #edf2f7",
                padding: "90px 0 85px",
                position: "relative",
                textAlign: "center",
                fontFamily: "var(--primary-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
        >
            <div className="container">
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <span style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1.2px",
                        color: "#2460e2",
                        backgroundColor: "#ecf3ff",
                        border: "1px solid rgba(36, 96, 226, 0.2)",
                        padding: "5px 18px",
                        borderRadius: "9999px",
                        marginBottom: "16px"
                    }}>
                        Strictly Limited Client Roster
                    </span>
                    <h2 style={{
                        fontSize: "42px",
                        fontWeight: "800",
                        color: "#0d1b2a",
                        marginBottom: "16px",
                        lineHeight: "1.25"
                    }}>
                        Ready to Command Sovereign Stature?
                    </h2>
                    <p style={{
                        fontSize: "18px",
                        color: "#475569",
                        lineHeight: "1.7",
                        marginBottom: "36px"
                    }}>
                        We accept a strictly limited roster of CEOs, CHROs, Founders, and senior leaders each quarter to maintain uncompromising discretion, bespoke engineering, and dedicated partner attention.
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="/contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                background: "linear-gradient(180deg, #2460e2 0%, #1d4ed8 100%)",
                                color: "#ffffff",
                                fontSize: "16px",
                                fontWeight: "700",
                                padding: "16px 38px",
                                borderRadius: "9999px",
                                textDecoration: "none",
                                boxShadow: "0 10px 25px rgba(36, 96, 226, 0.3)",
                                transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}
                            className="final_cta_btn"
                        >
                            Book a Private Consultation &rarr;
                        </Link>
                        <Link
                            href="/resources/assessment"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                background: "#ffffff",
                                color: "#0d1b2a",
                                fontSize: "16px",
                                fontWeight: "600",
                                padding: "16px 32px",
                                borderRadius: "9999px",
                                textDecoration: "none",
                                border: "1px solid #cbd5e1",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}
                        >
                            Evaluate Your Digital Presence
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .final_cta_btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 14px 30px rgba(36, 96, 226, 0.4) !important;
                    filter: brightness(1.05);
                }
            `}</style>
        </section>
    )
}
