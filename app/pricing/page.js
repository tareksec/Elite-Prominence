import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'Pricing & Packages | Personal Branding Agency — Elite Prominence',
    description: 'Transparent monthly retainer packages for senior HR leaders and executive consultants. Starter, Growth, and Premium tiers with full done-for-you support.',
    alternates: {
        canonical: '/pricing',
    },
    openGraph: {
        title: 'Pricing & Packages | Personal Branding Agency — Elite Prominence',
        description: 'Transparent monthly retainer packages for senior HR leaders and executive consultants. Starter, Growth, and Premium tiers with full done-for-you support.',
        url: 'https://prominence.agency/pricing',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
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
            name: 'Pricing & Packages',
            item: 'https://prominence.agency/pricing',
        },
    ],
}

import PricingTabs from "@/components/elements/PricingTabs"

export default function Pricing_Page() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle6="Pricing & Packages">
                <section className="pricing_section pt_150 pb_120">
                    <div className="shape_bg"></div>
                    <div className="shape_six float-bob-y"><img src="/assets/images/icons/shape_icon_6.png" alt=""/></div>
                    <div className="container">
                        <div className="section_title centred mb_50">
                            <div className="tag_text"><h6>Packages & Investment</h6></div>
                            <h2>Personal Branding Investment Models</h2>
                            <p style={{ maxWidth: "760px", margin: "15px auto 0", fontSize: "18px", color: "#59606a", lineHeight: "1.7" }}>
                                Two ways to work with us — a fixed-scope project, or ongoing monthly management. Choose whichever fits how you like to plan.
                            </p>
                        </div>
                        
                        <PricingTabs />
                    </div>
                </section>
            </Layout>
        </div>
    )
}