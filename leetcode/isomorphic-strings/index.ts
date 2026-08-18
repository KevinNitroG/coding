function isIsomorphic(s: string, t: string): boolean {
  const tUsed = new Map<string, boolean>();
  const map = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    const sCharMapped = map.get(sChar);
    if (sCharMapped === undefined) {
      if (tUsed.get(tChar)) {
        return false;
      }
      tUsed.set(tChar, true);
      map.set(sChar, tChar);
    } else if (sCharMapped !== tChar) {
      return false;
    }
  }

  return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("f11", "b23")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("13", "42")); // true

export {};
