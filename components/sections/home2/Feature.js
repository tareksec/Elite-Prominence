'use client'
import React, { useState } from 'react'

const pillarData = {
    1: {
        title: "Pillar 1 — Digital HQ (Website)",
        badge: "Pillar 1: Digital HQ (Website)",
        image: "/assets/images/elite/pillar_digital_hq.jpg",
        alt: "Personal website design and digital HQ for executive personal branding",
        icon: "icon-33",
        summary: "A personal website that establishes your digital brand identity, showcasing your bio, expertise, case studies, and career milestones — the definitive hub that represents you everywhere.",
        metric: "Avg. 45 Days to Page 1",
        metricDetail: "100% Owned Digital Real Estate",
        proofPoint: "Custom executive domain, boardroom CV, and speaker kit eliminating reliance on third-party algorithms."
    },
    2: {
        title: "Pillar 2 — Google & Reputation",
        badge: "Pillar 2: Google & Reputation",
        image: "/assets/images/elite/pillar_google_reputation.jpg",
        alt: "Google reputation management and page-one executive standing",
        icon: "fab fa-google",
        summary: "When someone searches your name, page one should reflect your executive standing — not silence or outdated noise. We manage your online reputation with owned assets and strategic media coverage so search results validate your authority immediately.",
        metric: "+340% Board Inquiries",
        metricDetail: "Top-3 Search Placement Guaranteed",
        proofPoint: "Google Knowledge Panel establishment and strategic publication syndication that command immediate authority."
    },
    3: {
        title: "Pillar 3 — Social Visibility",
        badge: "Pillar 3: Social Visibility",
        image: "/assets/images/elite/pillar_social_visibility.jpg",
        alt: "LinkedIn branding and executive ghostwriting for HR leaders",
        icon: "fab fa-linkedin-in",
        summary: "Executive ghostwriting and content creation aligned with an intentional brand strategy, keeping your thought leadership active on LinkedIn so you stay visible without becoming a full-time content creator.",
        metric: "45K+ Organic Impressions",
        metricDetail: "0 Hours Weekly Time Drain",
        proofPoint: "Discreet ghostwriting matching your authentic tone, engaging Fortune 500 decision-makers every week."
    }
}

