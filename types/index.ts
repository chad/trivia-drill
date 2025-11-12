// Core TypeScript types for Trivia Drill

export type QuestionDifficulty = 'easy' | 'medium' | 'hard';
export type QuestionCategory =
  | 'history'
  | 'geography'
  | 'science'
  | 'pop_culture_music'
  | 'pop_culture_movies'
  | 'pop_culture_tv'
  | 'sports'
  | 'literature'
  | 'art'
  | 'current_events'
  | 'technology'
  | 'food_drink';

export type QuestionEra =
  | '1950s'
  | '1960s'
  | '1970s'
  | '1980s'
  | '1990s'
  | '2000s'
  | '2010s'
  | '2020s';

export type CulturalRelevance = 'classic' | 'period_specific' | 'current';

export interface Question {
  id: string;
  question: string;
  answer: string;
  category: QuestionCategory;
  difficulty: QuestionDifficulty;
  era?: QuestionEra;
  culturalRelevance?: CulturalRelevance;

  // Multiple choice options (optional)
  choices?: string[];

  // Additional context
  explanation?: string;
  tags?: string[];
  imageUrl?: string;

  // Metadata
  source?: string;
  verified: boolean;
  createdAt?: string;
}

export interface QuestionResponse {
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  responseTime: number; // milliseconds
  confidence?: 'low' | 'medium' | 'high';
}

export interface LearningSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  mode: 'daily_drill' | 'category_dive' | 'challenge' | 'age_bridge';

  questions: Question[];
  responses: QuestionResponse[];

  // Session metrics
  correctCount: number;
  totalQuestions: number;
  averageResponseTime: number;
  categoriesCovered: QuestionCategory[];
}

export interface UserStats {
  totalQuestions: number;
  correctAnswers: number;
  accuracyRate: number;
  currentStreak: number;
  longestStreak: number;
  totalLearningTime: number; // minutes
  categoryScores: Record<QuestionCategory, number>;
}

export interface SpacedRepetitionData {
  questionId: string;
  userId: string;
  repetitionCount: number;
  easeFactor: number;
  interval: number; // days
  nextReviewDate: Date;
  lastReviewDate: Date;
}

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  birthYear?: number;
  triviaExperience: 'beginner' | 'intermediate' | 'advanced';
  preferredCategories: QuestionCategory[];
  dailyGoalMinutes: number;
  stats: UserStats;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  hasMore: boolean;
}
