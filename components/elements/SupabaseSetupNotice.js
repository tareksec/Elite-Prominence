'use client'
import React from 'react'
import Link from 'next/link'

export default function SupabaseSetupNotice({ feature = "this feature" }) {
    return (
        <div style={{
            background: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderLeft: "4px solid #0D1322",
            borderRadius: "12px",
            padding: "24px 28px",
            marginBottom: "30px",
            color: "#1e3a8a",
            fontFamily: "var(--primary-font)",
            display: "flex",
            gap: "18px",
            alignItems: "flex-start"
        }}>
            <div style={{ fontSize: "20px", lineHeight: "1", color: "#b89058", marginTop: "2px", flexShrink: 0 }}>
                <i className="fa-solid fa-database"></i>
            </div>
            <div>
                <h4 style={{ margin: "0 0 8px", color: "#1b2534", fontSize: "18px", fontWeight: "700" }}>
                    Connect Supabase to Activate {feature}
                </h4>
                <p style={{ margin: "0 0 14px", fontSize: "14px", lineHeight: "1.6", color: "#475569" }}>
                    To enable live signups, reviews, user dashboards, and admin moderation, configure your Supabase project credentials in <code>.env.local</code> and run the SQL migration script located in <code>supabase/schema.sql</code>.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                    <a 
                        href="https://app.supabase.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            background: "#0D1322",
                            color: "#ffffff",
                            padding: "8px 18px",
                            borderRadius: "6px",
                            fontSize: "13px",
                            fontWeight: "700",
                            textDecoration: "none"
                        }}
                    >
                        <span>Open Supabase Dashboard</span>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "11px" }}></i>
                    </a>
                    <span style={{ fontSize: "13px", color: "#64748b" }}>
                        Setup file: <code>supabase/schema.sql</code>
                    </span>
                </div>
            </div>
        </div>
    )
}
