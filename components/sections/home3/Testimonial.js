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
        avatarBg: "linear-gradient(135deg, #162d20 0%, #244b34 100%)",
        rating: 5,
        quote: "Elite Prominence transformed my executive presence. Within 60 days of launching my new digital HQ and executive LinkedIn strategy, I received two board advisory invitations.",
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
        avatarBg: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
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
        avatarBg: "linear-gradient(135deg, #162d20 0%, #151619 100%)",
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
                padding: "95px 0 85px",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <div className="shape_icon_12 float-bob-y" style={{ opacity: 0.5 }}>
                <img src="/assets/images/icons/shape_icon_12.png" alt="" />
            </div>

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
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    color: "#162d20",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.8px"
                                }}>
                                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#D29D2B" }}></span>
                                    Verified Executive Endorsements
                                </h6>
                            </div>
                            <h2 style={{
                                fontSize: "38px",
                                fontWeight: "800",
                                color: "#162d20",
                                lineHeight: "1.25",
                                letterSpacing: "-0.5px"
                            }}>
                                Proven Results for Senior People Leaders
                            </h2>
                            <p style={{
                                fontSize: "16.5px",
                                color: "#64748b",
                                maxWidth: "620px",
                                margin: "14px auto 0",
                                lineHeight: "1.65"
                            }}>
                                How CHROs, Chief People Officers, and Managing Directors build undeniable authority, unlock board invitations, and dominate their niche with Elite Prominence.
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
                                    backgroundColor: activeIndex === idx ? "#fafaf9" : "#ffffff",
                                    borderRadius: "18px",
                                    padding: "36px 30px",
                                    border: activeIndex === idx ? "2px solid #D29D2B" : "1px solid #e2e8f0",
                                    boxShadow: activeIndex === idx
                                        ? "0 20px 40px -10px rgba(210, 157, 43, 0.15), 0 4px 12px rgba(0,0,0,0.04)"
                                        : "0 10px 30px rgba(0,0,0,0.04)",
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
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
                                        <div style={{ display: "flex", gap: "3px" }}>
                                            {[...Array(item.rating)].map((_, i) => (
                                                <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#D29D2B">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
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
                                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
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
                                        "{item.quote}"
                                    </p>

                                    {/* Highlight Metric Pill */}
                                    <div style={{
                                        display: "inline-block",
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        color: "#162d20",
                                        backgroundColor: "rgba(210, 157, 43, 0.12)",
                                        border: "1px solid rgba(210, 157, 43, 0.3)",
                                        padding: "4px 12px",
                                        borderRadius: "8px",
                                        marginBottom: "24px"
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
                                    borderTop: "1px solid #e2e8f0"
                                }}>
                                    <div style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "50%",
                                        background: item.avatarBg,
                                        color: "#ffffff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "16px",
                                        fontWeight: "800",
                                        letterSpacing: "0.5px",
                                        flexShrink: 0
                                    }}>
                                        {item.avatarInitials}
                                    </div>
                                    <div>
                                        <h5 style={{
                                            fontSize: "16px",
                                            fontWeight: "700",
                                            color: "#162d20",
                                            margin: "0 0 2px"
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
                    gap: "18px"
                }}>
                    <Link
                        href="/feedback"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "12px 28px",
                            borderRadius: "9999px",
                            backgroundColor: "#162d20",
                            color: "#ffffff",
                            fontSize: "14.5px",
                            fontWeight: "600",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            boxShadow: "0 6px 18px rgba(22, 45, 32, 0.18)"
                        }}
                    >
                        <span>View All Client Reviews</span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <Link
                        href="/community"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "12px 28px",
                            borderRadius: "9999px",
                            backgroundColor: "#ffffff",
                            color: "#162d20",
                            fontSize: "14.5px",
                            fontWeight: "600",
                            textDecoration: "none",
                            border: "1px solid #cbd5e1",
                            transition: "all 0.2s ease"
                        }}
                    >
                        <span>Browse Executive Directory &rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
