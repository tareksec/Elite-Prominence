import Link from "next/link"

export default function Error() {
    return (
        <section className="error_section pt_150 pb_150">
            <div className="container">
                <div className="error_content centred" style={{ maxWidth: "600px", margin: "0 auto", padding: "60px 30px", background: "#ffffff", border: "1px solid #e5e3db", borderRadius: "16px", boxShadow: "0 10px 40px rgba(15, 16, 19, 0.05)" }}>
                    <div style={{ fontSize: "72px", fontFamily: "var(--title-font, 'PT Serif', Georgia, serif)", fontWeight: "700", color: "#0f1013", marginBottom: "15px", lineHeight: "1" }}>
                        404
                    </div>
                    <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#0f1013", marginBottom: "15px" }}>Page Not Found</h1>
                    <p style={{ color: "#59606a", fontSize: "16px", marginBottom: "30px" }}>
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                    <div className="error_btn_box">
                        <Link href="/" className="btn_style_one btn_md">
                            Back to Homepage <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
