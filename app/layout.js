import "app/favicon.png"
import "@/node_modules/react-modal-video/css/modal-video.css"
import Aos_Animation from "@/components/elements/AosAnimation"
import "public/assets/css/bootstrap.css"
import "public/assets/css/aos.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { ptSerif, tiroBangla } from '@/lib/font'
export const metadata = {
    metadataBase: new URL('https://prominence.agency'),
    title: {
        default: 'Elite Prominence | Personal Branding Agency for Executives',
        template: '%s | Elite Prominence',
    },
    description: 'We build a complete digital presence for HR leaders & executives — website, Google reputation, and LinkedIn visibility, done for you.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Elite Prominence | Personal Branding Agency for Executives',
        description: 'We build a complete digital presence for HR leaders & executives — website, Google reputation, and LinkedIn visibility, done for you.',
        url: 'https://prominence.agency',
        siteName: 'Elite Prominence',
        images: [
            {
                url: '/assets/images/Elite%20Prominence/EliteProminence-coverphoto.png',
                width: 1200,
                height: 630,
                alt: 'Elite Prominence — Personal Branding for HR Leaders & Executives',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Elite Prominence | Personal Branding Agency for Executives',
        description: 'We build a complete digital presence for HR leaders & executives — website, Google reputation, and LinkedIn visibility, done for you.',
        images: ['/assets/images/Elite%20Prominence/EliteProminence-coverphoto.png'],
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${ptSerif.variable} ${tiroBangla.variable}`}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Tiro+Bangla:ital@0;1&display=swap"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'Elite Prominence',
                            url: 'https://prominence.agency',
                            logo: 'https://prominence.agency/assets/images/Elite%20Prominence/EliteProminence-iocn.png',
                            description: 'Personal branding agency for senior HR leaders, CHROs, and executive consultants.',
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
                <Aos_Animation/>
                {children}
            </body>
        </html>
    )
}

