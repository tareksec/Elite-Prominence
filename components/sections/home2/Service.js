'use client'
import React from 'react'
import Link from "next/link"


export default function Service() {
    return (
        <> 

        <section className="service_section_two">
            <div className="container">        
                <div className="section_title centred">
                    <div className="tag_text"><h6>Our Services</h6></div>
                    <h2>Solutions we Provide</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="service_block_one style_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="service_icon">
                                <i className="icon-33"></i>
                            </div>
                            <h4>Retirement Solutions</h4>
                            <p>Duis aute irure dolor in velit onerepreh lore enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="service_block_one style_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                            <div className="service_icon">
                                <i className="icon-32"></i>
                            </div>
                            <h4>Fraud & Protect</h4>
                            <p>Duis aute irure dolor in velit onerepreh lore enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="service_block_one style_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service_icon">
                                <i className="icon-31"></i>
                            </div>
                            <h4>Risk & Compliance</h4>
                            <p>Duis aute irure dolor in velit onerepreh lore enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="service_block_one style_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                            <div className="service_icon">
                                <i className="icon-30"></i>
                            </div>
                            <h4>Wealth Management</h4>
                            <p>Duis aute irure dolor in velit onerepreh lore enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="service_block_one style_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="service_icon">
                                <i className="icon-30"></i>
                            </div>
                            <h4>Advance Banking</h4>
                            <p>Duis aute irure dolor in velit onerepreh lore enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="service_block_one style_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="750">
                            <div className="service_icon">
                                <i className="icon-30"></i>
                            </div>
                            <h4>Credit & Collections</h4>
                            <p>Duis aute irure dolor in velit onerepreh lore enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>            
                </div>
            </div>
        </section>

        </>
    )
}
