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
                    backgroundPosition: "right center", 
                    backgroundSize: "cover",
                    filter: "none"
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

                            <h1 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", fontWeight: "700", lineHeight: "1.18", marginBottom: "20px", color: "#ffffff", letterSpacing: "-0.5px", textShadow: "0 2px 12px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.6)" }}>
                                Build a Digital Presence That Commands Attention.
                            </h1>

                            <p style={{ fontSize: "17.5px", lineHeight: "29px", color: "rgba(255, 255, 255, 0.92)", maxWidth: "580px", marginBottom: "30px", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
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
                            <div style={{ marginTop: "32px", padding: "12px 18px", backgroundColor: "rgba(13, 13, 20, 0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255, 255, 255, 0.14)", borderRadius: "12px", display: "inline-flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ffffff", fontSize: "12.5px", fontWeight: "600", textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>
                                    <i className="fa-solid fa-shield-halved" style={{ color: "#C084FC", fontSize: "14px" }}></i>
                                    <span>Strict Corporate NDA</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ffffff", fontSize: "12.5px", fontWeight: "600", textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>
                                    <i className="fa-solid fa-building-columns" style={{ color: "#C084FC", fontSize: "14px" }}></i>
                                    <span>Fortune 500 Leaders</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ffffff", fontSize: "12.5px", fontWeight: "600", textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>
                                    <i className="fa-solid fa-chart-line" style={{ color: "#C084FC", fontSize: "14px" }}></i>
                                    <span>Google Page 1 Guaranteed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Floating Stature Accents framing the Executive */}
                    <div className="col-12 col-lg-5 mt-5 mt-lg-0" data-aos="fade-left" data-aos-duration="600">
                        <div style={{ position: "relative", minHeight: "440px", width: "100%" }}>
                            {/* Floating Google Verified Badge */}
                            <div
                                className="float-bob-y d-none d-lg-inline-flex"
                                style={{
                                    position: "absolute",
                                    top: "24px",
                                    left: "-80px",
                                    backgroundColor: "rgba(13, 13, 20, 0.86)",
                                    backdropFilter: "blur(16px)",
                                    WebkitBackdropFilter: "blur(16px)",
                                    border: "1px solid rgba(139, 92, 246, 0.45)",
                                    padding: "9px 18px",
                                    borderRadius: "30px",
                                    alignItems: "center",
                                    gap: "10px",
                                    color: "#ffffff",
                                    zIndex: 4,
                                    boxShadow: "0 16px 36px rgba(0,0,0,0.5), 0 0 20px rgba(66, 133, 244, 0.15)"
                                }}
                            >
                                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(66, 133, 244, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(66, 133, 244, 0.4)" }}>
                                    <i className="fab fa-google" style={{ color: "#4285F4", fontSize: "12px" }}></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: "9.5px", textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255, 255, 255, 0.6)", fontWeight: "600", lineHeight: "1" }}>Search Stature</div>
                                    <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#ffffff", lineHeight: "1.3" }}>Google Page 1 Verified #1</div>
                                </div>
                            </div>

                            {/* Floating Boardroom Authority Badge */}
                            <div
                                className="float-bob-x d-none d-lg-inline-flex"
                                style={{
                                    position: "absolute",
                                    bottom: "45px",
                                    left: "-130px",
                                    backgroundColor: "rgba(13, 13, 20, 0.86)",
                                    backdropFilter: "blur(16px)",
                                    WebkitBackdropFilter: "blur(16px)",
                                    border: "1px solid rgba(245, 158, 11, 0.45)",
                                    padding: "9px 18px",
                                    borderRadius: "30px",
                                    alignItems: "center",
                                    gap: "10px",
                                    color: "#ffffff",
                                    zIndex: 4,
                                    boxShadow: "0 16px 36px rgba(0,0,0,0.5), 0 0 20px rgba(245, 158, 11, 0.15)"
                                }}
                            >
                                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(245, 158, 11, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(245, 158, 11, 0.4)" }}>
                                    <i className="fa-solid fa-award" style={{ color: "#F59E0B", fontSize: "12px" }}></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: "9.5px", textTransform: "uppercase", letterSpacing: "0.8px", color: "#C084FC", fontWeight: "700", lineHeight: "1" }}>Executive Benchmark</div>
                                    <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#ffffff", lineHeight: "1.3" }}>Boardroom Authority: 96/100</div>
                                </div>
                            </div>

                            {/* Live Status Pill */}
                            <div
                                className="d-none d-xl-inline-flex"
                                style={{
                                    position: "absolute",
                                    bottom: "110px",
                                    right: "15px",
                                    backgroundColor: "rgba(13, 13, 20, 0.78)",
                                    backdropFilter: "blur(12px)",
                                    WebkitBackdropFilter: "blur(12px)",
                                    border: "1px solid rgba(16, 185, 129, 0.4)",
                                    padding: "6px 14px",
                                    borderRadius: "20px",
                                    alignItems: "center",
                                    gap: "7px",
                                    boxShadow: "0 10px 24px rgba(0,0,0,0.4), 0 0 15px rgba(16, 185, 129, 0.2)",
                                    zIndex: 4
                                }}
                            >
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981" }}></span>
                                <span style={{ fontSize: "11.5px", color: "#ffffff", fontWeight: "600" }}>Sovereign Stature Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}