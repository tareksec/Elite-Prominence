'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filterTabs = ['All', 'Reputation', 'SEO', 'Branding', 'Web']

  const allCaseStudies = [
    {
      title: 'TechVRS',
      subtitle: 'Executive Digital Presence & Authority',
      category: 'Reputation',
      img: '/assets/images/project/project_1.jpg',
      slug: '/case-studies/tech-founder-investor-authority',
    },
    {
      title: 'Tasneem Knit Industry',
      subtitle: 'SEO Growth & Content Strategy',
      category: 'SEO',
      img: '/assets/images/project/project_2.jpg',
      slug: '/case-studies/chro-to-boardroom-authority',
    },
    {
      title: 'ArtX',
      subtitle: 'Brand Identity & Web Presence',
      category: 'Branding',
      img: '/assets/images/project/project_3.jpg',
      slug: '/case-studies/independent-consultant-pricing-power',
    },
    {
      title: 'Somriddhi',
      subtitle: 'SEO & Content Strategy',
      category: 'SEO',
      img: '/assets/images/project/project_4.jpg',
      slug: '/case-studies/tech-founder-investor-authority',
    },
    {
      title: 'Prominence Agency',
      subtitle: 'Website Design & Development',
      category: 'Web',
      img: '/assets/images/project/project_5.jpg',
      slug: '/case-studies/chro-to-boardroom-authority',
    },
    {
      title: 'Biniyog Briddhi',
      subtitle: 'Digital Presence & Brand Strategy',
      category: 'Reputation',
      img: '/assets/images/project/project_6.jpg',
      slug: '/case-studies/independent-consultant-pricing-power',
    },
  ]

  const filtered = activeFilter === 'All'
    ? allCaseStudies
    : allCaseStudies.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase())

  return (
    <div className="mlab-page">
      <ModernHeader activeNav="case-studies" />

      {/* =========================================================================
          CASE STUDIES HEADER INTRO
      ========================================================================= */}
      <section className="py-5">
        <div className="mlab-container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-4 gap-4">
            <div style={{ maxWidth: '580px' }}>
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> CASE STUDIES
              </span>
              <h1 className="editorial-page-title mb-0">
                Real results.<br />Lasting impact.
              </h1>
            </div>
            <p className="editorial-page-desc mb-0" style={{ maxWidth: '440px' }}>
              We&apos;ve helped businesses, founders and executives across industries build stronger digital presence, rank higher and earn greater trust.
            </p>
          </div>

          {/* =====================================================================
              CATEGORY FILTER PILLS
          ===================================================================== */}
          <div className="d-flex flex-wrap align-items-center gap-2 mb-5">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  style={{
                    backgroundColor: isActive ? '#FF3B81' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#121316',
                    border: `1.5px solid ${isActive ? '#FF3B81' : 'rgba(18,19,22,0.1)'}`,
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          {/* =====================================================================
              6 CASE STUDIES GRID
          ===================================================================== */}
          <div className="row g-4 mb-5">
            {filtered.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <Link href={item.slug} className="text-decoration-none">
                  <article className="modern-case-card">
                    <div className="modern-case-img-box">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-fit-cover"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                    <div className="modern-case-body">
                      <div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span
                            style={{
                              fontSize: '10.5px',
                              fontWeight: 800,
                              letterSpacing: '1px',
                              color: '#FF3B81',
                              textTransform: 'uppercase',
                            }}
                          >
                            {item.category}
                          </span>
                        </div>
                        <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#121316', margin: '0 0 6px' }}>
                          {item.title}
                        </h2>
                        <p style={{ fontSize: '13.5px', color: '#6B7280', margin: '0 0 16px' }}>
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="d-flex align-items-center gap-2" style={{ fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                        <span>View case study</span>
                        <span style={{ color: '#FF3B81' }}>&rarr;</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-3 mb-5">
            <Link href="/contact" className="prominence-btn-outline">
              <span>View all case studies</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}
