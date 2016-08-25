'use strict';

// refer: https://discuss.leetcode.com/topic/2919/my-accepted-code-with-explaination-does-anyone-have-a-better-idea

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
var postorderTraversal = function(root) {
  if (!(root instanceof TreeNode)) {
    return [];
  }

  const result = [];
  const stack = [];
  stack.push(root);

  while (stack.length !== 0) {
    const cur = stack.pop();
    result.push(cur.val);

    if (cur.left !== null) {
      stack.push(cur.left);
    }

    if (cur.right !== null) {
      stack.push(cur.right);
    }
  }

  return result.reverse();
};
