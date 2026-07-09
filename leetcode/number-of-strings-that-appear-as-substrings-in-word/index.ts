// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/?envType=daily-question&envId=2026-07-09

function numOfStrings(patterns: string[], word: string): number {
  let result = 0;
  for (const pattern of patterns) {
    if (word.includes(pattern)) {
      result++;
    }
  }
  return result;
}
