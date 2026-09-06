'use client'
import React from 'react'
import VideoPopup from "@/components/elements/VideoPopup"


export default function Video() {
    return (
        <> 

        <section className="video_section" style={{ backgroundImage: "url(assets/images/background/video_box_bg_2.jpg)" }}>
            <div className="container-fulid">
                <div className="video_inner">
                    <VideoPopup />
                    <h1 className="section_tag">Services</h1>
                </div>
            </div>
        </section>

        </>
    )
}
