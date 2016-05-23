// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as a binary tree in
// which the depth of the two subtrees of every node never differ by more than 1.

var maxDepth = function(node) {
  if (!node) {
    return 0;
  }

  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) {
    return true;
  }

  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) < 2
    && isBalanced(root.left)
    && isBalanced(root.right);
};
