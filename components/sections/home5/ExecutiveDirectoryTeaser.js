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
            backgroundColor: "#fafbfc",
            padding: "95px 0 85px",
            fontFamily: "var(--primary-font)",
            position: "relative",
            borderTop: "1px solid #eaedf0",
            borderBottom: "1px solid #eaedf0"
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 48px" }}>
                    <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        color: "#0f1013",
                        backgroundColor: "#f1f5f9",
                        border: "1px solid #e2e8f0",
                        padding: "6px 16px",
                        borderRadius: "30px",
                        marginBottom: "14px"
                    }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#b89058" }}></span>
                        Verified Network &amp; Editorial Syndication
                    </span>
                    <h2 style={{
                        fontSize: "38px",
                        fontWeight: "700",
                        color: "#0f1013",
                        letterSpacing: "-0.5px",
                        margin: "0 0 16px",
                        lineHeight: "1.25"
                    }}>
                        The Sovereign Executive Contributor Directory
                    </h2>
                    <p style={{
                        fontSize: "16.5px",
                        lineHeight: "1.7",
                        color: "#59606a",
                        margin: 0
                    }}>
                        A curated, invitation-only ecosystem where Chief Human Resources Officers, VP People leaders, and executive advisors syndicate battle-tested operational frameworks, establish Google entity equity, and attract board appointments.
                    </p>
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
                            className="prominence_card_equal_height"
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "14px",
                                padding: "30px 26px",
                                border: "1px solid #eaedf0",
                                boxShadow: "0 4px 18px rgba(15, 16, 19, 0.03)",
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
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div style={{ minWidth: 0, flex: 1 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <h3 style={{
                                                fontSize: "17px",
                                                fontWeight: "700",
                                                color: "#0f1013",
                                                margin: 0,
                                                fontFamily: "var(--ep-font-serif, 'PT Serif', serif)"
                                            }}>
                                                {member.name}
                                            </h3>
                                            <i className="fa-solid fa-circle-check" style={{ color: "#b89058", fontSize: "13px" }} title="Verified Prominence Member"></i>
                                        </div>
                                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>
                                            {member.role}
                                        </div>
                                        <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                                            {member.company}
                                        </div>
                                    </div>
                                </div>

                                {/* Location & Articles count */}
                                <div style={{
                                    display: "flex",
                                    gap: "10px",
                                    fontSize: "12px",
                                    color: "#64748b",
                                    marginBottom: "16px",
                                    padding: "8px 0",
                                    borderTop: "1px solid #f1f5f9",
                                    borderBottom: "1px solid #f1f5f9"
                                }}>
                                    <span><i className="fa-solid fa-location-dot me-1" style={{ color: "#b89058" }}></i>{member.location}</span>
                                    <span>&bull;</span>
                                    <span><i className="fa-regular fa-newspaper me-1"></i>{member.articlesCount} Published Articles</span>
                                </div>

                                {/* Featured Perspective Preview */}
                                <div style={{
                                    backgroundColor: "#f8fafc",
                                    padding: "14px 16px",
                                    borderRadius: "10px",
                                    border: "1px solid #eaedf0",
                                    marginBottom: "18px"
                                }}>
                                    <span style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", color: "#b89058", display: "block", marginBottom: "4px" }}>
                                        Featured Perspective
                                    </span>
                                    <p style={{ margin: 0, fontSize: "13.5px", fontWeight: "600", color: "#1e293b", lineHeight: "1.5" }}>
                                        &ldquo;{member.quote}&rdquo;
                                    </p>
                                </div>

                                {/* Tags */}
                                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
                                    {member.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: "#f1f5f9",
                                                color: "#475569",
                                                fontSize: "11px",
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
                                    className="btn_style_ghost"
                                >
                                    View Executive Profile &amp; Articles <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Value Props Bar & Actions */}
                <div style={{
                    backgroundColor: "#0f1013",
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
                        <h4 style={{ margin: "0 0 6px", fontSize: "20px", fontWeight: "700", color: "#ffffff", fontFamily: "var(--ep-font-serif, 'PT Serif', serif)" }}>
                            Elevate Your Strategic Executive Footprint
                        </h4>
                        <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px", maxWidth: "600px", lineHeight: "1.6" }}>
                            Every Prominence member receives a sovereign personal website, Google Knowledge Graph indexation, and priority publication in our Executive Directory.
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                        <Link
                            href="/community"
                            className="btn_style_gold"
                        >
                            Explore Full Directory <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link
                            href="/contact"
                            className="btn_style_two_dark"
                        >
                            Apply for Contributor Status
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
