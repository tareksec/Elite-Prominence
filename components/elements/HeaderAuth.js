'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'

export default function HeaderAuth({ isDark = false, isMobile = false, onMobileNavClick }) {
    const router = useRouter()
    const configured = isSupabaseConfigured()
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!configured) {
            setLoaded(true)
            return
        }

        try {
            const supabase = getSupabaseBrowserClient()

            // Fetch initial session
            supabase.auth.getSession().then(({ data: { session } }) => {
                if (session?.user) {
                    setUser(session.user)
                    // Fetch role from profiles
                    supabase
                        .from('profiles')
                        .select('role')
                        .eq('id', session.user.id)
                        .single()
                        .then(({ data }) => {
                            if (data?.role) setRole(data.role)
                            setLoaded(true)
                        })
                        .catch(() => setLoaded(true))
                } else {
                    setUser(null)
                    setRole(null)
                    setLoaded(true)
                }
            }).catch(() => setLoaded(true))

            // Real-time auth state listener
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
                setLoaded(true)
            })

            return () => {
                subscription?.unsubscribe()
            }
        } catch (err) {
            setLoaded(true)
        }
    }, [configured])

    const handleSignOut = async () => {
        try {
            if (configured) {
                const supabase = getSupabaseBrowserClient()
                await supabase.auth.signOut()
            }
            setUser(null)
            setRole(null)
            if (onMobileNavClick) onMobileNavClick()
            router.push('/')
            router.refresh()
        } catch (err) {
            // handle gracefully
        }
    }

    const handleClick = () => {
        if (onMobileNavClick) onMobileNavClick()
    }

    // Mobile layout
    if (isMobile) {
        if (user) {
            return (
                <div style={{ padding: "14px 0", borderTop: "1px solid #edf2f7", marginTop: "14px" }}>
                    <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#6B7280", marginBottom: "8px" }}>
                        My Account
                    </div>
                    <ul className="navigation clearfix" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: "6px" }}>
                            <Link href="/dashboard" onClick={handleClick} style={{ color: "#0D0D14", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", padding: "10px 0" }}>
                                <span>Member Dashboard &rarr;</span>
                            </Link>
                        </li>
                        {role === 'admin' && (
                            <li style={{ marginBottom: "6px" }}>
                                <Link href="/admin" onClick={handleClick} style={{ color: "#dc2626", fontWeight: "700", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "10px 0" }}>
                                    <span>Admin Moderation &rarr;</span>
                                </Link>
                            </li>
                        )}
                        <li>
                            <button
                                onClick={handleSignOut}
                                style={{
                                    background: "none",
                                    border: "none",
                                    padding: "10px 0",
                                    color: "#6B7280",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    minHeight: "44px",
                                    display: "inline-flex",
                                    alignItems: "center"
                                }}
                            >
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </div>
            )
        }

        return (
            <div style={{ display: "flex", gap: "10px", alignItems: "center", padding: "14px 0", borderTop: "1px solid #edf2f7", marginTop: "14px" }}>
                <Link
                    href="/login"
                    onClick={handleClick}
                    className="btn_style_two btn_sm"
                    style={{ flex: 1, minHeight: "44px" }}
                >
                    Log In
                </Link>
                <Link
                    href="/signup"
                    onClick={handleClick}
                    className="btn_style_one btn_sm"
                    style={{ flex: 1, minHeight: "44px" }}
                >
                    Sign Up
                </Link>
            </div>
        )
    }

    // Desktop layout (compact, secondary weight)
    const textColor = isDark ? "rgba(255, 255, 255, 0.85)" : "#6B7280"
    const hoverColor = "#8B5CF6"

    if (user) {
        return (
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginRight: "18px" }}>
                <Link
                    href="/dashboard"
                    style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: isDark ? "#ffffff" : "#0D0D14",
                        textDecoration: "none",
                        transition: "color 0.2s ease"
                    }}
                >
                    Dashboard
                </Link>

                {role === 'admin' && (
                    <Link
                        href="/admin"
                        style={{
                            fontSize: "11px",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            color: "#dc2626",
                            backgroundColor: "rgba(220, 38, 38, 0.08)",
                            border: "1px solid rgba(220, 38, 38, 0.2)",
                            padding: "2px 8px",
                            borderRadius: "10px",
                            textDecoration: "none"
                        }}
                    >
                        Admin
                    </Link>
                )}

                <button
                    onClick={handleSignOut}
                    title="Sign Out"
                    style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        color: isDark ? "rgba(255, 255, 255, 0.6)" : "#94a3b8",
                        fontSize: "12px",
                        cursor: "pointer",
                        textDecoration: "underline"
                    }}
                >
                    Log Out
                </button>
            </div>
        )
    }

    return (
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginRight: "18px", fontSize: "14px", fontWeight: "600" }}>
            <Link
                href="/login"
                style={{
                    color: textColor,
                    textDecoration: "none",
                    transition: "color 0.2s ease"
                }}
            >
                Log In
            </Link>
            <span style={{ color: isDark ? "rgba(255, 255, 255, 0.3)" : "#cbd5e1", fontSize: "12px" }}>•</span>
            <Link
                href="/signup"
                style={{
                    color: textColor,
                    textDecoration: "none",
                    transition: "color 0.2s ease"
                }}
            >
                Sign Up
            </Link>
        </div>
    )
}
