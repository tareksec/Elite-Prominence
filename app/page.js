import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home5/Banner"
import Clients from "@/components/sections/home5/Clients"
import Feature from "@/components/sections/home2/Feature"
import Feature_Two from "@/components/sections/home5/Feature"
import Testimonial from "@/components/sections/home3/Testimonial"
import Faq from "@/components/sections/home5/Faq"
import Blog from "@/components/sections/home2/Blog"
import FinalCta from "@/components/sections/home5/FinalCta"

export const metadata = {
    title: 'Elite Prominence | Personal Branding Agency for Executives',
    description: 'We build a complete digital presence for HR leaders & executives — website, Google reputation, and LinkedIn visibility, done for you.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Elite Prominence | Personal Branding Agency for Executives',
        description: 'We build a complete digital presence for HR leaders & executives — website, Google reputation, and LinkedIn visibility, done for you.',
        url: 'https://prominence.agency',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Elite Prominence',
    url: 'https://prominence.agency',
}

export default function Home() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Layout headerStyle={3} footerStyle={1}>
                <Banner/>
                <Clients/>
                <Feature/>
                <Feature_Two/>
                <Testimonial/>
                <Faq/>
                <Blog/>
                <FinalCta/>
            </Layout>
        </div>
    )
}