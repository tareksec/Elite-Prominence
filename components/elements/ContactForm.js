'use client'
import React, { useState } from 'react'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [honeypot, setHoneypot] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        company: '',
        email: '',
        linkedin: '',
        goals: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMsg('')

        if (honeypot) {
            setSubmitted(true)
            return
        }

        setSubmitting(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, honeypot })
            })

            const data = await res.json()
            if (!res.ok) {
                setErrorMsg(data.error || 'Failed to submit inquiry. Please try again.')
            } else {
                setSubmitted(true)
            }
        } catch (err) {
            setErrorMsg('Network error. Please try again or email hello@prominence.agency directly.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="prominence_depth_card" style={{ padding: "44px 38px", backgroundColor: "#ffffff" }}>
            <div style={{ marginBottom: "26px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span className="prominence_pulse_dot"></span>
                    <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#8B5CF6", fontFamily: "var(--primary-font)" }}>
                        Direct Partner Intake
                    </span>
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#0D0D14", fontFamily: "var(--primary-font)", letterSpacing: "-0.3px", margin: 0 }}>
                    Initiate Confidential Stature Consultation
                </h3>
                <p style={{ color: "#6B7280", marginTop: "6px", fontSize: "14.5px", lineHeight: "22px" }}>
                    Provide baseline career context to allow our partners to prepare an initial Google search audit prior to our strategy call.
                </p>
            </div>

            {/* Discreet Executive Concierge Banner */}
            <div style={{
                background: "#F7F5FC",
                border: "1px solid #eaedf0",
                borderRadius: "10px",
                padding: "14px 18px",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <i className="fa-brands fa-whatsapp" style={{ color: "#25D366", fontSize: "18px" }}></i>
                    <div>
                        <div style={{ fontWeight: "700", color: "#0D0D14", fontSize: "13.5px", fontFamily: "var(--primary-font)" }}>
                            Prefer direct encrypted messaging?
                        </div>
                        <div style={{ color: "#6B7280", fontSize: "12px" }}>
                            Connect with an executive partner via WhatsApp for immediate coordination.
                        </div>
                    </div>
                </div>
                <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn_style_two btn_sm"
                >
                    <i className="fa-brands fa-whatsapp me-1" style={{ color: "#25D366" }}></i>
                    <span>WhatsApp Concierge</span>
                </a>
            </div>

            {submitted ? (
                <div style={{ padding: "36px 30px", borderRadius: "10px", background: "#F7F5FC", border: "1px solid #eaedf0", textAlign: "center" }}>
                    <div style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: "#0D0D14",
                        color: "#8B5CF6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                        fontSize: "20px"
                    }}>
                        <i className="fa-solid fa-check"></i>
                    </div>
                    <h3 style={{ color: "#0D0D14", fontSize: "22px", fontWeight: "700", fontFamily: "var(--primary-font)", marginBottom: "8px" }}>
                        Inquiry Received Under Strict Confidence
                    </h3>
                    <p style={{ color: "#6B7280", fontSize: "14.5px", lineHeight: "24px", maxWidth: "520px", margin: "0 auto 20px" }}>
                        A Prominence Managing Partner will review your public digital baseline and reach out within 24 business hours to schedule your strategy briefing.
                    </p>
                    <a
                        href={getWhatsAppUrl("Hello, I have submitted an executive inquiry on Prominence.agency and would like to confirm receipt.")}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="btn_style_two btn_md"
                    >
                        <i className="fa-brands fa-whatsapp" style={{ color: "#25D366", marginRight: "6px" }}></i>
                        <span>Confirm via WhatsApp Concierge</span>
                    </a>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact_form">
                    {errorMsg && (
                        <div style={{ padding: "12px 18px", borderRadius: "8px", background: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", fontSize: "13.5px", marginBottom: "20px" }}>
                            {errorMsg}
                        </div>
                    )}

                    {/* Honeypot field for bot protection */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                        <label htmlFor="hp_contact_url">Leave this field blank</label>
                        <input
                            type="text"
                            id="hp_contact_url"
                            name="hp_contact_url"
                            tabIndex="-1"
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                        />
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 mb_20">
                            <label className="prominence_label">
                                Full Name *
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                placeholder="e.g. Marcus Sterling"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="prominence_input"
                            />
                        </div>
                        <div className="col-md-6 col-sm-12 mb_20">
                            <label className="prominence_label">
                                Direct Email Address *
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                placeholder="m.sterling@enterprise.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="prominence_input"
                            />
                        </div>
                        <div className="col-md-6 col-sm-12 mb_20">
                            <label className="prominence_label">
                                Executive Title / Role *
                            </label>
                            <input 
                                type="text" 
                                name="role" 
                                required 
                                placeholder="e.g. Chief Human Resources Officer"
                                value={formData.role}
                                onChange={(e) => setFormData({...formData, role: e.target.value})}
                                className="prominence_input"
                            />
                        </div>
                        <div className="col-md-6 col-sm-12 mb_20">
                            <label className="prominence_label">
                                Company / Enterprise Name
                            </label>
                            <input 
                                type="text" 
                                name="company" 
                                placeholder="e.g. Global Tech Enterprise ($2B+)"
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                className="prominence_input"
                            />
                        </div>
                        <div className="col-12 mb_20">
                            <label className="prominence_label">
                                LinkedIn Profile URL
                            </label>
                            <input 
                                type="url" 
                                name="linkedin" 
                                placeholder="https://www.linkedin.com/in/yourprofile"
                                value={formData.linkedin}
                                onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                                className="prominence_input"
                            />
                        </div>
                        <div className="col-12 mb_24">
                            <label className="prominence_label">
                                Primary Strategic Focus (Board directorships, capital raises, Google SEO, thought leadership)
                            </label>
                            <textarea 
                                name="goals" 
                                rows={3}
                                placeholder="Briefly articulate your current presence deficit or positioning timeline..."
                                value={formData.goals}
                                onChange={(e) => setFormData({...formData, goals: e.target.value})}
                                className="prominence_textarea"
                                style={{ resize: "none" }}
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn_style_one btn_block btn_lg"
                                style={{
                                    cursor: submitting ? "not-allowed" : "pointer"
                                }}
                            >
                                {submitting ? 'Submitting Confidential Intake...' : 'Request Confidential Stature Consultation'}
                                {!submitting && <i className="fa-solid fa-arrow-right"></i>}
                            </button>
                            <div style={{ fontSize: "12px", color: "#6B7280", textAlign: "center", marginTop: "12px" }}>
                                <i className="fa-solid fa-lock me-1" style={{ color: "#8B5CF6" }}></i>
                                100% Strict Bilateral NDA Protection · Zero Third-Party Disclosures
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    )
}

