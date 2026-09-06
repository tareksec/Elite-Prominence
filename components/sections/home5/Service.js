'use client'
import React from 'react'
import Link from "next/link"

export default function Service() {
    return (
        <section className="service_section_five pt_120 pb_90">
            <div className="container">
                <div className="section_title centred mb_50">
                    <div className="tag_text"><h6>Core Pillars</h6></div>
                    <h2>Three Pillars, Delivered Together</h2>
                    <p style={{ maxWidth: "680px", margin: "15px auto 0", fontSize: "18px", color: "#59606a" }}>
                        We build a cohesive executive presence across the three digital surfaces where your reputation is evaluated.
                    </p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400">
                            <div className="service_icon"><i className="icon-33"></i></div>
                            <h3><Link href="/services">Digital HQ (Website)</Link></h3>
                            <p>A personal website built around your bio, expertise areas, case studies, and testimonials — the definitive hub you provide to boards and event organizers.</p>
                            <div className="link_btn"><Link href="/services">Explore Digital HQ &rarr;</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                            <div className="service_icon"><i className="icon-32"></i></div>
                            <h3><Link href="/services">Google Reputation</Link></h3>
                            <p>When someone searches your name, page one should reflect your executive standing — high-ranking owned assets and positive coverage pushing down outdated noise.</p>
                            <div className="link_btn"><Link href="/services">Explore Reputation Management &rarr;</Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="service_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="service_icon"><i className="icon-31"></i></div>
                            <h3><Link href="/services">LinkedIn Social Visibility</Link></h3>
                            <p>Strategic ghostwriting and thought leadership that captures your authentic executive voice — keeping you visible to peers and search firms without consuming your calendar.</p>
                            <div className="link_btn"><Link href="/services">Explore LinkedIn Strategy &rarr;</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}