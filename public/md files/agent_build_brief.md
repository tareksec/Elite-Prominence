# Elite Prominence — Website Build Brief (for coding agent)
*Target template: Financer Next.js Template — "Home Five" (index-5)
Reference: https://financer-nextjs-template.vercel.app/index-5*

---

## PASTE-READY PROMPT FOR YOUR AGENT

> I'm rebuilding the Financer Next.js template (currently showing "index-5" as the homepage) into the website for **Elite Prominence**, a personal branding agency for HR leaders and executives. This is a content and structure swap, not a redesign — keep the existing layout, grid, animations, and component structure. Replace all finance-industry copy, stats, and irrelevant sections with the Elite Prominence content in the attached files, following `agent_build_brief.md` section-by-section. Remove sections/routes that don't apply (shop, checkout, download-app, duplicate home pages) as listed in the brief. Do not invent testimonials, client logos, or stats that don't exist yet — use the "coming soon" placeholders specified instead.

---

## 1. Homepage (index-5) — Section-by-Section Mapping

| Template Section (current) | Action | Replace With |
|---|---|---|
| Header nav (Home/Services/Project/Pages/Shop/News/Contact + dropdowns) | Simplify | Home, About, Services, Pricing, Blog, Contact — drop Project, Shop, Team, duplicate Home variants |
| Logo | Placeholder | Text wordmark "Elite Prominence" until real logo is ready |
| Hero headline + subtext | Replace | Homepage Hero copy in `website_content.md` (H1: "Success Got You Here. Visibility Takes You Further.") |
| Hero CTA button | Replace | "Book a Strategy Call" |
| "4K+ users worldwide" + client logo row | Remove | No fabricated numbers/logos — remove until real client logos exist |
| "The Specialists in fund administration" (3 numbered features) | Replace | "One Agency. Three Pillars." — Digital HQ / Google & Reputation / Social Visibility (from `website_content.md`) |
| Stats row (Expert Team Members / Total Assets / Projects / Satisfaction %) | Remove | No real numbers yet — remove the stat bar entirely rather than fabricate |
| "Secure Retirement" side-image block | Repurpose | "The Problem" section copy (the visibility gap) |
| "Invest with Protential" side-image blocks (x2) | Repurpose | "What Changes in 6–12 Months" outcome section — flag images as needing replacement (finance charts → LinkedIn/website mockups) |
| "Provide quality Services" — 4 service cards | Replace | 3 Pillars as cards (Website / Google & Reputation / Social Visibility) + optional 4th card for Add-On Services |
| Testimonials section | Replace copy, keep layout | Use placeholder: "We're currently onboarding our first clients — testimonials coming soon." Do not fabricate quotes. |
| "Download Banking App" section | Remove entirely | Not applicable — no mobile app |
| FAQ section (5 finance FAQs) | Replace | FAQ content from `website_content.md` (time commitment, scope, timeline, fit) |
| "Latest Media Update" (3 blog cards) | Replace | Pick 3 titles from the Blog Post Bank in `content.md`, e.g. #1, #4, #7 — swap category tags to "Personal Branding / LinkedIn Strategy / Reputation" |
| Footer — Pages / Primary Pages link lists | Simplify | Home, About, Services, Pricing, Blog, FAQ, Contact — drop Careers, Portfolio, Shop links |
| Footer — social icons | Replace | Link to actual LinkedIn (linkedin.com/company/elite-prominence) and Facebook (facebook.com/EliteProminence) |
| Footer — contact info (address/phone) | Replace | hello@prominence.agency (drop the placeholder US address/phone unless a real one exists) |
| Footer — newsletter signup | Keep or remove | Optional; if kept, use: "Get personal branding insights in your inbox." |

---

## 2. Other Existing Routes → Update With

| Route | Content Source |
|---|---|
| `/about` | About Page copy in `website_content.md` |
| `/services` | Services Page copy in `website_content.md` |
| `/pricing` | Pricing Page copy (Starter/Growth/Premium tiers) in `website_content.md` |
| `/faq` | FAQ copy in `website_content.md` |
| `/contact` | Contact Page copy + suggested form fields in `website_content.md` |
| `/blog-grid`, `/blog-standard`, `/blog-details` | Titles + outlines from the Blog Post Bank in `content.md` — start with 2–3 fully written posts, mark the rest "Coming soon" |

## 3. Routes to Remove or Disable

- `/shop`, `/shop-details`, `/cart`, `/checkout` — no e-commerce
- `/projects`, `/projects-details` — not relevant now (could become "Case Studies" later once pilot clients complete work — hold off for now)
- `/team`, `/team-details` — optional; keep only if you want a founder profile page, otherwise remove
- `/index-2`, `/index-3`, `/index-4` (duplicate home variants) — keep only `index-5` as the live homepage; either delete the other route files or exclude them from the nav (flag this as a decision for whoever's coding — deleting is cleaner if none of the other variants are used elsewhere)

## 4. SEO

Apply the title tag + meta description for each page from the SEO table in `website_info.md`.

## 5. Guardrails

- This is a **copy and structure edit**, not a visual redesign — preserve the template's existing design system, spacing, and animations.
- **Never fabricate** client logos, testimonials, team headcounts, or stats. Every "coming soon" placeholder noted above exists because that asset genuinely doesn't exist yet (see the asset checklist in `website_info.md`).
- Keep the CTA label ("Book a Strategy Call") consistent across every page so it can be tracked as a single conversion goal later.

---

## Files to hand to the agent alongside this brief
1. `agent_build_brief.md` — this file (the section-by-section mapping)
2. `website_content.md` — all actual page copy
3. `website_info.md` — sitemap, SEO meta tags, keyword map, brand asset checklist
4. `content.md` — blog post bank (for the 3 blog cards + blog pages) and LinkedIn posts (not needed for the site build, but useful context on brand voice)
