import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home5/Banner"
import Clients from "@/components/sections/home5/Clients"
import Feature from "@/components/sections/home2/Feature"
import Feature_Two from "@/components/sections/home5/Feature"
import ExecutiveCaseStudy from "@/components/sections/home5/ExecutiveCaseStudy"
import Testimonial from "@/components/sections/home3/Testimonial"
import ExecutiveDirectoryTeaser from "@/components/sections/home5/ExecutiveDirectoryTeaser"
import Faq from "@/components/sections/home5/Faq"
import Blog from "@/components/sections/home2/Blog"
import FinalCta from "@/components/sections/home5/FinalCta"

export const metadata = {
    title: {
        absolute: 'Personal Branding for HR Leaders & CHROs | Elite Prominence',
    },
    description: 'Done-for-you personal branding agency for HR leaders, CHROs, and senior executives. We build your private digital HQ, Google reputation, and high-impact LinkedIn authority.',
    alternates: {
        canonical: 'https://www.prominence.agency',
    },
    openGraph: {
        title: 'Personal Branding for HR Leaders & CHROs | Elite Prominence',
        description: 'Elevate your executive authority. Elite Prominence designs bespoke digital HQs, Google Knowledge Panels, and strategic LinkedIn presence for HR leaders & CHROs.',
        url: 'https://www.prominence.agency',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/assets/images/Elite%20Prominence/EliteProminence-coverphoto.png',
                width: 1200,
                height: 630,
                alt: 'Elite Prominence — Personal Branding for HR Leaders & Executives',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Personal Branding for HR Leaders & CHROs | Elite Prominence',
        description: 'Turn HR leadership into executive influence. Bespoke digital HQ, search reputation, and LinkedIn thought leadership for CHROs.',
        images: ['/assets/images/Elite%20Prominence/EliteProminence-coverphoto.png'],
    },
}

const homepageSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': 'https://www.prominence.agency/#website',
            url: 'https://www.prominence.agency',
            name: 'Elite Prominence',
            description: 'Specialized executive personal branding agency for CHROs, VP HR, and senior leaders.',
            publisher: {
                '@id': 'https://www.prominence.agency/#organization',
            },
        },
        {
            '@type': 'ProfessionalService',
            '@id': 'https://www.prominence.agency/#organization',
            name: 'Elite Prominence',
            url: 'https://www.prominence.agency',
            logo: 'https://www.prominence.agency/assets/images/Elite%20Prominence/EliteProminence-iocn.png',
            image: 'https://www.prominence.agency/assets/images/Elite%20Prominence/EliteProminence-coverphoto.png',
            description: 'Done-for-you personal branding agency for HR leaders, CHROs, and senior executives. We build your private digital HQ, Google reputation, and high-impact LinkedIn authority.',
            telephone: '+8801645441584',
            email: 'hello@prominence.agency',
            priceRange: '$$$$',
            founder: {
                '@type': 'Person',
                name: 'Md Tarek',
                jobTitle: 'Founder & Executive Brand Advisor',
                url: 'https://www.linkedin.com/in/mdtarek404/',
            },
            sameAs: [
                'https://www.linkedin.com/company/elite-prominence',
                'https://www.facebook.com/EliteProminence/',
            ],
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '3',
                bestRating: '5',
                worstRating: '1',
            },
            review: [
                {
                    '@type': 'Review',
                    author: {
                        '@type': 'Person',
                        name: 'Eleanor Vance',
                        jobTitle: 'Chief Human Resources Officer',
                    },
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5',
                    },
                    reviewBody: 'Elite Prominence transformed my executive presence. Within 60 days of launching my new digital HQ and executive LinkedIn strategy, I received two board advisory invitations.',
                },
                {
                    '@type': 'Review',
                    author: {
                        '@type': 'Person',
                        name: 'Marcus Sterling',
                        jobTitle: 'Managing Director & Board Advisor',
                    },
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5',
                    },
                    reviewBody: 'The Google reputation management and thought leadership ghostwriting are world-class. When prospects Google my name today, they find an authoritative, cohesive presence.',
                },
                {
                    '@type': 'Review',
                    author: {
                        '@type': 'Person',
                        name: 'Dr. Aris Thorne',
                        jobTitle: 'Senior VP of People Strategy',
                    },
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5',
                    },
                    reviewBody: 'Their team understands the subtle distinction between vanity personal branding and genuine executive authority. Exceptional rigor and discretion.',
                },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': 'https://www.prominence.agency/#faq',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: "I'm already busy. How much time will this take from me?",
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Very little. This is a done-for-you model designed specifically for busy HR leaders — most clients spend under 30 minutes a month once onboarding is complete.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Is building a personal brand with you just about LinkedIn content, or more than that?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: "It's significantly more. Building a personal brand requires an integrated presence: we combine an executive personal website, Google reputation management, and high-impact LinkedIn thought leadership — whereas most agencies only handle one piece.",
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How long before I see results?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Website and reputation work typically shows visible change within 60–90 days; social growth and inbound opportunities build over 6–12 months.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How much does executive personal branding cost for an HR leader?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We offer tailored executive engagements, ranging from our intensive 90-Day Authority Sprint to ongoing quarterly executive advisory retainers. Packages reflect the bespoke nature of building proprietary digital assets and Google Page 1 placement. Transparent pricing tiers are published on our Pricing page.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Why do CHROs and VP HR need a dedicated personal website (Digital HQ)?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Because social platforms are rented digital land. Algorithms change, accounts can be restricted, and social feeds are ephemeral. A personal website is an owned executive asset that ranks #1 on Google when search committees, CEOs, and journalists research your credentials.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How do you protect employer confidentiality and strict non-disclosure?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Discretion is our foremost principle. We adhere strictly to corporate NDAs and employment agreements. All thought leadership focuses on macro talent architecture, workplace governance, and organizational transformation without disclosing private employer data or internal communications.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Who is this NOT a good fit for?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Early-career practitioners without an established track record yet — our work is designed specifically for senior leaders who already possess substantive expertise and commercial outcomes to showcase.',
                    },
                },
            ],
        },
    ],
}

export default function Home() {
    return (
        <div className="boxed_wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchemaGraph) }}
            />
            <Layout headerStyle={3} footerStyle={1}>
                <Banner/>
                <Clients/>
                <Feature/>
                <Feature_Two/>
                <ExecutiveCaseStudy/>
                <Testimonial/>
                <ExecutiveDirectoryTeaser/>
                <Faq/>
                <Blog/>
                <FinalCta/>
            </Layout>
        </div>
    )
}