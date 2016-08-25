// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// Note: Do not modify the linked list.

// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Solution 1. 数学证明, refer: https://leetcode.com/discuss/65724/concise-java-solution-based-on-slow-fast-pointers
//  注意comment中说明的nCycle, instead of one cycle
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  var slow;
  var fast;
  var curNode;

  if (!head) {
    return null;
  }

  // find cycle
  // BUG: 注意，只有在找中点时，使用fast, slow时，fast在起步时才比slow多走一步。
  slow = head;
  fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }

  }

  // means no cycle
  if (!fast || !fast.next) {
    return null;
  }

  curNode = head;
  while (curNode !== slow) {
    curNode = curNode.next;
    slow = slow.next;
  }

  return curNode;
};
