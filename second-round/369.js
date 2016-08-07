'use strict';

// ========================================================================
// Time:   15min
// Submit: 3
//  1, Use same name plusOne instead of _plusOne which lead a recursive call
//  2, line 34 forget to move node to next
// ========================================================================

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverse(head) {
  let pre = null;
  while (head) {
    const temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }

  return pre;
}

function _plusOne(node) {
  node.val++;
  while (node.next) {
    if (node.val === 10) {
      node.val = 0;
      node.next.val++;
      node = node.next;
    } else {
      break;
    }
  }

  if (node.val === 10) {
    node.val = 0;
    node.next = new ListNode(1);
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function(head) {
  if (!head || !(head instanceof ListNode)) {
    return null;
  }

  // reverse
  head = reverse(head);

  // plus one
  _plusOne(head);

  // reverse back
  head = reverse(head);

  // return
  return head;
};

const l1 = new ListNode(3);
const l2 = new ListNode(2);
const l3 = new ListNode(9);
l1.next = l2;
l2.next = l3;
console.log(plusOne(l1));
