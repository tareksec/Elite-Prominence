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
        borderLeft: '5px solid #162d20',
        boxShadow: '0 8px 30px rgba(22, 45, 32, 0.08), 0 2px 8px rgba(15, 18, 53, 0.04)',
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
          background: 'radial-gradient(circle, rgba(210, 157, 43, 0.15) 0%, rgba(22, 45, 32, 0.03) 70%, transparent 100%)',
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
              color: '#162d20',
              marginBottom: '8px'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#D29D2B'
              }}
            />
            <span>Elite Prominence Executive Advisory</span>
          </div>

          <h3
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '23px',
              color: '#162d20',
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#162d20" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              100% Confidential
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#162d20" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              No Obligation
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#162d20" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              20 Minutes
            </span>
          </div>
        </div>

        <div style={{ flexShrink: 0 }}>
          {isInternal ? (
            <Link
              href={link}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 26px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700',
                color: '#FFFFFF',
                background: '#162d20',
                textDecoration: 'none',
                boxShadow: '0 6px 18px rgba(22, 45, 32, 0.25)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{buttonText}</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 26px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700',
                color: '#FFFFFF',
                background: '#162d20',
                textDecoration: 'none',
                boxShadow: '0 6px 18px rgba(22, 45, 32, 0.25)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{buttonText}</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
