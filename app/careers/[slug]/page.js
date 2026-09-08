import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getMandateBySlug, getAllMandateSlugs, MANDATES_DATA, FIRM_VALUES, PARTNER_BENEFITS } from '@/lib/careersData'
import MandateApplicationForm from './MandateApplicationForm'

export async function generateStaticParams() {
    return getAllMandateSlugs()
}

export async function generateMetadata({ params }) {
    const mandate = getMandateBySlug(params.slug)
    if (!mandate) {
        return {
            title: 'Mandate Not Found | Prominence Practice Appointments',
            description: 'The requested practice appointment mandate does not exist.',
        }
    }

    return {
        title: `${mandate.title} | Prominence Practice Appointments`,
        description: mandate.mission,
        alternates: {
            canonical: `/careers/${mandate.slug}`,
        },
        openGraph: {
            title: `${mandate.title} — Prominence Executive Advisory`,
            description: mandate.mission,
            url: `https://www.prominence.agency/careers/${mandate.slug}`,
            siteName: 'Prominence.agency',
            type: 'article',
        },
    }
}

export default function MandateDetailPage({ params }) {
    const mandate = getMandateBySlug(params.slug)

    if (!mandate) {
        notFound()
    }

    const jobPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: mandate.title,
        description: mandate.mission,
        identifier: {
            '@type': 'PropertyValue',
            name: 'Prominence',
            value: mandate.mandate,
        },
        datePosted: '2026-08-01',
        validThrough: '2026-12-31',
        employmentType: 'FULL_TIME',
        hiringOrganization: {
            '@type': 'Organization',
            name: 'Prominence',
            sameAs: 'https://www.prominence.agency',
            logo: 'https://www.prominence.agency/assets/images/Elite%20Prominence/EliteProminence-iocn.png',
        },
        jobLocationType: 'TELECOMMUTE',
        applicantLocationRequirements: {
            '@type': 'Country',
            name: 'Worldwide',
        },
        baseSalary: {
            '@type': 'MonetaryAmount',
            currency: 'USD',
            value: {
                '@type': 'QuantitativeValue',
                unitText: 'YEAR',
                value: 'Top 1% Global Retainer',
            },
        },
    }

    const otherMandates = MANDATES_DATA.filter((m) => m.slug !== mandate.slug).slice(0, 3)

    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle={mandate.shortTitle}>

                {/* Mandate Hero Header */}
                <section className="prominence_page_intro" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #eaedf0" }}>
                    <div className="container">
                        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
                                <span className="prominence_badge">
                                    {mandate.mandate}
                                </span>
                                <span style={{ fontSize: "12px", color: "#6B7280", fontWeight: "600" }}>
                                    {mandate.practice}
                                </span>
                            </div>

                            <h1 style={{
                                fontSize: "clamp(28px, 4.5vw, 42px)",
                                fontWeight: "700",
                                color: "#0D0D14",
                                lineHeight: "1.2",
                                letterSpacing: "-0.5px",
                                marginBottom: "18px",
                                fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)"
                            }}>
                                {mandate.title}
                            </h1>

                            <p className="prominence_lead_text" style={{ fontSize: "17.5px", marginBottom: "32px", maxWidth: "780px", color: "#6B7280" }}>
                                {mandate.mission}
                            </p>

                            {/* Mandate Meta Grid */}
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                                gap: "16px",
                                background: "#F7F5FC",
                                border: "1px solid #e2e8f0",
                                borderRadius: "12px",
                                padding: "20px 24px",
                                marginBottom: "32px"
                            }}>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#6B7280", display: "block" }}>
                                        Engagement Model
                                    </span>
                                    <strong style={{ fontSize: "14.5px", color: "#0D0D14", marginTop: "2px", display: "block" }}>
                                        {mandate.arrangement}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#6B7280", display: "block" }}>
                                        Compensation
                                    </span>
                                    <strong style={{ fontSize: "14.5px", color: "#8B5CF6", marginTop: "2px", display: "block" }}>
                                        {mandate.compensation}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#6B7280", display: "block" }}>
                                        Workplace Structure
                                    </span>
                                    <strong style={{ fontSize: "14.5px", color: "#0D0D14", marginTop: "2px", display: "block" }}>
                                        {mandate.location}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#6B7280", display: "block" }}>
                                        Discretion Protocol
                                    </span>
                                    <strong style={{ fontSize: "14.5px", color: "#0D0D14", marginTop: "2px", display: "block" }}>
                                        Strict NDA Adherence
                                    </strong>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                                <a href="#apply-dossier" className="btn_style_one btn_md">
                                    Transmit Direct Credentials <i className="fa-solid fa-arrow-down"></i>
                                </a>
                                <Link href="/careers" className="btn_style_two btn_md">
                                    <i className="fa-solid fa-arrow-left"></i> All Open Mandates
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mandate Strategic Blueprint */}
                <section className="prominence_section" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                            
                            {/* 1. Context & Overview */}
                            <div style={{ marginBottom: "52px" }}>
                                <span className="prominence_tracker">01 · Practice Overview</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", marginBottom: "18px", color: "#0D0D14" }}>
                                    The Mandate In Focus
                                </h2>
                                <p style={{ fontSize: "16.5px", lineHeight: "28px", color: "#0D0D14" }}>
                                    {mandate.overview}
                                </p>
                            </div>

                            {/* 2. Key Imperatives */}
                            <div style={{ marginBottom: "52px" }}>
                                <span className="prominence_tracker">02 · Core Responsibilities</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", marginBottom: "22px", color: "#0D0D14" }}>
                                    Essential Imperatives
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                    {mandate.imperatives.map((item, idx) => (
                                        <div key={idx} style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "16px",
                                            padding: "18px 20px",
                                            background: "#F7F5FC",
                                            border: "1px solid #eaedf0",
                                            borderRadius: "10px"
                                        }}>
                                            <span style={{ fontSize: "12px", fontWeight: "700", color: "#8B5CF6", minWidth: "24px", paddingTop: "2px" }}>
                                                0{idx + 1}
                                            </span>
                                            <p style={{ margin: 0, fontSize: "15px", color: "#0D0D14", lineHeight: "24px", fontWeight: "500" }}>
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 3. The Ideal Profile & Qualifications */}
                            <div style={{ marginBottom: "52px" }}>
                                <span className="prominence_tracker">03 · Candidate Caliber</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", marginBottom: "16px", color: "#0D0D14" }}>
                                    The Ideal Profile
                                </h2>
                                <blockquote style={{
                                    fontSize: "16.5px",
                                    fontWeight: "600",
                                    color: "#0D0D14",
                                    borderLeft: "3px solid #8B5CF6",
                                    paddingLeft: "20px",
                                    margin: "0 0 24px 0",
                                    lineHeight: "1.6"
                                }}>
                                    {mandate.idealProfile}
                                </blockquote>

                                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0D0D14", marginBottom: "14px", marginTop: "24px" }}>
                                    Verified Requisites
                                </h3>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {mandate.qualifications.map((q, i) => (
                                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14.5px", color: "#6B7280", marginBottom: "12px", lineHeight: "24px" }}>
                                            <i className="fa-solid fa-check" style={{ color: "#8B5CF6", marginTop: "5px", fontSize: "12px" }}></i>
                                            <span>{q}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Deliverables in Role */}
                            <div style={{ marginBottom: "52px", background: "#F7F5FC", border: "1px solid #eaedf0", borderRadius: "14px", padding: "32px 30px" }}>
                                <span className="prominence_tracker">04 · Governance Impact</span>
                                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0D0D14", marginBottom: "16px" }}>
                                    Key Deliverables &amp; Output Expectations
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    {mandate.deliverablesInRole.map((deliv, i) => (
                                        <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                            <i className="fa-solid fa-arrow-right" style={{ color: "#8B5CF6", marginTop: "4px", fontSize: "12px" }}></i>
                                            <span style={{ fontSize: "14.5px", color: "#0D0D14", fontWeight: "500" }}>{deliv}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Confidential Dossier Submission Form */}
                <section id="apply-dossier" className="prominence_section" style={{ background: "#F7F5FC", borderTop: "1px solid #eaedf0" }}>
                    <div className="container">
                        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
                            <div className="prominence_header_centered" style={{ maxWidth: "680px", margin: "0 auto 36px" }}>
                                <span className="prominence_tracker">Confidential Submission</span>
                                <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", color: "#0D0D14" }}>
                                    Apply For {mandate.shortTitle}
                                </h2>
                                <p className="prominence_lead_text" style={{ color: "#6B7280" }}>
                                    Transmissions are delivered directly to the managing partners under strict non-disclosure guardrails.
                                </p>
                            </div>

                            <MandateApplicationForm mandateTitle={mandate.title} />
                        </div>
                    </div>
                </section>

                {/* Other Practice Mandates */}
                <section className="prominence_section_compact" style={{ background: "#ffffff", borderTop: "1px solid #eaedf0" }}>
                    <div className="container">
                        <div className="prominence_header_split" style={{ marginBottom: "36px" }}>
                            <div>
                                <span className="prominence_tracker">Active Searches</span>
                                <h3 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", color: "#0D0D14" }}>
                                    Other Practice Mandates
                                </h3>
                            </div>
                            <div>
                                <Link href="/careers" className="btn_style_ghost">
                                    View All Mandates <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="row g-4">
                            {otherMandates.map((other) => (
                                <div key={other.slug} className="col-lg-4 col-md-6">
                                    <div className="prominence_card_equal_height" style={{ background: "#ffffff", border: "1px solid #eaedf0", borderRadius: "12px", padding: "28px" }}>
                                        <div className="prominence_card_body">
                                            <span style={{ fontSize: "11px", fontWeight: "700", color: "#8B5CF6", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                                                {other.practice}
                                            </span>
                                            <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#0D0D14", marginBottom: "8px" }}>
                                                <Link href={`/careers/${other.slug}`} style={{ color: "#0D0D14", textDecoration: "none" }}>
                                                    {other.title}
                                                </Link>
                                            </h4>
                                            <p style={{ fontSize: "13.5px", color: "#6B7280", lineHeight: "22px", margin: 0 }}>
                                                {other.arrangement} &bull; {other.location}
                                            </p>
                                        </div>
                                        <div className="prominence_card_footer" style={{ marginTop: "18px" }}>
                                            <Link href={`/careers/${other.slug}`} className="btn_style_ghost" style={{ fontSize: "13px" }}>
                                                Review Mandate <i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    )
}
