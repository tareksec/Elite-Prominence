'use client'

import React from 'react'
import Link from 'next/link'
import { FlipText } from '@/components/ui/flip-text'
import { StaggerText } from '@/components/ui/stagger-text'

export default function ServicesBento() {
    return (
        <section
            style={{
                padding: "110px 0",
                backgroundColor: "#FAF8F5",
                borderBottom: "1.5px solid #E5E7EB",
                fontFamily: "var(--primary-font, -apple-system, sans-serif)",
                position: "relative"
            }}
        >
            <div className="container">
                <div className="row align-items-start g-5">
                    
                    {/* Left Column: Heading, Subtitle & Pill Button (Directly inspired by MLab "Our services") */}
                    <div className="col-12 col-lg-5" data-aos="fade-right" data-aos-duration="500">
                        <div style={{ position: "sticky", top: "120px" }}>
                            {/* Eyebrow Pill */}
                            <div style={{ marginBottom: "18px" }}>
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
                                    Advisory Pillars
                                </span>
                            </div>

                            <h2
                                style={{
                                    fontSize: "clamp(34px, 4.2vw, 48px)",
                                    fontWeight: "800",
                                    color: "#0F1117",
                                    lineHeight: "1.12",
                                    letterSpacing: "-1px",
                                    marginBottom: "20px"
                                }}
                            >
                                Our services
                            </h2>

                            <p
                                style={{
                                    fontSize: "17px",
                                    color: "#4B5563",
                                    lineHeight: "1.7",
                                    marginBottom: "32px",
                                    maxWidth: "420px"
                                }}
                            >
                                We architect sovereign digital assets that establish permanent executive authority. We focus on what decision-makers see first — turning leadership credentials into an undeniable public asset.
                            </p>

                            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                                <Link
                                    href="/services"
                                    className="neo-btn-primary"
                                    style={{ padding: "14px 28px", fontSize: "14px" }}
                                >
                                    Learn more <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }} />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="neo-btn-secondary"
                                    style={{ padding: "14px 24px", fontSize: "14px" }}
                                >
                                    Talk to Us
                                </Link>
                            </div>

                            {/* Trust snippet */}
                            <div style={{ marginTop: "36px", display: "flex", alignItems: "center", gap: "10px", color: "#6B7280", fontSize: "13px", fontWeight: "600" }}>
                                <i className="fa-solid fa-check" style={{ color: "#10B981" }} />
                                <span>Zero junior agency handoffs — Managed by Partners</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 2x2 Bento Grid (With Inverted Dark Card & Clean Cards) */}
                    <div className="col-12 col-lg-7" data-aos="fade-left" data-aos-duration="550">
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                                gap: "20px"
                            }}
                        >
                            {/* Card 1: Executive Digital HQ (Inverted Signature Dark Card - MLab Style) */}
                            <div
                                className="neo-card-dark"
                                style={{
                                    padding: "36px 30px",
                                    borderRadius: "26px",
                                    backgroundColor: "#0F1117",
                                    border: "2px solid #27272A",
                                    boxShadow: "6px 6px 0px #000000",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    minHeight: "270px"
                                }}
                            >
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                                        <div
                                            style={{
                                                width: "44px",
                                                height: "44px",
                                                borderRadius: "14px",
                                                backgroundColor: "rgba(124, 58, 237, 0.2)",
                                                border: "1.5px solid rgba(124, 58, 237, 0.4)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#C084FC",
                                                fontSize: "18px"
                                            }}
                                        >
                                            <i className="fa-solid fa-globe" />
                                        </div>
                                        <span
                                            style={{
                                                backgroundColor: "#7C3AED",
                                                color: "#FFFFFF",
                                                fontSize: "11px",
                                                fontWeight: "800",
                                                padding: "4px 10px",
                                                borderRadius: "9999px",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.5px"
                                            }}
                                        >
                                            Signature Asset
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#FFFFFF", marginBottom: "12px", lineHeight: "1.25" }}>
                                        Bespoke Digital HQ
                                    </h3>
                                    <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", margin: 0 }}>
                                        Your sovereign personal web property built on Next.js. Owned real estate that ranks #1 on Google and never relies on social algorithms.
                                    </p>
                                </div>

                                <div style={{ paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontSize: "12px", color: "#A78BFA", fontWeight: "700" }}>
                                        Owned Digital Property
                                    </span>
                                    <Link
                                        href="/services/executive-personal-website"
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%",
                                            backgroundColor: "#FFFFFF",
                                            color: "#0F1117",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textDecoration: "none",
                                            fontWeight: "800",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        ↗
                                    </Link>
                                </div>
                            </div>

                            {/* Card 2: Google Page 1 Search Authority (Light Card) */}
                            <div
                                className="neo-card"
                                style={{
                                    padding: "36px 30px",
                                    borderRadius: "26px",
                                    backgroundColor: "#FFFFFF",
                                    border: "2px solid #0F1117",
                                    boxShadow: "6px 6px 0px #0F1117",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    minHeight: "270px"
                                }}
                            >
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                                        <div
                                            style={{
                                                width: "44px",
                                                height: "44px",
                                                borderRadius: "14px",
                                                backgroundColor: "#EFF6FF",
                                                border: "1.5px solid #DBEAFE",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#2563EB",
                                                fontSize: "18px"
                                            }}
                                        >
                                            <i className="fa-brands fa-google" />
                                        </div>
                                        <span
                                            style={{
                                                backgroundColor: "#EFF6FF",
                                                color: "#1D4ED8",
                                                fontSize: "11px",
                                                fontWeight: "800",
                                                padding: "4px 10px",
                                                borderRadius: "9999px",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.5px"
                                            }}
                                        >
                                            Google Page 1
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0F1117", marginBottom: "12px", lineHeight: "1.25" }}>
                                        Search Reputation
                                    </h3>
                                    <p style={{ fontSize: "14px", color: "#52525B", lineHeight: "1.6", margin: 0 }}>
                                        Eliminating namesake ambiguity and curating a flawless, authoritative Page 1 footprint before search committees look you up.
                                    </p>
                                </div>

                                <div style={{ paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontSize: "12px", color: "#71717A", fontWeight: "700" }}>
                                        45–60 Day Deployment
                                    </span>
                                    <Link
                                        href="/services/google-reputation-management"
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%",
                                            backgroundColor: "#0F1117",
                                            color: "#FFFFFF",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textDecoration: "none",
                                            fontWeight: "800",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        ↗
                                    </Link>
                                </div>
                            </div>

                            {/* Card 3: Executive Thought Leadership & Ghostwriting */}
                            <div
                                className="neo-card"
                                style={{
                                    padding: "36px 30px",
                                    borderRadius: "26px",
                                    backgroundColor: "#FFFFFF",
                                    border: "2px solid #0F1117",
                                    boxShadow: "6px 6px 0px #0F1117",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    minHeight: "270px"
                                }}
                            >
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                                        <div
                                            style={{
                                                width: "44px",
                                                height: "44px",
                                                borderRadius: "14px",
                                                backgroundColor: "#FDF2F8",
                                                border: "1.5px solid #FCE7F3",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#DB2777",
                                                fontSize: "18px"
                                            }}
                                        >
                                            <i className="fa-solid fa-feather-pointed" />
                                        </div>
                                        <span
                                            style={{
                                                backgroundColor: "#FDF2F8",
                                                color: "#BE185D",
                                                fontSize: "11px",
                                                fontWeight: "800",
                                                padding: "4px 10px",
                                                borderRadius: "9999px",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.5px"
                                            }}
                                        >
                                            &lt; 30 Mins / Mo
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0F1117", marginBottom: "12px", lineHeight: "1.25" }}>
                                        Thought Leadership
                                    </h3>
                                    <p style={{ fontSize: "14px", color: "#52525B", lineHeight: "1.6", margin: 0 }}>
                                        Rigorous executive ghostwriting that positions you as the sovereign voice in your niche, without consuming your executive time.
                                    </p>
                                </div>

                                <div style={{ paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontSize: "12px", color: "#71717A", fontWeight: "700" }}>
                                        LinkedIn &amp; Editorial Essays
                                    </span>
                                    <Link
                                        href="/services/linkedin-thought-leadership"
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%",
                                            backgroundColor: "#0F1117",
                                            color: "#FFFFFF",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textDecoration: "none",
                                            fontWeight: "800",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        ↗
                                    </Link>
                                </div>
                            </div>

                            {/* Card 4: Boardroom & Advisory Placement */}
                            <div
                                className="neo-card"
                                style={{
                                    padding: "36px 30px",
                                    borderRadius: "26px",
                                    backgroundColor: "#FFFFFF",
                                    border: "2px solid #0F1117",
                                    boxShadow: "6px 6px 0px #0F1117",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    minHeight: "270px"
                                }}
                            >
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                                        <div
                                            style={{
                                                width: "44px",
                                                height: "44px",
                                                borderRadius: "14px",
                                                backgroundColor: "#ECFDF5",
                                                border: "1.5px solid #D1FAE5",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#059669",
                                                fontSize: "18px"
                                            }}
                                        >
                                            <i className="fa-solid fa-chair" />
                                        </div>
                                        <span
                                            style={{
                                                backgroundColor: "#ECFDF5",
                                                color: "#047857",
                                                fontSize: "11px",
                                                fontWeight: "800",
                                                padding: "4px 10px",
                                                borderRadius: "9999px",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.5px"
                                            }}
                                        >
                                            Board Mandates
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0F1117", marginBottom: "12px", lineHeight: "1.25" }}>
                                        Advisory Placement
                                    </h3>
                                    <p style={{ fontSize: "14px", color: "#52525B", lineHeight: "1.6", margin: 0 }}>
                                        Packaging your governance credentials and strategic track record to attract non-executive director (NED) seats and advisory mandates.
                                    </p>
                                </div>

                                <div style={{ paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontSize: "12px", color: "#71717A", fontWeight: "700" }}>
                                        Corporate Governance
                                    </span>
                                    <Link
                                        href="/services/board-advisory-positioning"
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%",
                                            backgroundColor: "#0F1117",
                                            color: "#FFFFFF",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textDecoration: "none",
                                            fontWeight: "800",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        ↗
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
