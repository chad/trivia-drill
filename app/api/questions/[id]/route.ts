// Get question by ID endpoint
import { NextRequest, NextResponse } from 'next/server';
import { getQuestionById } from '@/lib/questions';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const question = getQuestionById(params.id);

    if (!question) {
      return NextResponse.json(
        { success: false, error: 'Question not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: question,
    });
  } catch (error) {
    console.error('Get question error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch question' },
      { status: 500 }
    );
  }
}
