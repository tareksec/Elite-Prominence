-- ==============================================================================
-- Elite Prominence — User Panel & Moderation System Database Schema
-- Run this script in the Supabase SQL Editor (Dashboard > SQL Editor > New Query)
-- ==============================================================================

-- 1. Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. Profiles Table
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT NOT NULL,
    role_title TEXT,
    role TEXT CHECK (role IN ('user', 'admin')) DEFAULT 'user' NOT NULL,
    avatar_url TEXT,
    bio TEXT,
    company TEXT,
    industry TEXT,
    location TEXT,
    years_of_experience TEXT,
    linkedin_url TEXT,
    twitter_url TEXT,
    website_url TEXT,
    core_expertise TEXT[] DEFAULT '{}',
    speaking_topics TEXT,
    is_public_directory BOOLEAN DEFAULT true,
    banner_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Idempotent Column Additions for existing databases:
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bio TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS company TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS industry TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS location TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS years_of_experience TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS linkedin_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS twitter_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS website_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS core_expertise TEXT[] DEFAULT '{}';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS speaking_topics TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_public_directory BOOLEAN DEFAULT true;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS banner_url TEXT;

-- Index for role lookup
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);

-- ==============================================================================
-- 3. Automatic Profile Creation on Signup Trigger
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, role_title, role)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
        COALESCE(NEW.raw_user_meta_data->>'role_title', ''),
        'user'
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 3b. Backfill any existing users who signed up before this trigger
INSERT INTO public.profiles (id, full_name, role_title, role)
SELECT 
    id, 
    COALESCE(raw_user_meta_data->>'full_name', split_part(email, '@', 1)), 
    COALESCE(raw_user_meta_data->>'role_title', ''),
    'user'
FROM auth.users
ON CONFLICT (id) DO NOTHING;


-- ==============================================================================
-- 4. Admin Check Helper Function (Security Definer)
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- ==============================================================================
-- 5. Reviews Table (Testimonials)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    content TEXT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending' NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    reviewed_at TIMESTAMPTZ,
    reviewed_by UUID REFERENCES public.profiles(id)
);

CREATE INDEX IF NOT EXISTS idx_reviews_status ON public.reviews(status);
CREATE INDEX IF NOT EXISTS idx_reviews_user_id ON public.reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON public.reviews(created_at DESC);

-- ==============================================================================
-- 6. Articles Table (User-Submitted Writing)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.articles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    category TEXT DEFAULT 'Executive Presence' NOT NULL,
    status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending' NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    published_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_articles_status ON public.articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_user_id ON public.articles(user_id);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON public.articles(created_at DESC);

-- ==============================================================================
-- 7. Enable Row Level Security (RLS)
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- ==============================================================================
-- 8. Profiles RLS Policies
-- ==============================================================================
DROP POLICY IF EXISTS "Public can view profiles with approved content or own profile" ON public.profiles;
CREATE POLICY "Public can view profiles with approved content or own profile"
    ON public.profiles FOR SELECT
    USING (
        id = auth.uid() 
        OR public.is_admin()
        OR EXISTS (
            SELECT 1 FROM public.reviews WHERE user_id = profiles.id AND status = 'approved'
        )
        OR EXISTS (
            SELECT 1 FROM public.articles WHERE user_id = profiles.id AND status = 'approved'
        )
    );

DROP POLICY IF EXISTS "Users can update their own profile details" ON public.profiles;
CREATE POLICY "Users can update their own profile details"
    ON public.profiles FOR UPDATE
    USING (id = auth.uid() OR public.is_admin())
    WITH CHECK (
        public.is_admin() 
        OR (id = auth.uid() AND role = (SELECT role FROM public.profiles WHERE id = auth.uid()))
    );

-- ==============================================================================
-- 9. Reviews RLS Policies
-- ==============================================================================
DROP POLICY IF EXISTS "Authenticated users can insert pending reviews" ON public.reviews;
CREATE POLICY "Authenticated users can insert pending reviews"
    ON public.reviews FOR INSERT
    TO authenticated
    WITH CHECK (
        user_id = auth.uid()
        AND (status = 'pending' OR public.is_admin())
    );

