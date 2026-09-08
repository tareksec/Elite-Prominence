'use client'
import React, { useState } from 'react'

const FAQ_DATA = [
    {
        id: 1,
        category: "Executive Time Tax",
        tag: "< 30 Mins / Month",
        question: "I'm already leading an enterprise. How much time will this require from me?",
        answer: "Very little. This is a 100% done-for-you model designed specifically for busy enterprise leaders and C-suite executives. After a single 45-minute narrative extraction interview, most clients invest under 30 minutes a month sending quick WhatsApp voice notes or reviewing asynchronous approvals. We manage all research, copywriting, technical architecture, and distribution."
    },
    {
        id: 2,
        category: "Asset Architecture",
        tag: "Permanent Owned Equity",
        question: "Is building a personal brand just about LinkedIn content, or significantly more?",
        answer: "It is significantly more. Building sovereign authority requires an integrated tripartite presence: we combine a bespoke executive personal website (Digital HQ), Google reputation management with Knowledge Graph authority, and discreet, high-yield LinkedIn thought leadership essays. Most agencies only handle social media posts; we build permanent, client-owned digital equity that outlasts any single employer."
    },
    {
        id: 3,
        category: "Measurable Milestones",
        tag: "45–60 Day Horizon",
        question: "How long before I see measurable boardroom and search results?",
        answer: "Website launch and Google search presence improvements typically establish definitive Page 1 authority within 45–60 days. Google Knowledge Graph verification, incoming board nominations, and executive search committee reach-outs build compounding momentum over 3 to 6 months."
    },
    {
        id: 4,
        category: "Commercial Structure",
        tag: "Transparent Investment",
        question: "How are executive engagements structured and priced?",
        answer: "We offer tailored executive engagements, ranging from our intensive 90-Day Sovereign Stature Sprint to ongoing quarterly executive advisory retainers. Packages reflect the bespoke nature of building proprietary digital assets and Google Page 1 placement. Transparent pricing tiers are published on our Pricing page."
    },
    {
        id: 5,
        category: "Digital Real Estate",
        tag: "Sovereign Asset",
        question: "Why do enterprise executives need a dedicated personal website (Digital HQ)?",
        answer: "Because social platforms are rented digital land. Algorithms change, accounts can be restricted, and corporate employer bios vanish the moment you transition. A personal website is an owned executive asset that ranks #1 on Google when nominating chairs, CEOs, investors, and journalists research your credentials."
    },
    {
        id: 6,
        category: "Confidentiality & Compliance",
        tag: "100% Strict NDA",
        question: "How do you protect employer confidentiality and strict non-disclosure?",
        answer: "Discretion is our foremost principle. We adhere strictly to corporate NDAs and employment agreements. All thought leadership focuses on macro talent architecture, workplace governance, and organizational transformation without disclosing private employer operational data or internal communications."
    },
    {
        id: 7,
        category: "Advisory Fit",
        tag: "Senior Leadership Only",
        question: "Who is this service NOT a good fit for?",
        answer: "Early-career practitioners, entry-level professionals, or anyone seeking to become an entertaining social media influencer. Our methodology is crafted exclusively for senior enterprise executives, CHROs, CEOs, and established consultants with substantive commercial track records to articulate."
    }
]

export default function FaqAccordion() {
    const [activeKey, setActiveKey] = useState(1)

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {FAQ_DATA.map((item) => {
                const isOpen = activeKey === item.id
                return (
                    <div
                        key={item.id}
                        className="prominence_depth_card"
                        style={{
                            padding: "0",
                            backgroundColor: isOpen ? "#F7F5FC" : "#ffffff",
                            borderColor: isOpen ? "#8B5CF6" : "#eaedf0",
                            transition: "all 0.25s ease",
                            overflow: "hidden"
                        }}
                    >
                        <div
                            onClick={() => handleToggle(item.id)}
                            style={{
                                padding: "24px 28px",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px"
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <span style={{
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.6px",
                                        color: "#6D28D9",
                                        fontFamily: "var(--primary-font)"
                                    }}>
                                        {item.category}
                                    </span>
                                    <span style={{ color: "#cbd5e1" }}>&bull;</span>
                                    <span style={{
                                        fontSize: "12px",
                                        fontWeight: "600",
                                        color: "#4B5563",
                                        backgroundColor: isOpen ? "#ffffff" : "#f1f5f9",
                                        padding: "2px 8px",
                                        borderRadius: "4px",
                                        border: "1px solid rgba(0,0,0,0.05)"
                                    }}>
                                        {item.tag}
                                    </span>
                                </div>
                                <div style={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "50%",
                                    backgroundColor: isOpen ? "#0D0D14" : "#f1f5f9",
                                    color: isOpen ? "#ffffff" : "#4B5563",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    flexShrink: 0,
                                    transition: "all 0.2s ease"
                                }}>
                                    <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                                </div>
                            </div>

                            <h3 style={{
                                margin: "6px 0 0",
                                fontSize: "17px",
                                fontWeight: "700",
                                color: "#0D0D14",
                                fontFamily: "var(--primary-font)",
                                lineHeight: "1.4",
                                letterSpacing: "-0.2px"
                            }}>
                                {item.question}
                            </h3>
                        </div>

                        {isOpen && (
                            <div style={{
                                padding: "0 28px 24px",
                                borderTop: "1px solid rgba(139, 92, 246, 0.2)"
                            }}>
                                <p style={{
                                    margin: "16px 0 0",
                                    fontSize: "15px",
                                    color: "#4B5563",
                                    lineHeight: "26px"
                                }}>
                                    {item.answer}
                                </p>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

