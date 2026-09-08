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
                    backgroundColor: "#f8fafc",
                    padding: "100px 0 100px",
                    minHeight: "80vh",
                    fontFamily: "var(--primary-font)"
                }}>
                    <div className="container">
                        {!configured && <SupabaseSetupNotice feature="Live Feedback & Testimonials Moderation" />}

                        {/* Hero Header */}
                        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 48px" }}>
                            <span className="prominence_badge">
                                Verified Client Perspectives
                            </span>
                            <h1 style={{
                                fontSize: "clamp(28px, 5vw, 44px)",
                                fontWeight: "700",
                                color: "#0f1013",
                                marginBottom: "18px",
                                lineHeight: "1.25",
                                fontFamily: "var(--ep-font-serif, 'PT Serif', serif)"
                            }}>
                                Executive Testimonials &amp; Reviews
                            </h1>
                            <p style={{ fontSize: "clamp(16px, 2.5vw, 18px)", color: "#59606a", lineHeight: "1.7", margin: "0 0 28px" }}>
                                Hear directly from senior HR leaders, managing directors, and enterprise talent executives who have elevated their authority, board visibility, and career trajectory with Elite Prominence.
                            </p>

                            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link
                                    href="/dashboard?tab=reviews"
                                    className="btn_style_one"
                                >
                                    Share Your Feedback <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link
                                    href="/community"
                                    className="btn_style_two"
                                >
                                    Explore Directory
                                </Link>
                            </div>
                        </div>

                        {/* Reviews Grid */}
                        <div style={{ textAlign: "center", marginBottom: "32px" }}>
                            <h2 style={{
                                fontSize: "clamp(22px, 3.5vw, 28px)",
                                fontWeight: "700",
                                color: "#0f1013",
                                margin: 0,
                                fontFamily: "var(--ep-font-serif, 'PT Serif', serif)"
                            }}>
                                Client Endorsements &amp; Perspectives
                            </h2>
                        </div>
                        <div className="feedback_grid" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "24px"
                        }}>
                            {reviews.map((rev) => (
                                <div key={rev.id} className="feedback_card prominence_card_equal_height" style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    padding: "32px 28px",
                                    border: "1px solid #eaedf0",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                                    overflowWrap: "break-word",
                                    wordBreak: "break-word",
                                    transition: "all 0.3s ease"
                                }}>
                                    <div className="prominence_card_body">
                                        {/* Star Rating & Verified Badge */}
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "8px" }}>
                                            <div style={{ fontSize: "14px", display: "inline-flex", gap: "4px" }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <i 
                                                        key={i} 
                                                        className={i < rev.rating ? "fa-solid fa-star" : "fa-regular fa-star"} 
                                                        style={{ color: i < rev.rating ? "#b89058" : "#cbd5e1" }}
                                                    />
                                                ))}
                                            </div>
                                            <span style={{
                                                fontSize: "11px",
                                                fontWeight: "700",
                                                textTransform: "uppercase",
                                                color: "#0f1013", backgroundColor: "rgba(15, 16, 19, 0.05)", border: "1px solid rgba(15, 16, 19, 0.12)",
                                                padding: "3px 10px",
                                                borderRadius: "12px"
                                            }}>
                                                <i className="fa-solid fa-circle-check" style={{ marginRight: "4px", color: "#b89058" }}></i> Verified Client
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
                                    <div className="prominence_card_footer" style={{ borderTop: "1px solid #eaedf0", paddingTop: "18px" }}>
                                        <h3 style={{ margin: "0 0 4px", fontSize: "18px", fontWeight: "700", color: "#0f1013" }}>
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