DROP POLICY IF EXISTS "Select reviews policy" ON public.reviews;
CREATE POLICY "Select reviews policy"
    ON public.reviews FOR SELECT
    USING (
        status = 'approved'
        OR user_id = auth.uid()
        OR public.is_admin()
    );

DROP POLICY IF EXISTS "Only admins can update reviews" ON public.reviews;
CREATE POLICY "Only admins can update reviews"
    ON public.reviews FOR UPDATE
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admins or owners can delete reviews" ON public.reviews;
CREATE POLICY "Admins or owners can delete reviews"
    ON public.reviews FOR DELETE
    USING (public.is_admin() OR user_id = auth.uid());

-- ==============================================================================
-- 10. Articles RLS Policies
-- ==============================================================================
DROP POLICY IF EXISTS "Authenticated users can insert pending articles" ON public.articles;
CREATE POLICY "Authenticated users can insert pending articles"
    ON public.articles FOR INSERT
    TO authenticated
    WITH CHECK (
        user_id = auth.uid()
        AND (status = 'pending' OR public.is_admin())
    );

DROP POLICY IF EXISTS "Select articles policy" ON public.articles;
CREATE POLICY "Select articles policy"
    ON public.articles FOR SELECT
    USING (
        status = 'approved'
        OR user_id = auth.uid()
        OR public.is_admin()
    );

DROP POLICY IF EXISTS "Only admins can update articles" ON public.articles;
CREATE POLICY "Only admins can update articles"
    ON public.articles FOR UPDATE
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admins or owners can delete articles" ON public.articles;
CREATE POLICY "Admins or owners can delete articles"
    ON public.articles FOR DELETE
    USING (public.is_admin() OR user_id = auth.uid());

-- ==============================================================================
-- 11. Initial Admin Promotion Example Note:
-- To promote your account after signup, run:
-- UPDATE public.profiles SET role = 'admin' WHERE id = (SELECT id FROM auth.users WHERE email = 'your-email@domain.com');
-- ==============================================================================

-- ==============================================================================
-- 12. Contacts Table (Contact Form Submissions)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.contacts (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow public / anon users to submit contact inquiries
DROP POLICY IF EXISTS "Allow public contact form submissions" ON public.contacts;
CREATE POLICY "Allow public contact form submissions"
  ON public.contacts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only admins can read contact submissions
DROP POLICY IF EXISTS "Only admins can view contact submissions" ON public.contacts;
CREATE POLICY "Only admins can view contact submissions"
  ON public.contacts FOR SELECT
  USING (public.is_admin());

-- Only admins can delete contact submissions
DROP POLICY IF EXISTS "Only admins can delete contact submissions" ON public.contacts;
CREATE POLICY "Only admins can delete contact submissions"
  ON public.contacts FOR DELETE
  USING (public.is_admin());

-- Admins can delete any user profile
DROP POLICY IF EXISTS "Admins can delete any profile" ON public.profiles;
CREATE POLICY "Admins can delete any profile"
  ON public.profiles FOR DELETE
  USING (public.is_admin());

-- ==============================================================================
-- 13. Site Settings Table (Live Announcement & Live Config)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.site_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read site settings" ON public.site_settings;
CREATE POLICY "Public can read site settings"
  ON public.site_settings FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Admins can update site settings" ON public.site_settings;
CREATE POLICY "Admins can update site settings"
  ON public.site_settings FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Seed initial default settings
INSERT INTO public.site_settings (key, value)
VALUES 
  ('whatsapp_number', '"8801645441584"'::jsonb),
  ('announcement', '{"enabled": false, "text": "Prominence is now accepting applications for the Q4 Executive Cohort.", "link": "/contact", "bgColor": "#0f1013"}'::jsonb)
ON CONFLICT (key) DO NOTHING;


