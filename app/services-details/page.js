'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home3/Testimonial'

export default function Service_Details() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Service Architecture">
                <section className="service_details_section pt_120 pb_90">
                    <div className="container">
                        <div className="section_title centred mb_50">
                            <div className="tag_text"><h6>Core Offerings</h6></div>
                            <h2>The 3 Pillars of Executive Personal Branding</h2>
                            <p style={{ maxWidth: "750px", margin: "15px auto 0", fontSize: "18px", color: "#59606a" }}>
                                Delivered together so no part of your digital presence is left incomplete.
                            </p>
                        </div>

                        {/* Pillar 1 */}
                        <div className="row align-items-center mb_80">
                            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                                <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
                                    <img 
                                        src="/assets/images/elite/pillar_digital_hq.jpg" 
                                        alt="Personal website design and digital HQ for executive personal branding"
                                        style={{ width: "100%", height: "380px", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 ps-lg-5">
                                <div className="tag_text"><h6 style={{ color: "#2460e2", fontWeight: "700" }}>Pillar 1</h6></div>
                                <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>Website — Your Digital HQ</h3>
                                <p style={{ color: "#59606a", lineHeight: "1.8", fontSize: "16px", marginBottom: "20px" }}>
                                    A personal website that showcases your bio, areas of expertise, case studies, and testimonials. It serves as the single canonical link you provide in your email signature, LinkedIn profile, keynote speaker applications, and board due diligence dossiers.
                                </p>
                                <ul style={{ listStyle: "none", padding: 0, marginBottom: "25px", color: "#1b2534", fontWeight: "600", lineHeight: "2" }}>
                                    <li><i className="fa-solid fa-check" style={{ color: "#2460e2", marginRight: "10px" }}></i> Custom executive design architecture</li>
                                    <li><i className="fa-solid fa-check" style={{ color: "#2460e2", marginRight: "10px" }}></i> Professional copywriting & narrative development</li>
                                    <li><i className="fa-solid fa-check" style={{ color: "#2460e2", marginRight: "10px" }}></i> Mobile-first, high-speed optimization</li>
                                </ul>
                                <Link href="/contact" className="btn_style_one">Book a Strategy Call</Link>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="row align-items-center mb_80 flex-lg-row-reverse">
                            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                                <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
                                    <img 
                                        src="/assets/images/elite/pillar_google_reputation.jpg" 
                                        alt="Google reputation management and search presence for HR executives"
                                        style={{ width: "100%", height: "380px", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 pe-lg-5">
                                <div className="tag_text"><h6 style={{ color: "#2460e2", fontWeight: "700" }}>Pillar 2</h6></div>
                                <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>Google & Reputation Management</h3>
                                <p style={{ color: "#59606a", lineHeight: "1.8", fontSize: "16px", marginBottom: "20px" }}>
                                    When nominating committees, executive search partners, or conference organizers Google your name, page one must reflect your true stature. We optimize high-authority assets to ensure search results highlight your definitive achievements.
                                </p>
                                <ul style={{ listStyle: "none", padding: 0, marginBottom: "25px", color: "#1b2534", fontWeight: "600", lineHeight: "2" }}>
                                    <li><i className="fa-solid fa-check" style={{ color: "#2460e2", marginRight: "10px" }}></i> Page-one Google search reputation audit</li>
                                    <li><i className="fa-solid fa-check" style={{ color: "#2460e2", marginRight: "10px" }}></i> Knowledge panel & profile optimization</li>
                                    <li><i className="fa-solid fa-check" style={{ color: "#2460e2", marginRight: "10px" }}></i> Positive asset ranking & suppression of outdated results</li>
                                </ul>
                                <Link href="/contact" className="btn_style_one">Book a Strategy Call</Link>
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="row align-items-center mb_80">
                            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                                <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
                                    <img 
                                        src="/assets/images/elite/pillar_social_visibility.jpg" 
                                        alt="LinkedIn thought leadership and executive ghostwriting for senior leaders"
                                        style={{ width: "100%", height: "380px", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 ps-lg-5">
                                <div className="tag_text"><h6 style={{ color: "#2460e2", fontWeight: "700" }}>Pillar 3</h6></div>
                                <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>Social Visibility (LinkedIn Ghostwriting)</h3>
                                <p style={{ color: "#59606a", lineHeight: "1.8", fontSize: "16px", marginBottom: "20px" }}>
                                    A structured ghostwriting system built around brief monthly interviews. We capture your authentic voice, insights, and lessons from the field, turning them into high-engagement thought leadership without demanding your time.
                                </p>
                                <ul style={{ listStyle: "none", padding: 0, marginBottom: "25px", color: "#1b2534", fontWeight: "600", lineHeight: "2" }}>
                                    <li><i className="fa-solid fa-check" style={{ color: "#2460e2", marginRight: "10px" }}></i> Done-for-you monthly ghostwriting cadence</li>
                                    <li><i className="fa-solid fa-check" style={{ color: "#2460e2", marginRight: "10px" }}></i> Strategic topic mapping tailored to senior HR leaders</li>
                                    <li><i className="fa-solid fa-check" style={{ color: "#2460e2", marginRight: "10px" }}></i> Peer and executive network engagement</li>
                                </ul>
                                <Link href="/contact" className="btn_style_one">Book a Strategy Call</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonial />
            </Layout>
        </div>
    )
}