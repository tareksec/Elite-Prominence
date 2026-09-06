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
                    <p>Elite Prominence builds a complete digital presence for senior HR leaders and consultants — website, Google reputation, and LinkedIn authority — done for you, so opportunity finds you first.</p>
                    <div className="banner_btn_area" style={{ display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "center" }}>
                        <div className="link_btn"><Link href="/contact" className="btn_style_one">Book a Strategy Call</Link></div>
                        <div className="link_btn"><Link href="/services" style={{ display: "inline-block", padding: "14px 28px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", fontWeight: "600", backdropFilter: "blur(4px)", transition: "all 0.3s ease" }}>See Our Services</Link></div>
                    </div>            
                </div>
            </div>
        </section>

        </>
    )
}
