'use client'
import React from 'react'
import Link from "next/link"


export default function Service() {
    return (
        <> 

        <section className="service_section">
            <div className="circle_one"></div>
            <div className="circle_two"></div>    
            <div className="container">        
                <div className="section_title light centred">
                    <div className="tag_text"><h6>Services</h6></div>
                    <h2>Provide quality Services.</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="300">
                            <div className="service_icon">
                                <i className="icon-33"></i>
                            </div>
                            <h4><Link href="/">Retirement Solutions</Link></h4>
                            <p>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="service_icon">
                                <i className="icon-32"></i>
                            </div>
                            <h4><Link href="#">Fraud & Protect</Link></h4>
                            <p>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="service_icon">
                                <i className="icon-31"></i>
                            </div>
                            <h4><Link href="#">Risk & Compliance</Link></h4>
                            <p>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                            <div className="service_icon">
                                <i className="icon-30"></i>
                            </div>
                            <h4><Link href="#">Wealth Management</Link></h4>
                            <p>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                            <div className="link_btn"><Link href="/">Discover More</Link></div>
                        </div>
                    </div>
                </div>
                <h1 className="section_tag">Services</h1>
            </div>
        </section>

        </>
    )
}
