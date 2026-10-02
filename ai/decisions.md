# Technical Decisions Log — Elite Prominence

This document chronologically records the key architectural, engineering, and infrastructure decisions identified within the codebase. Each decision includes the technical evidence, rationale, implementation details, affected files, and trade-offs.

---

### DEC-001: Repurposing a Commercial Next.js Template into an Executive Advisory Platform

- **Decision**: Adapt an existing financial/agency Next.js template (`start-app-dir`, originally `# Financer-nextjs-app`) to build the Elite Prominence executive branding platform rather than initiating from an empty scaffold.
- **Why it appears to have been made**: Accelerated time-to-market. The template provided pre-packaged UI elements, responsive navigation, layouts, CSS/SCSS design assets, and dynamic slider libraries (Swiper, Owl Carousel, WOW.js, AOS).
- **Current implementation**: The core marketing surfaces, homepage (`components/home/MlabHomePage.js`), blog reader (`app/blog/[slug]`), services, dashboard, and admin console have been rewritten to reflect the high-end executive branding aesthetic. However, numerous legacy template artifacts remain in the tree (e.g., `app/index-1` through `app/index-5`, `app/shop`, `app/cart`, `app/checkout`, `blog-details.html`).
- **Files / components affected**: `package.json`, `README.md`, `public/assets/`, `app/layout.js`, `components/layout/`, `components/sections/`.
- **Known trade-offs**:
  * *Advantage*: Rapid initial frontend layout and rich visual animations.
  * *Disadvantage*: Dead code baggage, unused CSS bundles in `public/assets/css/`, and orphaned routes that bloat repository size.
- **Evidence / source in project**:
  * `package.json` line 2: `"name": "start-app-dir"`
  * `README.md` lines 1–2: `# Financer-nextjs-app`
  * Unused legacy route folders: `app/shop/`, `app/cart/`, `app/checkout/`, `app/index-1/` through `app/index-5/`
  * Standalone legacy file: `blog-details.html` (56 KB in root directory)
- **Status of reasoning**: **Verified from project artifacts.**

---

### DEC-002: Next.js 13 App Router with Experimental Server Actions

- **Decision**: Adopt the Next.js App Router (`app/` directory) on version `13.4.19` with experimental Server Actions (`experimental: { serverActions: true }`).
- **Why it appears to have been made**: To leverage modern React Server Components (RSC), server-side metadata generation (`generateMetadata`), static path export (`generateStaticParams`), and colocate backend mutations (like contact form submission in `app/actions/contact.js`) directly within server actions without maintaining a standalone Node/Express backend.
- **Current implementation**: Configured in `next.config.js`. Form submissions in `app/actions/contact.js` use the `'use server'` directive. Dynamic routes (`app/blog/[slug]`, `app/services/[slug]`, etc.) utilize `generateStaticParams` and App Router conventions.
- **Files / components affected**: `next.config.js`, `app/actions/contact.js`, `app/layout.js`, `app/page.js`.
- **Known trade-offs**:
  * *Advantage*: Zero client-side API boilerplate for form execution; simplified SSR/SSG rendering.
  * *Disadvantage*: Next.js emits runtime warnings during builds (`warn You have enabled experimental feature (serverActions)... Experimental features are not covered by semver`). Next 13.4.19 Server Actions have subtle differences from the stabilized Next 14/15 implementations.
- **Evidence / source in project**:
  * `next.config.js` lines 3–5: `experimental: { serverActions: true }`
  * `package.json` line 24: `"next": "13.4.19"`
  * `app/actions/contact.js` line 1: `'use server'`
- **Status of reasoning**: **Verified from project artifacts.**

---

### DEC-003: Supabase as the Primary Backend-as-a-Service (Auth, Database, RLS)

