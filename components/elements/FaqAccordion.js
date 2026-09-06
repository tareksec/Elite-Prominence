'use client'
import React, { useState } from 'react'

export default function FaqAccordion() {
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
        <ul className="accordion_box">
            <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                <div className={isActive.key === 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>                        
                    <h3>1. I'm already busy. How much time will this take from me?</h3>
                    <div className="icon-box"></div>
                </div>
                <div className={isActive.key === 1 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                        <p>Very little. This is a done-for-you model — most clients spend under 30 minutes a month once onboarding is complete.</p>
                    </div>
                </div>
            </li>
            <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                <div className={isActive.key === 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>                        
                    <h3>2. Is this just LinkedIn content, or more than that?</h3>
                    <div className="icon-box"></div>
                </div>
                <div className={isActive.key === 2 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                        <p>It's more. We combine a personal website, Google reputation work, and LinkedIn strategy — most agencies only do one of these.</p>
                    </div>
                </div>
            </li>
            <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                <div className={isActive.key === 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>                       
                    <h3>3. How long before I see results?</h3>
                    <div className="icon-box"></div>
                </div>
                <div className={isActive.key === 3 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                        <p>Website and reputation work typically shows visible change within 60–90 days; social growth and inbound opportunities build over 6–12 months.</p>
                    </div>
                </div>
            </li>
            <li className="accordion block" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                <div className={isActive.key === 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>                        
                    <h3>4. Who is this NOT a good fit for?</h3>
                    <div className="icon-box"></div>
                </div>
                <div className={isActive.key === 4 ? "acc-content current" : "acc-content"}>
                    <div className="text">
                        <p>Early-career professionals without an established track record yet — this is built specifically for leaders who already have results to showcase.</p>
                    </div>
                </div>
            </li>
        </ul>
    )
}
