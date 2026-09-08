'use client'
import React from 'react'
import Link from "next/link"
import FaqAccordion from "@/components/elements/FaqAccordion"

export default function Faq() {
    return (
        <section className="faq_section home_four prominence_section" style={{ backgroundColor: "#ffffff", borderTop: "1px solid #eaedf0" }}>
            <div className="container">
                <div className="row align-items-start">
                    {/* Left Sticky Consultation Card */}
                    <div className="col-xl-5 col-lg-5 col-md-12 mb-4 mb-lg-0" style={{ position: "sticky", top: "100px" }}>
                        <div 
                            className="prominence_depth_card_dark"
                            style={{
                                overflow: "hidden",
                                position: "relative",
                                minHeight: "480px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                border: "1px solid rgba(255, 255, 255, 0.12)"
                            }} 
                            data-aos="fade-right" 
                            data-aos-easing="linear" 
                            data-aos-duration="500"
                        >
                            <img 
                                src="/assets/images/elite/blog_4_executive_presence.jpg" 
                                alt="Executive personal branding consultation and advisory guidance"
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35) contrast(1.1)" }}
                            />
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(180deg, rgba(13, 13, 20, 0.25) 0%, rgba(13, 13, 20, 0.95) 100%)"
                            }}></div>
                            <div style={{ position: "relative", zIndex: 2, padding: "35px 30px", color: "#fff" }}>
                                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                                    <span className="prominence_pulse_dot"></span>
                                    <span style={{ color: "#8B5CF6", textTransform: "uppercase", fontSize: "11px", fontWeight: "700", letterSpacing: "1.2px", fontFamily: "var(--primary-font)" }}>
                                        Executive Consultation
                                    </span>
                                </div>
                                <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "700", marginBottom: "12px", lineHeight: "1.3", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                    Have a Specific Question About Your Digital Stature?
                                </h3>
                                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14.5px", lineHeight: "1.6", marginBottom: "24px" }}>
                                    Every leader's career trajectory and disclosure constraints are distinct. We conduct confidential 20-minute digital stature assessments to audit your current search standing.
                                </p>
                                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                                    <Link href="/contact" className="btn_style_gold btn_md">
                                        Book Strategy Call <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/pricing" className="btn_style_two_dark btn_md">
                                        View Pricing
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Expanded FAQ Accordion */}
                    <div className="col-xl-7 col-lg-7 col-md-12">
                        <div className="inner_box ps-lg-4" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                            <div style={{ marginBottom: "28px" }}>
                                <span className="prominence_tracker">Strategic FAQ &amp; Guidance</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                    Frequently Addressed Governance Matters
                                </h2>
                            </div>
                            
                            <FaqAccordion />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

