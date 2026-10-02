'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
import { SOLUTIONS_DATA } from '@/lib/solutionsData'

export default function SolutionsPage() {
  const roleCards = [
    {
      title: 'Chief Executive Officers',
      role: 'CEOs & Managing Directors',
      slug: '/solutions/ceos',
      desc: 'Build sovereign investor confidence, protect valuation, and lead industry discourse outside official corporate filings.',
      badge: 'Enterprise Leadership',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: 'Chief Human Resources Officers',
      role: 'CHROs & Chief People Officers',
      slug: '/solutions/chros',
      desc: 'Attract elite executive talent, establish human capital governance authority, and position for future corporate board directorships.',
      badge: 'Talent & Governance',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Enterprise Founders',
      role: 'Founders & Managing Partners',
      slug: '/solutions/founders',
      desc: 'Turn technical innovation into founder-led market dominance, attract institutional capital, and create lasting brand equity.',
      badge: 'Venture & Scale',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: 'Senior Corporate Executives',
      role: 'C-Suite, EVPs & SVPs',
      slug: '/solutions/executives',
      desc: 'Position for C-suite promotions, secure independent board committee seats, and build an owned digital asset independent of your current employer.',
      badge: 'Career Sovereignty',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: 'Independent Consultants',
      role: 'Advisors & Keynote Speakers',
      slug: '/solutions/consultants',
      desc: 'Command premium retainer pricing, dominate high-intent executive search queries, and convert digital stature into high-ticket inbound engagements.',
      badge: 'Advisory Retainers',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ]

  return (
    <div className="mlab-page">
      <ModernHeader activeNav="solutions" />

      {/* =========================================================================
          HERO INTRO SECTION
      ========================================================================= */}
      <section className="py-5">
        <div className="mlab-container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-4">
            <div style={{ maxWidth: '640px' }}>
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> TAILORED SOLUTIONS
              </span>
              <h1 className="editorial-page-title mb-0">
                Built for leaders shaping enterprise outcomes.
              </h1>
            </div>
            <p className="editorial-page-desc mb-0" style={{ maxWidth: '440px' }}>
              Every leadership archetype faces distinct reputational opportunities. Discover tailored authority architectures designed specifically for your mandate.
            </p>
          </div>

          {/* =====================================================================
              ROLE CARDS GRID
          ===================================================================== */}
          <div className="row g-4 mb-5">
            {roleCards.map((rc, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <Link href={rc.slug} className="text-decoration-none">
                  <div className="value-pillar-card d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="value-pillar-icon mb-0">
                          {rc.icon}
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', textTransform: 'uppercase' }}>
                          {rc.badge}
                        </span>
                      </div>
                      <h2 style={{ fontSize: '19px', fontWeight: 800, color: '#121316', marginBottom: '6px' }}>
                        {rc.title}
                      </h2>
                      <div style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: 600, marginBottom: '12px' }}>
                        {rc.role}
                      </div>
                      <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                        {rc.desc}
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 pt-4" style={{ fontSize: '13.5px', fontWeight: 700, color: '#121316' }}>
                      <span>Explore Solution</span>
                      <span style={{ color: '#FF3B81' }}>&rarr;</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* =====================================================================
              DARK CTA BANNER
          ===================================================================== */}
          <div className="custom-solution-cta my-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="editorial-badge text-white-50">
                  <span className="editorial-badge-dot">✦</span> PRIVATE MANDATE
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 850, color: '#FFFFFF', marginBottom: '14px' }}>
                  Need a bespoke advisory roadmap?
                </h2>
                <p style={{ fontSize: '15px', color: '#9CA3AF', marginBottom: '28px' }}>
                  Speak directly with our Managing Partners to craft a sovereign personal positioning strategy.
                </p>
                <Link href="/contact" className="prominence-btn-primary">
                  <span>Book Private Consultation</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              <div className="col-lg-5 d-none d-lg-block">
                <div style={{ position: 'relative', height: '180px', borderRadius: '18px', overflow: 'hidden' }}>
                  <Image
                    src="/assets/images/project/project_5.jpg"
                    alt="Executive Architecture"
                    fill
                    className="object-fit-cover"
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
