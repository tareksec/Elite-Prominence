import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home3/Testimonial'

export const metadata = {
    title: 'Executive Branding Services',
    description: 'Website, Google reputation management, and LinkedIn branding — three pillars, delivered together, for HR leaders and consultants.',
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: 'Executive Branding & Reputation Services',
        description: 'Website, Google reputation management, and LinkedIn branding — three pillars, delivered together, for HR leaders and consultants.',
        url: 'https://www.prominence.agency/services',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const serviceSchema = {
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
                    name: 'Services',
                    item: 'https://www.prominence.agency/services',
                },
            ],
        },
        {
            '@type': 'Service',
            name: 'Executive Personal Branding',
            provider: {
                '@type': 'Organization',
                name: 'Elite Prominence',
                url: 'https://www.prominence.agency',
            },
            description: 'Done-for-you personal branding for senior HR leaders, CHROs, and executive consultants covering website design, Google reputation management, and LinkedIn presence.',
            areaServed: 'Worldwide',
            serviceType: 'Personal Branding, Executive Reputation Management, Ghostwriting',
        },
    ],
}

export default function Service_Page() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Personal Branding, Built the Right Way">
                
                {/* Services Header */}
                <section className="service_page_intro pt_120 pb_60">
                    <div className="container">
                        <div className="section_title centred">
                            <div className="tag_text"><h6>What We Do</h6></div>
                            <h2>Three Pillars, Delivered Together</h2>
                            <p style={{ maxWidth: "750px", margin: "15px auto 0", fontSize: "18px", color: "#59606a" }}>
                                Three pillars, delivered together, so nothing gets left half-finished.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3 Pillars Detailed */}
                <section className="service_details_section pb_90">
                    <div className="container">
                        <div className="row">
                            {/* Pillar 1 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 mb_40">
                                <div className="service_block_one" style={{ padding: "0", height: "100%", background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column" }}>
                                    <div style={{ height: "210px", overflow: "hidden" }}>
                                        <img src="/assets/images/elite/pillar_digital_hq.jpg" alt="Website design and digital HQ for executive personal branding" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                                    </div>
                                    <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                                        <div className="service_icon mb_20">
                                            <i className="icon-33" style={{ fontSize: "36px", color: "#2460e2" }}></i>
                                        </div>
                                        <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "15px" }}>1. Website — Your Digital HQ</h3>
                                        <p style={{ color: "#59606a", lineHeight: "1.7", marginBottom: "20px", flex: 1 }}>
                                            A personal website that anchors your personal brand by showcasing your bio, areas of expertise, case studies, and testimonials — the definitive link you put in your email signature, LinkedIn bio, and every board or speaker application.
                                        </p>
                                        <div className="link_btn">
                                            <Link href="/contact" className="btn_style_two" style={{ padding: "10px 20px", fontSize: "14px" }}>Book a Strategy Call</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pillar 2 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 mb_40">
                                <div className="service_block_one" style={{ padding: "0", height: "100%", background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column" }}>
                                    <div style={{ height: "210px", overflow: "hidden" }}>
                                        <img src="/assets/images/elite/pillar_google_reputation.jpg" alt="Google reputation management and search presence for HR executives" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                                    </div>
                                    <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                                        <div className="service_icon mb_20">
                                            <i className="icon-32" style={{ fontSize: "36px", color: "#2460e2" }}></i>
                                        </div>
                                        <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "15px" }}>2. Google & SEO Presence</h3>
                                        <p style={{ color: "#59606a", lineHeight: "1.7", marginBottom: "20px", flex: 1 }}>
                                            Reputation management focused on one goal: when your name is searched, page one reflects your standing — your site, your content, and positive coverage, pushing down anything outdated or irrelevant.
                                        </p>
                                        <div className="link_btn">
                                            <Link href="/contact" className="btn_style_two" style={{ padding: "10px 20px", fontSize: "14px" }}>Book a Strategy Call</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pillar 3 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 mb_40">
                                <div className="service_block_one" style={{ padding: "0", height: "100%", background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column" }}>
                                    <div style={{ height: "210px", overflow: "hidden" }}>
                                        <img src="/assets/images/elite/pillar_social_visibility.jpg" alt="LinkedIn thought leadership and executive ghostwriting for senior leaders" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                                    </div>
                                    <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                                        <div className="service_icon mb_20">
                                            <i className="icon-31" style={{ fontSize: "36px", color: "#2460e2" }}></i>
                                        </div>
                                        <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "15px" }}>3. Social Visibility (LinkedIn-first)</h3>
                                        <p style={{ color: "#59606a", lineHeight: "1.7", marginBottom: "20px", flex: 1 }}>
                                            A content strategy and ghostwriting system built around your voice — thought-leadership posts, consistent publishing, and engagement growth that reinforces both your executive stature and your organization's employer branding, without it becoming your day job.
                                        </p>
                                        <div className="link_btn">
                                            <Link href="/contact" className="btn_style_two" style={{ padding: "10px 20px", fontSize: "14px" }}>Book a Strategy Call</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Add-On Services */}
                <section className="addon_services_section pt_100 pb_100" style={{ backgroundColor: "#f6f8fb" }}>
                    <div className="container">
                        <div className="section_title centred">
                            <div className="tag_text"><h6>Expansion Options</h6></div>
                            <h2>Add-On Services (available as you scale)</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                                <div style={{ background: "#fff", padding: "30px", borderRadius: "8px", borderTop: "4px solid #2460e2", height: "100%" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>PR & media mentions, guest articles</h3>
                                    <p style={{ color: "#59606a" }}>Guest articles in respected trade journals, quote placement in industry media, and feature coverage highlighting your perspective.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                                <div style={{ background: "#fff", padding: "30px", borderRadius: "8px", borderTop: "4px solid #2460e2", height: "100%" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>Podcast & speaking opportunity sourcing</h3>
                                    <p style={{ color: "#59606a" }}>Proactive sourcing and pitching for relevant industry podcasts, keynote opportunities, panel discussions, and executive stages.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb_30">
                                <div style={{ background: "#fff", padding: "30px", borderRadius: "8px", borderTop: "4px solid #2460e2", height: "100%" }}>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>Video content production</h3>
                                    <p style={{ color: "#59606a" }}>High-impact short-form video clip editing, professional subtitling, and multi-platform distribution designed for high LinkedIn engagement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="centred" style={{ marginTop: "40px" }}>
                            <Link href="/pricing" className="btn_style_one">View Pricing & Packages</Link>
                        </div>
                    </div>
                </section>

                <Testimonial/>

            </Layout>
        </div>
    )
}