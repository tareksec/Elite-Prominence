'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home3/Testimonial'

export default function Testimonial_Page() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Client Recognition">
                <section className="pt_120 pb_60">
                    <div className="container">
                        <div className="section_title centred">
                            <div className="tag_text"><h6>Client Experience</h6></div>
                            <h2>Reputation Built on Authentic Results</h2>
                            <p style={{ maxWidth: "750px", margin: "15px auto 0", fontSize: "18px", color: "#59606a" }}>
                                We partner with senior HR executives and consultants to build authority that creates compounding career returns.
                            </p>
                        </div>
                    </div>
                </section>
                <Testimonial />
                <section className="pb_120 pt_60 centred">
                    <div className="container">
                        <div style={{ maxWidth: "700px", margin: "0 auto", background: "#f8fafd", padding: "40px", borderRadius: "12px" }}>
                            <h3 style={{ fontWeight: "700", marginBottom: "12px" }}>Ready to Build Your Executive Presence?</h3>
                            <p style={{ color: "#59606a", marginBottom: "20px" }}>
                                Join our current cohort of senior HR leaders and independent consultants.
                            </p>
                            <Link href="/contact" className="btn_style_one">Book a Strategy Call</Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}