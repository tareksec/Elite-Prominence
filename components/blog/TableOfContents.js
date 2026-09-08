'use client'
import React, { useEffect, useState } from 'react'

export default function TableOfContents({ headings = [] }) {
  const [items, setItems] = useState(headings)
  const [activeId, setActiveId] = useState('')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // Auto-discover headings if not provided
  useEffect(() => {
    if (headings && headings.length > 0) {
      setItems(headings)
      return
    }

    const discovered = []
    const elements = document.querySelectorAll('.article-body h2, .article-body h3')
    elements.forEach((el, idx) => {
      if (!el.id) {
        el.id = 'section-' + idx
      }
      discovered.push({
        id: el.id,
        text: el.innerText.replace(/^[#\s]+/, ''),
        level: el.tagName.toLowerCase() === 'h3' ? 3 : 2
      })
    })

    if (discovered.length > 0) {
      setItems(discovered)
    }
  }, [headings])

  // Track active heading with IntersectionObserver
  useEffect(() => {
    if (!items || items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -65% 0px', threshold: 0 }
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  const scrollToHeading = (id) => {
    const target = document.getElementById(id)
    if (target) {
      const yOffset = -90
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setIsMobileOpen(false)
    }
  }

  if (!items || items.length === 0) return null

  return (
    <>
      {/* Desktop Sticky Left Sidebar (min-width: 1280px) */}
      <aside
        className="toc-desktop-sidebar"
        aria-label="Table of contents"
        style={{
          position: 'sticky',
          top: '96px',
          alignSelf: 'start',
          maxHeight: 'calc(100vh - 120px)',
          overflowY: 'auto',
          width: '240px',
          paddingRight: '12px'
        }}
      >
        <div
          style={{
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#64748B',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <i className="fa-solid fa-list-ul" style={{ fontSize: '13px', color: '#8B5CF6' }}></i>
          Table of Contents
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderLeft: '2px solid #E5E7EB' }}>
          {items.map((heading) => {
            const isActive = activeId === heading.id
            return (
              <li key={heading.id} style={{ position: 'relative' }}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToHeading(heading.id)
                  }}
                  style={{
                    display: 'block',
                    padding: heading.level === 3 ? '6px 12px 6px 28px' : '6px 12px 6px 16px',
                    fontSize: heading.level === 3 ? '13px' : '14px',
                    lineHeight: '1.4',
                    color: isActive ? '#0D0D14' : '#6B7280',
                    fontWeight: isActive ? '700' : '400',
                    borderLeft: isActive ? '2px solid #8B5CF6' : '2px solid transparent',
                    marginLeft: '-2px',
                    background: isActive ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {heading.text}
                </a>
              </li>
            )
          })}
        </ul>
      </aside>

      {/* Mobile Floating Button (under 1280px) */}
      <button
        className="mobile-toc-trigger"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open table of contents"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: '84px',
          right: '20px',
          background: '#0D0D14',
          color: '#FFFFFF',
          borderRadius: '8px',
          padding: '10px 18px',
          fontSize: '13px',
          fontWeight: '600',
          fontFamily: 'var(--primary-font)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.35)',
          zIndex: 999,
          alignItems: 'center',
          gap: '6px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          cursor: 'pointer'
        }}
      >
        <i className="fa-solid fa-list-ul" style={{ fontSize: '13px' }}></i>
        TOC
      </button>

      {/* Mobile Drawer Modal */}
      {isMobileOpen && (
        <>
          <div
            onClick={() => setIsMobileOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 18, 53, 0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 1099
            }}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Table of Contents Drawer"
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              background: '#FFFFFF',
              borderRadius: '20px 20px 0 0',
              maxHeight: '70vh',
              overflowY: 'auto',
              padding: '24px',
              boxShadow: '0 -10px 30px rgba(0,0,0,0.15)',
              zIndex: 1100
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: "var(--primary-font)", fontSize: '20px', color: '#0D0D14', margin: 0 }}>
                Table of Contents
              </h3>
              <button
                onClick={() => setIsMobileOpen(false)}
                style={{ fontSize: '24px', color: '#6B7280', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderLeft: '2px solid #E5E7EB' }}>
              {items.map((heading) => {
                const isActive = activeId === heading.id
                return (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToHeading(heading.id)
                      }}
                      style={{
                        display: 'block',
                        padding: heading.level === 3 ? '8px 12px 8px 24px' : '8px 12px 8px 16px',
                        fontSize: heading.level === 3 ? '13px' : '14px',
                        color: isActive ? '#0D0D14' : '#6B7280',
                        fontWeight: isActive ? '700' : '400',
                        textDecoration: 'none'
                      }}
                    >
                      {heading.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      )}

      <style jsx>{`
        @media (max-width: 1279px) {
          .toc-desktop-sidebar {
            display: none !important;
          }
          .mobile-toc-trigger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}
