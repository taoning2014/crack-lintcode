// Given a list, rotate the list to the right by k places, where k is non-negative.

// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.
'use strict';
require('chai').should();

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function findLength(head) {
  var length = 0;

  while (head) {
    length++;
    head = head.next;
  }

  return length;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  var length;
  var rotate;
  var dummy;
  var oldHead;
  var newHead;
  var curNode;
  var i;

  if (!head) {
    return head;
  }

  length = findLength(head);
  rotate = k % length;

  // BUG: need to consider if not rotate
  if (!rotate) {
    return head;
  }

  dummy = new ListNode(0);
  dummy.next = head;
  oldHead = head;

  // move curNode
  curNode = dummy;
  for (i = 0; i < rotate; i++) {
    curNode = curNode.next;
  }

  // move newHead to one position before it
  newHead = dummy;
  while (curNode.next) {
    curNode = curNode.next;
    newHead = newHead.next;
  }

  // link
  dummy.next = newHead.next;
  newHead.next = null;
  curNode.next = oldHead;

  return dummy.next;
};
