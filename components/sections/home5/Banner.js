'use client'
import React from 'react'
import Link from "next/link"


export default function Banner() {
    return (
        <> 

        <section className="banner_style_five">
            <div className="bg_layer" style={{ backgroundImage: "url(/assets/images/elite/hero_executive.jpg)", backgroundPosition: "right 25%", backgroundSize: "cover" }}></div>
            <div className="container">
                <div className="banner_content" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                    <h1>Success Got You Here. <br/>Visibility Takes You <br/>Further.</h1>
                    <p>As a specialized personal branding agency, Elite Prominence builds a complete executive brand and digital presence for senior HR leaders and consultants — website, Google reputation, and LinkedIn authority — done for you, so opportunity finds you first.</p>
                    <div className="banner_btn_area" style={{ display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "center", marginTop: "25px" }}>
                        <div className="link_btn"><Link href="/contact" className="btn_style_one">Book a Strategy Call</Link></div>
                        <div className="link_btn">
                            <Link 
                                href="/services" 
                                className="banner_secondary_btn"
                                style={{ 
                                    display: "inline-flex", 
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "12px 28px", 
                                    borderRadius: "9999px", 
                                    border: "1px solid rgba(255, 255, 255, 0.35)", 
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
                                See Our Services &rarr;
                            </Link>
                        </div>
                    </div>            
                </div>
            </div>
        </section>

        </>
    )
}
