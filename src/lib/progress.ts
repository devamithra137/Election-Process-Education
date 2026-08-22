export interface ProgressResult {
  completedCount: number;
  totalCount: number;
  percentage: number;
  rawPercentage: number;
}

/**
 * Calculate learning progress statistics.
 *
 * @param completedTopics - Array of completed topic IDs or count of completed topics
 * @param totalTopics - Array of total topics or total count
 * @returns ProgressResult containing completedCount, totalCount, percentage (rounded), and rawPercentage
 */
export function calculateProgress(
  completedTopics: string[] | number,
  totalTopics: unknown[] | number
): ProgressResult {
  const completedCount =
    typeof completedTopics === 'number'
      ? completedTopics
      : Array.isArray(completedTopics)
      ? completedTopics.length
      : 0;

  const totalCount =
    typeof totalTopics === 'number'
      ? totalTopics
      : Array.isArray(totalTopics)
      ? totalTopics.length
      : 0;

  if (totalCount <= 0) {
    return {
      completedCount: Math.max(0, completedCount),
      totalCount: 0,
      percentage: 0,
      rawPercentage: 0,
    };
  }

  const rawPercentage = (completedCount / totalCount) * 100;
  const percentage = Math.round(rawPercentage);

  return {
    completedCount,
    totalCount,
    percentage,
    rawPercentage,
  };
}

/**
 * Calculate the completion percentage.
 *
 * @param completedCount - Number of completed items
 * @param totalCount - Total number of items
 * @returns Rounded percentage between 0 and 100, or 0 if totalCount <= 0.
 */
export function calculateProgressPercentage(
  completedCount: number,
  totalCount: number
): number {
  if (totalCount <= 0) {
    return 0;
  }
  return Math.round((completedCount / totalCount) * 100);
}
