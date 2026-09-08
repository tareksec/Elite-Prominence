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
            <i className="fab fa-linkedin-in" style={{ fontSize: '15px' }}></i>
          </button>

          <button
            onClick={shareX}
            title="Share on X"
            aria-label="Share on X"
            className="action-btn"
          >
            <i className="fab fa-x-twitter" style={{ fontSize: '14px' }}></i>
          </button>

          <button
            onClick={copyLink}
            title="Copy Link"
            aria-label="Copy Link"
            className="action-btn"
          >
            <i className="fa-solid fa-link" style={{ fontSize: '14px' }}></i>
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
            <i className="fa-solid fa-thumbs-up" style={{ fontSize: '14px', lineHeight: 1 }}></i>
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
            <i className="fa-solid fa-bookmark" style={{ fontSize: '14px', lineHeight: 1 }}></i>
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
            <i className="fa-solid fa-lightbulb" style={{ fontSize: '14px', lineHeight: 1 }}></i>
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
          <i className="fa-solid fa-thumbs-up" style={{ fontSize: '14px' }}></i>
          <span style={{ fontSize: '11px', fontWeight: '700' }}>
            {baseCounts.claps + (reactions.claps ? 1 : 0)}
          </span>
        </button>

        <button
          onClick={() => toggleReaction('likes')}
          className={`action-btn ${reactions.likes ? 'active' : ''}`}
          aria-label="Bookmark"
        >
          <i className="fa-solid fa-bookmark" style={{ fontSize: '14px' }}></i>
          <span style={{ fontSize: '11px', fontWeight: '700' }}>
            {baseCounts.likes + (reactions.likes ? 1 : 0)}
          </span>
        </button>

        <button
          onClick={() => toggleReaction('insights')}
          className={`action-btn ${reactions.insights ? 'active' : ''}`}
          aria-label="Insightful"
        >
          <i className="fa-solid fa-lightbulb" style={{ fontSize: '14px' }}></i>
          <span style={{ fontSize: '11px', fontWeight: '700' }}>
            {baseCounts.insights + (reactions.insights ? 1 : 0)}
          </span>
        </button>

        <button
          onClick={mobileShare}
          className="action-btn"
          aria-label="Share"
        >
          <i className="fa-solid fa-share-nodes" style={{ fontSize: '15px' }}></i>
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
            background: '#0f1013',
            color: '#FFFFFF',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            zIndex: 99999,
            boxShadow: '0 4px 14px rgba(15, 16, 19, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <i className="fa-solid fa-circle-check" style={{ color: 'var(--ep-gold, #b89058)', fontSize: '15px' }}></i>
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
          color: #0f1013;
          border-color: #0f1013;
          background: #F8F9FA;
          transform: scale(1.06);
        }
        .action-btn.active {
          background: #0f1013 !important;
          color: #FFFFFF !important;
          border-color: #0f1013 !important;
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
