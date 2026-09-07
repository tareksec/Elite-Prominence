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
                <section className="faq_section inner_page pt_150 pb_120">
                    <div className="container">
                        <div className="section_title centred aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_text"><h6>Common Inquiries</h6></div>
                            <h2>Common Questions About Our Executive Model</h2>
                            <p style={{ maxWidth: "780px", margin: "15px auto 0", fontSize: "18px", color: "#59606a", lineHeight: "1.7" }}>
                                Everything HR leaders and senior leaders need to know about building a personal brand with our done-for-you model, time investment, and outcomes.
                            </p>
                        </div>
                        <div className="inner_box" style={{ maxWidth: "850px", margin: "0 auto" }}>
                            <FaqAccordion />

                            <div className="centred" style={{ marginTop: "50px" }}>
                                <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "15px" }}>Have another question?</h3>
                                <Link href="/contact" className="btn_style_one">Book a Strategy Call</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}