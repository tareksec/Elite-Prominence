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
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <div className="banner_content" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <span className="prominence_tracker_dark">
                                Executive Reputation &amp; Digital Stature
                            </span>

                            <h1 style={{ fontSize: "clamp(32px, 5.5vw, 54px)", fontWeight: "700", lineHeight: "1.18", marginBottom: "22px", color: "#ffffff", letterSpacing: "-0.5px" }}>
                                Build a Digital Presence That Commands Attention.
                            </h1>

                            <p style={{ fontSize: "18px", lineHeight: "30px", color: "rgba(255, 255, 255, 0.88)", maxWidth: "640px", marginBottom: "32px" }}>
                                We architect the sovereign websites, search reputation, strategic ghostwriting, and authority assets that represent CEOs, CHROs, Founders, and enterprise leaders before they walk into the room.
                            </p>

                            <div className="banner_btn_area" style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                                <div className="link_btn">
                                    <Link href="/contact" className="btn_style_gold">
                                        Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="link_btn">
                                    <Link 
                                        href="/resources/assessment" 
                                        className="btn_style_two_dark"
                                    >
                                        Audit Your Stature <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}