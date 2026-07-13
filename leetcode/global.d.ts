declare global {
  type Deque<T> = import("@datastructures-js/deque").Deque<T>;
  type Heap<T> = import("@datastructures-js/heap").Heap<T>;
  type MinHeap<T> = import("@datastructures-js/heap").MinHeap<T>;
  type MaxHeap<T> = import("@datastructures-js/heap").MaxHeap<T>;
  type LinkedList<T> = import("@datastructures-js/linked-list").LinkedList<T>;
  type LinkedListNode = import("@datastructures-js/linked-list").LinkedListNode;
  type DoublyLinkedList<T> =
    import("@datastructures-js/linked-list").DoublyLinkedList<T>;
  type DoublyLinkedListNode =
    import("@datastructures-js/linked-list").DoublyLinkedListNode;
  type PriorityQueue<T> =
    import("@datastructures-js/priority-queue").PriorityQueue<T>;
  type MinPriorityQueue<T> =
    import("@datastructures-js/priority-queue").MinPriorityQueue<T>;
  type MaxPriorityQueue<T> =
    import("@datastructures-js/priority-queue").MaxPriorityQueue<T>;
  type Queue<T> = import("@datastructures-js/queue").Queue<T>;
  type EnhancedSet<T> = import("@datastructures-js/set").EnhancedSet<T>;
  type Stack<T> = import("@datastructures-js/stack").Stack<T>;

  const Deque: typeof import("@datastructures-js/deque").Deque;
  const Heap: typeof import("@datastructures-js/heap").Heap;
  const MinHeap: typeof import("@datastructures-js/heap").MinHeap;
  const MaxHeap: typeof import("@datastructures-js/heap").MaxHeap;
  const LinkedList: typeof import("@datastructures-js/linked-list").LinkedList;
  const DoublyLinkedList: typeof import("@datastructures-js/linked-list").DoublyLinkedList;
  const PriorityQueue: typeof import("@datastructures-js/priority-queue").PriorityQueue;
  const MinPriorityQueue: typeof import("@datastructures-js/priority-queue").MinPriorityQueue;
  const MaxPriorityQueue: typeof import("@datastructures-js/priority-queue").MaxPriorityQueue;
  const Queue: typeof import("@datastructures-js/queue").Queue;
  const EnhancedSet: typeof import("@datastructures-js/set").EnhancedSet;
  const Stack: typeof import("@datastructures-js/stack").Stack;

  interface ListNode {
    val: number;
    next: ListNode | null;
  }

  interface ListNodeConstructor {
    new (val?: number, next?: ListNode | null): ListNode;
    readonly prototype: ListNode;
  }

  var ListNode: ListNodeConstructor;

  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  interface TreeNodeConstructor {
    new (
      val?: number,
      left?: TreeNode | null,
      right?: TreeNode | null,
    ): TreeNode;
    readonly prototype: TreeNode;
  }

  var TreeNode: TreeNodeConstructor;
}

export {};
