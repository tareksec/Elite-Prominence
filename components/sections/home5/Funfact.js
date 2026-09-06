'use client'
import React from 'react'
import CounterUp from "@/components/elements/CounterUp"


export default function Funfact() {
    return (
        <> 

        <section className="funfact-section home_five">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="funfact-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="count-outer count-box">
                                <CounterUp end={150} /><span>+</span>
                            </div>
                            <h6>Expert Team Members</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="funfact-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                            <div className="count-outer count-box">
                                $
                                <span>3.</span><CounterUp end={5} /><span>B+</span>
                            </div>
                            <h6>Total Assets under Manage</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="funfact-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="count-outer count-box">
                                <CounterUp end={270} /><span>+</span>
                            </div>
                            <h6>Project Completed</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="funfact-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="650">
                            <div className="count-outer count-box">
                                <CounterUp end={99} /><span>%</span>
                            </div>
                            <h6>Customer Satisfaction</h6>
                        </div>
                    </div>
                </div>        
            </div>
        </section>

        </>
    )
}
