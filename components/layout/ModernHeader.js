'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ModernHeader({ activeNav = '' }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileNavOpen(false)
        setActiveDropdown(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {/* Mobile Navigation Drawer */}
      <div
        className={`mlab-mobile-overlay ${isMobileNavOpen ? 'open' : ''}`}
        onClick={() => setIsMobileNavOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`mlab-mobile-drawer ${isMobileNavOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        style={{ overflowY: 'auto' }}
      >
        <div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF3B81">
                <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" />
              </svg>
              <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '2px', color: '#121316', fontFamily: 'sans-serif' }}>
                PROMINENCE
              </span>
            </Link>
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsMobileNavOpen(false)}
              aria-label="Close navigation menu"
            />
          </div>

          <ul className="mlab-mobile-links list-unstyled mb-4">
            {/* Services Group */}
            <li className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <Link href="/services" className={`mlab-mobile-link fw-bold ${activeNav === 'services' ? 'active' : ''}`} onClick={() => setIsMobileNavOpen(false)}>
                  Services
                </Link>
              </div>
              <ul className="list-unstyled ps-3 mt-1 d-flex flex-column gap-1" style={{ fontSize: '13px' }}>
                <li><Link href="/services/executive-digital-hq" className="text-secondary text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>Executive Digital HQ</Link></li>
                <li><Link href="/services/digital-reputation" className="text-secondary text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>Digital Reputation</Link></li>
                <li><Link href="/services/linkedin-authority" className="text-secondary text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>LinkedIn Authority</Link></li>
                <li><Link href="/services/executive-seo" className="text-secondary text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>Executive SEO</Link></li>
              </ul>
            </li>

            {/* Solutions Group */}
            <li className="mb-3">
              <Link href="/solutions" className={`mlab-mobile-link fw-bold ${activeNav === 'solutions' ? 'active' : ''}`} onClick={() => setIsMobileNavOpen(false)}>
                Solutions by Role
              </Link>
              <ul className="list-unstyled ps-3 mt-1 d-flex flex-column gap-1" style={{ fontSize: '13px' }}>
                <li><Link href="/solutions/ceos" className="text-secondary text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>CEOs &amp; Leaders</Link></li>
                <li><Link href="/solutions/chros" className="text-secondary text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>CHROs &amp; People Leaders</Link></li>
                <li><Link href="/solutions/founders" className="text-secondary text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>Founders &amp; Tech</Link></li>
                <li><Link href="/solutions/executives" className="text-secondary text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>Senior Executives</Link></li>
                <li><Link href="/solutions/consultants" className="text-secondary text-decoration-none" onClick={() => setIsMobileNavOpen(false)}>Consultants &amp; Coaches</Link></li>
              </ul>
            </li>

            <li>
              <Link href="/how-it-works" className={`mlab-mobile-link ${activeNav === 'methodology' ? 'active' : ''}`} onClick={() => setIsMobileNavOpen(false)}>
                Methodology
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className={`mlab-mobile-link ${activeNav === 'case-studies' ? 'active' : ''}`} onClick={() => setIsMobileNavOpen(false)}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blog-grid" className={`mlab-mobile-link ${activeNav === 'insights' ? 'active' : ''}`} onClick={() => setIsMobileNavOpen(false)}>
                Insights &amp; GEO
              </Link>
            </li>
            <li>
              <Link href="/about" className={`mlab-mobile-link ${activeNav === 'about' ? 'active' : ''}`} onClick={() => setIsMobileNavOpen(false)}>
                Firm
              </Link>
            </li>
          </ul>
        </div>

        <div className="pt-3 border-top">
          <Link
            href="/contact"
            className="prominence-btn-primary w-100 text-center mb-3"
            onClick={() => setIsMobileNavOpen(false)}
          >
            Private Consultation &rarr;
          </Link>

          <div className="d-flex align-items-center justify-content-center gap-3 pt-2">
            <a href="https://wa.me/8801645441584" target="_blank" rel="noopener noreferrer" className="text-dark d-flex align-items-center gap-1 text-decoration-none" style={{ fontSize: '12.5px', fontWeight: 600 }}>
              <span>WhatsApp: +880 1645-441584</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header className="mlab-header position-sticky top-0" style={{ zIndex: 1000, backgroundColor: '#FAF7F4', borderBottom: '1px solid rgba(18,19,22,0.06)' }}>
        <div className="mlab-container">
          <nav className="mlab-nav d-flex align-items-center justify-content-between" aria-label="Main Navigation">
            {/* Logo */}
            <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none" aria-label="Prominence Home">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF3B81">
                <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" />
              </svg>
              <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '2.5px', color: '#121316', fontFamily: 'sans-serif' }}>
                PROMINENCE
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="mlab-nav-links d-none d-lg-flex align-items-center gap-4 list-unstyled mb-0" role="list">
              {/* Services Item with Dropdown Hover */}
              <li
                className="position-relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/services"
                  className={`mlab-nav-link d-flex align-items-center gap-1 ${activeNav === 'services' ? 'active-link' : ''}`}
                >
                  <span>Services</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </Link>

                {activeDropdown === 'services' && (
                  <div
                    className="position-absolute bg-white rounded-3 shadow-lg border p-3"
                    style={{
                      top: '100%',
                      left: '0',
                      minWidth: '260px',
                      zIndex: 1001,
                      transform: 'translateY(10px)',
                      animation: 'fadeIn 0.2s ease-in-out',
                    }}
                  >
                    <div className="d-flex flex-column gap-2" style={{ fontSize: '13.5px' }}>
                      <Link href="/services/executive-digital-hq" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        Executive Digital HQ
                      </Link>
                      <Link href="/services/digital-reputation" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        Digital Reputation
                      </Link>
                      <Link href="/services/linkedin-authority" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        LinkedIn Authority
                      </Link>
                      <Link href="/services/executive-content" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        Content &amp; Ghostwriting
                      </Link>
                      <Link href="/services/executive-seo" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        Executive SEO &amp; Search
                      </Link>
                      <div className="border-top pt-2 mt-1">
                        <Link href="/services" className="text-pink fw-bold text-decoration-none p-1" style={{ color: '#FF3B81', fontSize: '12.5px' }}>
                          View All 7 Services &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Solutions Item with Dropdown Hover */}
              <li
                className="position-relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/solutions"
                  className={`mlab-nav-link d-flex align-items-center gap-1 ${activeNav === 'solutions' ? 'active-link' : ''}`}
                >
                  <span>Solutions</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </Link>

                {activeDropdown === 'solutions' && (
                  <div
                    className="position-absolute bg-white rounded-3 shadow-lg border p-3"
                    style={{
                      top: '100%',
                      left: '0',
                      minWidth: '270px',
                      zIndex: 1001,
                      transform: 'translateY(10px)',
                    }}
                  >
                    <div className="d-flex flex-column gap-2" style={{ fontSize: '13.5px' }}>
                      <Link href="/solutions/ceos" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        For CEOs &amp; Enterprise Leaders
                      </Link>
                      <Link href="/solutions/chros" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        For CHROs &amp; People Leaders
                      </Link>
                      <Link href="/solutions/founders" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        For Founders &amp; Tech Scaleups
                      </Link>
                      <Link href="/solutions/executives" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        For Senior Executives &amp; MDs
                      </Link>
                      <Link href="/solutions/consultants" className="text-dark text-decoration-none fw-semibold p-2 rounded hover-bg-light">
                        For Consultants &amp; Coaches
                      </Link>
                      <div className="border-top pt-2 mt-1">
                        <Link href="/solutions" className="text-pink fw-bold text-decoration-none p-1" style={{ color: '#FF3B81', fontSize: '12.5px' }}>
                          Explore Role Solutions &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link href="/how-it-works" className={`mlab-nav-link ${activeNav === 'methodology' ? 'active-link' : ''}`}>
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className={`mlab-nav-link ${activeNav === 'case-studies' ? 'active-link' : ''}`}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog-grid" className={`mlab-nav-link ${activeNav === 'insights' ? 'active-link' : ''}`}>
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className={`mlab-nav-link ${activeNav === 'about' ? 'active-link' : ''}`}>
                  Firm
                </Link>
              </li>
            </ul>

            {/* CTA & Social Quick Links */}
            <div className="d-flex align-items-center gap-3">
              {/* WhatsApp Quick Icon */}
              <a
                href="https://wa.me/8801645441584"
                target="_blank"
                rel="noopener noreferrer"
                className="d-none d-xl-flex align-items-center justify-content-center text-decoration-none"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(37, 211, 102, 0.12)',
                  color: '#25D366',
                  transition: 'transform 0.2s ease',
                }}
                aria-label="Direct WhatsApp Consultation"
                title="Direct WhatsApp Consultation"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.32C9.36 7.32 9.09 7.38 8.87 7.62C8.65 7.86 8.02 8.45 8.02 9.68C8.02 10.9 8.91 12.08 9.04 12.25C9.16 12.42 10.79 14.92 13.27 16C13.86 16.25 14.32 16.41 14.68 16.52C15.27 16.71 15.82 16.68 16.25 16.62C16.73 16.55 17.72 16.02 17.93 15.44C18.14 14.85 18.14 14.35 18.08 14.25C18.01 14.15 17.85 14.09 17.6 13.96C17.36 13.84 16.14 13.24 15.91 13.16C15.69 13.07 15.52 13.03 15.36 13.28C15.19 13.52 14.71 14.09 14.56 14.25C14.42 14.42 14.27 14.44 14.03 14.32C13.78 14.19 12.98 13.93 12.04 13.09C11.31 12.44 10.81 11.63 10.67 11.39C10.52 11.14 10.65 11.01 10.78 10.88C10.89 10.77 11.03 10.59 11.15 10.45C11.27 10.31 11.31 10.2 11.39 10.04C11.47 9.88 11.43 9.73 11.37 9.61C11.31 9.49 10.81 8.27 10.61 7.77C10.41 7.29 10.21 7.35 10.05 7.35C9.9 7.34 9.72 7.32 9.53 7.32Z" />
                </svg>
              </a>

              {/* LinkedIn Quick Icon */}
              <a
                href="https://www.linkedin.com/company/elite-prominence"
                target="_blank"
                rel="noopener noreferrer"
                className="d-none d-xl-flex align-items-center justify-content-center text-decoration-none"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(10, 102, 194, 0.12)',
                  color: '#0A66C2',
                  transition: 'transform 0.2s ease',
                }}
                aria-label="Prominence LinkedIn"
                title="Prominence LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              <Link href="/contact" className="mlab-pill-btn d-none d-md-inline-flex">
                <span>Private Consultation</span>
                <span style={{ fontSize: '15px' }}>&rarr;</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="mlab-hamburger-btn d-lg-none"
                onClick={() => setIsMobileNavOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileNavOpen}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
