'use client'
import React from 'react'


export default function Feature() {
    return (
        <> 

        <section className="feature_section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                        <div className="feature_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="tag_icon">
                                <i className="icon-49"></i>
                            </div>
                            <h3>Secure Retirement</h3>
                            <p>Want to feel more confident about financial future? Our range of annuity strategies can help.</p>
                            <div className="chart_box">
                                <img src="assets/images/resource/chart_2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                        <div className="feature_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="tag_icon">
                                <i className="icon-48"></i>
                            </div>
                            <h3>Invest with Protential</h3>
                            <p>FlexGuard includes a Performance Lock feature which gives clients the flexibility End Date for your Future.</p>
                            <div className="chart_box">
                                <img src="assets/images/resource/chart_3.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
