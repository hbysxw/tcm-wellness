import { getPostData, getAllPostSlugs, categories, getAllPosts } from '@/lib/content';
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

  // Get related posts (same category, exclude current)
  const relatedPosts = getAllPosts()
    .filter(p => p.category === category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div>
      {/* Back breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href={'/category/' + category} className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {catName}
        </Link>
      </div>

      {/* Hero Image */}
      {post.cover && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: '21/9' }}>
            <img
              src={post.cover}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      )}

      {/* Article Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="mt-8">
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-primary bg-primary-light px-3 py-1 rounded-full">{catName}</span>
              <span className="text-sm text-text-muted">{post.readingTime} min read</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-body leading-tight">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-text-muted mt-4 text-lg leading-relaxed">{post.description}</p>
            )}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {post.tags.map(tag => (
                  <span key={tag} className="tag-pill text-xs">{tag}</span>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-text-body
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-md
              prose-strong:text-text-body
              prose-p:text-text-body prose-p:leading-relaxed
              prose-li:text-text-muted
              prose-blockquote:border-l-primary prose-blockquote:bg-primary-light prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-lg
              prose-table:shadow-sm prose-table:rounded-lg prose-table:overflow-hidden"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-white mt-16 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-text-body mb-8 text-center section-divider">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={'/article/' + rp.slug}
                  className="group bg-bg-warm rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  {rp.cover ? (
                    <div className="relative overflow-hidden h-40">
                      <img src={rp.cover} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  ) : (
                    <div className="h-40 bg-gradient-to-br from-primary-light to-primary/20 flex items-center justify-center">
                      <span className="text-4xl opacity-60">{rp.icon}</span>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-serif text-base font-semibold text-text-body group-hover:text-primary transition-colors leading-snug mb-1">
                      {rp.title}
                    </h3>
                    <span className="text-xs text-text-muted">{rp.readingTime} min read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-bg-warm rounded-xl p-6 border border-gray-200">
          <p className="text-xs text-text-muted leading-relaxed">
            <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice.
            Always consult a qualified healthcare professional before making changes to your health regimen.
          </p>
        </div>
      </div>
    </div>
  );
}
