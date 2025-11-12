// Question loading and selection service
import questionsData from '@/data/questions.json';
import { Question, QuestionCategory, QuestionDifficulty } from '@/types';
import { shuffleArray } from './utils';

/**
 * Get all questions from the database
 */
export function getAllQuestions(): Question[] {
  return questionsData.questions as Question[];
}

/**
 * Get questions by category
 */
export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return questionsData.questions.filter(q => q.category === category) as Question[];
}

/**
 * Get questions by difficulty
 */
export function getQuestionsByDifficulty(difficulty: QuestionDifficulty): Question[] {
  return questionsData.questions.filter(q => q.difficulty === difficulty) as Question[];
}

/**
 * Get a random question
 */
export function getRandomQuestion(): Question {
  const allQuestions = getAllQuestions();
  return allQuestions[Math.floor(Math.random() * allQuestions.length)];
}

/**
 * Get random questions (shuffled)
 */
export function getRandomQuestions(count: number, options?: {
  categories?: QuestionCategory[];
  difficulties?: QuestionDifficulty[];
  excludeIds?: string[];
}): Question[] {
  let questions = getAllQuestions();

  // Filter by categories
  if (options?.categories && options.categories.length > 0) {
    questions = questions.filter(q => options.categories!.includes(q.category));
  }

  // Filter by difficulties
  if (options?.difficulties && options.difficulties.length > 0) {
    questions = questions.filter(q => options.difficulties!.includes(q.difficulty));
  }

  // Exclude specific questions
  if (options?.excludeIds && options.excludeIds.length > 0) {
    questions = questions.filter(q => !options.excludeIds!.includes(q.id));
  }

  // Shuffle and return requested count
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Get interleaved questions (mix categories)
 * This supports the interleaving learning principle
 */
export function getInterleavedQuestions(count: number): Question[] {
  const allQuestions = getAllQuestions();

  // Group by category
  const byCategory: Record<string, Question[]> = {};
  allQuestions.forEach(q => {
    if (!byCategory[q.category]) {
      byCategory[q.category] = [];
    }
    byCategory[q.category].push(q);
  });

  // Shuffle each category
  Object.keys(byCategory).forEach(cat => {
    byCategory[cat] = shuffleArray(byCategory[cat]);
  });

  // Interleave questions from different categories
  const result: Question[] = [];
  const categories = Object.keys(byCategory);
  let categoryIndex = 0;

  while (result.length < count) {
    const category = categories[categoryIndex % categories.length];

    if (byCategory[category].length > 0) {
      result.push(byCategory[category].shift()!);
    }

    categoryIndex++;

    // Stop if we've run out of questions
    const hasQuestions = Object.values(byCategory).some(arr => arr.length > 0);
    if (!hasQuestions) break;
  }

  return result;
}

/**
 * Get question by ID
 */
export function getQuestionById(id: string): Question | undefined {
  return getAllQuestions().find(q => q.id === id);
}

/**
 * Get daily drill questions
 * Combines interleaving with balanced difficulty
 */
export function getDailyDrillQuestions(count: number = 15): Question[] {
  const allQuestions = getAllQuestions();

  // Target distribution: 60% easy, 30% medium, 10% hard
  const easyCount = Math.floor(count * 0.6);
  const mediumCount = Math.floor(count * 0.3);
  const hardCount = count - easyCount - mediumCount;

  const easy = shuffleArray(allQuestions.filter(q => q.difficulty === 'easy')).slice(0, easyCount);
  const medium = shuffleArray(allQuestions.filter(q => q.difficulty === 'medium')).slice(0, mediumCount);
  const hard = shuffleArray(allQuestions.filter(q => q.difficulty === 'hard')).slice(0, hardCount);

  // Combine and interleave
  const combined = [...easy, ...medium, ...hard];
  return shuffleArray(combined);
}

/**
 * Get database statistics
 */
export function getQuestionStats() {
  return {
    total: questionsData.totalQuestions,
    byCategory: questionsData.categories,
    byDifficulty: questionsData.difficultyBreakdown,
  };
}
