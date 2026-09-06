'use client'
import React from 'react'


export default function About() {
    return (
        <> 

        <section className="about_section_three">
            <div className="mouse_pointer float-bob-y"><img src="assets/images/icons/mouse-pointer.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="about_left_image" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="author_box float-bob-y">
                                <div className="author_image">
                                    <img src="assets/images/author/author_4.png" alt=""/>
                                </div>
                                <div className="author_content">
                                    <h6>Received!</h6>
                                </div>
                                <div className="circle_green"></div>
                                <div className="shape_eight"><img src="assets/images/icons/shape_icon_8.png" alt=""/></div>
                            </div>
                            <div className="tranding_icon rotate-me"><i className="icon-29"></i></div>
                            <figure>
                                <img src="assets/images/resource/about_image_1.jpg" alt=""/>
                            </figure>
                            <div className="received_payment float-bob-y">
                                <div className="circle_red"></div>
                                <div className="icon_box">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <h6>You just sent $50.00 to <br/>Jenifer Lopez</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1">
                        <div className="about_right_content" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                            <div className="section_title">
                                <div className="tag_text"><h6>About us</h6></div>
                                <h2>Reimagining the power of investing</h2>
                                <p>We want to create superior value for our clients, shareholders and employees. And we want to stand out as a winner</p>
                            </div>
                            <div className="feature_block_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                <div className="icon_box">
                                    <i className="icon-15"></i>
                                </div>
                                <div className="feature_content">
                                    <h4>Expert Finance Advisors</h4>
                                    <p>Reimagining the power of investing. Connecting people for a better world with money.</p>
                                </div>
                            </div>
                            <div className="feature_block_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                <div className="icon_box">
                                    <i className="icon-16"></i>
                                </div>
                                <div className="feature_content">
                                    <h4>get 24/7 Support</h4>
                                    <p>The power behind our purpose: connecting millions people, delivering results for business and money.</p>
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
