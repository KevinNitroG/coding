function* fibGenerator(): Generator<number, any, number> {
  let cur = 0;
  let next = 1;
  while (true) {
    yield cur;
    const temp = next;
    next = cur + next;
    cur = temp;
  }
}

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
console.log(gen.next().value); // 13

export {};
