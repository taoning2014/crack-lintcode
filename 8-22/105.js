'use strict';

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function _buildTree(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd || inStart > inEnd) {
    return null;
  }

  const node = new TreeNode(preorder[preStart]);
  const position = inorder.indexOf(preorder[preStart], inStart);
  node.left = _buildTree(preorder, preStart + 1, preStart + position - inStart, inorder, inStart, position - 1);
  node.right = _buildTree(preorder, preStart + position - inStart + 1, preEnd, inorder, position + 1, inEnd);

  return node;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!Array.isArray(preorder) || !Array.isArray(inorder) || preorder.length !== inorder.length) {
    return null;
  }

  return _buildTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

console.log(buildTree([5, 3, 1, 4, 7], [1, 3, 4, 5, 7]));
