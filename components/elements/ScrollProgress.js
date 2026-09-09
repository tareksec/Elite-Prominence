'use client'
import React, { useEffect, useState, useCallback } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const trackHeight = 180

    const updateScrollProgress = useCallback(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        
        if (scrollTop > 40) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }

        if (docHeight <= 0) {
            setProgress(0)
            return
        }

        const currentProgress = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)))
        setProgress(currentProgress)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress, { passive: true })
        window.addEventListener('resize', updateScrollProgress, { passive: true })
        updateScrollProgress()

        return () => {
            window.removeEventListener('scroll', updateScrollProgress)
            window.removeEventListener('resize', updateScrollProgress)
        }
    }, [updateScrollProgress])

    const handleTrackClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const clickY = e.clientY - rect.top
        const percentage = Math.max(0, Math.min(1, clickY / rect.height))
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        
        window.scrollTo({
            top: percentage * docHeight,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <div
                className="prominence_scroll_indicator d-none d-md-flex"
                style={{
                    position: 'fixed',
                    right: '42px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 995,
                    display: 'flex',
                    alignItems: 'center',
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    userSelect: 'none'
                }}
            >
                {/* Clickable Vertical Track Area */}
                <div
                    onClick={handleTrackClick}
                    style={{
                        position: 'relative',
                        width: '28px', // Wider hit target for easy clicking
                        height: `${trackHeight}px`,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                    title={`Scrolled ${progress}% — Click to navigate`}
                >
                    {/* Background Track Line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: '2px',
                            top: 0,
                            width: '3.5px',
                            height: `${trackHeight}px`,
                            backgroundColor: 'rgba(13, 13, 20, 0.14)',
                            backdropFilter: 'blur(4px)',
                            borderRadius: '999px',
                            boxShadow: '0 0 1px rgba(255, 255, 255, 0.4)'
                        }}
                    />

                    {/* Active Fill Line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: '2px',
                            top: 0,
                            width: '3.5px',
                            height: `${(progress / 100) * trackHeight}px`,
                            background: 'linear-gradient(180deg, #8B5CF6 0%, #EC4899 100%)',
                            borderRadius: '999px',
                            transition: 'height 0.08s ease-out',
                            boxShadow: '0 0 8px rgba(236, 72, 153, 0.5)'
                        }}
                    />

                    {/* Tick Mark & Dynamic Percentage Counter */}
                    <div
                        style={{
                            position: 'absolute',
                            top: `${(progress / 100) * trackHeight}px`,
                            left: '2px',
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            alignItems: 'center',
                            pointerEvents: 'none',
                            transition: 'top 0.08s ease-out',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {/* Horizontal Tick */}
                        <div
                            style={{
                                width: '8px',
                                height: '2px',
                                background: progress > 50 ? '#EC4899' : '#8B5CF6',
                                borderRadius: '1px',
                                boxShadow: '0 0 4px rgba(236, 72, 153, 0.6)'
                            }}
                        />

                        {/* Percentage Number */}
                        <span
                            style={{
                                marginLeft: '6px',
                                fontSize: '11.5px',
                                fontWeight: '700',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                color: progress > 50 ? '#EC4899' : '#8B5CF6',
                                lineHeight: 1,
                                letterSpacing: '-0.2px',
                                textShadow: '0 1px 3px rgba(0, 0, 0, 0.25), 0 0 10px rgba(255, 255, 255, 0.7)'
                            }}
                        >
                            {progress}
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 767px) {
                    .prominence_scroll_indicator {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    )
}
