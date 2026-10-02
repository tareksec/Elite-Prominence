# Current System State & Architecture — Elite Prominence

This document provides a comprehensive, verified snapshot of the current state of the Elite Prominence codebase as of **October 2026**.

---

## 1. Project Purpose & Domain

- **Primary Identity**: Elite Prominence (`prominence.agency` / `www.prominence.agency`).
- **Core Domain**: High-touch executive personal branding and digital reputation advisory firm counseling Fortune 500 CEOs, CHROs, enterprise founders, and senior executive consultants.
- **Dual Functionality**:
  1. **Public Marketing & Knowledge Platform**: High-converting service presentations, case study proofs of concept, editorial blog with dynamic reading UX, structured entity schema markup for Google Knowledge Graph, and lead capture.
  2. **Gated Executive Portal & Administration Console**: Authentication-gated client dashboard (`/dashboard`) for profile customization, testimonial submission, and article drafts, paired with an administrative suite (`/admin`) for content moderation, lead management, user role control, and live site configuration.

---

## 2. Technology Stack

| Layer | Technology | Version / Specification | Notes |
|---|---|---|---|
| **Core Framework** | Next.js | `13.4.19` | App Router architecture, experimental Server Actions |
| **Frontend Library** | React | `18.2.0` | React Server Components (RSC) + Client Components |
| **Database & Auth** | Supabase | `@supabase/ssr` (`0.12.6`), `@supabase/supabase-js` (`2.115.0`) | PostgreSQL with Row-Level Security, Auth, Triggers |
| **Styling** | Vanilla CSS & SCSS | Sass `^1.66.1`, Bootstrap 5 CSS | Global assets in `public/assets/css/`, CSS Modules in `components/blog/` |
| **Motion & Animation** | GSAP, Framer Motion, Lenis, AOS, WOW.js | `gsap` (3.15.0), `framer-motion` (13.4.6), `lenis` (1.3.26) | Smooth scroll, viewport reveals, and interactive elements |
| **Email Service** | Brevo (Sendinblue) | REST API v3 (`api.brevo.com/v3/smtp/email`) | HTTPS-based transactional notification delivery |
| **Messaging** | WhatsApp Business | Click-to-chat API (`wa.me`) | Centralized link builder in `lib/whatsapp.js` |
| **Automation** | GitHub Actions | Ubuntu runner, Node 20 | Daily cron schedule (`0 6 * * *`) |

---

## 3. Repository Directory Structure

