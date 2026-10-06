'use client';

import React from 'react';
import Link from 'next/link';

export default function RelatedArticles({ articles = [], currentSlug = '' }) {
  // Filter out the active reading article and take up to 3
  const filtered = articles
    .filter((art) => art.slug !== currentSlug)
    .slice(0, 3);

  if (filtered.length === 0) return null;

  return (
    <section
      aria-label="Related articles from Elite Prominence"
      style={{
        marginTop: '4rem',
        paddingTop: '3rem',
        borderTop: '1px solid rgba(18, 19, 22, 0.08)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span className="editorial-badge">
            <span className="editorial-badge-dot">✦</span> FURTHER READING
          </span>
          <h2
            style={{
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 850,
              letterSpacing: '-0.02em',
              color: '#121316',
              margin: '8px 0 0 0'
            }}
          >
            Recommended Executive Articles
          </h2>
        </div>

        <Link
          href="/blog-grid"
          style={{
            fontSize: '13.5px',
            fontWeight: 700,
            color: '#121316',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>View All</span>
          <span style={{ color: '#FF3B81' }}>&rarr;</span>
        </Link>
      </div>

      <div className="ep-related-grid">
        {filtered.map((art) => {
          return (
            <article key={art.slug} className="ep-related-card">
              <Link href={`/blog/${art.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Image Wrap */}
                <div className="ep-card-img-wrap">
                  <img
                    src={art.heroImage || '/assets/images/project/project_1.jpg'}
                    alt={art.title}
                    className="ep-card-img"
                  />
                  {art.category && (
                    <span className="ep-card-badge">
                      {art.category}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flexGrow: 1, backgroundColor: '#FFFFFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>
                    <span>{art.publishDate || 'Recent'}</span>
                    <span>•</span>
                    <span style={{ color: '#FF3B81', fontWeight: 700 }}>{art.readTime || '6 min read'}</span>
                  </div>

                  <h3 className="ep-card-title">
                    {art.title}
                  </h3>

                  {art.excerpt && (
                    <p className="ep-card-excerpt">
                      {art.excerpt}
                    </p>
                  )}

                  <div style={{ marginTop: 'auto', paddingTop: '12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#121316' }}>
                    <span>Read Article</span>
                    <span style={{ color: '#FF3B81' }}>&rarr;</span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      <style jsx>{`
        .ep-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .ep-related-card {
          border-radius: 20px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1.5px solid rgba(18, 19, 22, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
        }

        .ep-related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(18, 19, 22, 0.08);
          border-color: rgba(255, 59, 129, 0.3);
        }

        .ep-card-img-wrap {
          position: relative;
          width: 100%;
          height: 190px;
          overflow: hidden;
          background-color: #FAF7F4;
        }

        .ep-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ep-related-card:hover .ep-card-img {
          transform: scale(1.05);
        }

        .ep-card-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(18, 19, 22, 0.9);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 4px 10px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .ep-card-title {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 16.5px;
          font-weight: 800;
          line-height: 1.35;
          color: #121316;
          margin: 0 0 8px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s ease;
        }

        .ep-related-card:hover .ep-card-title {
          color: #FF3B81;
        }

        .ep-card-excerpt {
          font-size: 13px;
          line-height: 1.55;
          color: #6B7280;
          margin: 0 0 12px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 991px) {
          .ep-related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .ep-related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
