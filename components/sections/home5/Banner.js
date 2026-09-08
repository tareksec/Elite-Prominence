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
                    <div style={{ marginBottom: "18px" }}>
                        <span style={{ 
                            display: "inline-block", 
                            padding: "6px 18px", 
                            borderRadius: "50px", 
                            background: "rgba(255, 255, 255, 0.15)", 
                            backdropFilter: "blur(10px)", 
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            color: "#fff", 
                            fontSize: "12px", 
                            fontWeight: "700", 
                            letterSpacing: "1.2px", 
                            textTransform: "uppercase" 
                        }}>
                            Executive Reputation &amp; Personal Branding Advisory
                        </span>
                    </div>

                    <h1 style={{ fontSize: "52px", fontWeight: "900", lineHeight: "1.15", marginBottom: "20px", color: "#fff" }}>
                        Build a Digital Presence <br/>That Commands <br/>Attention.
                    </h1>

                    <p style={{ fontSize: "19px", lineHeight: "1.7", color: "rgba(255, 255, 255, 0.9)", maxWidth: "660px", marginBottom: "30px" }}>
                        We build the sovereign websites, search reputation, strategic ghostwriting, and authority assets that represent CEOs, CHROs, Founders, and enterprise executives before they walk into the room.
                    </p>

                    <div className="banner_btn_area" style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                        <div className="link_btn">
                            <Link href="/contact" className="btn_style_one" style={{ padding: "16px 36px", fontSize: "15px" }}>
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
                                    padding: "15px 30px", 
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
                                Audit Your Stature &rarr;
                            </Link>
                        </div>
                    </div>            
                </div>
            </div>
        </section>
    )
}
