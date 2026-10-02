# Known Issues, Risks & Technical Debt — Elite Prominence

This document catalogs all verified issues, technical risks, architectural debt, and limitations present in the codebase. Issues are ranked by operational severity.

> **CRITICAL RULE**: Do not attempt to fix any of these issues during documentation or baseline setup tasks. This document serves as a factual audit and roadmap for future authorized engineering tasks.

---

## Issue Summary Matrix

| ID | Category | Severity | Area | Status |
|---|---|---|---|---|
| **ISSUE-001** | Tooling / CI | **MEDIUM** | Linting & ESLint | Open |
| **ISSUE-002** | Framework | **MEDIUM** | Next.js Server Actions | Open |
| **ISSUE-003** | Automation / Reliability | **HIGH** | Daily Publishing Pipeline | Open |
| **ISSUE-004** | Security / Configuration | **MEDIUM** | Hardcoded Email & Phone | Open |
| **ISSUE-005** | Security / Scalability | **MEDIUM** | In-Memory Rate Limiting | Open |
| **ISSUE-006** | Technical Debt | **MEDIUM** | Legacy Template Code & Routes | Open |
| **ISSUE-007** | Performance / CWV | **LOW** | Multiple Animation Engines | Open |
| **ISSUE-008** | Content Integrity | **LOW** | Mock Personas in Schema & Directory | Open |
| **ISSUE-009** | SEO Optimization | **LOW** | Title Length & Thin Content Flags | Open |

---

### ISSUE-001: Missing ESLint Configuration Prompts Interactively on `npm run lint`

- **Issue**: There is no `.eslintrc.json`, `.eslintrc.js`, or ESLint configuration file in the project root.
- **Severity**: **MEDIUM**
- **Evidence**: Executing `npm run lint` (`next lint`) immediately outputs:
  ```text
  ? How would you like to configure ESLint? https://nextjs.org/docs/basic-features/eslint
  ❯ Strict (recommended)
    Base
    Cancel
  ```
- **Affected Area**: Project tooling, CI/CD pipelines, developer scripts.
- **Current Behavior**: The command hangs indefinitely waiting for interactive terminal input from a user.
- **Expected Behavior**: `npm run lint` should run headlessly and return a zero or non-zero exit code with diagnostic reports.
- **Possible Impact**: Any automated CI/CD workflow running `npm run lint` will stall until process timeout.
- **Status**: Open.
- **Recommended Next Investigation / Fix**: Create a standard `.eslintrc.json` extending `"next/core-web-vitals"` without modifying other dependencies.

---

### ISSUE-002: Experimental Server Actions Warning in Next.js 13.4.19

- **Issue**: The project relies on Next.js 13.4.19 with `experimental: { serverActions: true }`.
- **Severity**: **MEDIUM**
- **Evidence**: `next.config.js` lines 3–5:
  ```javascript
  experimental: {
      serverActions: true,
  },
  ```
  Runtime warning on build:
  ```text
  - warn You have enabled experimental feature (serverActions) in next.config.js.
  - warn Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
  ```
- **Affected Area**: Form processing (`app/actions/contact.js`), Next.js runtime.
- **Current Behavior**: Server Actions operate in experimental mode. The API signatures and behavior for headers, cookies, and cache revalidation in 13.4 differ from modern Next.js 14 and 15 LTS releases.
- **Expected Behavior**: Production frameworks should ideally run on stable, non-experimental APIs.
- **Possible Impact**: Edge-case behavior during cookie manipulation, potential breaking changes if dependencies are updated.
- **Status**: Open.
- **Recommended Next Investigation / Fix**: Test an upgrade path to Next.js 14 LTS in an isolated branch with user approval, which stabilizes Server Actions and resolves this warning.

---

### ISSUE-003: Fragile String-Mutation Dependency in Daily Publishing Automation

- **Issue**: The automated daily publishing script (`scripts/publish-daily.mjs`) updates `lib/blogData.js` by performing a raw string replacement against the exact anchor `export const BLOG_ARTICLES = [`.
- **Severity**: **HIGH**
- **Evidence**: `scripts/publish-daily.mjs` lines 164–171:
  ```javascript
  const insertionAnchor = 'export const BLOG_ARTICLES = [';
  if (blogDataContent.includes(insertionAnchor)) {
    const replacement = `${insertionAnchor}\n  ${JSON.stringify(articleObj, null, 2)},`;
    blogDataContent = blogDataContent.replace(insertionAnchor, replacement);
    fs.writeFileSync(BLOG_DATA_FILE, blogDataContent, 'utf8');
  }
  ```
