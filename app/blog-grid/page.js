'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
import { BLOG_ARTICLES } from '@/lib/blogData'

export default function BlogGridPage() {
  const featuredArticles = [
    {
      title: 'How Executives Can Build Trust Through Digital Presence',
      date: 'Aug 28, 2025',
      category: 'Reputation',
      slug: '/blog/from-corporate-executive-to-board-advisor',
      img: '/assets/images/resource/testimonial-1.jpg',
      desc: 'Strategic insights into why owned digital stature is the single highest-ROI asset for enterprise leadership.',
    },
    {
      title: 'SEO Strategies for Long-Term Authority',
      date: 'Aug 19, 2025',
      category: 'SEO',
      slug: '/blog/chief-technology-officer-personal-brand',
      img: '/assets/images/project/project_2.jpg',
      desc: 'How search knowledge panels and high-intent keyword ownership protect executives against reputation volatility.',
    },
    {
      title: 'The Future of Personal Branding for Founders',
      date: 'Aug 12, 2025',
      category: 'Branding',
      slug: '/blog/c-suite-linkedin-algorithm-strategy-2026',
      img: '/assets/images/project/project_1.jpg',
      desc: 'Navigating algorithmic changes, thought leadership integrity, and modern investor-facing authority.',
    },
  ]

  return (
    <div className="mlab-page">
      <ModernHeader activeNav="insights" />

      {/* =========================================================================
          INSIGHTS HEADER INTRO
      ========================================================================= */}
      <section className="py-5">
        <div className="mlab-container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-5 gap-4">
            <div style={{ maxWidth: '620px' }}>
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> INSIGHTS
              </span>
              <h1 className="editorial-page-title mb-0">
                Ideas, trends and strategies for a stronger digital presence.
              </h1>
            </div>
            <Link href="/contact" className="d-flex align-items-center gap-2 text-decoration-none fw-bold text-dark">
              <span>Explore all advisory insights</span>
              <span style={{ color: '#FF3B81' }}>&rarr;</span>
            </Link>
          </div>

          {/* =====================================================================
              FEATURED ARTICLES GRID
          ===================================================================== */}
          <div className="row g-4 mb-5">
            {featuredArticles.map((post, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <Link href={post.slug} className="text-decoration-none">
                  <article className="modern-case-card">
                    <div className="modern-case-img-box">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-fit-cover"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                    <div className="modern-case-body">
                      <div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 600 }}>
                            {post.date}
                          </span>
                          <span
                            style={{
                              fontSize: '10.5px',
                              fontWeight: 800,
                              letterSpacing: '1px',
                              color: '#FF3B81',
                              textTransform: 'uppercase',
                              backgroundColor: '#FFF0F5',
                              padding: '2px 8px',
                              borderRadius: '9999px',
                            }}
                          >
                            {post.category}
                          </span>
                        </div>
                        <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#121316', margin: '0 0 10px', lineHeight: 1.35 }}>
                          {post.title}
                        </h2>
                        <p style={{ fontSize: '13.5px', color: '#6B7280', margin: '0 0 16px', lineHeight: 1.5 }}>
                          {post.desc}
                        </p>
                      </div>

                      <div className="d-flex align-items-center gap-2" style={{ fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                        <span>Read article</span>
                        <span style={{ color: '#FF3B81' }}>&rarr;</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>

          {/* Complete 17-Article Executive Knowledge Base */}
          <div className="mt-5 pt-3">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#121316', margin: '0 0 6px' }}>
                  All Executive Insights &amp; Protocols ({BLOG_ARTICLES.length} Articles)
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
                  Grounded research across GEO, Answer Engine Optimization, C-Suite reputation, and boardroom governance.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {BLOG_ARTICLES.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <Link href={`/blog/${item.slug}`} className="text-decoration-none">
                    <div className="p-4 bg-white rounded-4 border h-100 transition-all hover-shadow d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '0.8px', background: '#FFF0F5', padding: '2px 8px', borderRadius: '4px' }}>
                            {item.category}
                          </span>
                          <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
                            {item.readTime || '5 min read'}
                          </span>
                        </div>
                        <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#121316', margin: '10px 0 8px', lineHeight: 1.4 }}>
                          {item.title}
                        </h4>
                        <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 16px', lineHeight: 1.55 }}>
                          {item.excerpt ? item.excerpt.slice(0, 115) + '...' : ''}
                        </p>
                      </div>

                      <div className="d-flex align-items-center gap-2 pt-2 border-top" style={{ fontSize: '12.5px', fontWeight: 700, color: '#121316' }}>
                        <span>Read full protocol</span>
                        <span style={{ color: '#FF3B81' }}>&rarr;</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}