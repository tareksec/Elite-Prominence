'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'

export default function AboutPage() {
  const pillars = [
    {
      title: 'Strategic Thinking',
      desc: 'We start with what matters.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      title: 'Tailored Solutions',
      desc: 'No templates. Just what works.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      ),
    },
    {
      title: 'Long-Term Focus',
      desc: 'Built for sustainable growth.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      ),
    },
    {
      title: 'Human-Centered',
      desc: 'Because people matter.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ]

  const team = [
    {
      name: 'Ayesha Rahman',
      role: 'Founder & Strategy Lead',
      img: '/assets/images/team/team-1.jpg',
    },
    {
      name: 'Imran Hossain',
      role: 'Creative Director',
      img: '/assets/images/team/team-2.jpg',
    },
    {
      name: 'Nusrat Jahan',
      role: 'SEO & Content Lead',
      img: '/assets/images/team/team-3.jpg',
    },
    {
      name: 'Rafiul Islam',
      role: 'Tech Lead',
      img: '/assets/images/team/team-4.jpg',
    },
  ]

  return (
    <div className="mlab-page">
      <ModernHeader activeNav="about" />

      {/* =========================================================================
          HERO INTRO SECTION
      ========================================================================= */}
      <section className="py-5">
        <div className="mlab-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> ABOUT US
              </span>
              <h1 className="editorial-page-title">
                A modern agency for a more influential tomorrow.
              </h1>
              <p className="editorial-page-desc">
                We&apos;re a team of strategists, creatives and technologists on a mission to help leaders and brands stand out, build trust and create long-term value in the digital world.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="position-relative d-flex justify-content-center">
                {/* Pink glow circle */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '320px',
                    height: '320px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,59,129,0.3) 0%, rgba(255,59,129,0) 70%)',
                    zIndex: 0,
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.1)',
                    maxWidth: '480px',
                    width: '100%',
                    height: '320px',
                  }}
                >
                  <Image
                    src="/assets/images/resource/about_banner_image.jpg"
                    alt="Prominence Strategic Advisory Team"
                    fill
                    className="object-fit-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4 VALUE PILLARS
      ========================================================================= */}
      <section className="py-4">
        <div className="mlab-container">
          <div className="row g-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="value-pillar-card">
                  <div className="value-pillar-icon">
                    {pillar.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#121316', marginBottom: '8px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: 1.5 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR METHODOLOGY SECTION
      ========================================================================= */}
      <section className="py-5 my-4">
        <div className="mlab-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: '340px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                }}
              >
                <Image
                  src="/assets/images/project/project_1.jpg"
                  alt="Modern Strategy Office"
                  fill
                  className="object-fit-cover"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> OUR METHODOLOGY
              </span>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 800, color: '#121316', letterSpacing: '-1px', marginBottom: '20px' }}>
                Strategy. Visibility.<br />Authority. Protection.
              </h2>
              <p style={{ fontSize: '15.5px', color: '#4B5563', lineHeight: 1.65, marginBottom: '32px' }}>
                We combine data, creativity and technical expertise to build digital ecosystems that work — for today and tomorrow.
              </p>
              <Link href="/how-it-works" className="prominence-btn-outline">
                <span>Learn About Our Process</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR TEAM SECTION
      ========================================================================= */}
      <section className="py-5 mb-5">
        <div className="mlab-container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
            <div>
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> OUR TEAM
              </span>
              <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 800, color: '#121316', letterSpacing: '-0.8px', margin: 0 }}>
                Experts in strategy,<br />creativity and technology.
              </h2>
            </div>
            <p style={{ fontSize: '14.5px', color: '#6B7280', maxWidth: '380px', margin: 0 }}>
              A multidisciplinary team with deep expertise in branding, SEO, content, development and digital strategy.
            </p>
          </div>

          <div className="row g-4">
            {team.map((member, idx) => (
              <div key={idx} className="col-6 col-lg-3">
                <div className="modern-team-card">
                  <div className="modern-team-avatar-wrapper">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="modern-team-avatar"
                      sizes="130px"
                    />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#121316', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#FF3B81', fontWeight: 600, margin: 0 }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}