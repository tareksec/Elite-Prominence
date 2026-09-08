import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import ContactForm from "@/components/elements/ContactForm"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export const metadata = {
    title: 'Confidential Executive Consultation & Stature Audit | Prominence',
    description: 'Schedule a confidential advisory briefing with Prominence Managing Partners to review your Google search footprint, executive digital assets, and board positioning.',
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Confidential Executive Consultation | Prominence Advisory',
        description: 'Schedule a 30-minute confidential consultation with Prominence. Bilateral NDA assurance, direct partner review, and turnkey reputation roadmap.',
        url: 'https://www.prominence.agency/contact',
        siteName: 'Prominence.agency',
        locale: 'en_US',
        type: 'website',
    },
}

const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
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
                    name: 'Contact',
                    item: 'https://www.prominence.agency/contact',
                },
            ],
        },
        {
            '@type': 'ContactPage',
            name: 'Contact Prominence Executive Advisory',
            description: 'Confidential executive advisory consultation intake for enterprise CEOs, CHROs, and board candidates.',
            url: 'https://www.prominence.agency/contact',
        },
    ],
}

export default function Contact_Page() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Confidential Consultation">
                
                {/* Executive Consultation & Direct Intake Section */}
                <section className="pt_120 pb_120" style={{ background: "#F7F5FC" }}>
                    <div className="container">
                        <div className="row align-items-start">
                            
                            {/* Left Column: Advisory Charter, Bilateral NDA & Strategic Channels */}
                            <div className="col-lg-5 pe-lg-5 mb-5 mb-lg-0" data-aos="fade-right" data-aos-duration="500">
                                <div style={{ position: "sticky", top: "120px" }}>
                                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                                        <span className="prominence_pulse_dot"></span>
                                        <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.2px", color: "#8B5CF6", fontFamily: "var(--primary-font)" }}>
                                            Confidential Advisory Inquiry
                                        </span>
                                    </div>

                                    <h1 style={{
                                        fontSize: "38px",
                                        fontWeight: "700",
                                        color: "#0D0D14",
                                        fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
                                        lineHeight: "1.22",
                                        letterSpacing: "-0.6px",
                                        marginBottom: "18px"
                                    }}>
                                        Schedule a Private Stature Consultation
                                    </h1>

                                    <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: "28px", marginBottom: "30px" }}>
                                        Whether preparing for upcoming board directorships, an enterprise capital event, or active Google search reputation defense, our Managing Partners provide direct, discreet counsel under strict bilateral confidentiality.
                                    </p>

                                    {/* Bilateral NDA Assurance Card */}
                                    <div className="prominence_depth_card" style={{ padding: "24px 22px", marginBottom: "26px", backgroundColor: "#ffffff" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                                            <i className="fa-solid fa-shield-halved" style={{ color: "#8B5CF6", fontSize: "16px" }}></i>
                                            <span style={{ fontSize: "13.5px", fontWeight: "700", color: "#0D0D14", fontFamily: "var(--primary-font)" }}>
                                                Bilateral NDA Protection Guaranteed
                                            </span>
                                        </div>
                                        <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "22px", margin: 0 }}>
                                            Non-disclosure agreements are executed prior to any detailed career or governance review. Zero operational metrics or confidential board communications are shared.
                                        </p>
                                    </div>

                                    {/* Direct Channels List */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "30px" }}>
                                        <div style={{ padding: "16px 18px", backgroundColor: "#ffffff", border: "1px solid #eaedf0", borderRadius: "10px", display: "flex", alignItems: "center", gap: "14px" }}>
                                            <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#0D0D14", display: "flex", alignItems: "center", justifyContent: "center", color: "#8B5CF6", fontSize: "14px", flexShrink: 0 }}>
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px", color: "#6B7280" }}>Direct Partner Office</div>
                                                <Link href="mailto:hello@prominence.agency" style={{ fontSize: "14px", fontWeight: "700", color: "#0D0D14", textDecoration: "none", fontFamily: "var(--primary-font)" }}>
                                                    hello@prominence.agency
                                                </Link>
                                                <div style={{ fontSize: "11px", color: "#6B7280" }}>Under 24-Hour Confidential Response SLA</div>
                                            </div>
                                        </div>

                                        <div style={{ padding: "16px 18px", backgroundColor: "#ffffff", border: "1px solid #eaedf0", borderRadius: "10px", display: "flex", alignItems: "center", gap: "14px" }}>
                                            <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#0D0D14", display: "flex", alignItems: "center", justifyContent: "center", color: "#25D366", fontSize: "14px", flexShrink: 0 }}>
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px", color: "#6B7280" }}>Encrypted Messaging</div>
                                                <a href={getWhatsAppUrl()} target="_blank" rel="nofollow noopener noreferrer" style={{ fontSize: "14px", fontWeight: "700", color: "#0D0D14", textDecoration: "none", fontFamily: "var(--primary-font)" }}>
                                                    Direct WhatsApp Concierge <i className="fa-solid fa-arrow-up-right-from-square ms-1" style={{ fontSize: "10px", color: "#25D366" }}></i>
                                                </a>
                                                <div style={{ fontSize: "11px", color: "#6B7280" }}>Instant Scheduling &amp; Preliminary Inquiry</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Global Advisory Hubs */}
                                    <div style={{ fontSize: "12px", color: "#6B7280", display: "flex", alignItems: "center", gap: "8px" }}>
                                        <i className="fa-solid fa-earth-americas" style={{ color: "#8B5CF6" }}></i>
                                        <span>Advising Leaders Across: London · Zurich · New York · Singapore</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Boardroom Consultation Booking Form */}
                            <div className="col-lg-7" data-aos="fade-left" data-aos-duration="550">
                                <ContactForm />
                            </div>

                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    )
}