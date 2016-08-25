// Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values
// in the list, only nodes itself can be changed.

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var p;
  var q;
  var record;
  var cur;

  if (!head) {
    return head;
  }

  record = new ListNode(0);
  cur = record;

  record.next = head;

  while (cur.next && cur.next.next) {
    // switch 2 nodes
    p = cur.next;
    q = p.next;
    p.next = q.next;
    q.next = p;
    cur.next = q;

    // move cur 2 steps
    cur = cur.next.next;
  }

  return record.next;
};
