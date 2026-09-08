'use client';

import React, { useState, useEffect } from 'react';

/**
 * FontSizeControl — HackerNoon-style reading font size adjuster
 * Fixed at bottom-left for desktop readers (>= 1024px).
 * Cycles or toggles through 16px, 18px, and 21px body font sizes.
 * Updates `--article-font-size` on document.documentElement and persists in localStorage.
 */
const SIZES = [
  { label: 'Small', value: '16px', display: '16' },
  { label: 'Medium', value: '18px', display: '18' },
  { label: 'Large', value: '21px', display: '21' }
];

export default function FontSizeControl() {
  const [currentSizeIndex, setCurrentSizeIndex] = useState(1); // Default is 18px (index 1)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('ep-font-size');
      if (saved) {
        const foundIndex = SIZES.findIndex((s) => s.value === saved);
        if (foundIndex !== -1) {
          setCurrentSizeIndex(foundIndex);
          document.documentElement.style.setProperty('--article-font-size', saved);
        }
      } else {
        document.documentElement.style.setProperty('--article-font-size', '18px');
      }
    } catch (e) {
      // localStorage unavailable or blocked
    }
  }, []);

  const changeSize = (newIndex) => {
    if (newIndex < 0 || newIndex >= SIZES.length) return;
    setCurrentSizeIndex(newIndex);
    const sizeVal = SIZES[newIndex].value;
    document.documentElement.style.setProperty('--article-font-size', sizeVal);
    try {
      localStorage.setItem('ep-font-size', sizeVal);
    } catch (e) {
      // Ignored
    }
  };

  if (!mounted) return null;

  return (
    <aside
      aria-label="Article text size options"
      style={{
        position: 'fixed',
        bottom: '32px',
        left: '32px',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        background: '#FFFFFF',
        borderRadius: '8px',
        padding: '6px 12px',
        boxShadow: '0 8px 24px rgba(15, 16, 19, 0.08)',
        border: '1px solid #E5E7EB',
        gap: '8px'
      }}
      className="ep-font-control-widget"
    >
      <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.6px',
          color: '#64748B',
          marginRight: '2px',
          userSelect: 'none'
        }}
      >
        Size
      </span>

      {/* Decrease size */}
      <button
        onClick={() => changeSize(currentSizeIndex - 1)}
        disabled={currentSizeIndex === 0}
        aria-label="Decrease font size"
        title="Decrease font size (A−)"
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1px solid #E5E7EB',
          background: currentSizeIndex === 0 ? '#F7F5FC' : '#FFFFFF',
          color: currentSizeIndex === 0 ? '#9CA3AF' : '#0D0D14',
          fontSize: '12px',
          fontWeight: '700',
          cursor: currentSizeIndex === 0 ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.15s ease'
        }}
      >
        A−
      </button>

      {/* Indicator Pills */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {SIZES.map((size, idx) => {
          const isActive = idx === currentSizeIndex;
          return (
            <button
              key={size.value}
              onClick={() => changeSize(idx)}
              aria-label={`Set font size to ${size.label} (${size.value})`}
              title={`${size.label} (${size.value})`}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                border: 'none',
                background: isActive
                  ? '#0D0D14'
                  : 'transparent',
                color: isActive ? '#FFFFFF' : '#6B7280',
                fontSize: '11px',
                fontWeight: isActive ? '700' : '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s ease'
              }}
            >
              {size.display}
            </button>
          );
        })}
      </div>

      {/* Increase size */}
      <button
        onClick={() => changeSize(currentSizeIndex + 1)}
        disabled={currentSizeIndex === SIZES.length - 1}
        aria-label="Increase font size"
        title="Increase font size (A+)"
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1px solid #E5E7EB',
          background: currentSizeIndex === SIZES.length - 1 ? '#F7F5FC' : '#FFFFFF',
          color: currentSizeIndex === SIZES.length - 1 ? '#9CA3AF' : '#0D0D14',
          fontSize: '12px',
          fontWeight: '700',
          cursor: currentSizeIndex === SIZES.length - 1 ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.15s ease'
        }}
      >
        A+
      </button>

      <style jsx>{`
        @media (max-width: 1023px) {
          .ep-font-control-widget {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
