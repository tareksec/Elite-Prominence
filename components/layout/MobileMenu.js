'use client'
import Link from "next/link"
import { useState } from "react"
import HeaderAuth from "@/components/elements/HeaderAuth"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { SERVICES_DATA } from "@/lib/servicesData"
import { SOLUTIONS_DATA } from "@/lib/solutionsData"

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [openSection, setOpenSection] = useState(null)

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section)
    }

    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}>&times;</div>
                <nav className="menu-box" aria-label="Mobile Navigation Drawer" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
                    <div className="nav-logo" style={{ padding: '24px 20px 16px' }}>
                        <Link href="/" onClick={handleMobileMenu} style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                            <img src="/assets/images/Elite%20Prominence/EliteProminence-iocn.png" alt="Prominence.agency" style={{ height: "32px", width: "auto", display: "block" }} />
                            <div>
                                <span style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", display: "block", lineHeight: '1.2' }}>Prominence</span>
                                <span style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#64748b" }}>Executive Advisory</span>
                            </div>
                        </Link>
                    </div>

                    <div className="menu-outer" style={{ padding: '0 16px' }}>
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li>
                                    <Link href="/" onClick={handleMobileMenu} style={{ fontWeight: '600', padding: '12px 14px', display: 'block' }}>
                                        Home
                                    </Link>
                                </li>

                                {/* Services Accordion */}
                                <li style={{ borderTop: '1px solid #f1f5f9' }}>
                                    <div
                                        onClick={() => toggleSection('services')}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '12px 14px',
                                            cursor: 'pointer',
                                            fontWeight: '700',
                                            color: '#0f172a'
                                        }}
                                    >
                                        <span>Services</span>
                                        <span style={{ fontSize: '14px', color: '#64748b' }}>{openSection === 'services' ? '−' : '+'}</span>
                                    </div>
                                    {openSection === 'services' && (
                                        <ul style={{ listStyle: 'none', padding: '4px 0 8px 18px', margin: 0, backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/services" onClick={handleMobileMenu} style={{ fontSize: '13.5px', fontWeight: '700', color: '#0f172a' }}>
                                                    All Services Overview &rarr;
                                                </Link>
                                            </li>
                                            {SERVICES_DATA.map((srv) => (
                                                <li key={srv.slug} style={{ padding: '6px 0' }}>
                                                    <Link href={`/services/${srv.slug}`} onClick={handleMobileMenu} style={{ fontSize: '13.5px', color: '#475569', textDecoration: 'none' }}>
                                                        {srv.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>

                                {/* Solutions Accordion */}
                                <li style={{ borderTop: '1px solid #f1f5f9' }}>
                                    <div
                                        onClick={() => toggleSection('solutions')}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '12px 14px',
                                            cursor: 'pointer',
                                            fontWeight: '700',
                                            color: '#0f172a'
                                        }}
                                    >
                                        <span>Who We Serve</span>
                                        <span style={{ fontSize: '14px', color: '#64748b' }}>{openSection === 'solutions' ? '−' : '+'}</span>
                                    </div>
                                    {openSection === 'solutions' && (
                                        <ul style={{ listStyle: 'none', padding: '4px 0 8px 18px', margin: 0, backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/solutions" onClick={handleMobileMenu} style={{ fontSize: '13.5px', fontWeight: '700', color: '#0f172a' }}>
                                                    All Executive Solutions &rarr;
                                                </Link>
                                            </li>
                                            {SOLUTIONS_DATA.map((sol) => (
                                                <li key={sol.slug} style={{ padding: '6px 0' }}>
                                                    <Link href={`/solutions/${sol.slug}`} onClick={handleMobileMenu} style={{ fontSize: '13.5px', color: '#475569', textDecoration: 'none' }}>
                                                        {sol.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>

                                <li style={{ borderTop: '1px solid #f1f5f9' }}>
                                    <Link href="/how-it-works" onClick={handleMobileMenu} style={{ fontWeight: '600', padding: '12px 14px', display: 'block' }}>
                                        How It Works
                                    </Link>
                                </li>

                                <li style={{ borderTop: '1px solid #f1f5f9' }}>
                                    <Link href="/case-studies" onClick={handleMobileMenu} style={{ fontWeight: '600', padding: '12px 14px', display: 'block' }}>
                                        Case Studies
                                    </Link>
                                </li>

                                <li style={{ borderTop: '1px solid #f1f5f9' }}>
                                    <Link href="/blog-grid" onClick={handleMobileMenu} style={{ fontWeight: '600', padding: '12px 14px', display: 'block' }}>
                                        Insights &amp; Articles
                                    </Link>
                                </li>

                                {/* Resources Accordion */}
                                <li style={{ borderTop: '1px solid #f1f5f9' }}>
                                    <div
                                        onClick={() => toggleSection('resources')}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '12px 14px',
                                            cursor: 'pointer',
                                            fontWeight: '700',
                                            color: '#0f172a'
                                        }}
                                    >
                                        <span>Resources</span>
                                        <span style={{ fontSize: '14px', color: '#64748b' }}>{openSection === 'resources' ? '−' : '+'}</span>
                                    </div>
                                    {openSection === 'resources' && (
                                        <ul style={{ listStyle: 'none', padding: '4px 0 8px 18px', margin: 0, backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/resources/assessment" onClick={handleMobileMenu} style={{ fontSize: '13.5px', fontWeight: '700', color: '#1d4ed8' }}>
                                                    Executive Digital Scorecard
                                                </Link>
                                            </li>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/resources" onClick={handleMobileMenu} style={{ fontSize: '13.5px', color: '#475569' }}>
                                                    Resources Library &amp; Guides
                                                </Link>
                                            </li>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/community" onClick={handleMobileMenu} style={{ fontSize: '13.5px', color: '#475569' }}>
                                                    Executive Contributor Directory
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                {/* Firm Accordion */}
                                <li style={{ borderTop: '1px solid #f1f5f9' }}>
                                    <div
                                        onClick={() => toggleSection('firm')}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '12px 14px',
                                            cursor: 'pointer',
                                            fontWeight: '700',
                                            color: '#0f172a'
                                        }}
                                    >
                                        <span>Firm &amp; About</span>
                                        <span style={{ fontSize: '14px', color: '#64748b' }}>{openSection === 'firm' ? '−' : '+'}</span>
                                    </div>
                                    {openSection === 'firm' && (
                                        <ul style={{ listStyle: 'none', padding: '4px 0 8px 18px', margin: 0, backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/about" onClick={handleMobileMenu} style={{ fontSize: '13.5px', color: '#475569' }}>
                                                    About Prominence
                                                </Link>
                                            </li>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/careers" onClick={handleMobileMenu} style={{ fontSize: '13.5px', color: '#475569', display: 'flex', justifyContent: 'space-between', paddingRight: '14px' }}>
                                                    <span>Careers</span>
                                                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#059669' }}>Hiring</span>
                                                </Link>
                                            </li>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/pricing" onClick={handleMobileMenu} style={{ fontSize: '13.5px', color: '#475569' }}>
                                                    Advisory Packages &amp; Pricing
                                                </Link>
                                            </li>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/feedback" onClick={handleMobileMenu} style={{ fontSize: '13.5px', color: '#475569' }}>
                                                    Client Endorsements
                                                </Link>
                                            </li>
                                            <li style={{ padding: '6px 0' }}>
                                                <Link href="/faq" onClick={handleMobileMenu} style={{ fontSize: '13.5px', color: '#475569' }}>
                                                    Strategic FAQ
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li style={{ borderTop: '1px solid #f1f5f9' }}>
                                    <Link href="/contact" onClick={handleMobileMenu} style={{ fontWeight: '600', padding: '12px 14px', display: 'block' }}>
                                        Contact &amp; Inquiries
                                    </Link>
                                </li>
                            </ul>

                            <HeaderAuth isMobile={true} onMobileNavClick={handleMobileMenu} />

                            <div style={{ marginTop: "20px", marginBottom: "24px" }}>
                                <Link
                                    href="/contact"
                                    onClick={handleMobileMenu}
                                    className="btn_style_one btn_block btn_md"
                                >
                                    Book a Private Consultation <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info" style={{ padding: '0 20px 20px' }}>
                        <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8' }}>
                            Confidential Inquiries
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0' }}>
                            <li>
                                <Link href="mailto:hello@prominence.agency" style={{ fontSize: '13.5px', color: '#0f172a', fontWeight: '600' }}>
                                    hello@prominence.agency
                                </Link>
                            </li>
                            <li style={{ marginTop: "6px" }}>
                                <a href={getWhatsAppUrl()} target="_blank" rel="nofollow noopener noreferrer" style={{ color: "#25D366", display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: "600", fontSize: '13.5px' }}>
                                    <i className="fab fa-whatsapp"></i> WhatsApp Executive Line
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    )
}
