// Get questions endpoint
import { NextRequest, NextResponse } from 'next/server';
import { getRandomQuestions, getDailyDrillQuestions, getQuestionStats } from '@/lib/questions';
import { QuestionCategory, QuestionDifficulty } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type') || 'random';
    const count = parseInt(searchParams.get('count') || '15');
    const category = searchParams.get('category') as QuestionCategory | null;
    const difficulty = searchParams.get('difficulty') as QuestionDifficulty | null;

    let questions;

    switch (type) {
      case 'daily-drill':
        questions = getDailyDrillQuestions(count);
        break;

      case 'stats':
        return NextResponse.json({
          success: true,
          data: getQuestionStats(),
        });

      case 'random':
      default:
        const options: {
          categories?: QuestionCategory[];
          difficulties?: QuestionDifficulty[];
        } = {};
        if (category) options.categories = [category];
        if (difficulty) options.difficulties = [difficulty];

        questions = getRandomQuestions(count, options);
        break;
    }

    return NextResponse.json({
      success: true,
      data: {
        questions,
        count: questions.length,
      },
    });
  } catch (error) {
    console.error('Get questions error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}
