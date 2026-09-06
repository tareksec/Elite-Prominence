'use client'
import React from 'react'
import Link from "next/link"


export default function Chooseus() {
    return (
        <> 

        <section className="why_choose_us style_three">
            <div className="shape_circle float-bob-y"><img src="assets/images/icons/ring_shape.png" alt=""/></div>
            <div className="container">
                <div className="row why_choose_us_row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="why_choose_left" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_text"><h6>Why Choose US</h6></div>
                            <h2>Investment views and financial market data</h2>
                            <p>We want to create superior value for our clients, shareholders and employees. And we want to stand out as a winner in our industry for our expertise, advice and execution</p>
                            <div className="link_btn">
                                <Link href="/" className="btn_style_one">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="why_choose_right" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="600">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colmun">
                                    <div className="why_choose_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="choose_icon">
                                            <i className="icon-47"></i>
                                        </div>
                                        <h4>Investor Relations</h4>
                                        <p>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colmun">
                                    <div className="why_choose_block_one mt_70 mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                                        <div className="choose_icon">
                                            <i className="icon-46"></i>
                                        </div>
                                        <h4>Corporate calendar</h4>
                                        <p>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colmun">
                                    <div className="why_choose_block_one mt_-70 mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                        <div className="choose_icon">
                                            <i className="icon-45"></i>
                                        </div>
                                        <h4>Sustainability</h4>
                                        <p>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colmun">
                                    <div className="why_choose_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="750">
                                        <div className="choose_icon">
                                            <i className="icon-44"></i>
                                        </div>
                                        <h4>Annual reporting</h4>
                                        <p>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
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