- **Affected Area**: Automated content pipeline (`.github/workflows/daily-publish.yml`, `scripts/publish-daily.mjs`, `lib/blogData.js`).
- **Current Behavior**: If an engineer or linter formats `lib/blogData.js` (e.g., adding a newline, renaming the export, or reordering statements), the anchor check fails silently, the article is omitted from the dataset, yet the post is unlinked from `content/queue/`. Furthermore, if an incoming post contains unexpected formatting, injecting stringified JSON directly into JavaScript source code can cause syntax errors that crash the production build.
- **Expected Behavior**: Content should be ingested dynamically at build time (e.g., reading all `.mdx` files from `content/blog/` via Node `fs` inside `getAllArticles()`) rather than mutating source code files in Git.
- **Possible Impact**: Silent failure of automated daily publishing, or direct corruption of `lib/blogData.js` on `main`, resulting in build failures on production deployments.
- **Status**: Open.
- **Recommended Next Investigation / Fix**: Refactor `lib/blogData.js` to either load MDX files dynamically from `content/blog/` using `gray-matter` or `next-mdx-remote`, or compile a dedicated `content/blog.json` data file rather than mutating JavaScript source code.

---

### ISSUE-004: Hardcoded Notification Email and Fallback Phone Numbers

- **Issue**: Contact form lead notifications are sent to a hardcoded email address, and fallback WhatsApp numbers are hardcoded in multiple files.
- **Severity**: **MEDIUM**
- **Evidence**:
  * `app/actions/contact.js` line 113:
    ```javascript
    to: [{ email: 'prominenceelite@gmail.com', name: 'Admin' }],
    ```
  * `lib/whatsapp.js` line 5:
    ```javascript
    export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801645441584'
    ```
  * `supabase/schema.sql` line 299:
    ```sql
    ('whatsapp_number', '"8801645441584"'::jsonb),
    ```
- **Affected Area**: Lead notifications, WhatsApp click-to-chat integration.
- **Current Behavior**: If the agency changes its administrative email, code in `app/actions/contact.js` must be manually modified. In non-production testing environments, test inquiries will still be emailed to the production Gmail inbox.
- **Expected Behavior**: The lead recipient email should be configured via an environment variable (`ADMIN_NOTIFICATION_EMAIL` or `LEADS_RECIPIENT_EMAIL`) with a safe staging fallback.
- **Possible Impact**: Misrouted or dropped leads if the Gmail address is altered or deprecated; inability to configure different notification recipients for staging vs. production.
- **Status**: Open.
- **Recommended Next Investigation / Fix**: Introduce `ADMIN_NOTIFICATION_EMAIL` in `.env.local.example` and update `app/actions/contact.js` to read from `process.env.ADMIN_NOTIFICATION_EMAIL`.

---

### ISSUE-005: Ephemeral In-Memory Rate Limiting in Serverless Environments

- **Issue**: The rate limiter in `lib/rateLimit.js` utilizes an in-memory JavaScript `Map` to track request timestamps.
- **Severity**: **MEDIUM**
- **Evidence**: `lib/rateLimit.js` lines 5–9:
  ```javascript
  const rateLimitMap = new Map()
  export function checkRateLimit(key, maxRequests = 5, windowMs = 60 * 1000) { ... }
  ```
- **Affected Area**: `app/api/contact/route.js`.
- **Current Behavior**: In serverless hosting environments (e.g., Vercel, AWS Lambda), each function invocation may spawn on a distinct serverless instance. Process memory is ephemeral and not shared across concurrent instances.
- **Expected Behavior**: A distributed rate limiter (such as Upstash Redis or Supabase PostgreSQL table/RPC counter) should track IP request frequencies centrally.
- **Possible Impact**: An automated attacker can bypass the 5 requests / 10 minutes limit by cycling requests across multiple lambda executions, potentially exhausting Brevo API quotas or spamming the `contacts` table.
- **Status**: Open.
- **Recommended Next Investigation / Fix**: If spam becomes an issue, connect `@upstash/ratelimit` via Upstash Redis or use a lightweight Supabase table/function for request counting.

---

### ISSUE-006: Substantial Legacy Template Technical Debt & Unused Routes

- **Issue**: Dozens of legacy routes, jQuery-dependent libraries, and orphaned assets from the commercial "Financer" template remain in the codebase.
- **Severity**: **MEDIUM**
- **Evidence**:
  * Unused App Router directories: `app/index-1` through `app/index-5`, `app/shop`, `app/shop-details`, `app/cart`, `app/checkout`, `app/404`, `app/projects`, `app/projects-details`, `app/services-2`, `app/team-details`, `app/testimonials-2`.
  * `blog-details.html`: 56 KB static template file stored in root directory.
  * `package.json` contains unused legacy dependencies: `bootstrap-touchspin` (`^4.7.3`), `isotope-layout` (`^3.0.6`), `owl.carousel` (`^2.3.4`), `react-owl-carousel` (`^2.3.3`), `react-curved-text` (`^2.0.2`), `wowjs` (`^1.1.3`).
  * `README.md` is unpopulated (`# Financer-nextjs-app`).
