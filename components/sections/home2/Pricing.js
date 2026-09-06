'use client'
import React from 'react'
import Link from "next/link"


export default function Pricing() {
    return (
        <> 

        <section className="pricing_section">
            <div className="shape_bg rotate-me"></div>
            <div className="shape_six float-bob-y"><img src="assets/images/icons/shape_icon_6.png" alt=""/></div>
            <div className="container">
                <div className="section_title centred">
                    <div className="tag_text"><h6>Our Pricing</h6></div>
                    <h2>Affordable Pricing Plans</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing_block">
                        <div className="pricing_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="pricing_table">
                                <div className="table_header">
                                    <h5>Personal Plan</h5>
                                    <p>For bloggers, freelancers & businesses</p>
                                    <div className="rate">$29 <span>/Month</span></div>
                                </div>
                                <div className="table_content">
                                    <ul className="feature_list">
                                        <li>Up to 10 Team Members</li>
                                        <li>Unlimited Usage</li>
                                        <li>Unlimited Drive Storage</li>
                                        <li>Concierge Help Center</li>
                                        <li>Smart Brand Personas</li>
                                        <li>Custom AI Brand Models</li>
                                    </ul>
                                    <div className="link_btn">
                                        <Link href="/pricing" className="btn_style_two"><span>Select This Package</span></Link>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing_block">
                        <div className="pricing_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="pricing_table">
                                <div className="table_header">
                                    <h5>Business Plan</h5>
                                    <p>For bloggers, freelancers & businesses</p>
                                    <div className="rate">$39 <span>/Month</span></div>
                                </div>
                                <div className="table_content">
                                    <ul className="feature_list">
                                        <li>Up to 10 Team Members</li>
                                        <li>Unlimited Usage</li>
                                        <li>Unlimited Drive Storage</li>
                                        <li>Concierge Help Center</li>
                                        <li>Smart Brand Personas</li>
                                        <li>Custom AI Brand Models</li>
                                    </ul>
                                    <div className="link_btn">
                                        <Link href="/pricing" className="btn_style_two"><span>Select This Package</span></Link>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing_block">
                        <div className="pricing_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="pricing_table">
                                <div className="table_header">
                                    <h5>Advance Plan</h5>
                                    <p>For bloggers, freelancers & businesses</p>
                                    <div className="rate">$59 <span>/Month</span></div>
                                </div>
                                <div className="table_content">
                                    <ul className="feature_list">
                                        <li>Up to 10 Team Members</li>
                                        <li>Unlimited Usage</li>
                                        <li>Unlimited Drive Storage</li>
                                        <li>Concierge Help Center</li>
                                        <li>Smart Brand Personas</li>
                                        <li>Custom AI Brand Models</li>
                                    </ul>
                                    <div className="link_btn">
                                        <Link href="/pricing" className="btn_style_two"><span>Select This Package</span></Link>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
