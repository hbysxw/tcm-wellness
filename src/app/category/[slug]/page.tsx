import Link from 'next/link';
import { categories, getCategoryPosts } from '@/lib/content';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) return { title: 'TCM Wellness' };
  return { title: cat.name + ' - TCM Wellness', description: cat.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) notFound();

  const posts = getCategoryPosts(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-sm text-primary hover:underline">&larr; Back to Home</Link>
      <div className="mt-6 mb-10">
        <span className="text-4xl block mb-3">{cat.icon}</span>
        <h1 className="font-serif text-3xl font-bold text-text-body">{cat.name}</h1>
        <p className="text-text-muted mt-2">{cat.description}</p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={'/article/' + post.slug}
            className="block bg-bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0 mt-1">{post.icon}</span>
              <div>
                <h2 className="font-serif text-xl font-semibold text-text-body hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">{post.description}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs text-text-muted">{post.readingTime} min read</span>
                  {post.tags.length > 0 && (
                    <div className="flex gap-2">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}