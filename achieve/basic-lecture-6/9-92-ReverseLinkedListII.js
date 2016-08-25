// Reverse a linked list from position m to n. Do it in-place and in one-pass.

// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,

// return 1->4->3->2->5->NULL.

// Note:
// Given m, n satisfy the following condition:
// 1 ≤ m ≤ n ≤ length of list.
'use strict';
require('chai').should();

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */var reverseBetween = function(head, m, n) {
  if (!head) {
    return head;
  }

  // find pre postion of begin
  let dummy = new ListNode(0);
  dummy.next = head;
  let preLeft = dummy;
  let right = dummy;
  // move to pre left
  for (let i = 1; i < m; i++) {
    preLeft = preLeft.next;
  }

  // move to post right
  for (let i = 0; i < n + 1; i++) {
    right = right.next;
  }

  // reverse from here to end position
  let curNode = preLeft.next;
  let pre = null;
  while (curNode !== right) {
    const temp = curNode.next;
    curNode.next = pre;
    pre = curNode;
    curNode = temp;
  }

  // link to right place
  preLeft.next.next = curNode;
  preLeft.next = pre;

  // think about edge case where m or n is the end

  return dummy.next;
};


describe('Test', function () {
  it('Should pass', function () {
    let n1 = new ListNode(1);
    let n2 = new ListNode(2);
    let n3 = new ListNode(3);
    let n4 = new ListNode(4);
    let n5 = new ListNode(5);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;

    console.log(n1);
    console.log(reverseBetween(n1, 1, 5));
  });
});
