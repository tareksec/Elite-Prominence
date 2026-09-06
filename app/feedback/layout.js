import React from 'react'

export const metadata = {
    title: 'Client Feedback & Testimonials | Elite Prominence',
    description: 'Read verified feedback and testimonials from chief human resources officers and senior people leaders working with Elite Prominence.',
    alternates: {
        canonical: '/feedback',
    },
    openGraph: {
        title: 'Client Feedback & Testimonials | Elite Prominence',
        description: 'Read verified feedback and testimonials from chief human resources officers and senior people leaders working with Elite Prominence.',
        url: 'https://prominence.agency/feedback',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const feedbackBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://prominence.agency',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Client Feedback',
            item: 'https://prominence.agency/feedback',
        },
    ],
}

export default function FeedbackLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(feedbackBreadcrumbSchema) }}
            />
            {children}
        </>
    )
}
