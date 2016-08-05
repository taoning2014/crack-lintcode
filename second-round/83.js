'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !(head instanceof ListNode)) {
    return null;
  }

  let dummy = new ListNode(0);
  let pre = dummy;
  dummy.next = head;

  while (pre.next && pre.next.next) {
    if (pre.next.val === pre.next.next.val) {
      pre = pre.next;
      while (pre.next && pre.next.val === pre.val) {
        pre.next = pre.next.next
      }
    } else {
      pre = pre.next;
    }
  }

  return dummy.next;
};

let l1 = new ListNode(1);
let l2 = new ListNode(1);
let l3 = new ListNode(1);
let l4 = new ListNode(3);
let l5 = new ListNode(3);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;

console.log(deleteDuplicates(l1));
