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
    <header style={{ maxWidth: '1040px', margin: '40px auto 32px', padding: '0 24px', textAlign: 'center' }}>
      {/* Editorial Category Badge */}
      <div style={{ marginBottom: '18px' }}>
        <span className="editorial-badge">
          <span className="editorial-badge-dot">✦</span> {category.toUpperCase()}
        </span>
      </div>

      {/* Modern Sans-serif H1 Title */}
      <h1
        style={{
          fontSize: 'clamp(32px, 4.6vw, 50px)',
          fontWeight: 850,
          lineHeight: '1.14',
          letterSpacing: '-0.03em',
          color: '#121316',
          marginBottom: '20px'
        }}
      >
        {title}
      </h1>

      {/* Modern Meta Pill */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          background: '#FFFFFF',
          border: '1.5px solid rgba(18,19,22,0.08)',
          borderRadius: '999px',
          padding: '6px 20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
          color: '#6B7280',
          fontSize: '13.5px',
          fontWeight: '600',
          flexWrap: 'wrap',
          marginBottom: '24px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: '#121316',
              padding: '1px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
              <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '10px' }}>TC</span>
            )}
          </div>
          <span style={{ color: '#121316', fontWeight: 700 }}>{author}</span>
        </div>
        <span style={{ color: '#E5E7EB' }}>|</span>
        <time>{date}</time>
        <span style={{ color: '#E5E7EB' }}>|</span>
        <span style={{ color: '#FF3B81', fontWeight: 700 }}>{readTime}</span>
      </div>

      {/* Modern Tags Row */}
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
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 12px',
                borderRadius: '999px',
                background: '#FAF7F4',
                color: '#5A5D66',
                border: '1px solid rgba(18, 19, 22, 0.08)',
                fontSize: '12px',
                fontWeight: 600
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Full-width Hero Image */}
      {heroImage && (
        <div style={{
          maxWidth: '1060px',
          margin: '0 auto',
          textAlign: 'center',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1.5px solid rgba(18,19,22,0.08)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
        }}>
          <img
            src={heroImage}
            alt={title}
            loading="eager"
            style={{
              width: '100%',
              maxHeight: '480px',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      )}
    </header>
  )
}
