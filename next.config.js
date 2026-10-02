/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    trailingSlash: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'pixabay.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'prominence.agency',
                    },
                ],
                destination: 'https://www.prominence.agency/:path*',
                permanent: true,
            },
            {
                source: '/blog',
                destination: '/blog-grid',
                permanent: true,
            },
            {
                source: '/privacy',
                destination: '/privacy-policy',
                permanent: true,
            },
            {
                source: '/terms-of-service',
                destination: '/terms',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
