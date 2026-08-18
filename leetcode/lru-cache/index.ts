type Node = {
  key: number;
  value: number;
  next?: Node;
  prev?: Node;
};

class LRUCache {
  private capacity: number;
  private head: Node;
  private tail: Node;
  private map: Map<number, Node> = new Map();

  constructor(capacity: number) {
    this.capacity = capacity;
    this.tail = { key: 0, value: 0 };
    this.head = { key: 0, value: 0, next: this.tail };
    this.tail.prev = this.head;
  }

  private addNodeToHead(node: Node) {
    const headNode = this.head.next!;
    this.head.next = node;
    node.prev = this.head;
    node.next = headNode;
    headNode.prev = node;
  }

  private removeNode(node: Node) {
    const prev = node.prev!;
    const next = node.next!;
    prev.next = next;
    next.prev = prev;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) {
      return -1;
    }
    this.removeNode(node);
    this.addNodeToHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const existing = this.map.get(key);
    if (existing) {
      this.removeNode(existing);
      existing.value = value;
      this.addNodeToHead(existing);
      return;
    }
    const node: Node = { key: key, value: value };
    this.addNodeToHead(node);
    this.map.set(key, node);
    if (this.map.size > this.capacity) {
      const prev = this.tail.prev!;
      this.removeNode(prev);
      this.map.delete(prev!.key);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
