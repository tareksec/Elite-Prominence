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
                        color: "#8B5CF6",
                        backgroundColor: "rgba(139, 92, 246, 0.08)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        padding: "4px 14px",
                        borderRadius: "20px",
                        marginBottom: "14px"
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
                                background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                                color: "#ffffff",
                                fontSize: "16px",
                                fontWeight: "700",
                                padding: "15px 38px",
                                borderRadius: "9999px",
                                textDecoration: "none",
                                boxShadow: "0 4px 18px rgba(236, 72, 153, 0.35)",
                                transition: "all 0.3s ease"
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
                    box-shadow: 0 8px 25px rgba(236, 72, 153, 0.5) !important;
                    filter: brightness(1.05);
                }
            `}</style>
        </section>
    )
}
