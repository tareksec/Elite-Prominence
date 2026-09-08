'use client';

import React, { useState, useEffect } from 'react';

/**
 * BackToTop — Circular gradient button
 * Appears smoothly when the user scrolls past 400px.
 * Clicking scrolls smoothly to top.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
      className="ep-back-to-top"
    >
      <i className="fa-solid fa-arrow-up" style={{ color: '#FFFFFF', fontSize: '15px' }}></i>

      <style jsx>{`
        .ep-back-to-top {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #0f1013;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 95;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, opacity 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          animation: epFadeIn 0.2s ease-out;
        }

        .ep-back-to-top:hover {
          transform: translateY(-4px) scale(1.05);
          background: #1e2025;
          border-color: #b89058;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.45);
        }

        .ep-back-to-top:active {
          transform: translateY(-1px) scale(0.98);
        }

        @keyframes epFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Prevent overlap with mobile bottom bar */
        @media (max-width: 767px) {
          .ep-back-to-top {
            bottom: 84px;
            right: 20px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </button>
  );
}
