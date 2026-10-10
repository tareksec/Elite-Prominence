#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUEUE_DIR = path.join(ROOT, 'content', 'queue');
const BLOG_DIR = path.join(ROOT, 'content', 'blog');
const BLOG_DATA_FILE = path.join(ROOT, 'lib', 'blogData.js');
const HISTORY_FILE = path.join(ROOT, 'content', 'publish-history.json');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };
  const rawMeta = match[1];
  const body = match[2];
  const meta = {};
  for (const line of rawMeta.split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (kv) {
      const key = kv[1].trim();
      let val = kv[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      } else if (val.startsWith('[') && val.endsWith(']')) {
        try { val = JSON.parse(val); } catch {}
      } else if (val === 'true') {
        val = true;
      } else if (val === 'false') {
        val = false;
      }
      meta[key] = val;
    }
  }
  return { meta, body };
}

function parseMarkdownToSections(body) {
  const lines = body.split(/\r?\n/);
  const headings = [];
  const sections = [];
  let currentSection = null;
  let introParagraphs = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const hMatch = trimmed.match(/^(#{2,3})\s+(.*)$/);
    if (hMatch) {
      const level = hMatch[1].length;
      const text = hMatch[2].replace(/\*\*/g, '').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ id, text, level });
      if (currentSection) {
        sections.push(currentSection);
      } else if (introParagraphs.length > 0) {
        sections.push({
          id: 'executive-summary',
          heading: 'Executive Overview',
          level: 2,
          paragraphs: introParagraphs
        });
      }
      currentSection = { id, heading: text, level, paragraphs: [] };
    } else if (currentSection) {
      if (trimmed.length > 0 && !trimmed.startsWith('#')) {
        currentSection.paragraphs.push(trimmed);
      }
    } else {
      if (trimmed.length > 0 && !trimmed.startsWith('#')) {
        introParagraphs.push(trimmed);
      }
    }
  }
  if (currentSection) sections.push(currentSection);
  return { headings, sections };
}

function cleanInlineMarkdown(value) {
  return value
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .trim();
}

function extractKeyTakeaways(body) {
  const match = body.match(/^##\s+(?:Executive Answer|Direct Answer|Key Takeaways|Quick Answer)\s*\r?\n([\s\S]*?)(?=^##\s+|$)/im);
  if (!match) return [];

  return match[1]
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line) || /^\d+[.)]\s+/.test(line))
    .map((line) => line.replace(/^([-*]|\d+[.)])\s+/, ''))
    .map(cleanInlineMarkdown)
    .filter(Boolean);
}

