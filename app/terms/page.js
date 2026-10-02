import React from 'react'
import Link from 'next/link'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
import BreadcrumbJsonLd from '@/components/elements/BreadcrumbJsonLd'

export const metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service governing advisory, executive ghostwriting, and personal branding representations with Elite Prominence.',
    alternates: {
        canonical: '/terms',
    },
    openGraph: {
        title: 'Terms of Service',
        description: 'Terms of Service governing advisory, executive ghostwriting, and personal branding representations with Elite Prominence.',
        url: 'https://www.prominence.agency/terms',
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
        <div className="mlab-page">
            <BreadcrumbJsonLd items={breadcrumbItems} />
            <ModernHeader />

            {/* Breadcrumb Navigation */}
            <div style={{ padding: "14px 0", borderBottom: "1px solid #eaedf0", background: "#f8f9fa", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#6c757d" }}>
                        <Link href="/" style={{ color: "#6c757d", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <span style={{ color: "#0D0D14", fontWeight: 600 }}>Terms of Service</span>
                    </div>
                </div>
            </div>

            <main>
                <section className="pt_60 pb_120" style={{ backgroundColor: "#F7F5FC", minHeight: "80vh" }}>
                    <div className="container" style={{ maxWidth: "860px" }}>
                        {/* Title & Metadata Card */}
                        <div style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            padding: "40px 36px",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                            border: "1px solid #eaedf0"
                        }}>
                            <div className="section_title mb_30">
                                <div className="tag_text"><h6 style={{ color: "#8B5CF6" }}>Agreement & Terms</h6></div>
                                <h1 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "700", color: "#0D0D14", fontFamily: "var(--primary-font)", margin: "10px 0" }}>
                                    Terms of Service
                                </h1>
                                <p style={{ color: "#6B7280", fontSize: "14px", marginTop: "8px", fontStyle: "italic" }}>
                                    Last updated: September 7, 2026
                                </p>
                            </div>

                            <div style={{ color: "#0D0D14", lineHeight: "1.8", fontSize: "16px" }}>
                                {/* Section 1 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "30px", marginBottom: "12px" }}>
                                    1. Acceptance of Terms
                                </h2>
                                <p>
                                    By using{' '}
                                    <Link href="/" style={{ color: "#8B5CF6", fontWeight: "600", textDecoration: "underline" }}>
                                        prominence.agency
                                    </Link>{' '}
                                    or signing up for an account, you agree to these Terms.
                                </p>

                                {/* Section 2 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    2. Our Services
                                </h2>
                                <p>
                                    Elite Prominence provides personal branding services for HR leaders and executives, delivered as One-Time Packages or Monthly Retainers, as described on our{' '}
                                    <Link href="/pricing" style={{ color: "#8B5CF6", fontWeight: "600", textDecoration: "underline" }}>
                                        Pricing page
                                    </Link>. Specific deliverables per tier are outlined there and may be updated over time.
                                </p>

                                {/* Section 3 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    3. Account Registration
                                </h2>
                                <p>
                                    You must provide accurate information when creating an account and are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.
                                </p>

                                {/* Section 4 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    4. User-Submitted Content (Reviews &amp; Articles)
                                </h2>
                                <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
                                    <li style={{ marginBottom: "8px" }}>
                                        You retain ownership of any review or article you submit.
                                    </li>
                                    <li style={{ marginBottom: "8px" }}>
                                        By submitting content, you grant Elite Prominence a non-exclusive license to publish, display, and use approved content on our website and marketing materials.
                                    </li>
                                    <li style={{ marginBottom: "8px" }}>
                                        Submitted content must be truthful, must be your own work, and must not infringe on anyone else&apos;s rights.
                                    </li>
                                    <li style={{ marginBottom: "8px" }}>
                                        We reserve the right to reject, edit for clarity, or remove any submitted content at our discretion, including after publication.
                                    </li>
                                </ul>

                                {/* Section 5 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    5. Payment Terms
                                </h2>
                                <p>
                                    Fees for our executive advisory programs and retainers are billed in advance according to the selected tier and agreed statement of work. Payments must be remitted via authorized corporate invoice, wire transfer, or major credit facility. Monthly retainer agreements recur automatically every thirty (30) days unless written notice of cancellation is provided at least 14 days prior to the subsequent billing cycle. Due to the bespoke allocation of executive creative resources and strategic calendar reservations, fees paid for initiated phases or commenced monthly cycles are non-refundable.
                                </p>

                                {/* Section 6 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    6. No Guarantee of Specific Outcomes
                                </h2>
                                <p>
                                    While we work to build and improve your digital presence, we do not guarantee specific results (e.g., a specific number of followers, a board seat, a speaking invitation, or any particular search ranking). Outcomes depend on many factors outside our control.
                                </p>

                                {/* Section 7 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    7. Acceptable Use
                                </h2>
                                <p>
                                    You agree not to submit unlawful, defamatory, or infringing content, and not to misuse the platform (e.g., attempting to access other users&apos; accounts or data).
                                </p>

                                {/* Section 8 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    8. Termination
                                </h2>
                                <p>
                                    Either party may terminate the engagement per the terms of the applicable package/retainer. We reserve the right to suspend or terminate accounts that violate these Terms.
                                </p>

                                {/* Section 9 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    9. Disclaimer of Warranties
                                </h2>
                                <p>
                                    The service is provided &ldquo;as is&rdquo; without warranties of any kind, to the extent permitted by law.
                                </p>

                                {/* Section 10 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    10. Limitation of Liability
                                </h2>
                                <p>
                                    To the maximum extent permitted under applicable law, Elite Prominence, its principals, officers, and advisory directors shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of business profits, reputational harm, or commercial opportunities arising out of or in connection with our services. In no event shall our aggregate liability exceed the total amounts paid by the client under the specific engagement during the three (3) months preceding the claim.
                                </p>

                                {/* Section 11 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    11. Governing Law &amp; Dispute Resolution
                                </h2>
                                <p>
                                    These Terms and any dispute or controversy arising out of or relating to them shall be governed by and construed in accordance with the laws of Delaware, United States, without giving effect to any principles of conflicts of law. The parties submit to the exclusive jurisdiction and venue of the courts situated in Delaware for the adjudication of all disputes.
                                </p>

                                {/* Section 12 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    12. Changes to These Terms
                                </h2>
                                <p>
                                    We may update these Terms from time to time; continued use of the service after changes constitutes acceptance of the revised Terms.
                                </p>

                                {/* Section 13 */}
                                <h2 style={{ fontSize: "20px", color: "#0D0D14", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    13. Contact
                                </h2>
                                <p>
                                    Questions about these Terms:{' '}
                                    <Link href="mailto:hello@prominence.agency" style={{ color: "#8B5CF6", fontWeight: "600", textDecoration: "underline" }}>
                                        hello@prominence.agency
                                    </Link>
                                </p>

                                {/* Footer Contact CTA */}
                                <div style={{
                                    marginTop: "45px",
                                    paddingTop: "25px",
                                    borderTop: "1px solid #eaedf0",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                    gap: "15px"
                                }}>
                                    <div>
                                        <div style={{ fontWeight: "700", color: "#0D0D14" }}>Have questions about our service terms?</div>
                                        <div style={{ fontSize: "14px", color: "#6B7280" }}>Reach out directly to our executive counsel.</div>
                                    </div>
                                    <Link
                                        href="mailto:hello@prominence.agency"
                                        className="btn_style_one btn_sm"
                                    >
                                        Contact Legal Desk <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <ModernFooter />
        </div>
    )
}
