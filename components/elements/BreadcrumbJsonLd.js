import React from 'react'

export default function BreadcrumbJsonLd({ items }) {
    if (!items || !items.length) return null

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url 
                ? (item.url.startsWith("http") ? item.url : `https://prominence.agency${item.url}`)
                : undefined
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
