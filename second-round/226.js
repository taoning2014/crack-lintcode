'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Invert a binary tree.

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function helper(root) {
  if (!root) {
    return
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  helper(root.left);
  helper(root.right);
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root || !(root instanceof TreeNode)) {
    return null;
  }

  helper(root);

  return root;
};
