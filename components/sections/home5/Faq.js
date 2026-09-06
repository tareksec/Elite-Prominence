'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"


export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <> 

        <section className="faq_section home_four pt_150">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5 col-md-12 mb-4 mb-lg-0">
                        <div style={{
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                            position: "relative",
                            minHeight: "440px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end"
                        }} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <img 
                                src="/assets/images/elite/blog_4_executive_presence.jpg" 
                                alt="Executive personal branding consultation and advisory guidance"
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(180deg, rgba(13,20,36,0.15) 0%, rgba(13,20,36,0.88) 100%)"
                            }}></div>
                            <div style={{ position: "relative", zIndex: 2, padding: "35px 30px", color: "#fff" }}>
                                <span style={{ color: "#5b92ff", textTransform: "uppercase", fontSize: "12px", fontWeight: "700", letterSpacing: "1px" }}>Advisory Inquiries</span>
                                <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "700", marginTop: "8px", marginBottom: "12px", lineHeight: "1.3" }}>Have a Question About Your Executive Presence?</h3>
                                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: "1.6", marginBottom: "22px" }}>
                                    Every leader's career trajectory is distinct. We conduct confidential 20-minute digital presence assessments.
                                </p>
                                <Link href="/contact" className="btn_style_one" style={{ padding: "12px 24px", fontSize: "14px" }}>Book a Strategy Call</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12">
                        <div className="inner_box ps-lg-4" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                            <div className="section_title">
                                <div className="tag_text"><h6>Common Questions</h6></div>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <ul className="accordion_box">
                                <li className="accordion block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>                        
                                        <h3>1. I'm already busy. How much time will this take from me?</h3>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Very little. This is a done-for-you model — most clients spend under 30 minutes a month once onboarding is complete.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>                        
                                        <h3>2. Is this just LinkedIn content, or more than that?</h3>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>It's more. We combine a personal website, Google reputation work, and LinkedIn strategy — most agencies only do one of these.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>                        
                                        <h3>3. How long before I see results?</h3>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Website and reputation work typically shows visible change within 60–90 days; social growth and inbound opportunities build over 6–12 months.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>                        
                                        <h3>4. Who is this NOT a good fit for?</h3>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Early-career professionals without an established track record yet — this is built specifically for leaders who already have results to showcase.</p>
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
