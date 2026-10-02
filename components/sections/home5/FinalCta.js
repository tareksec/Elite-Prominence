'use client'

import React from 'react'
import Link from "next/link"
import { FlipText } from '@/components/ui/flip-text'

export default function FinalCta() {
    return (
        <section
            style={{
                backgroundColor: "#FAF8F5",
                padding: "100px 0 120px",
                position: "relative",
                fontFamily: "var(--primary-font, -apple-system, sans-serif)"
            }}
        >
            <div className="container">
                {/* High-Impact Wellpitched-style Violet Banner Card */}
                <div
                    style={{
                        backgroundColor: "#7C3AED",
                        background: "linear-gradient(135deg, #6D28D9 0%, #7C3AED 50%, #8B5CF6 100%)",
                        borderRadius: "36px",
                        padding: "70px 40px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        border: "2px solid #0F1117",
                        boxShadow: "8px 8px 0px #0F1117",
                        position: "relative",
                        overflow: "hidden"
                    }}
                >
                    {/* Background Decorative Doodles / Blobs */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-40px",
                            left: "-40px",
                            width: "220px",
                            height: "220px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
                            pointerEvents: "none"
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-60px",
                            right: "-40px",
                            width: "280px",
                            height: "280px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, rgba(255,255,255,0) 70%)",
                            pointerEvents: "none"
                        }}
                    />

                    <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 2 }}>
                        {/* Pill Eyebrow */}
                        <div style={{ marginBottom: "20px" }}>
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "7px 18px",
                                    borderRadius: "9999px",
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    backdropFilter: "blur(8px)",
                                    color: "#FFFFFF",
                                    fontSize: "12.5px",
                                    fontWeight: "800",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.6px",
                                    border: "1px solid rgba(255, 255, 255, 0.3)"
                                }}
                            >
                                <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#34D399" }} />
                                Strictly Limited Client Roster &bull; Q4 Enrolling
                            </span>
                        </div>

                        {/* Title with FlipText on keyword */}
                        <h2
                            style={{
                                fontSize: "clamp(32px, 4.4vw, 50px)",
                                fontWeight: "800",
                                color: "#FFFFFF",
                                marginBottom: "20px",
                                lineHeight: "1.15",
                                letterSpacing: "-1px"
                            }}
                        >
                            Ready to command sovereign stature?
                        </h2>

                        <p
                            style={{
                                fontSize: "17.5px",
                                color: "rgba(255, 255, 255, 0.92)",
                                lineHeight: "1.7",
                                maxWidth: "620px",
                                margin: "0 auto 38px",
                                fontWeight: "450"
                            }}
                        >
                            We accept a strictly limited roster of CEOs, CHROs, Founders, and enterprise leaders each quarter to maintain uncompromising discretion, bespoke engineering, and dedicated partner attention.
                        </p>

                        {/* CTA Buttons */}
                        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                            <Link
                                href="/contact"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    backgroundColor: "#FFFFFF",
                                    color: "#0F1117",
                                    fontSize: "15px",
                                    fontWeight: "800",
                                    padding: "16px 36px",
                                    borderRadius: "9999px",
                                    textDecoration: "none",
                                    border: "2px solid #0F1117",
                                    boxShadow: "4px 4px 0px #0F1117",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                Book a Private Consultation <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }} />
                            </Link>

                            <Link
                                href="/resources/assessment"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    backgroundColor: "rgba(15, 17, 23, 0.8)",
                                    backdropFilter: "blur(8px)",
                                    color: "#FFFFFF",
                                    fontSize: "15px",
                                    fontWeight: "800",
                                    padding: "16px 30px",
                                    borderRadius: "9999px",
                                    textDecoration: "none",
                                    border: "2px solid rgba(255, 255, 255, 0.4)",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                Evaluate Your Stature <i className="fa-solid fa-arrow-trend-up" style={{ fontSize: "12px" }} />
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div
                            style={{
                                marginTop: "44px",
                                paddingTop: "32px",
                                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "12px"
                            }}
                        >
                            {[
                                { icon: "fa-solid fa-user-tie", label: "Managing Partner Advisory", color: "#FDE047" },
                                { icon: "fa-solid fa-shield-halved", label: "Strict NDA & Discretion", color: "#34D399" },
                                { icon: "fa-solid fa-globe", label: "100% Owned Real Estate", color: "#67E8F9" },
                                { icon: "fa-solid fa-bolt", label: "45-Day Google Page 1", color: "#F472B6" }
                            ].map((badge, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        backgroundColor: "rgba(255, 255, 255, 0.12)",
                                        backdropFilter: "blur(6px)",
                                        padding: "8px 16px",
                                        borderRadius: "9999px",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        fontSize: "12.5px",
                                        fontWeight: "700",
                                        color: "#FFFFFF"
                                    }}
                                >
                                    <i className={badge.icon} style={{ color: badge.color, fontSize: "13px" }} />
                                    <span>{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
