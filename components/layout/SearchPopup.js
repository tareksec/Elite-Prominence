'use client'

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SearchPopup({ isPopup, handlePopup }) {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/blog-grid?q=${encodeURIComponent(query.trim())}`)
            if (handlePopup) handlePopup()
        }
    }

    return (
        <>
            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="popup-inner">
                    <div className="upper-box">
                        <figure className="logo-box">
                            <Link href="/" onClick={handlePopup} style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                                <img src="/assets/images/Elite%20Prominence/EliteProminence-iocn.png" alt="Elite Prominence" style={{ height: "34px", width: "auto", display: "block" }} />
                                <span style={{ fontSize: "22px", fontWeight: "800", color: "#1b2534", letterSpacing: "-0.5px", whiteSpace: "nowrap" }}>Elite Prominence</span>
                            </Link>
                        </figure>
                        <div className="close-search" onClick={handlePopup} role="button" tabIndex={0} aria-label="Close search modal">
                            <span className="fa-solid fa-xmark"></span>
                        </div>
                    </div>
                    <div className="overlay-layer" onClick={handlePopup}></div>
                    <div className="container">
                        <div className="search-form">
                            <form onSubmit={handleSearchSubmit}>
                                <div className="form-group">
                                    <fieldset style={{ position: "relative" }}>
                                        <input 
                                            type="search" 
                                            className="form-control" 
                                            name="search-input" 
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            placeholder="Search articles, services, or executive insights..." 
                                            required 
                                            autoFocus={isPopup}
                                            style={{
                                                paddingRight: "50px",
                                                fontFamily: "var(--primary-font)"
                                            }}
                                        />
                                        <button type="submit" aria-label="Submit search">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
