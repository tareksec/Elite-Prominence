'use client';

import React from 'react';

export default function ArticleHeader({
  title,
  category = 'Personal Branding',
  date = 'Recent',
  readTime = '7 min read',
  tags = ['Personal Branding', 'HR Leaders', 'Executive Presence'],
  heroImage = '/assets/images/elite/blog_1_hr_personal_brand.jpg',
  author = 'Tarek Chowdhury',
  authorAvatar = '/assets/images/elite/tarek-portrait.jpg'
}) {
  return (
    <header style={{ maxWidth: '960px', margin: '48px auto 32px', padding: '0 24px', textAlign: 'center' }}>
      {/* Category Badge */}
      <div style={{ marginBottom: '20px' }}>
        <span
          className="prominence_badge"
          style={{
            background: '#0D0D14',
            color: '#FFFFFF',
            borderColor: 'rgba(255, 255, 255, 0.2)'
          }}
        >
          {category}
        </span>
      </div>

      {/* H1 Title */}
      <h1
        style={{
          fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)",
          fontSize: 'clamp(30px, 4.5vw, 46px)',
          lineHeight: '1.2',
          color: '#0D0D14',
          marginBottom: '24px',
          letterSpacing: '-0.5px'
        }}
      >
        {title}
      </h1>

      {/* Meta Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          color: '#6B7280',
          fontSize: '14px',
          fontWeight: '500',
          flexWrap: 'wrap',
          marginBottom: '24px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#0D0D14',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden'
            }}
          >
            {authorAvatar ? (
              <img
                src={authorAvatar}
                alt={author}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: '#0D0D14',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '12px'
                }}
              >
                TC
              </div>
            )}
          </div>
          <span style={{ color: '#0D0D14', fontWeight: '600' }}>{author}</span>
        </div>
        <span style={{ color: '#CBD5E1' }}>&bull;</span>
        <time>{date}</time>
        <span style={{ color: '#CBD5E1' }}>&bull;</span>
        <span>{readTime}</span>
      </div>

      {/* Tags Row */}
      {tags && tags.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}
        >
          {tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-block',
                padding: '5px 14px',
                borderRadius: '6px',
                background: 'rgba(13, 13, 20, 0.05)',
                color: '#0D0D14',
                border: '1px solid rgba(13, 13, 20, 0.1)',
                fontSize: '12.5px',
                fontWeight: '600',
                fontFamily: 'var(--primary-font)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Full-width Hero Image */}
      {heroImage && (
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <img
            src={heroImage}
            alt={title}
            loading="eager"
            style={{
              width: '100%',
              maxHeight: '480px',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(13, 13, 20, 0.08)'
            }}
          />
        </div>
      )}
    </header>
  )
}
