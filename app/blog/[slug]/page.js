import React from 'react';
import { notFound } from 'next/navigation';
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
import { BLOG_ARTICLES, getArticleBySlug, getAllArticleSlugs } from '@/lib/blogData';

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

export async function generateMetadata({ params }) {
  const post = getArticleBySlug(params.slug);
  if (!post) {
    return {
      title: 'Article Not Found | Elite Prominence',
      description: 'The requested article could not be located.'
    };
  }

  const pageUrl = `https://www.prominence.agency/blog/${post.slug}`;

  return {
    title: `${post.title} | Elite Prominence`,
    description: post.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${post.title} | Elite Prominence`,
      description: post.excerpt,
      url: pageUrl,
      siteName: 'Elite Prominence',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: `https://www.prominence.agency${post.heroImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Elite Prominence`,
      description: post.excerpt,
      images: [`https://www.prominence.agency${post.heroImage}`],
    }
  };
}

export default function BlogPostPage({ params }) {
  const post = getArticleBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `https://www.prominence.agency/blog/${post.slug}`;

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
            name: 'Insights',
            item: 'https://www.prominence.agency/blog-grid',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: pageUrl,
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
          jobTitle: post.author.title,
          url: post.author.linkedinUrl
        },
        publisher: {
          '@type': 'Organization',
          name: 'Elite Prominence',
          url: 'https://www.prominence.agency',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.prominence.agency/favicon.png'
          }
        },
        datePublished: '2026-08-01T00:00:00Z',
        dateModified: '2026-09-05T00:00:00Z',
        mainEntityOfPage: pageUrl,
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
