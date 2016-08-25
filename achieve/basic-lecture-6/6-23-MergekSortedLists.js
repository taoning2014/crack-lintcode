// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// // Solution 1, recursive
// function _mergeKLists(lists, start, end) {
//   var mid;
//   var leftHead;
//   var rightHead;

//   if (start === end) {
//     return lists[start];
//   }

//   mid = start + Math.floor((end - start) / 2);
//   leftHead = _mergeKLists(lists, start, mid);
//   rightHead = _mergeKLists(lists, mid+1, end);

//   return merge(leftHead, rightHead);
// }

// function merge(leftHead, rightHead) {
//   var dummy = new ListNode(0);
//   var cur = dummy;

//   while (leftHead && rightHead) {
//     if (leftHead.val < rightHead.val) {
//       cur.next = leftHead;
//       leftHead = leftHead.next;
//     } else {
//       cur.next = rightHead;
//       rightHead = rightHead.next;
//     }
//     cur = cur.next;
//   }

//   if (leftHead) {
//     cur.next = leftHead;
//   } else {
//     cur.next = rightHead;
//   }

//   return dummy.next;
// }

// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function(lists) {
//   if (!lists || !lists.length) {
//     return null;
//   }

//   return _mergeKLists(lists, 0, lists.length - 1);
// };

// Solution 2, bottom up

function merge(leftHead, rightHead) {
  var dummy = new ListNode(0);
  var cur = dummy;

  while (leftHead && rightHead) {
    if (leftHead.val < rightHead.val) {
      cur.next = leftHead;
      leftHead = leftHead.next;
    } else {
      cur.next = rightHead;
      rightHead = rightHead.next;
    }
    cur = cur.next;
  }

  if (leftHead) {
    cur.next = leftHead;
  } else {
    cur.next = rightHead;
  }

  return dummy.next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  var newList;
  var newHead;
  var i;

  if (!lists || !lists.length) {
    return null;
  }

  while (lists.length > 1) {
    newList = [];
    for (i = 0; i < lists.length - 1; i+=2) {
      newHead = merge(lists[i], lists[i+1]);
      newList.push(newHead);
    }

    if (lists.length % 2) {
      newList.push(lists[lists.length - 1]);
    }

    lists = newList;
  }

  return lists[0];
};

