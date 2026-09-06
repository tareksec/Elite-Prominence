import Link from "next/link"
import { useState } from "react"
import HeaderAuth from "@/components/elements/HeaderAuth"

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}>X</div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/" onClick={handleMobileMenu} style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                            <img src="/assets/images/Elite%20Prominence/EliteProminence-iocn.png" alt="Elite Prominence" style={{ height: "34px", width: "auto", display: "block" }} />
                            <span style={{ fontSize: "20px", fontWeight: "700", color: "#1b2534", whiteSpace: "nowrap" }}>Elite Prominence</span>
                        </Link>
                    </div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                                <li><Link href="/about" onClick={handleMobileMenu}>About</Link></li>
                                <li><Link href="/services" onClick={handleMobileMenu}>Services</Link></li>
                                <li><Link href="/pricing" onClick={handleMobileMenu}>Pricing</Link></li>
                                <li><Link href="/feedback" onClick={handleMobileMenu}>Feedback &amp; Reviews</Link></li>
                                <li><Link href="/community" onClick={handleMobileMenu}>Executive Directory</Link></li>
                                <li><Link href="/blog-grid" onClick={handleMobileMenu}>Blog</Link></li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                            </ul>

                            <HeaderAuth isMobile={true} onMobileNavClick={handleMobileMenu} />

                            <div style={{ marginTop: "16px", marginBottom: "20px" }}>
                                <Link
                                    href="/contact"
                                    onClick={handleMobileMenu}
                                    className="btn_style_one"
                                    style={{ display: "block", textAlign: "center", padding: "12px 20px" }}
                                >
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/*Social Links*/}
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><Link href="mailto:hello@prominence.agency">hello@prominence.agency</Link></li>
                        </ul>
                    </div>
                    <ul className="social-links centred">
                        <li><Link href="https://www.linkedin.com/company/elite-prominence" target="_blank"><span className="fab fa-linkedin-in"></span></Link></li>
                        <li><Link href="https://www.facebook.com/EliteProminence/" target="_blank"><span className="fab fa-facebook-square"></span></Link></li>
                    </ul>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
