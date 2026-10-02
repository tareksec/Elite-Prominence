'use client'

import React from 'react'
import Link from "next/link"

const BLOG_POSTS = [
    {
        id: 1,
        title: "How to Build a Personal Brand as an HR Leader (Without Becoming a \"Content Creator\")",
        category: "Personal Branding",
        categoryBg: "#EDE9FE",
        categoryColor: "#6D28D9",
        image: "/assets/images/elite/blog_1_hr_personal_brand.jpg",
        link: "/blog-details",
        readTime: "5 min read",
        summary: "A practical executive playbook on sovereign thought leadership for C-level people leaders without daily social media posting."
    },
    {
        id: 2,
        title: "A LinkedIn Strategy for CHROs Who Don't Have Time to Post",
        category: "LinkedIn Strategy",
        categoryBg: "#FCE7F3",
        categoryColor: "#BE185D",
        image: "/assets/images/elite/blog_2_linkedin_chro.jpg",
        link: "/blog-details-2",
        readTime: "4 min read",
        summary: "How enterprise executives leverage high-conviction ghostwriting to maintain boardroom stature in under 20 minutes a month."
    },
    {
        id: 3,
        title: "How to Rank on Google as an Independent Consultant or Board Advisor",
        category: "Reputation Management",
        categoryBg: "#ECFDF5",
        categoryColor: "#047857",
        image: "/assets/images/elite/blog_3_google_ranking.jpg",
        link: "/blog-grid",
        readTime: "6 min read",
        summary: "A deep dive into Knowledge Graph entity schemas, Wikipedia citations, and personal domain SEO that locks down Page 1."
    }
]

export default function Blog() {
    return (
        <section
            style={{
                backgroundColor: "#FAF8F5",
                padding: "110px 0",
                borderBottom: "1.5px solid #E5E7EB",
                fontFamily: "var(--primary-font, -apple-system, sans-serif)",
                position: "relative"
            }}
        >
            <div className="container">
                {/* Header (MLab Style) */}
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
                                Thought Leadership
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
                            Blog
                        </h2>
                    </div>
                    <div>
                        <p
                            style={{
                                color: "#4B5563",
                                fontSize: "16.5px",
                                lineHeight: "1.7",
                                maxWidth: "500px",
                                margin: 0
                            }}
                        >
                            In our blog you can read articles written by executive reputation advisors on sovereign entity architecture, board governance, and Google Page 1 control.
                        </p>
                    </div>
                </div>

                {/* Blog Cards Grid */}
                <div className="row g-4">
                    {BLOG_POSTS.map((post) => (
                        <div key={post.id} className="col-12 col-md-6 col-lg-4">
                            <div
                                className="neo-card"
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "26px",
                                    border: "2px solid #0F1117",
                                    boxShadow: "6px 6px 0px #0F1117",
                                    overflow: "hidden",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}
                            >
                                <div>
                                    {/* Visual Image Preview */}
                                    <div style={{ position: "relative", width: "100%", height: "210px", overflow: "hidden" }}>
                                        <Link href={post.link}>
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    display: "block",
                                                    transition: "transform 0.4s ease"
                                                }}
                                            />
                                        </Link>

                                        {/* Floating Category Pill Badge inside Image (MLab style) */}
                                        <div style={{ position: "absolute", top: "14px", left: "16px" }}>
                                            <span
                                                style={{
                                                    backgroundColor: post.categoryBg,
                                                    color: post.categoryColor,
                                                    fontSize: "11px",
                                                    fontWeight: "800",
                                                    padding: "5px 12px",
                                                    borderRadius: "9999px",
                                                    border: `1px solid ${post.categoryColor}33`,
                                                    letterSpacing: "0.3px",
                                                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
                                                }}
                                            >
                                                {post.category}
                                            </span>
                                        </div>

                                        <div style={{ position: "absolute", bottom: "12px", right: "16px" }}>
                                            <span
                                                style={{
                                                    backgroundColor: "rgba(15, 17, 23, 0.75)",
                                                    backdropFilter: "blur(4px)",
                                                    color: "#FFFFFF",
                                                    fontSize: "10.5px",
                                                    fontWeight: "700",
                                                    padding: "3px 8px",
                                                    borderRadius: "6px"
                                                }}
                                            >
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div style={{ padding: "26px 26px 16px" }}>
                                        <h3
                                            style={{
                                                fontSize: "19px",
                                                fontWeight: "800",
                                                color: "#0F1117",
                                                lineHeight: "1.35",
                                                marginBottom: "12px"
                                            }}
                                        >
                                            <Link href={post.link} style={{ color: "inherit", textDecoration: "none" }}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.65", margin: 0 }}>
                                            {post.summary}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Footer Link */}
                                <div
                                    style={{
                                        padding: "16px 26px 24px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Link
                                        href={post.link}
                                        style={{
                                            fontSize: "13px",
                                            fontWeight: "800",
                                            color: "#7C3AED",
                                            textDecoration: "none",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        }}
                                    >
                                        Read Briefing <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }} />
                                    </Link>
                                    <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: "600" }}>
                                        Prominence Advisory
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Pill Button (MLab Style: "More articles") */}
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <Link
                        href="/blog-grid"
                        className="neo-btn-primary"
                        style={{ padding: "14px 32px", fontSize: "14.5px" }}
                    >
                        More articles <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
