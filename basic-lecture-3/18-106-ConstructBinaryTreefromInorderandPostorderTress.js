// Given inorder and postorder traversal of a tree, construct the binary tree.

// =====
// Note:
// 1, arr.indexOf(searchElement[, fromIndex = 0]). From index is the second element
// 2, I believe this method require each node has unique value

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

require('chai').should();

function _buildTree(inorder, inStart, inEnd, postorder, postStart, postEnd) {
  if (inStart > inEnd || postStart > postEnd) {
    return null;
  }

  var node = new TreeNode(postorder[postEnd]);
  var position = inorder.indexOf(postorder[postEnd], inStart);
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
  if (!inorder.length || inorder.length !== postorder.length) {
    return null;
  }

  return _buildTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

describe('Test', function() {
  it('Should pass', function() {
    var node = buildTree([-1], [-1]);
    console.log(node);
  });

  it('Should pass', function() {
    var node = buildTree([3, 5, 6, 7, 10], [3, 6, 10, 7, 5]);
    console.log(node);
  });
});
