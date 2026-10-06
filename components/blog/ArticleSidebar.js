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
          gap: '12px',
          background: '#FFFFFF',
          border: '1.5px solid rgba(18, 19, 22, 0.08)',
          borderRadius: '9999px',
          padding: '16px 10px',
          boxShadow: '0 4px 18px rgba(18, 19, 22, 0.04)',
          width: '64px',
          marginLeft: 'auto'
        }}
      >
        {/* Share Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={shareLinkedIn}
            title="Share on LinkedIn"
            aria-label="Share on LinkedIn"
            className="action-btn"
          >
            <i className="fab fa-linkedin-in" style={{ fontSize: '14px' }}></i>
          </button>

          <button
            onClick={shareX}
            title="Share on X"
            aria-label="Share on X"
            className="action-btn"
          >
            <i className="fab fa-x-twitter" style={{ fontSize: '13px' }}></i>
          </button>

          <button
            onClick={copyLink}
            title="Copy Link"
            aria-label="Copy Link"
            className="action-btn"
          >
            <i className="fa-solid fa-link" style={{ fontSize: '13px' }}></i>
          </button>
        </div>

        <div style={{ width: '24px', height: '1px', background: 'rgba(18, 19, 22, 0.08)', margin: '4px 0' }} />

        {/* Reactions */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          {/* Clap / Endorsement */}
          <button
            onClick={() => toggleReaction('claps')}
            className={`action-btn ${reactions.claps ? 'active' : ''}`}
            title="Endorse"
            aria-label="Endorse"
          >
            <i className="fa-solid fa-thumbs-up" style={{ fontSize: '13px', lineHeight: 1 }}></i>
            <span style={{ fontSize: '10.5px', fontWeight: '800', marginTop: '2px', lineHeight: 1 }}>
              {baseCounts.claps + (reactions.claps ? 1 : 0)}
            </span>
          </button>

          {/* Bookmark */}
          <button
            onClick={() => toggleReaction('likes')}
            className={`action-btn ${reactions.likes ? 'active' : ''}`}
            title="Bookmark"
            aria-label="Bookmark"
          >
            <i className="fa-solid fa-bookmark" style={{ fontSize: '13px', lineHeight: 1 }}></i>
            <span style={{ fontSize: '10.5px', fontWeight: '800', marginTop: '2px', lineHeight: 1 }}>
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
            <i className="fa-solid fa-lightbulb" style={{ fontSize: '13px', lineHeight: 1 }}></i>
            <span style={{ fontSize: '10.5px', fontWeight: '800', marginTop: '2px', lineHeight: 1 }}>
              {baseCounts.insights + (reactions.insights ? 1 : 0)}
            </span>
          </button>
        </div>
      </aside>

      {/* Floating Action Feedback Toast */}
      {toastMsg && (
        <div
          role="status"
          style={{
            position: 'fixed',
            bottom: 'calc(80px + env(safe-area-inset-bottom, 0px))',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#121316',
            color: '#FFFFFF',
            padding: '9px 18px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: '600',
            zIndex: 99999,
            boxShadow: '0 8px 24px rgba(18, 19, 22, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ color: '#FF3B81' }}>✦</span>
          <span>{toastMsg}</span>
        </div>
      )}

      <style jsx>{`
        .action-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #6B7280;
          background: #FAF7F4;
          border: 1px solid rgba(18, 19, 22, 0.08);
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .action-btn:hover {
          color: #FF3B81;
          border-color: rgba(255, 59, 129, 0.3);
          background: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 59, 129, 0.15);
        }
        .action-btn.active {
          background: #FF3B81 !important;
          color: #FFFFFF !important;
          border-color: #FF3B81 !important;
          box-shadow: 0 4px 14px rgba(255, 59, 129, 0.35);
        }
        @media (max-width: 1279px) {
          .sidebar-desktop {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
