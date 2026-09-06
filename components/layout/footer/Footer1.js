'use client'
import React, { useState } from "react"
import Link from "next/link"

export default function Footer1() {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [subscribed, setSubscribed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.trim()) {
            setSubscribed(true)
            setTimeout(() => setSubscribed(false), 5000)
            setEmail("")
            setFirstName("")
        }
    }

    return (
        <footer className="nature_footer">
            <div className="nature_footer_main">
                <div className="container">
                    <div className="nature_footer_grid">
                        {/* Column 1: Brand Tagline, Navigation Links & Social Icons */}
                        <div className="nature_footer_left">
                            <div className="nature_footer_brand mb_20">
                                <h4 style={{ color: "#ffffff", fontSize: "18px", fontWeight: "700", letterSpacing: "0.5px" }}>
                                    Elite Prominence
                                </h4>
                                <p style={{ color: "#94a3b8", fontSize: "14px", fontStyle: "italic", margin: "4px 0 0" }}>
                                    Be Seen at the Top
                                </p>
                            </div>
                            <nav className="nature_footer_nav" aria-label="Footer Navigation">
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/blog-grid">Blog</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </nav>

                            <div className="nature_footer_socials">
                                <Link href="https://www.linkedin.com/company/elite-prominence" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                <Link href="https://www.facebook.com/EliteProminence" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </div>
                        </div>

                        {/* Column 2: Newsletter Subscribe (Center) */}
                        <div className="nature_footer_center">
                            <h3 className="nature_footer_title">Get Updates</h3>
                            <p className="nature_footer_subtitle">
                                Subscribe to our newsletter to receive executive personal branding insights and strategic announcements.
                            </p>

                            {subscribed ? (
                                <div style={{ 
                                    padding: "16px", 
                                    background: "rgba(36, 96, 226, 0.15)", 
                                    borderRadius: "6px", 
                                    border: "1px solid rgba(36, 96, 226, 0.4)",
                                    color: "#93c5fd",
                                    fontSize: "15px",
                                    fontStyle: "italic"
                                }}>
                                    Thank you! You have been subscribed to our executive newsletter.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="nature_footer_form">
                                    <div style={{ marginBottom: "10px" }}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="*Email"
                                            required
                                            className="nature_footer_input"
                                        />
                                    </div>
                                    <div className="nature_footer_row">
                                        <input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            placeholder="*First Name"
                                            className="nature_footer_input"
                                        />
                                        <button type="submit" className="nature_footer_btn">
                                            SIGN UP
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Column 3: Contact & Accreditation Seal */}
                        <div className="nature_footer_right">
                            <Link href="/contact" className="nature_footer_msg_link">
                                Send Us A Message &rarr;
                            </Link>

                            <div className="nature_footer_contact_info">
                                <div className="nature_footer_phone">
                                    <a href="mailto:hello@prominence.agency" style={{ color: "inherit", textDecoration: "none" }}>hello@prominence.agency</a>
                                </div>
                                <div>Executive Personal Branding</div>
                                <div>Location-Independent Agency</div>
                            </div>

                            {/* Authentic Trust Seal Badge */}
                            <div className="nature_footer_badge_wrapper" title="Executive Personal Branding Accredited">
                                <svg width="100" height="58" viewBox="0 0 100 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="nature_footer_badge">
                                    <ellipse cx="50" cy="29" rx="46" ry="25" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.5" />
                                    <ellipse cx="50" cy="29" rx="42" ry="21" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 2" />
                                    
                                    {/* Stylized laurel crest & ribbon */}
                                    <path d="M 40 22 C 40 19 43 17 46 17 C 49 17 51 19 51 22" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                                    <path d="M 50 20 C 50 17 53 15 56 15 C 59 15 61 17 61 20" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                                    <path d="M 37 31 C 41 24 49 23 52 26 C 55 23 63 24 67 31" stroke="#2460e2" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                                    
                                    {/* Curved badge banner text */}
                                    <text x="50" y="42" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="700" letterSpacing="1.4" fontFamily="'PT Serif', serif">
                                        ACCREDITED
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Sub-Footer Bar */}
            <div className="nature_footer_bottom">
                <div className="container">
                    <div className="nature_footer_bottom_inner">
                        <div className="nature_footer_copyright">
                            &copy; {new Date().getFullYear()} Elite Prominence. All Rights Reserved.
                        </div>
                        <div className="nature_footer_legal">
                            <Link href="/privacy-policy" style={{ marginRight: "18px" }}>Privacy Policy</Link>
                            <Link href="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
