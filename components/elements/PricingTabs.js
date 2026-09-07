'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function PricingTabs() {
    const [activeModel, setActiveModel] = useState('onetime') // 'onetime' | 'retainer'

    return (
        <div className="pricing_tab_wrapper" style={{ fontFamily: "var(--primary-font)" }}>
            {/* Toggle Switcher */}
            <div className="pricing_toggle_container centred mb_50" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="pricing_toggle_box" style={{
                    display: 'inline-flex',
                    background: '#edf2f7',
                    padding: '6px',
                    borderRadius: '40px',
                    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.06)',
                    maxWidth: '100%',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '4px'
                }}>
                    <button
                        type="button"
                        className="pricing_toggle_btn"
                        onClick={() => setActiveModel('onetime')}
                        style={{
                            padding: '12px 28px',
                            borderRadius: '30px',
                            border: 'none',
                            fontWeight: '700',
                            fontSize: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            background: activeModel === 'onetime' ? '#2460e2' : 'transparent',
                            color: activeModel === 'onetime' ? '#ffffff' : '#4a5568',
                            boxShadow: activeModel === 'onetime' ? '0 4px 14px rgba(36, 96, 226, 0.35)' : 'none'
                        }}
                    >
                        One-Time Package (3-Month Sprint)
                    </button>
                    <button
                        type="button"
                        className="pricing_toggle_btn"
                        onClick={() => setActiveModel('retainer')}
                        style={{
                            padding: '12px 28px',
                            borderRadius: '30px',
                            border: 'none',
                            fontWeight: '700',
                            fontSize: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            background: activeModel === 'retainer' ? '#2460e2' : 'transparent',
                            color: activeModel === 'retainer' ? '#ffffff' : '#4a5568',
                            boxShadow: activeModel === 'retainer' ? '0 4px 14px rgba(36, 96, 226, 0.35)' : 'none'
                        }}
                    >
                        Monthly Retainer (Ongoing)
                    </button>
                </div>
            </div>

            {/* Model 1: One-Time Package (3-Month Sprint) */}
            {activeModel === 'onetime' && (
                <div className="model_one_content" data-aos="fade-up" data-aos-duration="400">
                    <div className="model_header centred mb_40">
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: "700",
                            letterSpacing: "1.2px",
                            textTransform: "uppercase",
                            color: "#2460e2",
                            backgroundColor: "rgba(36, 96, 226, 0.08)",
                            border: "1px solid rgba(36, 96, 226, 0.2)",
                            padding: "4px 14px",
                            borderRadius: "20px",
                            marginBottom: "10px"
                        }}>
                            Fixed-Scope Engagement
                        </span>
                        <h3 style={{ fontSize: '30px', fontWeight: '700', color: '#1b2534', margin: '0 0 8px' }}>
                            Model 1 — One-Time Package (3-Month Sprint)
                        </h3>
                        <p style={{ color: '#59606a', fontSize: '17px', margin: 0 }}>
                            Everything below is delivered within a focused 3-month executive sprint.
                        </p>
                    </div>

                    <div className="row justify-content-center align-items-stretch">
                        {/* Basic */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                            <div className="pricing_card_item" style={{
                                height: '100%',
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '40px 32px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}>
                                <div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1b2534', marginBottom: '6px' }}>
                                            Basic
                                        </h3>
                                        <p style={{ fontSize: '14px', color: '#64748b', minHeight: '40px', lineHeight: '1.5' }}>
                                            Foundation personal branding setup
                                        </p>
                                    </div>
                                    <div style={{ margin: '20px 0 28px', borderBottom: '1px solid #edf2f7', paddingBottom: '20px' }}>
                                        <span style={{ fontSize: '46px', fontWeight: '800', color: '#1b2534', lineHeight: '1' }}>
                                            $49
                                        </span>
                                        <span style={{ fontSize: '15px', color: '#64748b', fontWeight: '500', marginLeft: '6px' }}>
                                            / one-time
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', marginBottom: '14px' }}>
                                        What's Included:
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {[
                                            "Free website (3–5 pages)",
                                            "LinkedIn optimization",
                                            "Basic Google presence",
                                            "Brand building across 6 platforms"
                                        ].map((feat, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                                                <span style={{ color: '#2460e2', fontWeight: '800', fontSize: '16px', lineHeight: '1' }}>✓</span>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'center',
                                            backgroundColor: '#f1f5f9',
                                            color: '#1b2534',
                                            padding: '13px 20px',
                                            borderRadius: '30px',
                                            fontSize: '15px',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            border: '1px solid #e2e8f0',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        Book a Strategy Call &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Growth - Highlighted */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                            <div className="pricing_card_item recommended" style={{
                                height: '100%',
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '40px 32px',
                                border: '2px solid #2460e2',
                                boxShadow: '0 15px 40px rgba(36, 96, 226, 0.12)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative',
                                transform: 'translateY(-6px)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    top: '-13px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#2460e2',
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    padding: '4px 16px',
                                    borderRadius: '20px',
                                    boxShadow: '0 4px 10px rgba(36, 96, 226, 0.35)'
                                }}>
                                    Most Popular
                                </span>
                                <div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1b2534', marginBottom: '6px' }}>
                                            Growth
                                        </h3>
                                        <p style={{ fontSize: '14px', color: '#64748b', minHeight: '40px', lineHeight: '1.5' }}>
                                            Expanded reach &amp; regular content publishing
                                        </p>
                                    </div>
                                    <div style={{ margin: '20px 0 28px', borderBottom: '1px solid #edf2f7', paddingBottom: '20px' }}>
                                        <span style={{ fontSize: '46px', fontWeight: '800', color: '#2460e2', lineHeight: '1' }}>
                                            $69
                                        </span>
                                        <span style={{ fontSize: '15px', color: '#64748b', fontWeight: '500', marginLeft: '6px' }}>
                                            / one-time
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#2460e2', marginBottom: '14px' }}>
                                        What's Included:
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {[
                                            "Everything in Basic, upgraded to a paid website",
                                            "On-page SEO optimization",
                                            "10 posts (LinkedIn + Facebook/X)",
                                            "Strategic content calendar",
                                            "Local citation profile building (Google Business, directories)",
                                            "15+ reference & article postings"
                                        ].map((feat, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                                                <span style={{ color: '#2460e2', fontWeight: '800', fontSize: '16px', lineHeight: '1' }}>✓</span>
                                                <span dangerouslySetInnerHTML={{ __html: feat.replace("Everything in Basic", "<strong>Everything in Basic</strong>") }}></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        className="btn_style_one"
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'center',
                                            boxShadow: '0 4px 14px rgba(36, 96, 226, 0.35)'
                                        }}
                                    >
                                        Book a Strategy Call &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Premium */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                            <div className="pricing_card_item" style={{
                                height: '100%',
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '40px 32px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}>
                                <div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1b2534', marginBottom: '6px' }}>
                                            Premium
                                        </h3>
                                        <p style={{ fontSize: '14px', color: '#64748b', minHeight: '40px', lineHeight: '1.5' }}>
                                            Complete executive presence &amp; PR sprint
                                        </p>
                                    </div>
                                    <div style={{ margin: '20px 0 28px', borderBottom: '1px solid #edf2f7', paddingBottom: '20px' }}>
                                        <span style={{ fontSize: '46px', fontWeight: '800', color: '#1b2534', lineHeight: '1' }}>
                                            $99
                                        </span>
                                        <span style={{ fontSize: '15px', color: '#64748b', fontWeight: '500', marginLeft: '6px' }}>
                                            / one-time
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', marginBottom: '14px' }}>
                                        What's Included:
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {[
                                            "Everything in Growth",
                                            "Google reputation cleanup",
                                            "50+ high-authority backlinks & brand mentions (guest articles, directories, PR placements)",
                                            "Full 3 months of consistent multi-platform posting",
                                            "1 speaking or podcast opportunity sourced",
                                            "Full name-search coverage across page one"
                                        ].map((feat, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                                                <span style={{ color: '#2460e2', fontWeight: '800', fontSize: '16px', lineHeight: '1' }}>✓</span>
                                                <span dangerouslySetInnerHTML={{ __html: feat.replace("Everything in Growth", "<strong>Everything in Growth</strong>") }}></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'center',
                                            backgroundColor: '#f1f5f9',
                                            color: '#1b2534',
                                            padding: '13px 20px',
                                            borderRadius: '30px',
                                            fontSize: '15px',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            border: '1px solid #e2e8f0',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        Book a Strategy Call &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="centred mt_20 mb_20">
                        <p style={{ fontStyle: 'italic', color: '#64748b', fontSize: '15px' }}>
                            After 3 months, the package is complete. Continuing requires either a maintenance retainer or a new package.
                        </p>
                    </div>
                </div>
            )}

            {/* Model 2: Monthly Retainer */}
            {activeModel === 'retainer' && (
                <div className="model_two_content" data-aos="fade-up" data-aos-duration="400">
                    <div className="model_header centred mb_40">
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: "700",
                            letterSpacing: "1.2px",
                            textTransform: "uppercase",
                            color: "#2460e2",
                            backgroundColor: "rgba(36, 96, 226, 0.08)",
                            border: "1px solid rgba(36, 96, 226, 0.2)",
                            padding: "4px 14px",
                            borderRadius: "20px",
                            marginBottom: "10px"
                        }}>
                            Ongoing Authority Management
                        </span>
                        <h3 style={{ fontSize: '30px', fontWeight: '700', color: '#1b2534', margin: '0 0 8px' }}>
                            Model 2 — Monthly Retainer
                        </h3>
                        <p style={{ color: '#59606a', fontSize: '17px', margin: 0 }}>
                            Continuous authority, reputation, and presence management (Minimum commitment: 3 months).
                        </p>
                    </div>

                    <div className="row justify-content-center align-items-stretch">
                        {/* Basic */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                            <div className="pricing_card_item" style={{
                                height: '100%',
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '40px 32px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}>
                                <div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1b2534', marginBottom: '6px' }}>
                                            Basic
                                        </h3>
                                        <p style={{ fontSize: '14px', color: '#64748b', minHeight: '40px', lineHeight: '1.5' }}>
                                            Continuous social &amp; profile presence
                                        </p>
                                    </div>
                                    <div style={{ margin: '20px 0 28px', borderBottom: '1px solid #edf2f7', paddingBottom: '20px' }}>
                                        <span style={{ fontSize: '46px', fontWeight: '800', color: '#1b2534', lineHeight: '1' }}>
                                            $29
                                        </span>
                                        <span style={{ fontSize: '15px', color: '#64748b', fontWeight: '500', marginLeft: '6px' }}>
                                            / month
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', marginBottom: '14px' }}>
                                        What's Included:
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {[
                                            "LinkedIn content (8–10 posts/month)",
                                            "Profile maintenance & optimization",
                                            "Brand building across 5 platforms",
                                            "Google presence upkeep"
                                        ].map((feat, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                                                <span style={{ color: '#2460e2', fontWeight: '800', fontSize: '16px', lineHeight: '1' }}>✓</span>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'center',
                                            backgroundColor: '#f1f5f9',
                                            color: '#1b2534',
                                            padding: '13px 20px',
                                            borderRadius: '30px',
                                            fontSize: '15px',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            border: '1px solid #e2e8f0',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        Book a Strategy Call &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Growth - Highlighted */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                            <div className="pricing_card_item recommended" style={{
                                height: '100%',
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '40px 32px',
                                border: '2px solid #2460e2',
                                boxShadow: '0 15px 40px rgba(36, 96, 226, 0.12)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative',
                                transform: 'translateY(-6px)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    top: '-13px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#2460e2',
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    padding: '4px 16px',
                                    borderRadius: '20px',
                                    boxShadow: '0 4px 10px rgba(36, 96, 226, 0.35)'
                                }}>
                                    Most Popular
                                </span>
                                <div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1b2534', marginBottom: '6px' }}>
                                            Growth
                                        </h3>
                                        <p style={{ fontSize: '14px', color: '#64748b', minHeight: '40px', lineHeight: '1.5' }}>
                                            Website upkeep &amp; regular multi-platform content
                                        </p>
                                    </div>
                                    <div style={{ margin: '20px 0 28px', borderBottom: '1px solid #edf2f7', paddingBottom: '20px' }}>
                                        <span style={{ fontSize: '46px', fontWeight: '800', color: '#2460e2', lineHeight: '1' }}>
                                            $39
                                        </span>
                                        <span style={{ fontSize: '15px', color: '#64748b', fontWeight: '500', marginLeft: '6px' }}>
                                            / month
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#2460e2', marginBottom: '14px' }}>
                                        What's Included:
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {[
                                            "Everything in Basic, upgraded to a paid website",
                                            "Full website maintenance & updates",
                                            "Ongoing SEO & keyword monitoring",
                                            "12–15 posts/month across multiple platforms",
                                            "Local citation profile building",
                                            "5–8 reference/article posts per month"
                                        ].map((feat, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                                                <span style={{ color: '#2460e2', fontWeight: '800', fontSize: '16px', lineHeight: '1' }}>✓</span>
                                                <span dangerouslySetInnerHTML={{ __html: feat.replace("Everything in Basic", "<strong>Everything in Basic</strong>") }}></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        className="btn_style_one"
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'center',
                                            boxShadow: '0 4px 14px rgba(36, 96, 226, 0.35)'
                                        }}
                                    >
                                        Book a Strategy Call &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Premium */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                            <div className="pricing_card_item" style={{
                                height: '100%',
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '40px 32px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}>
                                <div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1b2534', marginBottom: '6px' }}>
                                            Premium
                                        </h3>
                                        <p style={{ fontSize: '14px', color: '#64748b', minHeight: '40px', lineHeight: '1.5' }}>
                                            Full ongoing authority &amp; name-search management
                                        </p>
                                    </div>
                                    <div style={{ margin: '20px 0 28px', borderBottom: '1px solid #edf2f7', paddingBottom: '20px' }}>
                                        <span style={{ fontSize: '46px', fontWeight: '800', color: '#1b2534', lineHeight: '1' }}>
                                            $99
                                        </span>
                                        <span style={{ fontSize: '15px', color: '#64748b', fontWeight: '500', marginLeft: '6px' }}>
                                            / month
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', marginBottom: '14px' }}>
                                        What's Included:
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {[
                                            "Everything in Growth",
                                            "5–10 high-authority backlinks/mentions per month",
                                            "Continuous reputation monitoring",
                                            "Monthly analytics & progress report",
                                            "Speaking opportunity sourcing",
                                            "Full name-search coverage, maintained ongoingly"
                                        ].map((feat, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                                                <span style={{ color: '#2460e2', fontWeight: '800', fontSize: '16px', lineHeight: '1' }}>✓</span>
                                                <span dangerouslySetInnerHTML={{ __html: feat.replace("Everything in Growth", "<strong>Everything in Growth</strong>") }}></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            textAlign: 'center',
                                            backgroundColor: '#f1f5f9',
                                            color: '#1b2534',
                                            padding: '13px 20px',
                                            borderRadius: '30px',
                                            fontSize: '15px',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            border: '1px solid #e2e8f0',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        Book a Strategy Call &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Retainer Timeline — 4-Step Stepper (Horizontal on Desktop, Collapsing to Vertical on Mobile) */}
            <div className="retainer_timeline_section mt_70 mb_60" data-aos="fade-up" data-aos-duration="500">
                <div className="section_title centred mb_40">
                    <span style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        color: "#2460e2",
                        backgroundColor: "rgba(36, 96, 226, 0.08)",
                        border: "1px solid rgba(36, 96, 226, 0.2)",
                        padding: "4px 14px",
                        borderRadius: "20px",
                        marginBottom: "10px"
                    }}>
                        Executive Roadmap
                    </span>
                    <h3 style={{ fontSize: '30px', fontWeight: '700', color: '#1b2534', margin: '0 0 8px' }}>
                        Retainer Timeline
                    </h3>
                    <p style={{ color: '#59606a', fontSize: '17px', margin: 0 }}>
                        What to expect, phase by phase, as your digital authority compounds.
                    </p>
                </div>

                {/* Styled Stepper Container */}
                <div className="stepper_wrapper" style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                }}>
                    <div className="timeline_stepper">
                        {[
                            {
                                step: "01",
                                phase: "Foundation",
                                timeline: "Month 1",
                                description: "Website goes live, LinkedIn is optimized, and executive brand voice is established."
                            },
                            {
                                step: "02",
                                phase: "Momentum",
                                timeline: "Months 2–3",
                                description: "Consistent posting begins, search engine indexing starts, and initial content traction builds."
                            },
                            {
                                step: "03",
                                phase: "Visibility Growth",
                                timeline: "Months 4–6",
                                description: "Engagement compounds, organic search rankings improve, and first PR/media opportunity is secured."
                            },
                            {
                                step: "04",
                                phase: "Authority Established",
                                timeline: "Months 7–12",
                                description: "Recognized industry presence, top Google search coverage, and inbound executive opportunities start arriving."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="timeline_step_item">
                                <div className="step_node_container">
                                    <div className="step_circle">
                                        {item.step}
                                    </div>
                                    {idx < 3 && <div className="step_connector_line"></div>}
                                </div>
                                <div className="step_card_content">
                                    <div className="step_badge">
                                        {item.timeline}
                                    </div>
                                    <h4 className="step_phase_title">
                                        {item.phase}
                                    </h4>
                                    <p className="step_desc">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="pricing_bottom_cta centred" style={{
                background: 'linear-gradient(135deg, #f8fafd 0%, #edf2f7 100%)',
                padding: '44px 32px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                maxWidth: '780px',
                margin: '40px auto 0',
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
            }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1b2534', marginBottom: '8px' }}>
                    Not sure which model or tier fits?
                </h3>
                <p style={{ fontSize: '17px', color: '#59606a', marginBottom: '24px', lineHeight: '1.6' }}>
                    Book a confidential strategy call and we'll evaluate your goals to recommend the right trajectory.
                </p>
                <Link href="/contact" className="btn_style_one" style={{ padding: '14px 34px', fontSize: '16px', fontWeight: '700' }}>
                    Book a Strategy Call &rarr;
                </Link>
            </div>

            {/* Embedded Stepper Styles (Responsive Desktop & Mobile) */}
            <style jsx>{`
                .timeline_stepper {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    position: relative;
                    gap: 20px;
                }
                .timeline_step_item {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    position: relative;
                }
                .step_node_container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    position: relative;
                    margin-bottom: 20px;
                }
                .step_circle {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background-color: #2460e2;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                    font-weight: 800;
                    z-index: 2;
                    box-shadow: 0 4px 12px rgba(36, 96, 226, 0.35);
                    border: 3px solid #ffffff;
                    flex-shrink: 0;
                }
                .step_connector_line {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(90deg, #2460e2, #93c5fd);
                    z-index: 1;
                    transform: translateY(-50%);
                }
                .step_card_content {
                    background-color: #f8fafd;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 20px 16px;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: transform 0.2s ease, border-color 0.2s ease;
                }
                .step_card_content:hover {
                    border-color: #2460e2;
                    transform: translateY(-3px);
                }
                .step_badge {
                    display: inline-block;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: #2460e2;
                    background-color: rgba(36, 96, 226, 0.08);
                    border: 1px solid rgba(36, 96, 226, 0.2);
                    padding: 2px 10px;
                    borderRadius: 12px;
                    margin-bottom: 8px;
                }
                .step_phase_title {
                    font-size: 17px;
                    font-weight: 700;
                    color: #1b2534;
                    margin: 0 0 8px;
                }
                .step_desc {
                    font-size: 14px;
                    color: #59606a;
                    line-height: 1.6;
                    margin: 0;
                }

                @media (max-width: 767px) {
                    .pricing_toggle_box {
                        width: 100% !important;
                        flex-direction: column !important;
                        border-radius: 20px !important;
                        padding: 8px !important;
                    }
                    .pricing_toggle_btn {
                        width: 100% !important;
                        padding: 12px 16px !important;
                        font-size: 14px !important;
                        min-height: 46px !important;
                        border-radius: 14px !important;
                        text-align: center !important;
                    }
                    :global(.pricing_card_item.recommended) {
                        transform: none !important;
                        margin-top: 14px !important;
                        margin-bottom: 14px !important;
                    }
                    :global(.pricing_card_item) {
                        padding: 30px 20px !important;
                    }
                    .timeline_stepper {
                        flex-direction: column;
                        gap: 24px;
                    }
                    .timeline_step_item {
                        flex-direction: row;
                        align-items: flex-start;
                        text-align: left;
                        gap: 16px;
                    }
                    .step_node_container {
                        width: 48px;
                        align-self: stretch;
                        flex-direction: column;
                        align-items: center;
                        position: relative;
                        margin-bottom: 0;
                        flex-shrink: 0;
                    }
                    .step_connector_line {
                        position: absolute;
                        left: calc(50% - 1.5px);
                        top: 48px;
                        bottom: -24px;
                        width: 3px;
                        height: auto;
                        transform: none;
                        background: linear-gradient(180deg, #2460e2, #93c5fd);
                    }
                    .step_card_content {
                        align-items: flex-start;
                    }
                }
            `}</style>
        </div>
    )
}
