/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function _longestConsecutive(node, val, cur) {
  if (node === null) {
    count = Math.max(count, cur);
    return;
  }

  if (val - node.val !== -1) {
    count = Math.max(count, cur);
    _longestConsecutive(node.left, node.val, 1);
    _longestConsecutive(node.right, node.val, 1);
    return;
  }

  _longestConsecutive(node.left, node.val, cur + 1);
  _longestConsecutive(node.right, node.val, cur + 1);
}

var count;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
  if (!root) {
    return 0;
  }

  count = 0;
  _longestConsecutive(root.left, root.val, 1);
  _longestConsecutive(root.right, root.val, 1);
  return count;
};
