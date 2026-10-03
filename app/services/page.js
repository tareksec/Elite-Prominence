'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
import ServicesGridSection from '@/components/sections/ServicesGridSection'

export default function ServicesPage() {
  return (
    <div className="mlab-page">
      <ModernHeader activeNav="services" />

      {/* Main Services Grid Section matching exact mockup UI */}
      <ServicesGridSection showViewAll={false} isPage={true} />

      {/* Custom Solution C-Suite Consultation Banner */}
      <section className="py-4 pb-5">
        <div className="mlab-container">
          <div className="custom-solution-cta mb-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                {/* Hot pink star */}
                <div className="mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF3B81">
                    <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" />
                  </svg>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px', marginBottom: '12px' }}>
                  Need a bespoke advisory engagement?
                </h2>
                <p style={{ fontSize: '15px', color: '#9CA3AF', marginBottom: '28px', maxWidth: '520px' }}>
                  We engineer tailored C-Suite advisory structures, Wikipedia entity defense, and private digital headquarters for enterprise leaders worldwide.
                </p>
                <Link href="/contact" className="prominence-btn-primary">
                  <span>Book Private Consultation</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              <div className="col-lg-5 d-none d-lg-block">
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
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