/**
 * WhatsApp integration configuration and URL builder for Elite Prominence.
 */

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801700000000'
export const DEFAULT_WHATSAPP_MESSAGE = "Hi, I'd like to know more about Elite Prominence's services."

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE, number = WHATSAPP_NUMBER) {
    const encoded = encodeURIComponent(message)
    const cleanNumber = (number || '').replace(/[^0-9]/g, '')
    return `https://wa.me/${cleanNumber}?text=${encoded}`
}
