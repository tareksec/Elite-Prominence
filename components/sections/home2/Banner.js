'use client'
import React from 'react'


export default function Banner() {
    return (
        <> 

        <section className="banner_style_two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="banner_content" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_text"><h6>Consultant</h6></div>
                            <h1>Smarter Investing, <br/>Brilliantly Spending</h1>
                            <p>Establish your vision and value proposition and turn them <br/>into testable prototypes.</p>
                            <div className="subscribe-inner">
                                <form action="/contact" method="post" className="subscribe-form">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Enter your email"/>
                                        <button type="submit" className="btn_style_one">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="banner_left_image" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">                    
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 clomun">
                                    <div className="chart_box float-bob-y">
                                        <div className="tranding_icon"><i className="icon-29"></i></div>
                                        <div className="shape_four"><img src="assets/images/icons/shape_icon_4.png" alt=""/></div>
                                        <div className="chart_image"><img src="assets/images/resource/chart_4.png" alt=""/></div>
                                    </div>
                                    <div className="income_chart float-bob-y">
                                        <div className="title_box">
                                            <h6>Total Income</h6>
                                            <div className="rate">$ 18532.52</div>
                                        </div>
                                        <div className="percentage"><i className="fa-solid fa-arrow-trend-up"></i> +11%</div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 clomun">
                                    <div className="banner_image_two">
                                        <img src="assets/images/resource/banner_image_1.jpg" alt=""/>
                                    </div>
                                    <div className="banner_image_three">
                                        <img src="assets/images/resource/banner_image_three.png" alt=""/>
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
