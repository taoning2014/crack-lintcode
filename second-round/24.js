'use strict';

// ========================================================================
// Time:   7min
// Submit: 1
// ========================================================================

// Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values
// in the list, only nodes itself can be changed.

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !(head instanceof ListNode)) {
    return null;
  }

  const dummy = new ListNode(0);
  let pre = dummy;
  dummy.next = head;

  while (pre.next && pre.next.next) {
    const temp = pre.next.next;
    pre.next.next = pre.next.next.next;
    temp.next = pre.next;
    pre.next = temp;

    pre = pre.next.next;
  }

  return dummy.next;
};

let l1 = new ListNode(1);
let l2 = new ListNode(2);
let l3 = new ListNode(3);
l1.next = l2;
l2.next = l3;

console.log(swapPairs(l1));
