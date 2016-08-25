'use strict';

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function _buildTree(inorder, inStart, inEnd, postorder, postStart, postEnd) {
  if (inStart > inEnd || postStart > postEnd) {
    return null;
  }

  const node = new TreeNode(postorder[postEnd]);
  const position = inorder.indexOf(postorder[postEnd], inStart);
  node.left = _buildTree(inorder, inStart, position - 1, postorder, postStart, postStart + position - inStart - 1);
  node.right = _buildTree(inorder, position + 1, inEnd, postorder, postStart + position - inStart, postEnd - 1);

  return node;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!Array.isArray(inorder) || !Array.isArray(postorder) || inorder.length !== postorder.length) {
    return null;
  }

  return _buildTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

console.log(buildTree([1, 2], [2, 1]));
