'use client'
import React, { useState } from 'react'

const FAQ_DATA = [
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

export default function FaqAccordion() {
    const [activeKey, setActiveKey] = useState(1)

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key)
    }

    return (
        <ul className="accordion_box" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {FAQ_DATA.map((item) => (
                <li
                    key={item.id}
                    className="accordion block"
                    style={{
                        marginBottom: "16px",
                        backgroundColor: activeKey === item.id ? "#FAF8F2" : "#ffffff",
                        border: activeKey === item.id ? "1px solid #D29D2B" : "1px solid #e2e8f0",
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
                        transition: "all 0.2s ease"
                    }}
                >
                    <div
                        onClick={() => handleToggle(item.id)}
                        style={{
                            padding: "20px 24px",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "14px"
                        }}
                    >
                        <h3 style={{
                            margin: 0,
                            fontSize: "16.5px",
                            fontWeight: "700",
                            color: activeKey === item.id ? "#162d20" : "#1e293b",
                            lineHeight: "1.4"
                        }}>
                            {item.question}
                        </h3>
                        <span style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: activeKey === item.id ? "#D29D2B" : "#94a3b8",
                            flexShrink: 0
                        }}>
                            {activeKey === item.id ? "−" : "+"}
                        </span>
                    </div>

                    {activeKey === item.id && (
                        <div style={{
                            padding: "0 24px 22px",
                            fontSize: "15.5px",
                            color: "#475569",
                            lineHeight: "1.7",
                            borderTop: "1px solid rgba(0,0,0,0.05)"
                        }}>
                            <p style={{ margin: "12px 0 0" }}>{item.answer}</p>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    )
}
