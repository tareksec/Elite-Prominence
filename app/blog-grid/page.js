import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'Insights for HR Leaders | Elite Prominence Blog',
    description: 'Strategic guidance on personal branding, LinkedIn strategy, and reputation management for human resources executives navigating the future of work.',
    alternates: {
        canonical: '/blog-grid',
    },
    openGraph: {
        title: 'Insights for HR Leaders | Elite Prominence Blog',
        description: 'Strategic guidance on personal branding, LinkedIn strategy, and reputation management for human resources executives navigating the future of work.',
        url: 'https://prominence.agency/blog-grid',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const blogGridSchema = {
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
                    name: 'Blog',
                    item: 'https://prominence.agency/blog-grid',
                },
            ],
        },
        {
            '@type': 'CollectionPage',
            name: 'Insights for HR Leaders | Elite Prominence Blog',
            description: 'Strategic guidance on personal branding, LinkedIn strategy, and reputation management for human resources executives navigating the future of work.',
            url: 'https://prominence.agency/blog-grid',
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
        desc: 'Frame personal branding as career infrastructure for human resources leaders; why a 3-pillar architecture creates inbound authority in the future of work.',
        status: 'Available'
    },
    {
        id: 2,
        title: 'A LinkedIn Strategy for CHROs Who Don\'t Have Time to Post',
        category: 'LinkedIn Strategy',
        date: 'Recent',
        image: '/assets/images/elite/blog_2_linkedin_chro.jpg',
        alt: 'LinkedIn strategy and ghostwriting for CHROs and VP HR',
        desc: 'Explore content pillars, strategic publishing cadence, and the "done-for-you" ghostwriting model designed for a Chief People Officer shaping talent management discussions.',
        status: 'Available'
    },
    {
        id: 3,
        title: 'How to Rank on Google as an Independent Consultant',
        category: 'Reputation Management',
        date: 'Recent',
        image: '/assets/images/elite/blog_3_google_ranking.jpg',
        alt: 'How to rank on Google as an independent HR consultant',
        desc: 'Name-search reputation management fundamentals: owned websites, published thought leadership, and high-authority search signals.',
        status: 'Available'
    },
    {
        id: 4,
        title: 'Why Executives Need Personal Branding More Than Anyone Else',
        category: 'Executive Presence',
        date: 'Upcoming',
        image: '/assets/images/elite/blog_4_executive_presence.jpg',
        alt: 'Executive presence and reputation management for corporate leaders',
        desc: 'Explain how seniority in workplace culture and executive leadership increases reliance on external perception before stakeholders reach out.',
        status: 'Coming Soon'
    },
    {
        id: 5,
        title: '7 Personal Branding Tips for HR Consultants Scaling Their Practice',
        category: 'Consulting Growth',
        date: 'Upcoming',
        image: '/assets/images/elite/blog_5_consultant_scaling.jpg',
        alt: 'Personal branding tips for HR consultants scaling their practice',
        desc: 'Practical guidance for independent practitioners converting passive referral reliance into steady inbound consulting leads.',
        status: 'Coming Soon'
    },
    {
        id: 6,
        title: 'Personal Brand Architecture: The 3 Pillars Every Senior Professional Needs',
        category: 'Digital Infrastructure',
        date: 'Upcoming',
        image: '/assets/images/elite/blog_6_brand_architecture.jpg',
        alt: 'The 3 pillars of executive personal brand architecture',
        desc: 'A comprehensive deep-dive into Website (Digital HQ), Google Reputation Management, and LinkedIn Social Visibility.',
        status: 'Coming Soon'
    }
]

export default function Blog_Grid() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogGridSchema) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle14="Insights for HR Leaders">
                <section className="blog_section pt_150 pb_120">
                    <div className="container">
                        <div className="section_title centred" style={{ marginBottom: "50px" }}>
                            <div className="tag_text"><h6>Thought Leadership</h6></div>
                            <h2>Articles & Strategic Guides</h2>
                            <p style={{ maxWidth: "820px", margin: "15px auto 0", fontSize: "18px", color: "#59606a", lineHeight: "1.7" }}>
                                Navigating the future of work requires human resources executives to command more than internal credibility. Whether shaping workplace culture, championing employee engagement, or modernizing talent management through strategic HR technology, today's Chief People Officer must be recognized across the market. Explore our field-tested frameworks on executive presence, talent acquisition leadership, and digital authority.
                            </p>
                        </div>
                        <div className="row">
                            {posts.map((post) => (
                                <div key={post.id} className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="news_block_one mb_40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                        <div className="inner_box" style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.06)", height: "100%", display: "flex", flexDirection: "column" }}>
                                            <figure className="image_box">
                                                <Link href="/blog-details"><img src={post.image} alt={post.alt || post.title} style={{ height: "230px", width: "100%", objectFit: "cover" }}/></Link>
                                            </figure>
                                            <div className="lower_content" style={{ padding: "25px", flex: 1, display: "flex", flexDirection: "column" }}>
                                                <div className="category" style={{ marginBottom: "10px" }}>
                                                    <span style={{ fontSize: "13px", color: "#2460e2", fontWeight: "700", textTransform: "uppercase" }}>{post.category}</span>
                                                    {post.status === 'Coming Soon' && (
                                                        <span style={{ marginLeft: "8px", background: "#f0f4ff", color: "#2460e2", padding: "2px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "600" }}>Coming Soon</span>
                                                    )}
                                                </div>
                                                <h3 style={{ fontSize: "19px", lineHeight: "1.4", marginBottom: "12px", fontWeight: "700" }}>
                                                    <Link href="/blog-details">{post.title}</Link>
                                                </h3>
                                                <p style={{ color: "#59606a", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px", flex: 1 }}>{post.desc}</p>
                                                <ul className="post-info" style={{ borderTop: "1px solid #f0f0f0", paddingTop: "12px" }}>
                                                    <li><i className="icon-21"></i>{post.date}</li>
                                                    <li><i className="icon-20"></i><Link href="/blog-details">Elite Prominence</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}