'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !(head instanceof ListNode)) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (fast === slow) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
