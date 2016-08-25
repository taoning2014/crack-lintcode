'use strict';

// Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove
// all leaves, repeat until the tree is empty.

// Example:
// Given binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Returns [4, 5, 3], [2], [1].

// Explanation:
// 1. Removing the leaves [4, 5, 3] would result in this tree:

//           1
//          /
//         2
// 2. Now removing the leaf [2] would result in this tree:

//           1
// 3. Now removing the leaf [1] would result in the empty tree:

//           []
// Returns [4, 5, 3], [2], [1].

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// refer: https://discuss.leetcode.com/topic/49194/10-lines-simple-java-solution-using-recursion-with-explanation

function getArray(map) {
  const result = [];
  const keys = Array.from(map.keys()).sort();

  for (let i of keys) {
    result.push(map.get(i));
  }

  return result;
}

function helper(node, map) {
  if (!node) {
    return -1;
  }

  const height = 1 + Math.max(helper(node.left, map), helper(node.right, map));
  if (!map.has(height)) {
    map.set(height, [node.val]);
  } else {
    map.get(height).push(node.val);
  }

  return height;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {
  if (!root) {
    return [[]];
  }

  const map = new Map();
  helper(root, map);
  return getArray(map);
};

const t1 = new TreeNode(1);
// const t2 = new TreeNode(2);
// const t3 = new TreeNode(3);
// const t4 = new TreeNode(4);
// const t5 = new TreeNode(5);
// t1.left = t2;
// t1.right = t3;
// t2.left = t4;
// t2.right = t5;

console.log(findLeaves(t1));
