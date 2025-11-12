// Submit answer and track progress endpoint
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { authenticateRequest } from '@/lib/auth/middleware';
import { calculateNextReview, getQualityScore } from '@/lib/algorithms/spaced-repetition';

const submitSchema = z.object({
  questionId: z.string(),
  category: z.string(),
  difficulty: z.string(),
  isCorrect: z.boolean(),
  responseTime: z.number().int().min(0), // milliseconds
  confidence: z.enum(['low', 'medium', 'high']).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const user = authenticateRequest(request);
    const body = await request.json();
    const validatedData = submitSchema.parse(body);

    // Find existing question history
    const existing = await prisma.questionHistory.findFirst({
      where: {
        userId: user.userId,
        questionId: validatedData.questionId,
      },
      orderBy: {
        attemptedAt: 'desc',
      },
    });

    // Calculate spaced repetition values
    const quality = getQualityScore(validatedData.isCorrect, validatedData.confidence);
    const currentState = existing
      ? {
          repetitionCount: existing.repetitionCount,
          easeFactor: existing.easeFactor,
          interval: existing.interval,
          nextReviewDate: existing.nextReviewDate,
        }
      : {
          repetitionCount: 0,
          easeFactor: 2.5,
          interval: 0,
          nextReviewDate: new Date(),
        };

    const nextState = calculateNextReview(currentState, quality);

    // Save question history
    const questionHistory = await prisma.questionHistory.create({
      data: {
        userId: user.userId,
        questionId: validatedData.questionId,
        category: validatedData.category,
        difficulty: validatedData.difficulty,
        isCorrect: validatedData.isCorrect,
        responseTime: validatedData.responseTime,
        confidence: validatedData.confidence,
        repetitionCount: nextState.repetitionCount,
        easeFactor: nextState.easeFactor,
        interval: nextState.interval,
        nextReviewDate: nextState.nextReviewDate,
      },
    });

    // Update category score
    const categoryScore = await prisma.categoryScore.findUnique({
      where: {
        userId_category: {
          userId: user.userId,
          category: validatedData.category,
        },
      },
    });

    if (categoryScore) {
      const newCorrect = categoryScore.correctAnswers + (validatedData.isCorrect ? 1 : 0);
      const newTotal = categoryScore.totalAttempts + 1;
      const newProficiency = (newCorrect / newTotal) * 100;

      await prisma.categoryScore.update({
        where: {
          userId_category: {
            userId: user.userId,
            category: validatedData.category,
          },
        },
        data: {
          totalAttempts: newTotal,
          correctAnswers: newCorrect,
          proficiencyScore: newProficiency,
          lastAttemptDate: new Date(),
        },
      });
    } else {
      await prisma.categoryScore.create({
        data: {
          userId: user.userId,
          category: validatedData.category,
          totalAttempts: 1,
          correctAnswers: validatedData.isCorrect ? 1 : 0,
          proficiencyScore: validatedData.isCorrect ? 100 : 0,
        },
      });
    }

    // Update user profile streak
    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.userId },
    });

    if (profile) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const lastActivity = profile.lastActivityDate ? new Date(profile.lastActivityDate) : null;
      if (lastActivity) {
        lastActivity.setHours(0, 0, 0, 0);
      }

      let newStreak = profile.currentStreak;

      if (!lastActivity || lastActivity < today) {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastActivity && lastActivity.getTime() === yesterday.getTime()) {
          // Consecutive day
          newStreak += 1;
        } else if (!lastActivity || lastActivity < yesterday) {
          // Streak broken
          newStreak = 1;
        }
        // If lastActivity is today, keep current streak

        await prisma.userProfile.update({
          where: { userId: user.userId },
          data: {
            currentStreak: newStreak,
            longestStreak: Math.max(newStreak, profile.longestStreak),
            lastActivityDate: new Date(),
          },
        });
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        questionHistory,
        nextReview: nextState.nextReviewDate,
        interval: nextState.interval,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error('Submit answer error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to submit answer' },
      { status: 500 }
    );
  }
}
