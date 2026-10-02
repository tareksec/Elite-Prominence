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
                border: '1.5px solid rgba(18,19,22,0.08)',
                borderRadius: '24px',
                padding: '48px 36px',
                textAlign: 'center',
                boxShadow: '0 8px 30px rgba(18, 19, 22, 0.04)'
            }}>
                <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#FAF9F5',
                    border: '1.5px solid #FF3B81',
                    color: '#FF3B81',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    marginBottom: '18px'
                }}>
                    ✓
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#121316', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                    Dossier Successfully Transmitted
                </h3>
                <p style={{ color: '#555A68', fontSize: '15.5px', maxWidth: '540px', margin: '0 auto', lineHeight: '1.65' }}>
                    Thank you, {name}. Your credentials for <strong>{mandateTitle}</strong> have been transferred directly to our managing advisory partners. If there is mutual alignment, we will contact you to schedule a confidential dialogue.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} style={{
            background: '#ffffff',
            border: '1.5px solid rgba(18,19,22,0.08)',
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 42px)',
            boxShadow: '0 4px 24px rgba(18, 19, 22, 0.04)'
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
                        style={{ background: '#FAF9F5', fontWeight: '600', color: '#121316', borderColor: 'rgba(18,19,22,0.1)' }}
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
                    <button type="submit" className="prominence-btn-primary w-100 justify-content-center" style={{ border: 'none', cursor: 'pointer', fontSize: '15px', padding: '16px 28px' }}>
                        <span>Transmit Confidential Application</span>
                        <span>&rarr;</span>
                    </button>
                </div>
            </div>
        </form>
    )
}
