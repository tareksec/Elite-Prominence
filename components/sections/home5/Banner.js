'use client'

import React, { useEffect, useRef } from 'react'
import Link from "next/link"
import { FlipFadeText } from "@/components/ui/flip-fade-text"
import { StaggerText } from "@/components/ui/stagger-text"
import { FlipText } from "@/components/ui/flip-text"
import gsap from 'gsap'

export default function Banner() {
    const bannerRef = useRef(null)
    const floatBadgeRef1 = useRef(null)
    const floatBadgeRef2 = useRef(null)
    const floatBadgeRef3 = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Gentle GSAP floating animations for the executive badges
            if (floatBadgeRef1.current) {
                gsap.to(floatBadgeRef1.current, {
                    y: -10,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                })
            }
            if (floatBadgeRef2.current) {
                gsap.to(floatBadgeRef2.current, {
                    y: 12,
                    duration: 3.6,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 0.5
                })
            }
            if (floatBadgeRef3.current) {
                gsap.to(floatBadgeRef3.current, {
                    y: -8,
                    duration: 4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 1
                })
            }
        }, bannerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={bannerRef}
            className="banner_style_five"
            style={{
                position: "relative",
                backgroundColor: "#FAF8F5",
                padding: "160px 0 100px",
                overflow: "hidden",
                borderBottom: "1.5px solid #E5E7EB"
            }}
        >
            {/* Subtle background decorative shapes inspired by Wellpitched */}
            <div
                style={{
                    position: "absolute",
                    top: "40px",
                    left: "-80px",
                    width: "340px",
                    height: "340px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(250, 248, 245, 0) 70%)",
                    pointerEvents: "none"
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "-100px",
                    width: "480px",
                    height: "480px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, rgba(250, 248, 245, 0) 70%)",
                    pointerEvents: "none"
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row align-items-center g-5">
                    {/* Left Column: Editorial Headline & Actions */}
                    <div className="col-12 col-lg-7">
                        <div className="banner_content">
                            {/* Pill Eyebrow Badge */}
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "22px" }}>
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "7px 18px",
                                        borderRadius: "9999px",
                                        backgroundColor: "#EDE9FE",
                                        color: "#6D28D9",
                                        fontSize: "12.5px",
                                        fontWeight: "700",
                                        border: "1.5px solid rgba(109, 40, 217, 0.2)",
                                        letterSpacing: "0.4px"
                                    }}
                                >
                                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#7C3AED", boxShadow: "0 0 8px rgba(124,58,237,0.6)" }} />
                                    Executive Reputation &amp; Sovereign Stature
                                </span>

                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "7px 16px",
                                        borderRadius: "9999px",
                                        backgroundColor: "#FFFFFF",
                                        color: "#18181B",
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        border: "1.5px solid #E4E4E7",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                                    }}
                                >
                                    <i className="fa-solid fa-lock" style={{ color: "#7C3AED", fontSize: "11px" }} />
                                    Strict Corporate NDA
                                </span>
                            </div>

                            {/* Main High-Impact Headline with Stagger & Flip Fade Text */}
                            <h1
                                style={{
                                    fontSize: "clamp(34px, 4.8vw, 56px)",
                                    fontWeight: "800",
                                    lineHeight: "1.12",
                                    color: "#0F1117",
                                    letterSpacing: "-1px",
                                    marginBottom: "24px"
                                }}
                            >
                                Build a digital presence that commands{" "}
                                <span
                                    style={{
                                        display: "inline-block",
                                        backgroundColor: "#EDE9FE",
                                        color: "#6D28D9",
                                        padding: "2px 14px 4px",
                                        borderRadius: "14px",
                                        border: "1.5px solid rgba(109, 40, 217, 0.25)",
                                        transform: "rotate(-1deg)",
                                        verticalAlign: "middle"
                                    }}
                                >
                                    <FlipFadeText
                                        words={["AUTHORITY", "INFLUENCE", "PRESTIGE", "BOARD SEATS", "SOVEREIGNTY"]}
                                        interval={2600}
                                        textClassName="text-violet-700 font-extrabold"
                                    />
                                </span>
                            </h1>

                            {/* Body Paragraph */}
                            <p
                                style={{
                                    fontSize: "17.5px",
                                    lineHeight: "1.75",
                                    color: "#4B5563",
                                    maxWidth: "600px",
                                    marginBottom: "32px",
                                    fontWeight: "450"
                                }}
                            >
                                <StaggerText delay={0.1} divideBy="word">
                                    We architect the bespoke sovereign websites, Google Page 1 search domination, strategic ghostwriting, and authority assets that represent CEOs, CHROs, Founders, and enterprise leaders before they walk into the boardroom.
                                </StaggerText>
                            </p>

                            {/* CTAs & Social Proof Overlap */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", marginBottom: "36px" }}>
                                <Link
                                    href="/contact"
                                    className="neo-btn-primary"
                                    style={{
                                        padding: "15px 32px",
                                        fontSize: "15px",
                                        boxShadow: "0 10px 25px -4px rgba(13, 14, 21, 0.25)"
                                    }}
                                >
                                    Book Private Consultation <i className="fa-solid fa-arrow-right" style={{ fontSize: "13px" }} />
                                </Link>

                                <Link
                                    href="/resources/assessment"
                                    className="neo-btn-secondary"
                                    style={{
                                        padding: "15px 28px",
                                        fontSize: "15px"
                                    }}
                                >
                                    Audit Your Stature <i className="fa-solid fa-arrow-trend-up" style={{ fontSize: "13px" }} />
                                </Link>
                            </div>

                            {/* Social Proof Pill (Overlapping Executive Avatars + Doodle Arrow) */}
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    padding: "10px 20px 10px 14px",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "9999px",
                                    border: "1.5px solid #E4E4E7",
                                    boxShadow: "0 6px 18px rgba(0,0,0,0.04)"
                                }}
                            >
                                {/* Stacked Avatars */}
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    {[
                                        { bg: "#7C3AED", text: "EV", name: "Eleanor Vance (CHRO)" },
                                        { bg: "#0D0E15", text: "MS", name: "Marcus Sterling (MD)" },
                                        { bg: "#2563EB", text: "AT", name: "Dr. Aris Thorne (SVP)" },
                                        { bg: "#EC4899", text: "TK", name: "Enterprise Founder" }
                                    ].map((av, idx) => (
                                        <div
                                            key={idx}
                                            title={av.name}
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "50%",
                                                backgroundColor: av.bg,
                                                color: "#FFFFFF",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "12px",
                                                fontWeight: "700",
                                                border: "2px solid #FFFFFF",
                                                marginLeft: idx === 0 ? "0" : "-10px",
                                                boxShadow: "0 2px 6px rgba(0,0,0,0.12)"
                                            }}
                                        >
                                            {av.text}
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ fontSize: "13.5px", fontWeight: "800", color: "#0F1117" }}>
                                            50+ Enterprise Leaders
                                        </span>
                                        <div style={{ display: "flex", gap: "2px", color: "#F59E0B", fontSize: "11px" }}>
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                    </div>
                                    <span style={{ fontSize: "11.5px", color: "#6B7280", fontWeight: "500" }}>
                                        Advising CEOs, CHROs &amp; Board Directors
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: High-End Neo-Brutalist / Editorial Visual Showcase */}
                    <div className="col-12 col-lg-5">
                        <div style={{ position: "relative", maxWidth: "460px", margin: "0 auto" }}>
                            
                            {/* Floating Badge 1: Google Page 1 Verified */}
                            <div
                                ref={floatBadgeRef1}
                                style={{
                                    position: "absolute",
                                    top: "-24px",
                                    left: "-30px",
                                    backgroundColor: "#FFFFFF",
                                    border: "1.5px solid #18181B",
                                    padding: "10px 18px",
                                    borderRadius: "9999px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    zIndex: 5,
                                    boxShadow: "0 14px 28px rgba(15, 23, 42, 0.1), 0 2px 4px rgba(0,0,0,0.06)"
                                }}
                            >
                                <div
                                    style={{
                                        width: "26px",
                                        height: "26px",
                                        borderRadius: "50%",
                                        backgroundColor: "#EDE9FE",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#7C3AED",
                                        fontSize: "12px",
                                        fontWeight: "700"
                                    }}
                                >
                                    <i className="fab fa-google" />
                                </div>
                                <div>
                                    <div style={{ fontSize: "9.5px", textTransform: "uppercase", letterSpacing: "0.8px", color: "#6B7280", fontWeight: "700" }}>
                                        Search Equity
                                    </div>
                                    <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#0F1117" }}>
                                        Google Page 1 Verified #1
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge 2: Boardroom Authority Score */}
                            <div
                                ref={floatBadgeRef2}
                                style={{
                                    position: "absolute",
                                    bottom: "-20px",
                                    right: "-20px",
                                    backgroundColor: "#0D0E15",
                                    color: "#FFFFFF",
                                    border: "1.5px solid #27272A",
                                    padding: "12px 20px",
                                    borderRadius: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    zIndex: 5,
                                    boxShadow: "0 18px 36px rgba(0,0,0,0.3)"
                                }}
                            >
                                <div
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "10px",
                                        backgroundColor: "rgba(124, 58, 237, 0.2)",
                                        border: "1px solid rgba(124, 58, 237, 0.4)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#A78BFA",
                                        fontSize: "16px"
                                    }}
                                >
                                    <i className="fa-solid fa-award" />
                                </div>
                                <div>
                                    <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.8px", color: "#9CA3AF", fontWeight: "700" }}>
                                        Boardroom Authority
                                    </div>
                                    <div style={{ fontSize: "14px", fontWeight: "800", color: "#FFFFFF" }}>
                                        98th Percentile Index
                                    </div>
                                </div>
                            </div>

                            {/* Main Editorial Showcase Card */}
                            <div
                                className="neo-card"
                                style={{
                                    overflow: "hidden",
                                    border: "2px solid #0F1117",
                                    borderRadius: "28px",
                                    backgroundColor: "#FFFFFF",
                                    boxShadow: "8px 8px 0px #0F1117"
                                }}
                            >
                                {/* Card Header with Mac Dots */}
                                <div
                                    style={{
                                        padding: "14px 20px",
                                        backgroundColor: "#FAF8F5",
                                        borderBottom: "1.5px solid #E4E4E7",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <div style={{ display: "flex", gap: "6px" }}>
                                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
                                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "11px",
                                            fontWeight: "700",
                                            letterSpacing: "0.5px",
                                            color: "#52525B",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        }}
                                    >
                                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                                        https://executive.prominence.agency
                                    </div>
                                    <div style={{ width: "36px" }} />
                                </div>

                                {/* Hero Image Showcase */}
                                <div style={{ position: "relative", width: "100%", height: "290px", overflow: "hidden" }}>
                                    <img
                                        src="/assets/images/elite/hero_executive.jpg"
                                        alt="Executive Sovereign Digital Presence Platform"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center 20%",
                                            display: "block"
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(180deg, rgba(13,14,21,0) 40%, rgba(13,14,21,0.7) 100%)"
                                        }}
                                    />

                                    {/* Bottom Title on Image */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "16px",
                                            left: "20px",
                                            right: "20px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-end"
                                        }}
                                    >
                                        <div>
                                            <span style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#C084FC" }}>
                                                Bespoke Digital HQ
                                            </span>
                                            <div style={{ fontSize: "16px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1.2" }}>
                                                Sovereign Entity Architecture
                                            </div>
                                        </div>
                                        <span
                                            style={{
                                                backgroundColor: "#FFFFFF",
                                                color: "#0F1117",
                                                padding: "4px 10px",
                                                borderRadius: "6px",
                                                fontSize: "11px",
                                                fontWeight: "800"
                                            }}
                                        >
                                            Next.js 14
                                        </span>
                                    </div>
                                </div>

                                {/* Card Metrics Strip */}
                                <div
                                    style={{
                                        padding: "18px 22px",
                                        backgroundColor: "#FFFFFF",
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "14px",
                                        borderTop: "1.5px solid #F4F4F5"
                                    }}
                                >
                                    <div style={{ padding: "10px 14px", backgroundColor: "#FAF8F5", borderRadius: "12px", border: "1px solid #E5E7EB" }}>
                                        <div style={{ fontSize: "10px", textTransform: "uppercase", color: "#6B7280", fontWeight: "700" }}>
                                            Google Placement
                                        </div>
                                        <div style={{ fontSize: "16px", fontWeight: "800", color: "#0F1117", marginTop: "2px" }}>
                                            #1 Ranked
                                        </div>
                                    </div>
                                    <div style={{ padding: "10px 14px", backgroundColor: "#EDE9FE", borderRadius: "12px", border: "1px solid rgba(124,58,237,0.2)" }}>
                                        <div style={{ fontSize: "10px", textTransform: "uppercase", color: "#6D28D9", fontWeight: "700" }}>
                                            Entity Stature
                                        </div>
                                        <div style={{ fontSize: "16px", fontWeight: "800", color: "#6D28D9", marginTop: "2px" }}>
                                            Knowledge Graph
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