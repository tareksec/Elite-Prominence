'use client'

import React from 'react'
import Image from 'next/image'

export default function HeroVisual() {
  return (
    <div className="hero-artwork-container position-relative" aria-label="Executive Digital Identity Visual Artwork">
      {/* =========================================================================
          BACKGROUND CONSTELLATION & CALLOUT CONNECTOR NETWORK (SVG)
      ========================================================================= */}
      <svg
        viewBox="0 0 640 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-connectors-svg position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 3, pointerEvents: 'none' }}
      >
        {/* EXECUTIVE AUTHORITY connector */}
        <line x1="165" y1="42" x2="230" y2="42" stroke="#121316" strokeWidth="1" opacity="0.6" />
        <line x1="230" y1="42" x2="295" y2="92" stroke="#FF3B81" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="230" cy="42" r="3" fill="#FF3B81" />

        {/* DIGITAL HQ connector */}
        <line x1="535" y1="42" x2="495" y2="82" stroke="#121316" strokeWidth="1" opacity="0.6" />
        <circle cx="535" cy="42" r="3" fill="#FF3B81" />

        {/* SEARCH PRESENCE connector */}
        <line x1="565" y1="232" x2="520" y2="258" stroke="#121316" strokeWidth="1" opacity="0.6" />
        <circle cx="565" cy="232" r="3" fill="#FF3B81" />

        {/* TRUST SIGNAL connector */}
        <line x1="540" y1="412" x2="495" y2="412" stroke="#121316" strokeWidth="1" opacity="0.6" />
        <line x1="495" y1="412" x2="435" y2="385" stroke="#FF3B81" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="495" cy="412" r="3" fill="#FF3B81" />

        {/* Constellation web extending to the left */}
        <line x1="150" y1="215" x2="105" y2="260" stroke="#FF3B81" strokeWidth="1" opacity="0.4" />
        <line x1="105" y1="260" x2="140" y2="330" stroke="#121316" strokeWidth="0.8" opacity="0.3" strokeDasharray="2 3" />
        <circle cx="105" cy="260" r="2.5" fill="#FF3B81" opacity="0.7" />
      </svg>

      {/* =========================================================================
          CALLOUT TAG 1: EXECUTIVE AUTHORITY (TOP LEFT)
      ========================================================================= */}
      <div
        className="position-absolute hero-callout-tag"
        style={{ top: '30px', left: '18px', zIndex: 10 }}
      >
        <span className="hero-editorial-label">
          EXECUTIVE AUTHORITY
        </span>
      </div>

      {/* =========================================================================
          CALLOUT TAG 2: DIGITAL HQ (TOP RIGHT)
      ========================================================================= */}
      <div
        className="position-absolute hero-callout-tag"
        style={{ top: '30px', right: '15px', zIndex: 10 }}
      >
        <span className="hero-editorial-label">
          DIGITAL HQ
        </span>
      </div>

      {/* =========================================================================
          CORE ARTWORK: EXECUTIVE DIGITAL IDENTITY COLLAGE PNG
      ========================================================================= */}
      <div className="hero-main-collage-wrapper">
        <Image
          src="/assets/images/executive-digital-identity-collage.png"
          alt="Executive Digital Identity Collage"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
          className="hero-main-collage-img"
        />

        {/* =======================================================================
            3D EDITORIAL MAGNIFYING GLASS OVER SEARCH BAR (MATCHING MOCKUP)
        ======================================================================= */}
        <div
          className="hero-magnifier-overlay position-absolute"
          aria-hidden="true"
        >
          <svg width="105" height="155" viewBox="0 0 105 155" fill="none">
            <defs>
              <filter id="glass-depth" x="-10%" y="-10%" width="140%" height="140%">
                <feDropShadow dx="2" dy="8" stdDeviation="8" floodColor="rgba(0,0,0,0.3)" />
              </filter>
              <linearGradient id="metal-rim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A4E58" />
                <stop offset="40%" stopColor="#1E2024" />
                <stop offset="70%" stopColor="#2D3037" />
                <stop offset="100%" stopColor="#101114" />
              </linearGradient>
              <linearGradient id="handle-wood" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#121316" />
                <stop offset="35%" stopColor="#2A2C33" />
                <stop offset="70%" stopColor="#18191D" />
                <stop offset="100%" stopColor="#0B0C0E" />
              </linearGradient>
            </defs>

            {/* Magnifying Glass Shadow & Rim */}
            <g filter="url(#glass-depth)">
              {/* Outer metal rim */}
              <circle cx="48" cy="48" r="42" stroke="url(#metal-rim)" strokeWidth="7" fill="none" />
              {/* Inner highlight rim */}
              <circle cx="48" cy="48" r="38.5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.45" fill="none" />

              {/* Glass surface reflection shine */}
              <path
                d="M 22 28 A 36 36 0 0 1 74 34"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* Metal neck connector */}
              <path d="M 75 75 L 82 82" stroke="url(#metal-rim)" strokeWidth="10" strokeLinecap="round" />

              {/* Angled Dark Handle (pointing down-right) */}
              <rect
                x="80"
                y="80"
                width="14"
                height="56"
                rx="6"
                transform="rotate(-45 80 80)"
                fill="url(#handle-wood)"
              />
              {/* Handle light reflection stripe */}
              <rect
                x="83"
                y="83"
                width="3"
                height="50"
                rx="1.5"
                transform="rotate(-45 80 80)"
                fill="#5A5D66"
                opacity="0.5"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* =========================================================================
          CALLOUT TAG 3: SEARCH PRESENCE (RIGHT)
      ========================================================================= */}
      <div
        className="position-absolute hero-callout-tag"
        style={{ top: '220px', right: '-12px', zIndex: 10 }}
      >
        <span className="hero-editorial-label">
          SEARCH PRESENCE
        </span>
      </div>

      {/* =========================================================================
          CALLOUT TAG 4: TRUST SIGNAL (BOTTOM RIGHT)
      ========================================================================= */}
      <div
        className="position-absolute hero-callout-tag"
        style={{ bottom: '38px', right: '18px', zIndex: 10 }}
      >
        <span className="hero-editorial-label">
          TRUST SIGNAL
        </span>
      </div>
    </div>
  )
}
