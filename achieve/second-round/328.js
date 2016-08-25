'use strict';

// ========================================================================
// Time:   10min
// Submit: 1
// ========================================================================

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  const dummyOdd = new ListNode(0);
  const dummyEven = new ListNode(0);
  let curOdd = head;
  let curEven = head.next;
  dummyOdd.next = curOdd;
  dummyEven.next = curEven;

  while (curOdd && curEven && curOdd.next.next) {
    curOdd.next = curOdd.next.next;
    curEven.next = curEven.next.next;
    curOdd = curOdd.next;
    curEven = curEven.next;
  }


  curOdd.next = dummyEven.next;
  return dummyOdd.next;
};
