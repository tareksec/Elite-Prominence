'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function ExecutiveCaseStudy() {
    const [activeTab, setActiveTab] = useState('process')

    return (
        <section
            className="executive_case_study_section"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="550"
            style={{
                backgroundColor: "#FAF8F2",
                padding: "95px 0 90px",
                position: "relative",
                borderTop: "1px solid #e5e3db",
                borderBottom: "1px solid #e5e3db",
                fontFamily: "var(--primary-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
        >
            <div className="container">
                {/* Section Header */}
                <div className="row justify-content-center text-center" style={{ marginBottom: "50px" }}>
                    <div className="col-xl-8 col-lg-10">
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "6px 16px",
                            background: "rgba(22, 45, 32, 0.08)",
                            borderRadius: "30px",
                            fontSize: "12px",
                            fontWeight: "700",
                            color: "#162d20",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            marginBottom: "14px"
                        }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#D29D2B" }}></span>
                            Executive Proof of Concept
                        </div>

                        <h2 style={{
                            fontSize: "36px",
                            fontWeight: "800",
                            color: "#162d20",
                            lineHeight: "1.25",
                            letterSpacing: "-0.5px",
                            marginBottom: "16px"
                        }}>
                            Case Study: From Operational Operator to Boardroom Authority in 90 Days
                        </h2>

                        <p style={{
                            fontSize: "16.5px",
                            color: "#52525b",
                            lineHeight: "1.7",
                            maxWidth: "680px",
                            margin: "0 auto"
                        }}>
                            How a senior Vice President of People at a $4B global technology enterprise transformed an invisible online presence into two Non-Executive Director (NED) board appointments.
                        </p>
                    </div>
                </div>

                {/* Key Outcome Metrics Strip */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "20px",
                    marginBottom: "45px"
                }}>
                    {[
                        { metric: "2 Board Seats", label: "NED Appointments in 90 Days", icon: "🏛️" },
                        { metric: "Page 1 #1", label: "Google Placement for Exact Name", icon: "🔍" },
                        { metric: "+420%", label: "Inbound Recruiter & CEO Outreach", icon: "📈" },
                        { metric: "< 30 Mins", label: "Monthly Executive Time Invested", icon: "⏱️" }
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            style={{
                                backgroundColor: "#ffffff",
                                padding: "24px 20px",
                                borderRadius: "14px",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                                textAlign: "center"
                            }}
                        >
                            <div style={{ fontSize: "24px", marginBottom: "8px" }}>{stat.icon}</div>
                            <div style={{ fontSize: "26px", fontWeight: "800", color: "#162d20", letterSpacing: "-0.5px" }}>
                                {stat.metric}
                            </div>
                            <div style={{ fontSize: "12.5px", fontWeight: "600", color: "#64748b", marginTop: "4px" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Interactive 3-Stage Narrative: Before -> Process -> After */}
                <div style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.06)",
                    overflow: "hidden"
                }}>
                    {/* Navigation Tabs */}
                    <div style={{
                        display: "flex",
                        borderBottom: "1px solid #e2e8f0",
                        backgroundColor: "#f8fafc",
                        overflowX: "auto"
                    }}>
                        {[
                            { key: "before", label: "1. The Initial Challenge (Before)", badge: "Invisible Search" },
                            { key: "process", label: "2. The 90-Day Sprint (Process)", badge: "3 Pillars Executed" },
                            { key: "after", label: "3. Measurable Outcomes (After)", badge: "Board Appointed" }
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                onClick={() => setActiveTab(tab.key)}
                                style={{
                                    flex: 1,
                                    padding: "18px 24px",
                                    border: "none",
                                    backgroundColor: activeTab === tab.key ? "#ffffff" : "transparent",
                                    borderBottom: activeTab === tab.key ? "3px solid #162d20" : "3px solid transparent",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "10px",
                                    transition: "all 0.2s ease",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                <span style={{
                                    fontSize: "14px",
                                    fontWeight: "700",
                                    color: activeTab === tab.key ? "#162d20" : "#64748b"
                                }}>
                                    {tab.label}
                                </span>
                                <span style={{
                                    fontSize: "11px",
                                    fontWeight: "600",
                                    padding: "2px 8px",
                                    borderRadius: "12px",
                                    backgroundColor: activeTab === tab.key ? "rgba(22, 45, 32, 0.1)" : "#e2e8f0",
                                    color: activeTab === tab.key ? "#162d20" : "#64748b"
                                }}>
                                    {tab.badge}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Panels */}
                    <div style={{ padding: "40px 35px" }}>
                        {activeTab === 'before' && (
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <span style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", color: "#dc2626", backgroundColor: "#fef2f2", padding: "4px 10px", borderRadius: "6px", border: "1px solid #fecaca" }}>
                                        The Problem
                                    </span>
                                    <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#162d20", marginTop: "12px", marginBottom: "16px" }}>
                                        18 Years of Operational Excellence — Zero Owned Digital Footprint
                                    </h3>
                                    <p style={{ fontSize: "15.5px", color: "#475569", lineHeight: "1.7", marginBottom: "16px" }}>
                                        Despite orchestrating major M&A talent consolidations and leading 2,500+ employees, our client's name search on Google returned an outdated alumni bulletin and an unrelated namesake on page one.
                                    </p>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {[
                                            "No personal domain or definitive executive CV online",
                                            "Due diligence committees found silence instead of authority",
                                            "Inactive LinkedIn profile with zero thought leadership voice",
                                            "Overlooked for advisory mandates due to lack of public credibility"
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "#64748b", marginBottom: "10px" }}>
                                                <span style={{ color: "#ef4444", fontWeight: "800" }}>&times;</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{ backgroundColor: "#f8fafc", padding: "30px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                                        <div style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                                            Search Audit Baseline (Before)
                                        </div>
                                        <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "8px", border: "1px solid #cbd5e1", marginBottom: "14px", fontSize: "13px" }}>
                                            <span style={{ color: "#1a0dab", fontWeight: "600" }}>Search: "[Executive Name] HR Leader"</span>
                                            <div style={{ color: "#006621", fontSize: "11px", marginTop: "2px" }}>https://random-university.edu/bulletin-2012</div>
                                            <div style={{ color: "#4d5156", marginTop: "4px" }}>Result: Outdated 2012 student committee mention... No active corporate profile found.</div>
                                        </div>
                                        <p style={{ fontSize: "13px", color: "#64748b", margin: 0, fontStyle: "italic" }}>
                                            "I was advising our board internally every quarter, but external search chairs had no way to verify my governance stature."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'process' && (
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <span style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", color: "#D29D2B", backgroundColor: "rgba(210, 157, 43, 0.12)", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(210, 157, 43, 0.3)" }}>
                                        The Execution
                                    </span>
                                    <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#162d20", marginTop: "12px", marginBottom: "16px" }}>
                                        The 90-Day Tripartite Done-For-You Sprint
                                    </h3>
                                    <p style={{ fontSize: "15.5px", color: "#475569", lineHeight: "1.7", marginBottom: "16px" }}>
                                        Elite Prominence took total operational ownership. The client participated in one 45-minute positioning interview; our team executed the architecture end-to-end.
                                    </p>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                        {[
                                            { phase: "Days 1–30", title: "Proprietary Digital HQ", desc: "Launched custom domain website with board biography, M&A case studies, and speaker kit." },
                                            { phase: "Days 31–60", title: "Google Search Reputation", desc: "Structured schema deployment, tier-1 syndicated interviews, and Knowledge Panel equity." },
                                            { phase: "Days 61–90", title: "Discreet LinkedIn Ghostwriting", desc: "Bi-weekly governance essays targeting nominating committees and Fortune 500 CEOs." }
                                        ].map((p, idx) => (
                                            <div key={idx} style={{ display: "flex", gap: "14px", padding: "12px 14px", backgroundColor: "#f8fafc", borderRadius: "10px", border: "1px solid #edf2f7" }}>
                                                <div style={{ fontWeight: "800", fontSize: "12px", color: "#162d20", backgroundColor: "#e2e8f0", padding: "4px 10px", borderRadius: "6px", height: "fit-content", whiteSpace: "nowrap" }}>
                                                    {p.phase}
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#162d20" }}>{p.title}</div>
                                                    <div style={{ fontSize: "13px", color: "#64748b" }}>{p.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{ backgroundColor: "#162d20", padding: "32px", borderRadius: "16px", color: "#ffffff" }}>
                                        <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#D29D2B", fontWeight: "700", marginBottom: "8px" }}>
                                            Client Time Investment
                                        </div>
                                        <div style={{ fontSize: "28px", fontWeight: "800", marginBottom: "8px" }}>
                                            25 Minutes / Month
                                        </div>
                                        <p style={{ fontSize: "14.5px", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
                                            Zero ghostwriting burden. The client sent quick WhatsApp voice notes while commuting; our team converted insights into boardroom-caliber thought leadership.
                                        </p>
                                        <div style={{ padding: "14px 18px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)" }}>
                                            <span style={{ fontSize: "12px", color: "#94a3b8" }}>Strict NDA Compliance:</span>
                                            <div style={{ fontSize: "13px", color: "#f8fafc", fontWeight: "600", marginTop: "2px" }}>
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
                                    <span style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", color: "#16a34a", backgroundColor: "#f0fdf4", padding: "4px 10px", borderRadius: "6px", border: "1px solid #bbf7d0" }}>
                                        The Transformation
                                    </span>
                                    <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#162d20", marginTop: "12px", marginBottom: "16px" }}>
                                        Inbound Stature Preceding Every Meeting
                                    </h3>
                                    <p style={{ fontSize: "15.5px", color: "#475569", lineHeight: "1.7", marginBottom: "16px" }}>
                                        Within 90 days of launch, the client became the definitive authority in strategic HR governance for their sector. Opportunities began finding them asynchronously.
                                    </p>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {[
                                            "Secured 2 paid Non-Executive Director (NED) board advisory roles",
                                            "Invited as keynote panelist at Global People Summit without pitching",
                                            "Ranked #1 on Google for full name with verified Knowledge Graph signals",
                                            "Over 65,000 organic impressions on LinkedIn from C-suite peers"
                                        ].map((item, i) => (
                                            <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14.5px", color: "#1b2534", fontWeight: "600", marginBottom: "10px" }}>
                                                <span style={{ color: "#16a34a", fontWeight: "800" }}>&#10003;</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div style={{ backgroundColor: "#f0fdf4", padding: "30px", borderRadius: "16px", border: "1px solid #bbf7d0" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} style={{ color: "#D29D2B", fontSize: "18px" }}>★</span>
                                            ))}
                                        </div>
                                        <p style={{ fontSize: "16px", color: "#166534", lineHeight: "1.7", fontStyle: "italic", marginBottom: "18px" }}>
                                            "Elite Prominence shifted how the market perceives me. When headhunters and CEOs Google me now, they see an authoritative board candidate rather than just another corporate executive."
                                        </p>
                                        <div style={{ fontSize: "14px", fontWeight: "700", color: "#162d20" }}>
                                            VP of People & Board Director
                                        </div>
                                        <div style={{ fontSize: "12px", color: "#64748b" }}>
                                            Global Tech Enterprise ($4B Market Cap)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom Action Footer */}
                    <div style={{
                        padding: "20px 35px",
                        backgroundColor: "#f8fafc",
                        borderTop: "1px solid #e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "16px"
                    }}>
                        <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>
                            Want similar asymmetric trust for board seats and keynote invitations?
                        </div>
                        <Link
                            href="/contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "11px 24px",
                                borderRadius: "9999px",
                                backgroundColor: "#162d20",
                                color: "#ffffff",
                                fontSize: "13.5px",
                                fontWeight: "700",
                                textDecoration: "none",
                                transition: "all 0.2s ease"
                            }}
                        >
                            <span>Book Confidential Brand Assessment &rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
