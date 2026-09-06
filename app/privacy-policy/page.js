import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import BreadcrumbJsonLd from '@/components/elements/BreadcrumbJsonLd'

export const metadata = {
    title: 'Privacy Policy | Elite Prominence',
    description: 'Privacy Policy for Elite Prominence executive personal branding advisory and representation services.',
    alternates: {
        canonical: '/privacy-policy',
    },
    openGraph: {
        title: 'Privacy Policy | Elite Prominence',
        description: 'Privacy Policy for Elite Prominence executive personal branding advisory and representation services.',
        url: 'https://prominence.agency/privacy-policy',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

export default function PrivacyPolicyPage() {
    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: "/privacy-policy" }
    ]

    return (
        <div className="boxed_wrapper">
            <BreadcrumbJsonLd items={breadcrumbItems} />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Privacy Policy">
                <section className="pt_120 pb_120">
                    <div className="container" style={{ maxWidth: "860px" }}>
                        <div className="section_title mb_40">
                            <div className="tag_text"><h6>Legal & Governance</h6></div>
                            <h2>Privacy Policy</h2>
                            <p style={{ color: "#8b94a0", fontSize: "14px", marginTop: "10px" }}>Effective Date: January 1, 2025</p>
                        </div>
                        <div style={{ color: "#59606a", lineHeight: "1.8", fontSize: "16px" }}>
                            <h3 style={{ fontSize: "22px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "15px" }}>1. Executive Confidentiality</h3>
                            <p>
                                At Elite Prominence, we prioritize the confidentiality and discretion of the senior executives, CHROs, and independent consultants we partner with. This Privacy Policy details how we handle client data, personal information, and advisory communications.
                            </p>

                            <h3 style={{ fontSize: "22px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "15px" }}>2. Information We Collect</h3>
                            <p>
                                We collect information you provide directly during discovery consultations, onboarding questionnaires, and ongoing executive ghostwriting sessions. This may include your name, contact email, executive career milestones, biographical details, and thought leadership perspectives.
                            </p>

                            <h3 style={{ fontSize: "22px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "15px" }}>3. Use of Information</h3>
                            <p>
                                Your information is used exclusively to deliver contracted personal branding services, including personal website architecture, reputation management, and executive content creation. We do not sell, rent, or trade client information to any third parties.
                            </p>

                            <h3 style={{ fontSize: "22px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "15px" }}>4. Data Protection & Security</h3>
                            <p>
                                All strategic materials, draft publications, and client records are stored in secure, encrypted environments with strict role-based access control.
                            </p>

                            <h3 style={{ fontSize: "22px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "15px" }}>5. Contact Our Privacy Officer</h3>
                            <p>
                                If you have questions regarding data privacy or wish to request the deletion of your consultation data, contact us at <Link href="mailto:hello@prominence.agency" style={{ color: "#2460e2", fontWeight: "600" }}>hello@prominence.agency</Link>.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
