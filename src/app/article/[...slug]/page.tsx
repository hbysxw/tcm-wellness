import { getPostData, getAllPostSlugs, categories } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(s => ({ slug: [s.category, s.slug] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  if (slug.length < 2) return { title: 'TCM Wellness' };
  const post = getPostData(slug[0], slug.slice(1).join('/'));
  if (!post) return { title: 'TCM Wellness' };
  return {
    title: post.title + ' - TCM Wellness',
    description: post.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  if (slug.length < 2) notFound();

  const [category, ...rest] = slug;
  const postSlug = rest.join('/');

  const post = getPostData(category, postSlug);
  if (!post) notFound();

  const catName = categories.find(c => c.slug === category)?.name || category;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href={'/category/' + category} className="text-sm text-primary hover:underline">
        &larr; Back to {catName}
      </Link>

      <article className="mt-8">
        <header className="mb-8">
          <span className="text-4xl block mb-3">{post.icon}</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-text-body leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-text-muted">
            <span>{post.readingTime} min read</span>
            {post.tags.length > 0 && (
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-primary-light text-primary px-2 py-0.5 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <p className="text-text-muted mt-4 text-lg leading-relaxed">{post.description}</p>
        </header>

        <div
          className="prose prose-gray max-w-none
            prose-headings:font-serif prose-headings:text-text-body
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-lg
            prose-strong:text-text-body
            prose-li:text-text-muted"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <div className="border-t border-gray-200 mt-12 pt-8 text-center">
        <p className="text-xs text-text-muted leading-relaxed">
          <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice.
          Always consult a qualified healthcare professional.
        </p>
      </div>
    </div>
  );
}