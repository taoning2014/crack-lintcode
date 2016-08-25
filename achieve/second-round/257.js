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

function _binaryTreePaths(node, paths, cur) {
  cur.push(node.val);

  if (!node.left && !node.right) {
    paths.push(cur);
  }

  if (node.left) {
    const copy = cur.slice();
    _binaryTreePaths(node.left, paths, copy);
  }

  if (node.right) {
    const copy = cur.slice();
    _binaryTreePaths(node.right, paths, copy);
  }
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root || !(root instanceof TreeNode)) {
    return [];
  }

  const paths = [];
  _binaryTreePaths(root, paths, []);

  return paths.map(p => p.join('->'))
};
