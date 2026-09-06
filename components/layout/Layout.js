
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import Breadcrumb2 from './Breadcrumb2'
import Breadcrumb3 from './Breadcrumb3'
import Breadcrumb4 from './Breadcrumb4'
import Breadcrumb5 from './Breadcrumb5'
import Breadcrumb6 from './Breadcrumb6'
import Breadcrumb7 from './Breadcrumb7'
import Breadcrumb8 from './Breadcrumb8'
import Breadcrumb9 from './Breadcrumb9'
import Breadcrumb10 from './Breadcrumb10'
import Breadcrumb11 from './Breadcrumb11'
import Breadcrumb12 from './Breadcrumb12'
import Breadcrumb13 from './Breadcrumb13'
import Breadcrumb14 from './Breadcrumb14'
import Breadcrumb15 from './Breadcrumb15'
import Breadcrumb16 from './Breadcrumb16'
import SearchPopup from "./SearchPopup"
import Sidebar from "./Sidebar"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Footer1 from './footer/Footer1'

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, breadcrumbTitle2, breadcrumbTitle3, breadcrumbTitle4, breadcrumbTitle5, breadcrumbTitle6, breadcrumbTitle7, breadcrumbTitle8, breadcrumbTitle9, breadcrumbTitle10, breadcrumbTitle11, breadcrumbTitle12, breadcrumbTitle13, breadcrumbTitle14, breadcrumbTitle15, breadcrumbTitle16, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}


                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {breadcrumbTitle2 && <Breadcrumb2 breadcrumbTitle2={breadcrumbTitle2} />}
                {breadcrumbTitle3 && <Breadcrumb3 breadcrumbTitle3={breadcrumbTitle3} />}
                {breadcrumbTitle4 && <Breadcrumb4 breadcrumbTitle4={breadcrumbTitle4} />}
                {breadcrumbTitle5 && <Breadcrumb5 breadcrumbTitle5={breadcrumbTitle5} />}
                {breadcrumbTitle6 && <Breadcrumb6 breadcrumbTitle6={breadcrumbTitle6} />}
                {breadcrumbTitle7 && <Breadcrumb7 breadcrumbTitle7={breadcrumbTitle7} />}
                {breadcrumbTitle8 && <Breadcrumb8 breadcrumbTitle8={breadcrumbTitle8} />}
                {breadcrumbTitle9 && <Breadcrumb9 breadcrumbTitle9={breadcrumbTitle9} />}
                {breadcrumbTitle10 && <Breadcrumb10 breadcrumbTitle10={breadcrumbTitle10} />}
                {breadcrumbTitle11 && <Breadcrumb11 breadcrumbTitle11={breadcrumbTitle11} />}
                {breadcrumbTitle12 && <Breadcrumb12 breadcrumbTitle12={breadcrumbTitle12} />}
                {breadcrumbTitle13 && <Breadcrumb13 breadcrumbTitle13={breadcrumbTitle13} />}
                {breadcrumbTitle14 && <Breadcrumb14 breadcrumbTitle14={breadcrumbTitle14} />}
                {breadcrumbTitle15 && <Breadcrumb15 breadcrumbTitle15={breadcrumbTitle15} />}
                {breadcrumbTitle16 && <Breadcrumb16 breadcrumbTitle16={breadcrumbTitle16} />}

                {children}

                {!footerStyle && < Footer1 />}
                {footerStyle == 1 ? < Footer1 /> : null}
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
