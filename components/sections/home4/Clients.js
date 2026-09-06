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

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}


export default function Clients() {
    return (
        <> 

        <section className="clients-section style_three" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_icon float-bob-x"><img src="assets/images/icons/shape_icon_1.png" alt=""/></div>
            <div className="content_title">The choice of 150+ financial companies, banks & fintech unicorns</div>
            <div className="container">
            <Swiper {...swiperOptions} className='five-item-carousel'>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-11.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-22.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-33.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-44.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-55.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-11.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-22.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-33.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-44.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="clients_block_one style_three">
                        <img src="assets/images/clients/client-55.png" alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </section>

        </>
    )
}
