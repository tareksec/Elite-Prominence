import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import BreadcrumbJsonLd from '@/components/elements/BreadcrumbJsonLd'

export const metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Elite Prominence executive personal branding advisory and representation services.',
    alternates: {
        canonical: '/privacy-policy',
    },
    openGraph: {
        title: 'Privacy Policy',
        description: 'Privacy Policy for Elite Prominence executive personal branding advisory and representation services.',
        url: 'https://www.prominence.agency/privacy-policy',
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
                <section className="pt_120 pb_120" style={{ backgroundColor: "#f8fafc", minHeight: "80vh" }}>
                    <div className="container" style={{ maxWidth: "860px" }}>
                        {/* Legal Notice Banner */}
                        <div style={{
                            backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderLeft: "4px solid #0D1322", borderRadius: "10px", padding: "16px 22px", marginBottom: "35px", fontSize: "14px", lineHeight: "1.6", color: "#475569", boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
                        }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                <i className="fal fa-info-circle" style={{ fontSize: "16px", color: "#0D1322", marginTop: "3px", flexShrink: 0 }}></i>
                                <div>
                                    <strong style={{ fontWeight: "700", color: "#0f172a" }}>Advisory Notice:</strong> This is a structural starting draft, not a lawyer-reviewed document. Before accepting real payments or scaling user signups, have this reviewed by a qualified lawyer &mdash; especially the GDPR / CCPA sections, which are intentionally left as placeholders below.
                                </div>
                            </div>
                        </div>

                        {/* Title & Metadata Card */}
                        <div style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            padding: "40px 36px",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                            border: "1px solid #e2e8f0"
                        }}>
                            <div className="section_title mb_30">
                                <div className="tag_text"><h6>Legal & Governance</h6></div>
                                <h1 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "800", color: "#1b2534", margin: "10px 0" }}>
                                    Privacy Policy
                                </h1>
                                <p style={{ color: "#64748b", fontSize: "14px", marginTop: "8px", fontStyle: "italic" }}>
                                    Last updated: September 7, 2026
                                </p>
                            </div>

                            <div style={{ color: "#475569", lineHeight: "1.8", fontSize: "16px" }}>
                                {/* Section 1 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "12px" }}>
                                    1. Who We Are
                                </h2>
                                <p>
                                    Elite Prominence (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates{' '}
                                    <Link href="/" style={{ color: "#2460e2", fontWeight: "600", textDecoration: "underline" }}>
                                        prominence.agency
                                    </Link>. For any privacy questions, contact us at{' '}
                                    <Link href="mailto:hello@prominence.agency" style={{ color: "#2460e2", fontWeight: "600", textDecoration: "underline" }}>
                                        hello@prominence.agency
                                    </Link>.
                                </p>

                                {/* Section 2 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    2. Information We Collect
                                </h2>
                                <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
                                    <li style={{ marginBottom: "8px" }}>
                                        <strong style={{ color: "#1b2534" }}>Account information:</strong> name, email address, role/title, and (if provided) a profile photo, when you sign up for a dashboard account.
                                    </li>
                                    <li style={{ marginBottom: "8px" }}>
                                        <strong style={{ color: "#1b2534" }}>Content you submit:</strong> reviews, ratings, and articles you write through your dashboard.
                                    </li>
                                    <li style={{ marginBottom: "8px" }}>
                                        <strong style={{ color: "#1b2534" }}>Contact form submissions:</strong> name, email, company, LinkedIn URL, and message, when you book a strategy call or contact us.
                                    </li>
                                    <li style={{ marginBottom: "8px" }}>
                                        <strong style={{ color: "#1b2534" }}>Automatically collected data:</strong> basic analytics (pages visited, general location/device type) via our analytics tool, and session cookies required for login to work.
                                    </li>
                                </ul>

                                {/* Section 3 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    3. How We Use Your Information
                                </h2>
                                <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
                                    <li style={{ marginBottom: "8px" }}>To provide and manage your dashboard account and process your submissions</li>
                                    <li style={{ marginBottom: "8px" }}>To review and moderate submitted reviews/articles before anything is published</li>
                                    <li style={{ marginBottom: "8px" }}>To respond to contact form inquiries and deliver our services</li>
                                    <li style={{ marginBottom: "8px" }}>To improve the website based on aggregate analytics</li>
                                    <li style={{ marginBottom: "8px" }}>To send service-related communications (not marketing, unless you separately opt in)</li>
                                </ul>

                                {/* Section 4 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    4. Third-Party Services We Use
                                </h2>
                                <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
                                    <li style={{ marginBottom: "8px" }}>
                                        <strong style={{ color: "#1b2534" }}>Supabase</strong> &mdash; authentication and database hosting for account/dashboard data
                                    </li>
                                    <li style={{ marginBottom: "8px" }}>
                                        <strong style={{ color: "#1b2534" }}>Vercel</strong> &mdash; website hosting and deployment infrastructure
                                    </li>
                                    <li style={{ marginBottom: "8px" }}>
                                        <strong style={{ color: "#1b2534" }}>Google Analytics (or equivalent)</strong> &mdash; site analytics and visitor usage metrics
                                    </li>
                                </ul>
                                <p style={{ fontWeight: "600", color: "#0f172a", marginTop: "12px" }}>
                                    <i className="fal fa-check-circle" style={{ marginRight: "6px" }}></i> We do not sell your personal information to third parties.
                                </p>

                                {/* Section 5 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    5. Cookies
                                </h2>
                                <p>
                                    We use essential cookies (to keep you logged in) and analytics cookies (to understand site usage).
                                </p>
                                <div style={{
                                    backgroundColor: "#f8fafc",
                                    border: "1px dashed #cbd5e1",
                                    borderRadius: "8px",
                                    padding: "12px 16px",
                                    marginTop: "12px",
                                    fontSize: "14px",
                                    color: "#64748b"
                                }}>
                                    <i className="fal fa-info-circle" style={{ marginRight: "6px" }}></i><em>Note for European / UK compliance: Add a cookie-consent banner if serving EU/UK visitors, since that is a legal requirement there — flagged for lawyer review.</em>
                                </div>

                                {/* Section 6 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    6. Data Retention
                                </h2>
                                <p>
                                    We retain account and submission data for as long as your account is active, or as needed to provide the service. You can request deletion at any time (see Section 7).
                                </p>

                                {/* Section 7 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    7. Your Rights
                                </h2>
                                <p>
                                    You can request to access, correct, or delete your personal data by emailing{' '}
                                    <Link href="mailto:hello@prominence.agency" style={{ color: "#2460e2", fontWeight: "600", textDecoration: "underline" }}>
                                        hello@prominence.agency
                                    </Link>. We will respond within a reasonable timeframe.
                                </p>

                                {/* Section 8 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    8. Data Security
                                </h2>
                                <p>
                                    We take reasonable measures to protect your data, but no online service can guarantee absolute security.
                                </p>

                                {/* Section 9 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    9. Children&apos;s Privacy
                                </h2>
                                <p>
                                    This service is intended for working professionals and is not directed at anyone under 18.
                                </p>

                                {/* Section 10 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    10. Changes to This Policy
                                </h2>
                                <p>
                                    We may update this policy from time to time; the &ldquo;last updated&rdquo; date above will reflect the most recent revision.
                                </p>

                                {/* Footer Contact CTA */}
                                <div style={{
                                    marginTop: "45px",
                                    paddingTop: "25px",
                                    borderTop: "1px solid #e2e8f0",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                    gap: "15px"
                                }}>
                                    <div>
                                        <div style={{ fontWeight: "700", color: "#1b2534" }}>Have questions about our privacy practices?</div>
                                        <div style={{ fontSize: "14px", color: "#64748b" }}>Reach out directly to our privacy desk.</div>
                                    </div>
                                    <Link
                                        href="mailto:hello@prominence.agency"
                                        style={{
                                            display: "inline-block",
                                            backgroundColor: "#1e3b2b",
                                            color: "#ffffff",
                                            padding: "10px 22px",
                                            borderRadius: "30px",
                                            fontWeight: "700",
                                            fontSize: "14px",
                                            textDecoration: "none",
                                            transition: "background-color 0.2s ease"
                                        }}
                                    >
                                        Contact Privacy Desk &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
