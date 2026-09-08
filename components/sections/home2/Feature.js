'use client'
import React, { useState } from 'react'

export default function Feature() {
    const [isActive, setIsActive] = useState({
        status: true,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: null,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <section className="feature_section_two" style={{ position: "relative", backgroundColor: "#ffffff", padding: "120px 0" }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Visual Showcase with floating widgets */}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="feature_image_block" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            {/* Top Left Floating Icon Widget */}
                            <div className="icon_box_one float-bob-y">
                                <i className="icon-44"></i>
                            </div>

                            {/* Bottom Left Floating Gradient Widget */}
                            <div className="icon_box_two rotate-me">
                                <i className="icon-29"></i>
                            </div>

                            {/* Main Feature Workspace Image */}
                            <div className="feture_image">
                                <img
                                    src="/assets/images/resource/feature_image_2.jpg"
                                    alt="The Specialists In Fund Administration"
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                            </div>

                            {/* Floating Dial Gauge Chart */}
                            <div className="chart_image_five float-bob-x">
                                <img
                                    src="/assets/images/resource/chart_5.png"
                                    alt="Average Profit 16%"
                                    style={{ maxWidth: "210px", height: "auto", display: "block" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Title, Star Icon, and Numbered Accordion */}
                    <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1">
                        <div className="feature_content_block" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500" style={{ position: "relative" }}>
                            
                            {/* Decorative Star Icon on Top Right */}
                            <div style={{ position: "absolute", top: "0px", right: "0px", opacity: 0.85 }}>
                                <img src="/assets/images/icons/star_icon.png" alt="" style={{ width: "24px", height: "24px" }} />
                            </div>

                            {/* Features Eyebrow Pill */}
                            <div className="section_title" style={{ marginBottom: "25px" }}>
                                <div className="tag_text" style={{ display: "inline-block", background: "rgba(159, 112, 253, 0.12)", padding: "6px 18px", borderRadius: "30px", marginBottom: "18px" }}>
                                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#8B5CF6", textTransform: "uppercase", letterSpacing: "1px", display: "block" }}>
                                        FEATURES
                                    </span>
                                </div>
                                <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: "700", lineHeight: "1.22", color: "#0D0D14", letterSpacing: "-0.5px" }}>
                                    The Specialists In Fund Administration
                                </h2>
                            </div>

                            {/* Accordion Box */}
                            <ul className="accordion_box" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {/* Item 1 */}
                                <li className={`accordion block ${isActive.key === 1 ? "active-block" : ""}`} style={{ borderBottom: "1px solid rgba(13, 13, 13, 0.12)" }}>
                                    <div
                                        className={`acc-btn ${isActive.key === 1 ? "active" : ""}`}
                                        onClick={() => handleToggle(1)}
                                        style={{ padding: "20px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                    >
                                        <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0D0D14", margin: 0 }}>
                                            1. Improve operational performance
                                        </h4>
                                    </div>
                                    <div className={`acc-content ${isActive.key === 1 ? "current" : ""}`} style={{ display: isActive.key === 1 ? "block" : "none", paddingBottom: "22px" }}>
                                        <div className="text">
                                            <p style={{ fontSize: "15px", lineHeight: "26px", color: "#6A6A6A", margin: 0 }}>
                                                More than of the public reviews by our users mention amazing and super fast customer support as one of our
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                {/* Item 2 */}
                                <li className={`accordion block ${isActive.key === 2 ? "active-block" : ""}`} style={{ borderBottom: "1px solid rgba(13, 13, 13, 0.12)" }}>
                                    <div
                                        className={`acc-btn ${isActive.key === 2 ? "active" : ""}`}
                                        onClick={() => handleToggle(2)}
                                        style={{ padding: "20px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                    >
                                        <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0D0D14", margin: 0 }}>
                                            2. Focus on core competencies
                                        </h4>
                                    </div>
                                    <div className={`acc-content ${isActive.key === 2 ? "current" : ""}`} style={{ display: isActive.key === 2 ? "block" : "none", paddingBottom: "22px" }}>
                                        <div className="text">
                                            <p style={{ fontSize: "15px", lineHeight: "26px", color: "#6A6A6A", margin: 0 }}>
                                                Focus on executive leadership and commercial strategy while our dedicated operational frameworks manage continuous compliance and brand sovereignty.
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                {/* Item 3 */}
                                <li className={`accordion block ${isActive.key === 3 ? "active-block" : ""}`} style={{ borderBottom: "1px solid rgba(13, 13, 13, 0.12)" }}>
                                    <div
                                        className={`acc-btn ${isActive.key === 3 ? "active" : ""}`}
                                        onClick={() => handleToggle(3)}
                                        style={{ padding: "20px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                    >
                                        <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0D0D14", margin: 0 }}>
                                            3. Go to market quickly
                                        </h4>
                                    </div>
                                    <div className={`acc-content ${isActive.key === 3 ? "current" : ""}`} style={{ display: isActive.key === 3 ? "block" : "none", paddingBottom: "22px" }}>
                                        <div className="text">
                                            <p style={{ fontSize: "15px", lineHeight: "26px", color: "#6A6A6A", margin: 0 }}>
                                                Rapid deployment cycles accelerating timeline to market with tested institutional protocols, verified metrics, and turnkey execution.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
