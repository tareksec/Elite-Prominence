'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'
import HeroVisual from './HeroVisual'
import ServicesGridSection from '@/components/sections/ServicesGridSection'
import { FlipText } from '@/components/ui/flip-text'
import { FlipFadeText } from '@/components/ui/flip-fade-text'
import { StaggerText } from '@/components/ui/stagger-text'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function MlabHomePage() {
  const [activeFaq, setActiveFaq] = useState(1) // Item 2 active by default

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const homeServices = [
    {
      title: 'Executive Digital HQ',
      desc: 'Your owned canonical website and high-converting asset on the internet.',
      slug: '/services/executive-digital-hq',
      badge: 'FLAGSHIP ASSET',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'Digital Reputation Management',
      desc: 'Google Page 1 control, entity schemas, and proactive search defense.',
      slug: '/services/digital-reputation',
      badge: 'SEARCH CONTROL',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'LinkedIn Authority & Positioning',
      desc: 'C-suite ghostwriting and strategic reach without becoming a content creator.',
      slug: '/services/linkedin-authority',
      badge: 'EXECUTIVE REACH',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      title: 'Executive Content & Ghostwriting',
      desc: 'Transform macro industry expertise into commercial and advisory pipeline.',
      slug: '/services/executive-content',
      badge: 'THOUGHT LEADERSHIP',
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
      title: 'Executive SEO & Search Visibility',
      desc: 'Algorithmic optimization for search engines and generative AI models (GEO).',
      slug: '/services/executive-seo',
      badge: 'SEO & GEO',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      title: 'Personal Brand Strategy',
      desc: 'Positioning, messaging, and narrative architecture for career inflection.',
      slug: '/services/personal-brand-strategy',
      badge: 'STRATEGY',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: 'Authority Building & Speaking',
      desc: 'Keynote placement, media commentary, and non-executive director visibility.',
      slug: '/services/authority-building',
      badge: 'NED & MEDIA',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
    },
  ]

  const homeSolutions = [
    {
      role: 'CEOs & Enterprise Leaders',
      slug: '/solutions/ceos',
      subtitle: 'Institutional Stature That Drives Valuation & Trust',
      tagline: 'When enterprise partners, institutional investors, and boards evaluate your leadership, your online footprint must reflect undisputed authority.',
      badge: 'C-SUITE',
    },
    {
      role: 'CHROs & People Leaders',
      slug: '/solutions/chros',
      subtitle: 'From Operational Generalist to Boardroom Authority',
      tagline: 'Transform from behind-the-scenes operator to recognized talent architect, keynote speaker, and board advisor.',
      badge: 'BOARD READY',
    },
    {
      role: 'Founders & Tech Scaleups',
      slug: '/solutions/founders',
      subtitle: 'Category-Defining Personal Authority Ahead of Growth Rounds',
      tagline: 'Build founder gravity that attracts tier-one venture capital, enterprise client logos, and top 1% engineering talent.',
      badge: 'VENTURE SCALE',
    },
    {
      role: 'Senior Executives & MDs',
      slug: '/solutions/executives',
      subtitle: 'Career Mobility, Search Due Diligence & NED Seats',
      tagline: 'Ensure executive search committees and nominations boards find a cohesive, unassailable track record.',
      badge: 'NED PIPELINE',
    },
    {
      role: 'Consultants & Coaches',
      slug: '/solutions/consultants',
      subtitle: 'Commanding Premium Retainers Through Unquestioned Authority',
      tagline: 'Eliminate price resistance and win high-ticket corporate retainers without commoditized competitive bidding.',
      badge: 'PREMIUM PRICING',
    },
  ]

  const caseStudies = [
    {
      title: 'Tasneem Knit Industry',
      subtitle: 'From Operational Operator to Boardroom Authority in 90 Days',
      category: 'CHRO & Board Advisory',
      img: '/assets/images/project/project_2.jpg',
      slug: '/case-studies/chro-to-boardroom-authority',
    },
    {
      title: 'ArtX Corporate Advisory',
      subtitle: 'Transforming Inbound Due Diligence to Command $25k/Mo Retainers',
      category: 'Independent Consultant',
      img: '/assets/images/project/project_3.jpg',
      slug: '/case-studies/independent-consultant-pricing-power',
    },
    {
      title: 'TechVRS Enterprise AI',
      subtitle: 'Building Founder Gravity Ahead of Institutional Series A',
      category: 'Founder & Tech',
      img: '/assets/images/project/project_1.jpg',
      slug: '/case-studies/tech-founder-investor-authority',
    },
  ]

  const faqs = [
    {
      question: "I'm already busy. How much time will this take from me?",
      answer: "Very little. This is a turnkey, done-for-you model designed specifically for busy enterprise leaders — most clients spend under 30 minutes a month once onboarding is complete."
    },
    {
      question: "Is building a personal brand with you just about LinkedIn content, or more than that?",
      answer: "It's significantly more. Building sovereign authority requires an integrated presence: we combine a personal executive website (Digital HQ), Google reputation management, structured entity schemas, and high-impact thought leadership — whereas standard agencies only handle one piece."
    },
    {
      question: "How long before I see results?",
      answer: "Website and search reputation work typically shows visible change within 45–60 days; inbound board inquiries and speaking opportunities compound over 3–6 months."
    },
    {
      question: "Who is this NOT a good fit for?",
      answer: "Early-career practitioners without an established track record — our work is engineered specifically for senior leaders who already possess substantive commercial outcomes to showcase."
    }
  ]

  const blogPosts = [
    {
      title: 'Generative Engine Optimization (GEO) for Executives: Controlling How AI Models Profile You',
      date: 'Oct 2, 2026',
      category: 'GEO & AI Models',
      slug: '/blog/geo-generative-engine-optimization-for-executives',
      img: '/assets/images/project/project_1.jpg',
    },
    {
      title: 'CTO & Technical Executive Branding: Becoming the Go-To Voice in Enterprise AI and Engineering',
      date: 'Oct 1, 2026',
      category: 'Technical Leadership',
      slug: '/blog/chief-technology-officer-personal-brand',
      img: '/assets/images/project/project_4.jpg',
    },
    {
      title: 'From Corporate Executive to Board Advisor: Building the Advisory Brand Pipeline',
      date: 'Sep 24, 2026',
      category: 'Board Governance',
      slug: '/blog/from-corporate-executive-to-board-advisor',
      img: '/assets/images/project/project_5.jpg',
    },
    {
      title: 'The 2026 C-Suite LinkedIn Algorithm Strategy: Organic Reach and Executive Authority',
      date: 'Sep 18, 2026',
      category: 'LinkedIn Strategy',
      slug: '/blog/c-suite-linkedin-algorithm-strategy-2026',
      img: '/assets/images/project/project_3.jpg',
    },
    {
      title: 'CEO Reputation Management in 2026: Protecting C-Suite Valuation in the AI Era',
      date: 'Sep 12, 2026',
      category: 'CEO Reputation',
      slug: '/blog/ceo-reputation-management-2026',
      img: '/assets/images/project/project_2.jpg',
    },
    {
      title: 'Why CHROs Are Invisible Online (And How to Fix It in 90 Days)',
      date: 'Aug 29, 2026',
      category: 'CHRO Positioning',
      slug: '/blog/why-chros-are-invisible-online',
      img: '/assets/images/project/project_6.jpg',
    },
  ]

  return (
    <div className="mlab-page">
      <ModernHeader activeNav="home" />

      {/* =========================================================================
          HERO SECTION (PIXEL PERFECT MATCH TO REFERENCE IMAGE)
      ========================================================================= */}
      <section className="prominence-hero-section" aria-labelledby="hero-heading">
        <div className="mlab-container">
          <div className="row align-items-center g-5">
            {/* Left Column: Heading, Subtitle, CTA buttons, Ticker */}
            <div className="col-lg-6">
              <h1 id="hero-heading" className="prominence-brand-title">
                <StaggerText divideBy="word">Your reputation.</StaggerText><br />
                <span>Engineered for </span><br className="d-none d-sm-block" />
                <FlipFadeText
                  words={["PROMINENCE", "AUTHORITY", "INFLUENCE", "PRESTIGE", "SOVEREIGNTY"]}
                  textClassName="text-gradient-prominence"
                  interval={2600}
                />
                <span style={{ color: '#FF3B81' }}>.</span>
              </h1>

              <p className="prominence-hero-desc">
                <StaggerText delay={0.12} divideBy="word">
                  Executive digital presence, reputation and search authority — built to represent leaders before they enter the room.
                </StaggerText>
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link href="/contact" className="prominence-btn-primary">
                  <span>Book a Private Consultation</span>
                  <span style={{ fontSize: '15px' }}>&rarr;</span>
                </Link>

                <Link href="/how-it-works" className="prominence-btn-outline">
                  <span>Explore the Protocol</span>
                  <span style={{ fontSize: '15px' }}>&rarr;</span>
                </Link>
              </div>

              {/* Bottom Ticker Strip */}
              <div className="prominence-ticker">
                <span className="prominence-ticker-bar">|</span>
                <span>
                  <FlipText duration={2.4} loop={true}>STRATEGY</FlipText>
                  &nbsp;/&nbsp;
                  <FlipText duration={2.8} delay={0.2} loop={true}>PRESENCE</FlipText>
                  &nbsp;/&nbsp;
                  <FlipText duration={3.2} delay={0.4} loop={true}>AUTHORITY</FlipText>
                  &nbsp;/&nbsp;
                  <FlipText duration={3.6} delay={0.6} loop={true}>PROTECTION</FlipText>
                </span>
              </div>
            </div>

            {/* Right Column: Real Interactive Visual Artwork */}
            <div className="col-lg-6">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR FIRM SECTION (MATCHING MOCKUP)
      ========================================================================= */}
      <section className="py-5 my-3" aria-labelledby="firm-heading">
        <div className="mlab-container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> OUR FIRM
              </span>
              <h2 id="firm-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 850, letterSpacing: '-1px', color: '#121316', lineHeight: 1.15, marginBottom: '22px' }}>
                <StaggerText divideBy="word">
                  We build digital reputation systems for leaders, founders and forward-thinking brands.
                </StaggerText>
              </h2>
              <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#4B5563', marginBottom: '32px', maxWidth: '480px' }}>
                Prominence is a digital reputation and growth agency focused on executive presence, search visibility and strategic positioning. We help ambitious individuals and organizations become the obvious choice.
              </p>
              <Link href="/about" className="prominence-btn-primary">
                <span>Our Approach</span>
                <span>&rarr;</span>
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="position-relative" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div className="position-absolute" style={{ top: '-15px', right: '40px', zIndex: 5 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF3B81">
                    <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" />
                  </svg>
                </div>

                <div
                  style={{
                    position: 'relative',
                    height: '360px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.08)',
                  }}
                >
                  <Image
                    src="/assets/images/project/project_1.jpg"
                    alt="Prominence Corporate Headquarters"
                    fill
                    className="object-fit-cover"
                    sizes="500px"
                  />
                </div>

                <div
                  className="position-absolute bg-white rounded-4 p-4 shadow-lg border"
                  style={{
                    bottom: '24px',
                    right: '-20px',
                    width: '185px',
                    zIndex: 4,
                  }}
                >
                  <TooltipProvider>
                    <div className="mb-3">
                      <Tooltip side="left">
                        <TooltipTrigger className="d-block w-100 text-start">
                          <div style={{ fontSize: '24px', fontWeight: 850, color: '#121316', lineHeight: 1 }}>500+</div>
                          <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Projects Delivered</div>
                        </TooltipTrigger>
                        <TooltipContent>Verified enterprise leaders &amp; brand engagements</TooltipContent>
                      </Tooltip>
                    </div>

                    <div className="mb-3">
                      <Tooltip side="left">
                        <TooltipTrigger className="d-block w-100 text-start">
                          <div style={{ fontSize: '24px', fontWeight: 850, color: '#121316', lineHeight: 1 }}>98%</div>
                          <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Client Satisfaction</div>
                        </TooltipTrigger>
                        <TooltipContent>Executive retention &amp; sovereign authority rating</TooltipContent>
                      </Tooltip>
                    </div>

                    <div>
                      <Tooltip side="left">
                        <TooltipTrigger className="d-block w-100 text-start">
                          <div style={{ fontSize: '24px', fontWeight: 850, color: '#121316', lineHeight: 1 }}>5+</div>
                          <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Years of Experience</div>
                        </TooltipTrigger>
                        <TooltipContent>Dedicated digital stature &amp; Google Page 1 control</TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR SERVICES SECTION (MATCHING EXACT MOCKUP)
      ========================================================================= */}
      <ServicesGridSection showViewAll={true} />

      {/* =========================================================================
          ROLE-SPECIFIC SOLUTIONS SECTION (SEO, GEO & AEO INTERLINKING)
      ========================================================================= */}
      <section id="solutions" className="py-5 my-4" style={{ backgroundColor: '#F8F6F2' }} aria-labelledby="solutions-heading">
        <div className="mlab-container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
            <div>
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> ROLE ARCHITECTURE
              </span>
              <h2 id="solutions-heading" style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 850, letterSpacing: '-0.8px', color: '#121316', margin: 0 }}>
                <StaggerText divideBy="word">
                  Tailored solutions for enterprise leaders.
                </StaggerText>
              </h2>
            </div>
            <Link href="/solutions" className="d-flex align-items-center gap-2 text-decoration-none fw-bold text-dark">
              <span>View all 5 persona solutions</span>
              <span style={{ color: '#FF3B81' }}>&rarr;</span>
            </Link>
          </div>

          <div className="row g-4">
            {homeSolutions.map((sol, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <Link href={sol.slug} className="text-decoration-none">
                  <div className="value-pillar-card h-100 p-4 p-md-5 d-flex flex-column justify-content-between bg-white shadow-sm">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="badge" style={{ backgroundColor: '#FAF7F4', color: '#FF3B81', border: '1px solid rgba(255,59,129,0.2)', fontSize: '10.5px', fontWeight: 800, letterSpacing: '0.8px' }}>
                          {sol.badge}
                        </span>
                        <span style={{ color: '#9CA3AF', fontSize: '13px', fontWeight: 700 }}>0{idx + 1}</span>
                      </div>

                      <h3 style={{ fontSize: '20px', fontWeight: 850, color: '#121316', marginBottom: '8px' }}>
                        {sol.role}
                      </h3>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FF3B81', marginBottom: '14px' }}>
                        {sol.subtitle}
                      </h4>
                      <p style={{ fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                        {sol.tagline}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-top" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                      <div className="d-inline-flex align-items-center gap-2" style={{ fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                        <span>Explore Framework</span>
                        <span style={{ color: '#FF3B81', fontWeight: 800 }}>&rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDIES / SELECTED WORK SECTION
      ========================================================================= */}
      <section className="py-5 my-4">
        <div className="mlab-container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
            <div>
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> CASE STUDIES &amp; OUTCOMES
              </span>
              <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 850, letterSpacing: '-0.8px', color: '#121316', margin: 0 }}>
                <StaggerText divideBy="word">
                  Real results. Lasting impact.
                </StaggerText>
              </h2>
            </div>
            <Link href="/case-studies" className="d-flex align-items-center gap-2 text-decoration-none fw-bold text-dark">
              <span>Explore all case studies</span>
              <span style={{ color: '#FF3B81' }}>&rarr;</span>
            </Link>
          </div>

          <div className="row g-4">
            {caseStudies.map((item, idx) => (
              <div key={idx} className="col-md-4">
                <Link href={item.slug} className="text-decoration-none">
                  <article className="modern-case-card h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="modern-case-img-box" style={{ height: '200px' }}>
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-fit-cover"
                          sizes="(max-width: 768px) 100vw, 360px"
                        />
                      </div>
                      <div className="modern-case-body p-4">
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                          {item.category}
                        </span>
                        <h3 style={{ fontSize: '18px', fontWeight: 850, color: '#121316', margin: '6px 0 8px' }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: '13px', color: '#6B7280', margin: 0, lineHeight: 1.5 }}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0 d-flex align-items-center gap-2" style={{ fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                      <span>Read Case Study</span>
                      <span style={{ color: '#FF3B81' }}>&rarr;</span>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT RESULTS & TESTIMONIALS (PREVIOUS SECTION PRESERVED WITH REAL AVATARS)
      ========================================================================= */}
      <section id="results" className="py-5 my-4" aria-labelledby="results-heading">
        <div className="mlab-container">
          <div className="mb-5 text-center" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span className="editorial-badge">
              <span className="editorial-badge-dot">✦</span> EXECUTIVE PROOF
            </span>
            <h2 id="results-heading" style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 850, letterSpacing: '-0.8px', color: '#121316' }}>
              <StaggerText divideBy="word">
                Trusted by leaders shaping industries
              </StaggerText>
            </h2>
          </div>

          <div className="row g-4">
            {/* Testimonial 1 */}
            <div className="col-lg-6">
              <article className="value-pillar-card p-4 p-md-5">
                <span style={{ color: '#FF3B81', fontSize: '32px', lineHeight: 1, display: 'block', marginBottom: '12px', fontFamily: 'serif' }}>“</span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.35, marginBottom: '16px', color: '#121316' }}>
                  Their experience helped us develop our sovereign executive presence
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#4B5563', marginBottom: '28px' }}>
                  Prominence transformed my digital stature. Within 60 days of launching my new digital HQ and executive LinkedIn strategy, I received two board advisory invitations and keynote opportunities.
                </p>

                <div className="d-flex align-items-center gap-3 pt-2">
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <Image
                      src="/assets/images/resource/testimonial-1.jpg"
                      alt="Eleanor Vance, Chief Human Resources Officer"
                      fill
                      className="object-fit-cover"
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, margin: 0, color: '#121316' }}>
                      Eleanor Vance
                    </h4>
                    <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>
                      Chief Human Resources Officer
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Testimonial 2 */}
            <div className="col-lg-6">
              <article className="value-pillar-card p-4 p-md-5">
                <span style={{ color: '#FF3B81', fontSize: '32px', lineHeight: 1, display: 'block', marginBottom: '12px', fontFamily: 'serif' }}>“</span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.35, marginBottom: '16px', color: '#121316' }}>
                  The Prominence team is fast, savvy, and truly ahead of the curve
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#4B5563', marginBottom: '28px' }}>
                  When prospects and search committees Google my name today, they find an authoritative, cohesive presence. Exceptional rigor, discretion, and high-impact thought architecture.
                </p>

                <div className="d-flex align-items-center gap-3 pt-2">
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <Image
                      src="/assets/images/resource/testimonial-2.jpg"
                      alt="Marcus Sterling, Managing Director & Board Advisor"
                      fill
                      className="object-fit-cover"
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, margin: 0, color: '#121316' }}>
                      Marcus Sterling
                    </h4>
                    <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>
                      Managing Director &amp; Board Advisor
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION (INTERACTIVE ACCORDION PRESERVED)
      ========================================================================= */}
      <section id="faq" className="py-5 my-4" aria-labelledby="faq-heading">
        <div className="mlab-container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> COMMON INQUIRIES
              </span>
              <h2 id="faq-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 850, letterSpacing: '-0.8px', color: '#121316', marginBottom: '20px' }}>
                <StaggerText divideBy="word">
                  Frequently Asked Questions
                </StaggerText>
              </h2>
              <p style={{ fontSize: '15.5px', color: '#4B5563', lineHeight: 1.6, marginBottom: '28px' }}>
                Confidential advisory tailored for senior leaders who prioritize discretion, measurable ROI, and minimal time commitment.
              </p>
              <Link href="/contact" className="prominence-btn-outline">
                <span>Ask a Specific Question</span>
                <span>&rarr;</span>
              </Link>
            </div>

            <div className="col-lg-7">
              <div className="d-flex flex-column gap-3">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-4 border transition-all"
                      style={{
                        padding: '22px 26px',
                        borderColor: isOpen ? '#FF3B81' : 'rgba(18,19,22,0.08)',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-100 d-flex align-items-center justify-content-between text-start border-0 bg-transparent p-0"
                        style={{ cursor: 'pointer' }}
                        aria-expanded={isOpen}
                      >
                        <span style={{ fontSize: '16px', fontWeight: 800, color: '#121316', paddingRight: '16px' }}>
                          {faq.question}
                        </span>
                        <span
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: isOpen ? '#FF3B81' : '#FAF7F4',
                            color: isOpen ? '#FFFFFF' : '#121316',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: 700,
                            flexShrink: 0,
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-3 mt-3 border-top" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                          <p style={{ fontSize: '14.5px', color: '#4B5563', lineHeight: 1.65, margin: 0 }}>
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LATEST INSIGHTS SECTION (PRESERVED WITH REAL IMAGERY)
      ========================================================================= */}
      <section id="blog" className="py-5 my-4">
        <div className="mlab-container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
            <div>
              <span className="editorial-badge">
                <span className="editorial-badge-dot">✦</span> INSIGHTS
              </span>
              <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 850, letterSpacing: '-0.8px', color: '#121316', margin: 0 }}>
                <StaggerText divideBy="word">
                  Ideas, trends and strategies.
                </StaggerText>
              </h2>
            </div>
            <Link href="/blog-grid" className="d-flex align-items-center gap-2 text-decoration-none fw-bold text-dark">
              <span>View all 17 articles</span>
              <span style={{ color: '#FF3B81' }}>&rarr;</span>
            </Link>
          </div>

          {/* Topic Cluster Pills for GEO, AI & Executive Authority (AEO / GEO Architecture) */}
          <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
            <Link href="/blog-grid" className="badge text-decoration-none px-3 py-2 rounded-pill" style={{ backgroundColor: '#121316', color: '#FFFFFF', fontSize: '12px', border: '1px solid #121316' }}>
              All 17 Articles
            </Link>
            <Link href="/blog/geo-generative-engine-optimization-for-executives" className="badge text-decoration-none px-3 py-2 rounded-pill" style={{ backgroundColor: '#FAF7F4', color: '#121316', border: '1px solid rgba(18,19,22,0.12)', fontSize: '12px' }}>
              GEO &amp; AI Models
            </Link>
            <Link href="/blog/chief-technology-officer-personal-brand" className="badge text-decoration-none px-3 py-2 rounded-pill" style={{ backgroundColor: '#FAF7F4', color: '#121316', border: '1px solid rgba(18,19,22,0.12)', fontSize: '12px' }}>
              CTO &amp; AI Branding
            </Link>
            <Link href="/blog/from-corporate-executive-to-board-advisor" className="badge text-decoration-none px-3 py-2 rounded-pill" style={{ backgroundColor: '#FAF7F4', color: '#121316', border: '1px solid rgba(18,19,22,0.12)', fontSize: '12px' }}>
              Board Governance
            </Link>
            <Link href="/blog/c-suite-linkedin-algorithm-strategy-2026" className="badge text-decoration-none px-3 py-2 rounded-pill" style={{ backgroundColor: '#FAF7F4', color: '#121316', border: '1px solid rgba(18,19,22,0.12)', fontSize: '12px' }}>
              C-Suite LinkedIn
            </Link>
            <Link href="/blog/ceo-reputation-management-2026" className="badge text-decoration-none px-3 py-2 rounded-pill" style={{ backgroundColor: '#FAF7F4', color: '#121316', border: '1px solid rgba(18,19,22,0.12)', fontSize: '12px' }}>
              CEO Valuation
            </Link>
          </div>

          <div className="row g-4">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <Link href={post.slug} className="text-decoration-none">
                  <article className="modern-case-card">
                    <div className="modern-case-img-box" style={{ height: '190px' }}>
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-fit-cover"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                    <div className="modern-case-body p-4">
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 600 }}>
                            {post.date}
                          </span>
                          <span aria-hidden="true" style={{ color: '#D1D5DB' }}>·</span>
                          <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF3B81', textTransform: 'uppercase' }}>
                            {post.category}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: '#121316', margin: 0, lineHeight: 1.35 }}>
                          {post.title}
                        </h3>
                      </div>
                      <div className="d-flex align-items-center gap-2 pt-3" style={{ fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                        <span>Read article</span>
                        <span style={{ color: '#FF3B81' }}>&rarr;</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DARK CTA BANNER: LET'S WORK TOGETHER
      ========================================================================= */}
      <section className="py-4 my-5">
        <div className="mlab-container">
          <div className="custom-solution-cta">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="editorial-badge text-white-50">
                  <span className="editorial-badge-dot">✦</span> LET&apos;S WORK TOGETHER
                </span>
                <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 850, color: '#FFFFFF', letterSpacing: '-0.8px', lineHeight: 1.15, marginBottom: '14px' }}>
                  <span>Your next chapter deserves a stronger </span><br className="d-none d-sm-block" />
                  <FlipFadeText
                    words={["PRESENCE", "REPUTATION", "AUTHORITY", "SOVEREIGNTY"]}
                    textClassName="text-gradient-prominence"
                    interval={2700}
                  />
                  <span style={{ color: '#FF3B81' }}>.</span>
                </h2>
                <p style={{ fontSize: '15px', color: '#9CA3AF', marginBottom: '30px' }}>
                  Book a private consultation and let&apos;s build your digital authority.
                </p>
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <TooltipProvider>
                    <Tooltip side="top">
                      <TooltipTrigger asChild>
                        <Link href="/contact" className="prominence-btn-primary">
                          <span>Book a Consultation</span>
                          <span>&rarr;</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        Strict non-disclosure executive consultation
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip side="top">
                      <TooltipTrigger asChild>
                        <Link href="/services" className="prominence-btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF !important' }}>
                          <span style={{ color: '#FFFFFF' }}>Learn More</span>
                          <span style={{ color: '#FFFFFF' }}>&rarr;</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        Browse all 4 executive authority programs
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="col-lg-5 d-none d-lg-block position-relative">
                <div
                  style={{
                    position: 'relative',
                    height: '220px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/assets/images/project/project_1.jpg"
                    alt="Executive Architecture"
                    fill
                    className="object-fit-cover"
                    sizes="450px"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle at 10% 50%, rgba(255,59,129,0.35) 0%, transparent 65%)',
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
