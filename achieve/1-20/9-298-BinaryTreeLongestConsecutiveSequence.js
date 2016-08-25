'use strict';

// Given a binary tree, find the length of the longest consecutive sequence path.

// The path refers to any sequence of nodes from some starting node to any node in the
// tree along the parent-child connections. The longest consecutive path need to be from
// parent to child (cannot be the reverse).

// For example,
//    1
//     \
//      3
//     / \
//    2   4
//         \
//          5
// Longest consecutive sequence path is 3-4-5, so return 3.
//    2
//     \
//      3
//     /
//    2
//   /
//  1
// Longest consecutive sequence path is 2-3,not3-2-1, so return 2.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var curMax;
function _longestConsecutive(node, val, curCount) {
  if (node === null) {
    curMax = Math.max(curCount, curMax);
    return;
  }

  if (val - node.val !== -1) {
    curMax = Math.max(curCount, curMax);
    _longestConsecutive(node.left, node.val, 1);
    _longestConsecutive(node.right, node.val, 1);
    return;
  }

  _longestConsecutive(node.left, node.val, curCount + 1);
  _longestConsecutive(node.right, node.val, curCount + 1);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
  if (!root) {
    return 0;
  }

  curMax = 0;
  _longestConsecutive(root.left, root.val, 1);
  _longestConsecutive(root.right, root.val, 1);
  return curMax;
};
