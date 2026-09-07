'use client'
import React from "react"
import Link from "next/link"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function Footer1() {
    return (
        <footer className="elite_site_footer" style={{
            backgroundColor: "#0b1120",
            color: "#e2e8f0",
            fontFamily: "var(--primary-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
            position: "relative",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            overflow: "hidden"
        }}>
            {/* Top Purple-to-Magenta Ambient Accent Line */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent 0%, #8B5CF6 30%, #EC4899 70%, transparent 100%)",
                zIndex: 2
            }} />

            {/* Main Footer Content */}
            <div style={{ padding: "80px 0 60px" }}>
                <div className="container">
                    <div className="footer_grid_layout" style={{
                        display: "grid",
                        gridTemplateColumns: "1.3fr 0.9fr 1fr 1.2fr",
                        gap: "48px",
                        alignItems: "start"
                    }}>
                        {/* Column 1: Brand & Positioning */}
                        <div>
                            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "16px" }}>
                                <img
                                    src="/assets/images/Elite%20Prominence/EliteProminence-iocn.png"
                                    alt="Elite Prominence"
                                    style={{ height: "34px", width: "auto", display: "block", borderRadius: "6px" }}
                                />
                                <span style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.4px" }}>
                                    Elite Prominence
                                </span>
                            </Link>
                            <p style={{
                                color: "#a5b4fc",
                                fontSize: "14px",
                                fontWeight: "600",
                                letterSpacing: "0.5px",
                                margin: "0 0 14px"
                            }}>
                                Be Seen at the Top
                            </p>
                            <p style={{
                                color: "#94a3b8",
                                fontSize: "14.5px",
                                lineHeight: "1.7",
                                margin: "0 0 24px",
                                maxWidth: "320px"
                            }}>
                                Elite Prominence builds a complete digital presence for senior HR leaders and consultants — website, Google reputation, and LinkedIn authority — done for you.
                            </p>

                            {/* Social Media Links */}
                            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                <Link
                                    href="https://www.linkedin.com/company/elite-prominence"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="footer_social_pill"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minWidth: "44px",
                                        minHeight: "44px",
                                        width: "44px",
                                        height: "44px",
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
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="footer_social_pill"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minWidth: "44px",
                                        minHeight: "44px",
                                        width: "44px",
                                        height: "44px",
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
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="footer_social_pill"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minWidth: "44px",
                                        minHeight: "44px",
                                        width: "44px",
                                        height: "44px",
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

                        {/* Column 2: Navigation Links */}
                        <div>
                            <h4 style={{
                                fontSize: "15px",
                                fontWeight: "700",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                marginBottom: "20px"
                            }}>
                                Agency
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About Us", href: "/about" },
                                    { name: "Services", href: "/services" },
                                    { name: "Pricing & Packages", href: "/pricing" },
                                    { name: "Insights & Articles", href: "/blog-grid" },
                                    { name: "Contact", href: "/contact" }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: "12px" }}>
                                        <Link
                                            href={item.href}
                                            className="footer_link_item"
                                            style={{
                                                color: "#94a3b8",
                                                fontSize: "14.5px",
                                                fontWeight: "500",
                                                textDecoration: "none",
                                                transition: "all 0.2s ease",
                                                display: "inline-block"
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Resources & Community */}
                        <div>
                            <h4 style={{
                                fontSize: "15px",
                                fontWeight: "700",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                marginBottom: "20px"
                            }}>
                                Community &amp; Portal
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {[
                                    { name: "Client Reviews", href: "/feedback" },
                                    { name: "Executive Directory", href: "/community" },
                                    { name: "Member Dashboard", href: "/dashboard" },
                                    { name: "Strategic FAQ", href: "/faq" },
                                    { name: "Terms of Service", href: "/terms" },
                                    { name: "Privacy Policy", href: "/privacy-policy" }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: "12px" }}>
                                        <Link
                                            href={item.href}
                                            className="footer_link_item"
                                            style={{
                                                color: "#94a3b8",
                                                fontSize: "14.5px",
                                                fontWeight: "500",
                                                textDecoration: "none",
                                                transition: "all 0.2s ease",
                                                display: "inline-block"
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Next Step & Executive Strategy Call */}
                        <div style={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "16px",
                            padding: "28px 24px",
                            backdropFilter: "blur(10px)"
                        }}>
                            <span style={{
                                display: "inline-block",
                                fontSize: "11px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                color: "#EC4899",
                                backgroundColor: "rgba(236, 72, 153, 0.1)",
                                border: "1px solid rgba(236, 72, 153, 0.25)",
                                padding: "3px 10px",
                                borderRadius: "12px",
                                marginBottom: "12px"
                            }}>
                                Direct Consultation
                            </span>
                            <h4 style={{
                                fontSize: "18px",
                                fontWeight: "700",
                                color: "#ffffff",
                                margin: "0 0 8px",
                                lineHeight: "1.3"
                            }}>
                                Ready to Be Seen at the Top?
                            </h4>
                            <p style={{
                                color: "#94a3b8",
                                fontSize: "13.5px",
                                lineHeight: "1.6",
                                margin: "0 0 20px"
                            }}>
                                Book a confidential strategy call to audit your current digital footprint and plan your authority roadmap.
                            </p>

                            <Link
                                href="/contact"
                                className="footer_cta_btn"
                                style={{
                                    display: "block",
                                    textAlign: "center",
                                    padding: "12px 20px",
                                    borderRadius: "9999px",
                                    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                                    color: "#ffffff",
                                    fontSize: "14px",
                                    fontWeight: "700",
                                    letterSpacing: "0.2px",
                                    textDecoration: "none",
                                    boxShadow: "0 4px 16px rgba(236, 72, 153, 0.35)",
                                    transition: "all 0.25s ease"
                                }}
                            >
                                Book a Strategy Call &rarr;
                            </Link>

                            <div style={{ marginTop: "18px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "14px" }}>
                                <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "6px" }}>
                                    Inquiries &amp; Confidential Briefs:
                                </div>
                                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                                    <a
                                        href="mailto:hello@prominence.agency"
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            textDecoration: "none",
                                            transition: "color 0.2s ease"
                                        }}
                                        className="footer_email_link"
                                    >
                                        hello@prominence.agency
                                    </a>
                                    <span style={{ color: "#475569", fontSize: "12px" }}>&bull;</span>
                                    <a
                                        href={getWhatsAppUrl()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: "#25D366",
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            textDecoration: "none",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            transition: "opacity 0.2s ease"
                                        }}
                                        className="footer_whatsapp_link"
                                        aria-label="Chat with Elite Prominence on WhatsApp"
                                    >
                                        <i className="fab fa-whatsapp" style={{ fontSize: "15px" }}></i>
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Sub-Footer Bar */}
            <div style={{
                backgroundColor: "#070b14",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                padding: "22px 0"
            }}>
                <div className="container">
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "14px",
                        fontSize: "13.5px",
                        color: "#64748b"
                    }}>
                        <div>
                            &copy; {new Date().getFullYear()} Elite Prominence. All rights reserved.
                        </div>
                        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                            <Link href="/privacy-policy" className="footer_legal_link" style={{ color: "#64748b", textDecoration: "none", transition: "color 0.2s ease", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="footer_legal_link" style={{ color: "#64748b", textDecoration: "none", transition: "color 0.2s ease", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>
                                Terms of Service
                            </Link>
                            <Link href="/login" className="footer_legal_link" style={{ color: "#64748b", textDecoration: "none", transition: "color 0.2s ease", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>
                                Client Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover Effects & Media Queries */}
            <style jsx>{`
                .footer_link_item:hover {
                    color: #8B5CF6 !important;
                    transform: translateX(4px);
                }
                .footer_social_pill:hover {
                    background: linear-gradient(135deg, #8B5CF6, #EC4899) !important;
                    border-color: transparent !important;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 14px rgba(236, 72, 153, 0.4) !important;
                }
                .footer_cta_btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(236, 72, 153, 0.5) !important;
                    filter: brightness(1.05);
                }
                .footer_email_link:hover {
                    color: #EC4899 !important;
                }
                .footer_legal_link:hover {
                    color: #cbd5e1 !important;
                    text-decoration: underline;
                }

                @media (max-width: 1024px) {
                    .footer_grid_layout {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 40px !important;
                    }
                }

                @media (max-width: 767px) {
                    .footer_grid_layout {
                        grid-template-columns: 1fr !important;
                        gap: 36px !important;
                    }
                    .footer_link_item {
                        min-height: 44px;
                        display: inline-flex !important;
                        align-items: center;
                        padding: 6px 0;
                    }
                }
            `}</style>
        </footer>
    )
}
