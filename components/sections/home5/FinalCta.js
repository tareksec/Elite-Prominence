'use client'
import React from 'react'
import Link from "next/link"

export default function FinalCta() {
    return (
        <section className="nature_cta_section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <div className="container">
                <div className="nature_cta_inner">
                    <h2 className="nature_cta_title">Ready to Be Seen at the Top?</h2>
                    <p className="nature_cta_desc">
                        We work with a limited number of HR leaders and consultants at a time.
                    </p>
                    <div>
                        <Link href="/contact" className="nature_cta_btn">
                            Book a Strategy Call
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
