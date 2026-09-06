'use client'
import React from 'react'
import Link from "next/link"


export default function Chooseus() {
    return (
        <> 

        <section className="why_choose_us style_two">
            <div className="mouse_pointer float-bob-y"><img src="assets/images/icons/mouse-pointer.png" alt=""/></div>
            <div className="container">
                <div className="section_title centred">
                    <div className="tag_text"><h6>Why Choose us</h6></div>
                    <h2>We are the best in Market</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-28"></i>
                            </div>
                            <h4>Expert Consultant</h4>
                            <p>Duis aute irure dolor in velit onerepreh enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                            <div className="choose_icon">
                                <i className="icon-27"></i>
                            </div>
                            <h4>Worldpay Solutions</h4>
                            <p>Duis aute irure dolor in velit onerepreh enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="choose_icon">
                                <i className="icon-26"></i>
                            </div>
                            <h4>Innovative Fintech</h4>
                            <p>Duis aute irure dolor in velit onerepreh enderit in voluptate more esse</p>
                            <div className="link_btn"><Link href="/">Discover More <i className="fa-solid fa-angle-right"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
