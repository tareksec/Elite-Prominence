import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle3 }) {
    return (
        <>

        <section className="page_breadcrumb">
            
                
            <div className="container">
                <div className="breadcrumb_content centred">
                    <div className="breadcrumb_sutitle"><h6>Projects</h6></div>
                    <h1 className="breadcrumb_title">{breadcrumbTitle3}</h1>
                    <ul className="breadcrumb_menu">
                        <li><Link href="/">Home</Link></li>
                        <li>/</li>
                        <li>Projects</li>
                    </ul>
                </div>
            </div>
        </section>

        </>
    )
}
