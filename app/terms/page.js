import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import BreadcrumbJsonLd from '@/components/elements/BreadcrumbJsonLd'

export const metadata = {
    title: 'Terms of Service | Elite Prominence',
    description: 'Terms of Service governing advisory, executive ghostwriting, and personal branding representations with Elite Prominence.',
    alternates: {
        canonical: '/terms',
    },
    openGraph: {
        title: 'Terms of Service | Elite Prominence',
        description: 'Terms of Service governing advisory, executive ghostwriting, and personal branding representations with Elite Prominence.',
        url: 'https://prominence.agency/terms',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

export default function TermsPage() {
    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Terms of Service", url: "/terms" }
    ]

    return (
        <div className="boxed_wrapper">
            <BreadcrumbJsonLd items={breadcrumbItems} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Terms of Service">
                <section className="pt_120 pb_120">
                    <div className="container" style={{ maxWidth: "860px" }}>
                        <div className="section_title mb_40">
                            <div className="tag_text"><h6>Agreement</h6></div>
                            <h2>Terms of Service</h2>
                            <p style={{ color: "#8b94a0", fontSize: "14px", marginTop: "10px" }}>Effective Date: January 1, 2025</p>
                        </div>
                        <div style={{ color: "#59606a", lineHeight: "1.8", fontSize: "16px" }}>
                            <h3 style={{ fontSize: "22px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "15px" }}>1. Nature of Advisory</h3>
                            <p>
                                Elite Prominence provides strategic personal branding advisory, digital presence development, and executive ghostwriting for senior leaders. By engaging our advisory or browsing our website, you agree to comply with these terms.
                            </p>

                            <h3 style={{ fontSize: "22px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "15px" }}>2. Client Intellectual Property</h3>
                            <p>
                                All thought leadership articles, keynote frameworks, and website copy authored on behalf of contracted clients remain the exclusive intellectual property of the respective client upon full invoice settlement.
                            </p>

                            <h3 style={{ fontSize: "22px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "15px" }}>3. Discretion & Representation</h3>
                            <p>
                                Elite Prominence operates under strict non-disclosure parameters. We do not publish client engagement records or case studies without explicit, written prior authorization.
                            </p>

                            <h3 style={{ fontSize: "22px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "15px" }}>4. Inquiries & Legal Notice</h3>
                            <p>
                                For legal notifications or engagement clarifications, please contact our administrative desk at <Link href="mailto:hello@prominence.agency" style={{ color: "#2460e2", fontWeight: "600" }}>hello@prominence.agency</Link>.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
