/**
 * Text sanitization and input defense utility for user-submitted content.
 * Defends against XSS, HTML injection, and buffer abuse.
 */

export function sanitizeText(input, maxLength = 5000) {
    if (typeof input !== 'string') return ''

    // Normalize unicode and trim
    let clean = input.trim()

    // Enforce length limit
    if (clean.length > maxLength) {
        clean = clean.slice(0, maxLength)
    }

    // Strip out HTML tags (<script>, <style>, <iframe etc.)
    clean = clean.replace(/<[^>]*>?/gm, '')

    // Remove control characters except standard whitespace / newlines
    clean = clean.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')

    return clean
}

export function sanitizeTitle(input, maxLength = 200) {
    if (typeof input !== 'string') return ''
    return sanitizeText(input, maxLength).replace(/\r?\n|\r/g, ' ')
}
