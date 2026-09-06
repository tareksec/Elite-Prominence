'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}


export default function Testimonial() {
    return (
        <> 

        <section className="testimonial_section_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_icon_12 float-bob-y"><img src="/assets/images/icons/shape_icon_12.png" alt=""/></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 content_column">
                        <div className="testimonial_content centred" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550" style={{ margin: "0 auto", maxWidth: "800px" }}>
                            <div className="section_title centred">
                                <div className="tag_text"><h6>Client Recognition</h6></div>
                                <h2>What Our Clients Say</h2>
                            </div>
                            <Swiper {...swiperOptions} className='single-item-carousel'>
                                <SwiperSlide>
                                    <div className="testimonial_block_three" style={{ background: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                                        <div className="inner_box">
                                            <div className="quort_icon" style={{ marginBottom: "15px" }}><i className="icon-19" style={{ fontSize: "36px", color: "#2460e2" }}></i></div>
                                            <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#1b2534" }}>
                                                We're currently onboarding our first cohort of senior HR leaders and executive consultants. Verified testimonials, case studies, and client results will be published here soon.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial_block_three" style={{ background: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                                        <div className="inner_box">
                                            <div className="quort_icon" style={{ marginBottom: "15px" }}><i className="icon-19" style={{ fontSize: "36px", color: "#2460e2" }}></i></div>
                                            <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#1b2534" }}>
                                                "Visibility is not vanity — it's infrastructure for the next stage of your career." Partner with Elite Prominence to build a reputation that works as hard as you do.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className='nav-style-one' style={{ marginTop: "20px" }}>
                                <div className="owl-nav">
                                    <button type="button" className="owl-prev"><span className="icon-13"></span></button>
                                    <button type="button" className="owl-next"><span className="icon-13"></span></button>
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
