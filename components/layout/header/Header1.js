import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import HeaderAuth from "@/components/elements/HeaderAuth"

export default function Header1({ scroll, handleMobileMenu, handlePopup }) {
    
    return (
        <>

        {/* main header */}
        <header className={`header ${scroll ? "fixed-header" : ""}`}>

            <div className="main_header">
                <div className="container"> 
                    <div className="main_header_inner">
                        <div className="main_header_logo" style={{ maxWidth: "max-content" }}>
                            <figure>
                                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                                    <img src="/assets/images/Elite%20Prominence/EliteProminence-iocn.png" alt="Elite Prominence" style={{ height: "38px", width: "auto", display: "block" }} />
                                    <span style={{ fontSize: "22px", fontWeight: "800", color: "#1b2534", letterSpacing: "-0.5px", whiteSpace: "nowrap" }}>Elite Prominence</span>
                                </Link>
                            </figure>
                        </div>
                        <div className="main_header_menu menu_area">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <div className="menu-bar">
                                    <i className="fas fa-bars"></i>
                                </div>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="header_right_content" style={{ display: "flex", alignItems: "center" }}>
                            <button className="search-toggler" onClick={handlePopup}><i className="icon-50"></i></button>
                            <HeaderAuth />
                            <div className="link-btn"><Link href="/contact" className="btn_style_one">Book a Strategy Call</Link></div>
                        </div> 
                    </div>
                </div>
            </div>
            

            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="container">
                    <div className="main_header_inner">
                        <div className="main_header_logo" style={{ maxWidth: "max-content" }}>
                            <figure>
                                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                                    <img src="/assets/images/Elite%20Prominence/EliteProminence-iocn.png" alt="Elite Prominence" style={{ height: "38px", width: "auto", display: "block" }} />
                                    <span style={{ fontSize: "22px", fontWeight: "800", color: "#1b2534", letterSpacing: "-0.5px", whiteSpace: "nowrap" }}>Elite Prominence</span>
                                </Link>
                            </figure>
                        </div>
                        <div className="main_header_menu menu_area">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="header_right_content" style={{ display: "flex", alignItems: "center" }}>
                            <button className="search-toggler" onClick={handlePopup}><i className="icon-50"></i></button>
                            <HeaderAuth />
                            <div className="link-btn"><Link href="/contact" className="btn_style_one">Book a Strategy Call</Link></div>
                        </div> 
                    </div>            
                </div> 
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>
        </>
    )
}
