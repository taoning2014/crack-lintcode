// Given a linked list, remove the nth node from the end of list and return its head.

// For example,

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.

// Note:
// Given n will always be valid.
// Try to do this in one pass.
'use strict';
require('chai').should();

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var array = [];
  var position;
  var cur;
  var i;

  if (!head) {
    return null;
  }

  // don't remove
  if (n === 0) {
    return head;
  }

  // one element
  if (!head.next) {
    return null;
  }

  // two element
  if (!head.next.next) {
    if (n === 1) {
      head.next = null;
      return head;
    } else {
      return head.next;
    }
  }

  cur = head;
  while (cur) {
    array.push(cur);
    cur = cur.next;
  }

  position = array.length - n;
  if (position === 0) {
    head = array[1];
  } else if (position === array.length - 1) {
    array[position - 1].next = null;
  } else {
    array[position - 1].next = array[position + 1]
  }

  return head;
};

describe('Test', function() {
  var n0 = new ListNode(1);
  var n1 = new ListNode(2);
  var n2 = new ListNode(3);
  n0.next = n1;
  n1.next = n2;

  it('Should pass', function() {
    console.log(removeNthFromEnd(n0, 2));
  });
});
