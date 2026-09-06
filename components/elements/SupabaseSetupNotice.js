'use client'
import React from 'react'
import Link from 'next/link'

export default function SupabaseSetupNotice({ feature = "this feature" }) {
    return (
        <div style={{
            background: "#FFFDF7",
            border: "1.5px dashed #D29D2B",
            borderRadius: "12px",
            padding: "24px 28px",
            marginBottom: "30px",
            color: "#4A3B18",
            fontFamily: "var(--primary-font)",
        }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ fontSize: "24px", lineHeight: "1" }}>⚡</div>
                <div>
                    <h4 style={{ margin: "0 0 8px", color: "#1e3b2b", fontSize: "19px", fontWeight: "700" }}>
                        Connect Supabase to Activate {feature}
                    </h4>
                    <p style={{ margin: "0 0 14px", fontSize: "15px", lineHeight: "1.6", color: "#5F502A" }}>
                        To enable live signups, reviews, user dashboards, and admin moderation, paste your Supabase project credentials into <code>.env.local</code> and run the SQL migration script located in <code>supabase/schema.sql</code>.
                    </p>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                        <a 
                            href="https://app.supabase.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{
                                display: "inline-block",
                                background: "#1e3b2b",
                                color: "#FAF8F2",
                                padding: "8px 18px",
                                borderRadius: "6px",
                                fontSize: "13px",
                                fontWeight: "700",
                                textDecoration: "none"
                            }}
                        >
                            Open Supabase Dashboard &rarr;
                        </a>
                        <span style={{ fontSize: "13px", color: "#7F6E45" }}>
                            Setup file: <code>supabase/schema.sql</code>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
