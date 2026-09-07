'use client'
import React, { useState } from 'react'
import Link from "next/link"

const FAQ_ITEMS = [
    {
        id: 1,
        question: "1. I'm already busy. How much time will this take from me?",
        answer: "Very little. This is a 100% done-for-you model designed specifically for busy HR leaders. After a 45-minute onboarding interview, most clients invest under 30 minutes a month sending voice notes or quick asynchronous approvals."
    },
    {
        id: 2,
        question: "2. Is building a personal brand just about LinkedIn content, or more?",
        answer: "It's significantly more. Building an executive brand requires an integrated tripartite presence: we combine a bespoke executive personal website (Digital HQ), Google reputation management and Knowledge Graph authority, and discreet, high-yield LinkedIn thought leadership essays. Most agencies only handle social media posts; we build your permanent digital equity."
    },
    {
        id: 3,
        question: "3. How long before I see measurable results?",
        answer: "Website launch and Google search presence improvements typically show visible authority within 45–60 days. Knowledge Panel establishment and inbound board invitations or executive recruiter reach-outs build momentum across 6–12 months."
    },
    {
        id: 4,
        question: "4. How much does executive personal branding cost for an HR leader?",
        answer: "We offer tailored executive engagements, ranging from our intensive 90-Day Authority Sprint to ongoing quarterly executive advisory retainers. Packages reflect the bespoke nature of building proprietary digital assets and Google Page 1 placement. Transparent pricing tiers are published on our Pricing page."
    },
    {
        id: 5,
        question: "5. Why do CHROs and VP HR need a dedicated personal website (Digital HQ)?",
        answer: "Because social platforms are rented digital land. Algorithms change, accounts can be restricted, and social feeds are ephemeral. A personal website is an owned executive asset that ranks #1 on Google when search committees, CEOs, and journalists research your credentials."
    },
    {
        id: 6,
        question: "6. How do you protect employer confidentiality and strict non-disclosure?",
        answer: "Discretion is our foremost principle. We adhere strictly to corporate NDAs and employment agreements. All thought leadership focuses on macro talent architecture, workplace governance, and organizational transformation without disclosing private employer data or internal communications."
    },
    {
        id: 7,
        question: "7. Who is this NOT a good fit for?",
        answer: "Early-career practitioners or anyone seeking to become an entertaining viral influencer. Our methodology is crafted exclusively for senior HR executives, CHROs, and established consultants with substantive commercial track records to articulate."
    }
]

export default function Faq() {
    const [activeKey, setActiveKey] = useState(1)

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key)
    }

    return (
        <section className="faq_section home_four pt_150 pb_120" style={{ backgroundColor: "#ffffff" }}>
            <div className="container">
                <div className="row align-items-start">
                    {/* Left Sticky Consultation Card */}
                    <div className="col-xl-5 col-lg-5 col-md-12 mb-4 mb-lg-0" style={{ position: "sticky", top: "100px" }}>
                        <div style={{
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                            position: "relative",
                            minHeight: "460px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end"
                        }} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <img 
                                src="/assets/images/elite/blog_4_executive_presence.jpg" 
                                alt="Executive personal branding consultation and advisory guidance"
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(180deg, rgba(13,20,36,0.2) 0%, rgba(13,20,36,0.92) 100%)"
                            }}></div>
                            <div style={{ position: "relative", zIndex: 2, padding: "35px 30px", color: "#fff" }}>
                                <span style={{ color: "#D29D2B", textTransform: "uppercase", fontSize: "12px", fontWeight: "700", letterSpacing: "1px" }}>
                                    Executive Consultation
                                </span>
                                <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "700", marginTop: "8px", marginBottom: "12px", lineHeight: "1.3" }}>
                                    Have a Specific Question About Your Digital Stature?
                                </h3>
                                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14.5px", lineHeight: "1.6", marginBottom: "22px" }}>
                                    Every leader's career trajectory is distinct. We conduct confidential 20-minute digital presence assessments to review your current Google standing.
                                </p>
                                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                    <Link href="/contact" className="btn_style_one" style={{ padding: "12px 24px", fontSize: "13.5px" }}>
                                        Book Strategy Call
                                    </Link>
                                    <Link href="/pricing" style={{ padding: "12px 20px", fontSize: "13.5px", color: "#ffffff", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: "600" }}>
                                        View Pricing
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Expanded FAQ Accordion */}
                    <div className="col-xl-7 col-lg-7 col-md-12">
                        <div className="inner_box ps-lg-4" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                            <div className="section_title" style={{ marginBottom: "30px" }}>
                                <div className="tag_text"><h6>Strategic FAQ &amp; Guidance</h6></div>
                                <h2 style={{ fontSize: "34px", fontWeight: "800", color: "#162d20" }}>
                                    Frequently Asked Questions
                                </h2>
                            </div>
                            <ul className="accordion_box" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {FAQ_ITEMS.map((item) => (
                                    <li
                                        key={item.id}
                                        className="accordion block"
                                        style={{
                                            marginBottom: "14px",
                                            backgroundColor: activeKey === item.id ? "#FAF8F2" : "#ffffff",
                                            border: activeKey === item.id ? "1px solid #D29D2B" : "1px solid #e2e8f0",
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        <div
                                            onClick={() => handleToggle(item.id)}
                                            style={{
                                                padding: "18px 22px",
                                                cursor: "pointer",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                gap: "12px"
                                            }}
                                        >
                                            <h3 style={{
                                                margin: 0,
                                                fontSize: "16px",
                                                fontWeight: "700",
                                                color: activeKey === item.id ? "#162d20" : "#1e293b",
                                                lineHeight: "1.4"
                                            }}>
                                                {item.question}
                                            </h3>
                                            <span style={{
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                color: activeKey === item.id ? "#D29D2B" : "#94a3b8",
                                                flexShrink: 0
                                            }}>
                                                {activeKey === item.id ? "−" : "+"}
                                            </span>
                                        </div>

                                        {activeKey === item.id && (
                                            <div style={{
                                                padding: "0 22px 20px",
                                                fontSize: "15px",
                                                color: "#475569",
                                                lineHeight: "1.7",
                                                borderTop: "1px solid rgba(0,0,0,0.04)"
                                            }}>
                                                <p style={{ margin: "10px 0 0" }}>{item.answer}</p>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
