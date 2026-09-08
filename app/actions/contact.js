'use server'

import { createClient } from '@supabase/supabase-js'

// Initialize Supabase Client
// Uses SUPABASE_SERVICE_ROLE_KEY if available for secure backend execution,
// falling back to NEXT_PUBLIC_SUPABASE_ANON_KEY.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(
  supabaseUrl,
  supabaseKey
)

/**
 * Server Action to handle Contact Form submissions
 * Saves to Supabase `contacts` table and sends email via Brevo REST API
 * 
 * @param {Object} formData
 * @param {string} formData.name
 * @param {string} formData.email
 * @param {string} [formData.message]
 * @param {string} [formData.role]
 * @param {string} [formData.company]
 * @param {string} [formData.linkedin]
 * @param {string} [formData.goals]
 */
export async function sendContactForm(formData) {
  const { name, email, message, role, company, linkedin, goals } = formData || {}

  if (!name || !email) {
    return { success: false, message: 'Name and email are required.' }
  }

  // Construct message content if executive form fields were passed individually
  let finalMessage = message
  if (!finalMessage) {
    const details = []
    if (role) details.push(`Role: ${role}`)
    if (company) details.push(`Company: ${company}`)
    if (linkedin) details.push(`LinkedIn: ${linkedin}`)
    if (goals) details.push(`Goals / Message: ${goals}`)
    finalMessage = details.length > 0 ? details.join('\n') : 'No message provided'
  }

  try {
    // 1. Save to Supabase contacts table
    const { data: dbData, error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, email, message: finalMessage }])
      .select()

    if (dbError) {
      console.error('[Supabase contacts DB Error]:', dbError)
      throw new Error(`Database error: ${dbError.message}`)
    }

    // 2. Prepare HTML for Brevo Email Notification
    const detailsHtml = []
    if (role) detailsHtml.push(`<p style="margin: 6px 0;"><strong>Executive Role:</strong> ${role}</p>`)
    if (company) detailsHtml.push(`<p style="margin: 6px 0;"><strong>Company:</strong> ${company}</p>`)
    if (linkedin) detailsHtml.push(`<p style="margin: 6px 0;"><strong>LinkedIn:</strong> <a href="${linkedin}" style="color: #0D1322; font-weight: 600;">${linkedin}</a></p>`)
    if (goals) detailsHtml.push(`<div style="margin: 12px 0;"><strong>Goals / Inquiries:</strong><div style="background: #f8fafc; padding: 12px; border-left: 3px solid #0D1322; border-radius: 4px; margin-top: 4px;">${String(goals).replace(/\n/g, '<br/>')}</div></div>`)
    if (message && message !== goals) detailsHtml.push(`<div style="margin: 12px 0;"><strong>Message:</strong><div style="background: #f8fafc; padding: 12px; border-left: 3px solid #0D1322; border-radius: 4px; margin-top: 4px;">${String(message).replace(/\n/g, '<br/>')}</div></div>`)

    const htmlContent = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #1e293b; max-width: 620px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background: #0D1322; padding: 24px; color: #ffffff; border-bottom: 2px solid #C5A059;">
          <h2 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">New Contact Form Submission</h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9; color: #E2C285;">Elite Prominence Executive Notification</p>
        </div>
        
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; width: 100px; color: #64748b; font-weight: 600;">Full Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0D1322; font-weight: 600; text-decoration: none;">${email}</a></td>
            </tr>
          </table>

          ${detailsHtml.length > 0 ? detailsHtml.join('') : `<div style="background: #f8fafc; padding: 12px; border-left: 3px solid #0D1322; border-radius: 4px; margin-top: 10px;">${String(finalMessage).replace(/\n/g, '<br/>')}</div>`}
        </div>

        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 24px; font-size: 13px; color: #94a3b8;">
          This message was sent from the contact form at <a href="https://prominence.agency" style="color: #0D1322; font-weight: 600;">prominence.agency</a>.
          You can reply directly to this email to respond to <strong>${name}</strong> (${email}).
        </div>
      </div>
    `

    // 3. Send Email via Brevo API
    const brevoApiKey = process.env.BREVO_API_KEY
    if (!brevoApiKey) {
      console.warn('[Brevo Warning]: BREVO_API_KEY is not defined in environment.')
      return { success: true, message: 'Message saved successfully! (Brevo API key pending)' }
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Prominence Website', email: 'hello@prominence.agency' },
        to: [{ email: 'prominenceelite@gmail.com', name: 'Admin' }],
        replyTo: { email: email, name: name },
        subject: `New Contact Message from ${name}`,
        htmlContent: htmlContent,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[Brevo API Error Status]:', response.status, errorText)
      throw new Error(`Failed to send email notification: ${response.statusText || errorText}`)
    }

    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('[Contact Form Submission Error]:', error)
    return { success: false, message: error.message || 'Something went wrong.' }
  }
}
