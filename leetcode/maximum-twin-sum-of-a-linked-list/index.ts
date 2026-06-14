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
  let afterMiddle = findAfterMiddle(head);
  afterMiddle = reverse(afterMiddle!);
  let max = 0;
  while (afterMiddle) {
    const sum = head!.val + afterMiddle.val;
    if (sum > max) {
      max = sum;
    }
    head = head!.next;
    afterMiddle = afterMiddle.next;
  }
  return max;
}

function findAfterMiddle(head: ListNode | null): ListNode | null {
  let firstPtr = head;
  let secPtr = head?.next;
  while (secPtr?.next) {
    firstPtr = firstPtr!.next;
    secPtr = secPtr.next!.next;
  }
  return firstPtr!.next;
}

function reverse(head: ListNode): ListNode {
  let first = head;
  let sec = head.next;
  first.next = null;
  while (sec) {
    const temp = sec;
    sec = sec.next;
    temp.next = first;
    first = temp;
  }
  return first;
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
