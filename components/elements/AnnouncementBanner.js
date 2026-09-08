'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AnnouncementBanner() {
    const [banner, setBanner] = useState(null)
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        // Check session storage first so dismissed banner doesn't annoy user during session
        try {
            if (sessionStorage.getItem('ep_announcement_dismissed') === 'true') {
                return
            }
        } catch {
            // ignore
        }

        fetch('/api/site-settings')
            .then(res => res.json())
            .then(data => {
                if (data?.settings?.announcement?.enabled) {
                    setBanner(data.settings.announcement)
                }
            })
            .catch(() => {})
    }, [])

    const handleDismiss = () => {
        setDismissed(true)
        try {
            sessionStorage.setItem('ep_announcement_dismissed', 'true')
        } catch {
            // ignore
        }
    }

    if (!banner || dismissed || !banner.enabled) return null

    return (
        <div style={{
            backgroundColor: banner.bgColor || "#0f1013",
            color: "#ffffff",
            padding: "8px 16px",
            fontSize: "13px",
            fontWeight: "600",
            fontFamily: "var(--primary-font)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            position: "relative",
            zIndex: 9999,
            borderBottom: "1px solid rgba(184, 144, 88, 0.3)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
            <span style={{
                backgroundColor: "#b89058",
                color: "#0f1013",
                fontSize: "10px",
                fontWeight: "700",
                textTransform: "uppercase",
                padding: "2px 8px",
                borderRadius: "4px",
                letterSpacing: "0.5px"
            }}>
                Notice
            </span>

            <span style={{ textAlign: "center" }}>
                {banner.text}
            </span>

            {banner.link && (
                <Link
                    href={banner.link}
                    style={{
                        color: "#D29D2B",
                        textDecoration: "underline",
                        fontWeight: "700",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px"
                    }}
                >
                    Learn More &rarr;
                </Link>
            )}

            <button
                onClick={handleDismiss}
                aria-label="Dismiss announcement"
                style={{
                    position: "absolute",
                    right: "12px",
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.7)",
                    cursor: "pointer",
                    fontSize: "14px",
                    padding: "4px 8px"
                }}
            >
                <i className="fal fa-times"></i>
            </button>
        </div>
    )
}
