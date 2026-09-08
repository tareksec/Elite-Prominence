'use client'
import React from "react"
import Link from "next/link"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function Footer1() {
    return (
        <footer className="elite_site_footer" style={{
            backgroundColor: "#0D0D14",
            color: "#e2e8f0",
            fontFamily: "var(--primary-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
            position: "relative",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            overflow: "hidden"
        }}>
            {/* Top Subtle Ambient Accent Line */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 30%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.15) 70%, transparent 100%)",
                zIndex: 2
            }} />

            {/* Main Footer Content */}
            <div style={{ padding: "80px 0 60px" }}>
                <div className="container">
                    <div className="footer_grid_layout">
                        {/* Column 1: Brand & Firm Stature */}
                        <div>
                            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "16px" }}>
                                <img
                                    src="/assets/images/Elite%20Prominence/EliteProminence-iocn.png"
                                    alt="Elite Prominence"
                                    style={{ height: "36px", width: "auto", display: "block" }}
                                />
                                <div>
                                    <span style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.4px", display: "block", lineHeight: "1.2" }}>
                                        Elite Prominence
                                    </span>
                                    <span style={{ fontSize: "9.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px", color: "#94a3b8" }}>
                                        Personal Branding for HR Leaders &amp; Executives
                                    </span>
                                </div>
                            </Link>

                            <p style={{
                                color: "#cbd5e1",
                                fontSize: "14px",
                                fontWeight: "600",
                                letterSpacing: "0.3px",
                                margin: "0 0 12px"
                            }}>
                                Build a Digital Presence That Commands Attention.
                            </p>
                            <p style={{
                                color: "#94a3b8",
                                fontSize: "14px",
                                lineHeight: "1.7",
                                margin: "0 0 22px",
                                maxWidth: "320px"
                            }}>
                                We engineer the bespoke websites, Google reputation, thought leadership, and search authority that represent C-suite leaders and founders before they enter the room.
                            </p>

                            {/* Social Media & Instant Channels */}
                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <Link
                                    href="https://www.linkedin.com/company/elite-prominence"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="footer_social_pill"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        border: "1px solid rgba(255, 255, 255, 0.15)",
                                        color: "#ffffff",
                                        fontSize: "15px",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                <Link
                                    href="https://www.facebook.com/EliteProminence"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="Facebook"
                                    className="footer_social_pill"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        border: "1px solid rgba(255, 255, 255, 0.15)",
                                        color: "#ffffff",
                                        fontSize: "15px",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <a
                                    href={getWhatsAppUrl()}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="WhatsApp Executive Line"
                                    className="footer_social_pill"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(37, 211, 102, 0.1)",
                                        border: "1px solid rgba(37, 211, 102, 0.3)",
                                        color: "#25D366",
                                        fontSize: "16px",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Core Services */}
                        <div>
                            <h4 style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                marginBottom: "20px"
                            }}>
                                Core Services
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {[
                                    { name: "Executive Digital HQ", href: "/services/executive-digital-hq" },
                                    { name: "Digital Reputation", href: "/services/digital-reputation" },
                                    { name: "LinkedIn Authority", href: "/services/linkedin-authority" },
                                    { name: "Executive Content", href: "/services/executive-content" },
                                    { name: "Executive SEO", href: "/services/executive-seo" },
                                    { name: "Brand Strategy", href: "/services/personal-brand-strategy" },
                                    { name: "Authority & Speaking", href: "/services/authority-building" },
                                    { name: "All Services Overview", href: "/services" }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: "11px" }}>
                                        <Link
                                            href={item.href}
                                            className="footer_link_item"
                                            style={{
                                                color: "#94a3b8",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                textDecoration: "none",
                                                transition: "all 0.2s ease"
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Solutions & Methodology */}
                        <div>
                            <h4 style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                marginBottom: "20px"
                            }}>
                                Solutions &amp; Firm
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {[
                                    { name: "For CEOs & Presidents", href: "/solutions/ceos" },
                                    { name: "For CHROs & HR Leaders", href: "/solutions/chros" },
                                    { name: "For Founders & Tech Leaders", href: "/solutions/founders" },
                                    { name: "For Senior Executives & NEDs", href: "/solutions/executives" },
                                    { name: "For Consultants & Advisors", href: "/solutions/consultants" },
                                    { name: "How It Works (Methodology)", href: "/how-it-works" },
                                    { name: "Case Studies & Proof", href: "/case-studies" },
                                    { name: "Careers at Prominence", href: "/careers" }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: "11px" }}>
                                        <Link
                                            href={item.href}
                                            className="footer_link_item"
                                            style={{
                                                color: "#94a3b8",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                textDecoration: "none",
                                                transition: "all 0.2s ease"
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Private Consultation Card */}
                        <div style={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "16px",
                            padding: "26px 22px",
                            backdropFilter: "blur(10px)"
                        }}>
                            <span className="prominence_badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.15)', marginBottom: '12px' }}>
                                Private Advisory
                            </span>
                            <h4 style={{
                                fontSize: "18px",
                                fontWeight: "700",
                                color: "#ffffff",
                                margin: "0 0 8px",
                                lineHeight: "1.3",
                                fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)"
                            }}>
                                Book a Private Consultation
                            </h4>
                            <p style={{
                                color: "#94a3b8",
                                fontSize: "13.5px",
                                lineHeight: "1.6",
                                margin: "0 0 18px"
                            }}>
                                Evaluate your current search footprint, identify blind spots, and architect your executive authority roadmap.
                            </p>

                            <Link
                                href="/contact"
                                className="btn_style_gold btn_block btn_md"
                                style={{ marginBottom: "12px" }}
                            >
                                Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                            <Link
                                href="/resources/assessment"
                                className="btn_style_two_dark btn_block btn_sm"
                            >
                                <span>Take Executive Assessment</span> <i className="fa-solid fa-angle-right"></i>
                            </Link>

                            <div style={{ marginTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "12px" }}>
                                <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>
                                    Confidential Inquiries:
                                </div>
                                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                                    <a
                                        href="mailto:hello@prominence.agency"
                                        style={{ color: "#cbd5e1", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}
                                    >
                                        hello@prominence.agency
                                    </a>
                                    <span style={{ color: "#475569", fontSize: "12px" }}>&bull;</span>
                                    <a
                                        href={getWhatsAppUrl()}
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        style={{ color: "#25D366", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}
                                    >
                                        WhatsApp VIP
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Legal Sub-Footer Bar */}
            <div style={{
                backgroundColor: "#0D0D14",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                padding: "20px 0"
            }}>
                <div className="container">
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "14px",
                        fontSize: "13px",
                        color: "#6B7280"
                    }}>
                        <div>
                            &copy; {new Date().getFullYear()} Prominence.agency. All rights reserved. International Executive Reputation Advisory.
                        </div>
                        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                            <Link href="/privacy-policy" style={{ color: "#6B7280", textDecoration: "none" }}>
                                Privacy Policy
                            </Link>
                            <Link href="/terms" style={{ color: "#6B7280", textDecoration: "none" }}>
                                Terms of Engagement
                            </Link>
                            <Link href="/resources" style={{ color: "#6B7280", textDecoration: "none" }}>
                                Resources
                            </Link>
                            <Link href="/login" style={{ color: "#6B7280", textDecoration: "none" }}>
                                Client Portal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer_link_item:hover {
                    color: #ffffff !important;
                    transform: translateX(3px);
                }
                .footer_social_pill:hover {
                    background: #ffffff !important;
                    color: #0f172a !important;
                    border-color: #ffffff !important;
                    transform: translateY(-2px);
                }
                .footer_cta_btn:hover {
                    transform: translateY(-2px);
                    filter: brightness(1.08);
                }

                @media (max-width: 1024px) {
                    .footer_grid_layout {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 36px !important;
                    }
                }

                @media (max-width: 767px) {
                    .footer_grid_layout {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                }
            `}</style>
        </footer>
    )
}
