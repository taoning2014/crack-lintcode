'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Subscribe to see which companies asked this question

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root || !(root instanceof TreeNode)) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
