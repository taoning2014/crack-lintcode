// Remove all elements from a linked list of integers that have value val.

// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var pre = new ListNode(0);
  pre.next = head;

  if (!head) {
    return head;
  }

  while(head && head.val === val) {
    head = head.next;
  }

  while (pre.next) {
    if (pre.next.val === val) {
      pre.next = pre.next.next;
    } else {
      pre = pre.next;
    }
  }

  return head;
};
