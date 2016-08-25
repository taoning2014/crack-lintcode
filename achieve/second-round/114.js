'use strict';

// ========================================================================
// Time:   10min
// Submit: 1
// ========================================================================

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
  if (!root || !(root instanceof TreeNode)) {
    return;
  }

  const stack = [];

  if (root.right) {
    stack.push(root.right);
    root.right = null;
  }

  if (root.left) {
    stack.push(root.left);
    root.left = null;
  }

  while (stack.length !== 0) {
    const curNode = stack.pop();
    root.right = curNode;
    root = root.right;

    if (curNode.right) {
      stack.push(curNode.right);
      curNode.right = null;
    }

    if (curNode.left) {
      stack.push(curNode.left);
      curNode.left = null;
    }
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root || !(root instanceof TreeNode)) {
    return;
  }

  const stack = [];
  stack.push(root);

  let pre = new TreeNode(0);

  while (stack.length !== 0) {
    const curNode = stack.pop();
    pre.right = curNode;
    pre = pre.right;

    if (curNode.right) {
      stack.push(curNode.right);
    }

    if (curNode.left) {
      stack.push(curNode.left);
      curNode.left = null;
    }
  }
};
