'use client'
import React, { useState } from 'react'

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
            <div className="section_title centred" style={{ marginBottom: "35px" }}>
                <h2 style={{ fontSize: "28px", fontWeight: "700" }}>Book a Strategy Call</h2>
                <p style={{ color: "#59606a", marginTop: "10px" }}>Fill in the details below to help us prepare for our discussion.</p>
            </div>

            {submitted ? (
                <div className="alert alert-success centred" style={{ padding: "30px", borderRadius: "8px", background: "#eef9f2", border: "1px solid #c3e6cb", color: "#155724" }}>
                    <h3 style={{ color: "#155724", marginBottom: "10px" }}>Thank You!</h3>
                    <p>Your details have been received. An executive advisor will review your information and reach out within 1–2 business days.</p>
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
                            <div className="form-group centred">
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
                                        cursor: submitting ? "not-allowed" : "pointer"
                                    }}
                                >
                                    {submitting ? 'Submitting Details...' : 'Book a Strategy Call →'}
                                </button>
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
                }
            `}</style>
        </div>
    )
}
