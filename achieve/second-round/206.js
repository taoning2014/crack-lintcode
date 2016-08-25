'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) {
    return null;
  }

  let pre = null;
  while (head) {
    const temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }

  return pre;
};
