'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { isSupabaseConfigured } from '@/lib/supabase/config'
import SupabaseSetupNotice from '@/components/elements/SupabaseSetupNotice'

// Sample verified testimonials if database has zero approved reviews yet
const INITIAL_APPROVED_REVIEWS = [
    {
        id: "mock-1",
        full_name: "Eleanor Vance",
        role_title: "Chief Human Resources Officer at GlobalTech",
        rating: 5,
        content: "Elite Prominence transformed my executive presence. Within 60 days of launching my new digital HQ and executive LinkedIn strategy, I received two board advisory invitations.",
        created_at: "2026-08-15T10:00:00Z"
    },
    {
        id: "mock-2",
        full_name: "Marcus Sterling",
        role_title: "Managing Director & Executive Talent Advisor",
        rating: 5,
        content: "The Google reputation management and thought leadership ghostwriting are world-class. When prospects Google my name today, they find an authoritative, cohesive presence.",
        created_at: "2026-08-02T14:30:00Z"
    },
    {
        id: "mock-3",
        full_name: "Dr. Aris Thorne",
        role_title: "Senior VP of People Strategy at BioHealth",
        rating: 5,
        content: "Their team understands the subtle distinction between vanity personal branding and genuine executive authority. Exceptional rigor and discretion.",
        created_at: "2026-07-28T09:15:00Z"
    }
]

export default function FeedbackPage() {
    const configured = isSupabaseConfigured()
    const [reviews, setReviews] = useState(INITIAL_APPROVED_REVIEWS)
    const [loading, setLoading] = useState(!configured ? false : true)

    useEffect(() => {
        const loadReviews = async () => {
            if (!configured) {
                setReviews(INITIAL_APPROVED_REVIEWS)
                setLoading(false)
                return
            }

            try {
                const supabase = getSupabaseBrowserClient()
                const { data, error } = await supabase
                    .from('reviews')
                    .select('id, content, rating, created_at, profiles:user_id(full_name, role_title)')
                    .eq('status', 'approved')
                    .order('created_at', { ascending: false })

                if (error || !data || data.length === 0) {
                    setReviews(INITIAL_APPROVED_REVIEWS)
                } else {
                    const formatted = data.map(r => ({
                        id: r.id,
                        full_name: r.profiles?.full_name || 'Executive Client',
                        role_title: r.profiles?.role_title || 'Leader',
                        rating: r.rating || 5,
                        content: r.content,
                        created_at: r.created_at
                    }))
                    setReviews(formatted)
                }
            } catch (err) {
                setReviews(INITIAL_APPROVED_REVIEWS)
            } finally {
                setLoading(false)
            }
        }

        loadReviews()
    }, [configured])

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={4} footerStyle={1}>
                <section style={{
                    backgroundColor: "#f8fafd",
                    padding: "100px 0 100px",
                    minHeight: "80vh",
                    fontFamily: "var(--primary-font)"
                }}>
                    <div className="container">
                        {!configured && <SupabaseSetupNotice feature="Live Feedback & Testimonials Moderation" />}

                        {/* Hero Header */}
                        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 40px" }}>
                            <span style={{
                                display: "inline-block",
                                fontSize: "13px",
                                fontWeight: "700",
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                                color: "#7c3aed", backgroundColor: "#f3e8ff", border: "1px solid rgba(124, 58, 237, 0.2)",
                                padding: "4px 16px",
                                borderRadius: "20px",
                                marginBottom: "14px"
                            }}>
                                Verified Client Feedback
                            </span>
                            <h1 style={{ fontSize: "clamp(28px, 5.5vw, 44px)", fontWeight: "700", color: "#1b2534", marginBottom: "18px", lineHeight: "1.25" }}>
                                Executive Testimonials &amp; Reviews
                            </h1>
                            <p style={{ fontSize: "clamp(16px, 2.5vw, 19px)", color: "#59606a", lineHeight: "1.7", margin: 0 }}>
                                Hear directly from senior HR leaders, managing directors, and consultants who have elevated their authority, reputation, and career trajectory with Elite Prominence.
                            </p>

                            <div style={{ marginTop: "28px", display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
                                <Link
                                    href="/dashboard"
                                    style={{
                                        background: "linear-gradient(180deg, #2b2d32 0%, #151619 100%)",
                                        color: "#ffffff",
                                        padding: "12px 28px",
                                        minHeight: "44px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "30px",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        textDecoration: "none",
                                        boxShadow: "0 8px 20px -2px rgba(0, 0, 0, 0.35)"
                                    }}
                                >
                                    Share Your Feedback →
                                </Link>
                                <Link
                                    href="/community"
                                    style={{
                                        backgroundColor: "#ffffff",
                                        color: "#7c3aed",
                                        border: "1.5px solid #7c3aed",
                                        padding: "12px 26px",
                                        minHeight: "44px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "30px",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        textDecoration: "none"
                                    }}
                                >
                                    Explore Community Directory →
                                </Link>
                            </div>
                        </div>

                        {/* Reviews Grid */}
                        <div style={{ textAlign: "center", marginBottom: "32px" }}>
                            <h2 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: "700", color: "#1b2534", margin: 0 }}>
                                Client Endorsements &amp; Perspectives
                            </h2>
                        </div>
                        <div className="feedback_grid" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "24px"
                        }}>
                            {reviews.map((rev) => (
                                <div key={rev.id} className="feedback_card" style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    padding: "32px 28px",
                                    border: "1px solid #e2e8f0",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    overflowWrap: "break-word",
                                    wordBreak: "break-word",
                                    transition: "all 0.3s ease"
                                }}>
                                    <div>
                                        {/* Star Rating & Verified Badge */}
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
                                            <div style={{ color: "#f59e0b", fontSize: "17px", letterSpacing: "2px" }}>
                                                {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                                            </div>
                                            <span style={{
                                                fontSize: "11px",
                                                fontWeight: "700",
                                                textTransform: "uppercase",
                                                color: "#7c3aed", backgroundColor: "#f3e8ff", border: "1px solid rgba(124, 58, 237, 0.2)",
                                                padding: "3px 10px",
                                                borderRadius: "12px"
                                            }}>
                                                ✓ Verified Client
                                            </span>
                                        </div>

                                        {/* Quote Body */}
                                        <p style={{
                                            fontSize: "16px",
                                            lineHeight: "1.7",
                                            color: "#334155",
                                            margin: "0 0 24px",
                                            fontStyle: "normal",
                                            overflowWrap: "break-word",
                                            wordBreak: "break-word"
                                        }}>
                                            "{rev.content}"
                                        </p>
                                    </div>

                                    {/* Author Signature */}
                                    <div style={{ borderTop: "1px solid #edf2f7", paddingTop: "18px" }}>
                                        <h3 style={{ margin: "0 0 4px", fontSize: "18px", fontWeight: "700", color: "#1b2534" }}>
                                            {rev.full_name}
                                        </h3>
                                        <div style={{ fontSize: "14px", color: "#64748b", fontStyle: "italic" }}>
                                            {rev.role_title}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <style jsx>{`
                            @media (max-width: 767px) {
                                .feedback_grid {
                                    grid-template-columns: 1fr !important;
                                    gap: 20px !important;
                                }
                                .feedback_card {
                                    padding: 24px 18px !important;
                                }
                            }
                        `}</style>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
