import React from 'react'

export const metadata = {
    title: 'Executive Community & Contributors | Elite Prominence',
    description: 'Explore perspectives and verified profiles of industry leaders, chief people officers, and advisors contributing to the Elite Prominence network.',
    alternates: {
        canonical: '/community',
    },
    openGraph: {
        title: 'Executive Community & Contributors | Elite Prominence',
        description: 'Explore perspectives and verified profiles of industry leaders, chief people officers, and advisors contributing to the Elite Prominence network.',
        url: 'https://prominence.agency/community',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const communityBreadcrumbSchema = {
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
            name: 'Executive Community',
            item: 'https://prominence.agency/community',
        },
    ],
}

export default function CommunityLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(communityBreadcrumbSchema) }}
            />
            {children}
        </>
    )
}
