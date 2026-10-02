'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="mlab-page">
      <ModernHeader activeNav="contact" />

      {/* =========================================================================
          CONTACT HERO & INFO SECTION (MATCHING SCREEN 5 MOCKUP)
      ========================================================================= */}
      <section className="py-5">
        <div className="mlab-container">
          <div className="row align-items-center g-5 mb-5">
            {/* Left Column: Heading, Subtitle & Action buttons */}
            <div className="col-lg-7">
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> CONTACT
              </span>
              <h1 className="editorial-page-title">
                Let&apos;s create your<br />digital advantage.
              </h1>
              <p className="editorial-page-desc" style={{ maxWidth: '520px' }}>
                Book a private consultation and take the first step towards a stronger digital presence.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <a href="#consultation-form" className="prominence-btn-primary">
                  <span>Book a Consultation</span>
                  <span>&rarr;</span>
                </a>
                <Link href="/how-it-works" className="prominence-btn-outline">
                  <span>Learn More</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Details Box */}
            <div className="col-lg-5">
              <div className="contact-details-box">
                {/* Email Item */}
                <div className="contact-info-row">
                  <div className="contact-icon-pill">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Email
                    </div>
                    <a href="mailto:hello@prominence.agency" style={{ fontSize: '15.5px', fontWeight: 700, color: '#121316', textDecoration: 'none' }}>
                      hello@prominence.agency
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="contact-info-row">
                  <div className="contact-icon-pill">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Location
                    </div>
                    <div style={{ fontSize: '15.5px', fontWeight: 700, color: '#121316' }}>
                      Dhaka, Bangladesh
                    </div>
                  </div>
                </div>

                {/* Follow Us Item */}
                <div className="contact-info-row mb-0">
                  <div className="contact-icon-pill">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Follow Us
                    </div>
                    <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#121316' }}>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-decoration-none text-dark hover-pink me-2">LinkedIn</a>
                      <span className="text-muted">/</span>
                      <a href="https://x.com" target="_blank" rel="noreferrer" className="text-decoration-none text-dark hover-pink mx-2">X (Twitter)</a>
                      <span className="text-muted">/</span>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-decoration-none text-dark hover-pink ms-2">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              CONFIDENTIAL INTAKE FORM
          ===================================================================== */}
          <div id="consultation-form" className="p-4 p-md-5 rounded-4 bg-white border my-5" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="text-center mb-4">
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> PRIVATE INTAKE
              </span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#121316' }}>
                Schedule Your Advisory Briefing
              </h2>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>
                All consultations are protected under strict bilateral confidentiality.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-5">
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#FF3B81', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#121316', marginBottom: '10px' }}>
                  Consultation Request Received
                </h3>
                <p style={{ color: '#6B7280', fontSize: '15px' }}>
                  Our managing partner will review your inquiry and reach out within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#121316', marginBottom: '6px', display: 'block' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-control rounded-pill py-2 px-3"
                      style={{ border: '1.5px solid #E5E7EB', fontSize: '14px' }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#121316', marginBottom: '6px', display: 'block' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-control rounded-pill py-2 px-3"
                      style={{ border: '1.5px solid #E5E7EB', fontSize: '14px' }}
                    />
                  </div>

                  <div className="col-12">
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#121316', marginBottom: '6px', display: 'block' }}>
                      Current Role &amp; Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CEO / Board Member / Founder"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="form-control rounded-pill py-2 px-3"
                      style={{ border: '1.5px solid #E5E7EB', fontSize: '14px' }}
                    />
                  </div>

                  <div className="col-12">
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#121316', marginBottom: '6px', display: 'block' }}>
                      How can we assist your digital authority?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your objectives, timeline, or current search footprint..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-control rounded-4 p-3"
                      style={{ border: '1.5px solid #E5E7EB', fontSize: '14px' }}
                    />
                  </div>

                  <div className="col-12 text-center pt-3">
                    <button type="submit" className="prominence-btn-primary px-5">
                      <span>Submit Confidential Request</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}