class Queue<T> {
  private items: Record<number, T> = {};
  private head = 0;
  private tail = 0;

  // Add an item to the back of the queue - O(1)
  enqueue(item: T): void {
    this.items[this.tail] = item;
    this.tail++;
  }

  // Remove and return the front item - O(1)
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  // Look at the front item without removing it - O(1)
  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.head];
  }

  // Get the current number of elements - O(1)
  get size(): number {
    return this.tail - this.head;
  }

  // Check if the queue is empty - O(1)
  isEmpty(): boolean {
    return this.size === 0;
  }

  // Clear the queue - O(1)
  clear(): void {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
}

export {};
