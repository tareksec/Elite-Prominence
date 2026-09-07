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
            <section className="feature_section_two" style={{ position: "relative", overflow: "hidden" }}>
                <div className="star_shape rotate-me"><img src="/assets/images/icons/star_icon.png" alt="Executive branding excellence" /></div>
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
                                        background: "rgba(11, 17, 32, 0.88)",
                                        backdropFilter: "blur(8px)",
                                        color: "#ffffff",
                                        padding: "6px 14px",
                                        borderRadius: "30px",
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        letterSpacing: "0.4px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        zIndex: 3
                                    }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", display: "inline-block" }}></span>
                                        {currentPillar.badge}
                                    </div>

                                    {/* Active Pillar Metric Overlay Banner */}
                                    <div style={{
                                        position: "absolute",
                                        bottom: "18px",
                                        left: "18px",
                                        right: "18px",
                                        background: "rgba(22, 45, 32, 0.92)",
                                        backdropFilter: "blur(12px)",
                                        borderRadius: "12px",
                                        padding: "14px 18px",
                                        color: "#ffffff",
                                        border: "1px solid rgba(210, 157, 43, 0.4)",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        zIndex: 3
                                    }}>
                                        <div>
                                            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#D29D2B", fontWeight: "700" }}>Verified Outcome</div>
                                            <div style={{ fontSize: "15px", fontWeight: "700" }}>{currentPillar.metric}</div>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <div style={{ fontSize: "11px", color: "#cbd5e1" }}>Proof Point</div>
                                            <div style={{ fontSize: "13px", fontWeight: "600", color: "#f8fafc" }}>{currentPillar.metricDetail}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Pillar 2 (Google & Reputation) Showcase Card */}
                                <div
                                    onClick={() => handleToggle(2)}
                                    className="float-bob-y"
                                    style={{
                                        position: "absolute",
                                        left: "-25px",
                                        bottom: "15px",
                                        background: "#ffffff",
                                        borderRadius: "14px",
                                        padding: "10px",
                                        boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                                        border: isActive.key === 2 ? "2px solid #2460e2" : "1px solid rgba(0,0,0,0.08)",
                                        cursor: "pointer",
                                        zIndex: 4,
                                        transition: "all 0.3s ease",
                                        width: "210px"
                                    }}
                                    title="Click to view Pillar 2: Google & Reputation"
                                >
                                    <div style={{ borderRadius: "10px", overflow: "hidden", height: "105px", position: "relative" }}>
                                        <img
                                            src="/assets/images/elite/pillar_google_reputation.jpg"
                                            alt="Pillar 2: Google & Reputation management for executives"
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                        <div style={{
                                            position: "absolute",
                                            top: "6px",
                                            left: "6px",
                                            background: "rgba(255,255,255,0.95)",
                                            backdropFilter: "blur(4px)",
                                            padding: "2px 8px",
                                            borderRadius: "20px",
                                            fontSize: "10px",
                                            fontWeight: "700",
                                            color: "#1b2534",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                                        }}>
                                            <i className="fab fa-google" style={{ color: "#4285F4", fontSize: "10px" }}></i> Page 1 Google
                                        </div>
                                    </div>
                                    <div style={{ marginTop: "8px", padding: "0 4px" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#1b2534", display: "block" }}>
                                            Pillar 2: Google &amp; Reputation
                                        </span>
                                        <span style={{ fontSize: "11px", color: "#64748b" }}>
                                            Search Authority &amp; Standing
                                        </span>
                                    </div>
                                </div>

                                {/* Floating Pillar 3 (Social Visibility) Showcase Card */}
                                <div
                                    onClick={() => handleToggle(3)}
                                    className="float-bob-x"
                                    style={{
                                        position: "absolute",
                                        right: "-30px",
                                        top: "25px",
                                        background: "#ffffff",
                                        borderRadius: "14px",
                                        padding: "10px",
                                        boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                                        border: isActive.key === 3 ? "2px solid #0077b5" : "1px solid rgba(0,0,0,0.08)",
                                        cursor: "pointer",
                                        zIndex: 4,
                                        transition: "all 0.3s ease",
                                        width: "190px"
                                    }}
                                    title="Click to view Pillar 3: Social Visibility"
                                >
                                    <div style={{ borderRadius: "10px", overflow: "hidden", height: "100px", position: "relative" }}>
                                        <img
                                            src="/assets/images/elite/pillar_social_visibility.jpg"
                                            alt="Pillar 3: LinkedIn thought leadership and executive visibility"
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                        <div style={{
                                            position: "absolute",
                                            top: "6px",
                                            left: "6px",
                                            background: "rgba(255,255,255,0.95)",
                                            backdropFilter: "blur(4px)",
                                            padding: "2px 8px",
                                            borderRadius: "20px",
                                            fontSize: "10px",
                                            fontWeight: "700",
                                            color: "#1b2534",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                                        }}>
                                            <i className="fab fa-linkedin-in" style={{ color: "#0077b5", fontSize: "10px" }}></i> Authority
                                        </div>
                                    </div>
                                    <div style={{ marginTop: "8px", padding: "0 4px" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#1b2534", display: "block" }}>
                                            Pillar 3: Social Visibility
                                        </span>
                                        <span style={{ fontSize: "11px", color: "#64748b" }}>
                                            LinkedIn Ghostwriting
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Accordion Content Block */}
                        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 offset-xl-1">
                            <div className="feature_content_block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                                <div className="section_title">
                                    <div className="tag_text"><h6>Why Elite Prominence</h6></div>
                                    <h2>One Agency. Three Pillars. A Complete Digital Presence.</h2>
                                </div>
                                <ul className="accordion_box">
                                    <li className={`accordion block ${isActive.key == 1 ? "active-block" : ""}`} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <h3 style={{ margin: 0, color: isActive.key == 1 ? "#2460e2" : "#1b2534" }}>Pillar 1 — Digital HQ (Website)</h3>
                                            <span style={{ fontSize: "14px", fontWeight: "700", color: isActive.key == 1 ? "#2460e2" : "#94a3b8" }}>{isActive.key == 1 ? "—" : "+"}</span>
                                        </div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"} style={{ display: isActive.key == 1 ? "block" : "none" }}>
                                            <div className="text">
                                                <p>A personal website that establishes your digital brand identity, showcasing your bio, expertise, case studies, and career milestones — the definitive hub that represents you everywhere.</p>
                                                <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#166534", backgroundColor: "#f0fdf4", padding: "4px 10px", borderRadius: "6px", border: "1px solid #bbf7d0" }}>
                                                        ✓ 45-Day Launch to Page 1
                                                    </span>
                                                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#475569", backgroundColor: "#f8fafc", padding: "4px 10px", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                                                        100% Owned Domain Authority
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`accordion block ${isActive.key == 2 ? "active-block" : ""}`} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <h3 style={{ margin: 0, color: isActive.key == 2 ? "#2460e2" : "#1b2534" }}>Pillar 2 — Google &amp; Reputation</h3>
                                            <span style={{ fontSize: "14px", fontWeight: "700", color: isActive.key == 2 ? "#2460e2" : "#94a3b8" }}>{isActive.key == 2 ? "—" : "+"}</span>
                                        </div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"} style={{ display: isActive.key == 2 ? "block" : "none" }}>
                                            <div className="text">
                                                <p>When someone searches your name, page one should reflect your executive standing — not silence or outdated noise. We manage your online reputation with owned assets and strategic media coverage so search results validate your authority immediately.</p>
                                                <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#166534", backgroundColor: "#f0fdf4", padding: "4px 10px", borderRadius: "6px", border: "1px solid #bbf7d0" }}>
                                                        ✓ +340% Inbound Board Inquiries
                                                    </span>
                                                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#475569", backgroundColor: "#f8fafc", padding: "4px 10px", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                                                        Top-3 Search Placement Guaranteed
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`accordion block ${isActive.key == 3 ? "active-block" : ""}`} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <h3 style={{ margin: 0, color: isActive.key == 3 ? "#2460e2" : "#1b2534" }}>Pillar 3 — Social Visibility</h3>
                                            <span style={{ fontSize: "14px", fontWeight: "700", color: isActive.key == 3 ? "#2460e2" : "#94a3b8" }}>{isActive.key == 3 ? "—" : "+"}</span>
                                        </div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"} style={{ display: isActive.key == 3 ? "block" : "none" }}>
                                            <div className="text">
                                                <p>Executive ghostwriting and content creation aligned with an intentional brand strategy, keeping your thought leadership active on LinkedIn so you stay visible without becoming a full-time content creator.</p>
                                                <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#166534", backgroundColor: "#f0fdf4", padding: "4px 10px", borderRadius: "6px", border: "1px solid #bbf7d0" }}>
                                                        ✓ 45K+ Avg. Organic Reach
                                                    </span>
                                                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#475569", backgroundColor: "#f8fafc", padding: "4px 10px", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
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
