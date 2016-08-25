// Given a non-empty binary search tree and a target value,
// find the value in the BST that is closest to the target.

// Note:
// Given target value is a floating point.
// You are guaranteed to have only one unique value in the BST that is closest to the target.

// =====
// Note:
// 1, 看清到底返回什么，距离还是那个value的值
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  var distance = Number.MAX_VALUE;
  var result;
  var cur = root;
  var cmp;

  if (!root) {
    return null;
  }

  while(cur) {
    if (Math.abs(cur.val - target) < distance) {
      distance = Math.abs(cur.val - target);
      result = cur.val;
    }
    cmp = target - cur.val;
    if (cmp < 0) {
      cur = cur.left;
    } else if (cmp > 0) {
      cur = cur.right;
    } else {
      return cur.val;
    }
  }

  return result;
};
