'use client'
import React from 'react'
import Link from "next/link"

export default function Banner() {
    return (
        <section className="banner_style_five" style={{ position: "relative" }}>
            <div 
                className="bg_layer" 
                style={{ 
                    backgroundImage: "url(/assets/images/elite/hero_executive.jpg)", 
                    backgroundPosition: "right 25%", 
                    backgroundSize: "cover",
                    filter: "brightness(1.18) contrast(1.04)"
                }}
            />
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Headline & Action */}
                    <div className="col-12 col-lg-7">
                        <div className="banner_content" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <span className="prominence_tracker_dark">
                                Executive Reputation &amp; Digital Stature
                            </span>

                            <h1 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", fontWeight: "700", lineHeight: "1.18", marginBottom: "20px", color: "#ffffff", letterSpacing: "-0.5px", textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
                                Build a Digital Presence That Commands Attention.
                            </h1>

                            <p style={{ fontSize: "17.5px", lineHeight: "29px", color: "rgba(255, 255, 255, 0.95)", maxWidth: "600px", marginBottom: "30px", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
                                We architect the sovereign websites, search reputation, strategic ghostwriting, and authority assets that represent CEOs, CHROs, Founders, and enterprise leaders before they walk into the room.
                            </p>

                            <div className="banner_btn_area" style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                                <div className="link_btn">
                                    <Link href="/contact" className="btn_style_gold" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>
                                        Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="link_btn">
                                    <Link 
                                        href="/resources/assessment" 
                                        className="btn_style_two_dark"
                                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
                                    >
                                        Audit Your Stature <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Executive Trust Badges */}
                            <div style={{ marginTop: "32px", paddingTop: "22px", borderTop: "1px solid rgba(255, 255, 255, 0.16)", display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255, 255, 255, 0.92)", fontSize: "12.5px", fontWeight: "600" }}>
                                    <i className="fa-solid fa-shield-halved" style={{ color: "#A78BFA", fontSize: "14px" }}></i>
                                    <span>Strict Corporate NDA</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255, 255, 255, 0.92)", fontSize: "12.5px", fontWeight: "600" }}>
                                    <i className="fa-solid fa-building-columns" style={{ color: "#A78BFA", fontSize: "14px" }}></i>
                                    <span>Fortune 500 Leaders</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255, 255, 255, 0.92)", fontSize: "12.5px", fontWeight: "600" }}>
                                    <i className="fa-solid fa-chart-line" style={{ color: "#A78BFA", fontSize: "14px" }}></i>
                                    <span>Google Page 1 Guaranteed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 3D Stature Dashboard Showcase */}
                    <div className="col-12 col-lg-5 mt-5 mt-lg-0" data-aos="fade-left" data-aos-duration="600">
                        <div style={{ position: "relative", maxWidth: "460px", margin: "0 auto" }}>
                            {/* Floating Google Top Badge */}
                            <div
                                className="float-bob-y"
                                style={{
                                    position: "absolute",
                                    top: "-16px",
                                    right: "12px",
                                    backgroundColor: "rgba(13, 13, 20, 0.92)",
                                    backdropFilter: "blur(12px)",
                                    border: "1px solid rgba(139, 92, 246, 0.4)",
                                    padding: "7px 15px",
                                    borderRadius: "30px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    color: "#ffffff",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    zIndex: 4,
                                    boxShadow: "0 12px 28px rgba(0,0,0,0.45)"
                                }}
                            >
                                <i className="fab fa-google" style={{ color: "#4285F4", fontSize: "14px" }}></i>
                                <span>Google Page 1 Verified #1</span>
                            </div>

                            {/* 3D Glassmorphic Stature Dashboard Image Frame */}
                            <div
                                style={{
                                    borderRadius: "18px",
                                    overflow: "hidden",
                                    border: "1px solid rgba(139, 92, 246, 0.35)",
                                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(139, 92, 246, 0.2)",
                                    background: "rgba(13, 13, 20, 0.85)",
                                    position: "relative"
                                }}
                            >
                                <img
                                    src="/assets/images/elite/executive_presence_platform.jpg"
                                    alt="Executive Presence & Digital Authority Platform"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        borderRadius: "18px"
                                    }}
                                />
                                {/* Ambient Bottom Overlay */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        borderRadius: "18px",
                                        background: "linear-gradient(180deg, rgba(13,13,20,0) 65%, rgba(13,13,20,0.85) 100%)",
                                        pointerEvents: "none"
                                    }}
                                />
                                {/* Overlay Micro-Stats */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "14px",
                                        left: "16px",
                                        right: "16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        zIndex: 3
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10B981", display: "inline-block", boxShadow: "0 0 8px #10B981" }}></span>
                                        <span style={{ fontSize: "11.5px", color: "#ffffff", fontWeight: "700" }}>Sovereign Entity Active</span>
                                    </div>
                                    <span style={{ fontSize: "11px", color: "#C084FC", fontWeight: "700", background: "rgba(139, 92, 246, 0.2)", padding: "2px 8px", borderRadius: "6px", border: "1px solid rgba(139, 92, 246, 0.3)" }}>
                                        Top 1% Stature
                                    </span>
                                </div>
                            </div>

                            {/* Floating Bottom Left Badge */}
                            <div
                                className="float-bob-x"
                                style={{
                                    position: "absolute",
                                    bottom: "-14px",
                                    left: "12px",
                                    backgroundColor: "rgba(13, 13, 20, 0.92)",
                                    backdropFilter: "blur(12px)",
                                    border: "1px solid rgba(245, 158, 11, 0.4)",
                                    padding: "7px 15px",
                                    borderRadius: "30px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    color: "#ffffff",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    zIndex: 4,
                                    boxShadow: "0 12px 28px rgba(0,0,0,0.45)"
                                }}
                            >
                                <i className="fa-solid fa-award" style={{ color: "#F59E0B", fontSize: "14px" }}></i>
                                <span>Boardroom Authority: 96/100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}