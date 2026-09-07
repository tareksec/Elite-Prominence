import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import PricingTabs from "@/components/elements/PricingTabs"

export const metadata = {
    title: 'Pricing & Packages | Personal Branding Agency — Elite Prominence',
    description: 'Transparent monthly retainer packages for senior HR leaders and executive consultants. Starter, Growth, and Premium tiers with full done-for-you support.',
    alternates: {
        canonical: '/pricing',
    },
    openGraph: {
        title: 'Pricing & Packages | Personal Branding Agency — Elite Prominence',
        description: 'Transparent monthly retainer packages for senior HR leaders and executive consultants. Starter, Growth, and Premium tiers with full done-for-you support.',
        url: 'https://www.prominence.agency/pricing',
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
            item: 'https://www.prominence.agency',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Pricing & Packages',
            item: 'https://www.prominence.agency/pricing',
        },
    ],
}

export default function Pricing_Page() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={1}>
                {/* Clean Executive Hero Header */}
                <section className="pricing_page_hero" style={{
                    padding: "130px 0 50px",
                    background: "linear-gradient(180deg, #F8F7FF 0%, #FFFFFF 100%)",
                    textAlign: "center"
                }}>
                    <div className="container">
                        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                            <span style={{
                                display: "inline-block",
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "1.2px",
                                textTransform: "uppercase",
                                color: "#7c3aed",
                                background: "#f3e8ff",
                                padding: "6px 18px",
                                borderRadius: "9999px",
                                marginBottom: "18px"
                            }}>
                                Investment &amp; Packages
                            </span>
                            <h1 style={{
                                fontFamily: "'DM Serif Display', Georgia, serif",
                                fontSize: "clamp(32px, 5vw, 48px)",
                                color: "#0F1235",
                                marginBottom: "18px",
                                lineHeight: "1.2"
                            }}>
                                Executive Personal Branding Models
                            </h1>
                            <p style={{
                                fontSize: "18px",
                                color: "#59606a",
                                lineHeight: "1.7",
                                margin: "0 auto",
                                maxWidth: "720px"
                            }}>
                                Two flexible engagement structures designed for senior leaders: a focused 3-month digital infrastructure sprint, or comprehensive ongoing monthly authority management.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="pricing_section pb_120" style={{ background: "#FFFFFF" }}>
                    <div className="container">
                        <PricingTabs />
                    </div>
                </section>
            </Layout>
        </div>
    )
}