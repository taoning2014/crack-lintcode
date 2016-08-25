'use strict';

// Given a binary tree, find the largest subtree which is a Binary Search Tree (BST), where
// largest means subtree with largest number of nodes in it.

// Note:
// A subtree must include all of its descendants.
// Here's an example:
//     10
//     / \
//    5  15
//   / \   \
//  1   8   7
// The Largest BST Subtree in this case is the highlighted one.
// The return value is the subtree's size, which is 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var result;

function traverse(node) {
  if (!node) {
    return [0, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  }

  const left = traverse(node.left);
  const right = traverse(node.right);
  if (left[0] === -1 || right[0] === -1 || node.val <= left[2] || node.val >= right[1]) {
    return [-1, 0, 0];
  }

  const size = left[0] + 1 + right[0];
  result = Math.max(size, result);
  return [size, Math.min(left[1], node.val), Math.max(right[2], node.val)];
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var largestBSTSubtree = function(root) {
  if(!root) {
    return 0;
  }

  result = 0;
  traverse(root);
  return result;
};
