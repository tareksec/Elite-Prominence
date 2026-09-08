'use client'
import React from 'react'
import Link from "next/link"

export default function Service() {
    return (
        <section className="service_section_five prominence_section" style={{ background: '#FAF8F2', borderBottom: '1px solid #eaedf0', fontFamily: 'var(--primary-font)' }}>
            <div className="container">
                {/* Section Header: Editorial Split */}
                <div className="prominence_header_split">
                    <div>
                        <div style={{ marginBottom: "12px" }}>
                            <span className="prominence_tracker">
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b89058" }}></span>
                                Core Strategic Pillars
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: "clamp(26px, 3.6vw, 36px)",
                            fontWeight: "700",
                            color: "#0f1013",
                            lineHeight: "1.24",
                            letterSpacing: "-0.5px",
                            margin: 0,
                            fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)"
                        }}>
                            Three Pillars, Delivered Together
                        </h2>
                    </div>
                    <div>
                        <p className="prominence_lead_text" style={{ margin: 0 }}>
                            We build a cohesive executive presence across the three digital surfaces where your credentials and authority are evaluated.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="prominence_depth_card" style={{ padding: "34px 28px", height: "100%", borderTop: "3px solid #b89058", display: "flex", flexDirection: "column" }}>
                            <div style={{ width: "46px", height: "46px", borderRadius: "8px", background: "rgba(184, 144, 88, 0.08)", color: "#b89058", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "20px" }}>
                                <i className="fa-solid fa-globe"></i>
                            </div>
                            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f1013", marginBottom: "12px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>Digital HQ (Website)</Link>
                            </h3>
                            <p style={{ color: "#59606a", fontSize: "15px", lineHeight: "25px", marginBottom: "20px" }}>
                                A bespoke personal website built around your biography, core expertise, case studies, and testimonials — the definitive hub you provide to search chairs and keynote organizers.
                            </p>
                            <div style={{ marginTop: "auto", paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
                                <Link href="/services" className="btn_style_ghost" style={{ padding: 0 }}>
                                    Explore Digital HQ <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="prominence_depth_card" style={{ padding: "34px 28px", height: "100%", borderTop: "3px solid #b89058", display: "flex", flexDirection: "column" }}>
                            <div style={{ width: "46px", height: "46px", borderRadius: "8px", background: "rgba(184, 144, 88, 0.08)", color: "#b89058", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "20px" }}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f1013", marginBottom: "12px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>Google Reputation</Link>
                            </h3>
                            <p style={{ color: "#59606a", fontSize: "15px", lineHeight: "25px", marginBottom: "20px" }}>
                                When search committees search your name, page one reflects your executive stature — structured entity schema and tier-1 syndication pushing down outdated namesake noise.
                            </p>
                            <div style={{ marginTop: "auto", paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
                                <Link href="/services" className="btn_style_ghost" style={{ padding: 0 }}>
                                    Explore Reputation Management <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="prominence_depth_card" style={{ padding: "34px 28px", height: "100%", borderTop: "3px solid #b89058", display: "flex", flexDirection: "column" }}>
                            <div style={{ width: "46px", height: "46px", borderRadius: "8px", background: "rgba(184, 144, 88, 0.08)", color: "#b89058", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "20px" }}>
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f1013", marginBottom: "12px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>LinkedIn Thought Leadership</Link>
                            </h3>
                            <p style={{ color: "#59606a", fontSize: "15px", lineHeight: "25px", marginBottom: "20px" }}>
                                Strategic ghostwriting that captures your authentic leadership voice — keeping you top-of-mind with board nominating committees without consuming your executive calendar.
                            </p>
                            <div style={{ marginTop: "auto", paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
                                <Link href="/services" className="btn_style_ghost" style={{ padding: 0 }}>
                                    Explore Executive Voice <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}