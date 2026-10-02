# AI Agent Instructions & Operating Rules — Elite Prominence

This document establishes the mandatory instructions, architectural constraints, established coding conventions, and operational precautions that every AI assistant or automated agent must follow when working in this codebase.

---

## 1. Project Overview & Context

- **Repository**: Elite Prominence (`tareksec/Elite-Prominence`)
- **Brand / Entity**: Elite Prominence (`prominence.agency` / `www.prominence.agency`)
- **Domain**: Premier Executive Personal Branding & Digital Reputation Advisory firm for Fortune 500 CEOs, CHROs, enterprise founders, and senior executive consultants.
- **Origin / Heritage**: Migrated and customized from a financial/agency Next.js template (`start-app-dir`, originally `# Financer-nextjs-app`), transformed into a modern dual-tier platform:
  1. A high-converting public marketing and thought leadership platform (Next.js 13 App Router, hybrid static content architecture, bespoke executive aesthetic).
  2. A gated executive membership portal, moderation system, and admin operations console backed by Supabase.

---

## 2. Core Architecture Constraints

1. **Next.js 13.4.19 App Router with Experimental Server Actions**:
   - The project uses Next.js `13.4.19` with `experimental: { serverActions: true }` enabled in `next.config.js`.
   - **Constraint**: Do NOT refactor server actions into legacy API patterns or upgrade Next.js version to 14/15 without explicit user authorization and validation, as breaking changes in Server Actions, cookies API, and caching occurred between Next 13 and 14/15.
   - Do NOT introduce Pages Router patterns (`pages/` directory). The project is built exclusively around the `app/` directory.

2. **Dual-Tier Data Architecture**:
   - **Static Content**: Marketing pages, services, solutions personas, case studies, careers, and the published blog library are driven by statically exported JavaScript datasets in `lib/` (`blogData.js`, `servicesData.js`, `solutionsData.js`, `caseStudiesData.js`, `careersData.js`).
   - **Dynamic / Relational Data**: Profiles, user-submitted articles, user-submitted reviews, contact form leads, and live site settings are stored in Supabase PostgreSQL (`public.profiles`, `public.articles`, `public.reviews`, `public.contacts`, `public.site_settings`).
   - **Constraint**: Never attempt to query Supabase for static marketing copy or service tiers, and never hardcode dynamic user submissions into static files without using the defined publication scripts.

3. **Automated Daily Blog Publishing Pipeline**:
   - The automated publishing system relies on GitHub Actions (`.github/workflows/daily-publish.yml`) running `scripts/publish-daily.mjs` daily at 06:00 UTC (12:00 PM BST).
   - The script moves posts from `content/queue/` to `content/blog/` and **surgically mutates** `lib/blogData.js` using string search for the exact anchor: `export const BLOG_ARTICLES = [`.
   - **Constraint**: NEVER change or remove the exact string `export const BLOG_ARTICLES = [` from `lib/blogData.js`. Doing so silently breaks the automated daily publication pipeline.

4. **Path Aliasing**:
   - Configured in `jsconfig.json`: `"@/*": ["./*"]`.
   - Always import internal modules using the `@/` prefix (e.g., `@/components/layout/Layout`, `@/lib/supabase/client`, `@/lib/blogData`).

---

## 3. Existing Project Coding Conventions

*(These are observed, verified patterns actively present in the codebase)*

1. **Client vs. Server Component Demarcation**:
   - All interactive components (using hooks like `useState`, `useEffect`, `useRouter`, or browser DOM APIs) must explicitly declare `'use client'` as line 1.
   - Server Actions in `app/actions/` must declare `'use server'` as line 1.
   - Server pages and layouts (e.g., `app/layout.js`, `app/blog/[slug]/page.js`, `app/sitemap.js`, `app/robots.js`) omit `'use client'` to leverage Server-Side Rendering (SSR) and Static Site Generation (SSG) with `generateMetadata` and `generateStaticParams`.

2. **Supabase Client Segregation**:
   - **Browser Client**: `lib/supabase/client.js` exporting `getSupabaseBrowserClient()` using `@supabase/ssr` `createBrowserClient(url, anonKey)`. Use ONLY inside client components.
   - **Server Component Client**: `lib/supabase/server.js` exporting `getSupabaseServerClient()` using `@supabase/ssr` `createServerClient(url, anonKey, { cookies })`. Use in Server Components and Route Handlers.
   - **Admin Client**: `lib/supabase/admin.js` exporting `getSupabaseAdminClient()` using `@supabase/supabase-js` `createClient(url, serviceRoleKey)`. Use ONLY in server-side API routes (`app/api/admin/actions/route.js`) or server actions where elevated admin rights are strictly required.
   - **Graceful Fallbacks**: If Supabase environment variables are missing or point to placeholders (`your-project-id.supabase.co`), the codebase provides fallback mock data (`SAMPLE_COMMUNITY_MEMBERS`, setup warning banners) to prevent total application crashes.

3. **Styling & Assets**:
   - Global stylesheet chain in `app/layout.js`: Bootstrap (`public/assets/css/bootstrap.css`), AOS animations (`public/assets/css/aos.css`), base styling (`public/assets/css/style.css`), responsive overrides (`public/assets/css/responsive.css`), modern design tokens (`public/assets/css/modern-design.css`), and Swiper styles.
   - Component-specific styling (such as reading views) uses CSS Modules (e.g., `components/blog/BlogReading.module.css`).
   - SASS compilation source: `public/assets/scss/main.scss` compiling to `public/assets/css/main.css`.

