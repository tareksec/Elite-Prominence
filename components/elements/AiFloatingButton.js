'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconSparkles,
  IconBrandWhatsapp,
  IconCalendarEvent,
  IconX,
  IconArrowUpRight,
  IconShieldCheck,
  IconChevronRight
} from '@tabler/icons-react'

export default function AiFloatingButton() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div ref={menuRef} className="ai-floating-widget-wrapper">
      {/* Executive Concierge Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="ai-concierge-card"
            role="dialog"
            aria-label="Prominence Executive Concierge"
          >
            {/* Header */}
            <div className="ai-concierge-header">
              <div className="d-flex align-items-center gap-2">
                <div className="ai-concierge-avatar">
                  <IconSparkles size={16} stroke={2} />
                </div>
                <div>
                  <div className="ai-concierge-brand">Prominence Concierge</div>
                  <div className="ai-concierge-status">
                    <span className="ai-concierge-dot" />
                    <span>Executive Advisory • Available</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="ai-concierge-close"
                aria-label="Close Concierge"
              >
                <IconX size={16} stroke={2} />
              </button>
            </div>

            {/* Quick Action Cards */}
            <div className="ai-concierge-actions">
              {/* WhatsApp VIP Direct Advisory */}
              <a
                href="https://wa.me/8801645441584"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="ai-action-card ai-action-whatsapp"
              >
                <div className="ai-action-icon-box ai-icon-whatsapp">
                  <IconBrandWhatsapp size={20} stroke={2} />
                </div>
                <div className="ai-action-content">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="ai-action-title">WhatsApp Direct Line</span>
                    <span className="ai-action-tag ai-tag-whatsapp">Priority</span>
                  </div>
                  <span className="ai-action-desc">Direct advisory with Managing Partner</span>
                </div>
                <IconArrowUpRight size={14} className="ai-action-arrow" />
              </a>

              {/* AI Brand Stature Audit */}
              <Link
                href="/resources/assessment"
                onClick={() => setIsOpen(false)}
                className="ai-action-card ai-action-audit"
              >
                <div className="ai-action-icon-box ai-icon-audit">
                  <IconSparkles size={18} stroke={2} />
                </div>
                <div className="ai-action-content">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="ai-action-title">AI Brand Stature Audit</span>
                    <span className="ai-action-tag ai-tag-audit">Instant</span>
                  </div>
                  <span className="ai-action-desc">Analyze Google search & AI LLM footprint</span>
                </div>
                <IconChevronRight size={14} className="ai-action-arrow" />
              </Link>

              {/* Private Strategy Consultation */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="ai-action-card ai-action-consult"
              >
                <div className="ai-action-icon-box ai-icon-consult">
                  <IconCalendarEvent size={18} stroke={2} />
                </div>
                <div className="ai-action-content">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="ai-action-title">Private Consultation</span>
                    <span className="ai-action-tag ai-tag-consult">30-Min</span>
                  </div>
                  <span className="ai-action-desc">Confidential executive strategy session</span>
                </div>
                <IconChevronRight size={14} className="ai-action-arrow" />
              </Link>
            </div>

            {/* Footer / Assurance */}
            <div className="ai-concierge-footer">
              <IconShieldCheck size={13} stroke={2} />
              <span>Strict C-Suite Discretion & Mutual NDA Protected</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`ai-floating-trigger ${isOpen ? 'active' : ''}`}
        aria-label={isOpen ? 'Close executive options' : 'Open Prominence executive concierge'}
        aria-expanded={isOpen}
      >
        <span className="ai-trigger-backdrop-glow" />
        <div className="d-flex align-items-center gap-2">
          {isOpen ? (
            <IconX size={18} stroke={2.2} />
          ) : (
            <>
              <div className="ai-trigger-icon-wrap">
                <IconSparkles size={16} stroke={2.2} />
              </div>
              <span className="ai-trigger-text">Executive Concierge</span>
              <span className="ai-trigger-pulse-dot" />
            </>
          )}
        </div>
      </button>
    </div>
  )
}
