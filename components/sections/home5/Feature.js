'use client'
import React from 'react'

export default function Feature_Two() {
    return (
        <section className="feature_section" style={{ backgroundColor: "#FDFDFD", paddingTop: "80px", paddingBottom: "110px", position: "relative" }}>
            <div className="container">
                <div className="row">
                    {/* Card 1: Secure Retirement */}
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                        <div className="feature_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_icon">
                                <i className="icon-49"></i>
                            </div>
                            <h3>Secure Retirement</h3>
                            <p>Want to feel more confident about financial future? Our range of annuity strategies can help.</p>
                            <div className="chart_box" style={{ background: "#ffffff", padding: "24px 28px", borderRadius: "14px 14px 0 0", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                                <img
                                    src="/assets/images/resource/chart_2.png"
                                    alt="Asset Generated 128,7K"
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Invest with Potential */}
                    <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                        <div className="feature_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="tag_icon pink_gradient">
                                <i className="icon-48"></i>
                            </div>
                            <h3>Invest with Potential</h3>
                            <p style={{ maxWidth: "480px" }}>FlexGuard includes a Performance Lock feature which gives clients the flexibility End Date for your Future.</p>
                            <div className="chart_box" style={{ background: "#ffffff", padding: "24px 28px", borderRadius: "14px 14px 0 0", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                                <img
                                    src="/assets/images/resource/chart_3.png"
                                    alt="Opportunities 6,4K"
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Invest with Potential (Full-Width Two-Column) */}
                    <div className="col-xl-12 col-md-12 col-sm-12">
                        <div className="feature_block_one style_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6 col-md-12">
                                    <div className="tag_icon pink_gradient" style={{ position: "relative", top: "auto", right: "auto", marginBottom: "22px" }}>
                                        <i className="icon-48"></i>
                                    </div>
                                    <h3>Invest with Potential</h3>
                                    <p style={{ maxWidth: "460px", marginBottom: "30px" }}>
                                        FlexGuard includes a Performance Lock feature which gives clients the flexibility End Date for your Future.
                                    </p>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-12">
                                    <div className="chart_box" style={{ background: "#ffffff", padding: "28px 36px", borderRadius: "14px 14px 0 0", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                                        <img
                                            src="/assets/images/resource/chart_6.png"
                                            alt="Accenture Analysis 12,3K"
                                            style={{ width: "100%", height: "auto", display: "block" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
