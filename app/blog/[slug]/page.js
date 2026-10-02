import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ModernHeader from '@/components/layout/ModernHeader';
import ModernFooter from '@/components/layout/ModernFooter';
// Elite Prominence blog reading interface with open web imagery
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
      title: 'Article Not Found',
      description: 'The requested article could not be located.'
    };
  }

  const seoTitles = {
    'how-to-build-a-personal-brand-as-an-hr-leader': 'Personal Branding for HR Leaders',
    'linkedin-strategy-for-senior-hr-professionals': 'LinkedIn Strategy for HR Leaders',
    'how-to-rank-on-google-as-an-independent-hr-consultant': 'Google SEO for HR Consultants',
    'why-chros-are-invisible-online': 'Why CHROs Are Invisible Online',
    'hr-leader-personal-brand-roi': 'HR Leader Personal Brand ROI',
    'done-for-you-personal-branding': 'Done-for-You Personal Branding Guide',
    'what-is-executive-personal-branding': 'Executive Personal Branding Guide',
    'thought-leadership-content-strategy-for-hr-leaders': 'Thought Leadership for HR Leaders',
  };

  const seoTitle = seoTitles[post.slug] || post.title.replace(/\s*\|\s*Elite Prominence.*$/i, '');
  const pageUrl = `https://www.prominence.agency/blog/${post.slug}`;
  const heroImageUrl = post.heroImage?.startsWith('http')
    ? post.heroImage
    : `https://www.prominence.agency${post.heroImage || '/assets/images/elite/blog_1_hr_personal_brand.jpg'}`;

  return {
    title: seoTitle,
    description: post.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      siteName: 'Elite Prominence',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [heroImageUrl],
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
        image: post.heroImage?.startsWith('http') ? post.heroImage : `https://www.prominence.agency${post.heroImage}`,
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

      <div className="mlab-page">
        <ModernHeader activeNav="insights" />

        {/* Breadcrumb Navigation */}
        <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(18,19,22,0.06)", background: "#FAF7F4", fontSize: "13px" }}>
          <div className="mlab-container">
            <div className="d-flex align-items-center gap-2" style={{ color: "#6c757d" }}>
              <Link href="/" style={{ color: "#6c757d", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <Link href="/blog-grid" style={{ color: "#6c757d", textDecoration: "none" }}>Insights</Link>
              <span>/</span>
              <span style={{ color: "#121316", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "450px" }}>
                {post.title}
              </span>
            </div>
          </div>
        </div>

        <main style={{ minHeight: '80vh', background: '#fafafc' }}>
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
        </main>

        <ModernFooter />
      </div>

      <BackToTop />
      <FontSizeControl />
      <HighlightShare articleTitle={post.title} />
    </>
  );
}
