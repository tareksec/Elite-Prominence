import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
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
        <div className="mlab-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
            />
            <ModernHeader activeNav="about" />

            {/* Breadcrumb Navigation */}
            <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(18,19,22,0.08)", background: "#FAF9F5", fontSize: "13px" }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-2" style={{ color: "#8A8F9E" }}>
                        <Link href="/" style={{ color: "#8A8F9E", textDecoration: "none" }}>Home</Link>
                        <span>/</span>
                        <Link href="/careers" style={{ color: "#8A8F9E", textDecoration: "none" }}>Careers</Link>
                        <span>/</span>
                        <span style={{ color: "#121316", fontWeight: 600 }}>{mandate.shortTitle || mandate.title}</span>
                    </div>
                </div>
            </div>

            <main>
                {/* Mandate Hero Header */}
                <section style={{ backgroundColor: "#FFFFFF", padding: "72px 0 60px", borderBottom: "1px solid rgba(18,19,22,0.08)" }}>
                    <div className="container">
                        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
                                <span className="editorial-badge">
                                    <span className="editorial-badge-dot">✦</span> {mandate.mandate}
                                </span>
                                <span style={{ fontSize: "12px", color: "#555A68", fontWeight: "600", background: "rgba(18,19,22,0.04)", padding: "5px 12px", borderRadius: "100px", border: "1px solid rgba(18,19,22,0.08)" }}>
                                    {mandate.practice}
                                </span>
                            </div>

                            <h1 style={{
                                fontSize: "clamp(32px, 5vw, 48px)",
                                fontWeight: 850,
                                color: "#121316",
                                lineHeight: "1.15",
                                letterSpacing: "-0.03em",
                                marginBottom: "20px"
                            }}>
                                {mandate.title}
                            </h1>

                            <p style={{ fontSize: "18px", marginBottom: "32px", maxWidth: "780px", color: "#555A68", lineHeight: "1.65" }}>
                                {mandate.mission}
                            </p>

                            {/* Mandate Meta Grid */}
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                                gap: "16px",
                                background: "#FAF9F5",
                                border: "1.5px solid rgba(18,19,22,0.08)",
                                borderRadius: "20px",
                                padding: "24px 28px",
                                marginBottom: "36px"
                            }}>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#8A8F9E", display: "block" }}>
                                        Engagement Model
                                    </span>
                                    <strong style={{ fontSize: "15px", color: "#121316", marginTop: "4px", display: "block", fontWeight: 700 }}>
                                        {mandate.arrangement}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#8A8F9E", display: "block" }}>
                                        Compensation
                                    </span>
                                    <strong style={{ fontSize: "15px", color: "#FF3B81", marginTop: "4px", display: "block", fontWeight: 700 }}>
                                        {mandate.compensation}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#8A8F9E", display: "block" }}>
                                        Workplace Structure
                                    </span>
                                    <strong style={{ fontSize: "15px", color: "#121316", marginTop: "4px", display: "block", fontWeight: 700 }}>
                                        {mandate.location}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "#8A8F9E", display: "block" }}>
                                        Discretion Protocol
                                    </span>
                                    <strong style={{ fontSize: "15px", color: "#121316", marginTop: "4px", display: "block", fontWeight: 700 }}>
                                        Strict NDA Adherence
                                    </strong>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                                <a href="#apply-dossier" className="prominence-btn-primary">
                                    <span>Transmit Direct Credentials</span>
                                    <span>&darr;</span>
                                </a>
                                <Link href="/careers" className="prominence-btn-outline">
                                    <span>&larr; All Open Mandates</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mandate Strategic Blueprint */}
                <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
                    <div className="container">
                        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
                            
                            {/* 1. Context & Overview */}
                            <div style={{ marginBottom: "56px" }}>
                                <span className="editorial-badge" style={{ marginBottom: "14px" }}>
                                    <span className="editorial-badge-dot">✦</span> 01 · PRACTICE OVERVIEW
                                </span>
                                <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px", color: "#121316" }}>
                                    The Mandate In Focus
                                </h2>
                                <p style={{ fontSize: "16.5px", lineHeight: "1.75", color: "#555A68" }}>
                                    {mandate.overview}
                                </p>
                            </div>

                            {/* 2. Key Imperatives */}
                            <div style={{ marginBottom: "56px" }}>
                                <span className="editorial-badge" style={{ marginBottom: "14px" }}>
                                    <span className="editorial-badge-dot">✦</span> 02 · CORE RESPONSIBILITIES
                                </span>
                                <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "20px", color: "#121316" }}>
                                    Essential Imperatives
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                    {mandate.imperatives.map((item, idx) => (
                                        <div key={idx} style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "16px",
                                            padding: "20px 24px",
                                            background: "#FAF9F5",
                                            border: "1.5px solid rgba(18,19,22,0.08)",
                                            borderRadius: "16px"
                                        }}>
                                            <span style={{ fontSize: "12px", fontWeight: "800", color: "#FF3B81", minWidth: "24px", paddingTop: "2px" }}>
                                                0{idx + 1}
                                            </span>
                                            <p style={{ margin: 0, fontSize: "15px", color: "#121316", lineHeight: "1.6", fontWeight: "500" }}>
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 3. The Ideal Profile & Qualifications */}
                            <div style={{ marginBottom: "56px" }}>
                                <span className="editorial-badge" style={{ marginBottom: "14px" }}>
                                    <span className="editorial-badge-dot">✦</span> 03 · CANDIDATE CALIBER
                                </span>
                                <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px", color: "#121316" }}>
                                    The Ideal Profile
                                </h2>
                                <blockquote style={{
                                    fontSize: "17px",
                                    fontWeight: "600",
                                    color: "#121316",
                                    borderLeft: "3.5px solid #FF3B81",
                                    paddingLeft: "22px",
                                    margin: "0 0 28px 0",
                                    lineHeight: "1.65"
                                }}>
                                    {mandate.idealProfile}
                                </blockquote>

                                <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#121316", marginBottom: "16px", letterSpacing: "-0.01em" }}>
                                    Verified Requisites
                                </h3>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {mandate.qualifications.map((q, i) => (
                                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "#555A68", marginBottom: "12px", lineHeight: "1.6" }}>
                                            <span style={{ color: "#FF3B81", marginTop: "2px", fontSize: "14px", fontWeight: 800 }}>✦</span>
                                            <span>{q}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 4. Deliverables in Role */}
                            <div style={{ marginBottom: "56px", background: "#FAF9F5", border: "1.5px solid rgba(18,19,22,0.08)", borderRadius: "20px", padding: "32px 36px" }}>
                                <span className="editorial-badge" style={{ marginBottom: "14px" }}>
                                    <span className="editorial-badge-dot">✦</span> 04 · GOVERNANCE IMPACT
                                </span>
                                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#121316", marginBottom: "18px", letterSpacing: "-0.01em" }}>
                                    Key Deliverables &amp; Output Expectations
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                    {mandate.deliverablesInRole.map((deliv, i) => (
                                        <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                            <span style={{ color: "#FF3B81", marginTop: "2px", fontSize: "14px", fontWeight: 800 }}>&rarr;</span>
                                            <span style={{ fontSize: "15px", color: "#121316", fontWeight: "500", lineHeight: "1.5" }}>{deliv}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Confidential Dossier Submission Form */}
                <section id="apply-dossier" style={{ background: "#FAF9F5", padding: "80px 0", borderTop: "1px solid rgba(18,19,22,0.08)" }}>
                    <div className="container">
                        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
                            <div className="text-center" style={{ maxWidth: "680px", margin: "0 auto 40px" }}>
                                <span className="editorial-badge" style={{ marginBottom: "14px" }}>
                                    <span className="editorial-badge-dot">✦</span> CONFIDENTIAL SUBMISSION
                                </span>
                                <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 850, letterSpacing: "-0.02em", color: "#121316", marginBottom: "12px" }}>
                                    Apply For {mandate.shortTitle}
                                </h2>
                                <p style={{ color: "#555A68", fontSize: "16px", lineHeight: "1.6" }}>
                                    Transmissions are delivered directly to the managing partners under strict non-disclosure guardrails.
                                </p>
                            </div>

                            <MandateApplicationForm mandateTitle={mandate.title} />
                        </div>
                    </div>
                </section>

                {/* Other Practice Mandates */}
                <section style={{ background: "#FFFFFF", padding: "80px 0", borderTop: "1px solid rgba(18,19,22,0.08)" }}>
                    <div className="container">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                            <div>
                                <span className="editorial-badge" style={{ marginBottom: "10px" }}>
                                    <span className="editorial-badge-dot">✦</span> ACTIVE SEARCHES
                                </span>
                                <h3 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#121316", margin: 0 }}>
                                    Other Practice Mandates
                                </h3>
                            </div>
                            <div>
                                <Link href="/careers" className="prominence-btn-outline">
                                    <span>View All Mandates &rarr;</span>
                                </Link>
                            </div>
                        </div>

                        <div className="row g-4 mt-2">
                            {otherMandates.map((other) => (
                                <div key={other.slug} className="col-lg-4 col-md-6">
                                    <div style={{ background: "#FFFFFF", border: "1.5px solid rgba(18,19,22,0.08)", borderRadius: "20px", padding: "28px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                                        <div>
                                            <span style={{ fontSize: "11px", fontWeight: "800", color: "#FF3B81", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "10px" }}>
                                                {other.practice}
                                            </span>
                                            <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#121316", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                                                <Link href={`/careers/${other.slug}`} style={{ color: "#121316", textDecoration: "none" }}>
                                                    {other.title}
                                                </Link>
                                            </h4>
                                            <p style={{ fontSize: "14px", color: "#555A68", lineHeight: "1.6", margin: 0 }}>
                                                {other.arrangement} &bull; {other.location}
                                            </p>
                                        </div>
                                        <div style={{ marginTop: "24px" }}>
                                            <Link href={`/careers/${other.slug}`} className="prominence-btn-outline" style={{ fontSize: "13px", padding: "8px 16px" }}>
                                                <span>Review Mandate &rarr;</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <ModernFooter />
        </div>
    )
}
