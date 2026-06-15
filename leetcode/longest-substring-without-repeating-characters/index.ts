function lengthOfLongestSubstring(s: string): number {
  const lastSeen = Array(128).fill(0);
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; ++right) {
    const char = s[right].charCodeAt(0);
    const lastSeenChar = lastSeen[char];
    if (lastSeenChar > left) {
      left = lastSeenChar;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    lastSeen[char] = right + 1;
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring(" ")); // 1
