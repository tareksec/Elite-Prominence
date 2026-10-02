'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function ExecutiveCaseStudy() {
    const [activeTab, setActiveTab] = useState('process')

    return (
        <section
            className="executive_case_study_section"
            style={{
                backgroundColor: "#FAF8F5",
                padding: "110px 0",
                position: "relative",
                borderBottom: "1.5px solid #E5E7EB",
                fontFamily: "var(--primary-font, -apple-system, sans-serif)"
            }}
        >
            <div className="container">
                {/* Section Header: Editorial Split */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        flexWrap: "wrap",
                        gap: "24px",
                        marginBottom: "46px"
                    }}
                >
                    <div>
                        <div style={{ marginBottom: "14px" }}>
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "6px 16px",
                                    borderRadius: "9999px",
                                    backgroundColor: "#EDE9FE",
                                    color: "#6D28D9",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    border: "1.5px solid rgba(109, 40, 217, 0.2)"
                                }}
                            >
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7C3AED" }} />
                                Executive Proof of Concept
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: "clamp(28px, 3.8vw, 42px)",
                            fontWeight: "800",
                            color: "#0F1117",
                            lineHeight: "1.16",
                            letterSpacing: "-0.8px",
                            margin: 0
                        }}>
                            From Operator to Boardroom Authority in 90 Days
                        </h2>
                    </div>

                    <div>
                        <p style={{
                            fontSize: "16.5px",
                            color: "#4B5563",
                            lineHeight: "1.7",
                            maxWidth: "520px",
                            margin: 0
                        }}>
                            How a senior Vice President of People at a $4B global technology enterprise transformed an invisible online presence into two Non-Executive Director (NED) board appointments.
                        </p>
                    </div>
                </div>

                {/* Key Outcome Metrics Strip */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "18px",
                    marginBottom: "45px"
                }}>
                    {[
                        { metric: "2 Board Seats", label: "NED Appointments in 90 Days", icon: "fa-solid fa-chair" },
                        { metric: "Page 1 #1", label: "Google Placement for Exact Name", icon: "fa-solid fa-magnifying-glass" },
                        { metric: "+420%", label: "Inbound Recruiter & CEO Outreach", icon: "fa-solid fa-arrow-trend-up" },
                        { metric: "< 30 Mins", label: "Monthly Executive Time Invested", icon: "fa-solid fa-clock" }
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="neo-card"
                            style={{
                                backgroundColor: "#ffffff",
                                padding: "26px 20px",
                                borderRadius: "20px",
                                border: "1.5px solid #0F1117",
                                boxShadow: "4px 4px 0px #0F1117",
                                textAlign: "center",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}
                        >
                            <div style={{ 
                                width: "42px", 
                                height: "42px", 
                                margin: "0 auto 12px", 
                                borderRadius: "12px", 
                                background: "#EDE9FE", 
                                color: "#6D28D9", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                fontSize: "16px",
                                border: "1.5px solid rgba(124, 58, 237, 0.2)"
                            }}>
                                <i className={stat.icon}></i>
                            </div>
                            <div style={{ fontSize: "24px", fontWeight: "800", color: "#0F1117", letterSpacing: "-0.5px" }}>
                                {stat.metric}
                            </div>
                            <div style={{ fontSize: "12.5px", fontWeight: "600", color: "#4B5563", marginTop: "4px" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Interactive 3-Stage Narrative: Before -> Process -> After */}
                <div style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    border: "1px solid #eaedf0",
                    boxShadow: "0 16px 40px rgba(13, 13, 20, 0.05)",
                    overflow: "hidden"
                }}>
                    {/* Navigation Tabs */}
                    <div 
                        role="tablist"
                        aria-label="Case study progression stages"
                        style={{
                            display: "flex",
                            borderBottom: "1px solid #eaedf0",
                            backgroundColor: "#F7F5FC",
                            overflowX: "auto"
                        }}
                    >
                        {[
                            { key: "before", label: "1. Initial Challenge" },
                            { key: "process", label: "2. The 90-Day Sprint" },
                            { key: "after", label: "3. Measurable Outcomes" }
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                style={{
                                    flex: 1,
                                    padding: "14px 20px",
                                    border: "none",
                                    backgroundColor: activeTab === tab.key ? "#ffffff" : "transparent",
                                    borderBottom: activeTab === tab.key ? "3px solid #8B5CF6" : "3px solid transparent",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    transition: "all 0.2s ease",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                <span style={{
                                    fontSize: "14px",
                                    fontWeight: activeTab === tab.key ? "700" : "600",
                                    color: activeTab === tab.key ? "#0D0D14" : "#4B5563",
                                    fontFamily: "var(--primary-font)"
                                }}>
                                    {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Panels */}
                    <div style={{ padding: "40px 35px" }}>
                        {activeTab === 'before' && (
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#b91c1c", backgroundColor: "#fef2f2", padding: "4px 10px", borderRadius: "6px", border: "1px solid #fecaca" }}>
                                        The Problem
                                    </span>
                                    <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#0D0D14", marginTop: "12px", marginBottom: "16px", fontFamily: "var(--primary-font)" }}>
                                        18 Years of Operational Excellence — Zero Owned Digital Footprint
                                    </h3>
                                    <p style={{ fontSize: "15.5px", color: "#6B7280", lineHeight: "1.7", marginBottom: "16px" }}>
                                        Despite orchestrating major M&amp;A talent consolidations and leading 2,500+ employees, our client&apos;s name search on Google returned an outdated alumni bulletin and an unrelated namesake on page one.
                                    </p>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {[
                                             "No personal domain or definitive executive CV online",
                                             "Due diligence committees found silence instead of authority",
                                             "Inactive LinkedIn profile with zero thought leadership voice",
                                             "Overlooked for advisory mandates due to lack of public credibility"
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "#6B7280", marginBottom: "10px" }}>
                                                <span style={{ color: "#ef4444", fontWeight: "700" }}>&times;</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{ backgroundColor: "#F7F5FC", padding: "30px", borderRadius: "12px", border: "1px solid #eaedf0" }}>
                                        <div style={{ fontSize: "12px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                                            Search Audit Baseline (Before)
                                        </div>
                                        <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "8px", border: "1px solid #cbd5e1", marginBottom: "14px", fontSize: "13px" }}>
                                            <span style={{ color: "#0D0D14", fontWeight: "600" }}>Search: &quot;[Executive Name] HR Leader&quot;</span>
                                            <div style={{ color: "#6B7280", fontSize: "11px", marginTop: "2px" }}>https://random-university.edu/bulletin-2012</div>
                                            <div style={{ color: "#4d5156", marginTop: "4px" }}>Result: Outdated 2012 student committee mention... No active corporate profile found.</div>
                                        </div>
                                        <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, fontStyle: "italic" }}>
                                            &ldquo;I was advising our board internally every quarter, but external search chairs had no way to verify my governance stature.&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'process' && (
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#92400e", backgroundColor: "#fef3c7", padding: "4px 10px", borderRadius: "6px", border: "1px solid #fde68a" }}>
                                        The Execution
                                    </span>
                                    <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#0D0D14", marginTop: "12px", marginBottom: "16px", fontFamily: "var(--primary-font)" }}>
                                        The 90-Day Tripartite Done-For-You Sprint
                                    </h3>
                                    <p style={{ fontSize: "15.5px", color: "#6B7280", lineHeight: "1.7", marginBottom: "16px" }}>
                                        Prominence took total operational ownership. The client participated in one 45-minute positioning interview; our team executed the architecture end-to-end.
                                    </p>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                        {[
                                            { phase: "Days 1–30", title: "Proprietary Digital HQ", desc: "Launched custom domain website with board biography, M&A case studies, and speaker kit." },
                                            { phase: "Days 31–60", title: "Google Search Reputation", desc: "Structured schema deployment, tier-1 syndicated interviews, and Knowledge Panel equity." },
                                            { phase: "Days 61–90", title: "Discreet LinkedIn Ghostwriting", desc: "Bi-weekly governance essays targeting nominating committees and Fortune 500 CEOs." }
                                        ].map((p, idx) => (
                                            <div key={idx} style={{ display: "flex", gap: "14px", padding: "12px 14px", backgroundColor: "#F7F5FC", borderRadius: "10px", border: "1px solid #edf2f7" }}>
                                                <div style={{ fontWeight: "700", fontSize: "12px", color: "#0D0D14", backgroundColor: "#eaedf0", padding: "4px 10px", borderRadius: "6px", height: "fit-content", whiteSpace: "nowrap" }}>
                                                    {p.phase}
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#0D0D14", fontFamily: "var(--primary-font)" }}>{p.title}</div>
                                                    <div style={{ fontSize: "13px", color: "#4B5563" }}>{p.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{ backgroundColor: "#F7F5FC", padding: "32px", borderRadius: "12px", border: "1px solid #eaedf0", borderLeft: "4px solid #6D28D9" }}>
                                        <div style={{ fontSize: "12px", letterSpacing: "0.5px", color: "#6D28D9", fontWeight: "700", marginBottom: "8px" }}>
                                            Client Time Investment
                                        </div>
                                        <div style={{ fontSize: "28px", fontWeight: "700", marginBottom: "8px", fontFamily: "var(--primary-font)", color: "#0D0D14" }}>
                                            25 Minutes / Month
                                        </div>
                                        <p style={{ fontSize: "14.5px", color: "#4B5563", lineHeight: "1.6", marginBottom: "20px" }}>
                                            Zero ghostwriting burden. The client sent quick WhatsApp voice notes while commuting; our team converted insights into boardroom-caliber thought leadership.
                                        </p>
                                        <div style={{ padding: "14px 18px", backgroundColor: "#ffffff", borderRadius: "10px", border: "1px solid #eaedf0" }}>
                                            <span style={{ fontSize: "12px", color: "#4B5563" }}>Strict NDA Compliance:</span>
                                            <div style={{ fontSize: "13px", color: "#0D0D14", fontWeight: "600", marginTop: "2px" }}>
                                                100% anonymized corporate data with zero trade-secret disclosures.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'after' && (
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px", color: "#166534", backgroundColor: "#f0fdf4", padding: "4px 10px", borderRadius: "6px", border: "1px solid #bbf7d0" }}>
                                        The Transformation
                                    </span>
                                    <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#0D0D14", marginTop: "12px", marginBottom: "16px", fontFamily: "var(--primary-font)" }}>
                                        Inbound Stature Preceding Every Meeting
                                    </h3>
                                    <p style={{ fontSize: "15.5px", color: "#6B7280", lineHeight: "1.7", marginBottom: "16px" }}>
                                        Within 90 days of launch, the client became the definitive authority in strategic HR governance for their sector. Opportunities began finding them asynchronously.
                                    </p>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {[
                                            "Secured 2 paid Non-Executive Director (NED) board advisory roles",
                                            "Invited as keynote panelist at Global People Summit without pitching",
                                            "Ranked #1 on Google for full name with verified Knowledge Graph signals",
                                            "Over 65,000 organic impressions on LinkedIn from C-suite peers"
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "#0D0D14", fontWeight: "600", marginBottom: "10px" }}>
                                                <i className="fa-solid fa-check" style={{ color: "#15803d", fontSize: "13px" }}></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{
                                        position: "relative",
                                        borderRadius: "14px",
                                        overflow: "hidden",
                                        boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                                        border: "1px solid #eaedf0",
                                        backgroundColor: "#ffffff"
                                    }}>
                                        <img
                                            src="/assets/images/elite/executive_boardroom_authority.jpg"
                                            alt="Executive Boardroom Authority & Stature"
                                            style={{
                                                width: "100%",
                                                height: "230px",
                                                objectFit: "cover",
                                                objectPosition: "center 20%",
                                                display: "block"
                                            }}
                                        />
                                        <div style={{ padding: "24px 26px" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fa-solid fa-star" style={{ color: "#8B5CF6", fontSize: "12px" }}></i>
                                                ))}
                                                <span style={{ fontSize: "11px", fontWeight: "700", color: "#166534", backgroundColor: "#f0fdf4", padding: "2px 8px", borderRadius: "10px", marginLeft: "6px", border: "1px solid #bbf7d0" }}>
                                                    Verified Client Outcome
                                                </span>
                                            </div>
                                            <p style={{ fontSize: "15px", color: "#0D0D14", lineHeight: "1.65", fontStyle: "italic", marginBottom: "16px" }}>
                                                &ldquo;Prominence shifted how the market perceives me. When headhunters and CEOs Google me now, they see an authoritative board candidate rather than just another corporate executive.&rdquo;
                                            </p>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                                                <div>
                                                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#0D0D14", fontFamily: "var(--primary-font)" }}>
                                                        VP of People &amp; Board Director
                                                    </div>
                                                    <div style={{ fontSize: "12px", color: "#6B7280" }}>
                                                        Global Tech Enterprise ($4B Market Cap)
                                                    </div>
                                                </div>
                                                <div style={{ textAlign: "right" }}>
                                                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#6D28D9", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                        90-Day Sprint
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom Action Footer */}
                    <div style={{
                        padding: "26px 35px",
                        backgroundColor: "#F7F5FC",
                        borderTop: "1px solid #eaedf0",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        gap: "14px"
                    }}>
                        <div style={{ fontSize: "15px", color: "#4B5563", fontWeight: "600" }}>
                            Want similar asymmetric trust for board seats and keynote invitations?
                        </div>
                        <Link href="/contact" className="btn_style_one btn_md">
                            Book Confidential Brand Assessment <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
