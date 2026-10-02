'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const TESTIMONIALS = [
    {
        id: "test-1",
        name: "Eleanor Vance",
        role: "Chief Human Resources Officer",
        company: "GlobalTech Solutions",
        location: "New York, USA",
        avatarInitials: "EV",
        avatarBg: "#7C3AED",
        rating: 5,
        quote: "Prominence transformed my executive presence. Within 60 days of launching my new digital HQ and executive LinkedIn strategy, I received two board advisory invitations.",
        highlight: "2 Board Advisory Invitations in 60 Days",
        servicePillar: "Digital HQ & LinkedIn Strategy"
    },
    {
        id: "test-2",
        name: "Marcus Sterling",
        role: "Managing Director & Board Advisor",
        company: "Sterling & Partners Advisory",
        location: "London, UK",
        avatarInitials: "MS",
        avatarBg: "#0F1117",
        rating: 5,
        quote: "The Google reputation management and thought leadership ghostwriting are world-class. When prospects Google my name today, they find an authoritative, cohesive presence.",
        highlight: "Page 1 Search Authority Restored",
        servicePillar: "Google Reputation & Ghostwriting"
    },
    {
        id: "test-3",
        name: "Dr. Aris Thorne",
        role: "Senior VP of People Strategy",
        company: "BioHealth Diagnostics",
        location: "Boston, USA",
        avatarInitials: "AT",
        avatarBg: "#2563EB",
        rating: 5,
        quote: "Their team understands the subtle distinction between vanity personal branding and genuine executive authority. Exceptional rigor, discretion, and strategic alignment.",
        highlight: "High-Caliber Network Growth",
        servicePillar: "Executive Authority Positioning"
    }
]

export default function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section
            style={{
                backgroundColor: "#FAF8F5",
                padding: "110px 0",
                borderBottom: "1.5px solid #E5E7EB",
                position: "relative",
                fontFamily: "var(--primary-font, -apple-system, sans-serif)"
            }}
        >
            <div className="container">
                {/* Section Header (MLab / Wellpitched Style) */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        flexWrap: "wrap",
                        gap: "24px",
                        marginBottom: "50px"
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
                                Executive Endorsements
                            </span>
                        </div>
                        <h2
                            style={{
                                fontSize: "clamp(30px, 4vw, 44px)",
                                fontWeight: "800",
                                color: "#0F1117",
                                letterSpacing: "-0.8px",
                                lineHeight: "1.16",
                                margin: 0
                            }}
                        >
                            Proven Results for Senior Leaders
                        </h2>
                    </div>
                    <div>
                        <p
                            style={{
                                color: "#4B5563",
                                fontSize: "16.5px",
                                lineHeight: "1.7",
                                maxWidth: "520px",
                                margin: 0
                            }}
                        >
                            How CHROs, Chief People Officers, and Managing Directors build undeniable authority, unlock board invitations, and dominate their niche with Prominence.
                        </p>
                    </div>
                </div>

                {/* Testimonial Cards Grid (Neo-Editorial MLab Style) */}
                <div className="row g-4 justify-content-center">
                    {TESTIMONIALS.map((item, idx) => (
                        <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div
                                onClick={() => setActiveIndex(idx)}
                                className="neo-card"
                                style={{
                                    height: "100%",
                                    backgroundColor: activeIndex === idx ? "#FFFFFF" : "#FFFFFF",
                                    borderRadius: "26px",
                                    padding: "36px 30px",
                                    border: "2px solid #0F1117",
                                    boxShadow: activeIndex === idx
                                        ? "6px 6px 0px #7C3AED"
                                        : "6px 6px 0px #0F1117",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                    position: "relative"
                                }}
                            >
                                <div>
                                    {/* Big Quote Mark and Rating Header */}
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "20px"
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "42px",
                                                fontWeight: "900",
                                                color: "#7C3AED",
                                                lineHeight: "1",
                                                fontFamily: "Georgia, serif"
                                            }}
                                        >
                                            &ldquo;&ldquo;
                                        </div>
                                        <div style={{ display: "flex", gap: "3px", color: "#F59E0B", fontSize: "12px" }}>
                                            {[...Array(item.rating)].map((_, i) => (
                                                <i key={i} className="fa-solid fa-star" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quote Body */}
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            lineHeight: "1.7",
                                            color: "#1F2937",
                                            marginBottom: "22px",
                                            fontWeight: "500"
                                        }}
                                    >
                                        &ldquo;{item.quote}&rdquo;
                                    </p>

                                    {/* Highlight Badge */}
                                    <div
                                        style={{
                                            display: "inline-block",
                                            fontSize: "11.5px",
                                            fontWeight: "800",
                                            color: "#7C3AED",
                                            backgroundColor: "#EDE9FE",
                                            border: "1px solid rgba(124, 58, 237, 0.2)",
                                            padding: "5px 14px",
                                            borderRadius: "9999px",
                                            marginBottom: "24px"
                                        }}
                                    >
                                        {item.highlight}
                                    </div>
                                </div>

                                {/* Author Block */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "14px",
                                        paddingTop: "20px",
                                        borderTop: "1.5px solid #F4F4F5"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "44px",
                                            height: "44px",
                                            borderRadius: "50%",
                                            backgroundColor: item.avatarBg,
                                            color: "#FFFFFF",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "14px",
                                            fontWeight: "800",
                                            flexShrink: 0,
                                            border: "2px solid #0F1117"
                                        }}
                                    >
                                        {item.avatarInitials}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "15px", fontWeight: "800", color: "#0F1117" }}>
                                            {item.name}
                                        </div>
                                        <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "2px" }}>
                                            {item.role} &bull; {item.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: "44px" }}>
                    <Link href="/case-studies" className="neo-btn-secondary" style={{ padding: "14px 28px" }}>
                        View Executive Case Studies <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
