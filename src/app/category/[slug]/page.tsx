import Link from 'next/link';
import { categories, getCategoryPosts } from '@/lib/content';
import { notFound } from 'next/navigation';

const categoryImages: Record<string, string> = {
  about: '/images/nature-medicine.jpg',
  body: '/images/medical-anatomy.jpg',
  diagnosis: '/images/tongue-diagnosis.jpg',
  conditions: '/images/peaceful.jpg',
  food: '/images/food-healing.jpg',
};

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
  const bgImage = categoryImages[slug] || '/images/nature-medicine.jpg';

  return (
    <div>
      {/* Category Hero Header */}
      <section className="category-header">
        <img src={bgImage} alt="" />
        <div className="overlay-bg" />
        <div className="content text-white">
          <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm mb-4 inline-flex items-center gap-1 w-fit">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <span className="text-5xl mb-3">{cat.icon}</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">{cat.name}</h1>
          <p className="text-white/80 text-lg mt-3 max-w-2xl">{cat.description}</p>
          <span className="inline-flex items-center text-sm text-white/70 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mt-4 w-fit">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={'/article/' + post.slug}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-1"
            >
              {post.cover ? (
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.cover}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary-light to-primary/20 flex items-center justify-center">
                  <span className="text-5xl opacity-60">{post.icon}</span>
                </div>
              )}
              <div className="p-5">
                <h2 className="font-serif text-lg font-semibold text-text-body group-hover:text-primary transition-colors leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed line-clamp-2">{post.description}</p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-xs text-text-muted">{post.readingTime} min read</span>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag-pill text-[10px]">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <span className="text-5xl block mb-4">📝</span>
            <p className="text-text-muted text-lg">Articles coming soon. Stay tuned!</p>
          </div>
        )}
      </section>

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
