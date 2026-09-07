'use client'
import React from 'react'

export default function Testimonial() {
    return (
        <>
            <section className="testimonial_section_two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                <div className="shape_icon_12 float-bob-y"><img src="/assets/images/icons/shape_icon_12.png" alt="" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 content_column">
                            <div className="testimonial_content centred" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550" style={{ margin: "0 auto", maxWidth: "800px" }}>
                                <div className="section_title centred">
                                    <div className="tag_text"><h6>Client Recognition</h6></div>
                                    <h2>What Our Clients Say</h2>
                                </div>
                                <div className="testimonial_block_three" style={{
                                    background: "#fff",
                                    padding: "48px 40px",
                                    borderRadius: "16px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                                    border: "1px solid #edf2f7",
                                    marginTop: "25px"
                                }}>
                                    <div className="inner_box">
                                        <div className="quort_icon" style={{ marginBottom: "18px" }}>
                                            <i className="icon-19" style={{ fontSize: "36px", color: "#2460e2" }}></i>
                                        </div>
                                        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#1b2534", maxWidth: "660px", margin: "0 auto 20px" }}>
                                            We're currently onboarding our first cohort of senior HR leaders and executive consultants. Verified testimonials, case studies, and client results will be published here soon.
                                        </p>
                                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "#f8fafd", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
                                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }}></span>
                                            <span style={{ fontSize: "14px", fontWeight: "600", color: "#475569" }}>Cohort 1 Onboarding in Progress</span>
                                        </div>
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

