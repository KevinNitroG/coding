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
  const original = head;
  let fast = head;
  let slow = head;
  let prevSlow: ListNode | null = null;
  while (fast && fast.next) {
    prevSlow = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }
  if (prevSlow) {
    prevSlow.next = slow!.next;
  } else {
    return null;
  }
  slow = null;
  return original;
}

export {};
