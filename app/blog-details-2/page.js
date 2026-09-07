import React from 'react';
import Layout from '@/components/layout/Layout';
import ReadingProgressBar from '@/components/blog/ReadingProgressBar';
import ArticleHeader from '@/components/blog/ArticleHeader';
import TableOfContents from '@/components/blog/TableOfContents';
import ArticleSidebar from '@/components/blog/ArticleSidebar';
import ArticleRenderer from '@/components/blog/ArticleRenderer';
import AuthorCard from '@/components/blog/AuthorCard';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BackToTop from '@/components/blog/BackToTop';
import FontSizeControl from '@/components/blog/FontSizeControl';
import HighlightShare from '@/components/blog/HighlightShare';
import styles from '@/components/blog/BlogReading.module.css';
import { BLOG_ARTICLES, getArticleBySlug } from '@/lib/blogData';

export const metadata = {
  title: "A LinkedIn Strategy for CHROs Who Don't Have Time to Post | Elite Prominence",
  description: "A LinkedIn strategy and executive ghostwriting roadmap for CHROs and VP HRs who do not have time to post. Build quiet authority on LinkedIn with done-for-you support.",
  alternates: {
    canonical: '/blog-details-2',
  },
  openGraph: {
    title: "A LinkedIn Strategy for CHROs Who Don't Have Time to Post | Elite Prominence",
    description: "A LinkedIn strategy and executive ghostwriting roadmap for CHROs and VP HRs who do not have time to post. Build quiet authority on LinkedIn with done-for-you support.",
    url: 'https://www.prominence.agency/blog-details-2',
    siteName: 'Elite Prominence',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: "A LinkedIn Strategy for CHROs Who Don't Have Time to Post",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "A LinkedIn Strategy for CHROs Who Don't Have Time to Post | Elite Prominence",
    description: "A LinkedIn strategy and executive ghostwriting roadmap for CHROs and VP HRs who do not have time to post. Build quiet authority on LinkedIn with done-for-you support.",
    images: ['https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
};

export default function Blog_Details_Two() {
  const post = getArticleBySlug('linkedin-strategy-for-senior-hr-professionals') || BLOG_ARTICLES[2];
  const heroImageUrl = post.heroImage?.startsWith('http')
    ? post.heroImage
    : `https://www.prominence.agency${post.heroImage}`;

  const articleSchema = {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: 'https://www.prominence.agency/blog-details-2',
          },
        ],
      },
      {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: heroImageUrl,
        author: {
          '@type': 'Person',
          name: post.author.name,
          url: post.author.linkedinUrl
        },
        publisher: {
          '@type': 'Organization',
          name: 'Elite Prominence',
          url: 'https://www.prominence.agency',
        },
        datePublished: '2026-08-28T00:00:00Z',
        dateModified: '2026-09-05T00:00:00Z',
        mainEntityOfPage: 'https://www.prominence.agency/blog-details-2',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <ReadingProgressBar />

      <Layout headerStyle={4} footerStyle={1}>
        <article className={styles.readingContainer}>
          <ArticleHeader
            title={post.title}
            category={post.category}
            date={post.publishDate}
            readTime={post.readTime}
            tags={post.tags}
            heroImage={post.heroImage}
            author={post.author.name}
          />

          <div className={styles.threeColLayout}>
            {/* Sticky TOC Sidebar (Left, desktop only) */}
            <TableOfContents headings={post.headings} />

            {/* Center Content Column */}
            <div className={styles.articleContentCol}>
              <ArticleRenderer sections={post.sections} />

              <AuthorCard author={post.author} />

              <RelatedArticles articles={BLOG_ARTICLES} currentSlug={post.slug} />
            </div>

            {/* Sticky Share + Reactions Sidebar (Right) */}
            <ArticleSidebar slug={post.slug} />
          </div>
        </article>
      </Layout>

      <BackToTop />
      <FontSizeControl />
      <HighlightShare articleTitle={post.title} />
    </>
  );
}