import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { BLOG_ARTICLES } from '@/lib/blogData';

export const metadata = {
  title: 'Executive Insights for HR Leaders | Elite Prominence Blog',
  description: 'Strategic guidance on executive personal branding, LinkedIn strategy, and Google reputation management for senior human resources leaders and executive consultants.',
  alternates: {
    canonical: '/blog-grid',
  },
  openGraph: {
    title: 'Executive Insights for HR Leaders | Elite Prominence Blog',
    description: 'Strategic guidance on executive personal branding, LinkedIn strategy, and Google reputation management for senior human resources leaders and executive consultants.',
    url: 'https://www.prominence.agency/blog-grid',
    siteName: 'Elite Prominence',
    locale: 'en_US',
    type: 'website',
  },
};

const blogGridSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.prominence.agency',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.prominence.agency/blog-grid',
        },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Executive Insights for HR Leaders | Elite Prominence Blog',
      description: 'Strategic guidance on executive personal branding, LinkedIn strategy, and Google reputation management for senior human resources leaders and executive consultants.',
      url: 'https://www.prominence.agency/blog-grid',
    },
  ],
};

export default function Blog_Grid() {
  return (
    <div className="boxed_wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogGridSchema) }}
      />
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle14="Insights for HR Leaders">
        <section className="blog_section pt_150 pb_120" style={{ backgroundColor: '#F8F7FF' }}>
          <div className="container">
            <div className="section_title centred" style={{ marginBottom: '50px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 18px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #7C3AED 0%, #C026A8 50%, #F472B6 100%)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.6px',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}
              >
                Executive Thought Leadership
              </div>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '42px', color: '#0F1235' }}>
                Articles & Strategic Frameworks
              </h2>
              <p style={{ maxWidth: '820px', margin: '15px auto 0', fontSize: '18px', color: '#64748B', lineHeight: '1.7' }}>
                Navigating the C-suite landscape requires human resources executives to command more than internal operational credibility. Explore our field-tested methodologies on executive presence, Google reputation management, and high-signal personal branding.
              </p>
            </div>

            <div className="row">
              {BLOG_ARTICLES.map((post) => (
                <div key={post.slug} className="col-xl-4 col-md-6 col-sm-12 mb_40">
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid #E5E7EB',
                      boxShadow: '0 4px 20px rgba(15, 18, 53, 0.05)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                    className="ep-grid-card"
                  >
                    <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                      <Link href={`/blog/${post.slug}`}>
                        <img
                          src={post.heroImage}
                          alt={post.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Link>
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          background: 'linear-gradient(135deg, #7C3AED 0%, #C026A8 50%, #F472B6 100%)',
                          color: '#FFFFFF',
                          fontSize: '11px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          boxShadow: '0 2px 8px rgba(15, 18, 53, 0.25)'
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#94A3B8', marginBottom: '10px' }}>
                        <span>{post.publishDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 style={{ fontSize: '19px', lineHeight: '1.35', marginBottom: '12px', fontWeight: '600' }}>
                        <Link href={`/blog/${post.slug}`} style={{ color: '#0F1235', textDecoration: 'none' }}>
                          {post.title}
                        </Link>
                      </h3>

                      <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                        {post.excerpt}
                      </p>

                      <div style={{ borderTop: '1px solid #F1F0F9', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '13px', fontWeight: '600', color: '#7C3AED' }}>
                          <Link href={`/blog/${post.slug}`} style={{ color: '#7C3AED', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            Read Article <span aria-hidden="true">→</span>
                          </Link>
                        </span>
                        <span style={{ fontSize: '12px', color: '#94A3B8' }}>{post.author.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}