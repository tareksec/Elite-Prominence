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
        avatarBg: "linear-gradient(135deg, #2b2d32 0%, #151619 100%)",
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
        avatarBg: "linear-gradient(135deg, #1e2025 0%, #0f1013 100%)",
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
        avatarBg: "linear-gradient(135deg, #2b2d32 0%, #0f1013 100%)",
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
            className="testimonial_section_two"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            style={{
                backgroundColor: "#ffffff",
                padding: "100px 0 90px",
                position: "relative",
                fontFamily: "var(--primary-font)"
            }}
        >
            <div className="container">
                {/* Section Header */}
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <div className="section_title centred" style={{ marginBottom: "45px" }}>
                            <div className="tag_text" style={{ marginBottom: "12px" }}>
                                <h6 style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "6px 16px",
                                    background: "#f1f5f9",
                                    borderRadius: "30px",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    color: "#0f1013",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.8px",
                                    border: "1px solid #e2e8f0"
                                }}>
                                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#b89058" }}></span>
                                    Verified Executive Endorsements
                                </h6>
                            </div>
                            <h2 style={{
                                fontSize: "38px",
                                fontWeight: "700",
                                color: "#0f1013",
                                lineHeight: "1.25",
                                letterSpacing: "-0.5px",
                                fontFamily: "var(--primary-font)"
                            }}>
                                Proven Results for Senior People Leaders
                            </h2>
                            <p style={{
                                fontSize: "16.5px",
                                color: "#59606a",
                                maxWidth: "620px",
                                margin: "14px auto 0",
                                lineHeight: "1.65"
                            }}>
                                How CHROs, Chief People Officers, and Managing Directors build undeniable authority, unlock board invitations, and dominate their niche with Prominence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 Executive Testimonial Cards Grid */}
                <div className="row g-4 justify-content-center">
                    {TESTIMONIALS.map((item, idx) => (
                        <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div
                                onClick={() => setActiveIndex(idx)}
                                style={{
                                    height: "100%",
                                    backgroundColor: activeIndex === idx ? "#fafbfc" : "#ffffff",
                                    borderRadius: "14px",
                                    padding: "36px 30px",
                                    border: activeIndex === idx ? "1px solid #0f1013" : "1px solid #eaedf0",
                                    boxShadow: activeIndex === idx
                                        ? "0 16px 36px rgba(15, 16, 19, 0.08)"
                                        : "0 4px 18px rgba(15, 16, 19, 0.02)",
                                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                    position: "relative"
                                }}
                            >
                                <div>
                                    {/* Rating and Outcome Chip */}
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "20px"
                                    }}>
                                        <div style={{ display: "flex", gap: "4px" }}>
                                            {[...Array(item.rating)].map((_, i) => (
                                                <i key={i} className="fa-solid fa-star" style={{ color: "#b89058", fontSize: "13px" }}></i>
                                            ))}
                                        </div>
                                        <span style={{
                                            fontSize: "11px",
                                            fontWeight: "700",
                                            color: "#166534",
                                            backgroundColor: "#f0fdf4",
                                            padding: "3px 10px",
                                            borderRadius: "20px",
                                            border: "1px solid #bbf7d0",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "4px"
                                        }}>
                                            <i className="fa-solid fa-check" style={{ fontSize: "9px" }}></i>
                                            Verified Leader
                                        </span>
                                    </div>

                                    {/* Quote Text */}
                                    <p style={{
                                        fontSize: "15.5px",
                                        lineHeight: "1.7",
                                        color: "#334155",
                                        fontStyle: "normal",
                                        marginBottom: "24px"
                                    }}>
                                        &ldquo;{item.quote}&rdquo;
                                    </p>

                                    {/* Highlight Metric Pill */}
                                    <div style={{
                                        display: "inline-block",
                                        fontSize: "11.5px",
                                        fontWeight: "700",
                                        color: "#92400e",
                                        backgroundColor: "#fef3c7",
                                        border: "1px solid #fde68a",
                                        padding: "4px 12px",
                                        borderRadius: "6px",
                                        marginBottom: "24px",
                                        letterSpacing: "0.2px"
                                    }}>
                                        {item.highlight}
                                    </div>
                                </div>

                                {/* Author Block */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "14px",
                                    paddingTop: "18px",
                                    borderTop: "1px solid #eaedf0"
                                }}>
                                    <div style={{
                                        width: "46px",
                                        height: "46px",
                                        borderRadius: "50%",
                                        background: item.avatarBg,
                                        color: "#ffffff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        letterSpacing: "0.5px",
                                        flexShrink: 0
                                    }}>
                                        {item.avatarInitials}
                                    </div>
                                    <div>
                                        <h5 style={{
                                            fontSize: "16px",
                                            fontWeight: "700",
                                            color: "#0f1013",
                                            margin: "0 0 2px",
                                            fontFamily: "var(--primary-font)"
                                        }}>
                                            {item.name}
                                        </h5>
                                        <p style={{
                                            fontSize: "12.5px",
                                            color: "#64748b",
                                            margin: "0 0 2px",
                                            fontWeight: "500",
                                            lineHeight: "1.3"
                                        }}>
                                            {item.role}
                                        </p>
                                        <p style={{
                                            fontSize: "12px",
                                            color: "#94a3b8",
                                            margin: 0
                                        }}>
                                            {item.company} &bull; {item.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust & Verification Action Row */}
                <div style={{
                    marginTop: "45px",
                    textAlign: "center",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px"
                }}>
                    <Link href="/feedback" className="btn_style_one">
                        View All Client Reviews <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                    <Link href="/community" className="btn_style_two">
                        Browse Executive Directory <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}
