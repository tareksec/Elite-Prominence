import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home3/Testimonial'

export const metadata = {
    title: 'About Elite Prominence | Executive Personal Branding Consultants',
    description: 'Elite Prominence makes senior HR leaders and consultants prominent — so opportunity finds them instead of the other way around.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Elite Prominence | Executive Personal Branding Consultants',
        description: 'Elite Prominence makes senior HR leaders and consultants prominent — so opportunity finds them instead of the other way around.',
        url: 'https://prominence.agency/about',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://prominence.agency',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'About Us',
            item: 'https://prominence.agency/about',
        },
    ],
}

export default function About_Page() {

    return (
        <div className="boxed_wrapper">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Layout headerStyle={1} footerStyle={1}>

        <section className="about_page_banner" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="banner_content centred">
                    <div className="tag_text"><h6>About Elite Prominence</h6></div>
                    <h1>We Make Elite Professionals Prominent.</h1>
                    <p style={{ maxWidth: "800px", margin: "0 auto 30px", fontSize: "18px", lineHeight: "1.7" }}>
                        Every HR leader we work with has already done the hard part — they've built real results, led real teams, solved real problems. What most of them haven't built is a digital presence that reflects it. Elite Prominence exists to close that gap: we take what you've already proven and make it visible to the people who matter — boards, recruiters, peers, and media.
                    </p>
                    <div className="link_btn" style={{ marginBottom: "30px" }}>
                        <Link href="/contact" className="btn_style_one">Book a Strategy Call</Link>
                    </div>
                    <div className="banner_image">
                        <img src="/assets/images/elite/about_workspace.jpg" alt="Elite Prominence executive personal branding agency workspace" style={{ borderRadius: "12px", maxHeight: "540px", objectFit: "cover", width: "100%" }}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="founder_narrative" style={{ padding: "80px 0", background: "#f8fafd" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
                        <div style={{
                            background: "#edf2f7",
                            border: "2px dashed #cbd5e1",
                            borderRadius: "12px",
                            height: "360px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "30px",
                            textAlign: "center"
                        }}>
                            <i className="icon-20" style={{ fontSize: "40px", color: "#94a3b8", marginBottom: "15px" }}></i>
                            <span style={{ fontWeight: "700", color: "#334155", fontSize: "16px", marginBottom: "6px" }}>Add founder photo</span>
                            <span style={{ fontSize: "13px", color: "#64748b", maxWidth: "240px", lineHeight: "1.5" }}>Reserved for authentic founder portrait (royalty-free placeholders avoided per editorial policy)</span>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 ps-lg-5">
                        <div className="tag_text"><h6 style={{ color: "#2460e2", fontWeight: "700", textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px" }}>Our Mission</h6></div>
                        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1b2534", marginBottom: "20px" }}>Our Mission</h2>
                        <div style={{ fontStyle: "normal", fontSize: "20px", fontWeight: "600", color: "#1b2534", borderLeft: "4px solid #2460e2", paddingLeft: "18px", marginBottom: "25px", lineHeight: "1.6" }}>
                            “We make elite professionals prominent, so opportunity finds them — instead of them having to chase it.”
                        </div>
                        <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#59606a", marginBottom: "16px" }}>
                            Every HR leader we work with has already done the hard part — they've built real results, led real teams, solved real problems. What most of them haven't built is a digital presence that reflects it.
                        </p>
                        <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#59606a", marginBottom: "25px" }}>
                            Elite Prominence exists to close that gap: we take what you've already proven and make it visible to the people who matter — boards, recruiters, peers, and media.
                        </p>
                        <Link href="/contact" className="btn_style_one">Book a Strategy Call</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="why_choose_us about_page" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="shape_circle float-bob-y"><img src="/assets/images/icons/ring_shape.png" alt=""/></div>
            <div className="mouse_pointer float-bob-x"><img src="/assets/images/icons/mouse-pointer.png" alt=""/></div>
            <div className="container">
                <div className="border_top"></div>
                <div className="section_title centred">
                    <div className="tag_text"><h6>Our Convictions</h6></div>
                    <h2>What We Believe</h2>
                    <p style={{ maxWidth: "700px", margin: "10px auto 0" }}>Visibility is not self-promotion — it is the infrastructure for your next chapter.</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-28"></i>
                            </div>
                            <h3>Visibility is infrastructure, not vanity.</h3>
                            <p>It's part of how the next stage of your career gets built.</p>
                            <div className="link_btn"><Link href="/services">Our Services <i className="fa-solid fa-angle-right"></i></Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40 hover" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-27"></i>
                            </div>
                            <h3>Done-for-you beats DIY.</h3>
                            <p>Senior leaders shouldn't be writing their own captions at 11pm.</p>
                            <div className="link_btn"><Link href="/services">Our Services <i className="fa-solid fa-angle-right"></i></Link></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="why_choose_block_two mb_40" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                            <div className="choose_icon">
                                <i className="icon-26"></i>
                            </div>
                            <h3>Reputation compounds.</h3>
                            <p>What we build keeps working long after the engagement ends.</p>
                            <div className="link_btn"><Link href="/services">Our Services <i className="fa-solid fa-angle-right"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="service_section" style={{ backgroundColor: "#1b2534", padding: "100px 0" }}>
            <div className="container">
                <div className="section_title light centred">
                    <div className="tag_text"><h6>Focus & Fit</h6></div>
                    <h2>Who This Is For</h2>
                    <p style={{ maxWidth: "750px", margin: "15px auto 0", color: "#b0b8c4", fontSize: "18px", lineHeight: "1.7" }}>
                        We currently focus exclusively on senior HR leaders, consultants, coaches, and HR tech founders — professionals who've already achieved results and need their online presence to catch up.
                    </p>
                    <div style={{ marginTop: "35px" }}>
                        <Link href="/contact" className="btn_style_one">Book a Strategy Call</Link>
                    </div>
                </div>
            </div>
        </section>

        <Testimonial/>

        </Layout>
    </div>
    )
}