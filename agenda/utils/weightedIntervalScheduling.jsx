function findLatestNonOverlapping(intervals, index) {
  for (let i = index - 1; i >= 0; i--) {
    if (intervals[i].end <= intervals[index].start) {
      return i;
    }
  }
  return -1;
}

export default function findMaxWeightedSchedule(intervals) {
  if (intervals.length === 0) {
    return {
      maxWeight: 0,
      intervals: [],
    };
  }
  intervals.sort((a, b) => a.end - b.end);

  const n = intervals.length;
  const dp = new Array(n);
  const includedIntervals = new Array(n);

  dp[0] = intervals[0].weight;
  includedIntervals[0] = [intervals[0]];

  for (let i = 1; i < n; i++) {
    const latest = findLatestNonOverlapping(intervals, i);
    const includeWeight =
      intervals[i].weight + (latest !== -1 ? dp[latest] : 0);
    const excludeWeight = dp[i - 1];

    if (includeWeight > excludeWeight) {
      dp[i] = includeWeight;
      includedIntervals[i] = includedIntervals[latest]?.concat(intervals[i]);
    } else {
      dp[i] = excludeWeight;
      includedIntervals[i] = includedIntervals[i - 1];
    }
  }

  return {
    maxWeight: dp[n - 1],
    intervals: includedIntervals[n - 1],
  };
}
