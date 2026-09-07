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
