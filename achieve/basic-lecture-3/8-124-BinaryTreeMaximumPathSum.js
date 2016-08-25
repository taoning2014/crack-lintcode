// Given a binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some
// starting node to any node in the tree along the parent-child connections.
// The path does not need to go through the root.

// For example:
// Given the below binary tree,

//        1
//       / \
//      2   3
// Return 6.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var sum;

var maxPathSum = function(root) {
  sum = Number.NEGATIVE_INFINITY;

  if (!root) {
    return 0;
  }

  helper(root);
  return sum;
};

var helper = function(node) {
  var left;
  var right;
  if (!node) {
    return 0;
  }

  left = Math.max(0, helper(node.left));
  right = Math.max(0, helper(node.right));
  sum = Math.max(sum, left + right + node.val);
  return Math.max(left, right) + node.val
};
