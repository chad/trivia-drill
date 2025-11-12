/**
 * Spaced Repetition Algorithm (SM-2 based)
 *
 * This implements a modified version of the SuperMemo 2 algorithm
 * for optimal review scheduling.
 *
 * Research shows spaced repetition can improve retention by 200%
 * compared to massed practice.
 */

export interface SpacedRepetitionState {
  repetitionCount: number;
  easeFactor: number;
  interval: number; // in days
  nextReviewDate: Date;
}

export type ResponseQuality = 0 | 1 | 2 | 3 | 4 | 5;
// 0 - Complete blackout
// 1 - Incorrect, but familiar
// 2 - Incorrect, but answer seemed easy to recall
// 3 - Correct, but required effort
// 4 - Correct, with some hesitation
// 5 - Perfect recall

/**
 * Calculate the next review state based on user performance
 *
 * @param currentState - Current spaced repetition state
 * @param quality - Response quality (0-5)
 * @returns Updated spaced repetition state
 */
export function calculateNextReview(
  currentState: SpacedRepetitionState,
  quality: ResponseQuality
): SpacedRepetitionState {
  const { repetitionCount, easeFactor, interval } = currentState;

  // Calculate new ease factor (minimum 1.3)
  const newEaseFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  let newInterval: number;
  let newRepetitionCount: number;

  // If quality < 3, reset the learning process
  if (quality < 3) {
    newInterval = 1; // Review tomorrow
    newRepetitionCount = 0;
  } else {
    newRepetitionCount = repetitionCount + 1;

    if (newRepetitionCount === 1) {
      newInterval = 1;
    } else if (newRepetitionCount === 2) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * newEaseFactor);
    }
  }

  // Calculate next review date
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + newInterval);

  return {
    repetitionCount: newRepetitionCount,
    easeFactor: newEaseFactor,
    interval: newInterval,
    nextReviewDate,
  };
}

/**
 * Convert boolean correctness and confidence to quality score
 *
 * @param isCorrect - Whether the answer was correct
 * @param confidence - User's confidence level (optional)
 * @returns Quality score (0-5)
 */
export function getQualityScore(
  isCorrect: boolean,
  confidence?: 'low' | 'medium' | 'high'
): ResponseQuality {
  if (!isCorrect) {
    return confidence === 'high' ? 2 : confidence === 'medium' ? 1 : 0;
  }

  // Correct answer
  if (confidence === 'low') return 3;
  if (confidence === 'medium') return 4;
  return 5; // high confidence or no confidence specified
}

/**
 * Initialize spaced repetition state for a new question
 *
 * @returns Initial spaced repetition state
 */
export function initializeSpacedRepetition(): SpacedRepetitionState {
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + 1); // First review tomorrow

  return {
    repetitionCount: 0,
    easeFactor: 2.5, // Default ease factor
    interval: 0,
    nextReviewDate,
  };
}

/**
 * Determine if a question is due for review
 *
 * @param nextReviewDate - The scheduled next review date
 * @returns True if the question should be reviewed
 */
export function isDueForReview(nextReviewDate: Date): boolean {
  return new Date() >= nextReviewDate;
}

/**
 * Calculate optimal session composition
 * - 70% review items (due for spaced repetition)
 * - 30% new material
 *
 * @param totalQuestions - Total questions in session
 * @returns Object with counts for review and new questions
 */
export function getSessionComposition(totalQuestions: number): {
  reviewCount: number;
  newCount: number;
} {
  const reviewCount = Math.floor(totalQuestions * 0.7);
  const newCount = totalQuestions - reviewCount;

  return { reviewCount, newCount };
}
