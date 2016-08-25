// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You must do this in-place without altering the nodes' values.

// For example,
// Given {1,2,3,4}, reorder it to {1,4,2,3}.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function findMiddle(node) {
  var slow = node;
  var fast = node.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverse(head) {
  var pre = null;
  var temp;

  while (head) {
    temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }

  return pre;
}

function merge(leftNode, rightNode) {
  var dummy = new ListNode(0);
  var cur = dummy;
  var index = 1;

  while(leftNode && rightNode) {
    if (index % 2) {
      cur.next = leftNode;
      leftNode = leftNode.next;
    } else {
      cur.next = rightNode;
      rightNode = rightNode.next;
    }
    cur = cur.next;
    index++;
  }

  if (leftNode) {
    cur.next = leftNode
  } else {
    cur.next = rightNode;
  }
}
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  var mid;
  var tail;

  if (!head) {
    return;
  }

  mid = findMiddle(head);
  tail = reverse(mid.next);
  mid.next = null;

  merge(head, tail);
};
