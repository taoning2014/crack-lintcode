/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var hasPath;

function _hasPathSum(node, target) {
  if (!node.left && !node.right && target === 0) {
    hasPath = true;
    return;
  }

  if (node.left) {
    _hasPathSum(node.left, target - node.left.val);
  }

  if (node.right) {
    _hasPathSum(node.right, target - node.right.val);
  }
}
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root || !Number.isInteger(sum)) {
    return false;
  }

  hasPath = false;
  _hasPathSum(root, sum - root.val);
  return hasPath;
};