```text
e:\Documnets\COde\Elite-Prominence-main/
├── .env.local.example          # Environment variables template
├── .github/
│   └── workflows/
│       └── daily-publish.yml   # Daily scheduled blog publication workflow
├── .gitignore                  # Git ignore rules
├── .next/                      # Local Next.js build cache
├── SEO/                        # Crawler site audit CSV exports (Sept 2026)
├── ai/                         # Universal AI Project Brain documentation
│   ├── instructions.md         # Operational rules and architecture constraints
│   ├── decisions.md            # Chronological log of technical decisions
│   ├── known-issues.md         # Discovered problems, technical debt, and risks
│   └── current-state.md        # Factual snapshot of architecture and state
├── app/                        # Next.js 13 App Router root
│   ├── actions/                # Server Actions (contact.js)
│   ├── admin/                  # Administrative operations console (page.js)
│   ├── api/                    # Route handlers (admin/actions, contact, site-settings)
│   ├── blog/                   # Dynamic blog articles ([slug]/page.js)
│   ├── blog-grid/              # Filterable blog listing page
│   ├── blog-standard/          # Classic blog layout listing
│   ├── case-studies/           # Case studies landing & dynamic route ([slug])
│   ├── community/              # Public/member executive directory
│   ├── contact/                # Contact and advisory inquiry page
│   ├── dashboard/              # Authenticated executive member portal
│   ├── feedback/               # Client review / feedback submission page
│   ├── how-it-works/           # Engagement methodology breakdown
│   ├── layout.js               # Global HTML root layout with font and metadata
│   ├── loading.js              # Global route suspense loading fallback
│   ├── login/                  # Client authentication login page
│   ├── not-found.js            # Custom 404 page
│   ├── page.js                 # Production homepage
│   ├── pricing/                # Retained advisory fee structure
│   ├── privacy-policy/         # Legal privacy policy
│   ├── resources/              # Executive assessment & guides
│   ├── robots.js               # Dynamic robots.txt configuration
│   ├── services/               # Core services landing & dynamic routes ([slug])
│   ├── signup/                 # Client authentication registration page
│   ├── sitemap.js              # Dynamic XML sitemap generator
│   ├── solutions/              # Executive persona landing & dynamic routes ([slug])
│   ├── terms/                  # Terms of service
│   ├── users/                  # Re-exports /community directory
│   └── [legacy-template-dirs]  # shop, cart, checkout, index-1..5, projects, team
├── blog-details.html           # Legacy static HTML template export (56 KB)
├── components/                 # Reusable UI, layout, and section components
│   ├── blog/                   # Reading UX (TOC, Sidebar, Renderer, Progress)
│   ├── elements/               # Modals, BackToTop, Announcements, Accordions
│   ├── home/                   # MlabHomePage.js (production homepage component)
│   ├── layout/                 # Layout wrapper, Header (1-4), Footer, MobileMenu
│   ├── sections/               # Modular homepage section blocks
│   └── ui/                     # Primitives
├── content/                    # Markdown content repository
│   ├── blog/                   # Published MDX articles (17 posts)
│   ├── publish-history.json    # Publication execution ledger (9 entries)
│   └── queue/                  # Pending scheduled MDX posts (21 posts)
├── jsconfig.json               # Path aliases configuration (@/* -> ./*)
├── lib/                        # Core utilities, datasets, and clients
│   ├── blogData.js             # Static dataset of published articles (1,300+ lines)
│   ├── careersData.js          # Retained career and advisory mandates
│   ├── caseStudiesData.js      # Executive case study proofs of concept
│   ├── font.js                 # Next.js Google font definitions (PT Serif, Tiro Bangla)
│   ├── rateLimit.js            # In-memory sliding-window rate limiter
│   ├── sanitize.js             # Regex input sanitization utility
│   ├── servicesData.js         # 7 Core executive reputation pillars
│   ├── solutionsData.js        # 5 C-suite persona solutions
│   ├── supabase/               # Client initializers (client, server, admin, config)
│   ├── utils.js                # Tailwind/class merger utility
│   └── whatsapp.js             # WhatsApp URL generator and defaults
├── middleware.js               # Route gatekeeper protecting /dashboard and /admin
├── next.config.js              # Next.js config (redirects, remote images, serverActions)
├── package.json                # Project dependencies and script declarations
├── public/                     # Static public assets (images, CSS, JS, fonts)
├── scripts/
│   └── publish-daily.mjs       # Automated daily publishing Node script
└── supabase/
    └── schema.sql              # PostgreSQL DDL, RLS policies, and triggers
```

---

## 4. Major System Flows

### A. Public Visitor & SEO Flow
1. **Request Ingestion**: Requests to `prominence.agency` are redirected to `https://www.prominence.agency` via 308 permanent redirect in `next.config.js`.
2. **Metadata & Schema Injection**: `app/layout.js` injects global Organization schema, font tokens, and viewport tags. Individual pages (`app/page.js`, `app/blog/[slug]/page.js`) generate canonical URLs, OpenGraph images, and JSON-LD schemas (`ProfessionalService`, `Article`, `BreadcrumbList`).
3. **Static Generation**: Dynamic routes for services (`/services/[slug]`), solutions (`/solutions/[slug]`), case studies (`/case-studies/[slug]`), and blog posts (`/blog/[slug]`) generate paths at build time using `generateStaticParams()`.
4. **Interactive Reading View**: The blog reader incorporates sticky Table of Contents, reading progress bar, font size controller, highlight-to-share popovers, and author biography cards.

### B. Lead Capture & Notification Flow
1. **Client Submission**: Visitors submit advisory inquiries via contact forms on `/contact`, `/resources/assessment`, or modal components.
2. **Rate Limiting & Honeypot**:
   - `app/api/contact/route.js` validates IP against `checkRateLimit()` in `lib/rateLimit.js` (max 5 requests per 10 minutes per IP).
   - If the hidden `honeypot` field contains data, the submission is silently dropped with HTTP 200.
