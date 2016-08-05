'use strict';

// ========================================================================
// Time:   10min
// Submit: 2 can't call .sort() on map.keys(), need to convert to Array first
// ========================================================================

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function createArray(map) {
  const array = Array.from(map.keys()).sort((p, q) => parseInt(p, 10) - parseInt(q, 10));
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(map.get(array[i]));
  }

  return result;
}

function helper (map, node) {
  if (!node) {
    return -1;
  }

  const height = 1 + Math.max(helper(map, node.left), helper(map, node.right));

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
  if (!root || !(root instanceof TreeNode)) {
    return [];
  }

  const map = new Map();
  helper(map, root);
  return createArray(map);
};
