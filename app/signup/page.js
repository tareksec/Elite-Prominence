'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import SupabaseSetupNotice from '@/components/elements/SupabaseSetupNotice'

export default function SignupPage() {
    const router = useRouter()
    const [fullName, setFullName] = useState('')
    const [roleTitle, setRoleTitle] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const [honeypot, setHoneypot] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const configured = isSupabaseConfigured()

    const handleSignup = async (e) => {
        e.preventDefault()
        setErrorMsg('')
        setSuccessMsg('')

        if (honeypot) {
            return // Silently drop bot submission
        }

        if (!agreedToTerms) {
            setErrorMsg('Please accept the Terms of Service and Privacy Policy to continue.')
            return
        }

        if (!configured) {
            setErrorMsg('Supabase is not configured yet. Please add your credentials to .env.local.')
            return
        }

        setLoading(true)
        try {
            const supabase = getSupabaseBrowserClient()
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                        role_title: roleTitle,
                    },
                },
            })

            if (error) {
                setErrorMsg(error.message)
            } else if (data?.user) {
                // If email confirmation is enabled, notify user
                if (data.session) {
                    router.push('/dashboard')
                } else {
                    setSuccessMsg('Account created successfully! Check your email to confirm your registration, or proceed to sign in.')
                }
            }
        } catch (err) {
            setErrorMsg(err.message || 'An unexpected error occurred during signup.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <section className="auth_section" style={{
                backgroundColor: "#ffffff",
                padding: "130px 0 90px",
                minHeight: "85vh",
                display: "flex",
                alignItems: "center"
            }}>
                <div className="container">
                    <div style={{ maxWidth: "520px", margin: "0 auto" }}>
                        {!configured && <SupabaseSetupNotice feature="User Signup & Authentication" />}

                        <div className="signup_card" style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "16px",
                            padding: "40px 32px",
                            boxShadow: "0 10px 40px rgba(15, 16, 19, 0.08)",
                            border: "1px solid rgba(15, 16, 19, 0.1)",
                            fontFamily: "var(--primary-font)"
                        }}>
                            <div style={{ textAlign: "center", marginBottom: "30px" }}>
                                <span style={{
                                    display: "inline-block",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                    color: "#0f1013",
                                    backgroundColor: "rgba(15, 16, 19, 0.08)",
                                    padding: "4px 14px",
                                    borderRadius: "20px",
                                    marginBottom: "12px"
                                }}>
                                    Executive Community
                                </span>
                                <h2 style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: "700", color: "#0f1013", margin: 0 }}>
                                    Create Your Account
                                </h2>
                                <p style={{ fontSize: "15px", color: "#59606a", marginTop: "8px", fontStyle: "italic" }}>
                                    Join the Elite Prominence executive network to submit testimonials and thought leadership articles.
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

                            {successMsg && (
                                <div style={{
                                    backgroundColor: "#f0fdf4",
                                    color: "#15803d",
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    marginBottom: "20px",
                                    border: "1px solid #86efac"
                                }}>
                                    {successMsg}
                                </div>
                            )}

                            <form onSubmit={handleSignup}>
                                <div style={{ marginBottom: "18px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#0f1013", marginBottom: "6px" }}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="e.g. Sarah Jenkins"
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            border: "1.5px solid #dcdad3",
                                            borderRadius: "8px",
                                            padding: "0 16px",
                                            fontSize: "16px",
                                            fontFamily: "var(--primary-font)",
                                            outline: "none",
                                            transition: "all 0.2s"
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: "18px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#0f1013", marginBottom: "6px" }}>
                                        Title / Organization (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={roleTitle}
                                        onChange={(e) => setRoleTitle(e.target.value)}
                                        placeholder="e.g. Chief People Officer at FinCorp"
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

                                <div style={{ marginBottom: "18px" }}>
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#0f1013", marginBottom: "6px" }}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="sarah@executive.com"
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
                                    <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#0f1013", marginBottom: "6px" }}>
                                        Password *
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        minLength={6}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Minimum 6 characters"
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

                                {/* Honeypot field for bot protection */}
                                <div style={{ display: 'none' }} aria-hidden="true">
                                    <label htmlFor="website_hp">Leave this field blank</label>
                                    <input
                                        type="text"
                                        id="website_hp"
                                        name="website_hp"
                                        tabIndex="-1"
                                        autoComplete="off"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                    />
                                </div>

                                {/* Terms & Privacy Consent Checkbox */}
                                <div style={{ marginBottom: "22px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                    <input
                                        type="checkbox"
                                        id="terms-consent-checkbox"
                                        required
                                        checked={agreedToTerms}
                                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                                        style={{
                                            width: "18px",
                                            height: "18px",
                                            marginTop: "2px",
                                            cursor: "pointer",
                                            accentColor: "#0f1013",
                                            flexShrink: 0
                                        }}
                                    />
                                    <label htmlFor="terms-consent-checkbox" style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.5", cursor: "pointer" }}>
                                        I have read and agree to the{' '}
                                        <Link href="/terms" style={{ color: "#0f1013", fontWeight: "700", textDecoration: "underline" }} target="_blank">
                                            Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link href="/privacy-policy" style={{ color: "#0f1013", fontWeight: "700", textDecoration: "underline" }} target="_blank">
                                            Privacy Policy
                                        </Link>.*
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn_style_one"
                                    style={{
                                        width: "100%",
                                        minHeight: "48px",
                                        cursor: loading ? "not-allowed" : "pointer",
                                        opacity: loading ? 0.7 : 1,
                                    }}
                                >
                                    {loading ? 'Creating Account...' : 'Complete Registration'}
                                </button>
                            </form>

                            <div style={{ textAlign: "center", marginTop: "24px", fontSize: "15px", color: "#59606a" }}>
                                Already have an account?{' '}
                                <Link href="/login" style={{ color: "#0f1013", fontWeight: "700", textDecoration: "underline", minHeight: "44px", display: "inline-block", paddingTop: "6px" }}>
                                    Sign in here
                                </Link>
                            </div>
                        </div>

                        <style jsx>{`
                            @media (max-width: 480px) {
                                .signup_card {
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
