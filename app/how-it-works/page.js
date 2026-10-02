'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      name: 'Discover',
      tagline: 'Deep Reputation Audit & Narrative Extraction',
      duration: 'Weeks 1–2',
      clientTime: '45 Minutes Total',
      overview: 'Before authoring positioning copy or configuring technical infrastructure, we conduct a forensic audit across Google search surfaces, proprietary executive databases, news archives, and professional networks.',
      deliverables: [
        'Forensic audit of your Google Page 1 results, namesake conflicts, and search sentiment',
        'Comprehensive inventory of existing corporate bios, interview archives, and conference recordings',
        'One 45-minute structured narrative extraction session with a senior communications partner',
        'Reputational gap analysis benchmarked against peer industry leaders and board candidates',
      ],
    },
    {
      number: '02',
      name: 'Position',
      tagline: 'Strategic Governance Thesis & Editorial Guardrails',
      duration: 'Weeks 2–3',
      clientTime: '15 Minutes Review',
      overview: 'We crystallize your leadership thesis into an authoritative executive narrative. We establish clear boundaries with your corporate PR and legal teams to guarantee 100% compliance with non-disclosure and disclosure standards.',
      deliverables: [
        'Calibrated Executive Positioning Document articulating your core leadership pillars',
        'Boardroom-ready executive biography, committee candidate profile, and media summary',
        'Corporate compliance protocol aligning public commentary with employer communications policies',
        'Cadence and lexicon analysis guide ensuring all written materials replicate your authentic speaking style',
      ],
    },
    {
      number: '03',
      name: 'Build',
      tagline: 'Sovereign Digital HQ & Entity Graph Engineering',
      duration: 'Weeks 3–6',
      clientTime: '15 Minutes Approval',
      overview: 'We design and engineer your owned personal digital headquarters on Next.js, deploy structured JSON-LD entity markup for Google Knowledge Graph recognition, and secure sovereign domain ownership.',
      deliverables: [
        'Bespoke executive personal website built on modern Next.js architecture with 95+ Core Web Vitals',
        'Custom executive domain acquisition, SSL configuration, and enterprise-grade DNS hosting',
        'Interactive career milestone portfolio, major transaction vignettes, and board dossier',
        'Structured JSON-LD schema deployment for Google Search Console indexing and Knowledge Panel linkage',
      ],
    },
    {
      number: '04',
      name: 'Publish',
      tagline: 'Calibrated Ghostwriting & Executive Stature Content',
      duration: 'Ongoing Monthly',
      clientTime: '20 Minutes / Month',
      overview: 'Senior journalists author substantial, provocative, and data-backed essays that demonstrate your macro business acumen. No generic platitudes, no junior social media gimmicks.',
      deliverables: [
        '2 to 4 high-signal strategic essays per month published directly to LinkedIn and your owned Digital HQ',
        'Monthly 20-minute voice-memo briefing or interview to harvest your real-time perspectives',
        'Complete editorial management, comment moderation guidance, and network engagement protocols',
        'Visual asset creation: custom typography graphics, charts, and executive quote cards',
      ],
    },
    {
      number: '05',
      name: 'Amplify',
      tagline: 'Keynote Stages, Tier-One Podcasts & Media Quotations',
      duration: 'Months 2+',
      clientTime: 'Zero Admin Time',
      overview: 'We take your proven ideas beyond your primary audience. We pitch event curators, conference chairs, and high-signal podcast producers to position you on reputable stages.',
      deliverables: [
        'Comprehensive Executive Speaker Kit: keynote abstracts, high-res photography, and technical rider',
        'Proactive pitching to top 2% business, industry, and leadership podcast shows',
        'Keynote submission pitching for reputable global summits and industry panels',
        'Post-appearance asset repurposing: high-definition video clips, transcripts, and press syndication',
      ],
    },
    {
      number: '06',
      name: 'Measure',
      tagline: 'Search Dominance, Due Diligence Protection & ROI Tracking',
      duration: 'Quarterly Reviews',
      clientTime: '10 Minutes Review',
      overview: 'Reputation is not an abstract concept—it produces measurable commercial outcomes. We monitor search ranking resilience, track inbound corporate recruiter inquiries, and evaluate board interest.',
      deliverables: [
        'Quarterly Search Resilience Report tracking Google Page 1 ownership for your exact name',
        'Inbound opportunity attribution tracking: board reach-outs, consulting leads, speaking inquiries',
        'Google Knowledge Panel verification and ongoing entity monitoring',
        'Annual narrative refresh aligning your digital assets with newly achieved enterprise milestones',
      ],
    },
  ]

  return (
    <div className="mlab-page">
      <ModernHeader activeNav="methodology" />

      {/* =========================================================================
          HERO SECTION
      ========================================================================= */}
      <section className="py-5">
        <div className="mlab-container">
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-7">
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> METHODOLOGY &amp; PROTOCOL
              </span>
              <h1 className="editorial-page-title">
                Strategy. Visibility.<br />
                Authority. Protection.
              </h1>
              <p className="editorial-page-desc" style={{ maxWidth: '540px' }}>
                A 6-stage turnkey protocol engineered for enterprise executives, board directors, and senior leaders to close the authority gap with complete discretion.
              </p>

              <div className="d-flex flex-wrap gap-2 pt-2">
                <span className="badge rounded-pill bg-white text-dark border px-3 py-2 fw-semibold">
                  ⏱ Under 30 Min / Month
                </span>
                <span className="badge rounded-pill bg-white text-dark border px-3 py-2 fw-semibold">
                  🛡 100% PR &amp; Legal Compliant
                </span>
                <span className="badge rounded-pill bg-white text-dark border px-3 py-2 fw-semibold">
                  📈 Measurable Search Dominance
                </span>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                style={{
                  position: 'relative',
                  height: '320px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.08)',
                }}
              >
                <Image
                  src="/assets/images/project/project_1.jpg"
                  alt="Prominence Executive Protocol Architecture"
                  fill
                  className="object-fit-cover"
                  sizes="450px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* =====================================================================
              6-STAGE PROTOCOL CARDS
          ===================================================================== */}
          <div className="d-flex flex-column gap-4 my-5">
            {steps.map((st, idx) => (
              <div key={idx} className="value-pillar-card p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 pb-3 border-bottom mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: 900,
                        color: '#FF3B81',
                        backgroundColor: '#FFF0F5',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                      }}
                    >
                      Stage {st.number}
                    </span>
                    <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#121316', margin: 0 }}>
                      {st.name}
                    </h2>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280' }}>
                      {st.duration}
                    </span>
                    <span style={{ color: '#D1D5DB' }}>•</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#FF3B81' }}>
                      {st.clientTime}
                    </span>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-lg-5">
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#121316', marginBottom: '8px' }}>
                      {st.tagline}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: 1.65, margin: 0 }}>
                      {st.overview}
                    </p>
                  </div>

                  <div className="col-lg-7">
                    <h4 style={{ fontSize: '12.5px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#9CA3AF', marginBottom: '14px' }}>
                      Key Deliverables
                    </h4>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '14px', color: '#374151' }}>
                      {st.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="d-flex align-items-start gap-2">
                          <span style={{ color: '#FF3B81', fontWeight: 800, lineHeight: 1.2 }}>✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                  <span className="editorial-badge-dot">✦</span> READY TO COMMENCE?
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 850, color: '#FFFFFF', marginBottom: '14px' }}>
                  Deploy the protocol for your executive stature.
                </h2>
                <p style={{ fontSize: '15px', color: '#9CA3AF', marginBottom: '28px' }}>
                  Book a confidential 30-minute introductory briefing with our managing partner.
                </p>
                <Link href="/contact" className="prominence-btn-primary">
                  <span>Schedule Consultation</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              <div className="col-lg-5 d-none d-lg-block">
                <div style={{ position: 'relative', height: '190px', borderRadius: '18px', overflow: 'hidden' }}>
                  <Image
                    src="/assets/images/project/project_6.jpg"
                    alt="Strategic Advisory"
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
