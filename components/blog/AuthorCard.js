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
        borderRadius: '24px',
        backgroundColor: '#FFFFFF',
        border: '1.5px solid rgba(18, 19, 22, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
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
          background: 'linear-gradient(90deg, #FF3B81 0%, #7C3AED 100%)'
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
              background: '#121316',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)'
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
                backgroundColor: '#121316',
                color: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '22px'
              }}
            >
              {author.initials || 'EP'}
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="editorial-badge">
              <span className="editorial-badge-dot">✦</span> ADVISORY AUTHOR
            </span>
          </div>

          <h3
            style={{
              fontSize: '22px',
              fontWeight: 850,
              color: '#121316',
              letterSpacing: '-0.02em',
              margin: '6px 0 4px 0',
              lineHeight: 1.2
            }}
          >
            {author.name}
          </h3>

          <p
            style={{
              fontSize: '13.5px',
              fontWeight: 700,
              color: '#FF3B81',
              marginBottom: '12px'
            }}
          >
            {author.title}
          </p>

          <p
            style={{
              fontSize: '14.5px',
              lineHeight: 1.65,
              color: '#5A5D66',
              marginBottom: '22px'
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
            <Link
              href="/contact"
              className="prominence-btn-primary"
              style={{ padding: '10px 22px', fontSize: '13.5px' }}
            >
              <span>Book a Strategy Call</span>
              <span>&rarr;</span>
            </Link>

            <a
              href={author.linkedinUrl || 'https://www.linkedin.com/company/elite-prominence/'}
              target="_blank"
              rel="noopener noreferrer"
              className="prominence-btn-outline"
              style={{ padding: '10px 20px', fontSize: '13.5px' }}
            >
              <i className="fab fa-linkedin-in" style={{ marginRight: '6px' }}></i>
              <span>Follow on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
