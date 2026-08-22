import { test, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateProgress, calculateProgressPercentage } from '../src/lib/progress.ts';

describe('Learning Progress Calculation Utility', () => {
  it('Case 1: 0 completed out of 6 -> 0%', () => {
    const result = calculateProgress(0, 6);
    assert.strictEqual(result.completedCount, 0);
    assert.strictEqual(result.totalCount, 6);
    assert.strictEqual(result.percentage, 0);
    assert.strictEqual(result.rawPercentage, 0);

    const fromArray = calculateProgress([], ['a', 'b', 'c', 'd', 'e', 'f']);
    assert.strictEqual(fromArray.completedCount, 0);
    assert.strictEqual(fromArray.totalCount, 6);
    assert.strictEqual(fromArray.percentage, 0);

    assert.strictEqual(calculateProgressPercentage(0, 6), 0);
  });

  it('Case 2: 3 completed out of 6 -> 50%', () => {
    const result = calculateProgress(3, 6);
    assert.strictEqual(result.completedCount, 3);
    assert.strictEqual(result.totalCount, 6);
    assert.strictEqual(result.percentage, 50);
    assert.strictEqual(result.rawPercentage, 50);

    const fromArray = calculateProgress(['a', 'b', 'c'], ['a', 'b', 'c', 'd', 'e', 'f']);
    assert.strictEqual(fromArray.completedCount, 3);
    assert.strictEqual(fromArray.totalCount, 6);
    assert.strictEqual(fromArray.percentage, 50);

    assert.strictEqual(calculateProgressPercentage(3, 6), 50);
  });

  it('Case 3: 6 completed out of 6 -> 100%', () => {
    const result = calculateProgress(6, 6);
    assert.strictEqual(result.completedCount, 6);
    assert.strictEqual(result.totalCount, 6);
    assert.strictEqual(result.percentage, 100);
    assert.strictEqual(result.rawPercentage, 100);

    const topics = ['t1', 't2', 't3', 't4', 't5', 't6'];
    const fromArray = calculateProgress(topics, topics);
    assert.strictEqual(fromArray.completedCount, 6);
    assert.strictEqual(fromArray.totalCount, 6);
    assert.strictEqual(fromArray.percentage, 100);

    assert.strictEqual(calculateProgressPercentage(6, 6), 100);
  });

  it('Case 4: Partial completion 2 out of 6 -> approximately 33.33%', () => {
    const result = calculateProgress(2, 6);
    assert.strictEqual(result.completedCount, 2);
    assert.strictEqual(result.totalCount, 6);
    assert.strictEqual(result.percentage, 33);
    assert.ok(Math.abs(result.rawPercentage - (100 / 3)) < 0.001);
    assert.strictEqual(result.rawPercentage.toFixed(2), '33.33');

    const fromArray = calculateProgress(['t1', 't2'], ['t1', 't2', 't3', 't4', 't5', 't6']);
    assert.strictEqual(fromArray.completedCount, 2);
    assert.strictEqual(fromArray.totalCount, 6);
    assert.strictEqual(fromArray.percentage, 33);

    assert.strictEqual(calculateProgressPercentage(2, 6), 33);
  });

  it('Case 5: No topics -> handle safely without division-by-zero problems', () => {
    const resultZero = calculateProgress(0, 0);
    assert.strictEqual(resultZero.completedCount, 0);
    assert.strictEqual(resultZero.totalCount, 0);
    assert.strictEqual(resultZero.percentage, 0);
    assert.strictEqual(resultZero.rawPercentage, 0);

    const fromEmptyArray = calculateProgress([], []);
    assert.strictEqual(fromEmptyArray.completedCount, 0);
    assert.strictEqual(fromEmptyArray.totalCount, 0);
    assert.strictEqual(fromEmptyArray.percentage, 0);

    const negativeTotal = calculateProgress(2, -1);
    assert.strictEqual(negativeTotal.completedCount, 2);
    assert.strictEqual(negativeTotal.totalCount, 0);
    assert.strictEqual(negativeTotal.percentage, 0);

    assert.strictEqual(calculateProgressPercentage(0, 0), 0);
    assert.strictEqual(calculateProgressPercentage(5, 0), 0);
  });
});
