import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDir = path.join(process.cwd(), 'src', 'content');

export interface PostData {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  icon: string;
  readingTime: number;
  contentHtml: string;
  order?: number;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: CategoryInfo[] = [
  { slug: 'about', name: 'What Is TCM', description: 'Core theories and philosophy of Traditional Chinese Medicine', icon: '?' },
  { slug: 'body', name: 'Your Body in TCM', description: 'Organs, constitutions, and how they work together', icon: '??' },
  { slug: 'diagnosis', name: 'Diagnostic Tools', description: 'Tongue reading, pulse, and other diagnostic methods', icon: '??' },
  { slug: 'conditions', name: 'Conditions A-Z', description: 'Common health issues through the lens of TCM', icon: '??' },
  { slug: 'food', name: 'Food as Medicine', description: 'Energetics of food and seasonal eating', icon: '??' },
];

// Get all content file paths organized by category
export function getAllPostSlugs(): { category: string; slug: string }[] {
  const slugs: { category: string; slug: string }[] = [];
  
  for (const category of categories) {
    const dir = path.join(contentDir, category.slug);
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      slugs.push({
        category: category.slug,
        slug: file.replace(/\.md$/, ''),
      });
    }
  }
  
  return slugs;
}

export function getCategoryPosts(categorySlug: string): PostData[] {
  const dir = path.join(contentDir, categorySlug);
  if (!fs.existsSync(dir)) return [];
  
  const posts: PostData[] = [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const post = getPostData(categorySlug, slug);
    if (post) posts.push(post);
  }
  
  // Sort by order if available, then by title
  posts.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
    return a.title.localeCompare(b.title);
  });
  
  return posts;
}

export function getPostData(category: string, slug: string): PostData | null {
  const filePath = path.join(contentDir, category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();
  
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  
  return {
    slug: `${category}/${slug}`,
    title: data.title || slug.replace(/-/g, ' '),
    description: data.description || '',
    category,
    tags: data.tags || [],
    icon: data.icon || '??',
    readingTime,
    contentHtml,
    order: data.order,
  };
}

export function getAllPosts(): PostData[] {
  const posts: PostData[] = [];
  for (const category of categories) {
    posts.push(...getCategoryPosts(category.slug));
  }
  return posts;
}
