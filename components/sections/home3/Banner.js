'use client'
import React from 'react'


export default function Banner() {
    return (
        <> 

        <section className="banner_style_three">
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
                            <div className="banner_author_box">
                                <div className="author_image_box">
                                    <div className="author_image">
                                        <img src="assets/images/author/author_1.png" alt=""/>
                                    </div>
                                    <div className="author_image">
                                        <img src="assets/images/author/author_2.png" alt=""/>
                                    </div>
                                    <div className="author_image">
                                        <img src="assets/images/author/author_3.png" alt=""/>
                                    </div>
                                </div>
                                <div className="author_content">
                                    <h4>4K+</h4>
                                    <span>users worldwide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="banner_left_image" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">                    
                            <div className="shape_image float-bob-x"><img src="assets/images/icons/shape_icon_7.png" alt=""/></div>
                            <div className="share_icon_box">
                                <div className="send_box icon_box float-bob-x">
                                    <div className="icon"><img src="assets/images/icons/mail_send.png" alt=""/></div>
                                    <span>Send</span>
                                </div>
                                <div className="request_box icon_box float-bob-x">
                                    <div className="icon"><img src="assets/images/icons/request.png" alt=""/></div>
                                    <span>Request</span>
                                </div>
                                <div className="more_box icon_box float-bob-x">
                                    <div className="icon"><img src="assets/images/icons/options.png" alt=""/></div>
                                    <span>More</span>
                                </div>
                            </div>
                            <div className="banner_image_four">
                                <img src="assets/images/resource/banner_image_2.jpg" alt=""/>
                            </div>
                            <div className="currency_box float-bob-y">
                                <div className="currency_coin">
                                    <img src="assets/images/icons/currency_coins.png" alt=""/>
                                </div>
                                <div className="currency_info">
                                    <div className="main_balance">
                                        <span>Your balance</span>
                                        <h6>$7,065.00 <a href="#"><i className="fa fa-angle-right"></i></a></h6>
                                    </div>
                                    <div className="wallet_box">
                                        <div className="icon"><i className="icon-26"></i></div>                                
                                        <h6>Wallet <a href="#"><i className="fa fa-angle-right"></i></a></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="income_chart float-bob-y">
                                <div className="title_box">
                                    <h6>Total Income</h6>
                                    <div className="rate">$ 18532.52</div>
                                </div>
                                <div className="percentage"><i className="fa-solid fa-arrow-trend-up"></i> +11%</div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </section>

        </>
    )
}
