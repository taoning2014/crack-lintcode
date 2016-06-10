// Sort a linked list using insertion sort.

'use strict';
require('chai').should();

// Refer: https://leetcode.com/discuss/96642/java-solution-a-little-trick-beats-90%25
// 注意和array的差别

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  let dummy = new ListNode(Number.NEGATIVE_INFINITE);
  dummy.next = head;
  let sorted = dummy;

  while (head) {
    if (head.val < sorted.val) {
      let pre = dummy;
      while (pre.next.val < head.val) {
        pre = pre.next;
      }

      sorted.next = sorted.next.next;
      head.next = pre.next;
      pre.next = head;
      head = sorted.next;
    } else {
      sorted = sorted.next;
      head = head.next;
    }
  }

  return dummy.next;
};

describe('Test', function () {
  it('Should pass', function () {
    let n1 = new ListNode(3);
    let n2 = new ListNode(1);
    let n3 = new ListNode(2);
    let n4 = new ListNode(5);
    let n5 = new ListNode(4);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;

    console.log(insertionSortList(n1));
  });
});
