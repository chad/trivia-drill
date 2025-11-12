// Get questions due for review (spaced repetition)
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { authenticateRequest } from '@/lib/auth/middleware';
import { getQuestionById } from '@/lib/questions';

export async function GET(request: NextRequest) {
  try {
    const user = authenticateRequest(request);
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '10');

    // Get questions due for review
    const dueQuestions = await prisma.questionHistory.findMany({
      where: {
        userId: user.userId,
        nextReviewDate: {
          lte: new Date(),
        },
      },
      orderBy: {
        nextReviewDate: 'asc',
      },
      take: limit,
      distinct: ['questionId'],
    });

    // Load full question data
    const questions = dueQuestions
      .map(dq => getQuestionById(dq.questionId))
      .filter(q => q !== undefined);

    return NextResponse.json({
      success: true,
      data: {
        questions,
        count: questions.length,
      },
    });
  } catch (error) {
    console.error('Get review questions error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to fetch review questions' },
      { status: 500 }
    );
  }
}
