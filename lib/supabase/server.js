import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function getSupabaseServerClient() {
    const cookieStore = cookies()
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

    return createServerClient(supabaseUrl, supabaseAnonKey, {
        cookies: {
            get(name) {
                return cookieStore.get(name)?.value
            },
            set(name, value, options) {
                try {
                    cookieStore.set({ name, value, ...options })
                } catch (error) {
                    // Ignored in Server Component render
                }
            },
            remove(name, options) {
                try {
                    cookieStore.set({ name, value: '', ...options })
                } catch (error) {
                    // Ignored in Server Component render
                }
            },
        },
    })
}
