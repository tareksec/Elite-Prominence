'use client'
import React from 'react'

export default function Clients() {
    return (
        <section className="problem_section" style={{ padding: "60px 0", background: "#f8fafd", borderTop: "1px solid #edf2f7", borderBottom: "1px solid #edf2f7" }}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10 col-md-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
                            <p style={{ fontSize: "24px", fontWeight: "700", color: "#1b2534", marginBottom: "12px", lineHeight: "1.4" }}>
                                Your experience is in the top 5% of your field.
                            </p>
                            <p style={{ fontSize: "24px", fontWeight: "700", color: "#2460e2", marginBottom: "16px", lineHeight: "1.4" }}>
                                Your online presence isn't in the top 50%.
                            </p>
                            <p style={{ fontSize: "19px", color: "#59606a", margin: 0, lineHeight: "1.6" }}>
                                That gap is quietly costing you board seats, speaking invitations, and inbound consulting work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
