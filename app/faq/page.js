import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
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
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle4="Frequently Asked Questions">
                <section className="faq_section inner_page pt_120 pb_120" style={{ background: "#FAF8F2" }}>
                    <div className="container">
                        <div className="row">
                            
                            {/* Left Column: Editorial Advisory Rail (Sticky on Desktop) */}
                            <div className="col-lg-5 pe-lg-5 mb-5 mb-lg-0" data-aos="fade-right" data-aos-duration="500">
                                <div style={{ position: "sticky", top: "120px" }}>
                                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                                        <span className="prominence_pulse_dot"></span>
                                        <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.2px", color: "#b89058", fontFamily: "var(--primary-font)" }}>
                                            Executive Due Diligence
                                        </span>
                                    </div>

                                    <h1 style={{
                                        fontSize: "clamp(30px, 3.8vw, 42px)",
                                        fontWeight: "700",
                                        color: "#0f1013",
                                        fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                                        lineHeight: "1.25",
                                        letterSpacing: "-0.5px",
                                        marginBottom: "18px"
                                    }}>
                                        Boardroom Transparency &amp; Discretion Protocols
                                    </h1>

                                    <p style={{ fontSize: "16px", color: "#59606a", lineHeight: "28px", marginBottom: "30px" }}>
                                        Retaining an executive reputation advisory is a high-stakes institutional decision. We provide uncompromising clarity regarding non-disclosure protocols, client time investment, proprietary asset ownership, and measurable governance outcomes.
                                    </p>

                                    {/* Strict NDA Assurance Box */}
                                    <div className="prominence_depth_card" style={{ padding: "24px 22px", marginBottom: "24px", backgroundColor: "#ffffff" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                                            <i className="fa-solid fa-shield-halved" style={{ color: "#b89058", fontSize: "16px" }}></i>
                                            <span style={{ fontSize: "13px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--primary-font)" }}>
                                                100% Strict NDA Protection
                                            </span>
                                        </div>
                                        <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "22px", margin: 0 }}>
                                            We operate under bilateral confidentiality agreements. Zero internal corporate data, non-public operational metrics, or confidential board dialogue are ever shared or published.
                                        </p>
                                    </div>

                                    {/* Direct Advisory Action Card */}
                                    <div style={{
                                        padding: "26px 22px",
                                        backgroundColor: "#0f1013",
                                        borderRadius: "14px",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        color: "#ffffff"
                                    }}>
                                        <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#b89058", marginBottom: "6px" }}>
                                            Direct Confidential Access
                                        </div>
                                        <div style={{ fontSize: "17px", fontWeight: "700", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", marginBottom: "8px" }}>
                                            Have an Unlisted Governance Inquiry?
                                        </div>
                                        <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: "22px", marginBottom: "18px" }}>
                                            Speak directly with a Prominence Managing Partner to evaluate your specific positioning or transition horizon.
                                        </p>
                                        <Link href="/contact" className="btn_style_gold btn_block btn_md">
                                            Book Confidential Briefing <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Structured Executive FAQ Accordion */}
                            <div className="col-lg-7" data-aos="fade-left" data-aos-duration="550">
                                <div style={{ marginBottom: "24px" }}>
                                    <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#94a3b8", fontFamily: "var(--primary-font)" }}>
                                        Key Operational Inquiries
                                    </div>
                                    <div style={{ fontSize: "20px", fontWeight: "700", color: "#0f1013", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", marginTop: "2px" }}>
                                        Frequently Addressed Matters
                                    </div>
                                </div>

                                <FaqAccordion />
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}