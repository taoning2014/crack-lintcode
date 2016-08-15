/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function _pathSum(node, target, result, cur) {
  if (!node.left && !node.right && target === 0) {
    result.push(cur);
    return;
  }


  if (!node.left) {
    const copy = cur.slice();
    copy.push(node.left.val);
    _pathSum(node.left, target - node.left.val, result, copy);
  }

  if (!node.right) {
    const copy = cur.slice();
    copy.push(node.right.val);
    _pathSum(node.right, target - node.right.val, result, copy);
  }
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root || !Number.isInteger(sum)) {
    return [];
  }

  const result = [];
  _pathSum(root, sum - root.val, result, [root.val]);
  return result;
};
