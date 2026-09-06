import { createBrowserClient } from '@supabase/ssr'

let clientInstance = null

export function getSupabaseBrowserClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

    if (!clientInstance) {
        clientInstance = createBrowserClient(supabaseUrl, supabaseAnonKey)
    }
    return clientInstance
}
