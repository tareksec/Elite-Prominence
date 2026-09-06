'use client'
import React from 'react'
import Link from "next/link"


export default function About() {
    return (
        <> 

        <section className="about_section_three home_four">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="about_left_image_four" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="goal_box">
                                <h6>Quarter goal</h6>
                                <div className="progress">
                                    <div className="barOverflow">
                                    <div className="bar"></div>
                                    </div>
                                    <div className="persent"><span>84</span>%</div>
                                </div>
                                <div className="goal_links"><Link href="/">All goals <i className="icon-34"></i></Link></div>
                            </div>
                            <figure>
                                <img src="assets/images/resource/about_image_4.png" alt=""/>
                            </figure>
                            <div className="meter_box">
                                <img src="assets/images/icons/meter_icon.png" alt=""/>
                                <h6>$10,500.00</h6>
                                <span>Monthly Goal</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1">
                        <div className="about_right_content" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="600">
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
                            <div className="feature_block_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
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
