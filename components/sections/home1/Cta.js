'use client'
import React from 'react'


export default function Cta() {
    return (
        <> 

        <section className="cta_section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="cta_inner">
                    <h3>Subscribe for latest update <br/> about Finance</h3>
                    <div className="subscribe-inner">
                        <form action="/contact" method="post" className="subscribe-form">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Enter your email"/>
                                <button type="submit" className="btn_style_one">Get Started</button>
                            </div>
                        </form>
                    </div>
                    <div className="cta_shape float-bob-y"><img src="assets/images/icons/shape_icon_3.png" alt=""/></div>
                    <div className="cta_image">
                        <figure>
                            <img src="assets/images/resource/cta_image.png" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
