'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home3/Testimonial'

export default function Testimonial_Page() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Client Recognition">
                <Testimonial />
                <section className="pb_120 pt_60 centred">
                    <div className="container">
                        <div style={{ maxWidth: "700px", margin: "0 auto", background: "#F7F5FC", padding: "40px", borderRadius: "12px", border: "1px solid #eaedf0" }}>
                            <h3 style={{ fontWeight: "700", marginBottom: "12px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>Ready to Build Your Executive Presence?</h3>
                            <p style={{ color: "#6B7280", marginBottom: "20px" }}>
                                Join our current cohort of senior HR leaders and independent consultants.
                            </p>
                            <Link href="/contact" className="btn_style_one btn_md">
                                Book a Strategy Call <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}