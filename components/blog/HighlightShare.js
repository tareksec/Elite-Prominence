'use client';

import React, { useState, useEffect, useRef } from 'react';

/**
 * HighlightShare — HackerNoon-style text selection tooltip
 * Lets readers highlight text in the article and immediately share it
 * to LinkedIn, X (Twitter), or copy the quote to clipboard.
 */
export default function HighlightShare({ articleTitle = '' }) {
  const [position, setPosition] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [copied, setCopied] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();

      if (!selection || selection.isCollapsed || !selection.toString().trim()) {
        setPosition(null);
        setSelectedText('');
        return;
      }

      const text = selection.toString().trim();
      // Only trigger if selection is within the article body and of meaningful length (>= 8 chars)
      if (text.length < 8) {
        setPosition(null);
        return;
      }

      const range = selection.getRangeAt(0);
      const commonAncestor = range.commonAncestorContainer;
      const element = commonAncestor.nodeType === Node.ELEMENT_NODE 
        ? commonAncestor 
        : commonAncestor.parentElement;

      // Check if selection is within an article body element
      const articleBody = element?.closest('[data-article-body="true"]') || element?.closest('.article-body');
      if (!articleBody) {
        setPosition(null);
        return;
      }

      const rect = range.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      setSelectedText(text);

      // Position tooltip directly above the selection, centered horizontally
      const top = rect.top + window.scrollY - 52;
      const left = Math.max(16, Math.min(window.innerWidth - 220, rect.left + window.scrollX + rect.width / 2 - 100));

      setPosition({ top, left });
    };

    const handlePointerDown = (e) => {
      // If clicking inside the tooltip, don't dismiss immediately
      if (tooltipRef.current && tooltipRef.current.contains(e.target)) {
        return;
      }
      // Small timeout to allow new selection to resolve
      setTimeout(() => {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) {
          setPosition(null);
          setSelectedText('');
        }
      }, 100);
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, []);

  if (!position || !selectedText) return null;

  const quoteSnippet = selectedText.length > 180 ? `${selectedText.slice(0, 177)}...` : selectedText;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://prominence.agency';

  const shareToLinkedIn = () => {
    // LinkedIn share with prefilled quote & url
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&summary=${encodeURIComponent(`"${quoteSnippet}" — from Elite Prominence`)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600,noopener,noreferrer');
  };

  const shareToX = () => {
    // X (Twitter) share with text quote
    const tweetText = `"${quoteSnippet}"\n\nVia @EliteProminence\n${currentUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=500,noopener,noreferrer');
  };

  const copyQuote = async () => {
    try {
      const formattedQuote = `"${selectedText}" — ${articleTitle ? `${articleTitle} | ` : ''}Elite Prominence (${currentUrl})`;
      await navigator.clipboard.writeText(formattedQuote);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy quote', err);
    }
  };

  return (
    <div
      ref={tooltipRef}
      role="toolbar"
      aria-label="Share highlighted text"
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        background: '#FFFFFF',
        borderRadius: '10px',
        padding: '6px 10px',
        boxShadow: '0 8px 24px rgba(15, 18, 53, 0.16), 0 2px 6px rgba(124, 58, 237, 0.1)',
        border: '1px solid #E5E7EB',
        gap: '4px',
        animation: 'epFadeUp 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
        transformOrigin: 'bottom center',
        whiteSpace: 'nowrap'
      }}
    >
      <button
        onClick={shareToLinkedIn}
        title="Share quote to LinkedIn"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '6px 8px',
          borderRadius: '6px',
          color: '#0A66C2',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          fontWeight: '600',
          transition: 'background 0.15s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#F8F7FF')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        <span>LinkedIn</span>
      </button>

      <span style={{ width: '1px', height: '18px', background: '#E5E7EB', margin: '0 2px' }} />

      <button
        onClick={shareToX}
        title="Share quote to X (Twitter)"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '6px 8px',
          borderRadius: '6px',
          color: '#0F1235',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          fontWeight: '600',
          transition: 'background 0.15s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#F8F7FF')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>Post</span>
      </button>

      <span style={{ width: '1px', height: '18px', background: '#E5E7EB', margin: '0 2px' }} />

      <button
        onClick={copyQuote}
        title="Copy formatted quote"
        style={{
          background: copied ? 'linear-gradient(135deg, #7C3AED 0%, #C026A8 50%, #F472B6 100%)' : 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '6px 8px',
          borderRadius: '6px',
          color: copied ? '#FFFFFF' : '#7C3AED',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          fontWeight: '600',
          transition: 'all 0.15s ease'
        }}
        onMouseEnter={(e) => {
          if (!copied) e.currentTarget.style.background = '#F8F7FF';
        }}
        onMouseLeave={(e) => {
          if (!copied) e.currentTarget.style.background = 'none';
        }}
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
            <span>Quote</span>
          </>
        )}
      </button>

      {/* Downward pointing arrow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-6px',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
          width: '10px',
          height: '10px',
          background: '#FFFFFF',
          borderRight: '1px solid #E5E7EB',
          borderBottom: '1px solid #E5E7EB'
        }}
      />

      <style jsx>{`
        @keyframes epFadeUp {
          from {
            opacity: 0;
            transform: translateY(6px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
