'use client'

import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="mlab-page d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', padding: '60px 24px' }}
    >
      <div
        className="text-center"
        style={{
          maxWidth: '560px',
          width: '100%',
          background: '#FFFFFF',
          border: '1.5px solid #121316',
          borderRadius: '28px',
          padding: '60px 32px',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
        }}
      >
        <div
          style={{
            fontSize: '92px',
            fontWeight: 800,
            color: '#FF5E86',
            lineHeight: 1,
            marginBottom: '20px',
            letterSpacing: '-2px',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#121316',
            marginBottom: '16px',
            letterSpacing: '-0.5px',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: '#5A5D66',
            fontSize: '15.5px',
            lineHeight: 1.6,
            marginBottom: '32px',
          }}
        >
          The page you are looking for doesn&apos;t exist, has been removed, or has been relocated.
        </p>
        <Link href="/" className="mlab-pill-btn">
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}
