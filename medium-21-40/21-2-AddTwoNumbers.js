// You are given two linked lists representing two non-negative numbers. The digits are stored
// in reverse order and each of their nodes contain a single digit. Add the two numbers and
// return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function merge(leftNode, rightNode) {
  let dummy = new ListNode(0);
  let cur = dummy;

  while (leftNode && rightNode) {
    cur.next = new ListNode(leftNode.val + rightNode.val);
    cur = cur.next;
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }

  if (leftNode) {
    cur.next = leftNode;
  } else {
    cur.next = rightNode;
  }

  return dummy.next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 ? l1 : l2;
  }

  // add (merge)
  let dummy = new ListNode(0);
  dummy.next = merge(l1, l2);

  // modify
  let curNode = dummy.next;
  while (curNode) {
    if (curNode.val >= 10) {
      curNode.val -= 10;
      if (curNode.next) {
        curNode.next.val += 1;
      } else {
        curNode.next = new ListNode(1);
      }
    }

    curNode = curNode.next;
  }

  return dummy.next;
};
