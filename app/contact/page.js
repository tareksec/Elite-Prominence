import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import ContactForm from "@/components/elements/ContactForm"

export const metadata = {
    title: 'Contact Us | Book an Executive Strategy Session — Elite Prominence',
    description: 'Schedule a 30-minute consultation with Elite Prominence. We will evaluate your current digital footprint and discuss your executive personal branding roadmap.',
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Contact Us | Book an Executive Strategy Session — Elite Prominence',
        description: 'Schedule a 30-minute consultation with Elite Prominence. We will evaluate your current digital footprint and discuss your executive personal branding roadmap.',
        url: 'https://prominence.agency/contact',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
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
                    name: 'Contact',
                    item: 'https://prominence.agency/contact',
                },
            ],
        },
        {
            '@type': 'ContactPage',
            name: 'Contact Elite Prominence',
            description: 'Schedule a strategy call or get in touch with Elite Prominence executive personal branding consultants.',
            url: 'https://prominence.agency/contact',
        },
    ],
}

export default function Contact_Page() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle16="Let's Talk About Your Visibility">
                {/* Contact Intro & Direct Channels */}
                <section className="contact_info_section pt_150 pb_80">
                    <div className="container">
                        <div className="section_title centred">
                            <div className="tag_text"><h6>Get in Touch</h6></div>
                            <h2>Let's Talk About Your Visibility</h2>
                            <p style={{ maxWidth: "750px", margin: "15px auto 0", fontSize: "18px", color: "#59606a" }}>
                                Tell us a bit about where you are today, and we'll get back to you within 1–2 business days to schedule a short strategy call.
                            </p>
                        </div>
                        <div className="row" style={{ marginTop: "40px" }}>
                            {/* Email */}
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="contact_block_one mb_30" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                    <div className="contact_block_icon"><i className="icon-2"></i></div>
                                    <div className="contact_block_title"><h3>Direct Email</h3></div>
                                    <div className="contact_block_text">
                                        <p><Link href="mailto:hello@prominence.agency">hello@prominence.agency</Link><br/>Inquiries & Introductions</p>
                                    </div>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="contact_block_one mb_30" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                                    <div className="contact_block_icon"><i className="fab fa-linkedin-in" style={{ fontSize: "28px" }}></i></div>
                                    <div className="contact_block_title"><h3>LinkedIn</h3></div>
                                    <div className="contact_block_text">
                                        <p><Link href="https://www.linkedin.com/company/elite-prominence" target="_blank">Elite Prominence</Link><br/>Follow Company Updates</p>
                                    </div>
                                </div>
                            </div>

                            {/* Facebook */}
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="contact_block_one mb_30" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                    <div className="contact_block_icon"><i className="fab fa-facebook-f" style={{ fontSize: "28px" }}></i></div>
                                    <div className="contact_block_title"><h3>Facebook</h3></div>
                                    <div className="contact_block_text">
                                        <p><Link href="https://www.facebook.com/EliteProminence/" target="_blank">Elite Prominence Page</Link><br/>Community Insights</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className="contact_section pb_120" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                    <div className="container">
                        <ContactForm />
                    </div>
                </section>
            </Layout>
        </div>
    )
}