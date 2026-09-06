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

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}


export default function Testimonial() {
    return (
        <> 

        <section className="testimonial_section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="shape_bg"></div>
                <div className="section_title centred">
                    <div className="tag_text"><h6>Testimonials</h6></div>
                    <h2>Love from Clients</h2>
                </div>
                <Swiper {...swiperOptions} className='three-item-carousel'>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>We will assist in the establishment of the legal entities, working with the Fund and Sponsor's advisers to prepare bespoke documentation, supporting you get you smoothly through to launch.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="assets/images/resource/testimonial-1.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Ronald Rogan</h5>
                                        <span className="designation">UI Designer</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>We will assist in the establishment of the legal entities, working with the Fund and Sponsor's advisers to prepare bespoke documentation, supporting you get you smoothly through to launch.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="assets/images/resource/testimonial-2.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Ronald Rogan</h5>
                                        <span className="designation">UI Designer</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>We will assist in the establishment of the legal entities, working with the Fund and Sponsor's advisers to prepare bespoke documentation, supporting you get you smoothly through to launch.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="assets/images/resource/testimonial-3.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Ronald Rogan</h5>
                                        <span className="designation">UI Designer</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>We will assist in the establishment of the legal entities, working with the Fund and Sponsor's advisers to prepare bespoke documentation, supporting you get you smoothly through to launch.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="assets/images/resource/testimonial-2.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Ronald Rogan</h5>
                                        <span className="designation">UI Designer</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>We will assist in the establishment of the legal entities, working with the Fund and Sponsor's advisers to prepare bespoke documentation, supporting you get you smoothly through to launch.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="assets/images/resource/testimonial-1.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Ronald Rogan</h5>
                                        <span className="designation">UI Designer</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>We will assist in the establishment of the legal entities, working with the Fund and Sponsor's advisers to prepare bespoke documentation, supporting you get you smoothly through to launch.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="assets/images/resource/testimonial-2.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Ronald Rogan</h5>
                                        <span className="designation">UI Designer</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>We will assist in the establishment of the legal entities, working with the Fund and Sponsor's advisers to prepare bespoke documentation, supporting you get you smoothly through to launch.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="assets/images/resource/testimonial-3.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Ronald Rogan</h5>
                                        <span className="designation">UI Designer</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial_block_one">
                            <div className="inner_box">
                                <ul className="rating">
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                    <li><i className="icon-39"></i></li>
                                </ul>
                                <p>We will assist in the establishment of the legal entities, working with the Fund and Sponsor's advisers to prepare bespoke documentation, supporting you get you smoothly through to launch.</p>
                                <div className="author_box">
                                    <figure className="thumb_box"><img src="assets/images/resource/testimonial-2.jpg" alt=""/></figure>
                                    <div className="author_info">
                                        <h5>Ronald Rogan</h5>
                                        <span className="designation">UI Designer</span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='owl-dots-one'>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        </section>

        </>
    )
}
