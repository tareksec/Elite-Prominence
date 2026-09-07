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
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 20px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #7C3AED 0%, #C026A8 50%, #F472B6 100%)',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.6px',
            textTransform: 'uppercase',
            boxShadow: '0 4px 14px rgba(124, 58, 237, 0.22)'
          }}
        >
          {category}
        </span>
      </div>

      {/* H1 Title */}
      <h1
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 'clamp(30px, 4.5vw, 46px)',
          lineHeight: '1.2',
          color: '#0F1235',
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
          color: '#64748B',
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
              background: 'linear-gradient(135deg, #7C3AED 0%, #C026A8 50%, #F472B6 100%)',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(124, 58, 237, 0.25)',
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
                  background: '#0F1235',
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
          <span style={{ color: '#0F1235', fontWeight: '600' }}>{author}</span>
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
                borderRadius: '9999px',
                background: '#F1F0F9',
                color: '#7C3AED',
                fontSize: '13px',
                fontWeight: '500'
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
              boxShadow: '0 10px 30px rgba(15, 18, 53, 0.08)'
            }}
          />
        </div>
      )}
    </header>
  )
}
