import React from 'react'

export const metadata = {
    title: 'Client Feedback & Reviews',
    description: 'Read verified feedback and testimonials from chief human resources officers and senior people leaders working with Elite Prominence.',
    alternates: {
        canonical: '/feedback',
    },
    openGraph: {
        title: 'Client Feedback & Testimonials',
        description: 'Read verified feedback and testimonials from chief human resources officers and senior people leaders working with Elite Prominence.',
        url: 'https://www.prominence.agency/feedback',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const feedbackSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.prominence.agency',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Client Feedback',
                    item: 'https://www.prominence.agency/feedback',
                },
            ],
        },
        {
            '@type': 'ProfessionalService',
            name: 'Elite Prominence',
            url: 'https://www.prominence.agency',
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
    ],
}

export default function FeedbackLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(feedbackSchemaGraph) }}
            />
            {children}
        </>
    )
}
