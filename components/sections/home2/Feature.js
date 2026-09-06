'use client'
import React from 'react'
import { useState } from "react"


export default function Feature() {
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

        <section className="feature_section_two">
            <div className="star_shape rotate-me"><img src="/assets/images/icons/star_icon.png" alt="Executive branding excellence"/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="feature_image_block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="icon_box_one float-bob-y"><i className="icon-33"></i></div>
                            <div className="icon_box_two float-bob-y"><i className="fab fa-linkedin-in"></i></div>
                            <div className="feture_image" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                <img src="/assets/images/elite/pillar_digital_hq.jpg" alt="Personal website design and digital HQ for executive personal branding" style={{ width: "100%", height: "480px", objectFit: "cover" }}/>
                            </div>                    
                            <div className="chart_image_five float-bob-x" style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}>
                                <img src="/assets/images/elite/pillar_social_visibility.jpg" alt="LinkedIn branding and executive ghostwriting for HR leaders" style={{ width: "240px", height: "auto" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 offset-xl-1">
                        <div className="feature_content_block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                            <div className="section_title">
                                <div className="tag_text"><h6>Why Elite Prominence</h6></div>
                                <h2>One Agency. Three Pillars. A Complete Digital Presence.</h2>
                            </div>
                            <ul className="accordion_box">
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>                        
                                        <h3>1. Digital HQ (Website)</h3>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>A personal website built around your bio, expertise, case studies, and testimonials — the single link that represents you everywhere.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>                        
                                        <h3>2. Google & Reputation</h3>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>When someone searches your name, page one should say "expert" — not "nothing," and not something outdated. We make sure it does.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>                       
                                        <h3>3. Social Visibility</h3>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>LinkedIn content and thought leadership built around your voice, run for you, so you stay visible without becoming a full-time content creator.</p>
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
