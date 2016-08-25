'use strict';

// ========================================================================
// Time:   7min
// Submit: 1
// ========================================================================

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || !Number.isInteger(n) || n < 0) {
    return null;
  }
  // 1->2->3->4->5, and n = 2.

  // move pre to nth node
  const dummy = new ListNode(0);
  dummy.next = head;

  let cur = head;
  let pre = dummy;
  for (let i = 0; i < n; i++) {
    cur = cur.next;
  }

  while(cur) {
    cur = cur.next;
    pre = pre.next;
  }

  // connect pre to nth next
  pre.next = pre.next.next;

  return dummy.next;
};
