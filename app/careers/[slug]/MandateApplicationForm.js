'use client'

import React, { useState } from 'react'

export default function MandateApplicationForm({ mandateTitle }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const [note, setNote] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div style={{
                background: '#ffffff',
                border: '1px solid #eaedf0',
                borderRadius: '16px',
                padding: '48px 36px',
                textAlign: 'center',
                boxShadow: '0 8px 30px rgba(15, 16, 19, 0.05)'
            }}>
                <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#faf6f0',
                    border: '1px solid rgba(184, 144, 88, 0.4)',
                    color: '#b89058',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    marginBottom: '18px'
                }}>
                    <i className="fa-solid fa-check"></i>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1013', marginBottom: '10px' }}>
                    Dossier Successfully Transmitted
                </h3>
                <p style={{ color: '#59606a', fontSize: '15.5px', maxWidth: '540px', margin: '0 auto', lineHeight: '1.65' }}>
                    Thank you, {name}. Your credentials for <strong>{mandateTitle}</strong> have been transferred directly to our managing advisory partners. If there is mutual alignment, we will contact you to schedule a confidential dialogue.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} style={{
            background: '#ffffff',
            border: '1px solid #eaedf0',
            borderRadius: '16px',
            padding: 'clamp(28px, 4vw, 42px)',
            boxShadow: '0 4px 20px rgba(15, 16, 19, 0.03)'
        }}>
            <div className="row g-3">
                <div className="col-12">
                    <label className="prominence_label">
                        Target Mandate
                    </label>
                    <input 
                        type="text" 
                        readOnly 
                        value={mandateTitle}
                        className="prominence_input"
                        style={{ background: '#f8fafc', fontWeight: '600', color: '#0f1013' }}
                    />
                </div>
                <div className="col-md-6">
                    <label className="prominence_label">
                        Full Legal Name
                    </label>
                    <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alexandra Vance" 
                        className="prominence_input"
                    />
                </div>
                <div className="col-md-6">
                    <label className="prominence_label">
                        Confidential Email
                    </label>
                    <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alexandra@domain.com" 
                        className="prominence_input"
                    />
                </div>
                <div className="col-md-6">
                    <label className="prominence_label">
                        LinkedIn Profile URL
                    </label>
                    <input 
                        type="url" 
                        required 
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        placeholder="https://linkedin.com/in/username" 
                        className="prominence_input"
                    />
                </div>
                <div className="col-md-6">
                    <label className="prominence_label">
                        Portfolio / Verified Archive URL
                    </label>
                    <input 
                        type="url" 
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        placeholder="https://yourportfolio.com or publications" 
                        className="prominence_input"
                    />
                </div>
                <div className="col-12">
                    <label className="prominence_label">
                        Executive Rationale (Why Your Caliber Aligns With This Mandate)
                    </label>
                    <textarea 
                        rows="4" 
                        required 
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Articulate why your editorial depth, technical acumen, or governance experience matches this advisory appointment..." 
                        className="prominence_textarea"
                        style={{ resize: "vertical" }}
                    />
                </div>
                <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn_style_one btn_block btn_lg">
                        Transmit Confidential Application <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}
