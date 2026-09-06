import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/feedback">Feedback</Link></li>
                <li><Link href="/community">Community</Link></li>
                <li><Link href="/blog-grid">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
