import "@/node_modules/react-modal-video/css/modal-video.css"
import Aos_Animation from "@/components/elements/AosAnimation"
import SmoothScroll from "@/components/elements/SmoothScroll"
import GlobalFloatingDock from "@/components/layout/GlobalFloatingDock"
import IntroVideo from "@/components/IntroVideo"
import AiFloatingButton from "@/components/elements/AiFloatingButton"
import "public/assets/css/bootstrap.css"
import "public/assets/css/aos.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"
import "public/assets/css/modern-design.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { ptSerif, tiroBangla } from '@/lib/font'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export const metadata = {
    metadataBase: new URL('https://www.prominence.agency'),
    title: {
        default: 'Executive Personal Branding & Digital Reputation Advisory | Prominence',
        template: '%s | Prominence',
    },
    description: 'Prominence is a premier executive reputation advisory counseling CEOs, CHROs, enterprise founders, and senior leaders on sovereign digital stature, executive websites, and thought leadership.',
    alternates: {
        canonical: 'https://www.prominence.agency',
    },
    openGraph: {
        title: 'Executive Personal Branding & Digital Reputation Advisory | Prominence',
        description: 'Build a digital presence that commands attention. Bespoke executive websites, Google search dominance, and strategic thought leadership.',
        url: 'https://www.prominence.agency',
        siteName: 'Prominence.agency',
        images: [
            {
                url: '/assets/images/Elite%20Prominence/EliteProminence-coverphoto.png',
                width: 1200,
                height: 630,
                alt: 'Prominence — Executive Personal Branding & Reputation Advisory',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Executive Personal Branding & Digital Reputation Advisory | Prominence',
        description: 'Turn leadership excellence into sovereign executive influence. Bespoke digital HQ, search reputation, and thought leadership.',
        images: ['/assets/images/Elite%20Prominence/EliteProminence-coverphoto.png'],
    },
    icons: {
        icon: [
            { url: '/new/logo.png' },
            { url: '/favicon.ico', sizes: '32x32' },
            { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
            { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcut: '/new/logo.png',
        apple: [
            { url: '/new/logo.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${ptSerif.variable} ${tiroBangla.variable}`}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                            html.intro-already-seen #intro-video-overlay {
                                display: none !important;
                                visibility: hidden !important;
                                pointer-events: none !important;
                            }
                            html:not(.intro-already-seen) {
                                overflow: hidden !important;
                            }
                            html:not(.intro-already-seen) body {
                                overflow: hidden !important;
                            }
                        `,
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var seen = localStorage.getItem('elite_intro_played') === 'true' ||
                                               sessionStorage.getItem('introSeen') === 'true' ||
                                               document.cookie.indexOf('elite_intro_played=true') !== -1;
                                    if (seen) {
                                        document.documentElement.classList.add('intro-already-seen');
                                    } else {
                                        var link = document.createElement('link');
                                        link.rel = 'preload';
                                        link.as = 'video';
                                        link.href = '/new/intro.mp4';
                                        link.type = 'video/mp4';
                                        document.head.appendChild(link);
                                    }
                                } catch(e) {}
                            })();
                        `,
                    }}
                />
                <link rel="icon" href="/new/logo.png" type="image/png" />
                <link rel="shortcut icon" href="/new/logo.png" type="image/png" />
                <link rel="apple-touch-icon" href="/new/logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Tiro+Bangla:ital@0;1&display=swap"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'Prominence',
                            legalName: 'Elite Prominence',
                            url: 'https://www.prominence.agency',
                            logo: 'https://www.prominence.agency/assets/images/Elite%20Prominence/EliteProminence-iocn.png',
                            description: 'Premier executive personal branding and digital reputation advisory firm for CEOs, CHROs, enterprise founders, and senior leaders.',
                            sameAs: [
                                'https://www.linkedin.com/company/elite-prominence',
                                'https://www.facebook.com/EliteProminence/',
                            ],
                            contactPoint: {
                                '@type': 'ContactPoint',
                                email: 'hello@prominence.agency',
                                contactType: 'customer service',
                            },
                        }),
                    }}
                />
            </head>
            <body>
                <IntroVideo />
                <Aos_Animation/>
                <SmoothScroll/>
                {children}
                <GlobalFloatingDock/>
                <AiFloatingButton />
            </body>
        </html>
    )
}
