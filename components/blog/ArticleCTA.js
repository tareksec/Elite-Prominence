'use client';

import React from 'react';
import Link from 'next/link';

/**
 * ArticleCTA — Mid-article conversion banner
 * Embedded at approximately 50% through the reading experience.
 * Styled as a sleek white card with signature brand gradient border.
 */
export default function ArticleCTA({
  headline = 'Ready to Close the Visibility Gap?',
  body = 'Schedule a confidential 20-minute digital presence assessment with our executive branding team.',
  buttonText = 'Book Strategy Call',
  link = '/contact'
}) {
  const isInternal = link.startsWith('/');

  return (
    <aside
      aria-label="Executive digital presence assessment"
      style={{
        margin: '2.75rem 0',
        padding: '28px 32px',
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #E5E7EB',
        borderLeft: '5px solid #0f1013',
        boxShadow: '0 8px 30px rgba(15, 16, 19, 0.06), 0 2px 8px rgba(15, 16, 19, 0.03)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient gradient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184, 144, 88, 0.15) 0%, rgba(15, 16, 19, 0.03) 70%, transparent 100%)',
          pointerEvents: 'none',
          filter: 'blur(16px)'
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ flex: '1 1 340px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: '#0f1013',
              marginBottom: '8px'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#b89058'
              }}
            />
            <span>Prominence Executive Advisory</span>
          </div>

          <h3
            style={{
              fontFamily: "var(--primary-font)",
              fontSize: '23px',
              fontWeight: '700',
              color: '#0f1013',
              lineHeight: 1.25,
              margin: '0 0 8px 0'
            }}
          >
            {headline}
          </h3>

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#4B5563',
              margin: 0
            }}
          >
            {body}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '12px',
              fontSize: '12px',
              color: '#64748B'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa-solid fa-check" style={{ color: '#b89058', fontSize: '11px' }}></i>
              100% Confidential
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa-solid fa-check" style={{ color: '#b89058', fontSize: '11px' }}></i>
              No Obligation
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa-solid fa-check" style={{ color: '#b89058', fontSize: '11px' }}></i>
              20 Minutes
            </span>
          </div>
        </div>

        <div style={{ flexShrink: 0 }}>
          {isInternal ? (
            <Link
              href={link}
              className="btn_style_one"
            >
              <span>{buttonText}</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn_style_one"
            >
              <span>{buttonText}</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
