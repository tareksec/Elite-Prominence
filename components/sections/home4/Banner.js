'use client'
import React from 'react'


export default function Banner() {
    return (
        <> 

        <section className="banner_style_four">
            <div className="master_card float-bob-y"><img src="assets/images/icons/master_card.png" alt=""/></div>
            <div className="credit_card float-bob-y"><img src="assets/images/icons/credit_card.png" alt=""/></div>
            <div className="container">
                <div className="banner_content centred">
                    <div className="shape_icon_13 float-bob-x"><img src="assets/images/icons/shape_icon_13.png" alt=""/></div>
                    <div className="tag_text"><h6>Consultant</h6></div>
                    <h1>We Unlock Your Business <br/>Opportunity</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
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
        </section>

        </>
    )
}
