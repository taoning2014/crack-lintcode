'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  const dummy = new ListNode(0);
  let pre = dummy;

  while (l1 && l2) {
    const cmp = l1.val - l2.val;
    if (cmp <= 0) {
      pre.next = l1;
      l1 = l1.next;
    } else if (cmp > 0) {
      pre.next = l2;
      l2 = l2.next;
    }
    pre = pre.next;
  }

  if (l1) {
    pre.next = l1;
  } else {
    pre.next = l2;
  }

  return dummy.next;
};
