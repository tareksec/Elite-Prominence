import React from 'react'
import Link from "next/link"
import ModernHeader from "@/components/layout/ModernHeader"
import ModernFooter from "@/components/layout/ModernFooter"
import PricingTabs from "@/components/elements/PricingTabs"

export const metadata = {
    title: 'Pricing & Advisory Packages',
    description: 'Transparent monthly retainer packages for senior HR leaders and executive consultants. Starter, Growth, and Premium tiers with full done-for-you support.',
    alternates: {
        canonical: '/pricing',
    },
    openGraph: {
        title: 'Pricing & Packages | Personal Branding Agency',
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
        <div className="mlab-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ModernHeader />

            {/* Breadcrumb Navigation */}
            <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(18,19,22,0.08)", background: "#FAF9F5", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#8A8F9E" }}>
                        <Link href="/" style={{ color: "#8A8F9E", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <span style={{ color: "#121316", fontWeight: 600 }}>Pricing &amp; Packages</span>
                    </div>
                </div>
            </div>

            <main>
                {/* Clean Executive Hero Header */}
                <section style={{
                    padding: "72px 0 48px",
                    background: "#FAF9F5",
                    textAlign: "center",
                    borderBottom: "1px solid rgba(18,19,22,0.08)"
                }}>
                    <div className="container">
                        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
                            <span className="editorial-badge" style={{ marginBottom: "18px" }}>
                                <span className="editorial-badge-dot">✦</span> INVESTMENT &amp; PACKAGES
                            </span>
                            <h1 style={{
                                fontSize: "clamp(32px, 5vw, 52px)",
                                fontWeight: 850,
                                color: "#121316",
                                marginBottom: "20px",
                                lineHeight: "1.15",
                                letterSpacing: "-0.03em"
                            }}>
                                Executive Personal Branding Models
                            </h1>
                            <p style={{
                                fontSize: "18px",
                                color: "#555A68",
                                lineHeight: "1.65",
                                margin: "0 auto",
                                maxWidth: "720px"
                            }}>
                                Two flexible engagement structures designed for senior leaders: a focused 3-month digital infrastructure sprint, or comprehensive ongoing monthly authority management.
                            </p>
                        </div>
                    </div>
                </section>

                <section style={{ padding: "80px 0 120px", background: "#FFFFFF" }}>
                    <div className="container">
                        <PricingTabs />
                    </div>
                </section>
            </main>

            <ModernFooter />
        </div>
    )
}