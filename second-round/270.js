'use strict';

// ========================================================================
// Time:   10min
// Submit: 2 return diff instead of val of node
// ========================================================================

// Given a non-empty binary search tree and a target value,
// find the value in the BST that is closest to the target.

// Note:
// Given target value is a floating point.
// You are guaranteed to have only one unique value in the BST that is closest to the target.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var cur;

function _closestValue(node, target) {
  if (!node) {
    return;
  }

  const diff1 = Math.abs(cur - target);
  const diff2 = Math.abs(node.val - target);

  if (diff1 > diff2) {
    cur = node.val;
  }

  _closestValue(node.left, target);
  _closestValue(node.right, target);
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  if (!root) {
    return NaN;
  }

  cur = root.val;

  _closestValue(root, target)

  return cur;
};
