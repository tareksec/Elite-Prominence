import Link from "next/link"

export default function Error() {
    return (
        <section className="error_section pt_150 pb_150">
            <div className="container">
                <div className="error_content centred" style={{ maxWidth: "600px", margin: "0 auto", padding: "60px 30px", background: "#f8fafd", borderRadius: "16px" }}>
                    <div style={{ fontSize: "72px", fontFamily: "var(--primary-font)", fontWeight: "700", color: "#0f1013", marginBottom: "15px", lineHeight: "1" }}>
                        404
                    </div>
                    <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#1b2534", marginBottom: "15px" }}>Page Not Found</h1>
                    <p style={{ color: "#59606a", fontSize: "16px", marginBottom: "30px" }}>
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                    <div className="error_btn_box">
                        <Link href="/" className="btn_style_one" style={{ padding: "12px 28px", display: "inline-block" }}>
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