- **Decision**: Adopt Supabase for managed PostgreSQL storage, user authentication, and Row-Level Security (RLS) instead of hosting a custom database or ORM layer (e.g., Prisma + PostgreSQL).
- **Why it appears to have been made**: Drastically minimizes backend infrastructure maintenance. Provides out-of-the-box user authentication (email/password), security-definer database triggers (`handle_new_user()`), and client-side querying secured by PostgreSQL RLS.
- **Current implementation**:
  * Schema defined in `supabase/schema.sql` (tables: `profiles`, `reviews`, `articles`, `contacts`, `site_settings`).
  * Database triggers automatically generate a `profiles` row upon `auth.users` insertion.
  * Separation of `@supabase/ssr` browser/server clients and elevated `@supabase/supabase-js` service-role admin clients.
- **Files / components affected**: `supabase/schema.sql`, `lib/supabase/client.js`, `lib/supabase/server.js`, `lib/supabase/admin.js`, `middleware.js`, `app/api/admin/actions/route.js`.
- **Known trade-offs**:
  * *Advantage*: Fine-grained security via RLS directly at the SQL level; rapid feature development for dashboard and auth.
  * *Disadvantage*: Vendor lock-in to Supabase-specific conventions; database setup must be executed manually in Supabase SQL editor using `supabase/schema.sql`.
- **Evidence / source in project**:
  * `supabase/schema.sql` (304 lines of PostgreSQL schema, triggers, and RLS policies)
  * `package.json` dependencies: `@supabase/ssr`, `@supabase/supabase-js`
- **Status of reasoning**: **Verified from project artifacts.**

---

### DEC-004: In-Code Static Datasets for Core Domain Pillars vs. Headless CMS

- **Decision**: Store primary marketing content (services, solutions, case studies, careers, published articles) as structured JavaScript objects in `lib/*Data.js` instead of utilizing a headless CMS (e.g., Sanity, Strapi, Contentful) or database tables.
- **Why it appears to have been made**: Guarantees zero latency on marketing routes, instant build-time SSG generation, high SEO audit scores, and total version control in Git without external API dependencies or recurring CMS subscription fees.
- **Current implementation**:
  * `lib/servicesData.js` (7 comprehensive executive reputation pillars)
  * `lib/solutionsData.js` (5 executive persona solutions: CEOs, CHROs, Founders, Senior Executives, Consultants)
  * `lib/caseStudiesData.js` (Executive proofs of concept)
  * `lib/careersData.js` (Retained executive ghostwriter and advisory mandates)
  * `lib/blogData.js` (1,300+ lines of editorial articles with structured headings, sections, and schemas)
- **Files / components affected**: `lib/servicesData.js`, `lib/solutionsData.js`, `lib/caseStudiesData.js`, `lib/careersData.js`, `lib/blogData.js`, `app/sitemap.js`, all dynamic routes (`[slug]`).
- **Known trade-offs**:
  * *Advantage*: Blazing-fast page load times, 100% uptime, zero database query overhead for public visitors.
  * *Disadvantage*: Adding or editing static marketing content requires code commits and build redeployment.
- **Evidence / source in project**:
  * `lib/blogData.js`, `lib/servicesData.js`, `lib/solutionsData.js`, `lib/caseStudiesData.js`, `lib/careersData.js`
- **Status of reasoning**: **Verified from project artifacts.**

---

### DEC-005: Automated Daily Blog Publishing Pipeline via GitHub Actions

- **Decision**: Automate daily blog post publication by executing a scheduled Node.js script via GitHub Actions that pulls posts from a markdown queue and directly updates git-tracked data files.
- **Why it appears to have been made**: Maintains a consistent daily publishing cadence for search engine indexation and Generative Engine Optimization (GEO) without requiring daily manual editorial intervention.
- **Current implementation**:
  * `.github/workflows/daily-publish.yml` triggers daily at `06:00 UTC` (12:00 PM BST).
  * Runs `scripts/publish-daily.mjs`, which:
    1. Reads the earliest `.mdx` or `.md` file from `content/queue/`.
    2. Writes it into `content/blog/` with frontmatter updated to today's date.
    3. Unlinks the file from `content/queue/`.
    4. Parses headings/sections and injects the new article object into `lib/blogData.js` at the anchor `export const BLOG_ARTICLES = [`.
    5. Appends metadata to `content/publish-history.json`.
    6. Commits and pushes changes to `main` with `[skip ci]`.
