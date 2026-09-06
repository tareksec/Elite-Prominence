import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import FaqAccordion from "@/components/elements/FaqAccordion"

export const metadata = {
    title: 'Frequently Asked Questions | Elite Prominence',
    description: 'Answers to common questions about our done-for-you personal branding service for senior HR leaders, including time commitment, deliverables, and ROI.',
    alternates: {
        canonical: '/faq',
    },
    openGraph: {
        title: 'Frequently Asked Questions | Elite Prominence',
        description: 'Answers to common questions about our done-for-you personal branding service for senior HR leaders, including time commitment, deliverables, and ROI.',
        url: 'https://prominence.agency/faq',
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
                    item: 'https://prominence.agency',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'FAQ',
                    item: 'https://prominence.agency/faq',
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
                        text: 'Very little. This is a done-for-you model — most clients spend under 30 minutes a month once onboarding is complete.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Is this just LinkedIn content, or more than that?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: "It's more. We combine a personal website, Google reputation work, and LinkedIn strategy — most agencies only do one of these.",
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
                    name: 'Who is this NOT a good fit for?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Early-career professionals without an established track record yet — this is built specifically for leaders who already have results to showcase.',
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
                            <p style={{ maxWidth: "700px", margin: "15px auto 0", fontSize: "18px", color: "#59606a" }}>
                                Everything you need to know about our personal branding model, time investment, and outcomes.
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