const aCharCode = "a".charCodeAt(0);

function firstUniqChar(s: string): number {
  const registry = new Array<number>(26).fill(0);

  for (const char of s) {
    registry[char.charCodeAt(0) - aCharCode]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (registry[s[i].charCodeAt(0) - aCharCode] === 1) {
      return i;
    }
  }

  return -1;
}

export {};
