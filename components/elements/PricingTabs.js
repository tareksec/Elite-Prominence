'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function PricingTabs() {
    const [activeModel, setActiveModel] = useState('onetime') // 'onetime' | 'retainer'

    return (
        <div className="pricing_tab_wrapper">
            {/* Toggle Switch */}
            <div className="pricing_toggle_container centred mb_50" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                <div style={{
                    display: 'inline-flex',
                    background: '#edf2f7',
                    padding: '6px',
                    borderRadius: '40px',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                }}>
                    <button
                        type="button"
                        onClick={() => setActiveModel('onetime')}
                        style={{
                            padding: '12px 28px',
                            borderRadius: '30px',
                            border: 'none',
                            fontWeight: '700',
                            fontSize: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            background: activeModel === 'onetime' ? '#2460e2' : 'transparent',
                            color: activeModel === 'onetime' ? '#ffffff' : '#4a5568'
                        }}
                    >
                        Model 1: One-Time Package (3-Month Sprint)
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveModel('retainer')}
                        style={{
                            padding: '12px 28px',
                            borderRadius: '30px',
                            border: 'none',
                            fontWeight: '700',
                            fontSize: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            background: activeModel === 'retainer' ? '#2460e2' : 'transparent',
                            color: activeModel === 'retainer' ? '#ffffff' : '#4a5568'
                        }}
                    >
                        Model 2: Monthly Retainer
                    </button>
                </div>
            </div>

            {/* Model 1: One-Time Package (3-Month Sprint) */}
            {activeModel === 'onetime' && (
                <div className="model_one_content" data-aos="fade-up" data-aos-duration="400">
                    <div className="model_header centred mb_40">
                        <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#1b2534' }}>Model 1 — One-Time Package (3-Month Sprint)</h3>
                        <p style={{ fontStyle: 'italic', color: '#59606a', marginTop: '6px' }}>
                            Everything below is delivered within a focused 3-month engagement.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        {/* Basic */}
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing_block mb_30">
                            <div className="pricing_block_one" style={{ height: '100%' }}>
                                <div className="pricing_table" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '12px' }}>
                                    <div className="table_header">
                                        <h3>Basic</h3>
                                        <p>Foundation personal branding</p>
                                        <div className="rate" style={{ fontSize: '38px', fontWeight: '700', color: '#1b2534', margin: '15px 0' }}>
                                            $49 <span style={{ fontSize: '15px', color: '#718096', fontWeight: '400' }}>/ one-time</span>
                                        </div>
                                    </div>
                                    <div className="table_content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <ul className="feature_list" style={{ flex: 1 }}>
                                            <li>Free website (3–5 pages)</li>
                                            <li>LinkedIn optimization</li>
                                            <li>Basic Google presence</li>
                                            <li>Brand building across 6 platforms</li>
                                        </ul>
                                        <div className="link_btn" style={{ marginTop: '25px' }}>
                                            <Link href="/contact" className="btn_style_two" style={{ width: '100%', textAlign: 'center' }}>
                                                <span>Book a Strategy Call</span>
                                            </Link>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Growth */}
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing_block mb_30">
                            <div className="pricing_block_one active" style={{ height: '100%' }}>
                                <div className="pricing_table" style={{ height: '100%', display: 'flex', flexDirection: 'column', border: '2px solid #2460e2', borderRadius: '12px' }}>
                                    <div className="table_header" style={{ background: '#2460e2' }}>
                                        <span style={{ display: 'inline-block', background: '#fff', color: '#2460e2', padding: '2px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>
                                            RECOMMENDED
                                        </span>
                                        <h3 style={{ color: '#fff' }}>Growth</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.85)' }}>Expanded reach & content publishing</p>
                                        <div className="rate" style={{ fontSize: '38px', fontWeight: '700', color: '#fff', margin: '15px 0' }}>
                                            $69 <span style={{ fontSize: '15px', color: '#fff', fontWeight: '400' }}>/ one-time</span>
                                        </div>
                                    </div>
                                    <div className="table_content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <ul className="feature_list" style={{ flex: 1 }}>
                                            <li><strong>Everything in Basic</strong>, upgraded to a paid website</li>
                                            <li>On-page SEO</li>
                                            <li>10 posts (LinkedIn + Facebook/X)</li>
                                            <li>A content calendar</li>
                                            <li>Local citation profile building (Google Business, directory listings)</li>
                                            <li>15+ reference/article postings</li>
                                        </ul>
                                        <div className="link_btn" style={{ marginTop: '25px' }}>
                                            <Link href="/contact" className="btn_style_one" style={{ width: '100%', textAlign: 'center' }}>
                                                <span>Book a Strategy Call</span>
                                            </Link>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium */}
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing_block mb_30">
                            <div className="pricing_block_one" style={{ height: '100%' }}>
                                <div className="pricing_table" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '12px' }}>
                                    <div className="table_header">
                                        <h3>Premium</h3>
                                        <p>Complete executive presence & PR sprint</p>
                                        <div className="rate" style={{ fontSize: '38px', fontWeight: '700', color: '#1b2534', margin: '15px 0' }}>
                                            $99 <span style={{ fontSize: '15px', color: '#718096', fontWeight: '400' }}>/ one-time</span>
                                        </div>
                                    </div>
                                    <div className="table_content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <ul className="feature_list" style={{ flex: 1 }}>
                                            <li><strong>Everything in Growth</strong></li>
                                            <li>Google reputation cleanup</li>
                                            <li>50+ high-authority backlinks/brand mentions (guest articles, directories, PR placements)</li>
                                            <li>A full 3 months of consistent multi-platform posting</li>
                                            <li>1 speaking/podcast opportunity sourced</li>
                                            <li>Full name-search coverage — website, social, news mentions, and citations across page one</li>
                                        </ul>
                                        <div className="link_btn" style={{ marginTop: '25px' }}>
                                            <Link href="/contact" className="btn_style_two" style={{ width: '100%', textAlign: 'center' }}>
                                                <span>Book a Strategy Call</span>
                                            </Link>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="centred mt_20 mb_30">
                        <p style={{ fontStyle: 'italic', color: '#718096', fontSize: '15px' }}>
                            After 3 months, the package is complete. Continuing requires either a maintenance retainer or a new package.
                        </p>
                    </div>
                </div>
            )}

            {/* Model 2: Monthly Retainer */}
            {activeModel === 'retainer' && (
                <div className="model_two_content" data-aos="fade-up" data-aos-duration="400">
                    <div className="model_header centred mb_40">
                        <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#1b2534' }}>Model 2 — Monthly Retainer</h3>
                        <p style={{ fontStyle: 'italic', color: '#59606a', marginTop: '6px' }}>
                            Minimum commitment: 3 months.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        {/* Basic */}
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing_block mb_30">
                            <div className="pricing_block_one" style={{ height: '100%' }}>
                                <div className="pricing_table" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '12px' }}>
                                    <div className="table_header">
                                        <h3>Basic</h3>
                                        <p>Continuous social & profile presence</p>
                                        <div className="rate" style={{ fontSize: '38px', fontWeight: '700', color: '#1b2534', margin: '15px 0' }}>
                                            $29 <span style={{ fontSize: '15px', color: '#718096', fontWeight: '400' }}>/ mo</span>
                                        </div>
                                    </div>
                                    <div className="table_content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <ul className="feature_list" style={{ flex: 1 }}>
                                            <li>LinkedIn content (8–10 posts/month)</li>
                                            <li>Profile maintenance</li>
                                            <li>Brand building across 5 platforms</li>
                                            <li>Google presence</li>
                                        </ul>
                                        <div className="link_btn" style={{ marginTop: '25px' }}>
                                            <Link href="/contact" className="btn_style_two" style={{ width: '100%', textAlign: 'center' }}>
                                                <span>Book a Strategy Call</span>
                                            </Link>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Growth */}
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing_block mb_30">
                            <div className="pricing_block_one active" style={{ height: '100%' }}>
                                <div className="pricing_table" style={{ height: '100%', display: 'flex', flexDirection: 'column', border: '2px solid #2460e2', borderRadius: '12px' }}>
                                    <div className="table_header" style={{ background: '#2460e2' }}>
                                        <span style={{ display: 'inline-block', background: '#fff', color: '#2460e2', padding: '2px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>
                                            MOST POPULAR
                                        </span>
                                        <h3 style={{ color: '#fff' }}>Growth</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.85)' }}>Website upkeep & regular multi-platform content</p>
                                        <div className="rate" style={{ fontSize: '38px', fontWeight: '700', color: '#fff', margin: '15px 0' }}>
                                            $39 <span style={{ fontSize: '15px', color: '#fff', fontWeight: '400' }}>/ mo</span>
                                        </div>
                                    </div>
                                    <div className="table_content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <ul className="feature_list" style={{ flex: 1 }}>
                                            <li><strong>Everything in Basic</strong>, upgraded to a paid website</li>
                                            <li>Website maintenance</li>
                                            <li>Ongoing SEO</li>
                                            <li>12–15 posts/month across multiple platforms</li>
                                            <li>Local citation profile building</li>
                                            <li>5–8 reference/article posts per month</li>
                                        </ul>
                                        <div className="link_btn" style={{ marginTop: '25px' }}>
                                            <Link href="/contact" className="btn_style_one" style={{ width: '100%', textAlign: 'center' }}>
                                                <span>Book a Strategy Call</span>
                                            </Link>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium */}
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing_block mb_30">
                            <div className="pricing_block_one" style={{ height: '100%' }}>
                                <div className="pricing_table" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '12px' }}>
                                    <div className="table_header">
                                        <h3>Premium</h3>
                                        <p>Full ongoing authority & name-search management</p>
                                        <div className="rate" style={{ fontSize: '38px', fontWeight: '700', color: '#1b2534', margin: '15px 0' }}>
                                            $99 <span style={{ fontSize: '15px', color: '#718096', fontWeight: '400' }}>/ mo</span>
                                        </div>
                                    </div>
                                    <div className="table_content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <ul className="feature_list" style={{ flex: 1 }}>
                                            <li><strong>Everything in Growth</strong></li>
                                            <li>5–10 high-authority backlinks/mentions per month</li>
                                            <li>Reputation monitoring</li>
                                            <li>A monthly report</li>
                                            <li>Speaking opportunity sourcing</li>
                                            <li>Full name-search coverage, maintained on an ongoing basis</li>
                                        </ul>
                                        <div className="link_btn" style={{ marginTop: '25px' }}>
                                            <Link href="/contact" className="btn_style_two" style={{ width: '100%', textAlign: 'center' }}>
                                                <span>Book a Strategy Call</span>
                                            </Link>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Retainer Timeline Table */}
            <div className="retainer_timeline_section mt_60 mb_60" data-aos="fade-up" data-aos-duration="500">
                <div className="section_title centred mb_30">
                    <div className="tag_text"><h6>Roadmap</h6></div>
                    <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1b2534' }}>Retainer Timeline</h3>
                    <p style={{ color: '#59606a', marginTop: '6px' }}>What to expect, phase by phase</p>
                </div>
                
                <div className="table-responsive" style={{ background: '#ffffff', borderRadius: '12px', boxShadow: '0 5px 25px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                    <table className="table" style={{ margin: '0', width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#1b2534', color: '#ffffff' }}>
                                <th style={{ padding: '18px 24px', fontSize: '16px', fontWeight: '700', border: 'none' }}>Phase</th>
                                <th style={{ padding: '18px 24px', fontSize: '16px', fontWeight: '700', border: 'none' }}>Timeline</th>
                                <th style={{ padding: '18px 24px', fontSize: '16px', fontWeight: '700', border: 'none' }}>What Happens</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                                <td style={{ padding: '18px 24px', fontWeight: '700', color: '#2460e2' }}>Foundation</td>
                                <td style={{ padding: '18px 24px', fontWeight: '600', color: '#4a5568' }}>Month 1</td>
                                <td style={{ padding: '18px 24px', color: '#59606a' }}>Website goes live, LinkedIn is optimized, brand voice is set</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #edf2f7', background: '#fcfdfd' }}>
                                <td style={{ padding: '18px 24px', fontWeight: '700', color: '#2460e2' }}>Momentum</td>
                                <td style={{ padding: '18px 24px', fontWeight: '600', color: '#4a5568' }}>Months 2–3</td>
                                <td style={{ padding: '18px 24px', color: '#59606a' }}>Consistent posting begins, on-page SEO starts</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                                <td style={{ padding: '18px 24px', fontWeight: '700', color: '#2460e2' }}>Visibility Growth</td>
                                <td style={{ padding: '18px 24px', fontWeight: '600', color: '#4a5568' }}>Months 4–6</td>
                                <td style={{ padding: '18px 24px', color: '#59606a' }}>Engagement grows, rankings improve, first PR opportunity</td>
                            </tr>
                            <tr style={{ background: '#fcfdfd' }}>
                                <td style={{ padding: '18px 24px', fontWeight: '700', color: '#2460e2' }}>Authority Established</td>
                                <td style={{ padding: '18px 24px', fontWeight: '600', color: '#4a5568' }}>Months 7–12</td>
                                <td style={{ padding: '18px 24px', color: '#59606a' }}>Recognized presence, inbound opportunities start arriving</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CTA Under Pricing Table */}
            <div className="pricing_bottom_cta centred" style={{
                background: 'linear-gradient(135deg, #f8fafd 0%, #edf2f7 100%)',
                padding: '40px 30px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                maxWidth: '780px',
                margin: '40px auto 0'
            }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1b2534', marginBottom: '10px' }}>
                    Not sure which model or tier fits?
                </h3>
                <p style={{ fontSize: '16px', color: '#59606a', marginBottom: '22px' }}>
                    Book a call and we'll recommend one.
                </p>
                <Link href="/contact" className="btn_style_one">
                    Book a Strategy Call
                </Link>
            </div>
        </div>
    )
}
