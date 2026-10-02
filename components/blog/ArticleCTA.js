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
        margin: '3rem 0',
        padding: '30px 34px',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        border: '1.5px solid rgba(18, 19, 22, 0.08)',
        borderLeft: '5px solid #FF3B81',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
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
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: '#FF3B81',
              marginBottom: '8px'
            }}
          >
            <span>✦ Prominence Executive Advisory</span>
          </div>

          <h3
            style={{
              fontSize: '22px',
              fontWeight: 850,
              color: '#121316',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              margin: '0 0 8px 0'
            }}
          >
            {headline}
          </h3>

          <p
            style={{
              fontSize: '14.5px',
              lineHeight: 1.6,
              color: '#5A5D66',
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
              marginTop: '14px',
              fontSize: '12.5px',
              color: '#6B7280',
              fontWeight: 600
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa-solid fa-check" style={{ color: '#10B981', fontSize: '11px' }}></i>
              100% Confidential
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa-solid fa-check" style={{ color: '#10B981', fontSize: '11px' }}></i>
              No Obligation
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa-solid fa-check" style={{ color: '#10B981', fontSize: '11px' }}></i>
              20 Minutes
            </span>
          </div>
        </div>

        <div style={{ flexShrink: 0 }}>
          {isInternal ? (
            <Link
              href={link}
              className="prominence-btn-primary"
            >
              <span>{buttonText}</span>
              <span>&rarr;</span>
            </Link>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="prominence-btn-primary"
            >
              <span>{buttonText}</span>
              <span>&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