- **Affected Area**: Repository bloat, bundle size, security audit attack surface, developer onboarding.
- **Current Behavior**: Legacy code sits idle in the repository; unused packages are installed into `node_modules`.
- **Expected Behavior**: The repository should only contain active code relevant to Elite Prominence.
- **Possible Impact**: Increased installation times, potential vulnerability alerts from unmaintained dependencies (e.g., jQuery-era libraries), and confusion regarding authoritative routes.
- **Status**: Open.
- **Recommended Next Investigation / Fix**: Request user authorization to prune unused legacy routes (`app/shop`, `app/cart`, `app/index-1`..`5`) and uninstall unused npm packages.

---

### ISSUE-007: Competing Animation Engines Loaded Simultaneously

- **Issue**: The application initializes multiple disparate animation and motion libraries concurrently.
- **Severity**: **LOW**
- **Evidence**:
  * `app/layout.js` imports `<Aos_Animation/>` and `<SmoothScroll/>` (Lenis).
  * `components/layout/Layout.js` dynamically requires and initializes `wowjs` (`window.wow = new WOW.WOW(...)`).
  * `package.json` installs `framer-motion`, `gsap`, `aos`, `wowjs`, and `lenis`.
- **Affected Area**: Client-side runtime performance, Core Web Vitals (TBT / Total Blocking Time, LCP).
- **Current Behavior**: Browser clients load and execute scripts for AOS, WOW.js, Lenis, and CSS animations on every page navigation.
- **Expected Behavior**: A single unified animation strategy (e.g., Framer Motion or lightweight CSS transitions) should handle page reveals.
- **Possible Impact**: Slower mobile page loading, increased JavaScript bundle footprint.
- **Status**: Open.
- **Recommended Next Investigation / Fix**: Remove the `wowjs` dependency and consolidate on Lenis + lightweight CSS or Framer Motion.

---

### ISSUE-008: Mock Personas Present in Homepage Schema and Community Directory

- **Issue**: Homepage structured data and fallback community directory data cite fictional or representative persona names ("Eleanor Vance", "Marcus Sterling", "Dr. Aris Thorne").
- **Severity**: **LOW**
- **Evidence**:
  * `app/page.js` lines 76–100 (`Review` schema author: "Eleanor Vance, Chief Human Resources Officer", "Marcus Sterling, Managing Director & Board Advisor").
  * `app/community/page.js` lines 9–58 (`SAMPLE_COMMUNITY_MEMBERS` uses identical names and roles as fallbacks).
- **Affected Area**: Google Rich Results, Schema.org verification, social proof integrity.
- **Current Behavior**: Search engine crawlers parse the review schema referencing these fictional personas.
- **Expected Behavior**: Structured review data should either represent verified, real-world executive clients with permission, or be clearly marked/anonymized to prevent Google schema quality guidelines violations.
- **Possible Impact**: Risk of manual schema action if Google audits the `Review` structured data and flags unverified reviews.
- **Status**: Open.
- **Recommended Next Investigation / Fix**: Audit reviews against verified client endorsements, update schema to link to real verified case studies or remove the synthetic `Review` schema block.

---

### ISSUE-009: Documented SEO Flags from Crawl Audits

- **Issue**: Crawler audit reports in `SEO/` document specific on-page SEO deficiencies.
- **Severity**: **LOW**
- **Evidence**:
  * `SEO/prominence.agency_title_element_is_too_long_20260907.csv`: 20+ URLs flagged for `<title>` tags exceeding the recommended 60-character limit.
  * `SEO/prominence.agency_page_has_a_low_word_count_20260907.csv`: Thin content flagged on utility landing pages.
  * `SEO/prominence.agency_text_html_ratio_20260907.csv`: Low text-to-HTML ratio caused by verbose template DOM wrappers.
- **Affected Area**: Search engine indexation and SERP display.
- **Current Behavior**: Lengthy titles are truncated with ellipses in Google search results.
- **Expected Behavior**: Primary target keywords appear in the first 55 characters of title tags; templates maintain clean semantic HTML ratios.
- **Possible Impact**: Sub-optimal click-through rates (CTR) from search engine result pages.
- **Status**: Open.
- **Recommended Next Investigation / Fix**: Perform a title tag optimization pass across all pages listed in the audit CSV to ensure title tags conform to the 50–60 character threshold.
