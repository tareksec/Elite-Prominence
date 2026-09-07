/**
 * In-memory sliding window rate limiter for API routes and form submissions.
 */

const rateLimitMap = new Map()

export function checkRateLimit(key, maxRequests = 5, windowMs = 60 * 1000) {
    const now = Date.now()
    const record = rateLimitMap.get(key) || []

    // Filter out expired timestamps
    const validTimestamps = record.filter(timestamp => now - timestamp < windowMs)

    if (validTimestamps.length >= maxRequests) {
        return {
            allowed: false,
            remaining: 0,
            resetMs: windowMs - (now - validTimestamps[0])
        }
    }

    validTimestamps.push(now)
    rateLimitMap.set(key, validTimestamps)

    // Periodic garbage collection to prevent memory leaks
    if (rateLimitMap.size > 2000) {
        for (const [k, timestamps] of rateLimitMap.entries()) {
            const active = timestamps.filter(t => now - t < windowMs)
            if (active.length === 0) {
                rateLimitMap.delete(k)
            } else {
                rateLimitMap.set(k, active)
            }
        }
    }

    return {
        allowed: true,
        remaining: maxRequests - validTimestamps.length,
        resetMs: 0
    }
}
