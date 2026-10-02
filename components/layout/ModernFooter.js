'use client'

import React from 'react'
import Link from 'next/link'

export default function ModernFooter() {
  return (
    <footer className="prominence-footer" style={{ backgroundColor: '#0B0C0E', color: '#9CA3AF', paddingTop: '75px', paddingBottom: '40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="mlab-container">
        {/* Main 5-Column Grid */}
        <div className="row g-5 pb-5 border-bottom border-secondary border-opacity-25">
          {/* Column 1: Brand, Positioning & Direct Contact */}
          <div className="col-lg-4 col-md-12">
            <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none mb-3" aria-label="Prominence Home">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF3B81">
                <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" />
              </svg>
              <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '2.5px', color: '#FFFFFF', fontFamily: 'sans-serif' }}>
                PROMINENCE
              </span>
            </Link>

            <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#9CA3AF', maxWidth: '340px', marginBottom: '20px' }}>
              Bespoke digital reputation architecture, executive SEO, Google Page 1 control, and Generative Engine Optimization (GEO) for CEOs, CHROs, enterprise founders, and senior leaders.
            </p>

            <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: '13.5px' }}>
              <div>
                <span className="text-secondary">Direct Advisory: </span>
                <a href="mailto:hello@prominence.agency" className="text-white text-decoration-none hover-pink">
                  hello@prominence.agency
                </a>
              </div>
              <div>
                <span className="text-secondary">WhatsApp: </span>
                <a href="https://wa.me/8801645441584" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none hover-pink">
                  +880 1645-441584
                </a>
              </div>
              <div>
                <span className="text-secondary">Managing Partner: </span>
                <a href="https://www.linkedin.com/in/mdtarek404/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none hover-pink">
                  Md Tarek (LinkedIn)
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="d-flex align-items-center gap-3">
              {/* LinkedIn Company */}
              <a
                href="https://www.linkedin.com/company/elite-prominence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover-pink d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="Prominence LinkedIn Page"
                title="Prominence LinkedIn Page"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* Founder LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mdtarek404/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover-pink d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="Md Tarek, Founder LinkedIn"
                title="Md Tarek, Founder LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </a>

              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/8801645441584"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover-pink d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.32C9.36 7.32 9.09 7.38 8.87 7.62C8.65 7.86 8.02 8.45 8.02 9.68C8.02 10.9 8.91 12.08 9.04 12.25C9.16 12.42 10.79 14.92 13.27 16C13.86 16.25 14.32 16.41 14.68 16.52C15.27 16.71 15.82 16.68 16.25 16.62C16.73 16.55 17.72 16.02 17.93 15.44C18.14 14.85 18.14 14.35 18.08 14.25C18.01 14.15 17.85 14.09 17.6 13.96C17.36 13.84 16.14 13.24 15.91 13.16C15.69 13.07 15.52 13.03 15.36 13.28C15.19 13.52 14.71 14.09 14.56 14.25C14.42 14.42 14.27 14.44 14.03 14.32C13.78 14.19 12.98 13.93 12.04 13.09C11.31 12.44 10.81 11.63 10.67 11.39C10.52 11.14 10.65 11.01 10.78 10.88C10.89 10.77 11.03 10.59 11.15 10.45C11.27 10.31 11.31 10.2 11.39 10.04C11.47 9.88 11.43 9.73 11.37 9.61C11.31 9.49 10.81 8.27 10.61 7.77C10.41 7.29 10.21 7.35 10.05 7.35C9.9 7.34 9.72 7.32 9.53 7.32Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Executive Services (Interlinking all 7 services) */}
          <div className="col-lg-2 col-md-4 col-6">
            <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#FFFFFF', marginBottom: '18px' }}>
              Services
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '13.5px' }}>
              <li>
                <Link href="/services/executive-digital-hq" className="text-secondary text-decoration-none hover-white">
                  Executive Digital HQ
                </Link>
              </li>
              <li>
                <Link href="/services/digital-reputation" className="text-secondary text-decoration-none hover-white">
                  Reputation Management
                </Link>
              </li>
              <li>
                <Link href="/services/linkedin-authority" className="text-secondary text-decoration-none hover-white">
                  LinkedIn Authority
                </Link>
              </li>
              <li>
                <Link href="/services/executive-content" className="text-secondary text-decoration-none hover-white">
                  Content &amp; Ghostwriting
                </Link>
              </li>
              <li>
                <Link href="/services/executive-seo" className="text-secondary text-decoration-none hover-white">
                  Executive SEO &amp; Search
                </Link>
              </li>
              <li>
                <Link href="/services/personal-brand-strategy" className="text-secondary text-decoration-none hover-white">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/authority-building" className="text-secondary text-decoration-none hover-white">
                  Speaking &amp; Media
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="text-white text-decoration-none hover-pink fw-bold" style={{ fontSize: '12.5px' }}>
                  All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions by Role (Interlinking all 5 solutions) */}
          <div className="col-lg-2 col-md-4 col-6">
            <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#FFFFFF', marginBottom: '18px' }}>
              Solutions
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '13.5px' }}>
              <li>
                <Link href="/solutions/ceos" className="text-secondary text-decoration-none hover-white">
                  CEOs &amp; Leaders
                </Link>
              </li>
              <li>
                <Link href="/solutions/chros" className="text-secondary text-decoration-none hover-white">
                  CHROs &amp; People Leaders
                </Link>
              </li>
              <li>
                <Link href="/solutions/founders" className="text-secondary text-decoration-none hover-white">
                  Founders &amp; Tech
                </Link>
              </li>
              <li>
                <Link href="/solutions/executives" className="text-secondary text-decoration-none hover-white">
                  Senior Executives
                </Link>
              </li>
              <li>
                <Link href="/solutions/consultants" className="text-secondary text-decoration-none hover-white">
                  Consultants &amp; Coaches
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/case-studies" className="text-secondary text-decoration-none hover-white">
                  Case Studies &amp; Outcomes
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/solutions" className="text-white text-decoration-none hover-pink fw-bold" style={{ fontSize: '12.5px' }}>
                  All Solutions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GEO & Authority Insights (SEO / AEO / GEO Interlinking) */}
          <div className="col-lg-2 col-md-4 col-6">
            <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#FFFFFF', marginBottom: '18px' }}>
              GEO &amp; Insights
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '13.5px' }}>
              <li>
                <Link href="/blog/geo-generative-engine-optimization-for-executives" className="text-secondary text-decoration-none hover-white">
                  GEO for Executives
                </Link>
              </li>
              <li>
                <Link href="/blog/ceo-reputation-management-2026" className="text-secondary text-decoration-none hover-white">
                  CEO Reputation 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/chief-technology-officer-personal-brand" className="text-secondary text-decoration-none hover-white">
                  CTO &amp; AI Branding
                </Link>
              </li>
              <li>
                <Link href="/blog/from-corporate-executive-to-board-advisor" className="text-secondary text-decoration-none hover-white">
                  Board Advisor Pipeline
                </Link>
              </li>
              <li>
                <Link href="/blog/c-suite-linkedin-algorithm-strategy-2026" className="text-secondary text-decoration-none hover-white">
                  C-Suite LinkedIn 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/why-chros-are-invisible-online" className="text-secondary text-decoration-none hover-white">
                  Why CHROs Are Invisible
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/blog-grid" className="text-white text-decoration-none hover-pink fw-bold" style={{ fontSize: '12.5px' }}>
                  All 17 Articles &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Firm & Advisory Protocol */}
          <div className="col-lg-2 col-md-4 col-6">
            <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#FFFFFF', marginBottom: '18px' }}>
              Firm
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '13.5px' }}>
              <li>
                <Link href="/about" className="text-secondary text-decoration-none hover-white">
                  About Prominence
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-secondary text-decoration-none hover-white">
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-secondary text-decoration-none hover-white">
                  Investment &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-secondary text-decoration-none hover-white">
                  Careers <span className="badge bg-danger ms-1" style={{ fontSize: '9px', verticalAlign: 'middle' }}>HIRING</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-secondary text-decoration-none hover-white">
                  Executive FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary text-decoration-none hover-white">
                  Contact Advisory
                </Link>
              </li>
              <li>
                <Link href="/resources/assessment" className="text-secondary text-decoration-none hover-white">
                  Authority Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright, Legal, and Entity Attribution */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between pt-4" style={{ fontSize: '13px', color: '#6B7280' }}>
          <p className="mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} Prominence.agency. Sovereign Executive Digital Reputation Advisory. All rights reserved.
          </p>

          <div className="d-flex flex-wrap align-items-center gap-4">
            <Link href="/privacy-policy" className="text-secondary text-decoration-none hover-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-secondary text-decoration-none hover-white">
              Terms of Engagement
            </Link>
            <Link href="/sitemap.xml" className="text-secondary text-decoration-none hover-white">
              Sitemap (XML)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
