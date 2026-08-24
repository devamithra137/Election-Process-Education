import type { QuizQuestion } from "../types";

export interface QuizScoreResult {
  score: number;
  totalQuestions: number;
  percentage: number;
}

/**
 * Calculate the user's quiz score from the quiz questions and submitted answers.
 *
 * @param questions - Array of quiz questions
 * @param submittedAnswers - Array of submitted option indices (or null for unanswered)
 * @returns Number of correct answers
 */
export function calculateQuizScore(
  questions: QuizQuestion[] | Array<{ correctIndex: number }>,
  submittedAnswers: (number | null | undefined)[]
): number {
  if (!Array.isArray(questions) || !Array.isArray(submittedAnswers)) {
    return 0;
  }

  return submittedAnswers.reduce<number>((score, answer, idx) => {
    if (idx >= questions.length) return score;
    const question = questions[idx];
    if (!question) return score;
    return answer === question.correctIndex ? score + 1 : score;
  }, 0);
}

/**
 * Calculate the percentage of correct answers rounded to the nearest integer.
 *
 * @param score - Number of correct answers
 * @param totalQuestions - Total number of questions
 * @returns Rounded percentage between 0 and 100
 */
export function calculateQuizPercentage(
  score: number,
  totalQuestions: number
): number {
  if (totalQuestions <= 0) {
    return 0;
  }
  return Math.round((Math.max(0, score) / totalQuestions) * 100);
}
