// Given a singly linked list, determine if it is a palindrome.

// Follow up:
// Could you do it in O(n) time and O(1) space?
'use strict';
require('chai').should();

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var fast;
  var slow;
  var cur;
  var next;
  var l;
  var r;
  var step = 0;

  while (!head || !head.next) {
    return true;
  }

  if (!head.next.next) {
    return head.val === head.next.val;
  }

  // move slow to the middle
  fast = head;
  slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    step++;
  }

  // reverse the last half
  cur = slow.next;
  next = cur.next;
  while (cur) {
    cur.next = slow;
    slow = cur;
    cur = next;
    if (next) {
      next = next.next;
    }
  }

  // test it
  l = head;
  r = slow;
  while (step) {
    if (l.val !== r.val) {
      return false;
    }
    l = l.next;
    r = r.next;
    step--;
  }

  return true;
};

describe('Test', function () {
  var n0 = new ListNode(0);
  var n1 = new ListNode(1);
  var n2 = new ListNode(5);
  var n3 = new ListNode(1);
  var n4 = new ListNode(0);
  n0.next = n1;
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;

  it('Should pass', function () {
    console.log(isPalindrome(n0));
  })
})
