import MlabHomePage from "@/components/home/MlabHomePage"

export const metadata = {
    title: {
        absolute: 'Executive Personal Branding & Digital Reputation Advisory | Prominence',
    },
    description: 'Prominence advises CEOs, CHROs, enterprise founders, and senior leaders on sovereign digital reputation architecture, personal executive websites, and LinkedIn thought leadership.',
    alternates: {
        canonical: 'https://www.prominence.agency',
    },
    openGraph: {
        title: 'Executive Personal Branding & Digital Reputation Advisory | Prominence',
        description: 'Build a digital presence that commands attention. Prominence architects bespoke digital HQs, Google Page 1 search control, and high-impact thought leadership for enterprise leaders.',
        url: 'https://www.prominence.agency',
        siteName: 'Prominence.agency',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/assets/images/Elite%20Prominence/EliteProminence-coverphoto.png',
                width: 1200,
                height: 630,
                alt: 'Prominence — Executive Personal Branding & Digital Reputation Advisory',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Executive Personal Branding & Digital Reputation Advisory | Prominence',
        description: 'Turn leadership excellence into sovereign executive influence. Bespoke digital HQ, search reputation, and thought leadership for enterprise leaders.',
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
            name: 'Prominence',
            description: 'Premier executive personal branding and digital reputation advisory for CEOs, CHROs, enterprise founders, and senior leaders.',
            publisher: {
                '@id': 'https://www.prominence.agency/#organization',
            },
        },
        {
            '@type': 'ProfessionalService',
            '@id': 'https://www.prominence.agency/#organization',
            name: 'Prominence',
            url: 'https://www.prominence.agency',
            logo: 'https://www.prominence.agency/assets/images/Elite%20Prominence/EliteProminence-iocn.png',
            image: 'https://www.prominence.agency/assets/images/Elite%20Prominence/EliteProminence-coverphoto.png',
            description: 'Bespoke executive personal branding and digital reputation advisory firm for enterprise executives and founders.',
            telephone: '+8801645441584',
            email: 'hello@prominence.agency',
            priceRange: '$$$$',
            founder: {
                '@type': 'Person',
                name: 'Md Tarek',
                jobTitle: 'Founder & Managing Partner',
                url: 'https://www.linkedin.com/in/mdtarek404/',
            },
            sameAs: [
                'https://www.linkedin.com/company/elite-prominence',
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
                    reviewBody: 'Prominence transformed my executive presence. Within 60 days of launching my new digital HQ and executive LinkedIn strategy, I received two board advisory invitations.',
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
                        text: 'Very little. This is a done-for-you model designed specifically for busy enterprise leaders — most clients spend under 30 minutes a month once onboarding is complete.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Is building a personal brand with you just about LinkedIn content, or more than that?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: "It's significantly more. Building sovereign authority requires an integrated presence: we combine a personal executive website, Google reputation management, structured entity schemas, and high-impact thought leadership — whereas standard agencies only handle one piece.",
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How long before I see results?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Website and search reputation work typically shows visible change within 45–60 days; inbound board inquiries and speaking opportunities compound over 3–6 months.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How much does executive personal branding cost?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We offer tailored executive engagements, ranging from our intensive 90-Day Sovereign Stature Sprint to ongoing quarterly executive advisory retainers. Packages reflect the bespoke nature of building proprietary digital assets and Google Page 1 placement. Transparent pricing tiers are published on our Pricing page.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Why do enterprise executives need a dedicated personal website (Digital HQ)?',
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
                        text: 'Discretion is our foremost principle. We adhere strictly to corporate NDAs and employment agreements. All thought leadership focuses on macro industry architecture, governance, and organizational transformation without disclosing private employer operational data.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Who is this NOT a good fit for?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Early-career practitioners without an established track record — our work is engineered specifically for senior leaders who already possess substantive commercial outcomes to showcase.',
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
            <MlabHomePage />
        </div>
    )
}