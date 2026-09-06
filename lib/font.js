import { PT_Serif, Tiro_Bangla } from 'next/font/google'

export const ptSerif = PT_Serif({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: "--font-pt-serif",
    display: 'swap',
})

export const tiroBangla = Tiro_Bangla({
    weight: ['400'],
    style: ['normal', 'italic'],
    subsets: ['bengali'],
    variable: "--font-tiro-bangla",
    display: 'swap',
})

// Aliases for backwards compatibility
export const urbanist = ptSerif
export const inter = ptSerif