4. **Component Naming & Structure**:
   - React components use PascalCase (e.g., `MlabHomePage.js`, `ArticleRenderer.js`, `Breadcrumb.js`).
   - Utility and helper modules use camelCase (e.g., `blogData.js`, `rateLimit.js`, `sanitize.js`, `whatsapp.js`).
   - Route segments follow Next.js App Router kebab-case folder conventions (e.g., `case-studies`, `how-it-works`, `privacy-policy`).

5. **Defense-in-Depth for Ingestion & Forms**:
   - Forms in `app/api/contact/route.js`, `app/signup/page.js`, and `app/dashboard/page.js` employ:
     * Honeypot fields (`honeypot`) that silently drop automated submissions.
     * Sliding-window rate limiting via `checkRateLimit()` in `lib/rateLimit.js`.
     * String sanitization via `sanitizeText()` and `sanitizeTitle()` in `lib/sanitize.js`.

---

## 4. Files & Modules Requiring Extra Caution

| File / Module | Reason for Caution |
|---|---|
| `lib/blogData.js` | Contains 1,300+ lines of editorial articles. Subject to automated regex/string mutation by `scripts/publish-daily.mjs`. Corrupting syntax breaks `/blog/[slug]` and automated deployments. |
| `scripts/publish-daily.mjs` | Automated publishing script executed by GitHub Actions. Contains parsing logic for frontmatter, markdown sections, and history tracking. |
| `.github/workflows/daily-publish.yml` | Production CI/CD workflow pushing daily commits directly to `main` with `[skip ci]`. |
| `middleware.js` | Enforces authentication and RBAC checks for `/dashboard` and `/admin`. Misconfiguration locks users or exposes administrative controls. |
| `app/actions/contact.js` | Direct entry point for executive business leads. Interacts with Supabase `contacts` table and external Brevo REST API. |
| `app/api/admin/actions/route.js` | Unrestricted database mutation engine for verified administrators. Uses elevated `SUPABASE_SERVICE_ROLE_KEY`. |
| `supabase/schema.sql` | Source of truth for database schema, RLS policies, indexes, and user creation triggers. |
| `next.config.js` | Contains domain redirects (`prominence.agency` -> `www.prominence.agency`), legal path redirects, remote image hosts, and experimental flags. |

---

## 5. Items Requiring Explicit User Approval Before Modification

1. **Domain & Routing Rules**:
   - Never modify or remove the permanent redirect from `prominence.agency` to `https://www.prominence.agency/:path*` in `next.config.js`.
   - Never change the legal route redirects (`/privacy` -> `/privacy-policy`, `/terms-of-service` -> `/terms`).

2. **Database Schemas & RLS**:
   - Never drop tables or relax Row-Level Security policies on `profiles`, `reviews`, `articles`, `contacts`, or `site_settings`.
   - Never alter the security definer functions (`handle_new_user()`, `is_admin()`) without explicit instructions.

3. **External Integration Credentials & Targets**:
   - Never alter the hardcoded target notification email (`prominenceelite@gmail.com`) in `app/actions/contact.js`.
   - Never alter default WhatsApp phone numbers (`8801645441584`) in `.env.local.example`, `lib/whatsapp.js`, or `supabase/schema.sql`.

4. **Package Dependencies & Tooling**:
   - Do NOT run dependency upgrades (e.g., `npm update` or upgrading Next.js / React) without explicit approval.

---

## 6. Security-Sensitive Areas

1. **Service Role Key Protection**:
   - `SUPABASE_SERVICE_ROLE_KEY` bypasses all Row-Level Security (RLS) policies.
   - It must **NEVER** be prefixed with `NEXT_PUBLIC_`.
   - It must **NEVER** be imported into any file marked `'use client'`.
   - It should only be accessed via `lib/supabase/admin.js` or server actions where client exposure is impossible.

2. **Admin Endpoint Authorization**:
   - In `app/api/admin/actions/route.js`, callers are verified by extracting the Bearer token or request cookies and confirming `role === 'admin'` from `public.profiles`.
   - Ensure that any new action added to this endpoint continues to check `verifyAdminCaller(request)`.

3. **In-Memory Rate Limiting**:
   - `lib/rateLimit.js` stores requests in a Node process `Map`. In serverless cloud environments (e.g., Vercel), instances do not share memory across lambdas. AI agents should be aware that this limiter is node-local.

---

## 7. Recommended Rules for Future AI Agents

*(Distinguished from existing codebase conventions; these are best-practice rules to enforce moving forward)*

- **Rule 1: Ground Slugs in Datasets**: When creating internal links or referencing services, solutions, case studies, or blog posts, verify against `lib/servicesData.js`, `lib/solutionsData.js`, `lib/caseStudiesData.js`, and `lib/blogData.js`.
- **Rule 2: Do Not Run Interactive CLI Commands**: Commands like `next lint` currently prompt interactively for ESLint setup. Run commands with non-interactive flags or avoid triggering interactive wizards.
- **Rule 3: Test Automation Compatibility**: Any change to `lib/blogData.js` must be validated against `scripts/publish-daily.mjs` to ensure the regex `export const BLOG_ARTICLES = [` continues to match.
- **Rule 4: Maintain Editorial Tone**: Copy across the site represents high-net-worth C-suite branding. Avoid conversational, casual, or generic marketing jargon ("supercharge your brand", "rockstar"). Maintain the established tone: "sovereign digital stature," "algorithmic due diligence," "institutional authority."
