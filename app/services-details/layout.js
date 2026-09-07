import React from 'react'

export const metadata = {
    title: 'Service Architecture & The 3 Pillars | Elite Prominence',
    description: 'Detailed architecture of our 3-pillar executive personal branding model: Digital HQ (Website), Google Reputation Management, and LinkedIn Ghostwriting.',
    alternates: {
        canonical: '/services-details',
    },
    openGraph: {
        title: 'Service Architecture & The 3 Pillars | Elite Prominence',
        description: 'Detailed architecture of our 3-pillar executive personal branding model: Digital HQ (Website), Google Reputation Management, and LinkedIn Ghostwriting.',
        url: 'https://www.prominence.agency/services-details',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const serviceDetailsSchema = {
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
                    name: 'Services',
                    item: 'https://www.prominence.agency/services',
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Service Architecture',
                    item: 'https://www.prominence.agency/services-details',
                },
            ],
        },
        {
            '@type': 'Service',
            name: '3-Pillar Executive Personal Brand Architecture',
            provider: {
                '@type': 'Organization',
                name: 'Elite Prominence',
                url: 'https://www.prominence.agency',
            },
            serviceType: 'Executive Personal Branding & Reputation Management',
            description: 'Comprehensive personal branding architecture consisting of personal digital HQ, Google search reputation management, and done-for-you LinkedIn executive ghostwriting.',
            url: 'https://www.prominence.agency/services-details',
        },
    ],
}

export default function ServicesDetailsLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceDetailsSchema) }}
            />
            {children}
        </>
    )
}