export default function Feature() {
    const [isActive, setIsActive] = useState({
        status: true,
        key: 1,
    })

    const handleToggle = (key) => {
        setIsActive({
            status: true,
            key,
        })
    }

    const currentPillar = pillarData[isActive.key] || pillarData[1]

    return (
        <>
            <section className="feature_section_two prominence_section" style={{ position: "relative", overflow: "hidden", padding: "var(--ep-section-py) 0" }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* 3 Pillars Visual Showcase with all 3 pillar images */}
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="feature_image_block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" style={{ position: "relative", paddingBottom: "40px" }}>
                                
                                {/* Main Active Pillar Image Frame */}
                                <div className="feture_image" style={{ borderRadius: "16px", overflow: "hidden", position: "relative", boxShadow: "0 20px 45px rgba(0,0,0,0.12)" }}>
                                    <img
                                        src={currentPillar.image}
                                        alt={currentPillar.alt}
                                        style={{ width: "100%", height: "480px", objectFit: "cover", display: "block", transition: "all 0.4s ease" }}
                                    />
                                    {/* Active Pillar Pill Badge */}
                                    <div style={{
                                        position: "absolute",
                                        top: "18px",
                                        left: "18px",
                                        background: "rgba(13, 13, 20, 0.88)",
                                        backdropFilter: "blur(8px)",
                                        color: "#ffffff",
                                        padding: "6px 14px",
                                        borderRadius: "6px",
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        letterSpacing: "0.4px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        zIndex: 3
                                    }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8B5CF6", display: "inline-block" }}></span>
                                        {currentPillar.badge}
                                    </div>

                                    {/* Active Pillar Metric Overlay Banner */}
                                    <div style={{
                                        position: "absolute",
                                        bottom: "18px",
                                        left: "18px",
                                        right: "18px",
                                        backgroundColor: "#0D0D14",
                                        background: "rgba(13, 13, 20, 0.95)",
                                        backdropFilter: "blur(12px)",
                                        borderRadius: "12px",
                                        padding: "14px 18px",
                                        color: "#ffffff",
                                        border: "1px solid rgba(139, 92, 246, 0.35)",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        zIndex: 3
                                    }}>
                                        <div>
                                            <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#C084FC", fontWeight: "700" }}>Verified Outcome</div>
                                            <div style={{ fontSize: "15px", fontWeight: "700", color: "#ffffff" }}>{currentPillar.metric}</div>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <div style={{ fontSize: "12px", color: "#e2e8f0" }}>Proof Point</div>
                                            <div style={{ fontSize: "13px", fontWeight: "600", color: "#ffffff" }}>{currentPillar.metricDetail}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Pillar 2 (Google & Reputation) Showcase Card */}
                                <div
                                    onClick={() => handleToggle(2)}
                                    className="float-bob-y"
                                    style={{
                                        position: "absolute",
                                        left: "14px",
                                        bottom: "16px",
                                        background: "#ffffff",
                                        borderRadius: "12px",
                                        padding: "10px 14px",
                                        boxShadow: "0 14px 32px rgba(0,0,0,0.12)",
                                        border: isActive.key === 2 ? "2px solid #8B5CF6" : "1px solid #eaedf0",
                                        cursor: "pointer",
                                        zIndex: 4,
                                        transition: "all 0.3s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        maxWidth: "220px"
                                    }}
                                    title="Click to view Pillar 2: Google & Reputation"
                                >
                                    <div style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "8px",
                                        background: "rgba(66, 133, 244, 0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0
                                    }}>
                                        <i className="fab fa-google" style={{ color: "#4285F4", fontSize: "16px" }}></i>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#0D0D14", display: "block", lineHeight: "1.3" }}>
                                            Pillar 2: Reputation
                                        </span>
                                        <span style={{ fontSize: "11.5px", color: "#6B7280" }}>
                                            Page 1 Google Standing
                                        </span>
                                    </div>
                                </div>

                                {/* Floating Pillar 3 (Social Visibility) Showcase Card */}
                                <div
                                    onClick={() => handleToggle(3)}
                                    className="float-bob-x"
                                    style={{
                                        position: "absolute",
                                        right: "14px",
                                        top: "20px",
                                        background: "#ffffff",
                                        borderRadius: "12px",
                                        padding: "10px 14px",
                                        boxShadow: "0 14px 32px rgba(0,0,0,0.12)",
                                        border: isActive.key === 3 ? "2px solid #8B5CF6" : "1px solid #eaedf0",
                                        cursor: "pointer",
                                        zIndex: 4,
                                        transition: "all 0.3s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        maxWidth: "220px"
                                    }}
                                    title="Click to view Pillar 3: Social Visibility"
                                >
                                    <div style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "8px",
                                        background: "rgba(0, 119, 181, 0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0
                                    }}>
                                        <i className="fab fa-linkedin-in" style={{ color: "#0077b5", fontSize: "16px" }}></i>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#0D0D14", display: "block", lineHeight: "1.3" }}>
                                            Pillar 3: Visibility
                                        </span>
                                        <span style={{ fontSize: "11.5px", color: "#6B7280" }}>
                                            LinkedIn Thought Leadership
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Accordion Content Block */}
                        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 offset-xl-1">
                            <div className="feature_content_block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                                <div style={{ marginBottom: "28px" }}>
                                    <span className="prominence_tracker">Three-Pillar Architecture</span>
                                    <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>One Firm. Three Pillars. A Complete Sovereign Presence.</h2>
                                </div>
                                <ul className="accordion_box">
                                    <li className={`accordion block ${isActive.key == 1 ? "active-block" : ""}`} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <h3 style={{ margin: 0, color: isActive.key == 1 ? "#0D0D14" : "#6B7280", fontFamily: "var(--primary-font)" }}>Pillar 1 — Digital HQ (Website)</h3>
                                            <span style={{ fontSize: "14px", fontWeight: "700", color: isActive.key == 1 ? "#0D0D14" : "#6B7280" }}>{isActive.key == 1 ? "—" : "+"}</span>
                                        </div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"} style={{ display: isActive.key == 1 ? "block" : "none" }}>
                                            <div className="text">
                                                <p>A personal website that establishes your digital brand identity, showcasing your bio, expertise, case studies, and career milestones — the definitive hub that represents you everywhere.</p>
                                                <div style={{ marginTop: "14px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                                                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#0D0D14", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                                        <i className="fa-solid fa-check" style={{ color: "#8B5CF6", fontSize: "11px" }}></i>
                                                        45-Day Launch to Page 1
                                                    </span>
                                                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#0D0D14", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                                        <i className="fa-solid fa-check" style={{ color: "#8B5CF6", fontSize: "11px" }}></i>
                                                        100% Owned Domain Authority
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`accordion block ${isActive.key == 2 ? "active-block" : ""}`} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <h3 style={{ margin: 0, color: isActive.key == 2 ? "#0D0D14" : "#6B7280", fontFamily: "var(--primary-font)" }}>Pillar 2 — Google &amp; Reputation</h3>
                                            <span style={{ fontSize: "14px", fontWeight: "700", color: isActive.key == 2 ? "#0D0D14" : "#6B7280" }}>{isActive.key == 2 ? "—" : "+"}</span>
                                        </div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"} style={{ display: isActive.key == 2 ? "block" : "none" }}>
                                            <div className="text">
                                                <p>When someone searches your name, page one should reflect your executive standing — not silence or outdated noise. We manage your online reputation with owned assets and strategic media coverage so search results validate your authority immediately.</p>
                                                <div style={{ marginTop: "14px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                                                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#0D0D14", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                                        <i className="fa-solid fa-check" style={{ color: "#8B5CF6", fontSize: "11px" }}></i>
                                                        +340% Inbound Board Inquiries
                                                    </span>
                                                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#0D0D14", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                                        <i className="fa-solid fa-check" style={{ color: "#8B5CF6", fontSize: "11px" }}></i>
                                                        Top-3 Search Placement Guaranteed
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`accordion block ${isActive.key == 3 ? "active-block" : ""}`} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <h3 style={{ margin: 0, color: isActive.key == 3 ? "#0D0D14" : "#6B7280", fontFamily: "var(--primary-font)" }}>Pillar 3 — Social Visibility</h3>
                                            <span style={{ fontSize: "14px", fontWeight: "700", color: isActive.key == 3 ? "#0D0D14" : "#6B7280" }}>{isActive.key == 3 ? "—" : "+"}</span>
                                        </div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"} style={{ display: isActive.key == 3 ? "block" : "none" }}>
                                            <div className="text">
                                                <p>Executive ghostwriting and content creation aligned with an intentional brand strategy, keeping your thought leadership active on LinkedIn so you stay visible without becoming a full-time content creator.</p>
                                                <div style={{ marginTop: "14px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                                                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#0D0D14", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                                        <i className="fa-solid fa-check" style={{ color: "#8B5CF6", fontSize: "11px" }}></i>
                                                        45K+ Avg. Organic Reach
                                                    </span>
                                                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#0D0D14", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                                        <i className="fa-solid fa-check" style={{ color: "#8B5CF6", fontSize: "11px" }}></i>
                                                        0 Hours Weekly Time Commitment
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
