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
        <div className="inner_box contact_form_inner_box" style={{ maxWidth: "850px", margin: "0 auto", background: "#fff", padding: "50px 40px", borderRadius: "10px", boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}>
            <div className="section_title centred" style={{ marginBottom: "25px" }}>
                <h2 style={{ fontSize: "28px", fontWeight: "700" }}>Book a Strategy Call</h2>
                <p style={{ color: "#59606a", marginTop: "10px" }}>Fill in the details below to help us prepare for our discussion.</p>
            </div>

            {/* Inline WhatsApp Quick Action Banner */}
            <div className="whatsapp_banner" style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "10px",
                padding: "16px 22px",
                marginBottom: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "14px"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#25D366",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontSize: "20px",
                        flexShrink: 0
                    }}>
                        <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                        <div style={{ fontWeight: "700", color: "#166534", fontSize: "15px" }}>
                            Prefer instant messaging?
                        </div>
                        <div style={{ color: "#15803d", fontSize: "13.5px" }}>
                            Chat directly with our executive advisors for immediate answers or payment coordination.
                        </div>
                    </div>
                </div>
                <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="whatsapp_quick_btn"
                    style={{
                        background: "#25D366",
                        color: "#ffffff",
                        fontWeight: "600",
                        fontSize: "14px",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 2px 10px rgba(37, 211, 102, 0.25)",
                        whiteSpace: "nowrap",
                        transition: "all 0.2s ease"
                    }}
                >
                    <i className="fab fa-whatsapp" style={{ fontSize: "17px" }}></i>
                    <span>Chat with us on WhatsApp</span>
                </a>
            </div>

            {submitted ? (
                <div className="alert alert-success centred" style={{ padding: "30px", borderRadius: "8px", background: "#eef9f2", border: "1px solid #c3e6cb", color: "#155724" }}>
                    <h3 style={{ color: "#155724", marginBottom: "10px" }}>Thank You!</h3>
                    <p style={{ marginBottom: "16px" }}>Your details have been received. An executive advisor will review your information and reach out within 1–2 business days.</p>
                    <a
                        href={getWhatsAppUrl("Hi, I just submitted the contact form on your website and would like to follow up.")}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        style={{
                            background: "#25D366",
                            color: "#ffffff",
                            fontWeight: "600",
                            fontSize: "14px",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px"
                        }}
                    >
                        <i className="fab fa-whatsapp" style={{ fontSize: "17px" }}></i>
                        <span>Message us on WhatsApp for fast follow-up</span>
                    </a>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact_form">
                    {errorMsg && (
                        <div className="alert alert-danger mb_25" style={{ padding: "12px 18px", borderRadius: "8px", background: "#fdf2f2", border: "1px solid #fca5a5", color: "#b91c1c", fontSize: "14px" }}>
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
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="form-group mb_20">
                                <label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>Full Name *</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required 
                                    placeholder="e.g. Sarah Jenkins"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="form-group mb_20">
                                <label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>Email Address *</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    placeholder="e.g. s.jenkins@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="form-group mb_20">
                                <label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>Title / Executive Role *</label>
                                <input 
                                    type="text" 
                                    name="role" 
                                    required 
                                    placeholder="e.g. Chief People Officer / Independent HR Consultant"
                                    value={formData.role}
                                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="form-group mb_20">
                                <label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>Company / Practice Name</label>
                                <input 
                                    type="text" 
                                    name="company" 
                                    placeholder="e.g. Apex Global Consulting"
                                    value={formData.company}
                                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="form-group mb_20">
                                <label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>LinkedIn Profile URL</label>
                                <input 
                                    type="url" 
                                    name="linkedin" 
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    value={formData.linkedin}
                                    onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="form-group mb_30">
                                <label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>What are you hoping to achieve? (Visibility, speaking, advisory, board roles)</label>
                                <textarea 
                                    name="goals" 
                                    rows={4}
                                    placeholder="Tell us a bit about your current visibility gap or primary goals..."
                                    value={formData.goals}
                                    onChange={(e) => setFormData({...formData, goals: e.target.value})}
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="form-group centred" style={{ marginTop: "10px" }}>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="btn_style_one"
                                    style={{
                                        minHeight: "48px",
                                        width: "100%",
                                        maxWidth: "320px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: submitting ? 0.7 : 1,
                                        cursor: submitting ? "not-allowed" : "pointer",
                                        fontSize: "16px",
                                        fontWeight: "700"
                                    }}
                                >
                                    {submitting ? 'Submitting Details...' : 'Book a Strategy Call →'}
                                </button>

                                <div style={{ marginTop: "22px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                                    <span style={{ fontSize: "14px", color: "#64748b" }}>
                                        or connect instantly via WhatsApp
                                    </span>
                                    <a
                                        href={getWhatsAppUrl()}
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        className="whatsapp_secondary_btn"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "8px",
                                            color: "#16a34a",
                                            background: "rgba(37, 211, 102, 0.08)",
                                            border: "1px solid rgba(37, 211, 102, 0.3)",
                                            padding: "10px 22px",
                                            borderRadius: "8px",
                                            fontWeight: "600",
                                            fontSize: "14px",
                                            textDecoration: "none",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        <i className="fab fa-whatsapp" style={{ fontSize: "18px", color: "#25D366" }}></i>
                                        <span>Chat with us on WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}

            <style jsx>{`
                @media (max-width: 767px) {
                    :global(.contact_form_inner_box) {
                        padding: 30px 18px !important;
                        border-radius: 12px !important;
                    }
                    :global(.contact_form input) {
                        font-size: 16px !important;
                        padding: 0 16px !important;
                        height: 52px !important;
                    }
                    :global(.contact_form textarea) {
                        font-size: 16px !important;
                        padding: 14px 16px !important;
                    }
                    :global(.whatsapp_banner) {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        padding: 16px !important;
                    }
                    :global(.whatsapp_quick_btn) {
                        width: 100% !important;
                        justify-content: center !important;
                    }
                    :global(.whatsapp_secondary_btn) {
                        width: 100% !important;
                        max-width: 320px !important;
                    }
                }
            `}</style>
        </div>
    )
}
