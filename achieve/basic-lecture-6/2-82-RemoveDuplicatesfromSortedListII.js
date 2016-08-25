// Given a sorted linked list, delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list.

// For example,
// Given 1->2->3->3->4->4->5, return 1->2->5.
// Given 1->1->1->2->3, return 2->3.
// Given 1->1->1->3->3, return 2->3.

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
var deleteDuplicates = function(head) {
  var dummy;
  var pre;
  var value;

  if (!head || !head.next) {
    return null;
  }

  dummy = new ListNode(0);
  dummy.next = head;
  pre = dummy;

  while (pre.next && pre.next.next) {
    if (pre.next.val === pre.next.next.val) {
      value = pre.next.val;
      while(pre.next && pre.next.val === value) {
        pre.next = pre.next.next;
      }
    } else {
      pre = pre.next;
    }
  }

  return dummy.next;
};
