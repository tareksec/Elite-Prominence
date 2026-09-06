'use client'
import React from 'react'
import { useState } from "react"


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
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="section_title">
                                <div className="tag_text"><h6>General FAQ</h6></div>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className="inner_box">
                            <ul className="accordion_box">
                                <li className="accordion block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>                        
                                        <h4>1.     How To Cancel Chase Card?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>                        
                                        <h4>2.     What is GlobalWebPay Alternative?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>                        
                                        <h4>3.     What are BIC and SWIFT codes?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>                        
                                        <h4>4.     Explaining what Britain's exit from the EU means?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>                        
                                        <h4>5.     What is Gross Domestic Product or GDP?</h4>
                                        <div className="icon-box"></div>
                                    </div>
                                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur. Ut parturient at volutpat dolor nunc cursus at rhoncus. Quis sit id tempus aliquam. Mauris felis purus morbi facilisis. Ullamcorper id consectetur ultricies nunc nunc enim accumsan porttitor.</p>
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
