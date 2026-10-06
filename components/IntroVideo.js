'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'

export default function IntroVideo() {
  const [isVisible, setIsVisible] = useState(true)
  const [isClosing, setIsClosing] = useState(false)
  const videoRef = useRef(null)
  const closedRef = useRef(false)
  const timerRef = useRef(null)
  const warmupRef = useRef(null)

  const handleClose = useCallback(() => {
    if (closedRef.current) return
    closedRef.current = true

    if (videoRef.current) {
      try {
        videoRef.current.pause()
      } catch (e) {}
    }

    // 1. Record for current browser session
    try {
      sessionStorage.setItem('introSeen', 'true')
    } catch (e) {
      // Ignore storage errors
    }

    // 2. Unlock scroll immediately
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('intro-already-seen')
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
    if (prefersReducedMotion) {
      handleClose()
      return
    }

    // Clear any stale legacy locks
    try {
      localStorage.removeItem('elite_intro_played')
      document.cookie = 'elite_intro_played=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    } catch (e) {}

    // Lock page scroll while intro is playing
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    // Play video smoothly using the browser's native source selection
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.defaultMuted = true
      video.playsInline = true

      if (video.paused) {
        const p = video.play()
        if (p !== undefined) {
          p.catch(() => {
            // Autoplay catch: keep video mounted and ready
          })
        }
      }
    }

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
      id="intro-video-overlay"
      key="intro-video-overlay"
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        zIndex: 99999999,
        backgroundColor: '#e9e2d3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'default',
        opacity: isClosing ? 0 : 1,
        pointerEvents: isClosing ? 'none' : 'auto',
        transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Brand introduction"
    >
      {/* Full-bleed edge-to-edge intro video container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e9e2d3',
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleMetadata}
          onEnded={handleClose}
          onError={() => {
            handleClose()
          }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100vw',
            height: '100dvh',
            minWidth: '100vw',
            minHeight: '100dvh',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            backgroundColor: '#e9e2d3',
          }}
        >
          <source src="/new/mobile-intro.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/new/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