- **Files / components affected**: `.github/workflows/daily-publish.yml`, `scripts/publish-daily.mjs`, `content/queue/`, `content/blog/`, `content/publish-history.json`, `lib/blogData.js`.
- **Known trade-offs**:
  * *Advantage*: Completely autonomous daily publication; no server infrastructure needed.
  * *Disadvantage*: Relies on regex/string manipulation of JavaScript source code (`lib/blogData.js`); formatting anomalies in queue files can potentially corrupt the data file.
- **Evidence / source in project**:
  * `.github/workflows/daily-publish.yml`
  * `scripts/publish-daily.mjs`
  * `content/publish-history.json` (logs 9 daily publications between Sept 23, 2026 and Oct 1, 2026)
- **Status of reasoning**: **Verified from project artifacts.**

---

### DEC-006: Transactional Email Notifications via Brevo REST API

- **Decision**: Use Brevo (formerly Sendinblue) transactional REST API (`https://api.brevo.com/v3/smtp/email`) rather than direct SMTP connections for contact form notifications.
- **Why it appears to have been made**: Serverless runtime environments (such as Vercel) frequently encounter timeout, connection pooling, or firewall restrictions with persistent SMTP sockets. A stateless HTTPS POST request to Brevo is reliable, fast, and does not require third-party SMTP libraries like Nodemailer.
- **Current implementation**: Implemented in `app/actions/contact.js`. Upon form validation and insertion into the Supabase `contacts` table, an HTTP POST request is sent to `https://api.brevo.com/v3/smtp/email` sending an executive HTML notification to `prominenceelite@gmail.com`.
- **Files / components affected**: `app/actions/contact.js`, `.env.local.example`.
- **Known trade-offs**:
  * *Advantage*: Resilient across edge and serverless functions; includes branded HTML layout.
  * *Disadvantage*: Fails gracefully with warning if `BREVO_API_KEY` is missing; recipient email is hardcoded in `app/actions/contact.js`.
- **Evidence / source in project**:
  * `app/actions/contact.js` lines 104–118
- **Status of reasoning**: **Verified from project artifacts.**

---

### DEC-007: RBAC via Profiles Table and Next.js Edge Middleware

- **Decision**: Implement role-based access control with two tiers (`user` and `admin`) enforced at the routing edge via `middleware.js` and in the database via PostgreSQL RLS policies.
- **Why it appears to have been made**: To protect sensitive admin tools (moderation queue, CRM leads, user management, site settings) from unauthorized access while allowing authenticated executives to manage their personal profiles, articles, and reviews.
- **Current implementation**:
  * `middleware.js` intercepts all requests matching `/dashboard/:path*` and `/admin/:path*`.
  * Protects `/dashboard` by verifying active session via `@supabase/ssr`.
  * Protects `/admin` by querying `public.profiles` for `role === 'admin'`. Non-admins are redirected to `/dashboard?error=unauthorized_admin`.
  * `app/api/admin/actions/route.js` enforces double-verification by re-checking the caller's role using `verifyAdminCaller()`.
- **Files / components affected**: `middleware.js`, `supabase/schema.sql`, `app/api/admin/actions/route.js`, `app/admin/page.js`, `app/dashboard/page.js`.
- **Known trade-offs**:
  * *Advantage*: Strong defense-in-depth: checks occur at middleware, API route, and database levels.
  * *Disadvantage*: Middleware performs a database lookup on every `/admin` request, adding slight latency to admin navigation.
