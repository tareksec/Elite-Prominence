'use client'
import React from 'react'
import Link from 'next/link'

export default function Feature_Two() {
    return (
        <section
            className="prominence_features_section"
            style={{
                backgroundColor: "#F7F5FC",
                padding: "90px 0 110px",
                position: "relative",
                borderTop: "1px solid #eaedf0",
                borderBottom: "1px solid #eaedf0",
                fontFamily: "var(--primary-font, -apple-system, sans-serif)"
            }}
        >
            <div className="container">
                {/* Section Header: Editorial Split */}
                <div className="prominence_header_split" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: "24px",
                    marginBottom: "48px"
                }}>
                    <div>
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "6px 14px",
                            background: "rgba(109, 40, 217, 0.08)",
                            borderRadius: "6px",
                            fontSize: "11.5px",
                            fontWeight: "700",
                            color: "#6D28D9",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            marginBottom: "14px",
                            border: "1px solid rgba(109, 40, 217, 0.16)"
                        }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6D28D9" }}></span>
                            Executive Outcome Architecture
                        </div>

                        <h2 style={{
                            fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                            fontSize: "clamp(28px, 3.8vw, 40px)",
                            fontWeight: "700",
                            color: "#0D0D14",
                            lineHeight: "1.22",
                            letterSpacing: "-0.5px",
                            margin: 0
                        }}>
                            What Changes in 6–12 Months
                        </h2>
                    </div>

                    <div>
                        <p style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            lineHeight: "28px",
                            maxWidth: "520px",
                            margin: 0
                        }}>
                            We systematically transform uncurated search fragmentation into sovereign executive gravity. You stop pursuing opportunity — high-conviction mandates find you first.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Card 1: Google Page 1 Search Authority (Col-xl-5) */}
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div
                            className="feature_card_executive"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="500"
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                                border: "1px solid #eaedf0",
                                padding: "36px 32px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                boxShadow: "0 10px 30px rgba(13, 13, 20, 0.04)",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            {/* Subtle background decorative accent */}
                            <div style={{
                                position: "absolute",
                                top: "-40px",
                                right: "-40px",
                                width: "140px",
                                height: "140px",
                                background: "radial-gradient(circle, rgba(109, 40, 217, 0.08) 0%, rgba(255,255,255,0) 70%)",
                                borderRadius: "50%",
                                pointerEvents: "none"
                            }}></div>

                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "22px" }}>
                                    <div style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "12px",
                                        background: "linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#ffffff",
                                        fontSize: "18px",
                                        boxShadow: "0 6px 16px rgba(109, 40, 217, 0.25)"
                                    }}>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    <span style={{
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "0.8px",
                                        color: "#059669",
                                        backgroundColor: "rgba(5, 150, 105, 0.08)",
                                        padding: "4px 10px",
                                        borderRadius: "20px",
                                        border: "1px solid rgba(5, 150, 105, 0.2)"
                                    }}>
                                        PAGE 1 DOMINANCE
                                    </span>
                                </div>

                                <h3 style={{
                                    fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    color: "#0D0D14",
                                    marginBottom: "12px",
                                    letterSpacing: "-0.3px"
                                }}>
                                    Google Page 1 Search Authority
                                </h3>

                                <p style={{
                                    fontSize: "15px",
                                    lineHeight: "26px",
                                    color: "#4B5563",
                                    marginBottom: "28px"
                                }}>
                                    When nominating committees, capital partners, and peers search your name, page one confirms your stature — with your verified personal domain, Knowledge Graph entity, and positive editorial footprint.
                                </p>
                            </div>

                            {/* Bespoke Interactive Executive Google Search & Entity Mockup */}
                            <div style={{
                                background: "#0D0D14",
                                borderRadius: "12px",
                                padding: "20px",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                color: "#ffffff",
                                boxShadow: "0 12px 28px rgba(13, 13, 20, 0.18)"
                            }}>
                                {/* Mini Search Bar */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    background: "rgba(255, 255, 255, 0.06)",
                                    borderRadius: "8px",
                                    padding: "8px 12px",
                                    marginBottom: "14px",
                                    border: "1px solid rgba(255, 255, 255, 0.08)"
                                }}>
                                    <i className="fa-brands fa-google" style={{ color: "#8B5CF6", fontSize: "14px" }}></i>
                                    <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.85)", fontWeight: "500" }}>
                                        [Executive Name] — Board Director & Advisor
                                    </span>
                                </div>

                                {/* Verified Result Card */}
                                <div style={{
                                    background: "rgba(255, 255, 255, 0.03)",
                                    border: "1px solid rgba(139, 92, 246, 0.25)",
                                    borderRadius: "8px",
                                    padding: "12px 14px",
                                    marginBottom: "12px"
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                                        <span style={{ fontSize: "11px", color: "#A78BFA" }}>prominence.agency › executive</span>
                                        <span style={{
                                            fontSize: "9px",
                                            background: "rgba(16, 185, 129, 0.15)",
                                            color: "#10B981",
                                            padding: "2px 6px",
                                            borderRadius: "4px",
                                            fontWeight: "700"
                                        }}>
                                            #1 VERIFIED
                                        </span>
                                    </div>
                                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#ffffff", marginBottom: "4px" }}>
                                        Official Executive Digital HQ | Advisory & Governance
                                    </div>
                                    <div style={{ fontSize: "11.5px", color: "rgba(255, 255, 255, 0.6)", lineHeight: "17px" }}>
                                        Senior enterprise leader, board director, and advisor. Verified Google Knowledge Graph entity profile.
                                    </div>
                                </div>

                                {/* Status Footer */}
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontSize: "11px",
                                    paddingTop: "6px"
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#10B981", fontWeight: "600" }}>
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>Knowledge Panel Verified</span>
                                    </div>
                                    <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                                        Stature Index: <strong style={{ color: "#ffffff" }}>98.4%</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Inbound Board & Advisory Velocity (Col-xl-7) */}
                    <div className="col-xl-7 col-lg-6 col-md-12">
                        <div
                            className="feature_card_executive"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="600"
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                                border: "1px solid #eaedf0",
                                padding: "36px 32px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                boxShadow: "0 10px 30px rgba(13, 13, 20, 0.04)",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            {/* Subtle background decorative accent */}
                            <div style={{
                                position: "absolute",
                                top: "-40px",
                                right: "-40px",
                                width: "160px",
                                height: "160px",
                                background: "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, rgba(255,255,255,0) 70%)",
                                borderRadius: "50%",
                                pointerEvents: "none"
                            }}></div>

                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "22px" }}>
                                    <div style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "12px",
                                        background: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#ffffff",
                                        fontSize: "18px",
                                        boxShadow: "0 6px 16px rgba(236, 72, 153, 0.25)"
                                    }}>
                                        <i className="fa-solid fa-chess-king"></i>
                                    </div>
                                    <span style={{
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "0.8px",
                                        color: "#6D28D9",
                                        backgroundColor: "rgba(109, 40, 217, 0.08)",
                                        padding: "4px 10px",
                                        borderRadius: "20px",
                                        border: "1px solid rgba(109, 40, 217, 0.2)"
                                    }}>
                                        INBOUND GRAVITY
                                    </span>
                                </div>

                                <h3 style={{
                                    fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    color: "#0D0D14",
                                    marginBottom: "12px",
                                    letterSpacing: "-0.3px"
                                }}>
                                    Inbound Board & Advisory Velocity
                                </h3>

                                <p style={{
                                    fontSize: "15px",
                                    lineHeight: "26px",
                                    color: "#4B5563",
                                    marginBottom: "28px",
                                    maxWidth: "540px"
                                }}>
                                    Stop chasing nominations through back-channels. When institutional search committees, private equity partners, and event chairs look for vetted domain authorities, your presence attracts high-conviction mandates directly.
                                </p>
                            </div>

                            {/* Bespoke Executive Mandate Telemetry Dashboard */}
                            <div style={{
                                background: "#ffffff",
                                borderRadius: "14px",
                                padding: "24px",
                                border: "1px solid #eaedf0",
                                boxShadow: "0 4px 16px rgba(13, 13, 20, 0.04)"
                            }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                                    <div>
                                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", letterSpacing: "0.6px", textTransform: "uppercase" }}>
                                            Inbound Opportunity Pipeline
                                        </div>
                                        <div style={{ fontSize: "22px", fontWeight: "700", color: "#0D0D14", marginTop: "2px" }}>
                                            18 Mandates Sourced <span style={{ fontSize: "13px", color: "#10B981", fontWeight: "600" }}>+380% vs Baseline</span>
                                        </div>
                                    </div>
                                    <span style={{
                                        fontSize: "11px",
                                        background: "#f3f4f6",
                                        color: "#4B5563",
                                        padding: "4px 10px",
                                        borderRadius: "6px",
                                        fontWeight: "600"
                                    }}>
                                        Trailing 90 Days
                                    </span>
                                </div>

                                {/* 3 Metric Cards */}
                                <div className="row g-2 mb-3">
                                    <div className="col-sm-4">
                                        <div style={{
                                            background: "#F7F5FC",
                                            borderRadius: "10px",
                                            padding: "12px",
                                            border: "1px solid #e9d5ff"
                                        }}>
                                            <div style={{ fontSize: "11px", color: "#6B7280", fontWeight: "600" }}>Board Seats</div>
                                            <div style={{ fontSize: "17px", fontWeight: "700", color: "#6D28D9", marginTop: "2px" }}>4 Dialogues</div>
                                            <div style={{ fontSize: "10px", color: "#059669", fontWeight: "600" }}>F500 & Mid-Cap</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div style={{
                                            background: "#FDF2F8",
                                            borderRadius: "10px",
                                            padding: "12px",
                                            border: "1px solid #fbcfe8"
                                        }}>
                                            <div style={{ fontSize: "11px", color: "#6B7280", fontWeight: "600" }}>PE Advisory</div>
                                            <div style={{ fontSize: "17px", fontWeight: "700", color: "#DB2777", marginTop: "2px" }}>8 Mandates</div>
                                            <div style={{ fontSize: "10px", color: "#059669", fontWeight: "600" }}>Retainer Backed</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div style={{
                                            background: "#EFF6FF",
                                            borderRadius: "10px",
                                            padding: "12px",
                                            border: "1px solid #bfdbfe"
                                        }}>
                                            <div style={{ fontSize: "11px", color: "#6B7280", fontWeight: "600" }}>Keynotes / Media</div>
                                            <div style={{ fontSize: "17px", fontWeight: "700", color: "#2563EB", marginTop: "2px" }}>6 Summits</div>
                                            <div style={{ fontSize: "10px", color: "#059669", fontWeight: "600" }}>Tier-1 Global</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Source Allocation Progress Bar */}
                                <div style={{ marginTop: "14px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#6B7280", marginBottom: "6px" }}>
                                        <span>Direct Inbound: <strong>62%</strong></span>
                                        <span>Search Committee: <strong>26%</strong></span>
                                        <span>PE Sponsor: <strong>12%</strong></span>
                                    </div>
                                    <div style={{ height: "6px", background: "#f3f4f6", borderRadius: "10px", overflow: "hidden", display: "flex" }}>
                                        <div style={{ width: "62%", background: "#6D28D9" }}></div>
                                        <div style={{ width: "26%", background: "#EC4899" }}></div>
                                        <div style={{ width: "12%", background: "#2563EB" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: The 6–12 Month Compounding Equity Arc (Col-xl-12 Full-Width Two-Column) */}
                    <div className="col-xl-12 col-md-12">
                        <div
                            className="feature_card_executive_wide"
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="700"
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                                border: "1px solid #eaedf0",
                                padding: "44px 38px",
                                boxShadow: "0 10px 30px rgba(13, 13, 20, 0.04)",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <div className="row align-items-center g-4">
                                {/* Left Side: Narrative & 4 Compounding Milestones */}
                                <div className="col-xl-5 col-lg-6 col-md-12">
                                    <div style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "4px 12px",
                                        background: "linear-gradient(135deg, rgba(109, 40, 217, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%)",
                                        borderRadius: "20px",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        color: "#6D28D9",
                                        letterSpacing: "0.8px",
                                        marginBottom: "16px",
                                        border: "1px solid rgba(109, 40, 217, 0.18)"
                                    }}>
                                        <i className="fa-solid fa-arrow-trend-up"></i>
                                        STRATEGIC COMPOUNDING
                                    </div>

                                    <h3 style={{
                                        fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                                        fontSize: "clamp(24px, 3vw, 30px)",
                                        fontWeight: "700",
                                        color: "#0D0D14",
                                        lineHeight: "1.25",
                                        marginBottom: "14px",
                                        letterSpacing: "-0.4px"
                                    }}>
                                        Reputation Compounds. Opportunity Finds You First.
                                    </h3>

                                    <p style={{
                                        fontSize: "15px",
                                        lineHeight: "26px",
                                        color: "#4B5563",
                                        marginBottom: "28px"
                                    }}>
                                        Visibility is infrastructure, not vanity. What we deploy in the first 90 days operates as a permanent executive asset that scales continuously — requiring under 30 minutes of your time per month.
                                    </p>

                                    {/* 4 Compounding Milestones */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                        {[
                                            {
                                                phase: "Months 1–3",
                                                title: "Sovereign Asset Launch",
                                                desc: "Digital HQ live, Google Knowledge Graph structured, namesake confusion eradicated.",
                                                icon: "fa-solid fa-cube",
                                                color: "#6D28D9"
                                            },
                                            {
                                                phase: "Months 4–6",
                                                title: "LinkedIn Stature & Voice Scaling",
                                                desc: "Bi-weekly executive viewpoints published; peer and recruiter reach expands 4x.",
                                                icon: "fa-solid fa-feather-pointed",
                                                color: "#8B5CF6"
                                            },
                                            {
                                                phase: "Months 7–9",
                                                title: "Speaking & Media Syndication",
                                                desc: "Tier-1 podcast guestings and keynote invitations routed directly to your office.",
                                                icon: "fa-solid fa-bullhorn",
                                                color: "#EC4899"
                                            },
                                            {
                                                phase: "Months 10–12+",
                                                title: "Proactive Board & Advisory Flow",
                                                desc: "High-value board inquiries and advisory mandates arrive without outbound chasing.",
                                                icon: "fa-solid fa-award",
                                                color: "#059669"
                                            }
                                        ].map((milestone, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: "flex",
                                                    gap: "12px",
                                                    alignItems: "flex-start",
                                                    padding: "10px 14px",
                                                    borderRadius: "10px",
                                                    background: "#F7F5FC",
                                                    border: "1px solid #eaedf0"
                                                }}
                                            >
                                                <div style={{
                                                    width: "28px",
                                                    height: "28px",
                                                    borderRadius: "6px",
                                                    background: milestone.color,
                                                    color: "#ffffff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "12px",
                                                    flexShrink: 0,
                                                    marginTop: "2px"
                                                }}>
                                                    <i className={milestone.icon}></i>
                                                </div>
                                                <div>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                        <span style={{ fontSize: "11px", fontWeight: "700", color: milestone.color, textTransform: "uppercase" }}>
                                                            {milestone.phase}
                                                        </span>
                                                        <span style={{ fontSize: "13.5px", fontWeight: "700", color: "#0D0D14" }}>
                                                            {milestone.title}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: "12.5px", color: "#6B7280", lineHeight: "19px", marginTop: "2px" }}>
                                                        {milestone.desc}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Visual Trajectory & Radar Telemetry Card */}
                                <div className="col-xl-7 col-lg-6 col-md-12">
                                    <div style={{
                                        background: "linear-gradient(135deg, #0D0D14 0%, #161622 100%)",
                                        borderRadius: "16px",
                                        padding: "32px",
                                        color: "#ffffff",
                                        boxShadow: "0 16px 36px rgba(13, 13, 20, 0.25)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)"
                                    }}>
                                        {/* Trajectory Header */}
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                                            <div>
                                                <div style={{ fontSize: "11px", fontWeight: "700", color: "rgba(255, 255, 255, 0.6)", letterSpacing: "1px", textTransform: "uppercase" }}>
                                                    Authority Compounding Arc
                                                </div>
                                                <div style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", marginTop: "4px" }}>
                                                    12-Month Stature Index
                                                </div>
                                            </div>
                                            <span style={{
                                                fontSize: "11px",
                                                background: "rgba(139, 92, 246, 0.18)",
                                                color: "#A78BFA",
                                                padding: "5px 12px",
                                                borderRadius: "20px",
                                                fontWeight: "700",
                                                border: "1px solid rgba(139, 92, 246, 0.3)"
                                            }}>
                                                3.8x Stature Multiple
                                            </span>
                                        </div>

                                        {/* Responsive SVG Curve Chart */}
                                        <div style={{ width: "100%", height: "180px", position: "relative", marginBottom: "20px" }}>
                                            <svg viewBox="0 0 500 160" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                                                <defs>
                                                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#6D28D9" />
                                                        <stop offset="50%" stopColor="#8B5CF6" />
                                                        <stop offset="100%" stopColor="#EC4899" />
                                                    </linearGradient>
                                                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.35)" />
                                                        <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                                                    </linearGradient>
                                                </defs>

                                                {/* Grid Lines */}
                                                <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                                                <line x1="0" y1="70" x2="500" y2="70" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                                                <line x1="0" y1="110" x2="500" y2="110" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                                                <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.1)" />

                                                {/* Area Fill */}
                                                <path
                                                    d="M 20 135 Q 120 125 180 90 T 340 45 T 480 18 L 480 150 L 20 150 Z"
                                                    fill="url(#areaGradient)"
                                                />

                                                {/* Glowing Trajectory Line */}
                                                <path
                                                    d="M 20 135 Q 120 125 180 90 T 340 45 T 480 18"
                                                    fill="none"
                                                    stroke="url(#curveGradient)"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                />

                                                {/* Data Points & Milestone Markers */}
                                                {/* M1: Initial */}
                                                <circle cx="20" cy="135" r="5" fill="#6D28D9" stroke="#ffffff" strokeWidth="2" />
                                                <text x="20" y="160" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">M1: Audit</text>

                                                {/* M3: Digital HQ */}
                                                <circle cx="180" cy="90" r="5" fill="#8B5CF6" stroke="#ffffff" strokeWidth="2" />
                                                <text x="180" y="160" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">M3: Digital HQ</text>

                                                {/* M6: Thought Leadership */}
                                                <circle cx="340" cy="45" r="5" fill="#EC4899" stroke="#ffffff" strokeWidth="2" />
                                                <text x="340" y="160" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">M6: Authority</text>

                                                {/* M12: Board Inbound */}
                                                <circle cx="480" cy="18" r="6" fill="#10B981" stroke="#ffffff" strokeWidth="2" />
                                                <text x="470" y="160" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">M12: Dominance</text>
                                            </svg>
                                        </div>

                                        {/* Trajectory Highlights 3-Col Bar */}
                                        <div className="row g-2 pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                                            <div className="col-4">
                                                <div style={{ textAlign: "center" }}>
                                                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#A78BFA" }}>100%</div>
                                                    <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)" }}>Page 1 Control</div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div style={{ textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                                                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#F472B6" }}>3.8x</div>
                                                    <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)" }}>Inbound Velocity</div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div style={{ textAlign: "center" }}>
                                                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#34D399" }}>&lt; 30m</div>
                                                    <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)" }}>Monthly Time</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
