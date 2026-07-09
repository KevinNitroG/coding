function minScore(n: number, roads: number[][]): number {
  type CityPath = {
    dest: number;
    dist: number;
  };
  const registry = Array.from({ length: n + 1 }, () => [] as CityPath[]);
  for (const road of roads) {
    registry[road[0]].push({ dest: road[1], dist: road[2] });
    registry[road[1]].push({ dest: road[0], dist: road[2] });
  }

  const alreadyChecked = new Array<boolean>(n + 1).fill(false);
  const queue = new Queue<number>();
  alreadyChecked[1] = true;
  queue.enqueue(1);
  let score = Infinity;

  while (!queue.isEmpty()) {
    for (const cityPath of registry[queue.dequeue()!]) {
      const dest = cityPath.dest;
      score = Math.min(score, cityPath.dist);
      if (alreadyChecked[dest]) {
        continue;
      }
      alreadyChecked[dest] = true;
      queue.enqueue(dest);
    }
  }
  return score;
}

console.log(
  minScore(4, [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7],
  ]),
); // 5
console.log(
  minScore(4, [
    [1, 2, 2],
    [1, 3, 4],
    [3, 4, 7],
  ]),
); // 2
