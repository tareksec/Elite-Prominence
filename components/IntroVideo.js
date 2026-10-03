'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'

export default function IntroVideo() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const videoRef = useRef(null)
  const closedRef = useRef(false)
  const timerRef = useRef(null)
  const warmupRef = useRef(null)

  const handleClose = useCallback(() => {
    if (closedRef.current) return
    closedRef.current = true

    // 1. Permanently record across browser sessions
    try {
      localStorage.setItem('elite_intro_played', 'true')
      sessionStorage.setItem('introSeen', 'true')
      document.cookie = 'elite_intro_played=true; path=/; max-age=315360000; SameSite=Lax'
    } catch (e) {
      // Ignore storage errors
    }

    // 2. Unlock scroll immediately
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }

    // 3. Immediately awaken background page, Lenis & AOS
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('resize'))
      window.dispatchEvent(new Event('scroll'))
      if (window.AOS) {
        if (typeof window.AOS.refreshHard === 'function') {
          window.AOS.refreshHard()
        } else if (typeof window.AOS.refresh === 'function') {
          window.AOS.refresh()
        }
      }
    }

    // 4. Snappy cinematic dissolve
    setIsClosing(true)

    // 5. Completely unmount from DOM immediately after transition
    setTimeout(() => {
      setIsVisible(false)
    }, 350)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Check permanent storage (localStorage, sessionStorage, cookie)
    let hasSeenIntro = false
    try {
      hasSeenIntro =
        localStorage.getItem('elite_intro_played') === 'true' ||
        sessionStorage.getItem('introSeen') === 'true' ||
        document.cookie.includes('elite_intro_played=true')
    } catch (e) {
      hasSeenIntro = false
    }

    if (prefersReducedMotion || hasSeenIntro) {
      closedRef.current = true
      setIsVisible(false)
      return
    }

    // First time visitor: Immediately mark as played so it NEVER triggers again
    try {
      localStorage.setItem('elite_intro_played', 'true')
      sessionStorage.setItem('introSeen', 'true')
      document.cookie = 'elite_intro_played=true; path=/; max-age=315360000; SameSite=Lax'
    } catch (e) {}

    // Show intro overlay
    setIsVisible(true)

    // Lock page scroll while intro is playing
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    // Background pre-warmup: while video is playing, awaken page assets
    warmupRef.current = setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
      if (window.AOS && typeof window.AOS.refresh === 'function') {
        window.AOS.refresh()
      }
    }, 1200)

    // Fallback safety timeout (8.2s maximum)
    timerRef.current = setTimeout(() => {
      handleClose()
    }, 8200)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (warmupRef.current) clearTimeout(warmupRef.current)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [handleClose])

  // Trigger dissolve 0.4s before the video reaches the end for seamless zero-latency handoff
  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (video && video.duration > 0) {
      if (video.currentTime >= video.duration - 0.4) {
        handleClose()
      }
    }
  }

  const handleMetadata = () => {
    const video = videoRef.current
    if (video && video.duration > 0) {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        handleClose()
      }, Math.ceil((video.duration + 0.05) * 1000))
    }
  }

  if (!isVisible) return null

  return (
    <div
      key="intro-video-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        zIndex: 9999999,
        backgroundColor: '#e9e2d3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: isClosing ? 0 : 1,
        pointerEvents: isClosing ? 'none' : 'auto',
        transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Brand introduction"
    >
      <video
        ref={(el) => {
          videoRef.current = el
          if (el && !closedRef.current) {
            el.muted = true
            el.defaultMuted = true
            el.playsInline = true
            const p = el.play()
            if (p !== undefined) {
              p.catch(() => handleClose())
            }
          }
        }}
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleMetadata}
        onEnded={handleClose}
        onError={() => {
          handleClose()
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          backgroundColor: '#e9e2d3',
        }}
      >
        <source src="/new/intro.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

