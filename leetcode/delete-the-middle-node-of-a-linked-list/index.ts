// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head?.next === null) {
    return null;
  }
  const original = head;
  let slow = head;
  let fast = head?.next?.next || null;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  slow!.next = slow?.next?.next || null;
  return original;
}

export {};
