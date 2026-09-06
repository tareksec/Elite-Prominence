'use client'
import React from 'react'
import VideoPopup from "@/components/elements/VideoPopup"


export default function Process() {
    return (
        <> 

        <section className="work_process_section">
            <div className="container">        
                <div className="section_title centred">
                    <div className="tag_text"><h6>Work Process</h6></div>
                    <h2>How it works</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="process_block_one centred" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="300">
                            <div className="process_icon">
                                <i className="icon-35"></i>
                            </div>
                            <h4>Step 1: Create Account</h4>
                            <p>Easily create your Zaplin account with one click and get 100 Million Tokens</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="process_block_one centred shape_image" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400">
                            <div className="process_icon">
                                <i className="icon-36"></i>
                            </div>
                            <h4>Step 2: Type Contex</h4>
                            <p>Easily create your Zaplin account with one click and get 100 Million Tokens</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="process_block_one centred" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="process_icon">
                                <i className="icon-37"></i>
                            </div>
                            <h4>Step 3: Get Images</h4>
                            <p>Easily create your Zaplin account with one click and get 100 Million Tokens</p>
                        </div>
                    </div>
                </div>
                <div className="video_box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600" style={{ backgroundImage: "url(assets/images/background/video_box_bg.jpg)" }}>
                    <VideoPopup />
                </div>
            </div>
        </section>

        </>
    )
}
