import React from 'react'

export const metadata = {
    title: 'Client Recognition & Testimonials | Elite Prominence',
    description: 'Discover how Elite Prominence partners with senior HR executives and consultants to build digital authority that creates compounding career returns.',
    alternates: {
        canonical: '/testimonials',
    },
    openGraph: {
        title: 'Client Recognition & Testimonials | Elite Prominence',
        description: 'Discover how Elite Prominence partners with senior HR executives and consultants to build digital authority that creates compounding career returns.',
        url: 'https://www.prominence.agency/testimonials',
        siteName: 'Elite Prominence',
        locale: 'en_US',
        type: 'website',
    },
}

const testimonialsBreadcrumbSchema = {
    '@context': 'https://schema.org',
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
            name: 'Client Recognition',
            item: 'https://www.prominence.agency/testimonials',
        },
    ],
}

export default function TestimonialsLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsBreadcrumbSchema) }}
            />
            {children}
        </>
    )
}
