// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var head = new ListNode(1);
  var cur = head;
  while (l1 || l2) {
    if (!l1) {
      while (l2) {
        cur.next = l2;
        l2 = l2.next;
        cur = cur.next;
      }
    } else if (!l2) {
      while (l1) {
        cur.next = l1;
        l1 = l1.next;
        cur = cur.next;
      }
    } else if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
      cur = cur.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
      cur = cur.next;
    }
  }

  return head.next;
};
