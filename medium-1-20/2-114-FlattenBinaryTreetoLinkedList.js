// Given a binary tree, flatten it to a linked list in-place.

// For example,
// Given

//          1
//         / \
//        2   5
//       / \   \
//      3   4   6

// The flattened tree should look like:
//    1
//     \
//      2
//       \
//        3
//         \
//          4
//           \
//            5
//             \
//              6

// Hints:
// If you notice carefully in the flattened tree, each node's right child
// points to the next node of a pre-order traversal.
'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  var stack = [];
  var result;
  var cur;
  var tempNode;

  if (!root) {
    return;
  }

  stack.push(root);
  result = new TreeNode(0);
  cur = result;

  while (stack.length) {
    tempNode = stack.pop();
    cur.right = new TreeNode(tempNode.val);
    cur = cur.right;

    if (tempNode.right) {
      stack.push(tempNode.right);
    }

    if (tempNode.left) {
      stack.push(tempNode.left);
    }
  }

  root.left = null;
  root.right = result.right.right;
};

describe('Test', function() {
  var n0 = new TreeNode(1);
  var n1 = new TreeNode(2);
  var n2 = new TreeNode(3);
  n0.left = n1;
  n0.right = n2;

  it('Should pass', function() {
    flatten(n0);
    console.log(n0);
  });
});
