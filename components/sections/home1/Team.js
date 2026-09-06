'use client'
import React from 'react'
import Link from "next/link"


export default function Team() {
    return (
        <> 

        <section className="team_section">
            <div className="shape_one float-bob-x" style={{ backgroundImage: "url(assets/images/icons/mouse-pointer.png)" }}></div>
            <div className="container">
                <div className="section_title centred">
                    <div className="tag_text"><h6>Our Team</h6></div>
                    <h2>Our Expert Team</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 team_block">
                        <div className="team_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="300">
                            <div className="inner_box">
                                <div className="image_box">
                                    <figure className="image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                    <ul className="team_social_links">
                                        <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/team"><i className="fab fa-skype"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower_content">
                                    <h4><Link href="/team">Ronald Richards</Link></h4>
                                    <span className="designation">Digital Marketer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team_block">
                        <div className="team_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div className="inner_box">
                                <div className="image_box">
                                    <figure className="image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                    <ul className="team_social_links">
                                        <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/team"><i className="fab fa-skype"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower_content">
                                    <h4><Link href="/team">Theresa Webb</Link></h4>
                                    <span className="designation">Content Creator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team_block">
                        <div className="team_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="inner_box">
                                <div className="image_box">
                                    <figure className="image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                    <ul className="team_social_links">
                                        <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/team"><i className="fab fa-skype"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower_content">
                                    <h4><Link href="/team">Brooklyn Simmons</Link></h4>
                                    <span className="designation">Product Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team_block">
                        <div className="team_block_one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                            <div className="inner_box">
                                <div className="image_box">
                                    <figure className="image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                    <ul className="team_social_links">
                                        <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/team"><i className="fab fa-skype"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower_content">
                                    <h4><Link href="/team">Leslie Alexander</Link></h4>
                                    <span className="designation">Web Developer</span>
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
