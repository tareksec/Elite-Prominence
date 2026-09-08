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
                        <div className="feature_block_one" style={{ height: "100%", display: "flex", flexDirection: "column", padding: "40px 35px", borderRadius: "12px", background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid #eef2f6" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
                                <h6>Target Mandate</h6>
                            </div>
                            <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px", color: "#0f1013" }}>
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
                                    <li key={idx} style={{ padding: "12px 0", borderBottom: "1px solid #f0f3f6", fontSize: "15px", color: "#1e293b", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", fontFamily: "var(--primary-font)", minWidth: "20px", paddingTop: "2px" }}>
                                            0{idx + 1}
                                        </span>
                                        <div>
                                            <strong style={{ color: "#0f1013" }}>{role.title}:</strong> <span style={{ color: "#64748b" }}>{role.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ background: "#f8fafd", padding: "16px 20px", borderRadius: "8px", borderLeft: "3px solid #151619", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#1e2025" }}>
                                    Explore tailored solutions for each role
                                </p>
                                <Link href="/solutions" style={{ fontSize: "13px", fontWeight: "700", color: "#151619", textDecoration: "none" }}>
                                    View All Roles <i className="fa-solid fa-angle-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* What Changes in 60–90 Days */}
                    <div className="col-xl-6 col-lg-6 col-md-12 mb_40">
                        <div className="feature_block_one" style={{ height: "100%", display: "flex", flexDirection: "column", padding: "40px 35px", borderRadius: "12px", background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid #eef2f6" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
                                <h6>Measurable Transformation</h6>
                            </div>
                            <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px", color: "#0f1013" }}>
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
                                    <li key={idx} style={{ padding: "12px 0", borderBottom: "1px solid #f0f3f6", fontSize: "15px", color: "#475569", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#151619", marginTop: "9px", flexShrink: 0 }}></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ background: "#f8fafd", padding: "16px 20px", borderRadius: "8px", borderLeft: "3px solid #151619", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#1e2025" }}>
                                    Turnkey execution: &lt; 30 min client time per month
                                </p>
                                <Link href="/how-it-works" style={{ fontSize: "13px", fontWeight: "700", color: "#151619", textDecoration: "none" }}>
                                    Our Methodology <i className="fa-solid fa-angle-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
