'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import { SERVICES_DATA } from '@/lib/servicesData'
import { SOLUTIONS_DATA } from '@/lib/solutionsData'

export default function FloatingNavbar({ scroll, handleMobileMenu }) {
    const pathname = usePathname()
    const router = useRouter()
    const configured = isSupabaseConfigured()

    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)

    // Dropdown states
    const [servicesOpen, setServicesOpen] = useState(false)
    const [solutionsOpen, setSolutionsOpen] = useState(false)
    const [resourcesOpen, setResourcesOpen] = useState(false)
    const [moreOpen, setMoreOpen] = useState(false)

    const servicesRef = useRef(null)
    const solutionsRef = useRef(null)
    const resourcesRef = useRef(null)
    const moreRef = useRef(null)

    const servicesTimer = useRef(null)
    const solutionsTimer = useRef(null)
    const resourcesTimer = useRef(null)
    const moreTimer = useRef(null)

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

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
            if (solutionsRef.current && !solutionsRef.current.contains(e.target)) setSolutionsOpen(false)
            if (resourcesRef.current && !resourcesRef.current.contains(e.target)) setResourcesOpen(false)
            if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Hover helpers
    const handleMouseEnter = (type) => {
        if (type === 'services') {
            if (servicesTimer.current) clearTimeout(servicesTimer.current)
            setServicesOpen(true)
            setSolutionsOpen(false)
            setResourcesOpen(false)
            setMoreOpen(false)
        } else if (type === 'solutions') {
            if (solutionsTimer.current) clearTimeout(solutionsTimer.current)
            setSolutionsOpen(true)
            setServicesOpen(false)
            setResourcesOpen(false)
            setMoreOpen(false)
        } else if (type === 'resources') {
            if (resourcesTimer.current) clearTimeout(resourcesTimer.current)
            setResourcesOpen(true)
            setServicesOpen(false)
            setSolutionsOpen(false)
            setMoreOpen(false)
        } else if (type === 'more') {
            if (moreTimer.current) clearTimeout(moreTimer.current)
            setMoreOpen(true)
            setServicesOpen(false)
            setSolutionsOpen(false)
            setResourcesOpen(false)
        }
    }

    const handleMouseLeave = (type) => {
        if (type === 'services') {
            servicesTimer.current = setTimeout(() => setServicesOpen(false), 160)
        } else if (type === 'solutions') {
            solutionsTimer.current = setTimeout(() => setSolutionsOpen(false), 160)
        } else if (type === 'resources') {
            resourcesTimer.current = setTimeout(() => setResourcesOpen(false), 160)
        } else if (type === 'more') {
            moreTimer.current = setTimeout(() => setMoreOpen(false), 160)
        }
    }

    const closeAllDropdowns = () => {
        setServicesOpen(false)
        setSolutionsOpen(false)
        setResourcesOpen(false)
        setMoreOpen(false)
    }

    const isActive = (path) => {
        if (path === '/' && pathname === '/') return true
        if (path !== '/' && pathname?.startsWith(path)) return true
        return false
    }

    const isServicesActive = pathname?.startsWith('/services')
    const isSolutionsActive = pathname?.startsWith('/solutions')
    const isResourcesActive = pathname?.startsWith('/resources')
    const isMoreActive = pathname?.startsWith('/about') || pathname?.startsWith('/careers') || pathname?.startsWith('/feedback') || pathname?.startsWith('/faq') || pathname?.startsWith('/pricing')

    return (
        <header
            className="floating_navbar_container"
            style={{
                position: 'fixed',
                top: scroll ? '12px' : '18px',
                left: 0,
                right: 0,
                margin: '0 auto',
                width: 'calc(100% - 32px)',
                maxWidth: '1240px',
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
                    height: '66px',
                    padding: '0 16px 0 22px',
                    borderRadius: '9999px',
                    backgroundColor: scroll ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.86)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.85)',
                    boxShadow: scroll
                        ? '0 16px 42px -4px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)'
                        : '0 10px 32px -4px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.04)',
                    transition: 'all 0.3s ease'
                }}
            >
                {/* 1. Brand Logo (Left) */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link
                        href="/"
                        onClick={closeAllDropdowns}
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
                                height: '34px',
                                width: 'auto',
                                display: 'block'
                            }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span
                                className="logo_wordmark"
                                style={{
                                    fontSize: '17px',
                                    fontWeight: '800',
                                    color: '#0D0D14',
                                    letterSpacing: '-0.3px',
                                    whiteSpace: 'nowrap',
                                    lineHeight: '1.2',
                                    fontFamily: 'var(--primary-font)'
                                }}
                            >
                                Elite Prominence
                            </span>
                            <span
                                className="logo_subtag"
                                style={{
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    color: '#6B7280'
                                }}
                            >
                                Personal Branding for HR Leaders &amp; Executives
                            </span>
                        </div>
                    </Link>
                </div>

                {/* 2. Desktop Navigation Links (Center) */}
                <nav className="desktop_nav_links" aria-label="Desktop Primary Navigation" style={{ margin: '0 auto' }}>
                    <ul
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            listStyle: 'none',
                            margin: 0,
                            padding: 0
                        }}
                    >
                        {/* Services Dropdown */}
                        <li
                            ref={servicesRef}
                            onMouseEnter={() => handleMouseEnter('services')}
                            onMouseLeave={() => handleMouseLeave('services')}
                            style={{ position: 'relative' }}
                        >
                            <Link
                                href="/services"
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: isServicesActive ? '#0D0D14' : '#475569',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    padding: '6px 2px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                <span>Services</span>
                                <i className="fa-solid fa-chevron-down" style={{ fontSize: '9px', opacity: 0.7, marginLeft: '2px', transition: 'transform 0.2s ease', transform: servicesOpen ? 'rotate(180deg)' : 'none' }}></i>
                            </Link>

                            {servicesOpen && (
                                <div
                                    className="nav_mega_dropdown"
                                    style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 14px)',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '440px',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '16px',
                                        border: '1px solid #e2e8f0',
                                        boxShadow: '0 20px 48px rgba(15, 16, 19, 0.12), 0 2px 6px rgba(15, 16, 19, 0.04)',
                                        padding: '12px',
                                        zIndex: 1010,
                                        animation: 'navFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    <div style={{ padding: '6px 12px 10px', borderBottom: '1px solid #f1f5f9', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8' }}>
                                            Core Executive Offerings
                                        </span>
                                        <Link href="/services" onClick={closeAllDropdowns} style={{ fontSize: '12px', fontWeight: '700', color: '#0D0D14', textDecoration: 'none' }}>
                                            Overview &rarr;
                                        </Link>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px' }}>
                                        {SERVICES_DATA.map((srv) => (
                                            <Link
                                                key={srv.slug}
                                                href={`/services/${srv.slug}`}
                                                onClick={closeAllDropdowns}
                                                className="dropdown_nav_link"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '12px',
                                                    padding: '9px 12px',
                                                    borderRadius: '10px',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.18s ease'
                                                }}
                                            >
                                                <span style={{
                                                    fontSize: '11px',
                                                    fontWeight: '700',
                                                    color: '#6B7280',
                                                    backgroundColor: '#F7F5FC',
                                                    padding: '2px 6px',
                                                    borderRadius: '6px',
                                                    marginTop: '2px'
                                                }}>
                                                    {srv.number}
                                                </span>
                                                <div>
                                                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0D0D14', lineHeight: '1.3' }}>
                                                        {srv.title}
                                                    </div>
                                                    <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px', lineHeight: '1.35' }}>
                                                        {srv.shortDescription}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* Solutions Dropdown */}
                        <li
                            ref={solutionsRef}
                            onMouseEnter={() => handleMouseEnter('solutions')}
                            onMouseLeave={() => handleMouseLeave('solutions')}
                            style={{ position: 'relative' }}
                        >
                            <Link
                                href="/solutions"
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: isSolutionsActive ? '#0D0D14' : '#475569',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    padding: '6px 2px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                <span>Solutions</span>
                                <i className="fa-solid fa-chevron-down" style={{ fontSize: '9px', opacity: 0.7, marginLeft: '2px', transition: 'transform 0.2s ease', transform: solutionsOpen ? 'rotate(180deg)' : 'none' }}></i>
                            </Link>

                            {solutionsOpen && (
                                <div
                                    className="nav_mega_dropdown"
                                    style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 14px)',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '380px',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '16px',
                                        border: '1px solid #e2e8f0',
                                        boxShadow: '0 20px 48px rgba(15, 16, 19, 0.12), 0 2px 6px rgba(15, 16, 19, 0.04)',
                                        padding: '12px',
                                        zIndex: 1010,
                                        animation: 'navFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    <div style={{ padding: '6px 12px 10px', borderBottom: '1px solid #f1f5f9', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8' }}>
                                            Who We Serve
                                        </span>
                                        <Link href="/solutions" onClick={closeAllDropdowns} style={{ fontSize: '12px', fontWeight: '700', color: '#0D0D14', textDecoration: 'none' }}>
                                            Compare All &rarr;
                                        </Link>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px' }}>
                                        {SOLUTIONS_DATA.map((sol) => (
                                            <Link
                                                key={sol.slug}
                                                href={`/solutions/${sol.slug}`}
                                                onClick={closeAllDropdowns}
                                                className="dropdown_nav_link"
                                                style={{
                                                    display: 'block',
                                                    padding: '9px 12px',
                                                    borderRadius: '10px',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.18s ease'
                                                }}
                                            >
                                                <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0D0D14', lineHeight: '1.3' }}>
                                                    {sol.title}
                                                </div>
                                                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px', lineHeight: '1.35' }}>
                                                    {sol.subtitle}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* How It Works */}
                        <li>
                            <Link
                                href="/how-it-works"
                                onClick={closeAllDropdowns}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: isActive('/how-it-works') ? '#0D0D14' : '#475569',
                                    textDecoration: 'none',
                                    padding: '6px 2px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                How It Works
                            </Link>
                        </li>

                        {/* Case Studies */}
                        <li>
                            <Link
                                href="/case-studies"
                                onClick={closeAllDropdowns}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: isActive('/case-studies') ? '#0D0D14' : '#475569',
                                    textDecoration: 'none',
                                    padding: '6px 2px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                Case Studies
                            </Link>
                        </li>

                        {/* Insights (Blog) */}
                        <li>
                            <Link
                                href="/blog-grid"
                                onClick={closeAllDropdowns}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: isActive('/blog') || isActive('/blog-grid') ? '#0D0D14' : '#475569',
                                    textDecoration: 'none',
                                    padding: '6px 2px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                Insights
                            </Link>
                        </li>

                        {/* Resources Dropdown */}
                        <li
                            ref={resourcesRef}
                            onMouseEnter={() => handleMouseEnter('resources')}
                            onMouseLeave={() => handleMouseLeave('resources')}
                            style={{ position: 'relative' }}
                        >
                            <button
                                type="button"
                                onClick={() => setResourcesOpen(!resourcesOpen)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: '6px 2px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: isResourcesActive ? '#0D0D14' : '#475569',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                <span>Resources</span>
                                <i className="fa-solid fa-chevron-down" style={{ fontSize: '9px', opacity: 0.7, marginLeft: '2px', transition: 'transform 0.2s ease', transform: resourcesOpen ? 'rotate(180deg)' : 'none' }}></i>
                            </button>

                            {resourcesOpen && (
                                <div
                                    className="nav_mega_dropdown"
                                    style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 14px)',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '280px',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '16px',
                                        border: '1px solid #e2e8f0',
                                        boxShadow: '0 20px 48px rgba(15, 16, 19, 0.12), 0 2px 6px rgba(15, 16, 19, 0.04)',
                                        padding: '10px',
                                        zIndex: 1010,
                                        animation: 'navFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    <Link
                                        href="/resources/assessment"
                                        onClick={closeAllDropdowns}
                                        className="dropdown_nav_link"
                                        style={{
                                            display: 'block',
                                            padding: '10px 12px',
                                            borderRadius: '10px',
                                            textDecoration: 'none',
                                            backgroundColor: '#F7F5FC',
                                            border: '1px solid #e2e8f0',
                                            marginBottom: '6px'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#0D0D14' }}>
                                                Executive Scorecard
                                            </span>
                                            <span style={{ fontSize: '10px', fontWeight: '700', backgroundColor: 'rgba(139, 92, 246, 0.08)', color: '#8B5CF6', border: '1px solid rgba(139, 92, 246, 0.25)', padding: '1px 6px', borderRadius: '10px' }}>
                                                Free
                                            </span>
                                        </div>
                                        <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>
                                            Test your digital presence in 3 mins
                                        </div>
                                    </Link>

                                    <Link
                                        href="/resources"
                                        onClick={closeAllDropdowns}
                                        className="dropdown_nav_link"
                                        style={{
                                            display: 'block',
                                            padding: '8px 12px',
                                            borderRadius: '10px',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0D0D14' }}>
                                            Resources Library
                                        </div>
                                        <div style={{ fontSize: '12px', color: '#6B7280' }}>
                                            Checklists, audit templates &amp; guides
                                        </div>
                                    </Link>

                                    <Link
                                        href="/community"
                                        onClick={closeAllDropdowns}
                                        className="dropdown_nav_link"
                                        style={{
                                            display: 'block',
                                            padding: '8px 12px',
                                            borderRadius: '10px',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0D0D14' }}>
                                            Executive Directory
                                        </div>
                                        <div style={{ fontSize: '12px', color: '#6B7280' }}>
                                            Verified contributors &amp; perspectives
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </li>

                        {/* More Dropdown (About, Careers, Reviews, Pricing, FAQ) */}
                        <li
                            ref={moreRef}
                            onMouseEnter={() => handleMouseEnter('more')}
                            onMouseLeave={() => handleMouseLeave('more')}
                            style={{ position: 'relative' }}
                        >
                            <button
                                type="button"
                                onClick={() => setMoreOpen(!moreOpen)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: '6px 2px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: isMoreActive ? '#0D0D14' : '#475569',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                <span>Firm</span>
                                <i className="fa-solid fa-chevron-down" style={{ fontSize: '9px', opacity: 0.7, marginLeft: '2px', transition: 'transform 0.2s ease', transform: moreOpen ? 'rotate(180deg)' : 'none' }}></i>
                            </button>

                            {moreOpen && (
                                <div
                                    className="nav_mega_dropdown"
                                    style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 14px)',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '240px',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '16px',
                                        border: '1px solid #e2e8f0',
                                        boxShadow: '0 20px 48px rgba(15, 16, 19, 0.12), 0 2px 6px rgba(15, 16, 19, 0.04)',
                                        padding: '10px',
                                        zIndex: 1010,
                                        animation: 'navFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    <Link
                                        href="/about"
                                        onClick={closeAllDropdowns}
                                        className="dropdown_nav_link"
                                        style={{ display: 'block', padding: '8px 12px', borderRadius: '10px', textDecoration: 'none', color: '#0D0D14', fontSize: '13.5px', fontWeight: '700' }}
                                    >
                                        About Prominence
                                    </Link>
                                    <Link
                                        href="/careers"
                                        onClick={closeAllDropdowns}
                                        className="dropdown_nav_link"
                                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '10px', textDecoration: 'none', color: '#0D0D14', fontSize: '13.5px', fontWeight: '700' }}
                                    >
                                        <span>Careers</span>
                                        <span style={{ fontSize: '10px', fontWeight: '700', backgroundColor: '#f1f5f9', color: '#0D0D14', border: '1px solid #e2e8f0', padding: '1px 6px', borderRadius: '8px' }}>
                                            Hiring
                                        </span>
                                    </Link>
                                    <Link
                                        href="/pricing"
                                        onClick={closeAllDropdowns}
                                        className="dropdown_nav_link"
                                        style={{ display: 'block', padding: '8px 12px', borderRadius: '10px', textDecoration: 'none', color: '#0D0D14', fontSize: '13.5px', fontWeight: '700' }}
                                    >
                                        Engagement Pricing
                                    </Link>
                                    <Link
                                        href="/feedback"
                                        onClick={closeAllDropdowns}
                                        className="dropdown_nav_link"
                                        style={{ display: 'block', padding: '8px 12px', borderRadius: '10px', textDecoration: 'none', color: '#0D0D14', fontSize: '13.5px', fontWeight: '700' }}
                                    >
                                        Client Endorsements
                                    </Link>
                                    <Link
                                        href="/faq"
                                        onClick={closeAllDropdowns}
                                        className="dropdown_nav_link"
                                        style={{ display: 'block', padding: '8px 12px', borderRadius: '10px', textDecoration: 'none', color: '#0D0D14', fontSize: '13.5px', fontWeight: '700' }}
                                    >
                                        Strategic FAQ
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>

                {/* 3. Right: Auth area + Primary Executive Consultation CTA + Mobile Trigger */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Auth links (desktop) */}
                    <div className="desktop_auth_area" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        {user ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        color: '#475569',
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
                                            fontWeight: '700',
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
                                    color: '#64748b',
                                    textDecoration: 'none',
                                    padding: '4px 6px',
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                Log In
                            </Link>
                        )}
                    </div>

                    {/* Primary CTA Button: Book a Private Consultation */}
                    <Link
                        href="/contact"
                        className="btn_style_one floating_cta_btn"
                        onClick={closeAllDropdowns}
                        style={{
                            padding: '10px 20px',
                            fontSize: '13.5px',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <span className="cta_desktop_text">Book a Private Consultation</span>
                        <span className="cta_mobile_text">Consultation</span>
                    </Link>

                    {/* Mobile Menu Hamburger */}
                    <button
                        type="button"
                        onClick={handleMobileMenu}
                        className="mobile_hamburger_btn"
                        aria-label="Toggle navigation menu"
                        style={{
                            display: 'none',
                            background: '#f1f5f9',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            borderRadius: '12px',
                            width: '42px',
                            height: '42px',
                            minWidth: '42px',
                            minHeight: '42px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#0D0D14',
                            padding: 0
                        }}
                    >
                        <i className="fa-solid fa-bars" style={{ fontSize: '16px', color: '#0D0D14' }}></i>
                    </button>
                </div>
            </div>

            {/* Scoped CSS for dropdowns and responsive behaviors */}
            <style jsx>{`
                @keyframes navFadeIn {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -6px);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, 0);
                    }
                }
                .dropdown_nav_link:hover {
                    background-color: #F7F5FC !important;
                }
                .floating_cta_btn:hover {
                    transform: translateY(-1.5px);
                    box-shadow: 0 12px 24px -2px rgba(15, 23, 42, 0.45), 0 4px 10px -1px rgba(15, 23, 42, 0.25), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.45) !important;
                    filter: brightness(1.05);
                }
                .floating_cta_btn:active {
                    transform: translateY(1px);
                    box-shadow: 0 4px 10px -1px rgba(15, 23, 42, 0.3) !important;
                }
                .cta_mobile_text {
                    display: none;
                }

                @media (max-width: 1100px) {
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
                        padding: 0 12px 0 16px !important;
                        height: 58px !important;
                    }
                }

                @media (max-width: 480px) {
                    :global(.floating_navbar_container) {
                        width: calc(100% - 20px) !important;
                        top: 10px !important;
                    }
                    .logo_subtag {
                        display: none !important;
                    }
                    .floating_navbar_pill {
                        padding: 0 8px 0 12px !important;
                    }
                    .floating_cta_btn {
                        padding: 8px 14px !important;
                        font-size: 12.5px !important;
                    }
                }
            `}</style>
        </header>
    )
}
