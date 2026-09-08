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
                        <div className="feature_block_one" style={{ height: "100%", display: "flex", flexDirection: "column", padding: "40px 35px", borderRadius: "12px", background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid #eaedf0" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
                                <span style={{ fontSize: "12px", fontWeight: "700", color: "#8B5CF6", letterSpacing: "0.5px", fontFamily: "var(--primary-font)", display: "inline-block" }}>
                                    Target Mandate
                                </span>
                            </div>
                            <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px", color: "#0D0D14", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
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
                                    <li key={idx} style={{ padding: "12px 0", borderBottom: "1px solid #f0f3f6", fontSize: "15px", color: "#6B7280", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#8B5CF6", fontFamily: "var(--primary-font)", minWidth: "20px", paddingTop: "2px" }}>
                                            0{idx + 1}
                                        </span>
                                        <div>
                                            <strong style={{ color: "#0D0D14" }}>{role.title}:</strong> <span style={{ color: "#6B7280" }}>{role.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ background: "#F7F5FC", padding: "16px 20px", borderRadius: "8px", borderLeft: "3px solid #8B5CF6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#0D0D14" }}>
                                    Explore tailored solutions for each role
                                </p>
                                <Link href="/solutions" style={{ fontSize: "13px", fontWeight: "700", color: "#0D0D14", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                    View All Roles <i className="fa-solid fa-arrow-right" style={{ color: "#8B5CF6", fontSize: "12px" }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* What Changes in 60–90 Days */}
                    <div className="col-xl-6 col-lg-6 col-md-12 mb_40">
                        <div className="feature_block_one" style={{ height: "100%", display: "flex", flexDirection: "column", padding: "40px 35px", borderRadius: "12px", background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid #eaedf0" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="tag_text" style={{ marginBottom: "16px" }}>
                                <span style={{ fontSize: "12px", fontWeight: "700", color: "#8B5CF6", letterSpacing: "0.5px", fontFamily: "var(--primary-font)", display: "inline-block" }}>
                                    Measurable Transformation
                                </span>
                            </div>
                            <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px", color: "#0D0D14", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                                What Changes in 60–90 Days
                            </h2>
                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 25px 0", flex: 1 }}>
                                {[
                                    { anchor: "Google Page 1 Domination", desc: "100% dominated by your owned assets, verified profiles, and Tier-1 press" },
                                    { anchor: "Executive Digital HQ", desc: "Bespoke web asset providing your definitive link for board seats, keynotes, and vetting" },
                                    { anchor: "Strategic Ghostwriting", desc: "Essays published bi-weekly in your authentic voice—zero drafting time from your calendar" },
                                    { anchor: "Knowledge Graph Authority", desc: "Structured JSON-LD schema anchors your entity within Google Knowledge Graph" },
                                    { anchor: "Inbound Advisory Opportunities", desc: "Corporate board directorships (NED) and paid advisory inquiries arrive proactively" }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ padding: "12px 0", borderBottom: "1px solid #f0f3f6", fontSize: "15px", color: "#6B7280", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                        <span style={{
                                            width: "22px",
                                            height: "22px",
                                            borderRadius: "50%",
                                            background: "rgba(139, 92, 246, 0.12)",
                                            color: "#8B5CF6",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "11px",
                                            flexShrink: 0,
                                            marginTop: "2px"
                                        }}>
                                            <i className="fa-solid fa-check"></i>
                                        </span>
                                        <div>
                                            <strong style={{ color: "#0D0D14" }}>{item.anchor}:</strong> <span style={{ color: "#6B7280" }}>{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ background: "#F7F5FC", padding: "16px 20px", borderRadius: "8px", borderLeft: "3px solid #8B5CF6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#0D0D14" }}>
                                    Turnkey execution: &lt; 30 min client time per month
                                </p>
                                <Link href="/how-it-works" style={{ fontSize: "13px", fontWeight: "700", color: "#0D0D14", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                    Our Methodology <i className="fa-solid fa-arrow-right" style={{ color: "#8B5CF6", fontSize: "12px" }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
