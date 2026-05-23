'use client';
import { useState } from 'react';
import { quizQuestions, constitutionTypes, type ConstitutionType } from '@/lib/constitution-data';
import Link from 'next/link';

type Step = 'intro' | 'quiz' | 'result';

export default function ConstitutionQuiz() {
  const [step, setStep] = useState<Step>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [results, setResults] = useState<ConstitutionType[]>([]);

  const handleAnswer = (scoresToAdd: Record<string, number>) => {
    const newScores = { ...scores };
    for (const [key, val] of Object.entries(scoresToAdd)) {
      newScores[key] = (newScores[key] || 0) + val;
    }
    setScores(newScores);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results
      const sorted = Object.entries(newScores).sort(([, a], [, b]) => b - a);
      const maxScore = sorted[0][1];

      // Show all types with score >= 80% of max
      const topTypes = sorted
        .filter(([, score]) => score >= maxScore * 0.7)
        .map(([id]) => constitutionTypes.find((t) => t.id === id)!)
        .filter(Boolean);

      setResults(topTypes.length > 0 ? topTypes : [constitutionTypes.find((t) => t.id === sorted[0][0])!]);
      setStep('result');
    }
  };

  const reset = () => {
    setStep('intro');
    setCurrentQuestion(0);
    setScores({});
    setResults([]);
  };

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  if (step === 'intro') {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-5xl block mb-6">&#9775;</span>
        <h2 className="font-serif text-3xl font-bold text-text-body mb-4">
          Discover Your TCM Body Constitution
        </h2>
        <p className="text-text-muted text-lg leading-relaxed mb-6">
          This quiz will help you understand your unique body type according to Traditional Chinese Medicine.
          Answer 30 questions honestly - there are no right or wrong answers.
        </p>
        <div className="bg-primary-light rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold text-primary mb-2">Before you start:</h3>
          <ul className="text-sm text-text-muted space-y-2">
            <li>&bull; Choose the answer that best describes your typical state</li>
            <li>&bull; Think about how you feel most of the time, not just today</li>
            <li>&bull; The quiz takes about 5-8 minutes</li>
            <li>&bull; Results are for educational purposes only</li>
          </ul>
        </div>
        <button
          onClick={() => setStep('quiz')}
          className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
        >
          Start the Quiz
        </button>
      </div>
    );
  }

  if (step === 'result') {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-4xl block mb-3">&#127808;</span>
          <h2 className="font-serif text-3xl font-bold text-text-body mb-2">
            Your Results
          </h2>
          <p className="text-text-muted">
            Based on your answers, here are your dominant constitution type(s):
          </p>
        </div>

        <div className="space-y-6">
          {results.map((type) => (
            <div key={type.id} className="bg-bg-card rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{type.icon}</span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-text-body">{type.name}</h3>
                </div>
              </div>
              <p className="text-text-muted leading-relaxed mb-4">{type.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-sm text-text-body mb-2">Common Traits</h4>
                  <ul className="text-sm text-text-muted space-y-1">
                    {type.traits.map((t, i) => <li key={i}>&bull; {t}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-text-body mb-2">Recommended Actions</h4>
                  <ul className="text-sm text-text-muted space-y-1">
                    {type.advice.map((a, i) => <li key={i}>&bull; {a}</li>)}
                  </ul>
                </div>
              </div>

              <Link
                href={type.articleSlug}
                className="text-sm text-primary hover:underline font-medium"
              >
                Learn more about {type.name} constitution &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-amber-800">
            <strong>Important:</strong> This quiz is for educational purposes and is not a medical diagnosis.
            Consult a qualified TCM practitioner for a complete assessment.
          </p>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={reset}
            className="text-primary hover:underline text-sm"
          >
            Take the quiz again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-text-muted mb-2">
          <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: progress + '%' }} />
        </div>
      </div>

      {/* Question */}
      <div className="bg-bg-card rounded-lg p-6 shadow-sm border border-gray-100">
        <p className="text-sm text-primary font-medium mb-3">Question {currentQuestion + 1}</p>
        <h3 className="font-serif text-xl font-semibold text-text-body mb-6">
          {question.text}
        </h3>

        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.score)}
              className="w-full text-left p-4 rounded-md border border-gray-200 hover:border-primary hover:bg-primary-light transition-all duration-200 text-sm text-text-body font-medium"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}