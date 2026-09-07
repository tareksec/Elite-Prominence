'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import SupabaseSetupNotice from '@/components/elements/SupabaseSetupNotice'

export default function LoginPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const nextUrl = searchParams.get('next') || '/dashboard'
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const configured = isSupabaseConfigured()

    const handleLogin = async (e) => {
        e.preventDefault()
        setErrorMsg('')

        if (!configured) {
            setErrorMsg('Supabase is not configured yet. Please add your credentials to .env.local.')
            return
        }

        setLoading(true)
        try {
            const supabase = getSupabaseBrowserClient()
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) {
                setErrorMsg(error.message)
            } else if (data?.user) {
                // Refresh server context and redirect
                router.push(nextUrl)
                router.refresh()
            }
        } catch (err) {
            setErrorMsg(err.message || 'An unexpected error occurred during login.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <section className="auth_section" style={{
                backgroundColor: "#FAF8F2",
                padding: "130px 0 90px",
                minHeight: "85vh",
                display: "flex",
                alignItems: "center"
            }}>
                <div className="container">
                    <div style={{ maxWidth: "480px", margin: "0 auto" }}>
                        {!configured && <SupabaseSetupNotice feature="User Login & Moderation Portal" />}

                        <div className="login_card" style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            padding: "40px 32px",
                            boxShadow: "0 10px 40px rgba(30, 59, 43, 0.08)",
                            border: "1px solid rgba(30, 59, 43, 0.1)",
                            fontFamily: "var(--primary-font)"
                        }}>
                            <div style={{ textAlign: "center", marginBottom: "30px" }}>
                                <span style={{
                                    display: "inline-block",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                    color: "#1e3b2b",
                                    backgroundColor: "rgba(30, 59, 43, 0.08)",
                                    padding: "4px 14px",
                                    borderRadius: "20px",
                                    marginBottom: "12px"
                                }}>
                                    Member Access
                                </span>
                                <h2 style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: "700", color: "#1e3b2b", margin: 0 }}>
                                    Welcome Back
                                </h2>
                                <p style={{ fontSize: "15px", color: "#59606a", marginTop: "8px", fontStyle: "italic" }}>
                                    Log in to manage your submissions, draft articles, and view moderation status.
                                </p>
                            </div>

                            {errorMsg && (
                                <div style={{
                                    backgroundColor: "#fdf2f2",
                                    color: "#b91c1c",
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    marginBottom: "20px",
                                    border: "1px solid #fca5a5"
                                }}>
                                    {errorMsg}
                                </div>
                            )}

                            <form onSubmit={handleLogin}>
                                <div style={{ marginBottom: "20px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1e3b2b", marginBottom: "6px" }}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "0 16px",
                                            fontSize: "16px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none"
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: "26px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1e3b2b", marginBottom: "6px" }}>
                                        Password *
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "0 16px",
                                            fontSize: "16px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none"
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    style={{
                                        width: "100%",
                                        minHeight: "48px",
                                        height: "50px",
                                        backgroundColor: "#1e3b2b",
                                        color: "#FAF8F2",
                                        border: "none",
                                        borderRadius: "30px",
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        fontFamily: "var(--primary-font)",
                                        cursor: loading ? "not-allowed" : "pointer",
                                        opacity: loading ? 0.7 : 1,
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 6px 20px rgba(30, 59, 43, 0.2)"
                                    }}
                                >
                                    {loading ? 'Authenticating...' : 'Sign In →'}
                                </button>
                            </form>

                            <div style={{ textAlign: "center", marginTop: "24px", fontSize: "15px", color: "#59606a" }}>
                                Don’t have an account?{' '}
                                <Link href="/signup" style={{ color: "#1e3b2b", fontWeight: "700", textDecoration: "underline", minHeight: "44px", display: "inline-block", paddingTop: "6px" }}>
                                    Sign up for free
                                </Link>
                            </div>
                        </div>

                        <style jsx>{`
                            @media (max-width: 480px) {
                                .login_card {
                                    padding: 28px 18px !important;
                                }
                            }
                        `}</style>
                    </div>
                </div>
            </section>
        </Layout>
        </div>
    )
}
