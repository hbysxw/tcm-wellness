import Link from 'next/link';
import { categories, getCategoryPosts } from '@/lib/content';

function CategoryCard({ cat }: { cat: typeof categories[0] }) {
  const posts = getCategoryPosts(cat.slug);
  return (
    <Link
      href={'/category/' + cat.slug}
      className="group bg-bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
    >
      <span className="text-3xl block mb-3">{cat.icon}</span>
      <h2 className="font-serif text-lg font-semibold text-text-body group-hover:text-primary transition-colors mb-2">
        {cat.name}
      </h2>
      <p className="text-sm text-text-muted leading-relaxed mb-3">{cat.description}</p>
      <span className="text-xs text-primary font-medium">{posts.length} articles</span>
    </Link>
  );
}

export default function Home() {
  const latestPosts = categories.flatMap(cat => getCategoryPosts(cat.slug)).slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-bg-warm py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-5xl block mb-6">☯</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text-body leading-tight mb-4">
            Ancient Wisdom for Modern Wellness
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mb-8">
            Your trusted English-language guide to Traditional Chinese Medicine. 
            Explore the Five Organs, understand your body constitution, 
            and discover natural paths to balance.
          </p>
          <Link
            href="/category/about"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            Start Learning
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl font-bold text-text-body mb-8 text-center">
          Explore TCM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} cat={cat} />
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      {latestPosts.length > 0 && (
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-text-body mb-8 text-center">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={'/article/' + post.slug}
                  className="bg-bg-warm rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <span className="text-2xl block mb-2">{post.icon}</span>
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{post.category}</p>
                  <h3 className="font-serif text-lg font-semibold text-text-body mb-2">{post.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">{post.description}</p>
                  <span className="text-xs text-text-muted">{post.readingTime} min read</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-primary-light text-lg mb-8">
            Take our Body Constitution Quiz to discover your TCM body type and get personalized recommendations.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-bg-warm transition-colors"
          >
            Start the Quiz
          </Link>
        </div>
      </section>

      {/* Footer disclaimer escalation */}
      <div className="bg-bg-warm px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-text-muted text-center leading-relaxed">
            <strong>Medical Disclaimer:</strong> The information on this website is for educational purposes only. 
            It is not a substitute for professional medical advice, diagnosis, or treatment. 
            Always consult a qualified healthcare provider with any health concerns.
          </p>
        </div>
      </div>
    </div>
  );
}
