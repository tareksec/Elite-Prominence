import Link from "next/link"

export default function Breadcrumb2({ breadcrumbTitle2 }) {
    return (
        <>

        <section className="page_breadcrumb style_two">
            <div className="bg_layer" style={{ backgroundImage: "url(assets/images/background/breadcrumb_bg.jpg)" }}></div>
            <div className="container">
                <div className="breadcrumb_content centred">
                    <div className="breadcrumb_sutitle">Our Services</div>
                    <h1 className="breadcrumb_title">{breadcrumbTitle2}</h1>
                    <ul className="breadcrumb_menu">
                        <li><Link href="/">Home</Link></li>
                        <li>/</li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </section>

        </>
    )
}
