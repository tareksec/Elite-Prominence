'use client'
import React from 'react'
import Link from 'next/link'

const DIRECTORY_TEASER_MEMBERS = [
    {
        id: "member-1",
        name: "Eleanor Vance",
        title: "Chief Human Resources Officer",
        company: "GlobalTech Solutions",
        location: "New York, USA",
        tags: ["Executive Presence", "Boardroom Governance", "M&A Integration"],
        articlesCount: 2,
        initials: "EV",
        quote: "From Internal Operator to Industry Authority: The 90-Day Blueprint"
    },
    {
        id: "member-2",
        name: "Marcus Sterling",
        title: "Managing Director & Board Advisor",
        company: "Sterling & Partners Advisory",
        location: "London, UK",
        tags: ["Executive Search Alignment", "Advisory Mandates", "Digital Reputation"],
        articlesCount: 1,
        initials: "MS",
        quote: "Why Google Is Your First Interview for Board Roles"
    },
    {
        id: "member-3",
        name: "Dr. Aris Thorne",
        title: "Senior VP of People Strategy",
        company: "BioHealth Diagnostics",
        location: "Boston, USA",
        tags: ["Thought Leadership", "Talent Infrastructure", "Executive Resilience"],
        articlesCount: 1,
        initials: "AT",
        quote: "Authentic Executive Voice in the Age of Synthetic Content"
    }
]

export default function ExecutiveDirectoryTeaser() {
    return (
        <section style={{
            backgroundColor: "#FAF8F5",
            padding: "110px 0",
            fontFamily: "var(--primary-font, -apple-system, sans-serif)",
            position: "relative",
            borderBottom: "1.5px solid #E5E7EB"
        }}>
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
                                Verified Contributor Network
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: "clamp(28px, 3.8vw, 42px)",
                            fontWeight: "800",
                            color: "#0F1117",
                            letterSpacing: "-0.8px",
                            margin: 0,
                            lineHeight: "1.16"
                        }}>
                            Sovereign Executive Contributor Directory
                        </h2>
                    </div>
                    <div>
                        <p style={{
                            fontSize: "16.5px",
                            lineHeight: "1.7",
                            color: "#4B5563",
                            maxWidth: "520px",
                            margin: 0
                        }}>
                            A curated, invitation-only ecosystem where Chief Human Resources Officers, VP People leaders, and executive advisors syndicate battle-tested operational frameworks, establish Google entity equity, and attract board appointments.
                        </p>
                    </div>
                </div>

                {/* 3 Contributor Preview Cards */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
                    gap: "24px",
                    marginBottom: "44px"
                }}>
                    {DIRECTORY_TEASER_MEMBERS.map((member) => (
                        <div
                            key={member.id}
                            className="neo-card"
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "24px",
                                padding: "32px 28px",
                                border: "1.5px solid #0F1117",
                                boxShadow: "4px 4px 0px #0F1117",
                                display: "flex",
                                flexDirection: "column",
                                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}
                        >
                            <div className="prominence_card_body">
                                {/* Header */}
                                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "18px" }}>
                                    <div style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        flexShrink: 0,
                                        border: "2px solid #eaedf0"
                                    }}>
                                        {member.avatar ? (
                                            <img
                                                src={member.avatar}
                                                alt={member.name}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        ) : (
                                            <div style={{
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: "#0D0D14",
                                                color: "#8B5CF6",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: "700",
                                                fontSize: "18px",
                                                fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)"
                                            }}>
                                                {member.initials || member.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ minWidth: 0, flex: 1 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <h3 style={{
                                                fontSize: "17px",
                                                fontWeight: "700",
                                                color: "#0D0D14",
                                                margin: 0,
                                                fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)"
                                            }}>
                                                {member.name}
                                            </h3>
                                            <i className="fa-solid fa-circle-check" style={{ color: "#8B5CF6", fontSize: "13px" }} title="Verified Prominence Member"></i>
                                        </div>
                                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#6B7280", marginTop: "2px" }}>
                                            {member.role || member.title}
                                        </div>
                                        <div style={{ fontSize: "12px", color: "#6B7280" }}>
                                            {member.company}
                                        </div>
                                    </div>
                                </div>

                                {/* Location & Articles count */}
                                <div style={{
                                    display: "flex",
                                    gap: "10px",
                                    fontSize: "12px",
                                    color: "#6B7280",
                                    marginBottom: "16px",
                                    padding: "8px 0",
                                    borderTop: "1px solid #f1f5f9",
                                    borderBottom: "1px solid #f1f5f9"
                                }}>
                                    <span><i className="fa-solid fa-location-dot me-1" style={{ color: "#8B5CF6" }}></i>{member.location}</span>
                                    <span>&bull;</span>
                                    <span><i className="fa-solid fa-newspaper me-1" style={{ color: "#6B7280" }}></i>{member.articlesCount} Published Articles</span>
                                </div>

                                {/* Featured Perspective Preview */}
                                <div style={{
                                    backgroundColor: "#F7F5FC",
                                    padding: "18px 20px",
                                    borderRadius: "10px",
                                    border: "1px solid #eaedf0",
                                    marginBottom: "18px"
                                }}>
                                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px", color: "#6D28D9", display: "block", marginBottom: "6px" }}>
                                        Featured Perspective
                                    </span>
                                    <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#0D0D14", lineHeight: "1.6" }}>
                                        &ldquo;{member.quote}&rdquo;
                                    </p>
                                </div>

                                {/* Tags */}
                                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
                                    {member.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: "#F7F5FC",
                                                color: "#4B5563",
                                                fontSize: "12px",
                                                fontWeight: "600",
                                                padding: "3px 10px",
                                                borderRadius: "6px",
                                                border: "1px solid #e2e8f0"
                                            }}
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Link */}
                            <div className="prominence_card_footer" style={{ borderTop: "1px solid #f1f5f9", paddingTop: "14px", marginTop: "auto" }}>
                                <Link
                                    href={`/community/${member.id}`}
                                    className="btn_style_two btn_sm"
                                    style={{ width: "100%", justifyContent: "center" }}
                                >
                                    View Executive Profile &amp; Articles <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Value Props Bar & Actions */}
                <div style={{
                    backgroundColor: "#0D0D14",
                    color: "#ffffff",
                    borderRadius: "14px",
                    padding: "32px 36px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
                }}>
                    <div>
                        <h3 style={{ margin: "0 0 6px", fontSize: "20px", fontWeight: "700", color: "#ffffff", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                            Elevate Your Strategic Executive Footprint
                        </h3>
                        <p style={{ margin: 0, color: "#94A3B8", fontSize: "14px", maxWidth: "600px", lineHeight: "1.6" }}>
                            Every Prominence member receives a sovereign personal website, Google Knowledge Graph indexation, and priority publication in our Executive Directory.
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                        <Link
                            href="/community"
                            className="btn_style_gold btn_md"
                        >
                            Explore Full Directory <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link
                            href="/contact"
                            className="btn_style_two_dark btn_md"
                        >
                            Apply for Contributor Status <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
