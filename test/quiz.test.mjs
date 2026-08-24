import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuizScore, calculateQuizPercentage } from '../src/lib/quiz.ts';

describe('Quiz Scoring Logic', () => {
  const sampleQuestions = [
    {
      id: 1,
      question: 'What is voter registration?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 1,
      correctIndex: 1,
      explanation: 'Explanation 1',
    },
    {
      id: 2,
      question: 'What is a constituency?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 2,
      correctIndex: 2,
      explanation: 'Explanation 2',
    },
    {
      id: 3,
      question: 'What happens during voting?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 1,
      correctIndex: 1,
      explanation: 'Explanation 3',
    },
    {
      id: 4,
      question: 'What happens during vote counting?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 2,
      correctIndex: 2,
      explanation: 'Explanation 4',
    },
    {
      id: 5,
      question: 'Who declares the official election results?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 2,
      correctIndex: 2,
      explanation: 'Explanation 5',
    },
  ];

  it('all answers correct -> full score', () => {
    // Exact correct answers matching each question's correctIndex
    const allCorrectAnswers = [1, 2, 1, 2, 2];
    const score = calculateQuizScore(sampleQuestions, allCorrectAnswers);
    assert.strictEqual(score, 5, 'Should return full score of 5 when all answers are correct');
    assert.strictEqual(calculateQuizPercentage(score, sampleQuestions.length), 100);
  });

  it('no answers correct -> zero score', () => {
    // All wrong answers
    const allWrongAnswers = [0, 0, 0, 0, 0];
    const score = calculateQuizScore(sampleQuestions, allWrongAnswers);
    assert.strictEqual(score, 0, 'Should return 0 when all answers are incorrect');
    assert.strictEqual(calculateQuizPercentage(score, sampleQuestions.length), 0);
  });

  it('some answers correct -> correct partial score', () => {
    // 3 correct out of 5:
    // Q1: 1 (correct), Q2: 2 (correct), Q3: 0 (wrong), Q4: 2 (correct), Q5: 0 (wrong)
    const threeCorrectAnswers = [1, 2, 0, 2, 0];
    const scoreThree = calculateQuizScore(sampleQuestions, threeCorrectAnswers);
    assert.strictEqual(scoreThree, 3, 'Should score 3 correct answers out of 5');
    assert.strictEqual(calculateQuizPercentage(scoreThree, sampleQuestions.length), 60);

    // 1 correct out of 5:
    // Q1: 1 (correct), Q2: 0 (wrong), Q3: 0 (wrong), Q4: 0 (wrong), Q5: 0 (wrong)
    const oneCorrectAnswer = [1, 0, 0, 0, 0];
    const scoreOne = calculateQuizScore(sampleQuestions, oneCorrectAnswer);
    assert.strictEqual(scoreOne, 1, 'Should score 1 correct answer out of 5');
    assert.strictEqual(calculateQuizPercentage(scoreOne, sampleQuestions.length), 20);
  });

  it('empty/no submitted answers -> zero score', () => {
    // Initial un-answered state: array of nulls
    const allNulls = [null, null, null, null, null];
    assert.strictEqual(calculateQuizScore(sampleQuestions, allNulls), 0, 'Null answers must yield a score of 0');

    // Empty array of answers
    assert.strictEqual(calculateQuizScore(sampleQuestions, []), 0, 'Empty answers array must yield a score of 0');

    // Partially unanswered array (null entries)
    // Q1: 1 (correct), Q2: null (unanswered), Q3: 1 (correct), Q4: null, Q5: null
    const partialNulls = [1, null, 1, null, null];
    assert.strictEqual(calculateQuizScore(sampleQuestions, partialNulls), 2, 'Unanswered nulls must not award points');

    // Edge cases: empty questions or non-array inputs
    assert.strictEqual(calculateQuizScore([], []), 0);
    assert.strictEqual(calculateQuizPercentage(0, 0), 0);
    assert.strictEqual(calculateQuizPercentage(0, 5), 0);
  });

  it('scoring does not depend on the browser or UI', () => {
    // Assert no browser DOM or window dependency
    assert.strictEqual(typeof globalThis.window, 'undefined', 'Scoring logic must execute without window');
    assert.strictEqual(typeof globalThis.document, 'undefined', 'Scoring logic must execute without document');

    // Pure deterministic calculation test
    const answers = [1, 2, 1, 2, 2];
    const scoreRunA = calculateQuizScore(sampleQuestions, answers);
    const scoreRunB = calculateQuizScore(sampleQuestions, answers);
    assert.strictEqual(scoreRunA, scoreRunB, 'Multiple runs with identical data must return identical scores');
  });
});
