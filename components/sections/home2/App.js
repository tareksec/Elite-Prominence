'use client'
import React from 'react'
import Link from "next/link"


export default function App() {
    return (
        <> 

        <section className="app_section">
            <div className="shape_circle float-bob-y"><img src="assets/images/icons/ring_shape.png" alt=""/></div>
            <div className="container">
                <div className="app_inner_box">
                    <div className="app_outer_box">
                        <div className="shape_one rotate-me"></div>
                        <div className="shape_two float-bob-x"></div>
                        <div className="shape_three"></div>
                        <div className="content_box">
                            <h2>Download Banking App</h2>
                            <p>Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.</p>
                        </div>            
                        <div className="app_links">
                            <div className="apple_link"><Link href="/"><img src="assets/images/icons/apple_icon.png" alt=""/></Link></div>
                            <div className="play_link"><Link href="/"><img src="assets/images/icons/play_icon.png" alt=""/></Link></div>
                        </div>
                    </div>
                    <div className="app_image float-bob-x"><img src="assets/images/resource/app_image.png" alt=""/></div>
                </div>        
            </div>
        </section>

        </>
    )
}
