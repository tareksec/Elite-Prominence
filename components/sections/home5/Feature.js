'use client'
import React from 'react'
import Link from 'next/link'

export default function Feature_Two() {
    return (
        <section className="feature_section home_five pt_100 pb_90">
            <div className="container">
                <div className="row">
                    {/* Who We Serve */}
                    <div className="col-xl-6 col-lg-6 col-md-12 mb_40">
                        <div className="feature_block_one" style={{ height: "100%", display: "flex", flexDirection: "column", padding: "40px 35px", borderRadius: "12px", background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", border: "1px solid #eef2f6" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_icon mb_20">
                                <i className="icon-48" style={{ color: "#2460e2", fontSize: "36px" }}></i>
                            </div>
                            <span style={{ fontSize: "12px", fontWeight: "700", color: "#2460e2", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
                                Target Mandate
                            </span>
                            <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "20px", color: "#0d1b2a" }}>
                                Who Prominence Advises
                            </h2>
                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 25px 0", flex: 1 }}>
                                {[
                                    { title: "CEOs & Enterprise Presidents", desc: "Leading $50M+ organizations or preparing for high-stakes capital rounds" },
                                    { title: "CHROs & Senior People Executives", desc: "Positioning for paid corporate board directorships (NED) and industry authority" },
                                    { title: "Enterprise Founders & Managing Directors", desc: "Ensuring personal reputation elevates enterprise valuation and investor due diligence" },
                                    { title: "Senior Corporate Executives", desc: "SVPs and EVPs transitioning into public board roles and keynote stages" },
                                    { title: "Elite Consultants & Advisors", desc: "Commanding high five-figure monthly retainers through sovereign positioning" }
                                ].map((role, idx) => (
                                    <li key={idx} style={{ padding: "12px 0", borderBottom: "1px solid #f0f3f6", fontSize: "15px", color: "#1e293b", display: "flex", alignItems: "flex-start" }}>
                                        <span style={{ color: "#2460e2", marginRight: "12px", fontWeight: "700", fontSize: "16px", marginTop: "2px" }}>✓</span>
                                        <div>
                                            <strong>{role.title}:</strong> <span style={{ color: "#64748b" }}>{role.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ background: "#f8fafd", padding: "16px 20px", borderRadius: "8px", borderLeft: "4px solid #2460e2", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#1b2534" }}>
                                    Explore tailored solutions for each role
                                </p>
                                <Link href="/solutions" style={{ fontSize: "13px", fontWeight: "700", color: "#2460e2", textDecoration: "none" }}>
                                    View All Roles →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* What Changes in 60–90 Days */}
                    <div className="col-xl-6 col-lg-6 col-md-12 mb_40">
                        <div className="feature_block_one" style={{ height: "100%", display: "flex", flexDirection: "column", padding: "40px 35px", borderRadius: "12px", background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", border: "1px solid #eef2f6" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="tag_icon mb_20">
                                <i className="icon-49" style={{ color: "#10b981", fontSize: "36px" }}></i>
                            </div>
                            <span style={{ fontSize: "12px", fontWeight: "700", color: "#10b981", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
                                Measurable Transformation
                            </span>
                            <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "20px", color: "#0d1b2a" }}>
                                What Changes in 60–90 Days
                            </h2>
                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 25px 0", flex: 1 }}>
                                {[
                                    "Google Page 1 search results are 100% dominated by your owned assets, verified profiles, and positive press",
                                    "A bespoke Next.js Executive Digital HQ provides your definitive link for board nominations, speaker applications, and email signatures",
                                    "Strategic, ghostwritten essays published bi-weekly in your authentic voice—demanding zero drafting time from your calendar",
                                    "Structured JSON-LD schema markup anchors your entity within Google's Knowledge Graph",
                                    "Inbound requests for corporate board seats, keynote appearances, and advisory mandates begin arriving proactively"
                                ].map((item, idx) => (
                                    <li key={idx} style={{ padding: "12px 0", borderBottom: "1px solid #f0f3f6", fontSize: "15px", color: "#475569", display: "flex", alignItems: "flex-start" }}>
                                        <span style={{ color: "#10b981", marginRight: "12px", fontWeight: "700", fontSize: "16px", lineHeight: "1" }}>✦</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ background: "#ecfdf5", padding: "16px 20px", borderRadius: "8px", borderLeft: "4px solid #10b981", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#065f46" }}>
                                    Turnkey execution: &lt; 30 min client time per month
                                </p>
                                <Link href="/how-it-works" style={{ fontSize: "13px", fontWeight: "700", color: "#059669", textDecoration: "none" }}>
                                    Our Methodology →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
