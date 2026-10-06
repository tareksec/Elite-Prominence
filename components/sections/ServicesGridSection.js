'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  IconUser,
  IconShield,
  IconChartBar,
  IconFileText,
  IconSearch,
  IconStar,
  IconMicrophone,
  IconArrowRight,
} from '@tabler/icons-react'
import { StaggerText } from '@/components/ui/stagger-text'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const SERVICES = [
  {
    icon: <IconUser size={22} stroke={2} />,
    badge: 'FLAGSHIP ASSET',
    title: 'Executive Digital HQ',
    desc: 'Your owned canonical website and high-converting asset on the internet.',
    slug: '/services/executive-digital-hq',
    tooltip: 'Bespoke personal website architecture & sovereign web entity',
  },
  {
    icon: <IconShield size={22} stroke={2} />,
    badge: 'SEARCH CONTROL',
    title: 'Digital Reputation Management',
    desc: 'Google Page 1 control, entity schemas, and proactive search defense.',
    slug: '/services/digital-reputation',
    tooltip: 'Google Knowledge Panel, AI search defense & entity verification',
  },
  {
    icon: <IconChartBar size={22} stroke={2} />,
    badge: 'EXECUTIVE REACH',
    title: 'LinkedIn Authority & Positioning',
    desc: 'C-suite ghostwriting and strategic reach without becoming a content creator.',
    slug: '/services/linkedin-authority',
    tooltip: 'High-level LinkedIn thought architecture for enterprise leaders',
  },
  {
    icon: <IconFileText size={22} stroke={2} />,
    badge: 'THOUGHT LEADERSHIP',
    title: 'Executive Content & Ghostwriting',
    desc: 'Transform macro industry expertise into commercial and advisory pipeline.',
    slug: '/services/executive-content',
    tooltip: 'Bespoke executive ghostwriting, op-eds and industry commentary',
  },
  {
    icon: <IconSearch size={22} stroke={2} />,
    badge: 'SEO & GEO',
    title: 'Executive SEO & Search Visibility',
    desc: 'Algorithmic optimization for search engines and generative AI models (GEO).',
    slug: '/services/executive-seo',
    tooltip: 'Generative Engine Optimization (GEO) & high-intent organic search',
  },
  {
    icon: <IconStar size={22} stroke={2} />,
    badge: 'STRATEGY',
    title: 'Personal Brand Strategy',
    desc: 'Positioning, messaging, and narrative architecture for career inflection.',
    slug: '/services/personal-brand-strategy',
    tooltip: 'Strategic narrative architecture for C-suite & board transitions',
  },
  {
    icon: <IconMicrophone size={22} stroke={2} />,
    badge: 'NED & MEDIA',
    title: 'Authority Building & Speaking',
    desc: 'Keynote placement, media commentary, and non-executive director visibility.',
    slug: '/services/authority-building',
    tooltip: 'Global media visibility & keynote speaking opportunities',
  },
]

export default function ServicesGridSection({ showViewAll = true, isPage = false }) {
  return (
    <section id="services" className="services-section-wrapper" aria-labelledby="services-heading">
      <div className="mlab-container">
        {/* Header Block matching the mockup */}
        <motion.div
          className="services-header-row mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="services-header-left">
            <div className="services-eyebrow-line-wrap mb-2">
              <span className="services-eyebrow-star">✦</span>
              <span className="services-eyebrow-text">OUR SERVICES</span>
              <span className="services-eyebrow-hr" />
            </div>

            {isPage ? (
              <h1 id="services-heading" className="services-main-heading">
                <StaggerText divideBy="word">Strategic services for lasting</StaggerText>{' '}
                <span className="services-heading-accent">digital influence.</span>
              </h1>
            ) : (
              <h2 id="services-heading" className="services-main-heading">
                <StaggerText divideBy="word">Strategic services for lasting</StaggerText>{' '}
                <span className="services-heading-accent">digital influence.</span>
              </h2>
            )}
          </div>

          <div className="services-header-right">
            <p className="services-header-desc">
              We combine strategy, content, technology and personal branding to position executives as trusted leaders — online and beyond.
            </p>

            {showViewAll && (
              <Link href="/services" className="services-view-all-btn">
                <span>View all services</span>
                <span className="services-view-all-circle">
                  <IconArrowRight size={13} stroke={2.5} />
                </span>
              </Link>
            )}
          </div>
        </motion.div>

        {/* 4x2 Responsive Grid */}
        <TooltipProvider>
          <div className="row g-4">
            {/* Cards 1 to 7 */}
            {SERVICES.map((srv, idx) => (
              <motion.div
                key={idx}
                className="col-12 col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 24,
                  delay: idx * 0.05,
                }}
              >
                <Link href={srv.slug} className="service-feature-card">
                  {/* Soft pink bottom-right corner wash */}
                  <span className="service-card-corner-glow" />

                  <div className="service-card-top">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <Tooltip side="top">
                        <TooltipTrigger asChild>
                          <div className="service-icon-box">
                            {srv.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>{srv.tooltip}</TooltipContent>
                      </Tooltip>
                      <span className="service-badge">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="service-card-title">
                      {srv.title}
                    </h3>

                    <p className="service-card-desc">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="service-learn-more">
                    <span>Learn more</span>
                    <span className="service-learn-more-arrow">&rarr;</span>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* 8th Card: Premium Dark Featured Card */}
            <motion.div
              className="col-12 col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 24,
                delay: 7 * 0.05,
              }}
            >
              <Link href="/contact" className="service-dark-card">
                {/* Vibrant radial glow in background */}
                <span className="service-dark-ambient-glow" />

                <div className="service-dark-top">
                  <div className="service-dark-badge mb-3">
                    <span style={{ color: '#FF3B81' }}>✦</span>
                    <span>PREMIUM SERVICE</span>
                  </div>

                  <h3 className="service-dark-title">
                    Bespoke Authority Advisory
                  </h3>

                  <p className="service-dark-desc">
                    Explore our full capabilities in Google search dominance, personal website architecture, and executive thought leadership.
                  </p>
                </div>

                <div className="d-flex align-items-end justify-content-between position-relative" style={{ zIndex: 2 }}>
                  <div className="service-dark-link">
                    <span>Browse All Services</span>
                    <span>&rarr;</span>
                  </div>

                  {/* Ascending glowing gradient bars SVG graphic */}
                  <div className="service-dark-bars-graphic">
                    <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="24" width="6" height="10" rx="3" fill="url(#bar-grad-1)" />
                      <rect x="12" y="15" width="6" height="19" rx="3" fill="url(#bar-grad-2)" />
                      <rect x="24" y="6" width="6" height="28" rx="3" fill="url(#bar-grad-3)" />
                      <rect x="36" y="0" width="6" height="34" rx="3" fill="url(#bar-grad-4)" />
                      <defs>
                        <linearGradient id="bar-grad-1" x1="3" y1="24" x2="3" y2="34" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF3B81" />
                          <stop offset="1" stopColor="#A855F7" />
                        </linearGradient>
                        <linearGradient id="bar-grad-2" x1="15" y1="15" x2="15" y2="34" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF3B81" />
                          <stop offset="1" stopColor="#A855F7" />
                        </linearGradient>
                        <linearGradient id="bar-grad-3" x1="27" y1="6" x2="27" y2="34" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF3B81" />
                          <stop offset="1" stopColor="#A855F7" />
                        </linearGradient>
                        <linearGradient id="bar-grad-4" x1="39" y1="0" x2="39" y2="34" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF3B81" />
                          <stop offset="1" stopColor="#9333EA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </TooltipProvider>
      </div>
    </section>
  )
}
