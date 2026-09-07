'use client';

import React from 'react';
import ArticleCTA from './ArticleCTA';
import styles from './BlogReading.module.css';

/**
 * ArticleRenderer — Renders the structured editorial sections with HackerNoon typography
 * Inserts the mid-article conversion CTA at ~50% (after 3rd H2 section).
 */
export default function ArticleRenderer({ sections = [] }) {
  if (!sections || sections.length === 0) return null;

  // Insert CTA roughly halfway through sections
  const ctaIndex = Math.max(1, Math.floor(sections.length / 2) - 1);

  return (
    <div className={`${styles.articleBody} article-body`} data-article-body="true">
      {sections.map((sec, idx) => {
        const isH3 = sec.level === 3;

        return (
          <React.Fragment key={sec.id || `sec-${idx}`}>
            <section style={{ marginBottom: '1.5rem' }}>
              {sec.heading && (
                isH3 ? (
                  <h3 id={sec.id}>{sec.heading}</h3>
                ) : (
                  <h2 id={sec.id}>{sec.heading}</h2>
                )
              )}

              {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}

              {sec.quote && (
                <blockquote>
                  <p>{sec.quote}</p>
                </blockquote>
              )}

              {sec.definition && (
                <div className={styles.definitionBox}>
                  <div className={styles.defTitle}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.002 6.002 0 00-4-5.659V5a2 2 0 114 0v2.091a6.002 6.002 0 004 5.659v5.25m-8 0h8" />
                    </svg>
                    <span>{sec.definition.title}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '16px', color: '#1F2937', lineHeight: 1.6 }}>
                    {sec.definition.text}
                  </p>
                </div>
              )}

              {sec.list && (
                <ul>
                  {sec.list.map((item, lIdx) => (
                    <li
                      key={lIdx}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              )}
            </section>

            {/* Mid-Article CTA Banner */}
            {idx === ctaIndex && (
              <ArticleCTA
                headline="Ready to Close the Visibility Gap?"
                body="Schedule a confidential 20-minute digital presence assessment with Elite Prominence."
                buttonText="Book Strategy Call"
                link="https://prominence.agency/contact"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
