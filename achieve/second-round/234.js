'use strict';

// ========================================================================
// Time:   20min
// Submit: 3
//  1, line 41 should test fast && fast.next instead of !fast ...
//  2, need to check when head is null, return true or false
// ========================================================================

'use strict';

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function reverse(node) {
  let pre = null;
  while (node) {
    const temp = node.next;
    node.next = pre;
    pre = node;
    node = temp;
  }

  return pre;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) {
    return true;
  }

  // move pre to mid
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // reverse last half
  let r = reverse(slow);
  let l = head;

  // compare
  while (r) {
    if (l.val !== r.val) {
      return false;
    }

    l = l.next;
    r = r.next;
  }

  return true;
};


var l1 = new ListNode(0);
var l2 = new ListNode(0);
l1.next = l2;

console.log(isPalindrome(l1));
