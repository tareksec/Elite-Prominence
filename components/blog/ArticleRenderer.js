'use client';

import React from 'react';
import ArticleCTA from './ArticleCTA';
import styles from './BlogReading.module.css';

/**
 * ArticleRenderer — Renders the structured editorial sections with HackerNoon typography
 * Inserts the mid-article conversion CTA at ~50% (after 3rd H2 section).
 */
export default function ArticleRenderer({ sections = [], keyTakeaways = [], faqs = [] }) {
  if (!sections || sections.length === 0) return null;

  // Insert CTA roughly halfway through sections
  const ctaIndex = Math.max(1, Math.floor(sections.length / 2) - 1);

  return (
    <div className={`${styles.articleBody} article-body`} data-article-body="true">
      {/* AEO Executive Summary & Direct Answer Box */}
      {keyTakeaways && keyTakeaways.length > 0 && (
        <div className={`${styles.takeawaysBox} executive-takeaways`}>
          <div className={styles.takeawaysHeader}>
            <span>✦</span>
            <span>Executive Summary &amp; Direct Takeaways</span>
          </div>
          <ul className={styles.takeawaysList}>
            {keyTakeaways.map((point, ptIdx) => (
              <li key={ptIdx} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      )}

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
                    <i className="fa-solid fa-lightbulb" style={{ fontSize: '13px', color: '#FF3B81' }}></i>
                    <span>{sec.definition.title}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '16px', color: '#1F2937', lineHeight: 1.6 }}>
                    {sec.definition.text}
                  </p>
                </div>
              )}

              {sec.table && (
                <div className={styles.tableWrapper}>
                  <table className={styles.editorialTable}>
                    {sec.table.headers && (
                      <thead>
                        <tr>
                          {sec.table.headers.map((th, hIdx) => (
                            <th key={hIdx}>{th}</th>
                          ))}
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {sec.table.rows && sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} dangerouslySetInnerHTML={{ __html: cell }} />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

      {/* AEO FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className={styles.faqContainer} id="frequently-asked-questions">
          <h2 style={{ marginBottom: '1.5rem', color: '#121316', fontSize: '26px' }}>
            Frequently Asked Executive Questions
          </h2>
          {faqs.map((faq, fIdx) => (
            <div key={fIdx} className={styles.faqItem} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className={styles.faqQuestion} itemProp="name">
                <span className={styles.faqQuestionDot}>Q:</span>
                <span>{faq.question}</span>
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className={styles.faqAnswer} itemProp="text" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
