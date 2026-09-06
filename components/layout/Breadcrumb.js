import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

        <section className="page_breadcrumb">
            <div className="page_breadcrumb_shape_one float-bob-x">
                <img src="/assets/images/icons/shape_icon_13.png" alt=""/>
            </div>
            <div className="page_breadcrumb_shape_two float-bob-y">
                <img src="/assets/images/icons/shape_icon_1.png" alt=""/>
            </div>    
            <div className="container">
                <div className="breadcrumb_content centred">
                    <div className="breadcrumb_sutitle"><h6>Our Services</h6></div>
                    <h1 className="breadcrumb_title">{breadcrumbTitle}</h1>
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
