'use strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!(root instanceof TreeNode)) {
    return [];
  }

  const stack = [];
  const result = [];
  let cur = root;

  while (cur !== null && stack.length !== 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    result.push(cur);
    cur = cur.right;
  }

  return result;
};
