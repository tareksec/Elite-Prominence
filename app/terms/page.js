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
                <section className="pt_120 pb_120" style={{ backgroundColor: "#FAF8F2", minHeight: "80vh" }}>
                    <div className="container" style={{ maxWidth: "860px" }}>
                        {/* Legal Notice Banner */}
                        <div style={{
                            backgroundColor: "#fffbeb",
                            border: "1px solid #fef3c7",
                            borderLeft: "4px solid #f59e0b",
                            borderRadius: "10px",
                            padding: "16px 20px",
                            marginBottom: "35px",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            color: "#92400e"
                        }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                <span style={{ fontSize: "18px", lineHeight: "1" }}>⚠️</span>
                                <div>
                                    <strong style={{ fontWeight: "700" }}>NOT LEGAL ADVICE.</strong> This is a structural starting draft, not a lawyer-reviewed document. Before accepting real payments or scaling user signups, have this reviewed by a qualified lawyer &mdash; especially the refund policy and governing-law sections, which are intentionally left as placeholders below.
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
                                <div className="tag_text"><h6>Agreement & Terms</h6></div>
                                <h1 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "800", color: "#1b2534", margin: "10px 0" }}>
                                    Terms of Service
                                </h1>
                                <p style={{ color: "#64748b", fontSize: "14px", marginTop: "8px", fontStyle: "italic" }}>
                                    Last updated: September 7, 2026
                                </p>
                            </div>

                            <div style={{ color: "#475569", lineHeight: "1.8", fontSize: "16px" }}>
                                {/* Section 1 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "30px", marginBottom: "12px" }}>
                                    1. Acceptance of Terms
                                </h2>
                                <p>
                                    By using{' '}
                                    <Link href="/" style={{ color: "#2460e2", fontWeight: "600", textDecoration: "underline" }}>
                                        prominence.agency
                                    </Link>{' '}
                                    or signing up for an account, you agree to these Terms.
                                </p>

                                {/* Section 2 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    2. Our Services
                                </h2>
                                <p>
                                    Elite Prominence provides personal branding services for HR leaders and executives, delivered as One-Time Packages or Monthly Retainers, as described on our{' '}
                                    <Link href="/pricing" style={{ color: "#2460e2", fontWeight: "600", textDecoration: "underline" }}>
                                        Pricing page
                                    </Link>. Specific deliverables per tier are outlined there and may be updated over time.
                                </p>

                                {/* Section 3 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    3. Account Registration
                                </h2>
                                <p>
                                    You must provide accurate information when creating an account and are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.
                                </p>

                                {/* Section 4 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
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
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    5. Payment Terms
                                </h2>
                                <div style={{
                                    backgroundColor: "#f8fafc",
                                    border: "1px dashed #cbd5e1",
                                    borderRadius: "8px",
                                    padding: "16px 20px",
                                    fontSize: "14px",
                                    lineHeight: "1.6",
                                    color: "#475569"
                                }}>
                                    <strong style={{ color: "#d97706" }}>[TODO &mdash; Business Decision Required Before Going Live]:</strong>
                                    <p style={{ margin: "8px 0 0" }}>
                                        Fill in payment schedule/timing, accepted payment methods, refund policy (e.g., no refunds after work begins, pro-rated refunds, etc.), and what happens if a monthly retainer is cancelled mid-cycle. This needs a clear, deliberate business decision &mdash; don&apos;t leave it undefined once real payments start.
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    6. No Guarantee of Specific Outcomes
                                </h2>
                                <p>
                                    While we work to build and improve your digital presence, we do not guarantee specific results (e.g., a specific number of followers, a board seat, a speaking invitation, or any particular search ranking). Outcomes depend on many factors outside our control.
                                </p>

                                {/* Section 7 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    7. Acceptable Use
                                </h2>
                                <p>
                                    You agree not to submit unlawful, defamatory, or infringing content, and not to misuse the platform (e.g., attempting to access other users&apos; accounts or data).
                                </p>

                                {/* Section 8 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    8. Termination
                                </h2>
                                <p>
                                    Either party may terminate the engagement per the terms of the applicable package/retainer. We reserve the right to suspend or terminate accounts that violate these Terms.
                                </p>

                                {/* Section 9 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    9. Disclaimer of Warranties
                                </h2>
                                <p>
                                    The service is provided &ldquo;as is&rdquo; without warranties of any kind, to the extent permitted by law.
                                </p>

                                {/* Section 10 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    10. Limitation of Liability
                                </h2>
                                <div style={{
                                    backgroundColor: "#f8fafc",
                                    border: "1px dashed #cbd5e1",
                                    borderRadius: "8px",
                                    padding: "16px 20px",
                                    fontSize: "14px",
                                    lineHeight: "1.6",
                                    color: "#475569"
                                }}>
                                    <strong style={{ color: "#d97706" }}>[TODO &mdash; Legal Counsel Review Required]:</strong>
                                    <p style={{ margin: "8px 0 0" }}>
                                        A lawyer should draft this section specifically for your jurisdiction; generic limitation-of-liability language varies significantly by country.
                                    </p>
                                </div>

                                {/* Section 11 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    11. Governing Law
                                </h2>
                                <div style={{
                                    backgroundColor: "#f8fafc",
                                    border: "1px dashed #cbd5e1",
                                    borderRadius: "8px",
                                    padding: "16px 20px",
                                    fontSize: "14px",
                                    lineHeight: "1.6",
                                    color: "#475569"
                                }}>
                                    <strong style={{ color: "#d97706" }}>[TODO &mdash; Jurisdiction Selection Required]:</strong>
                                    <p style={{ margin: "8px 0 0" }}>
                                        Decide and confirm with a lawyer: which country/state&apos;s law governs this agreement, and where disputes would be handled. This matters especially if clients are outside Bangladesh.
                                    </p>
                                </div>

                                {/* Section 12 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    12. Changes to These Terms
                                </h2>
                                <p>
                                    We may update these Terms from time to time; continued use of the service after changes constitutes acceptance of the revised Terms.
                                </p>

                                {/* Section 13 */}
                                <h2 style={{ fontSize: "20px", color: "#1b2534", fontWeight: "700", marginTop: "32px", marginBottom: "12px" }}>
                                    13. Contact
                                </h2>
                                <p>
                                    Questions about these Terms:{' '}
                                    <Link href="mailto:hello@prominence.agency" style={{ color: "#2460e2", fontWeight: "600", textDecoration: "underline" }}>
                                        hello@prominence.agency
                                    </Link>
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
                                        <div style={{ fontWeight: "700", color: "#1b2534" }}>Have questions about our service terms?</div>
                                        <div style={{ fontSize: "14px", color: "#64748b" }}>Reach out directly to our executive team.</div>
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
                                        Contact Legal Desk &rarr;
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