3. **Sanitization**: `sanitizeText()` and `sanitizeTitle()` strip HTML tags, scripts, and non-printable control characters.
4. **Data Persistence**: `app/actions/contact.js` inserts the record into Supabase `public.contacts` using `SUPABASE_SERVICE_ROLE_KEY` (or anon key fallback).
5. **Transactional Email Dispatch**: A POST request is sent to Brevo REST API (`https://api.brevo.com/v3/smtp/email`) dispatching an executive-styled HTML summary to `prominenceelite@gmail.com` with the lead's email set as `replyTo`.

### C. Authentication & Client Member Flow
1. **Registration**: Visitors sign up at `/signup` with Full Name, Executive Title, Email, and Password.
2. **Database Trigger**: Supabase executes PostgreSQL trigger function `handle_new_user()`, automatically generating a `public.profiles` row with default role `'user'`.
3. **Session Management**: `@supabase/ssr` writes session tokens to HTTP-only cookies.
4. **Edge Interception**: `middleware.js` inspects cookies for requests to `/dashboard/:path*`. Unauthenticated visitors are redirected to `/login?next=/dashboard`.
5. **Dashboard Management**: Authenticated users access `/dashboard` to update their profile (bio, LinkedIn, expertise tags, speaking topics, directory visibility) and submit draft articles or testimonials.

### D. Administration & Moderation Flow
1. **Access Gate**: Navigating to `/admin` triggers role verification in `middleware.js`. The middleware queries `public.profiles` for `role === 'admin'`. Unauthorized users are redirected to `/dashboard?error=unauthorized_admin`.
2. **Admin Operations Engine**: The admin UI communicates with `app/api/admin/actions/route.js`. The route verifies the caller via `verifyAdminCaller()` before executing elevated operations:
   - **Queue**: Approving or rejecting pending reviews and submitted articles.
   - **Leads**: Reviewing and deleting submitted contact inquiries.
   - **Users**: Promoting users to `admin`, updating credentials, or deleting accounts via Supabase Admin Auth API.
   - **Site Settings**: Updating live announcement banners and the site-wide WhatsApp phone number.

### E. Daily Automated Content Publishing Pipeline
1. **Trigger**: Scheduled GitHub Actions cron job triggers daily at 06:00 UTC (`.github/workflows/daily-publish.yml`).
2. **Extraction**: `scripts/publish-daily.mjs` selects the oldest post in `content/queue/`.
3. **Transformation**: Updates frontmatter with today's date, outputs the file to `content/blog/[slug].mdx`, and unlinks the post from `content/queue/`.
4. **Code Injection**: Parses headings and sections, locates `export const BLOG_ARTICLES = [` in `lib/blogData.js`, and prepends the new article object to the array.
5. **Audit Ledger**: Appends the publish event to `content/publish-history.json`.
6. **Push to Origin**: Commits all modified files with `[skip ci]` and pushes directly to `main`.

---

## 5. Database Schema Specification

*(Defined in `supabase/schema.sql`)*

### Tables
1. **`public.profiles`**:
   - `id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE`
   - `full_name TEXT NOT NULL`, `role_title TEXT`, `role TEXT CHECK ('user', 'admin') DEFAULT 'user'`
   - `avatar_url TEXT`, `banner_url TEXT`, `bio TEXT`, `company TEXT`, `industry TEXT`, `location TEXT`, `years_of_experience TEXT`
   - `linkedin_url TEXT`, `twitter_url TEXT`, `website_url TEXT`
   - `core_expertise TEXT[] DEFAULT '{}'`, `speaking_topics TEXT`, `is_public_directory BOOLEAN DEFAULT true`
   - `created_at TIMESTAMPTZ DEFAULT NOW()`

2. **`public.reviews`**:
   - `id UUID DEFAULT gen_random_uuid() PRIMARY KEY`
   - `user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE`
   - `content TEXT NOT NULL`, `rating INT CHECK (1 <= rating <= 5)`
   - `status TEXT CHECK ('pending', 'approved', 'rejected') DEFAULT 'pending'`
   - `created_at TIMESTAMPTZ`, `reviewed_at TIMESTAMPTZ`, `reviewed_by UUID REFERENCES public.profiles(id)`

