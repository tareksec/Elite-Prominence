import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home3/Testimonial'

export const metadata = {
    title: 'Executive Branding Consultants',
    description: 'Elite Prominence makes senior HR leaders and consultants prominent — so opportunity finds them instead of the other way around.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Us | Executive Personal Branding Consultants',
        description: 'Elite Prominence makes senior HR leaders and consultants prominent — so opportunity finds them instead of the other way around.',
        url: 'https://www.prominence.agency/about',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const aboutSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.prominence.agency',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'About Us',
                    item: 'https://www.prominence.agency/about',
                },
            ],
        },
        {
            '@type': 'AboutPage',
            '@id': 'https://www.prominence.agency/about/#webpage',
            url: 'https://www.prominence.agency/about',
            name: 'About Elite Prominence | Executive Personal Branding Agency',
            description: 'Elite Prominence makes senior HR leaders and executive consultants prominent — building bespoke digital HQs, Google reputation, and high-impact LinkedIn authority.',
            mainEntity: {
                '@id': 'https://www.prominence.agency/#founder',
            },
        },
        {
            '@type': 'Organization',
            '@id': 'https://www.prominence.agency/#organization',
            name: 'Elite Prominence',
            url: 'https://www.prominence.agency',
            logo: 'https://www.prominence.agency/assets/images/Elite%20Prominence/EliteProminence-iocn.png',
            founder: {
                '@id': 'https://www.prominence.agency/#founder',
            },
            sameAs: [
                'https://www.linkedin.com/company/elite-prominence',
                'https://www.facebook.com/EliteProminence/',
            ],
        },
        {
            '@type': 'Person',
            '@id': 'https://www.prominence.agency/#founder',
            name: 'Md Tarek',
            jobTitle: 'Founder & Executive Brand Advisor',
            worksFor: {
                '@id': 'https://www.prominence.agency/#organization',
            },
            url: 'https://www.prominence.agency/about',
            sameAs: [
                'https://www.linkedin.com/in/mdtarek404/',
            ],
            knowsAbout: [
                'Executive Personal Branding',
                'CHRO Thought Leadership',
                'Google Knowledge Graph Optimization',
                'Board Advisory Positioning',
                'Human Resources Strategy',
            ],
            description: 'Executive Brand Advisor counseling CHROs, VP HRs, and managing directors on proprietary digital HQ architecture, Google Page 1 placement, and strategic LinkedIn thought leadership.',
        },
    ],
}

export default function About_Page() {

    return (
        <div className="boxed_wrapper">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchemaGraph) }}
        />
        <Layout headerStyle={1} footerStyle={1}>

        <section className="about_page_banner" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="banner_content centred">
                    <div className="tag_text"><h6>About Elite Prominence</h6></div>
                    <h1>We Make Elite Professionals Prominent.</h1>
                    <p style={{ maxWidth: "800px", margin: "0 auto 30px", fontSize: "18px", lineHeight: "1.7" }}>
                        Every HR leader we work with has already done the hard part — they've built an exceptional track record, led transformation, and solved high-stakes problems. What most lack is executive branding that reflects their true caliber. Elite Prominence exists to close that gap: we take what you've already proven and position it with authority before the people who matter — boards, recruiters, peers, and media.
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
                            background: "#ffffff",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 12px 36px rgba(15, 23, 42, 0.08)",
                            border: "1px solid #e2e8f0",
                            maxWidth: "420px",
                            margin: "0 auto"
                        }}>
                            <div style={{ position: "relative", width: "100%", height: "420px", overflow: "hidden" }}>
                                <img
                                    src="/assets/images/elite/tarek-portrait.jpg"
                                    alt="Md Tarek — Founder & Executive Brand Advisor at Elite Prominence"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center top"
                                    }}
                                />
                            </div>
                            <div style={{ padding: "24px", textAlign: "center", background: "#ffffff" }}>
                                <span style={{
                                    display: "inline-block",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    letterSpacing: "0.8px",
                                    textTransform: "uppercase",
                                    color: "#7c3aed",
                                    background: "#f3e8ff",
                                    padding: "4px 12px",
                                    borderRadius: "9999px",
                                    marginBottom: "10px"
                                }}>
                                    Founder & Advisor
                                </span>
                                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", margin: "0 0 4px 0" }}>
                                    Md Tarek
                                </h3>
                                <p style={{ fontSize: "14px", color: "#64748b", margin: "0 0 16px 0", fontWeight: "500" }}>
                                    Author & Executive Brand Advisor
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/mdtarek404/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "8px 18px",
                                        borderRadius: "8px",
                                        background: "#0a66c2",
                                        color: "#ffffff",
                                        fontSize: "13.5px",
                                        fontWeight: "600",
                                        textDecoration: "none",
                                        boxShadow: "0 2px 8px rgba(10, 102, 194, 0.25)"
                                    }}
                                >
                                    <i className="fab fa-linkedin-in" style={{ fontSize: "15px" }}></i>
                                    <span>Connect on LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 ps-lg-5">
                        <div className="tag_text"><h6 style={{ color: "#2460e2", fontWeight: "700", textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px" }}>Our Mission</h6></div>
                        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1b2534", marginBottom: "20px" }}>Our Mission</h2>
                        <div style={{ fontStyle: "normal", fontSize: "20px", fontWeight: "600", color: "#1b2534", borderLeft: "4px solid #2460e2", paddingLeft: "18px", marginBottom: "25px", lineHeight: "1.6" }}>
                            “We make elite professionals prominent, so opportunity finds them — instead of them having to chase it.”
                        </div>
                        <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#59606a", marginBottom: "16px" }}>
                            The personal story behind Elite Prominence began with a straightforward realization: in senior leadership, opportunities are won by credibility that is recognized before the conversation starts.
                        </p>
                        <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#59606a", marginBottom: "25px" }}>
                            We establish sharp brand positioning for proven leaders, transforming an understated online presence into an authentic asset that opens doors with search committees, advisory boards, and conference organizers.
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
                            <p>Senior leaders shouldn't be drafting posts at 11pm. We design your content strategy and manage your executive LinkedIn profile with complete consistency.</p>
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
                        Our defined target audience is senior HR leaders, executive consultants, keynote speakers, and HR tech founders — accomplished professionals with substantial track records whose online presence deserves to match their real-world impact.
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