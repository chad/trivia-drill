'use client';

import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';

interface UserStats {
  totalQuestions: number;
  correctAnswers: number;
  accuracyRate: number;
  currentStreak: number;
  longestStreak: number;
  categoryScores: Record<string, number>;
  questionsForReview: number;
  recentActivity: number;
}

export default function DashboardPage() {
  const { user, token, isLoading, logout } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (token) {
      fetchStats();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  async function fetchStats() {
    try {
      const response = await fetch('/api/progress/stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data.data);
      } else {
        setError('Failed to load statistics');
      }
    } catch {
      setError('Failed to load statistics');
    } finally {
      setLoadingStats(false);
    }
  }

  function handleLogout() {
    logout();
    router.push('/');
  }

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Trivia Drill</h1>
            <p className="text-sm text-gray-600">Welcome back, {user.name || user.email}!</p>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {/* Main CTA */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardBody className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Learn?</h2>
              <p className="text-blue-100 mb-6">
                Start your Daily Drill - 15 questions using spaced repetition
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => router.push('/drill')}
              >
                Start Daily Drill
              </Button>
            </CardBody>
          </Card>
        </div>

        {/* Stats Grid */}
        {loadingStats ? (
          <div className="text-center text-gray-600">Loading your stats...</div>
        ) : stats ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Questions */}
            <Card>
              <CardBody className="text-center p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stats.totalQuestions}
                </div>
                <div className="text-gray-600">Questions Answered</div>
              </CardBody>
            </Card>

            {/* Accuracy */}
            <Card>
              <CardBody className="text-center p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stats.accuracyRate}%
                </div>
                <div className="text-gray-600">Accuracy Rate</div>
              </CardBody>
            </Card>

            {/* Current Streak */}
            <Card>
              <CardBody className="text-center p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {stats.currentStreak} 🔥
                </div>
                <div className="text-gray-600">Day Streak</div>
              </CardBody>
            </Card>

            {/* Due for Review */}
            <Card>
              <CardBody className="text-center p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stats.questionsForReview}
                </div>
                <div className="text-gray-600">Due for Review</div>
              </CardBody>
            </Card>
          </div>
        ) : null}

        {/* Category Scores */}
        {stats && Object.keys(stats.categoryScores).length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <h3 className="text-xl font-semibold text-gray-900">
                Category Proficiency
              </h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {Object.entries(stats.categoryScores).map(([category, score]) => (
                  <div key={category}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {category.replace(/_/g, ' ')}
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {Math.round(score)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        )}

        {/* Achievements */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900">Achievements</h3>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats && stats.totalQuestions >= 10 && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-sm font-medium text-gray-900">Getting Started</div>
                  <div className="text-xs text-gray-600">10+ questions</div>
                </div>
              )}
              {stats && stats.currentStreak >= 3 && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🔥</div>
                  <div className="text-sm font-medium text-gray-900">On Fire</div>
                  <div className="text-xs text-gray-600">3+ day streak</div>
                </div>
              )}
              {stats && stats.currentStreak >= 7 && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-sm font-medium text-gray-900">Dedicated</div>
                  <div className="text-xs text-gray-600">7+ day streak</div>
                </div>
              )}
              {stats && stats.accuracyRate >= 80 && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-sm font-medium text-gray-900">Sharp Mind</div>
                  <div className="text-xs text-gray-600">80%+ accuracy</div>
                </div>
              )}
            </div>
            {stats && stats.totalQuestions === 0 && (
              <p className="text-gray-600 text-center py-4">
                Start your Daily Drill to unlock achievements!
              </p>
            )}
          </CardBody>
        </Card>
      </main>
    </div>
  );
}
