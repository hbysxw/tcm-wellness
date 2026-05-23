'use client';
import ConstitutionQuiz from '@/components/ConstitutionQuiz';
import Link from 'next/link';

export default function QuizPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary py-16 sm:py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/yoga-meditation.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-5xl block mb-4">🔮</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Body Constitution Quiz
          </h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto leading-relaxed">
            Discover your TCM body type based on the 9 Constitution system.
            Answer 30 questions to get personalized insights and recommendations.
          </p>
          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            <span className="bg-white/15 text-white/90 text-sm px-3 py-1 rounded-full backdrop-blur-sm">~10 min</span>
            <span className="bg-white/15 text-white/90 text-sm px-3 py-1 rounded-full backdrop-blur-sm">30 questions</span>
            <span className="bg-white/15 text-white/90 text-sm px-3 py-1 rounded-full backdrop-blur-sm">9 constitution types</span>
          </div>
        </div>
      </section>

      {/* Quiz Component */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ConstitutionQuiz />
      </section>

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
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
