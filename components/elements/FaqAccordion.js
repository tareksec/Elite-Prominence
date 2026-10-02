'use client'

import React, { useState } from 'react'

const FAQ_DATA = [
    {
        id: 1,
        question: "I'm already leading an enterprise. How much time will this require from me?",
        answer: "Very little. This is a 100% done-for-you model designed specifically for busy enterprise leaders. After a single 45-minute narrative extraction interview, most clients invest under 30 minutes a month sending quick voice notes or reviewing asynchronous approvals. We manage all research, copywriting, technical architecture, and distribution."
    },
    {
        id: 2,
        question: "Is building a personal brand just about LinkedIn content, or significantly more?",
        answer: "It is significantly more. Building sovereign authority requires an integrated presence: we combine a bespoke executive personal website (Digital HQ), Google reputation management with Knowledge Graph authority, and discreet, high-yield LinkedIn thought leadership essays. Most agencies only handle social media posts; we build permanent, client-owned digital equity that outlasts any single employer."
    },
    {
        id: 3,
        question: "How long before I see measurable boardroom and search results?",
        answer: "Website launch and Google search presence improvements typically establish definitive Page 1 authority within 45–60 days. Google Knowledge Graph verification, incoming board nominations, and executive search committee reach-outs build compounding momentum over 3 to 6 months."
    },
    {
        id: 4,
        question: "How are executive engagements structured and priced?",
        answer: "We offer tailored executive engagements, ranging from our intensive 90-Day Sovereign Stature Sprint to ongoing quarterly executive advisory retainers. Packages reflect the bespoke nature of building proprietary digital assets and Google Page 1 placement. Transparent pricing tiers are published on our Pricing page."
    },
    {
        id: 5,
        question: "Why do enterprise executives need a dedicated personal website (Digital HQ)?",
        answer: "Because social platforms are rented digital land. Algorithms change, accounts can be restricted, and corporate employer bios vanish the moment you transition. A personal website is an owned executive asset that ranks #1 on Google when nominating chairs, CEOs, investors, and journalists research your credentials."
    },
    {
        id: 6,
        question: "How do you protect employer confidentiality and strict non-disclosure?",
        answer: "Discretion is our foremost principle. We adhere strictly to corporate NDAs and employment agreements. All thought leadership focuses on macro talent architecture, workplace governance, and organizational transformation without disclosing private employer operational data or internal communications."
    },
    {
        id: 7,
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
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {FAQ_DATA.map((item) => {
                const isOpen = activeKey === item.id
                return (
                    <div
                        key={item.id}
                        className="neo-card"
                        style={{
                            borderRadius: "20px",
                            backgroundColor: isOpen ? "#EDE9FE" : "#FFFFFF",
                            border: "1.5px solid #0F1117",
                            boxShadow: isOpen ? "4px 4px 0px #7C3AED" : "4px 4px 0px #0F1117",
                            overflow: "hidden",
                            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                    >
                        <div
                            onClick={() => handleToggle(item.id)}
                            style={{
                                padding: "20px 24px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "16px",
                                userSelect: "none"
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "16.5px",
                                    fontWeight: "800",
                                    color: "#0F1117",
                                    margin: 0,
                                    lineHeight: "1.35",
                                    fontFamily: "var(--primary-font, -apple-system, sans-serif)"
                                }}
                            >
                                {item.question}
                            </h3>

                            {/* Circle Toggle Button (+ / -) */}
                            <div
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "50%",
                                    backgroundColor: isOpen ? "#0F1117" : "#FAF8F5",
                                    color: isOpen ? "#FFFFFF" : "#0F1117",
                                    border: "1.5px solid #0F1117",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "14px",
                                    fontWeight: "800",
                                    flexShrink: 0,
                                    transition: "all 0.2s ease"
                                }}
                            >
                                {isOpen ? "−" : "+"}
                            </div>
                        </div>

                        {isOpen && (
                            <div
                                style={{
                                    padding: "0 24px 22px",
                                    color: "#374151",
                                    fontSize: "15px",
                                    lineHeight: "1.65",
                                    borderTop: "1px solid rgba(124, 58, 237, 0.2)",
                                    paddingTop: "14px"
                                }}
                            >
                                {item.answer}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
