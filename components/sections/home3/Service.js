'use client'
import React from 'react'
import { useState } from "react"


export default function Service() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <> 

        <section className="service_style_one" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_icon_nine rotate-me"><img src="assets/images/icons/shape_icon_9.png" alt=""/></div>
            <div className="container">
                <div className="section_title centred">
                    <div className="tag_text"><h6>Our Services</h6></div>
                    <h2>Solutions we Provide</h2>
                </div>
                <div className="nav nav-tabs">
                    <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "nav-link active-btn" : "tab-btn nav-link"}>Advance Banking</div>
                    <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "nav-link active-btn" : "tab-btn nav-link"}>Retirement Solutions</div>
                    <div onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "nav-link active-btn" : "tab-btn nav-link"}>Fraud & Protect</div>
                    <div onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "nav-link active-btn" : "tab-btn nav-link"}>Risk & Compliance</div>
                    <div onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "nav-link active-btn" : "tab-btn nav-link"}>Credit & Collections</div>
                    <div onClick={() => handleOnClick(6)} className={activeIndex === 6 ? "nav-link active-btn" : "tab-btn nav-link"}>Wealth Management</div>
                </div>        
                <div className="tab-content">
                    <div className={activeIndex === 1 ? "tab-pane active-tab" : "tab"}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content_column">
                                <div className="content_box mr_70">
                                    <h3>Advance Banking</h3>
                                    <p>Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.</p>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-17"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-18"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image_column">
                                <figure className="image_box"><img src="assets/images/resource/services_image_1.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab-pane active-tab" : "tab"}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content_column">
                                <div className="content_box mr_70">
                                    <h3>Retirement Solutions</h3>
                                    <p>Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.</p>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-17"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-18"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image_column">
                                <figure className="image_box"><img src="assets/images/resource/services_image_1.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab-pane active-tab" : "tab"}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content_column">
                                <div className="content_box mr_70">
                                    <h3>Fraud & Protect</h3>
                                    <p>Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.</p>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-17"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-18"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image_column">
                                <figure className="image_box"><img src="assets/images/resource/services_image_1.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    <div className={activeIndex === 4 ? "tab-pane active-tab" : "tab"}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content_column">
                                <div className="content_box mr_70">
                                    <h3>Risk & Compliance</h3>
                                    <p>Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.</p>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-17"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-18"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image_column">
                                <figure className="image_box"><img src="assets/images/resource/services_image_1.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    <div className={activeIndex === 5 ? "tab-pane active-tab" : "tab"}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content_column">
                                <div className="content_box mr_70">
                                    <h3>Credit & Collections</h3>
                                    <p>Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.</p>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-17"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-18"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image_column">
                                <figure className="image_box"><img src="assets/images/resource/services_image_1.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    <div className={activeIndex === 6 ? "tab-pane active-tab" : "tab"}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content_column">
                                <div className="content_box mr_70">
                                    <h3>Wealth Management</h3>
                                    <p>Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.</p>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-17"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                    <div className="content_item_one">
                                        <div className="icon_box"><i className="icon-18"></i></div>
                                        <div className="icon_content">
                                            <h4>Acquire, manage and grow</h4>
                                            <p>Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image_column">
                                <figure className="image_box"><img src="assets/images/resource/services_image_1.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