- **Evidence / source in project**:
  * `middleware.js` lines 48–77
  * `supabase/schema.sql` lines 16, 87–93
  * `app/api/admin/actions/route.js` lines 19–70
- **Status of reasoning**: **Verified from project artifacts.**

---

### DEC-008: Canonical Domain Normalization (Redirect to WWW)

- **Decision**: Permanently redirect non-www apex domain (`prominence.agency`) to `https://www.prominence.agency`.
- **Why it appears to have been made**: Standardizes SEO link equity, prevents duplicate content penalties in search engines, and ensures SSL certificates and cookie handling remain uniform.
- **Current implementation**: Configured via Next.js `redirects` in `next.config.js`. Matches any request where the `host` header is `prominence.agency` and redirects with `permanent: true` (HTTP 308) to `https://www.prominence.agency/:path*`.
- **Files / components affected**: `next.config.js`, `app/layout.js`, `app/sitemap.js`, `app/robots.js`.
- **Known trade-offs**:
  * *Advantage*: Search engines consolidate authority on the www subdomain.
  * *Disadvantage*: Local testing on custom hosts requires awareness of this redirect rule.
- **Evidence / source in project**:
  * `next.config.js` lines 23–35
- **Status of reasoning**: **Verified from project artifacts.**

---

### DEC-009: Hybrid Dynamic Site Configuration via `site_settings` Table

- **Decision**: Store select site-wide marketing configurations (WhatsApp phone number override, top announcement bar text/toggle) in a key-value Supabase table (`public.site_settings`) served via a cached API route (`/api/site-settings`).
- **Why it appears to have been made**: Permits non-developer team members to update high-frequency marketing announcements and communication coordinates directly from the Admin Portal (`/admin`) without code redeployments.
- **Current implementation**:
  * Table `public.site_settings` stores `key TEXT PRIMARY KEY` and `value JSONB`.
  * `app/api/site-settings/route.js` exposes public GET endpoint with `revalidate = 60` (cached 60 seconds).
  * `lib/whatsapp.js` checks `localStorage` cache (`ep_whatsapp_number`) populated from site settings.
- **Files / components affected**: `supabase/schema.sql`, `app/api/site-settings/route.js`, `app/admin/page.js`, `lib/whatsapp.js`, `components/elements/AnnouncementBanner.js`.
- **Known trade-offs**:
  * *Advantage*: Instant flexibility for marketing announcements without Vercel rebuilds.
  * *Disadvantage*: Additional client-side fetch or cached route dependency.
- **Evidence / source in project**:
  * `supabase/schema.sql` lines 276–302
  * `app/api/site-settings/route.js`
- **Status of reasoning**: **Verified from project artifacts.**

---

### DEC-010: In-Memory Sliding-Window Rate Limiter and Sanitization Layer

- **Decision**: Implement custom in-memory sliding-window rate limiting (`lib/rateLimit.js`) and regex-based string sanitization (`lib/sanitize.js`) for incoming API requests instead of adopting heavy third-party rate-limiting services (e.g., Upstash Redis) or DOMPurify.
- **Why it appears to have been made**: Lightweight, self-contained implementation with zero third-party dependencies or external service credentials required during initial development and self-hosted deployments.
- **Current implementation**:
  * `checkRateLimit(key, maxRequests, windowMs)` uses a JavaScript `Map` tracking timestamps with periodic garbage collection when size exceeds 2,000 entries.
  * `sanitizeText(input, maxLength)` strips HTML tags and non-printable control characters.
- **Files / components affected**: `lib/rateLimit.js`, `lib/sanitize.js`, `app/api/contact/route.js`.
- **Known trade-offs**:
  * *Advantage*: Zero external infrastructure cost or setup complexity.
  * *Disadvantage*: In serverless multi-region deployments, rate limits are isolated per lambda instance and reset on cold starts.
- **Evidence / source in project**:
  * `lib/rateLimit.js`
  * `lib/sanitize.js`
- **Status of reasoning**: **Verified from project artifacts.**
