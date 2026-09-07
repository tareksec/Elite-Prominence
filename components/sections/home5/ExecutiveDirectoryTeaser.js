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
            backgroundColor: "#FAF8F2",
            padding: "90px 0 80px",
            fontFamily: "var(--primary-font)",
            position: "relative",
            borderTop: "1px solid #e5e3db",
            borderBottom: "1px solid #e5e3db"
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 48px" }}>
                    <span style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        color: "#92400e",
                        backgroundColor: "rgba(210, 157, 43, 0.15)",
                        border: "1px solid rgba(210, 157, 43, 0.3)",
                        padding: "5px 14px",
                        borderRadius: "20px",
                        marginBottom: "14px"
                    }}>
                        Verified Network &amp; Editorial Syndication
                    </span>
                    <h2 style={{
                        fontSize: "clamp(26px, 4vw, 36px)",
                        fontWeight: "800",
                        color: "#162d20",
                        letterSpacing: "-0.5px",
                        margin: "0 0 16px",
                        lineHeight: "1.25"
                    }}>
                        The Sovereign Executive Contributor Directory
                    </h2>
                    <p style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                        color: "#475569",
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
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "18px",
                                padding: "28px 24px",
                                border: "1px solid #e5e3db",
                                boxShadow: "0 8px 24px rgba(22, 45, 32, 0.04)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                transition: "all 0.3s ease"
                            }}
                        >
                            <div>
                                {/* Header */}
                                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                                    <div style={{
                                        width: "52px",
                                        height: "52px",
                                        borderRadius: "50%",
                                        backgroundColor: "#162d20",
                                        color: "#D29D2B",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "20px",
                                        fontWeight: "800",
                                        flexShrink: 0
                                    }}>
                                        {member.initials}
                                    </div>
                                    <div>
                                        <h3 style={{ margin: "0 0 2px", fontSize: "18px", fontWeight: "800", color: "#162d20" }}>
                                            {member.name}
                                        </h3>
                                        <div style={{ fontSize: "13px", color: "#64748b", fontStyle: "italic" }}>
                                            {member.title} • {member.company}
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
                                    padding: "6px 0",
                                    borderTop: "1px solid #f1f5f9",
                                    borderBottom: "1px solid #f1f5f9"
                                }}>
                                    <span>📍 {member.location}</span>
                                    <span>•</span>
                                    <span>📰 {member.articlesCount} Published Articles</span>
                                </div>

                                {/* Featured Perspective Preview */}
                                <div style={{
                                    backgroundColor: "#FAF8F2",
                                    padding: "12px 14px",
                                    borderRadius: "10px",
                                    border: "1px solid #e5e3db",
                                    marginBottom: "18px"
                                }}>
                                    <span style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", color: "#92400e", display: "block", marginBottom: "4px" }}>
                                        Featured Perspective
                                    </span>
                                    <p style={{ margin: 0, fontSize: "13.5px", fontWeight: "700", color: "#162d20", lineHeight: "1.4" }}>
                                        "{member.quote}"
                                    </p>
                                </div>

                                {/* Tags */}
                                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "18px" }}>
                                    {member.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: "#f1f5f9",
                                                color: "#334155",
                                                fontSize: "11px",
                                                fontWeight: "700",
                                                padding: "3px 9px",
                                                borderRadius: "12px"
                                            }}
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Link */}
                            <Link
                                href={`/community/${member.id}`}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: "#162d20",
                                    fontSize: "13.5px",
                                    fontWeight: "800",
                                    textDecoration: "none",
                                    borderTop: "1px solid #f1f5f9",
                                    paddingTop: "14px"
                                }}
                            >
                                View Executive Profile &amp; Articles &rarr;
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom Value Props Bar & Actions */}
                <div style={{
                    backgroundColor: "#162d20",
                    color: "#ffffff",
                    borderRadius: "18px",
                    padding: "32px 36px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                    boxShadow: "0 10px 30px rgba(22, 45, 32, 0.12)"
                }}>
                    <div>
                        <h4 style={{ margin: "0 0 6px", fontSize: "20px", fontWeight: "800", color: "#ffffff" }}>
                            Elevate Your Strategic Executive Footprint
                        </h4>
                        <p style={{ margin: 0, color: "#c1cfc5", fontSize: "14px", maxWidth: "600px" }}>
                            Every Elite Prominence member receives a sovereign personal website, Google Knowledge Graph indexation, and priority publication in our Executive Directory.
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                        <Link
                            href="/community"
                            style={{
                                backgroundColor: "#D29D2B",
                                color: "#162d20",
                                padding: "12px 24px",
                                borderRadius: "30px",
                                fontWeight: "800",
                                fontSize: "14px",
                                textDecoration: "none"
                            }}
                        >
                            Explore Full Directory &rarr;
                        </Link>
                        <Link
                            href="/contact"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.12)",
                                color: "#ffffff",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                padding: "12px 22px",
                                borderRadius: "30px",
                                fontWeight: "700",
                                fontSize: "14px",
                                textDecoration: "none"
                            }}
                        >
                            Apply for Contributor Status
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
