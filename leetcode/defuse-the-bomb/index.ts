// https://leetcode.com/problems/defuse-the-bomb
// TODO: Not done yet

function decrypt(code: number[], k: number): number[] {
  if (k === 0) {
    return new Array(code.length).fill(0);
  }
  let extendedCode: Array<number>;
  let windowSum = 0;
  let extendedPart: Array<number>;
  if (k > 0) {
    extendedPart = code.slice(0, k);
    extendedCode = [...code, ...extendedPart];
  } else {
    extendedPart = code.slice(code.length - k + 1);
    extendedCode = [...extendedPart, ...code];
  }
  windowSum = extendedPart.reduce((acc, val) => acc + val, 0);

  const result = new Array(code.length);

  if (k > 0) {
    result[result.length] = windowSum;
    for (let i = result.length - 2; i >= 0; i--) {
      result[i] = windowSum - extendedCode[i + k] + extendedCode[i + 1];
    }
  } else {
    result[0] = windowSum;
    for (let i = 1; i < result.length; i++) {
      result[i] = windowSum - extendedCode[i + k] + extendedCode[i - 1];
    }
  }
  return result;
}

console.log(decrypt([5, 7, 1, 4], 3)); // [12,10,16,13]
console.log(decrypt([1, 2, 3, 4], 0)); // [0,0,0,0]
console.log(decrypt([2, 4, 9, 3], -2)); // [12,5,6,13]
