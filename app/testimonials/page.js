'use client'
import React from 'react'
import Link from "next/link"
import ModernHeader from "@/components/layout/ModernHeader"
import ModernFooter from "@/components/layout/ModernFooter"
import Testimonial from '@/components/sections/home3/Testimonial'

export default function Testimonial_Page() {
    return (
        <div className="mlab-page">
            <ModernHeader />
            {/* Breadcrumb Navigation */}
            <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(18,19,22,0.08)", background: "#FAF9F5", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#8A8F9E" }}>
                        <Link href="/" style={{ color: "#8A8F9E", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <span style={{ color: "#121316", fontWeight: 600 }}>Client Recognition</span>
                    </div>
                </div>
            </div>

            <main>
                <Testimonial />
                <section style={{ padding: "80px 0 100px", background: "#FFFFFF", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ maxWidth: "720px", margin: "0 auto", background: "#FAF9F5", padding: "48px 40px", borderRadius: "24px", border: "1.5px solid rgba(18,19,22,0.08)" }}>
                            <span className="editorial-badge" style={{ marginBottom: "16px" }}>
                                <span className="editorial-badge-dot">✦</span> CONFIDENTIAL ENGAGEMENT
                            </span>
                            <h3 style={{ fontWeight: 850, fontSize: "28px", marginBottom: "14px", color: "#121316", letterSpacing: "-0.02em" }}>
                                Ready to Build Your Sovereign Presence?
                            </h3>
                            <p style={{ color: "#555A68", fontSize: "16px", marginBottom: "28px", lineHeight: "1.6" }}>
                                Join our current cohort of senior enterprise leaders, founders, and independent advisors.
                            </p>
                            <Link href="/contact" className="prominence-btn-primary">
                                <span>Book a Strategy Call</span>
                                <span>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <ModernFooter />
        </div>
    )
}