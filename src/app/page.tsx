import Link from 'next/link';
import { categories, getCategoryPosts, getAllPosts } from '@/lib/content';

// Category background image mapping
const categoryImages: Record<string, string> = {
  about: '/images/nature-medicine.jpg',
  body: '/images/medical-anatomy.jpg',
  diagnosis: '/images/tongue-diagnosis.jpg',
  conditions: '/images/peaceful.jpg',
  food: '/images/food-healing.jpg',
};

export default function Home() {
  const allPosts = getAllPosts().slice(0, 6);

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <img src="/images/nature-medicine.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-6xl sm:text-7xl mb-6 opacity-90 drop-shadow-lg">☯</span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl drop-shadow-lg">
            Ancient Wisdom for<br />Modern Wellness
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mt-6 leading-relaxed">
            Your trusted English-language guide to Traditional Chinese Medicine.
            Explore the Five Organs, understand your body constitution,
            and discover natural paths to balance.
          </p>
          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <Link
              href="/category/about"
              className="bg-white text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </Link>
            <Link
              href="/quiz"
              className="border-2 border-white/60 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-body">Explore TCM</h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto section-divider">Choose a topic to begin your journey into Traditional Chinese Medicine</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const categoryImg = categoryImages[cat.slug] || '/images/nature-medicine.jpg';
            const posts = getCategoryPosts(cat.slug);
            return (
              <Link
                key={cat.slug}
                href={'/category/' + cat.slug}
                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-72"
              >
                <img src={categoryImg} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <span className="text-4xl mb-3 block drop-shadow">{cat.icon}</span>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">{cat.name}</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-3">{cat.description}</p>
                  <span className="inline-flex items-center text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                    {posts.length} {posts.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== FEATURED ARTICLES ===== */}
      {allPosts.length > 0 && (
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-body">Featured Articles</h2>
              <p className="text-text-muted mt-3 max-w-xl mx-auto section-divider">In-depth guides to help you understand TCM principles</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post) => (
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-text-body px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary-light to-primary/20 flex items-center justify-center">
                      <span className="text-5xl opacity-60">{post.icon}</span>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-text-body group-hover:text-primary transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-xs text-text-muted">{post.readingTime} min read</span>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-1.5 flex-wrap">
                          {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="tag-pill text-[10px]">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== QUIZ CTA SECTION ===== */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src="/images/yoga-meditation.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/85 to-primary/75" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <span className="text-5xl block mb-4">🔮</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg sm:text-xl text-primary-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Take our Body Constitution Quiz to discover your TCM body type
              and get personalized recommendations tailored to you.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Start the Quiz
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-bg-warm px-4 py-8">
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
