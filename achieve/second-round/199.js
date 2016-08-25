'use strict';

// ========================================================================
// Time:   7min
// Submit: 1
// ========================================================================

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function helper(node) {
  const queue = [];
  const levelOrder= [];
  queue.push(node);
  while (queue.length !== 0) {
    const len = queue.length;
    const curLever = [];
    for (let i = 0; i < len; i++) {
      const curNode = queue.shift();
      curLever.push(curNode.val);

      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
    levelOrder.push(curLever);
  }

  return levelOrder;
}

function createArray(levelOrder) {
  const result = [];
  for (let i = 0; i < levelOrder.length; i++) {
    result.push(levelOrder[i].pop());
  }

  return result;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root || !(root instanceof TreeNode)) {
    return [];
  }

  const levelOrder = helper(root);
  return createArray(levelOrder);
};
