'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export default function PricingTabs() {
    const [activeModel, setActiveModel] = useState('onetime') // 'onetime' | 'retainer'

    return (
        <div className="pricing_tab_wrapper" style={{ fontFamily: "var(--primary-font)" }}>
            {/* Toggle Switcher — Tactile Floating Pill Container (Matching Reference Image) */}
            <div className="pricing_toggle_container centred mb_50" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 10 }}>
                <div className="pricing_toggle_box" role="tablist" aria-label="Pricing Model Selection" style={{
                    display: 'inline-flex',
                    background: '#ffffff',
                    padding: '6px 8px',
                    borderRadius: '12px',
                    boxShadow: '0 12px 36px -4px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.03)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    maxWidth: '100%',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '6px'
                }}>
                    <button
                        type="button"
                        id="pricing-tab-onetime"
                        role="tab"
                        aria-selected={activeModel === 'onetime'}
                        aria-controls="pricing-tabpanel-onetime"
                        className="pricing_toggle_btn"
                        onClick={() => setActiveModel('onetime')}
                        style={{
                            padding: '12px 28px',
                            borderRadius: '8px',
                            border: activeModel === 'onetime' ? '1px solid rgba(255, 255, 255, 0.09)' : '1px solid transparent',
                            fontWeight: '600',
                            fontSize: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                            background: activeModel === 'onetime' ? 'linear-gradient(180deg, #2b2d32 0%, #151619 100%)' : 'transparent',
                            color: activeModel === 'onetime' ? '#ffffff' : '#64748b',
                            boxShadow: activeModel === 'onetime' 
                                ? '0 8px 20px -2px rgba(0, 0, 0, 0.4), 0 3px 6px -1px rgba(0, 0, 0, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.6)' 
                                : 'none',
                            textShadow: activeModel === 'onetime' ? '0 1px 2px rgba(0, 0, 0, 0.4)' : 'none'
                        }}
                    >
                        One-Time Package (3-Month Sprint)
                    </button>
                    <button
                        type="button"
                        id="pricing-tab-retainer"
                        role="tab"
                        aria-selected={activeModel === 'retainer'}
                        aria-controls="pricing-tabpanel-retainer"
                        className="pricing_toggle_btn"
                        onClick={() => setActiveModel('retainer')}
                        style={{
                            padding: '12px 28px',
                            borderRadius: '8px',
                            border: activeModel === 'retainer' ? '1px solid rgba(255, 255, 255, 0.09)' : '1px solid transparent',
                            fontWeight: '600',
                            fontSize: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                            background: activeModel === 'retainer' ? 'linear-gradient(180deg, #2b2d32 0%, #151619 100%)' : 'transparent',
                            color: activeModel === 'retainer' ? '#ffffff' : '#64748b',
                            boxShadow: activeModel === 'retainer' 
                                ? '0 8px 20px -2px rgba(0, 0, 0, 0.4), 0 3px 6px -1px rgba(0, 0, 0, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.6)' 
                                : 'none',
                            textShadow: activeModel === 'retainer' ? '0 1px 2px rgba(0, 0, 0, 0.4)' : 'none'
                        }}
                    >
                        Monthly Retainer (Ongoing)
                    </button>
                </div>
            </div>

            {/* Model 1: One-Time Package (3-Month Sprint) */}
            {activeModel === 'onetime' && (
                <div id="pricing-tabpanel-onetime" role="tabpanel" aria-labelledby="pricing-tab-onetime" className="model_one_content" style={{ animation: 'fadeInTab 0.35s ease-out' }}>
                    <div className="model_header centred mb_40">
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: "700",
                            letterSpacing: "1.2px",
                            textTransform: "uppercase",
                            color: "#0D1322", backgroundColor: "rgba(13, 19, 34, 0.05)", border: "1px solid rgba(13, 19, 34, 0.12)",
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
                                                <i className="fal fa-check-circle" style={{ color: '#0f172a', fontSize: '14px', marginTop: '3px' }}></i>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        className="btn_style_two btn_block"
                                    >
                                        <span>Book a Strategy Call</span> <i className="fa-solid fa-arrow-right"></i>
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
                                border: "2px solid #0D1322",
                                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.08)",
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
                                    background: "linear-gradient(180deg, #2b2d32 0%, #151619 100%)",
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    padding: '4px 16px',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)"
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
                                        <span style={{ fontSize: '46px', fontWeight: '800', color: '#0D1322', lineHeight: '1' }}>
                                            $69
                                        </span>
                                        <span style={{ fontSize: '15px', color: '#64748b', fontWeight: '500', marginLeft: '6px' }}>
                                            / one-time
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#0D1322', marginBottom: '14px' }}>
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
                                                <i className="fal fa-check-circle" style={{ color: '#0f172a', fontSize: '14px', marginTop: '3px' }}></i>
                                                <span dangerouslySetInnerHTML={{ __html: feat.replace("Everything in Basic", "<strong>Everything in Basic</strong>") }}></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        className="btn_style_one btn_block"
                                    >
                                        <span>Book a Strategy Call</span> <i className="fa-solid fa-arrow-right"></i>
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
                                                <i className="fal fa-check-circle" style={{ color: '#0f172a', fontSize: '14px', marginTop: '3px' }}></i>
                                                <span dangerouslySetInnerHTML={{ __html: feat.replace("Everything in Growth", "<strong>Everything in Growth</strong>") }}></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        className="btn_style_two btn_block"
                                    >
                                        <span>Book a Strategy Call</span> <i className="fa-solid fa-arrow-right"></i>
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
                <div id="pricing-tabpanel-retainer" role="tabpanel" aria-labelledby="pricing-tab-retainer" className="model_two_content" style={{ animation: 'fadeInTab 0.35s ease-out' }}>
                    <div className="model_header centred mb_40">
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: "700",
                            letterSpacing: "1.2px",
                            textTransform: "uppercase",
                            color: "#0D1322", backgroundColor: "rgba(13, 19, 34, 0.05)", border: "1px solid rgba(13, 19, 34, 0.12)",
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
                                                <i className="fal fa-check-circle" style={{ color: '#0f172a', fontSize: '14px', marginTop: '3px' }}></i>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        className="btn_style_two btn_block"
                                    >
                                        <span>Book a Strategy Call</span> <i className="fa-solid fa-arrow-right"></i>
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
                                border: "2px solid #0D1322",
                                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.08)",
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
                                    background: "linear-gradient(180deg, #2b2d32 0%, #151619 100%)",
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    padding: '4px 16px',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)"
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
                                        <span style={{ fontSize: '46px', fontWeight: '800', color: '#0D1322', lineHeight: '1' }}>
                                            $39
                                        </span>
                                        <span style={{ fontSize: '15px', color: '#64748b', fontWeight: '500', marginLeft: '6px' }}>
                                            / month
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#0D1322', marginBottom: '14px' }}>
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
                                                <i className="fal fa-check-circle" style={{ color: '#0f172a', fontSize: '14px', marginTop: '3px' }}></i>
                                                <span dangerouslySetInnerHTML={{ __html: feat.replace("Everything in Basic", "<strong>Everything in Basic</strong>") }}></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        className="btn_style_one btn_block"
                                    >
                                        <span>Book a Strategy Call</span> <i className="fa-solid fa-arrow-right"></i>
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
                                                <i className="fal fa-check-circle" style={{ color: '#0f172a', fontSize: '14px', marginTop: '3px' }}></i>
                                                <span dangerouslySetInnerHTML={{ __html: feat.replace("Everything in Growth", "<strong>Everything in Growth</strong>") }}></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <Link 
                                        href="/contact" 
                                        className="btn_style_two btn_block"
                                    >
                                        <span>Book a Strategy Call</span> <i className="fa-solid fa-arrow-right"></i>
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
                        color: "#0D1322", backgroundColor: "rgba(13, 19, 34, 0.05)", border: "1px solid rgba(13, 19, 34, 0.12)",
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
                <Link href="/contact" className="btn_style_one">
                    Book a Strategy Call <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <div style={{ marginTop: '16px', fontSize: '14px', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    <span>or</span>
                    <a
                        href={getWhatsAppUrl("Hi, I'd like to know more about Elite Prominence's services and pricing.")}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        style={{
                            color: '#0f1013',
                            fontWeight: '600',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'color 0.2s ease'
                        }}
                        className="pricing_whatsapp_secondary_link"
                        aria-label="Message Elite Prominence on WhatsApp"
                    >
                        <i className="fab fa-whatsapp" style={{ fontSize: '16px', color: '#b89058' }}></i>
                        <span>message us on WhatsApp</span>
                    </a>
                </div>
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
                    background-color: #0D1322;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                    font-weight: 800;
                    z-index: 2;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    border: 3px solid #ffffff;
                    flex-shrink: 0;
                }
                .step_connector_line {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 3px;
                    background: #E5E7EB;
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
                    border-color: #0D1322;
                    transform: translateY(-3px);
                }
                .step_badge {
                    display: inline-block;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: #0D1322;
                    background-color: rgba(13, 19, 34, 0.05);
                    border: 1px solid rgba(13, 19, 34, 0.12);
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
                        background: #E5E7EB;
                    }
                    .step_card_content {
                        align-items: flex-start;
                    }
                }
                @keyframes fadeInTab {
                    from {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}
