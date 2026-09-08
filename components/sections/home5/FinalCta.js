'use client'
import React from 'react'
import Link from "next/link"

export default function FinalCta() {
    return (
        <section
            style={{
                backgroundColor: "#f8fafd",
                borderTop: "1px solid #edf2f7",
                borderBottom: "1px solid #edf2f7",
                padding: "90px 0 85px",
                position: "relative",
                textAlign: "center"
            }}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
        >
            <div className="container">
                <div style={{ maxWidth: "780px", margin: "0 auto" }}>
                    <div className="tag_text" style={{ marginBottom: "16px" }}>
                        <h6>Strictly Limited Client Roster</h6>
                    </div>
                    <h2 style={{
                        fontSize: "42px",
                        fontWeight: "700",
                        color: "#0f1013",
                        marginBottom: "16px",
                        lineHeight: "1.25"
                    }}>
                        Ready to Command Sovereign Stature?
                    </h2>
                    <p style={{
                        fontSize: "18px",
                        color: "#59606a",
                        lineHeight: "30px",
                        marginBottom: "36px"
                    }}>
                        We accept a strictly limited roster of CEOs, CHROs, Founders, and senior leaders each quarter to maintain uncompromising discretion, bespoke engineering, and dedicated partner attention.
                    </p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                        <Link href="/contact" className="btn_style_one">
                            Book a Private Consultation
                        </Link>
                        <Link href="/resources/assessment" className="btn_style_two">
                            Evaluate Your Stature <i className="fa-solid fa-angle-right ms-2" style={{ fontSize: "12px" }}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
