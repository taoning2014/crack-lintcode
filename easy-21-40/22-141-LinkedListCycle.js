// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?
'use strict';

// @param {ListNode} head
// @return {boolean}
var hasCycle = function(head) {
  if (!head || !head.next || !head.next.next) {
    return false;
  }

  var slow = head;
  var fast = head.next.next;

  while (fast) {
    if (fast === slow || fast.next === slow) {
      return true;
    } else if (fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      fast = fast.next;
    }
  }

  return false;
};
