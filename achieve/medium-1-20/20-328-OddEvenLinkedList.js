// Given a singly linked list, group all odd nodes together followed by the even nodes.
// Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes)
// time complexity.

// Example:
// Given 1->2->3->4->5->NULL,
// return 1->3->5->2->4->NULL.

// Note:
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...
'use strict';
require('chai').should();

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  var oddCur;
  var evenCur;
  var evenHead;

  if (!head || !head.next) {
    return head;
  }

  oddCur = head;
  evenCur = head.next;
  evenHead = evenCur;

  // linked odd nodes
  while ((oddCur && oddCur.next && oddCur.next.next) || (evenCur && evenCur.next && evenCur.next.next)) {
    oddCur.next = oddCur.next.next;
    oddCur = oddCur.next;
    evenCur.next = evenCur.next.next;
    evenCur = evenCur.next;
  }
  oddCur.next = evenHead;

  return head;
};

describe('Test', function () {
  var n0 = new ListNode(1);
  var n1 = new ListNode(2);
  var n2 = new ListNode(3);
  var n3 = new ListNode(4);
  n0.next = n1;
  n1.next = n2;
  n2.next = n3;

  it('Should pass', function () {
    oddEvenList(n0);
    console.log(n0.next);
  })
})
