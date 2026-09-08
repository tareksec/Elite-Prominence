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
        boxShadow: '0 8px 24px rgba(15, 16, 19, 0.12)',
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
        onMouseEnter={(e) => (e.currentTarget.style.background = '#f1f5f9')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
      >
        <i className="fab fa-linkedin-in" style={{ fontSize: '13px' }}></i>
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
          color: '#0f1013',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          fontWeight: '600',
          transition: 'background 0.15s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#F8F9FA')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
      >
        <i className="fab fa-x-twitter" style={{ fontSize: '12px' }}></i>
        <span>Post</span>
      </button>

      <span style={{ width: '1px', height: '18px', background: '#E5E7EB', margin: '0 2px' }} />

      <button
        onClick={copyQuote}
        title="Copy formatted quote"
        style={{
          background: copied ? '#0f1013' : 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '6px 8px',
          borderRadius: '6px',
          color: copied ? '#FFFFFF' : '#0f1013',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          fontWeight: '600',
          transition: 'all 0.15s ease'
        }}
        onMouseEnter={(e) => {
          if (!copied) e.currentTarget.style.background = '#F8F9FA';
        }}
        onMouseLeave={(e) => {
          if (!copied) e.currentTarget.style.background = 'none';
        }}
      >
        {copied ? (
          <>
            <i className="fa-solid fa-check" style={{ fontSize: '12px' }}></i>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-quote-left" style={{ fontSize: '12px' }}></i>
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
