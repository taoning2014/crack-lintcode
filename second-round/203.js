'use strict';

// ========================================================================
// Time:   4min
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head || !(head instanceof ListNode) || !Number.isInteger(val)) {
    return head;
  }

  const dummy = new ListNode(0);
  let pre = dummy;
  dummy.next = head;

  while (pre && pre.next) {
    if (pre.next.val === val) {
      pre.next = pre.next.next;
    } else {
      pre = pre.next;
    }
  }

  return dummy.next;
};
