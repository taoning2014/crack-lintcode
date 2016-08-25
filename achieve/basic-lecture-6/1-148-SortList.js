// Sort a linked list in O(n log n) time using constant space complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function findMid(node) {
  var slow = node;
  var fast = node.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
 }

 function merge(leftHead, rightHead) {
  var dummy = new ListNode(0);
  var curNode = dummy;

  while(leftHead && rightHead) {
    if (leftHead.val < rightHead.val) {
      curNode.next = leftHead;
      leftHead = leftHead.next;
    } else {
      curNode.next = rightHead;
      rightHead = rightHead.next;
    }
    curNode = curNode.next;
  }

  if (leftHead) {
    curNode.next = leftHead;
  } else {
    curNode.next = rightHead;
  }

  return dummy.next;
 }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  var left;
  var right;
  var mid;

  if (!head || !head.next) {
    return head;
  }

  mid = findMid(head);
  right = sortList(mid.next);
  mid.next = null;
  left = sortList(head);

  return merge(left, right);
};
