import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle14 }) {
    return (
        <section className="page_breadcrumb">
            <div className="container">
                <div className="breadcrumb_content centred">
                    <div className="breadcrumb_sutitle"><h6>Thought Leadership</h6></div>
                    <h1 className="breadcrumb_title">{breadcrumbTitle14}</h1>
                    <ul className="breadcrumb_menu">
                        <li><Link href="/">Home</Link></li>
                        <li>/</li>
                        <li>Articles</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
