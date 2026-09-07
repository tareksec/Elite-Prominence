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
                <div style={{ maxWidth: "760px", margin: "0 auto" }}>
                    <span style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1.2px",
                        color: "#334155",
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                        padding: "5px 16px",
                        borderRadius: "9999px",
                        marginBottom: "16px"
                    }}>
                        Exclusive Client Roster
                    </span>
                    <h2 style={{
                        fontSize: "40px",
                        fontWeight: "700",
                        color: "#1b2534",
                        marginBottom: "16px",
                        lineHeight: "1.25"
                    }}>
                        Ready to Be Seen at the Top?
                    </h2>
                    <p style={{
                        fontSize: "18px",
                        color: "#59606a",
                        lineHeight: "1.7",
                        marginBottom: "32px"
                    }}>
                        We work with a limited number of senior HR leaders and executive consultants at a time to maintain uncompromising quality and individualized attention.
                    </p>
                    <div>
                        <Link
                            href="/contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                background: "linear-gradient(180deg, #2b2d32 0%, #151619 100%)",
                                color: "#ffffff",
                                fontSize: "16px",
                                fontWeight: "600",
                                padding: "16px 42px",
                                borderRadius: "9999px",
                                textDecoration: "none",
                                border: "1px solid rgba(255, 255, 255, 0.09)",
                                boxShadow: "0 12px 28px -2px rgba(0, 0, 0, 0.45), 0 4px 10px -1px rgba(0, 0, 0, 0.22), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.6)",
                                textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                                transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}
                            className="final_cta_btn"
                        >
                            Book a Strategy Call &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .final_cta_btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 16px 36px -2px rgba(0, 0, 0, 0.55), 0 6px 14px -1px rgba(0, 0, 0, 0.3), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.48), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.6) !important;
                    filter: brightness(1.04);
                }
                .final_cta_btn:active {
                    transform: translateY(1px);
                    box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.32), inset 0 1px 2px 0 rgba(0, 0, 0, 0.7) !important;
                }
            `}</style>
        </section>
    )
}
