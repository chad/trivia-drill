// Get current user endpoint
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { authenticateRequest } from '@/lib/auth/middleware';

export async function GET(request: NextRequest) {
  try {
    const user = authenticateRequest(request);

    // Fetch user data
    const userData = await prisma.user.findUnique({
      where: { id: user.userId },
      include: {
        profile: true,
      },
    });

    if (!userData) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        birthYear: userData.birthYear,
        profile: userData.profile,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Authentication failed' },
      { status: 401 }
    );
  }
}
