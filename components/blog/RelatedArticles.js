'use client';

import React from 'react';
import Link from 'next/link';

/**
 * RelatedArticles — HackerNoon-style 3-column related articles grid
 * Placed beneath the Author Card to keep executive readers engaged.
 * Smooth translateY(-4px) and subtle purple glow on hover.
 */
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
        borderTop: '1px solid #E5E7EB'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <span
            style={{
              fontSize: '12px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: '#7C3AED'
            }}
          >
            Further Reading
          </span>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '28px',
              color: '#0F1235',
              margin: '4px 0 0 0'
            }}
          >
            Recommended Executive Articles
          </h2>
        </div>

        <Link
          href="/blog-grid"
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#C026A8',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          View All <span aria-hidden="true">→</span>
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
                    src={art.heroImage || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&h=630&q=80'}
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
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, backgroundColor: '#FFFFFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#94A3B8', marginBottom: '8px' }}>
                    <span>{art.publishDate || 'Recent'}</span>
                    <span>•</span>
                    <span>{art.readTime || '6 min read'}</span>
                  </div>

                  <h3 className="ep-card-title">
                    {art.title}
                  </h3>

                  {art.excerpt && (
                    <p className="ep-card-excerpt">
                      {art.excerpt}
                    </p>
                  )}

                  <div style={{ marginTop: 'auto', paddingTop: '12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: '#7C3AED' }}>
                    <span>Read Article</span>
                    <span aria-hidden="true">→</span>
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
          border-radius: 14px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
        }

        .ep-related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(124, 58, 237, 0.12), 0 4px 10px rgba(15, 18, 53, 0.04);
          border-color: rgba(192, 38, 168, 0.3);
        }

        .ep-card-img-wrap {
          position: relative;
          width: 100%;
          height: 190px;
          overflow: hidden;
          background-color: #F8F7FF;
        }

        .ep-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .ep-related-card:hover .ep-card-img {
          transform: scale(1.04);
        }

        .ep-card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: linear-gradient(135deg, #7C3AED 0%, #C026A8 50%, #F472B6 100%);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(15, 18, 53, 0.2);
        }

        .ep-card-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 18px;
          line-height: 1.35;
          color: #0F1235;
          margin: 0 0 8px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.15s ease;
        }

        .ep-related-card:hover .ep-card-title {
          color: #7C3AED;
        }

        .ep-card-excerpt {
          font-size: 13px;
          line-height: 1.55;
          color: #64748B;
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
