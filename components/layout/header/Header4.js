'use client'
import React from "react"
import FloatingNavbar from "../FloatingNavbar"
import MobileMenu from "../MobileMenu"

export default function Header4({ scroll, handleMobileMenu }) {
    return (
        <>
            <FloatingNavbar scroll={scroll} handleMobileMenu={handleMobileMenu} />
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </>
    )
}
