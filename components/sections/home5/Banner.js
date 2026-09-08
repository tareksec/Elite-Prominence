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
                    backgroundSize: "cover" 
                }}
            />
            <div className="container">
                <div className="banner_content" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                    <div className="tag_text" style={{ background: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(255, 255, 255, 0.25)", backdropFilter: "blur(10px)" }}>
                        <h6 style={{ color: "#ffffff" }}>Executive Reputation &amp; Digital Stature</h6>
                    </div>

                    <h1 style={{ fontSize: "54px", fontWeight: "700", lineHeight: "1.18", marginBottom: "22px", color: "#ffffff", letterSpacing: "-0.5px" }}>
                        Build a Digital Presence That Commands Attention.
                    </h1>

                    <p style={{ fontSize: "18px", lineHeight: "30px", color: "rgba(255, 255, 255, 0.88)", maxWidth: "640px", marginBottom: "32px" }}>
                        We architect the sovereign websites, search reputation, strategic ghostwriting, and authority assets that represent CEOs, CHROs, Founders, and enterprise leaders before they walk into the room.
                    </p>

                    <div className="banner_btn_area" style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                        <div className="link_btn">
                            <Link href="/contact" className="btn_style_one">
                                Book a Private Consultation
                            </Link>
                        </div>
                        <div className="link_btn">
                            <Link 
                                href="/resources/assessment" 
                                className="banner_secondary_btn"
                                style={{ 
                                    display: "inline-flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "12px 28px", 
                                    borderRadius: "9999px", 
                                    border: "1px solid rgba(255, 255, 255, 0.4)", 
                                    color: "#ffffff", 
                                    fontWeight: "600", 
                                    fontSize: "15px",
                                    background: "rgba(255, 255, 255, 0.12)",
                                    backdropFilter: "blur(12px)", 
                                    WebkitBackdropFilter: "blur(12px)",
                                    boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.5), 0 4px 14px rgba(0, 0, 0, 0.15)",
                                    transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                                    textDecoration: "none"
                                }}
                            >
                                Audit Your Stature <i className="fa-solid fa-angle-right ms-2" style={{ fontSize: "12px" }}></i>
                            </Link>
                        </div>
                    </div>            
                </div>
            </div>
        </section>
    )
}
