'use client'
import React, { useEffect, useState } from 'react'

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100
        setProgress(Math.min(100, Math.max(0, currentProgress)))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '3px',
        background: '#0D1322',
        zIndex: 99999,
        transition: 'width 0.1s ease-out',
        pointerEvents: 'none'
      }}
    />
  )
}
