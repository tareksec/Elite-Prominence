import { NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rateLimit'
import { sanitizeText, sanitizeTitle } from '@/lib/sanitize'

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
        const { name, role, company, email, linkedin, goals, honeypot } = body

        // 2. Honeypot check (silently drop bot submissions)
        if (honeypot) {
            return NextResponse.json({ success: true, message: 'Inquiry received.' })
        }

        // 3. Required Fields Validation
        if (!name || !email || !role) {
            return NextResponse.json(
                { error: 'Name, email, and role are required fields.' },
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
            role: sanitizeTitle(role, 120),
            company: sanitizeTitle(company || '', 120),
            email: sanitizeText(email, 120),
            linkedin: sanitizeText(linkedin || '', 250),
            goals: sanitizeText(goals || '', 2000),
            submitted_at: new Date().toISOString()
        }

        // Log receipt (in production, integrate with Resend/SendGrid or Supabase table)
        console.log('[Contact Inquiry Received]:', {
            name: sanitizedInquiry.name,
            email: sanitizedInquiry.email,
            role: sanitizedInquiry.role,
            timestamp: sanitizedInquiry.submitted_at
        })

        return NextResponse.json({
            success: true,
            message: 'Your strategy session request has been received. An executive advisor will reach out within 1–2 business days.'
        })

    } catch (err) {
        console.error('Contact API Error:', err)
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please contact us directly at hello@prominence.agency.' },
            { status: 500 }
        )
    }
}
