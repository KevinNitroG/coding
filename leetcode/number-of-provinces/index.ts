// https://leetcode.com/problems/number-of-provinces/

// Even though this is categorised as union find, but I still don't understand
// So, just do a dfs

function findCircleNum(isConnected: number[][]): number {
  const isVisisted = new Array<boolean>(isConnected.length).fill(false);
  let provinces = 0;

  for (let i = 0; i < isVisisted.length; i++) {
    if (isVisisted[i]) {
      continue;
    }
    provinces++;
    dfs(i, isConnected, isVisisted);
  }
  return provinces;
}

function dfs(
  city: number,
  isConnected: number[][],
  isVisisted: boolean[],
): void {
  const stack = new Stack<number>([city]);
  isVisisted[city] = true;
  while (!stack.isEmpty()) {
    const currentCity = stack.pop()!;
    for (let j = 0; j < isConnected.length; j++) {
      if (!isVisisted[j] && isConnected[currentCity][j] === 1) {
        isVisisted[j] = true;
        stack.push(j);
      }
    }
  }
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
); // 2

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
); // 3
