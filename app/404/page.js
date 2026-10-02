import React from 'react'
import Link from 'next/link'
import ModernHeader from '@/components/layout/ModernHeader'
import ModernFooter from '@/components/layout/ModernFooter'

export default function ErrorPage() {
    return (
        <div className="mlab-page">
            <ModernHeader />
            <main className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh', padding: '80px 24px' }}>
                <div
                    className="text-center"
                    style={{
                        maxWidth: '560px',
                        width: '100%',
                        background: '#FFFFFF',
                        border: '1.5px solid rgba(18,19,22,0.08)',
                        borderRadius: '28px',
                        padding: '60px 36px',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.04)',
                    }}
                >
                    <span className="editorial-badge" style={{ marginBottom: '16px' }}>
                        <span className="editorial-badge-dot">✦</span> ERROR 404
                    </span>
                    <div
                        style={{
                            fontSize: 'clamp(64px, 8vw, 88px)',
                            fontWeight: 900,
                            color: '#FF3B81',
                            lineHeight: 1,
                            margin: '16px 0 12px',
                            letterSpacing: '-0.04em',
                        }}
                    >
                        404
                    </div>
                    <h1
                        style={{
                            fontSize: '26px',
                            fontWeight: 850,
                            color: '#121316',
                            marginBottom: '14px',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Page Not Found
                    </h1>
                    <p
                        style={{
                            color: '#555A68',
                            fontSize: '16px',
                            lineHeight: 1.6,
                            marginBottom: '32px',
                        }}
                    >
                        The requested executive advisory briefing does not exist or has been relocated.
                    </p>
                    <Link href="/" className="prominence-btn-primary">
                        <span>Back to Homepage</span>
                        <span>&rarr;</span>
                    </Link>
                </div>
            </main>
            <ModernFooter />
        </div>
    )
}