3. **`public.articles`**:
   - `id UUID DEFAULT gen_random_uuid() PRIMARY KEY`
   - `user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE`
   - `title TEXT NOT NULL`, `body TEXT NOT NULL`, `category TEXT DEFAULT 'Executive Presence'`
   - `status TEXT CHECK ('pending', 'approved', 'rejected') DEFAULT 'pending'`
   - `created_at TIMESTAMPTZ`, `published_at TIMESTAMPTZ`

4. **`public.contacts`**:
   - `id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY`
   - `created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())`
   - `name TEXT NOT NULL`, `email TEXT NOT NULL`, `message TEXT NOT NULL`

5. **`public.site_settings`**:
   - `key TEXT PRIMARY KEY`, `value JSONB NOT NULL`, `updated_at TIMESTAMPTZ DEFAULT NOW()`
   - Seed values: `whatsapp_number` (`"8801645441584"`), `announcement` (`{"enabled": false, ...}`)

### Security Definer Functions
- `public.handle_new_user()`: Trigger on `AFTER INSERT ON auth.users`.
- `public.is_admin()`: Returns `BOOLEAN` checking if current `auth.uid()` has `role = 'admin'` in `profiles`.

### Row-Level Security (RLS) Summary
- `profiles`: Public can select own profile, admin profiles, or profiles possessing approved content. Users can update their own details (cannot elevate their own role).
- `reviews`: Public can select approved reviews; users can select and insert own pending reviews; only admins can update/approve.
- `articles`: Public can select approved articles; authenticated users can insert pending articles; only admins can approve/update.
- `contacts`: Public/anon can insert; only admins can select and delete.
- `site_settings`: Public can read; only admins can modify (`FOR ALL USING (public.is_admin())`).

---

## 6. External Services & Environment Dependencies

| Variable | Scope | Purpose | Status in Code |
|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Public (Client + Server) | Supabase project URL | Has fallback placeholder `'https://placeholder.supabase.co'` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public (Client + Server) | Supabase anon key | Has fallback placeholder `'placeholder-key'` |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-Only | Elevated admin access | Handled securely via `lib/supabase/admin.js` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Public (Client) | WhatsApp contact number | Falls back to default `'8801645441584'` |
| `BREVO_API_KEY` | Server-Only | Transactional email delivery | If undefined, form logs warning and saves lead to DB |

---

## 7. Current Feature Implementation Status

| Feature / Page | URL / Path | Current Operational Status |
|---|---|---|
| **Homepage** | `/` | **Production Ready**: Modern dark-aesthetic hero, executive proposition, social proof, FAQ. |
| **Dynamic Blog** | `/blog/[slug]` | **Production Ready**: 17 published articles, TOC, schemas, responsive reading controls. |
| **Automated Publishing** | `.github/workflows/` | **Active**: 21 posts queued, runs daily at 06:00 UTC. 9 posts published to date. |
| **Executive Services** | `/services`, `/services/[slug]` | **Production Ready**: 7 core pillars with deliverables, FAQs, and outcomes. |
| **Solutions Personas** | `/solutions`, `/solutions/[slug]` | **Production Ready**: 5 executive personas (CEOs, CHROs, Founders, etc.). |
| **Case Studies** | `/case-studies`, `/case-studies/[slug]`| **Production Ready**: Structured proof-of-concept case studies. |
| **Contact & Inquiries** | `/contact`, `/api/contact` | **Production Ready**: Rate limited, honeypot protected, Supabase + Brevo dispatch. |
| **Authentication** | `/login`, `/signup` | **Operational**: Supabase email/password auth with graceful fallback notices. |
| **Client Dashboard** | `/dashboard` | **Operational**: Profile editing, article submission, review submission tabs. |
| **Admin Operations** | `/admin`, `/api/admin/actions` | **Operational**: Moderation queue, CRM leads, user management, site settings. |
| **Live Settings API** | `/api/site-settings` | **Operational**: Cached GET endpoint returning announcement and WhatsApp overrides. |
| **Community Directory** | `/community`, `/users` | **Operational**: Displays verified members with approved content or sample fallbacks. |
| **Legacy Template Pages** | `/shop`, `/cart`, `/index-1`..`5` | **Technical Debt**: Unused template routes remaining in source tree. |
