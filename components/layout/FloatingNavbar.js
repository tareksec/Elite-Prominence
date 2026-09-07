'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'

export default function FloatingNavbar({ scroll, handleMobileMenu }) {
    const pathname = usePathname()
    const router = useRouter()
    const configured = isSupabaseConfigured()

    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [moreOpen, setMoreOpen] = useState(false)
    const moreDropdownRef = useRef(null)
    const moreTimerRef = useRef(null)

    // Auth state management
    useEffect(() => {
        if (!configured) return

        try {
            const supabase = getSupabaseBrowserClient()

            supabase.auth.getSession().then(({ data: { session } }) => {
                if (session?.user) {
                    setUser(session.user)
                    supabase
                        .from('profiles')
                        .select('role')
                        .eq('id', session.user.id)
                        .single()
                        .then(({ data }) => {
                            if (data?.role) setRole(data.role)
                        })
                        .catch(() => {})
                } else {
                    setUser(null)
                    setRole(null)
                }
            }).catch(() => {})

            const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
                if (session?.user) {
                    setUser(session.user)
                    const { data } = await supabase
                        .from('profiles')
                        .select('role')
                        .eq('id', session.user.id)
                        .single()
                    if (data?.role) setRole(data.role)
                } else {
                    setUser(null)
                    setRole(null)
                }
            })

            return () => {
                subscription?.unsubscribe()
            }
        } catch (err) {
            // gracefully ignore
        }
    }, [configured])

    // Close "More" dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target)) {
                setMoreOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleMouseEnterMore = () => {
        if (moreTimerRef.current) clearTimeout(moreTimerRef.current)
        setMoreOpen(true)
    }

    const handleMouseLeaveMore = () => {
        moreTimerRef.current = setTimeout(() => {
            setMoreOpen(false)
        }, 180)
    }

    const handleSignOut = async () => {
        try {
            if (configured) {
                const supabase = getSupabaseBrowserClient()
                await supabase.auth.signOut()
            }
            setUser(null)
            setRole(null)
            router.push('/')
            router.refresh()
        } catch (err) {}
    }

    const isActive = (path) => {
        if (path === '/' && pathname === '/') return true
        if (path !== '/' && pathname?.startsWith(path)) return true
        return false
    }

    const isMoreActive = pathname?.startsWith('/about') || pathname?.startsWith('/feedback') || pathname?.startsWith('/community')

    return (
        <header
            className="floating_navbar_container"
            style={{
                position: 'fixed',
                top: scroll ? '14px' : '20px',
                left: 0,
                right: 0,
                margin: '0 auto',
                width: 'calc(100% - 40px)',
                maxWidth: '1160px',
                zIndex: 1000,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                fontFamily: "var(--primary-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)"
            }}
        >
            <div
                className="floating_navbar_pill"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '64px',
                    padding: '0 20px 0 24px',
                    borderRadius: '9999px',
                    backgroundColor: scroll ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.82)',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.75)',
                    boxShadow: scroll
                        ? '0 14px 40px -4px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                        : '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                }}
            >
                {/* 1. Logo (Left-aligned) */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link
                        href="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            textDecoration: 'none'
                        }}
                    >
                        <img
                            src="/assets/images/Elite%20Prominence/EliteProminence-iocn.png"
                            alt="Elite Prominence"
                            style={{
                                height: '32px',
                                width: 'auto',
                                display: 'block',
                                borderRadius: '6px'
                            }}
                        />
                        <span
                            className="logo_wordmark"
                            style={{
                                fontSize: '18px',
                                fontWeight: '800',
                                color: '#1b2534',
                                letterSpacing: '-0.4px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Elite Prominence
                        </span>
                    </Link>
                </div>

                {/* 2. Nav Links (Center-aligned, desktop only) */}
                <nav className="desktop_nav_links" style={{ margin: '0 auto' }}>
                    <ul
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '26px',
                            listStyle: 'none',
                            margin: 0,
                            padding: 0
                        }}
                    >
                        <li>
                            <Link
                                href="/"
                                style={{
                                    fontSize: '14.5px',
                                    fontWeight: '600',
                                    color: isActive('/') ? '#1b2534' : '#4b5563',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease',
                                    position: 'relative'
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                style={{
                                    fontSize: '14.5px',
                                    fontWeight: '600',
                                    color: isActive('/services') ? '#1b2534' : '#4b5563',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing"
                                style={{
                                    fontSize: '14.5px',
                                    fontWeight: '600',
                                    color: isActive('/pricing') ? '#1b2534' : '#4b5563',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog-grid"
                                style={{
                                    fontSize: '14.5px',
                                    fontWeight: '600',
                                    color: isActive('/blog-grid') ? '#1b2534' : '#4b5563',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                style={{
                                    fontSize: '14.5px',
                                    fontWeight: '600',
                                    color: isActive('/contact') ? '#1b2534' : '#4b5563',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                Contact
                            </Link>
                        </li>

                        {/* "More" Dropdown: Folds About, Feedback, Community */}
                        <li
                            ref={moreDropdownRef}
                            onMouseEnter={handleMouseEnterMore}
                            onMouseLeave={handleMouseLeaveMore}
                            style={{ position: 'relative' }}
                        >
                            <button
                                type="button"
                                onClick={() => setMoreOpen(!moreOpen)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: '4px 0',
                                    fontSize: '14.5px',
                                    fontWeight: '600',
                                    color: isMoreActive ? '#1b2534' : '#4b5563',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                <span>More</span>
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        transform: moreOpen ? 'rotate(180deg)' : 'none',
                                        transition: 'transform 0.2s ease'
                                    }}
                                >
                                    <path d="M1 1L5 5L9 1" stroke="#6b7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Floating Dropdown Card */}
                            {moreOpen && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 12px)',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        minWidth: '220px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.96)',
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                        borderRadius: '16px',
                                        border: '1px solid #e2e8f0',
                                        boxShadow: '0 16px 36px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0,0,0,0.04)',
                                        padding: '8px',
                                        zIndex: 1010
                                    }}
                                >
                                    <Link
                                        href="/about"
                                        onClick={() => setMoreOpen(false)}
                                        style={{
                                            display: 'block',
                                            padding: '10px 14px',
                                            borderRadius: '10px',
                                            color: '#1b2534',
                                            textDecoration: 'none',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            transition: 'background-color 0.2s ease'
                                        }}
                                        className="more_dropdown_item"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/feedback"
                                        onClick={() => setMoreOpen(false)}
                                        style={{
                                            display: 'block',
                                            padding: '10px 14px',
                                            borderRadius: '10px',
                                            color: '#1b2534',
                                            textDecoration: 'none',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            transition: 'background-color 0.2s ease'
                                        }}
                                        className="more_dropdown_item"
                                    >
                                        Client Reviews
                                    </Link>
                                    <Link
                                        href="/community"
                                        onClick={() => setMoreOpen(false)}
                                        style={{
                                            display: 'block',
                                            padding: '10px 14px',
                                            borderRadius: '10px',
                                            color: '#1b2534',
                                            textDecoration: 'none',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            transition: 'background-color 0.2s ease'
                                        }}
                                        className="more_dropdown_item"
                                    >
                                        Executive Community
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>

                {/* 3. Right side: Auth Links + Gradient CTA + Mobile Hamburger */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Auth-Aware State (Left of CTA) */}
                    <div className="desktop_auth_area" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        {user ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        color: '#4b5563',
                                        textDecoration: 'none',
                                        padding: '4px 8px',
                                        borderRadius: '8px',
                                        transition: 'color 0.2s ease'
                                    }}
                                >
                                    Dashboard
                                </Link>
                                {role === 'admin' && (
                                    <Link
                                        href="/admin"
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            color: '#dc2626',
                                            backgroundColor: 'rgba(220, 38, 38, 0.08)',
                                            border: '1px solid rgba(220, 38, 38, 0.2)',
                                            padding: '2px 7px',
                                            borderRadius: '8px',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Admin
                                    </Link>
                                )}
                            </>
                        ) : (
                            <Link
                                href="/login"
                                style={{
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    color: '#6b7280',
                                    textDecoration: 'none',
                                    padding: '4px 6px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                Log In
                            </Link>
                        )}
                    </div>

                    {/* Gradient CTA Pill Button: #8B5CF6 → #EC4899 */}
                    <Link
                        href="/contact"
                        className="floating_cta_btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px 22px',
                            borderRadius: '9999px',
                            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                            color: '#ffffff',
                            fontSize: '14px',
                            fontWeight: '700',
                            letterSpacing: '0.2px',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            boxShadow: '0 4px 15px rgba(236, 72, 153, 0.35)',
                            transition: 'all 0.25s ease'
                        }}
                    >
                        <span className="cta_desktop_text">Book a Strategy Call</span>
                        <span className="cta_mobile_text">Book Call</span>
                    </Link>

                    {/* Mobile Hamburger Icon (visible on mobile only) */}
                    <button
                        type="button"
                        onClick={handleMobileMenu}
                        className="mobile_hamburger_btn"
                        aria-label="Toggle navigation menu"
                        style={{
                            display: 'none',
                            background: '#f1f5f9',
                            border: '1px solid #e2e8f0',
                            borderRadius: '50%',
                            width: '44px',
                            height: '44px',
                            minWidth: '44px',
                            minHeight: '44px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#1b2534',
                            padding: 0
                        }}
                    >
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H17M1 7H17M1 13H17" stroke="#1b2534" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Scoped CSS for responsive floating navbar behavior */}
            <style jsx>{`
                .floating_cta_btn {
                    min-height: 44px;
                }
                .floating_cta_btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 22px rgba(236, 72, 153, 0.48) !important;
                    filter: brightness(1.04);
                }
                .more_dropdown_item:hover {
                    background-color: rgba(139, 92, 246, 0.08) !important;
                    color: #8B5CF6 !important;
                }
                .cta_mobile_text {
                    display: none;
                }

                @media (max-width: 991px) {
                    .desktop_nav_links {
                        display: none !important;
                    }
                    .desktop_auth_area {
                        display: none !important;
                    }
                    .mobile_hamburger_btn {
                        display: inline-flex !important;
                    }
                    .cta_desktop_text {
                        display: none;
                    }
                    .cta_mobile_text {
                        display: inline;
                    }
                    .floating_navbar_pill {
                        padding: 0 10px 0 16px !important;
                        height: 56px !important;
                    }
                }

                @media (max-width: 480px) {
                    :global(.floating_navbar_container) {
                        width: calc(100% - 24px) !important;
                        top: 12px !important;
                    }
                    .logo_wordmark {
                        display: none !important;
                    }
                    .floating_navbar_pill {
                        padding: 0 8px 0 12px !important;
                    }
                    .floating_cta_btn {
                        padding: 8px 16px !important;
                        font-size: 13px !important;
                    }
                }
            `}</style>
        </header>
    )
}
