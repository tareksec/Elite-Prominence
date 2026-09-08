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
        backgroundColor: '#ffffff',
        border: '1px solid #eaedf0',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(15, 16, 19, 0.04)'
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
          background: '#b89058'
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
              background: '#0f1013',
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
                backgroundColor: '#0f1013',
                color: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "var(--primary-font)",
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="prominence_badge">
              Author &amp; Advisor
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
              fontSize: '24px',
              color: '#0f1013',
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
              className="btn_style_two btn_sm"
            >
              <i className="fab fa-linkedin-in" style={{ marginRight: '6px', fontSize: '14px' }}></i>
              <span>Follow on LinkedIn</span>
            </a>

            <Link
              href="/contact"
              className="btn_style_one btn_sm"
            >
              <span>Book a Strategy Call</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
