'use client'
import React, { useEffect, useState } from 'react'

export default function Preloader() {
    const [loading, setLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)
    const [isFirstEntry, setIsFirstEntry] = useState(true)

    useEffect(() => {
        // Detect if user has already visited in this session
        const hasVisited = typeof window !== 'undefined' && sessionStorage.getItem('ep_visited_session')
        const firstEntry = !hasVisited
        setIsFirstEntry(firstEntry)

        if (firstEntry && typeof window !== 'undefined') {
            sessionStorage.setItem('ep_visited_session', 'true')
        }

        // 1.5s on first entry, 0.5s on subsequent loads
        const activeDuration = firstEntry ? 1500 : 500
        const fadeDuration = 500 // 0.5s smooth dissolve

        const fadeTimer = setTimeout(() => {
            setFadeOut(true)
        }, activeDuration)

        const removeTimer = setTimeout(() => {
            setLoading(false)
        }, activeDuration + fadeDuration)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(removeTimer)
        }
    }, [])

    if (!loading) return null

    return (
        <div
            className={`loader-wrap prominence_preloader ${fadeOut ? 'loaded-fade' : ''}`}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999999,
                backgroundColor: '#0D0D14',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: fadeOut ? 0 : 1,
                visibility: loading ? 'visible' : 'hidden',
                transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: fadeOut ? 'scale(1.02)' : 'scale(1)',
                pointerEvents: fadeOut ? 'none' : 'auto'
            }}
        >
            {/* Close Fallback Button */}
            <button
                type="button"
                className="preloader-close"
                onClick={() => setLoading(false)}
                title="Skip Loading"
                style={{
                    position: 'fixed',
                    right: '20px',
                    top: '20px',
                    zIndex: 99999999,
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(8px)'
                }}
            >
                ✕
            </button>

            <div id="handle-preloader" className="handle-preloader" style={{ position: 'relative', textAlign: 'center' }}>
                <div className="animation-preloader">
                    {/* Glowing Logo Emblem & Orbiting Ring */}
                    <div style={{ position: 'relative', width: '130px', height: '130px', margin: '0 auto 36px' }}>
                        {/* Spinning Ambient Ring */}
                        <div
                            className="spinner"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                margin: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                border: '2.5px solid rgba(255, 255, 255, 0.08)',
                                borderTopColor: '#8B5CF6',
                                borderRightColor: '#EC4899',
                                animation: 'spinner 1.2s infinite linear',
                                boxShadow: '0 0 25px rgba(139, 92, 246, 0.25)'
                            }}
                        />

                        {/* Centered Brand Icon */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src="/assets/images/Elite%20Prominence/EliteProminence-iocn.png"
                                alt="Elite Prominence"
                                style={{
                                    width: '46px',
                                    height: 'auto',
                                    display: 'block',
                                    filter: 'drop-shadow(0 0 12px rgba(236, 72, 153, 0.45))'
                                }}
                            />
                        </div>
                    </div>

                    {/* Animated ELITE PROMINENCE Wordmark */}
                    <div className="txt-loading" style={{ userSelect: 'none' }}>
                        {/* Word 1: ELITE */}
                        <div className="word-loading" style={{ display: 'inline-block' }}>
                            <span data-text-preloader="E" className="letters-loading letter-1">E</span>
                            <span data-text-preloader="L" className="letters-loading letter-2">L</span>
                            <span data-text-preloader="I" className="letters-loading letter-3">I</span>
                            <span data-text-preloader="T" className="letters-loading letter-4">T</span>
                            <span data-text-preloader="E" className="letters-loading letter-5">E</span>
                        </div>

                        {/* Word Separator Spacer */}
                        <span className="word-separator" style={{ display: 'inline-block', width: 'clamp(10px, 1.8vw, 20px)' }} />

                        {/* Word 2: PROMINENCE */}
                        <div className="word-loading" style={{ display: 'inline-block' }}>
                            <span data-text-preloader="P" className="letters-loading letter-6">P</span>
                            <span data-text-preloader="R" className="letters-loading letter-7">R</span>
                            <span data-text-preloader="O" className="letters-loading letter-8">O</span>
                            <span data-text-preloader="M" className="letters-loading letter-9">M</span>
                            <span data-text-preloader="I" className="letters-loading letter-10">I</span>
                            <span data-text-preloader="N" className="letters-loading letter-11">N</span>
                            <span data-text-preloader="E" className="letters-loading letter-12">E</span>
                            <span data-text-preloader="N" className="letters-loading letter-13">N</span>
                            <span data-text-preloader="C" className="letters-loading letter-14">C</span>
                            <span data-text-preloader="E" className="letters-loading letter-15">E</span>
                        </div>
                    </div>

                    {/* Executive Subtitle */}
                    <div
                        style={{
                            marginTop: '16px',
                            fontSize: 'clamp(10px, 1.3vw, 12px)',
                            fontWeight: '600',
                            letterSpacing: 'clamp(2px, 0.4vw, 4px)',
                            color: 'rgba(255, 255, 255, 0.6)',
                            textTransform: 'uppercase',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        }}
                    >
                        Executive Personal Branding & Advisory
                    </div>

                    {/* Progress Bar Track */}
                    <div
                        style={{
                            width: 'clamp(180px, 24vw, 240px)',
                            height: '2px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '2px',
                            margin: '22px auto 0',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <div
                            className="preloader-progress-bar"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                                borderRadius: '2px',
                                boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)',
                                animationDuration: isFirstEntry ? '1.5s' : '0.5s'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
