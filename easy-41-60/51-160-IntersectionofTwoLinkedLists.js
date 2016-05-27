// Write a program to find the node at which the intersection of two singly linked lists begins.


// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3
// begin to intersect at node c1.


// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var lenA = 0;
  var lenB = 0;
  var curA;
  var curB;
  var count;

  if (!headA || !headB) {
    return null;
  }

  curA = headA;
  while (curA) {
    lenA++;
    curA = curA.next;
  }

  curB = headB;
  while (curB) {
    lenB++;
    curB = curB.next;
  }

  count = Math.abs(lenA - lenB);
  curA = headA;
  curB = headB;

  if (lenA - lenB > 0) {
    while (count) {
      count--;
      curA = curA.next;
    }
  } else {
    while (count) {
      count--;
      curB = curB.next;
    }
  }

  while (curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }

  return curA;
};
