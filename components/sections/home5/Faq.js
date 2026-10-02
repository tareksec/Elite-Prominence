'use client'

import React from 'react'
import Link from "next/link"
import FaqAccordion from "@/components/elements/FaqAccordion"

export default function Faq() {
    return (
        <section
            style={{
                backgroundColor: "#FAF8F5",
                padding: "110px 0",
                borderBottom: "1.5px solid #E5E7EB",
                fontFamily: "var(--primary-font, -apple-system, sans-serif)",
                position: "relative"
            }}
        >
            <div className="container">
                <div className="row align-items-start g-5">
                    
                    {/* Left Column: Heading & Consultation (Inspired by MLab FAQ) */}
                    <div className="col-12 col-lg-5" data-aos="fade-right" data-aos-duration="500">
                        <div style={{ position: "sticky", top: "120px" }}>
                            {/* Eyebrow */}
                            <div style={{ marginBottom: "18px" }}>
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "6px 16px",
                                        borderRadius: "9999px",
                                        backgroundColor: "#EDE9FE",
                                        color: "#6D28D9",
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.5px",
                                        border: "1.5px solid rgba(109, 40, 217, 0.2)"
                                    }}
                                >
                                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7C3AED" }} />
                                    Common Inquiries
                                </span>
                            </div>

                            <h2
                                style={{
                                    fontSize: "clamp(34px, 4.2vw, 48px)",
                                    fontWeight: "800",
                                    color: "#0F1117",
                                    lineHeight: "1.12",
                                    letterSpacing: "-1px",
                                    marginBottom: "18px"
                                }}
                            >
                                FAQ
                            </h2>

                            <p
                                style={{
                                    fontSize: "16.5px",
                                    color: "#4B5563",
                                    lineHeight: "1.7",
                                    marginBottom: "30px",
                                    maxWidth: "420px"
                                }}
                            >
                                Can't find the answer you're looking for? Reach out for a confidential conversation regarding your stature audit.
                            </p>

                            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center", marginBottom: "36px" }}>
                                <Link
                                    href="/contact"
                                    className="neo-btn-primary"
                                    style={{ padding: "13px 28px", fontSize: "14px" }}
                                >
                                    Ask a question <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }} />
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="neo-btn-secondary"
                                    style={{ padding: "13px 24px", fontSize: "14px" }}
                                >
                                    View Pricing
                                </Link>
                            </div>

                            {/* Sticky Preview Card */}
                            <div
                                className="neo-card-dark"
                                style={{
                                    padding: "28px",
                                    borderRadius: "22px",
                                    backgroundColor: "#0F1117",
                                    border: "2px solid #27272A",
                                    boxShadow: "6px 6px 0px #000000"
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                                    <span style={{ color: "#C084FC", fontSize: "11.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                        Confidential Advisory
                                    </span>
                                </div>
                                <h4 style={{ color: "#FFFFFF", fontSize: "17px", fontWeight: "800", marginBottom: "8px" }}>
                                    Have Specific Disclosure Constraints?
                                </h4>
                                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13.5px", lineHeight: "1.6", margin: 0 }}>
                                    We work under strict corporate NDAs. All thought leadership and entity architecture protect corporate employer data without exception.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sleek Accordion */}
                    <div className="col-12 col-lg-7" data-aos="fade-left" data-aos-duration="550">
                        <FaqAccordion />
                    </div>

                </div>
            </div>
        </section>
    )
}
