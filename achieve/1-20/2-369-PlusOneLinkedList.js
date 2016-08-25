'use strict';
// Given a non-negative number represented as a singly linked list of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.

// Example:
// Input:
// 1->2->3

// Output:
// 1->2->4


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function reverse(node) {
  let pre = null;
  while (node !== null) {
    const temp = node.next;
    node.next = pre;
    pre = node;
    node = temp;
  }

  return pre;
}

function plus(node) {
  node.val++;
  while (node.next !== null) {
    if (node.val === 10) {
      node.val = 0;
      node.next.val++;
      node = node.next;
    } else {
      break;
    }
  }

  if (node.val === 10) {
    node.val = 0;
    node.next = new ListNode(1)
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function(head) {
  if (!head || !(head instanceof ListNode)) {
    return null;
  }

  // reverse list
  head = reverse(head);

  // plus one and check each digits whether equal to 10
  plus(head);

  // reverse back
  return reverse(head);
};

const l1 = new ListNode(3);
const l2 = new ListNode(2);
const l3 = new ListNode(9);
l1.next =l2;
l2.next =l3;
console.log(plusOne(l1));
