'use client'
import React, { useEffect, useState } from 'react'

export default function ArticleSidebar({ slug = 'default-post' }) {
  const [reactions, setReactions] = useState({
    claps: false,
    likes: false,
    insights: false
  })
  const [toastMsg, setToastMsg] = useState('')

  const baseCounts = {
    claps: 42,
    likes: 28,
    insights: 35
  }

  const storageKey = `ep-reactions-${slug}`

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        setReactions(JSON.parse(saved))
      }
    } catch (e) {}
  }, [storageKey])

  const toggleReaction = (type) => {
    setReactions((prev) => {
      const updated = { ...prev, [type]: !prev[type] }
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated))
      } catch (e) {}
      showToast(updated[type] ? 'Reaction added!' : 'Reaction removed')
      return updated
    })
  }

  const showToast = (msg) => {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(''), 2400)
  }

  const shareLinkedIn = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href)
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=600')
    }
  }

  const shareX = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href)
      const title = encodeURIComponent(document.title)
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'width=600,height=400')
    }
  }

  const copyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard!')
      })
    }
  }

  const mobileShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      }).catch(() => {})
    } else {
      copyLink()
    }
  }

  return (
    <>
      {/* Desktop Sticky Right Sidebar (>= 1280px) */}
      <aside
        className="sidebar-desktop"
        aria-label="Share and reactions"
        style={{
          position: 'sticky',
          top: '96px',
          alignSelf: 'start',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: '9999px',
          padding: '16px 10px',
          boxShadow: '0 1px 3px rgba(15, 18, 53, 0.05)',
          width: '68px',
          marginLeft: 'auto'
        }}
      >
        {/* Share Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={shareLinkedIn}
            title="Share on LinkedIn"
            aria-label="Share on LinkedIn"
            className="action-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.65 1.65 0 0 0-1.66 1.65c0 .91.74 1.65 1.66 1.65.9 0 1.65-.74 1.65-1.65 0-.9-.75-1.65-1.65-1.65z" />
            </svg>
          </button>

          <button
            onClick={shareX}
            title="Share on X"
            aria-label="Share on X"
            className="action-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>

          <button
            onClick={copyLink}
            title="Copy Link"
            aria-label="Copy Link"
            className="action-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
            </svg>
          </button>
        </div>

        <div style={{ width: '28px', height: '1px', background: '#E5E7EB', margin: '4px 0' }} />

        {/* Reactions */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          {/* Clap / Endorsement */}
          <button
            onClick={() => toggleReaction('claps')}
            className={`action-btn ${reactions.claps ? 'active' : ''}`}
            title="Endorse"
            aria-label="Endorse"
          >
            <i className="fal fa-thumbs-up" style={{ fontSize: '14px', lineHeight: 1 }}></i>
            <span style={{ fontSize: '11px', fontWeight: '700', marginTop: '2px', lineHeight: 1 }}>
              {baseCounts.claps + (reactions.claps ? 1 : 0)}
            </span>
          </button>

          {/* Like */}
          <button
            onClick={() => toggleReaction('likes')}
            className={`action-btn ${reactions.likes ? 'active' : ''}`}
            title="Bookmark"
            aria-label="Bookmark"
          >
            <i className="fal fa-bookmark" style={{ fontSize: '14px', lineHeight: 1 }}></i>
            <span style={{ fontSize: '11px', fontWeight: '700', marginTop: '2px', lineHeight: 1 }}>
              {baseCounts.likes + (reactions.likes ? 1 : 0)}
            </span>
          </button>

          {/* Insightful */}
          <button
            onClick={() => toggleReaction('insights')}
            className={`action-btn ${reactions.insights ? 'active' : ''}`}
            title="Insightful"
            aria-label="Insightful"
          >
            <i className="fal fa-lightbulb" style={{ fontSize: '14px', lineHeight: 1 }}></i>
            <span style={{ fontSize: '11px', fontWeight: '700', marginTop: '2px', lineHeight: 1 }}>
              {baseCounts.insights + (reactions.insights ? 1 : 0)}
            </span>
          </button>
        </div>
      </aside>

      {/* Mobile Fixed Bottom Bar (< 768px) */}
      <aside
        className="sidebar-mobile-bottom"
        aria-label="Mobile Reactions & Share"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#FFFFFF',
          borderTop: '1px solid #E5E7EB',
          padding: '10px 20px',
          zIndex: 1000,
          boxShadow: '0 -4px 16px rgba(15, 18, 53, 0.08)',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <button
          onClick={() => toggleReaction('claps')}
          className={`action-btn ${reactions.claps ? 'active' : ''}`}
          aria-label="Endorse"
        >
          <i className="fal fa-thumbs-up" style={{ fontSize: '14px' }}></i>
          <span style={{ fontSize: '11px', fontWeight: '700' }}>
            {baseCounts.claps + (reactions.claps ? 1 : 0)}
          </span>
        </button>

        <button
          onClick={() => toggleReaction('likes')}
          className={`action-btn ${reactions.likes ? 'active' : ''}`}
          aria-label="Bookmark"
        >
          <i className="fal fa-bookmark" style={{ fontSize: '14px' }}></i>
          <span style={{ fontSize: '11px', fontWeight: '700' }}>
            {baseCounts.likes + (reactions.likes ? 1 : 0)}
          </span>
        </button>

        <button
          onClick={() => toggleReaction('insights')}
          className={`action-btn ${reactions.insights ? 'active' : ''}`}
          aria-label="Insightful"
        >
          <i className="fal fa-lightbulb" style={{ fontSize: '14px' }}></i>
          <span style={{ fontSize: '11px', fontWeight: '700' }}>
            {baseCounts.insights + (reactions.insights ? 1 : 0)}
          </span>
        </button>

        <button
          onClick={mobileShare}
          className="action-btn"
          aria-label="Share"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
          </svg>
        </button>
      </aside>

      {/* Toast Alert */}
      {toastMsg && (
        <div
          role="status"
          style={{
            position: 'fixed',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#0F1235',
            color: '#FFFFFF',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            zIndex: 99999,
            boxShadow: '0 4px 14px rgba(15, 18, 53, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          {toastMsg}
        </div>
      )}

      <style jsx>{`
        .action-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #64748B;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .action-btn:hover {
          color: #0D1322;
          border-color: #0D1322;
          background: #F8F9FA;
          transform: scale(1.06);
        }
        .action-btn.active {
          background: #0D1322 !important;
          color: #FFFFFF !important;
          border-color: #0D1322 !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 1279px) {
          .sidebar-desktop {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .sidebar-mobile-bottom {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}
