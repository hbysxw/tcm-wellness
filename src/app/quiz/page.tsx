import Link from 'next/link';
import ConstitutionQuiz from '@/components/ConstitutionQuiz';

export const metadata = {
  title: 'TCM Body Constitution Quiz - Discover Your Type',
  description: 'Take our free TCM Body Constitution Quiz to discover your unique body type. Answer 30 questions and get personalized wellness recommendations.',
};

export default function QuizPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-sm text-primary hover:underline">&larr; Back to Home</Link>
      <div className="mt-8">
        <ConstitutionQuiz />
      </div>
    </div>
  );
}