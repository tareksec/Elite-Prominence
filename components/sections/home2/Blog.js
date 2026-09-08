'use client'
import React from 'react'
import Link from "next/link"


export default function Blog() {
    return (
        <> 

        <section className="blog_section prominence_section">
            <div className="container">
                <div className="prominence_header_split">
                    <div>
                        <span className="prominence_tracker">Thought Leadership &amp; Analysis</span>
                        <h2 style={{ fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)" }}>
                            Executive Commentary &amp; Frameworks
                        </h2>
                    </div>
                    <div>
                        <p className="prominence_lead_text">
                            Strategic briefings on sovereign entity architecture, board governance, and executive reputation defense.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <figure className="image_box">
                                    <Link href="/blog-details">
                                        <img src="/assets/images/elite/blog_1_hr_personal_brand.jpg" alt="How to build a personal brand as an HR leader without becoming a content creator" style={{ height: "240px", width: "100%", objectFit: "cover" }}/>
                                    </Link>
                                </figure>
                                <div className="lower_content">
                                    <div className="category"><span style={{ color: "#6D28D9" }}>Personal Branding</span></div>
                                    <h3><Link href="/blog-details">How to Build a Personal Brand as an HR Leader (Without Becoming a "Content Creator")</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="fa-regular fa-clock" style={{ marginRight: "6px", color: "var(--ep-gold)" }}></i>Executive Brief</li>
                                        <li><i className="fa-solid fa-building-columns" style={{ marginRight: "6px", color: "var(--ep-gold)" }}></i><Link href="/about">Prominence Advisory</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="inner_box">
                                <figure className="image_box">
                                    <Link href="/blog-details-2">
                                        <img src="/assets/images/elite/blog_2_linkedin_chro.jpg" alt="LinkedIn strategy and ghostwriting for CHROs and VP HR" style={{ height: "240px", width: "100%", objectFit: "cover" }}/>
                                    </Link>
                                </figure>
                                <div className="lower_content">
                                    <div className="category"><span style={{ color: "#6D28D9" }}>LinkedIn Strategy</span></div>
                                    <h3><Link href="/blog-details-2">A LinkedIn Strategy for CHROs Who Don't Have Time to Post</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="fa-regular fa-clock" style={{ marginRight: "6px", color: "var(--ep-gold)" }}></i>Executive Brief</li>
                                        <li><i className="fa-solid fa-building-columns" style={{ marginRight: "6px", color: "var(--ep-gold)" }}></i><Link href="/about">Prominence Advisory</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="news_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                            <div className="inner_box">
                                <figure className="image_box">
                                    <Link href="/blog-grid">
                                        <img src="/assets/images/elite/blog_3_google_ranking.jpg" alt="How to rank on Google as an independent HR consultant" style={{ height: "240px", width: "100%", objectFit: "cover" }}/>
                                    </Link>
                                </figure>
                                <div className="lower_content">
                                    <div className="category"><span style={{ color: "#6D28D9" }}>Reputation Management</span></div>
                                    <h3><Link href="/blog-grid">How to Rank on Google as an Independent Consultant</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="fa-regular fa-clock" style={{ marginRight: "6px", color: "var(--ep-gold)" }}></i>Executive Brief</li>
                                        <li><i className="fa-solid fa-building-columns" style={{ marginRight: "6px", color: "var(--ep-gold)" }}></i><Link href="/about">Prominence Advisory</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "45px" }}>
                    <Link href="/blog-grid" className="btn_style_one btn_md">
                        Explore Executive Articles &amp; Frameworks <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>

        </>
    )
}
