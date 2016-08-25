'use strict';

// Given a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

// For example:
// Given the following binary tree,
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
// You should return [1, 3, 4].

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


function getLeverOrder(node) {
  const result = [];
  const queue = [];

  queue.push(node);

  while (queue.length !== 0) {

    const len = queue.length;
    const curLevel = [];

    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      curLevel.push(cur.val);

      if (cur.left) {
        queue.push(cur.left);
      }

      if (cur.right) {
        queue.push(cur.right);
      }
    }
    result.push(curLevel);
  }

  return result;
}

function getLastElement(levelOrder) {
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
  if (!root) {
    return [];
  }

  const levelOrder = getLeverOrder(root);
  return getLastElement(levelOrder);
};

let t1 = new TreeNode(1);
console.log(rightSideView(t1));
