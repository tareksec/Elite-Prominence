import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'HR Leadership Perspectives',
    description: 'Practical guidance on personal branding, LinkedIn strategy, and Google reputation for HR leaders and consultants.',
    alternates: {
        canonical: '/blog-standard',
    },
    openGraph: {
        title: 'Insights for HR Leaders | Blog',
        description: 'Practical guidance on personal branding, LinkedIn strategy, and Google reputation for HR leaders and consultants.',
        url: 'https://www.prominence.agency/blog-standard',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const blogStandardSchema = {
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
                    name: 'Articles',
                    item: 'https://www.prominence.agency/blog-standard',
                },
            ],
        },
        {
            '@type': 'CollectionPage',
            name: 'Insights for HR Leaders | Elite Prominence Blog',
            description: 'Practical guidance on personal branding, LinkedIn strategy, and Google reputation for HR leaders and consultants.',
            url: 'https://www.prominence.agency/blog-standard',
        },
    ],
}

const posts = [
    {
        id: 1,
        title: 'How to Build a Personal Brand as an HR Leader (Without Becoming a "Content Creator")',
        category: 'Personal Branding',
        date: 'Recent',
        image: '/assets/images/elite/blog_1_hr_personal_brand.jpg',
        alt: 'How to build a personal brand as an HR leader without becoming a content creator',
        desc: 'Frame personal branding as career infrastructure, not self-promotion; why a 3-pillar architecture creates inbound authority for HR leaders without demanding hours each week.',
        link: '/blog-details'
    },
    {
        id: 2,
        title: 'A LinkedIn Strategy for CHROs Who Don\'t Have Time to Post',
        category: 'LinkedIn Strategy',
        date: 'Recent',
        image: '/assets/images/elite/blog_2_linkedin_chro.jpg',
        alt: 'LinkedIn strategy and ghostwriting for CHROs and VP HR',
        desc: 'Explore content pillars, strategic publishing cadence, and the "done-for-you" ghostwriting model designed for busy enterprise executives.',
        link: '/blog-details'
    },
    {
        id: 3,
        title: 'How to Rank on Google as an Independent Consultant',
        category: 'Reputation Management',
        date: 'Recent',
        image: '/assets/images/elite/blog_3_google_ranking.jpg',
        alt: 'How to rank on Google as an independent HR consultant',
        desc: 'Name-search reputation management fundamentals: owned websites, published thought leadership, and authoritative first-page search signals.',
        link: '/blog-details'
    },
    {
        id: 4,
        title: 'Why Executives Need Personal Branding More Than Anyone Else',
        category: 'Executive Presence',
        date: 'Recent',
        image: '/assets/images/elite/blog_4_executive_presence.jpg',
        alt: 'Executive presence and reputation management for corporate leaders',
        desc: 'Explain how seniority increases reliance on third-party perception (recruiters, nominating boards, and media) before they ever reach out.',
        link: '/blog-details'
    },
    {
        id: 5,
        title: '7 Personal Branding Tips for HR Consultants Scaling Their Practice',
        category: 'Consulting Growth',
        date: 'Recent',
        image: '/assets/images/elite/blog_5_consultant_scaling.jpg',
        alt: 'Personal branding tips for HR consultants scaling their practice',
        desc: 'Practical guidance for independent practitioners converting passive referral reliance into steady inbound consulting leads and advisory engagements.',
        link: '/blog-details'
    },
    {
        id: 6,
        title: 'Personal Brand Architecture: The 3 Pillars Every Senior Professional Needs',
        category: 'Digital Infrastructure',
        date: 'Recent',
        image: '/assets/images/elite/blog_6_brand_architecture.jpg',
        alt: 'The 3 pillars of executive personal brand architecture',
        desc: 'A comprehensive deep-dive into Website (Digital HQ), Google Reputation Management, and LinkedIn Social Visibility working as an integrated system.',
        link: '/blog-details'
    }
]

export default function Blog_Standard() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStandardSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle14="Insights & Articles">
                <section className="blog_section pt_150 pb_120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12">
                                {posts.map((post) => (
                                    <div key={post.id} className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                        <div className="inner_box" style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                                            <figure className="image_box" style={{ maxHeight: "380px", overflow: "hidden" }}>
                                                <Link href={post.link}>
                                                    <img src={post.image} alt={post.alt} style={{ width: "100%", height: "360px", objectFit: "cover" }}/>
                                                </Link>
                                            </figure>
                                            <div className="lower_content" style={{ padding: "30px" }}>                            
                                                <ul className="post-info mb_10">
                                                    <li><div className="category"><span style={{ color: "#2460e2", fontWeight: "700" }}>{post.category}</span></div></li>
                                                    <li><i className="icon-21"></i>{post.date}</li>
                                                    <li><i className="icon-20"></i><Link href="/about">Elite Prominence</Link></li>
                                                </ul>
                                                <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}>
                                                    <Link href={post.link} style={{ color: "#1b2534" }}>{post.title}</Link>
                                                </h3>
                                                <p style={{ color: "#59606a", lineHeight: "1.7", marginBottom: "20px" }}>{post.desc}</p>
                                                <div className="link_btn">
                                                    <Link href={post.link} style={{ color: "#2460e2", fontWeight: "700" }}>
                                                        Read Article <i className="fa-solid fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sidebar */}
                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <div className="blog_sidebar">
                                    <div className="sidebar_widget mb_40" style={{ background: "#f8fafd", padding: "30px", borderRadius: "8px" }}>
                                        <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "20px" }}>Topics</h3>
                                        <ul style={{ listStyle: "none", padding: 0 }}>
                                            <li style={{ padding: "8px 0", borderBottom: "1px solid #eef0f4" }}>
                                                <Link href="/blog-grid" style={{ color: "#1b2534", fontWeight: "600" }}>Personal Branding</Link>
                                            </li>
                                            <li style={{ padding: "8px 0", borderBottom: "1px solid #eef0f4" }}>
                                                <Link href="/blog-grid" style={{ color: "#1b2534", fontWeight: "600" }}>LinkedIn Strategy</Link>
                                            </li>
                                            <li style={{ padding: "8px 0", borderBottom: "1px solid #eef0f4" }}>
                                                <Link href="/blog-grid" style={{ color: "#1b2534", fontWeight: "600" }}>Google & SEO Reputation</Link>
                                            </li>
                                            <li style={{ padding: "8px 0" }}>
                                                <Link href="/blog-grid" style={{ color: "#1b2534", fontWeight: "600" }}>Executive Presence</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="sidebar_widget" style={{ background: "#1b2534", padding: "35px 30px", borderRadius: "8px", color: "#fff" }}>
                                        <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#fff", marginBottom: "15px" }}>Ready to Be Seen at the Top?</h3>
                                        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "20px", fontSize: "15px" }}>
                                            Schedule a confidential 20-minute strategy call with our executive branding team.
                                        </p>
                                        <Link href="/contact" className="btn_style_one" style={{ padding: "12px 24px", fontSize: "14px" }}>
                                            Book a Strategy Call
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}