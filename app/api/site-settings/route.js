import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const revalidate = 60 // Cache for 60 seconds

export async function GET() {
    try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (!supabaseUrl || !anonKey) {
            return NextResponse.json({ settings: {} })
        }

        const supabase = createClient(supabaseUrl, anonKey)
        const { data, error } = await supabase.from('site_settings').select('key, value')

        if (error) {
            return NextResponse.json({ settings: {} })
        }

        const settings = {}
        data?.forEach(row => {
            settings[row.key] = row.value
        })

        return NextResponse.json({ settings })
    } catch {
        return NextResponse.json({ settings: {} })
    }
}
