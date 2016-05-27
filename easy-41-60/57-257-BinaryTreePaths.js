// Given a binary tree, return all root-to-leaf paths.

// For example, given the following binary tree:

//    1
//  /   \
// 2     3
//  \
//   5
// All root-to-leaf paths are:

// ["1->2->5", "1->3"]

// Definition for a binary tree node.

// ======
// Note:
// 1, Don't do many things in one line, easy to have bug, e.g.
// 2, Do notice what is the required return type and format, for this one, I thought I will return 2d array...

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

'use strict';
require('chai').should();

var allPath;

function _binaryTreePaths(node, curPath) {
  var copy;

  if (!node.left && !node.right) {
    allPath.push(curPath);
    return;
  }

  if (node.left) {
    copy = curPath.slice();
    copy.push(node.left.val);
    _binaryTreePaths(node.left, copy);
  }

  if (node.right) {
    copy = curPath.slice();
    copy.push(node.right.val);
    _binaryTreePaths(node.right, copy);
  }

}

function _buildString(allPath) {
  var result = [];
  var i;
  for (i = 0; i < allPath.length; i++) {
    result.push(allPath[i].join('->'))
  }
  return result;
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  allPath = [];

  if (!root) {
    return allPath;
  }

  _binaryTreePaths(root, [root.val]);

  return _buildString(allPath);
};

describe('Test', function() {
  var n0;
  var n1;
  var n2;
  var n3;
  var n4;

  it('Should pass', function() {
    n0 = new TreeNode(5);
    n1 = new TreeNode(4);
    n2 = new TreeNode(3);
    n3 = new TreeNode(2);
    n4 = new TreeNode(1);

    n0.left = n1;
    n0.right = n2;
    n2.left = n3;
    n2.right = n4;

    console.log(binaryTreePaths(n0));
  })
})
