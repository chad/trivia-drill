// Get user progress statistics endpoint
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { authenticateRequest } from '@/lib/auth/middleware';

export async function GET(request: NextRequest) {
  try {
    const user = authenticateRequest(request);

    // Get user profile
    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.userId },
    });

    // Get category scores
    const categoryScores = await prisma.categoryScore.findMany({
      where: { userId: user.userId },
    });

    // Get total questions answered
    const totalQuestions = await prisma.questionHistory.count({
      where: { userId: user.userId },
    });

    // Get correct answers
    const correctAnswers = await prisma.questionHistory.count({
      where: {
        userId: user.userId,
        isCorrect: true,
      },
    });

    // Get recent activity (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentActivity = await prisma.questionHistory.findMany({
      where: {
        userId: user.userId,
        attemptedAt: {
          gte: sevenDaysAgo,
        },
      },
      select: {
        attemptedAt: true,
        isCorrect: true,
      },
    });

    // Get questions due for review
    const dueForReview = await prisma.questionHistory.findMany({
      where: {
        userId: user.userId,
        nextReviewDate: {
          lte: new Date(),
        },
      },
      distinct: ['questionId'],
    });

    // Calculate accuracy rate
    const accuracyRate = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

    // Group category scores
    const categoryMap: Record<string, number> = {};
    categoryScores.forEach(cs => {
      categoryMap[cs.category] = cs.proficiencyScore;
    });

    return NextResponse.json({
      success: true,
      data: {
        totalQuestions,
        correctAnswers,
        accuracyRate: Math.round(accuracyRate),
        currentStreak: profile?.currentStreak || 0,
        longestStreak: profile?.longestStreak || 0,
        categoryScores: categoryMap,
        questionsForReview: dueForReview.length,
        recentActivity: recentActivity.length,
      },
    });
  } catch (error) {
    console.error('Get stats error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
