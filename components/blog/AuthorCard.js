'use client';

import React from 'react';
import Link from 'next/link';

/**
 * AuthorCard — Executive credibility and bio box
 * Displayed after the article content.
 * Highlights the author's expertise, links to LinkedIn,
 * and features a direct call to book a strategy call.
 */
export default function AuthorCard({
  author = {
    name: 'Tarek Chowdhury',
    founderName: 'Md Tarek',
    title: 'Founder & Executive Brand Advisor at Elite Prominence',
    initials: 'TC',
    bio: 'Advising CHROs, VP HRs, and executive consultants on building authoritative digital presence, personal websites, and Google visibility without becoming full-time content creators.',
    linkedinUrl: 'https://www.linkedin.com/in/mdtarek404/',
    avatar: '/assets/images/elite/tarek-portrait.jpg'
  }
}) {
  return (
    <section
      aria-label="Author biography and booking"
      style={{
        marginTop: '3.5rem',
        marginBottom: '3.5rem',
        padding: '32px',
        borderRadius: '16px',
        backgroundColor: '#F8F7FF',
        border: '1px solid rgba(124, 58, 237, 0.16)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(15, 18, 53, 0.04)'
      }}
    >
      {/* Subtle brand accent bar at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: '#0D1322'
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '24px',
          flexWrap: 'wrap'
        }}
      >
        {/* Author Avatar */}
        <div style={{ flexShrink: 0 }}>
          <div
            style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              background: '#0D1322',
              padding: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            ) : null}
            <div
              style={{
                display: author.avatar ? 'none' : 'flex',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#0F1235',
                color: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: '24px',
                letterSpacing: '1px'
              }}
            >
              {author.initials || 'EP'}
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                color: '#0D1322',
                background: 'rgba(13, 19, 34, 0.05)',
                border: '1px solid rgba(13, 19, 34, 0.1)',
                padding: '3px 8px',
                borderRadius: '4px'
              }}
            >
              Author & Advisor
            </span>
          </div>

          <h3
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '24px',
              color: '#0F1235',
              margin: '4px 0 6px 0',
              lineHeight: 1.2
            }}
          >
            {author.name}
          </h3>

          <p
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#64748B',
              marginBottom: '12px'
            }}
          >
            {author.title}
          </p>

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.65,
              color: '#374151',
              marginBottom: '20px'
            }}
          >
            {author.bio}
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap'
            }}
          >
            <a
              href={author.linkedinUrl || 'https://www.linkedin.com/company/elite-prominence/'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0A66C2',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #0A66C2',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0A66C2';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0A66C2';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>Follow on LinkedIn</span>
            </a>

            <a
              href="/contact"
              className="btn_style_one"
              style={{ fontSize: '13px', padding: '10px 22px' }}
            >
              <span>Book a Strategy Call</span>
              <i className="fal fa-arrow-right" style={{ fontSize: '12px' }}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
