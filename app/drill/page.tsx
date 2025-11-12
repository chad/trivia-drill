'use client';

import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import { Question } from '@/types';

interface SessionResult {
  questionId: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string;
}

export default function DrillPage() {
  const { user, token, isLoading } = useAuth();
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sessionResults, setSessionResults] = useState<SessionResult[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (token) {
      fetchQuestions();
    }
  }, [token]);

  async function fetchQuestions() {
    try {
      const response = await fetch('/api/questions?type=daily-drill&count=15');

      if (response.ok) {
        const data = await response.json();
        setQuestions(data.data.questions);
        setStartTime(Date.now());
      } else {
        console.error('Failed to load questions');
      }
    } catch (err) {
      console.error('Failed to load questions:', err);
    } finally {
      setLoadingQuestions(false);
    }
  }

  async function handleSubmitAnswer() {
    if (!userAnswer.trim()) return;

    const currentQuestion = questions[currentIndex];
    const responseTime = Date.now() - startTime;

    // Simple answer checking (case-insensitive, trim whitespace)
    const correct = userAnswer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase();
    setIsCorrect(correct);
    setShowFeedback(true);
    setIsSubmitting(true);

    // Submit to backend
    try {
      await fetch('/api/progress/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          questionId: currentQuestion.id,
          category: currentQuestion.category,
          difficulty: currentQuestion.difficulty,
          isCorrect: correct,
          responseTime,
          confidence: correct ? 'high' : 'low',
        }),
      });
    } catch (err) {
      console.error('Failed to submit answer:', err);
    } finally {
      setIsSubmitting(false);
    }

    // Save result
    setSessionResults([...sessionResults, {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      userAnswer: userAnswer.trim(),
      correctAnswer: currentQuestion.answer,
      isCorrect: correct,
      explanation: currentQuestion.explanation || '',
    }]);
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setShowFeedback(false);
      setStartTime(Date.now());
    } else {
      setSessionComplete(true);
    }
  }

  function handleReturnToDashboard() {
    router.push('/dashboard');
  }

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (loadingQuestions) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-2xl">
          <CardBody className="p-8 text-center">
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Preparing Your Daily Drill...
            </div>
            <div className="text-gray-600">
              Loading personalized questions
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardBody className="p-8 text-center">
            <div className="text-xl font-semibold text-gray-900 mb-4">
              No Questions Available
            </div>
            <Button onClick={() => router.push('/dashboard')}>
              Return to Dashboard
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  // Session Complete Screen
  if (sessionComplete) {
    const correctCount = sessionResults.filter(r => r.isCorrect).length;
    const accuracy = Math.round((correctCount / sessionResults.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="container mx-auto max-w-4xl py-8">
          <Card>
            <CardHeader>
              <h1 className="text-3xl font-bold text-gray-900 text-center">
                Session Complete! 🎉
              </h1>
            </CardHeader>
            <CardBody className="p-8">
              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">
                    {sessionResults.length}
                  </div>
                  <div className="text-sm text-gray-600">Questions</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">
                    {correctCount}
                  </div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">
                    {accuracy}%
                  </div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>

              {/* Results List */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900">Review Your Answers</h3>
                {sessionResults.map((result, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-2 ${
                      result.isCorrect
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">
                        {result.isCorrect ? '✓' : '✗'}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 mb-2">
                          Q{idx + 1}: {result.question}
                        </div>
                        <div className="text-sm space-y-1">
                          <div>
                            <span className="font-medium">Your answer:</span>{' '}
                            <span className={result.isCorrect ? 'text-green-700' : 'text-red-700'}>
                              {result.userAnswer}
                            </span>
                          </div>
                          {!result.isCorrect && (
                            <div>
                              <span className="font-medium">Correct answer:</span>{' '}
                              <span className="text-green-700">{result.correctAnswer}</span>
                            </div>
                          )}
                        </div>
                        {result.explanation && (
                          <div className="mt-2 text-sm text-gray-700 bg-white p-2 rounded">
                            {result.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" onClick={handleReturnToDashboard}>
                  Return to Dashboard
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  // Question Screen
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-2xl py-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentIndex + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600 uppercase">
                {currentQuestion.category.replace(/_/g, ' ')}
              </span>
              <span className="text-sm font-medium text-gray-600 capitalize">
                {currentQuestion.difficulty}
              </span>
            </div>
          </CardHeader>

          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {currentQuestion.question}
            </h2>

            {!showFeedback ? (
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Type your answer..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && userAnswer.trim()) {
                      handleSubmitAnswer();
                    }
                  }}
                  autoFocus
                />
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={!userAnswer.trim() || isSubmitting}
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  Submit Answer
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Feedback */}
                <div
                  className={`p-4 rounded-lg ${
                    isCorrect
                      ? 'bg-green-50 border-2 border-green-200'
                      : 'bg-red-50 border-2 border-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <span className={`font-semibold ${
                      isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="text-sm space-y-1">
                    <div>
                      <span className="font-medium">Your answer:</span>{' '}
                      {userAnswer}
                    </div>
                    {!isCorrect && (
                      <div>
                        <span className="font-medium">Correct answer:</span>{' '}
                        <span className="text-green-700 font-semibold">
                          {currentQuestion.answer}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Explanation */}
                {currentQuestion.explanation && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="font-medium text-blue-900 mb-2">
                      💡 Explanation
                    </div>
                    <div className="text-sm text-blue-800">
                      {currentQuestion.explanation}
                    </div>
                  </div>
                )}

                <Button onClick={handleNext} className="w-full" size="lg">
                  {currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
                </Button>
              </div>
            )}
          </CardBody>

          <CardFooter>
            <div className="text-sm text-gray-600 text-center">
              Press Enter to submit • Take your time, no rush!
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
