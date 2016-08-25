/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root || !(root instanceof TreeNode)) {
    return [];
  }

  const queue = [];
  const result = [];
  queue.push(root);

  while (queue.length !== 0) {
    const length = queue.length;
    const curLevel = [];

    for (let i = 0; i < length; i++) {
      const curNode = queue.shift();
      curLevel.push(curNode.val);

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }

      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }

    result.push(curLevel);
  }

  return result;
};
