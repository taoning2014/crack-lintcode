'use strict';

// ========================================================================
// Time:   8min
// Submit: 2 can't call exchange
// ========================================================================

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function exchange(headA, headB) {
  const temp = headA;
  headA = headB;
  headB = temp;
}

function length(node) {
  let count = 0;
  while (node) {
    count++;
    node = node.next;
  }

  return count;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB || !(headA instanceof ListNode) || !(headB instanceof ListNode)) {
    return null;
  }

  const m = length(headA);
  const n = length(headB);

  if (m < n) {
    // can't call function, params will have copy of it, so exchange won't work
    // exchange(headA, headB);
    const temp = headA;
    headA = headB;
    headB = temp;
  }

  const diff = Math.abs(m - n);
  while (diff !== 0) {
    headA = headA.next;
    diff--;
  }

  while (headA) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }

  return null;
};
