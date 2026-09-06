'use client'
import React from 'react'
import Link from "next/link"


export default function Blog() {
    return (
        <> 

        <section className="blog_section">
            <div className="container">
                <div className="section_title centred">
                    <div className="tag_text"><h6>Thought Leadership</h6></div>
                    <h2>Insights for HR Leaders</h2>
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
                                    <div className="category"><span>Personal Branding</span></div>
                                    <h3><Link href="/blog-details">How to Build a Personal Brand as an HR Leader (Without Becoming a "Content Creator")</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Recent</li>
                                        <li><i className="icon-20"></i><Link href="/about">Elite Prominence</Link></li>
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
                                    <div className="category"><span>LinkedIn Strategy</span></div>
                                    <h3><Link href="/blog-details-2">A LinkedIn Strategy for CHROs Who Don't Have Time to Post</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Recent</li>
                                        <li><i className="icon-20"></i><Link href="/about">Elite Prominence</Link></li>
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
                                    <div className="category"><span>Reputation Management</span></div>
                                    <h3><Link href="/blog-grid">How to Rank on Google as an Independent Consultant</Link></h3>
                                    <ul className="post-info">
                                        <li><i className="icon-21"></i>Recent</li>
                                        <li><i className="icon-20"></i><Link href="/about">Elite Prominence</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