function extractFaqs(body) {
  const sectionMatch = body.match(/^##\s+(?:Frequently Asked(?: Executive)? Questions|FAQs?)\s*\r?\n([\s\S]*?)(?=^##\s+|$)/im);
  if (!sectionMatch) return [];

  const faqSection = sectionMatch[1];
  const questionMatches = [...faqSection.matchAll(/^###\s+(.+)\s*\r?\n([\s\S]*?)(?=^###\s+|$)/gim)];
  return questionMatches
    .map((match) => ({
      question: cleanInlineMarkdown(match[1]),
      answer: cleanInlineMarkdown(match[2].replace(/\r?\n+/g, ' ')),
    }))
    .filter((faq) => faq.question && faq.answer);
}

async function run() {
  console.log('=== Daily Post Publisher (Elite-Prominence) ===');
  console.log(`Current Time (UTC): ${new Date().toISOString()}`);

  if (!fs.existsSync(QUEUE_DIR)) {
    console.log('Queue directory does not exist.');
    process.exit(0);
  }

  const files = fs.readdirSync(QUEUE_DIR)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .sort();

  if (files.length === 0) {
    console.log('No pending posts in queue. Nothing to publish today.');
    process.exit(0);
  }

  const targetFile = files[0];
  const sourcePath = path.join(QUEUE_DIR, targetFile);
  const rawContent = fs.readFileSync(sourcePath, 'utf8');

  const publishIso = new Date().toISOString();
  const todayStr = publishIso.split('T')[0];
  const { meta, body } = parseFrontmatter(rawContent);

  const cleanSlug = (meta.slug || targetFile.replace(/^[0-9]+-/, '').replace(/\.mdx?$/, '')).toLowerCase();
  const destFileName = `${cleanSlug}.mdx`;
  const destFilePath = path.join(BLOG_DIR, destFileName);

  const updatedFrontmatter = [
    '---',
    `title: ${JSON.stringify(meta.title || '')}`,
    `description: ${JSON.stringify(meta.description || '')}`,
    `slug: ${JSON.stringify(cleanSlug)}`,
    `date: "${todayStr}"`,
    `category: ${JSON.stringify(meta.category || 'Executive Branding')}`,
    `tags: ${JSON.stringify(meta.tags || [])}`,
    `primaryKeyword: ${JSON.stringify(meta.primaryKeyword || '')}`,
    `author: ${JSON.stringify(meta.author || 'Tarek Chowdhury')}`,
    `heroImage: ${JSON.stringify(meta.heroImage || meta.image || '')}`,
    `image: ${JSON.stringify(meta.heroImage || meta.image || '')}`,
    `readTime: ${JSON.stringify(meta.readTime || '7 min read')}`,
    `featured: ${meta.featured ? true : false}`,
    '---',
    '',
    body.trim(),
    ''
  ].join('\n');

  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.writeFileSync(destFilePath, updatedFrontmatter, 'utf8');
  console.log(`Published MDX to content/blog/${destFileName}`);

  // Remove from queue
  fs.unlinkSync(sourcePath);
  console.log(`Removed ${targetFile} from queue. Remaining in queue: ${files.length - 1}`);

  // Inject into lib/blogData.js if not already present
  if (fs.existsSync(BLOG_DATA_FILE)) {
    let blogDataContent = fs.readFileSync(BLOG_DATA_FILE, 'utf8');
    if (!blogDataContent.includes(`slug: '${cleanSlug}'`) && !blogDataContent.includes(`slug: "${cleanSlug}"`)) {
      const { headings, sections } = parseMarkdownToSections(body);
      const keyTakeaways = extractKeyTakeaways(body);
      const faqs = extractFaqs(body);
      const articleObj = {
        slug: cleanSlug,
        title: meta.title || '',
        excerpt: meta.description || '',
        category: meta.category || 'Executive Branding',
        publishDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        datePublished: publishIso,
        dateModified: publishIso,
        readTime: meta.readTime || '7 min read',
        wordCount: body.split(/\s+/).length,
        primaryKeyword: meta.primaryKeyword || '',
        tags: meta.tags || [],
        heroImage: meta.heroImage || meta.image || '',
        author: {
          name: 'Tarek Chowdhury',
          title: 'Founder & Executive Brand Advisor at Elite Prominence',
          initials: 'TC',
          avatar: '/assets/images/elite/tarek-portrait.jpg',
          bio: 'Advising CHROs, VP HRs, and executive consultants on building authoritative digital presence, personal websites, and Google visibility without becoming full-time content creators.',
          linkedinUrl: 'https://www.linkedin.com/in/mdtarek404/'
        },
        headings,
        sections,
        keyTakeaways,
        faqs
      };

      const insertionAnchor = 'export const BLOG_ARTICLES = [';
      if (blogDataContent.includes(insertionAnchor)) {
        const replacement = `${insertionAnchor}\n  ${JSON.stringify(articleObj, null, 2)},`;
        blogDataContent = blogDataContent.replace(insertionAnchor, replacement);
        fs.writeFileSync(BLOG_DATA_FILE, blogDataContent, 'utf8');
        console.log('Appended article to BLOG_ARTICLES in lib/blogData.js');
      }
    }
  }

  // Update history
  let history = [];
  try {
    if (fs.existsSync(HISTORY_FILE)) {
      history = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
    }
  } catch {}
  history.push({
    title: meta.title,
    slug: cleanSlug,
    publishedAt: new Date().toISOString(),
    remainingInQueue: files.length - 1
  });
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf8');

  console.log(`Successfully published "${meta.title}". ${files.length - 1} posts remaining in queue.`);
}

run().catch((err) => {
  console.error('Fatal error in daily publisher:', err);
  process.exit(1);
});
