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
  title: 'How to Build a Personal Brand as an HR Leader | Elite Prominence',
  description: 'How to build a personal brand as an HR leader without becoming a content creator. Executive personal branding guidance by Elite Prominence.',
  alternates: {
    canonical: '/blog-details',
  },
  openGraph: {
    title: 'How to Build a Personal Brand as an HR Leader | Elite Prominence',
    description: 'How to build a personal brand as an HR leader without becoming a content creator. Executive personal branding guidance by Elite Prominence.',
    url: 'https://www.prominence.agency/blog-details',
    siteName: 'Elite Prominence',
    locale: 'en_US',
    type: 'article',
  },
};

export default function Blog_Details() {
  const post = getArticleBySlug('how-to-build-a-personal-brand-as-an-hr-leader') || BLOG_ARTICLES[0];

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
            item: 'https://www.prominence.agency/blog-details',
          },
        ],
      },
      {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: `https://www.prominence.agency${post.heroImage}`,
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
        datePublished: '2026-09-01T00:00:00Z',
        dateModified: '2026-09-05T00:00:00Z',
        mainEntityOfPage: 'https://www.prominence.agency/blog-details',
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