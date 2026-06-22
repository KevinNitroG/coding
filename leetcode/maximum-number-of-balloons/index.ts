// https://leetcode.com/problems/maximum-number-of-balloons/

function maxNumberOfBalloons(text: string): number {
  const wordRegistry = new Array(26).fill(0);
  const charCodeAtLowerA = 97;
  for (const char of text) {
    ++wordRegistry[char.charCodeAt(0) - charCodeAtLowerA];
  }
  wordRegistry[11] /= 2;
  wordRegistry[14] /= 2;
  return Math.floor(
    Math.min(
      wordRegistry[0], // a
      wordRegistry[1], // b
      wordRegistry[11], // l
      wordRegistry[13], // n
      wordRegistry[14], // o
    ),
  );
}

console.log(maxNumberOfBalloons("nlaebolko")); // 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // 2
console.log(maxNumberOfBalloons("leetcode")); // 0

export {};
