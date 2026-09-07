import { NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rateLimit'
import { sanitizeText, sanitizeTitle } from '@/lib/sanitize'
import { sendContactForm } from '@/app/actions/contact'

export async function POST(request) {
    try {
        // 1. IP-based Rate Limiting (max 5 inquiries per 10 minutes per IP)
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                   request.headers.get('x-real-ip') || 
                   '127.0.0.1'
        
        const rateCheck = checkRateLimit(`contact_${ip}`, 5, 10 * 60 * 1000)
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { error: 'Too many requests. Please wait a few minutes before submitting again.' },
                { status: 429 }
            )
        }

        const body = await request.json()
        const { name, role, company, email, linkedin, goals, message, honeypot } = body

        // 2. Honeypot check (silently drop bot submissions)
        if (honeypot) {
            return NextResponse.json({ success: true, message: 'Inquiry received.' })
        }

        // 3. Required Fields Validation
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required fields.' },
                { status: 400 }
            )
        }

        // 4. Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            )
        }

        // 5. Input Sanitization
        const sanitizedInquiry = {
            name: sanitizeTitle(name, 100),
            role: role ? sanitizeTitle(role, 120) : undefined,
            company: company ? sanitizeTitle(company, 120) : undefined,
            email: sanitizeText(email, 120),
            linkedin: linkedin ? sanitizeText(linkedin, 250) : undefined,
            goals: goals ? sanitizeText(goals, 2000) : undefined,
            message: message ? sanitizeText(message, 3000) : undefined,
        }

        // 6. Execute Supabase insertion and Brevo Email Notification
        const result = await sendContactForm(sanitizedInquiry)

        if (!result.success) {
            return NextResponse.json(
                { error: result.message || 'Failed to submit contact form.' },
                { status: 400 }
            )
        }

        return NextResponse.json({
            success: true,
            message: 'Your inquiry has been received. An executive advisor will reach out within 1–2 business days.'
        })

    } catch (err) {
        console.error('Contact API Route Error:', err)
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please contact us directly at hello@prominence.agency.' },
            { status: 500 }
        )
    }
}
