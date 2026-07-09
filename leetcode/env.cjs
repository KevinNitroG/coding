const { Deque } = require("@datastructures-js/deque");
const { Heap, MinHeap, MaxHeap } = require("@datastructures-js/heap");
const {
  LinkedList,
  LinkedListNode,
  DoublyLinkedList,
  DoublyLinkedListNode,
} = require("@datastructures-js/linked-list");
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");
const { Queue } = require("@datastructures-js/queue");
const { EnhancedSet } = require("@datastructures-js/set");
const { Stack } = require("@datastructures-js/stack");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

Object.assign(globalThis, {
  Deque,
  Heap,
  MinHeap,
  MaxHeap,
  LinkedList,
  LinkedListNode,
  DoublyLinkedList,
  DoublyLinkedListNode,
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
  Queue,
  EnhancedSet,
  Stack,
  ListNode,
  TreeNode,
});
