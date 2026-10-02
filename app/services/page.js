'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'

export default function ServicesPage() {
  const servicesList = [
    {
      num: '01',
      title: 'Executive Digital HQ',
      desc: 'Bespoke executive personal website and digital headquarters that represents you before you enter the room.',
      slug: '/services/executive-digital-hq',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Executive Search & SEO Dominance',
      desc: 'Claim Google Page 1, Google Knowledge Graph, and eliminate reputation ambiguity across search engines.',
      slug: '/services/executive-seo',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'LinkedIn Thought Leadership',
      desc: 'Editorial ghostwriting and strategic C-suite narrative architecture for senior enterprise decision-makers.',
      slug: '/services/linkedin-authority',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Digital Reputation & Defense',
      desc: 'Proactive digital threat mitigation, executive crisis defense, and suppression of misleading narratives.',
      slug: '/services/digital-reputation',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Tier-1 Media & PR Placements',
      desc: 'Securing authoritative features in Forbes, Bloomberg, FT, and top-tier global industry publications.',
      slug: '/services/media-pr-placement',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      ),
    },
    {
      num: '06',
      title: 'Board-Readiness & Governance Bio',
      desc: 'Transform operational resumes into compelling boardroom dossiers tailored for Nominations Committees.',
      slug: '/services/board-readiness-bio',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      num: '07',
      title: 'Advisory & Equity Monetization',
      desc: 'Productize C-suite expertise into premium advisory board appointments and fractional executive retainers.',
      slug: '/services/advisory-monetization',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      ),
    },
  ]

  return (
    <div className="mlab-page">
      <ModernHeader activeNav="services" />

      {/* =========================================================================
          SERVICES HEADER INTRO
      ========================================================================= */}
      <section className="py-5">
        <div className="mlab-container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-4">
            <div style={{ maxWidth: '620px' }}>
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> SERVICES
              </span>
              <h1 className="editorial-page-title mb-0">
                Strategic services for lasting digital influence.
              </h1>
            </div>
            <p className="editorial-page-desc mb-0" style={{ maxWidth: '420px' }}>
              From reputation management to search visibility, we offer end-to-end digital solutions designed to position you where it matters most.
            </p>
          </div>

          {/* =====================================================================
              5 STACKED FULL-WIDTH SERVICE ROWS
          ===================================================================== */}
          <div className="d-flex flex-column gap-3 mb-5 pb-3">
            {servicesList.map((srv, idx) => (
              <Link href={srv.slug} key={idx} className="service-stacked-item">
                <div className="d-flex align-items-center gap-4">
                  <div className="service-stacked-icon">
                    {srv.icon}
                  </div>
                  <span className="service-stacked-num">{srv.num}</span>
                  <div>
                    <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#121316', margin: '0 0 4px', letterSpacing: '-0.3px' }}>
                      {srv.title}
                    </h2>
                    <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
                      {srv.desc}
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2" style={{ fontSize: '13.5px', fontWeight: 700, color: '#121316', whiteSpace: 'nowrap' }}>
                  <span>Learn more</span>
                  <span style={{ color: '#FF3B81' }}>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>

          {/* =====================================================================
              DARK CUSTOM SOLUTION CTA BANNER
          ===================================================================== */}
          <div className="custom-solution-cta my-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                {/* Hot pink star */}
                <div className="mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF3B81">
                    <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" />
                  </svg>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px', marginBottom: '12px' }}>
                  Need a custom solution?
                </h2>
                <p style={{ fontSize: '15px', color: '#9CA3AF', marginBottom: '28px' }}>
                  Let&apos;s build your digital presence, your way.
                </p>
                <Link href="/contact" className="prominence-btn-primary">
                  <span>Book a Consultation</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              <div className="col-lg-5 d-none d-lg-block">
                <div
                  style={{
                    position: 'relative',
                    height: '180px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/assets/images/project/project_1.jpg"
                    alt="Custom Executive Architecture"
                    fill
                    className="object-fit-cover"
                    sizes="400px"
                  />
                  {/* Neon overlay circle arc */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle at 10% 90%, rgba(255,59,129,0.3) 0%, transparent 60%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}