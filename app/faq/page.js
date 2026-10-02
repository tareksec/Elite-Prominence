import React from 'react'
import Link from "next/link"
import ModernHeader from "@/components/layout/ModernHeader"
import ModernFooter from "@/components/layout/ModernFooter"
import FaqAccordion from "@/components/elements/FaqAccordion"

export const metadata = {
    title: 'Frequently Asked Questions',
    description: 'Answers to common questions about our done-for-you personal branding service for senior HR leaders, including time commitment, deliverables, and ROI.',
    alternates: {
        canonical: '/faq',
    },
    openGraph: {
        title: 'Frequently Asked Questions',
        description: 'Answers to common questions about our done-for-you personal branding service for senior HR leaders, including time commitment, deliverables, and ROI.',
        url: 'https://www.prominence.agency/faq',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.prominence.agency',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'FAQ',
                    item: 'https://www.prominence.agency/faq',
                },
            ],
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: "I'm already busy. How much time will this take from me?",
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Very little. This is a done-for-you model designed specifically for busy HR leaders — most clients spend under 30 minutes a month once onboarding is complete.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Is building a personal brand with you just about LinkedIn content, or more than that?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: "It's significantly more. Building a personal brand requires an integrated presence: we combine an executive personal website, Google reputation management, and high-impact LinkedIn thought leadership — whereas most agencies only handle one piece.",
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How long before I see results?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Website and reputation work typically shows visible change within 60–90 days; social growth and inbound opportunities build over 6–12 months.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How much does executive personal branding cost for an HR leader?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We offer tailored executive engagements, ranging from our intensive 90-Day Authority Sprint to ongoing quarterly executive advisory retainers. Packages reflect the bespoke nature of building proprietary digital assets and Google Page 1 placement. Transparent pricing tiers are published on our Pricing page.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Why do CHROs and VP HR need a dedicated personal website (Digital HQ)?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Because social platforms are rented digital land. Algorithms change, accounts can be restricted, and social feeds are ephemeral. A personal website is an owned executive asset that ranks #1 on Google when search committees, CEOs, and journalists research your credentials.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How do you protect employer confidentiality and strict non-disclosure?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Discretion is our foremost principle. We adhere strictly to corporate NDAs and employment agreements. All thought leadership focuses on macro talent architecture, workplace governance, and organizational transformation without disclosing private employer data or internal communications.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Who is this NOT a good fit for?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Early-career practitioners without an established track record yet — our work is designed specifically for senior leaders who already possess substantive expertise and commercial outcomes to showcase.',
                    },
                },
            ],
        },
    ],
}

export default function Faq_Page() {
    return (
        <div className="mlab-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <ModernHeader />

            {/* Breadcrumb Navigation */}
            <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(18,19,22,0.08)", background: "#FAF9F5", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#8A8F9E" }}>
                        <Link href="/" style={{ color: "#8A8F9E", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <span style={{ color: "#121316", fontWeight: 600 }}>Frequently Asked Questions</span>
                    </div>
                </div>
            </div>

            <main>
                <section style={{ padding: "80px 0 100px", background: "#FFFFFF" }}>
                    <div className="container">
                        <div className="row g-5">
                            
                            {/* Left Column: Editorial Advisory Rail (Sticky on Desktop) */}
                            <div className="col-lg-5 pe-lg-4">
                                <div style={{ position: "sticky", top: "120px" }}>
                                    <span className="editorial-badge" style={{ marginBottom: "18px" }}>
                                        <span className="editorial-badge-dot">✦</span> EXECUTIVE DUE DILIGENCE
                                    </span>

                                    <h1 style={{
                                        fontSize: "clamp(30px, 3.8vw, 44px)",
                                        fontWeight: 850,
                                        color: "#121316",
                                        lineHeight: "1.15",
                                        letterSpacing: "-0.03em",
                                        marginBottom: "18px"
                                    }}>
                                        Boardroom Transparency &amp; Discretion Protocols
                                    </h1>

                                    <p style={{ fontSize: "16px", color: "#555A68", lineHeight: "1.75", marginBottom: "32px" }}>
                                        Retaining an executive reputation advisory is a high-stakes institutional decision. We provide uncompromising clarity regarding non-disclosure protocols, client time investment, proprietary asset ownership, and measurable governance outcomes.
                                    </p>

                                    {/* Strict NDA Assurance Box */}
                                    <div style={{ padding: "26px 24px", marginBottom: "28px", backgroundColor: "#FAF9F5", borderRadius: "20px", border: "1.5px solid rgba(18,19,22,0.08)" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                                            <span style={{ color: "#FF3B81", fontSize: "16px", fontWeight: 800 }}>✦</span>
                                            <span style={{ fontSize: "14px", fontWeight: 800, color: "#121316", letterSpacing: "-0.01em" }}>
                                                100% Strict NDA Protection
                                            </span>
                                        </div>
                                        <p style={{ fontSize: "13.5px", color: "#555A68", lineHeight: "1.65", margin: 0 }}>
                                            We operate under bilateral confidentiality agreements. Zero internal corporate data, non-public operational metrics, or confidential board dialogue are ever shared or published.
                                        </p>
                                    </div>

                                    {/* Direct Advisory Action Card */}
                                    <div style={{
                                        padding: "32px 28px",
                                        backgroundColor: "#121316",
                                        borderRadius: "24px",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        color: "#FFFFFF",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                                    }}>
                                        <span style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#FF3B81", display: "block", marginBottom: "8px" }}>
                                            Direct Confidential Access
                                        </span>
                                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: "10px" }}>
                                            Have an Unlisted Governance Inquiry?
                                        </div>
                                        <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.65)", lineHeight: "1.65", marginBottom: "22px" }}>
                                            Speak directly with a Prominence Managing Partner to evaluate your specific positioning or transition horizon.
                                        </p>
                                        <Link href="/contact" className="prominence-btn-primary w-100 justify-content-center" style={{ padding: "14px 20px" }}>
                                            <span>Book Confidential Briefing</span>
                                            <span>&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Structured Executive FAQ Accordion */}
                            <div className="col-lg-7">
                                <div style={{ marginBottom: "28px" }}>
                                    <span className="editorial-badge" style={{ marginBottom: "12px" }}>
                                        <span className="editorial-badge-dot">✦</span> KEY OPERATIONAL INQUIRIES
                                    </span>
                                    <h2 style={{ fontSize: "24px", fontWeight: 850, color: "#121316", letterSpacing: "-0.02em", marginTop: "4px" }}>
                                        Frequently Addressed Matters
                                    </h2>
                                </div>

                                <FaqAccordion />
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <ModernFooter />
        </div>
    )
}