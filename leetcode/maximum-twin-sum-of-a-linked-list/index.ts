// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSum(head: ListNode | null): number {
  if (!head) return 0;

  // 1. Find the middle of the linked list
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // 2. Reverse the second half in-place
  let prev: ListNode | null = null;
  let curr: ListNode | null = slow;

  while (curr) {
    const nextNode: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  // 3. Track max twin sums moving simultaneously
  let max = 0;
  let firstHalf: ListNode | null = head;
  let secondHalf: ListNode | null = prev; // 'prev' is the head of reversed half

  while (secondHalf) {
    max = Math.max(max, firstHalf!.val + secondHalf.val);
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  return max;
}

console.log(
  pairSum(
    new ListNode(5, new ListNode(4, new ListNode(2, new ListNode(1, null)))),
  ),
); // 6

console.log(
  pairSum(
    new ListNode(4, new ListNode(2, new ListNode(2, new ListNode(3, null)))),
  ),
); // 7
