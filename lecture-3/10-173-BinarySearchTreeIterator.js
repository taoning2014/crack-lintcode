// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

// Calling next() will return the next smallest number in the BST.

// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.


// Definition for binary tree
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.stack = [];

  if (!root) {
    return null;
  }

  this.stack.push(root);
  while (root.left) {
    this.stack.push(root.left);
    root = root.left;
  }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  var node = this.stack.pop();
  var value = node.val;
  if (node.right) {
    this.stack.push(node.right);
    node = node.right;
    while (node.left) {
      this.stack.push(node.left);
      node = node.left;
    }
  }
  return value;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

describe('Test', function() {
  var T0N0;
  var T0N1;
  var T0N2;
  var T0N3;
  var T0N4;
  var T0N5;

  var T1N0;
  var T1N1;

  it('Should pass', function() {
    T0N0 = new TreeNode(6);
    T0N1 = new TreeNode(1);
    T0N2 = new TreeNode(4);
    T0N3 = new TreeNode(8);
    T0N4 = new TreeNode(3);
    T0N5 = new TreeNode(5);
    T0N0.left = T0N1;
    T0N0.right = T0N3;
    T0N1.right = T0N2;
    T0N2.left = T0N4;
    T0N2.right = T0N5;

    var i = new BSTIterator(T0N0);
    while (i.hasNext()) {
      console.log(i.next());
    }
  });

  it('Should pass', function() {
    var T1N0 = new TreeNode(2);
    var T1N1 = new TreeNode(1);
    T1N0.left = T1N1;

    var i = new BSTIterator(T1N0);
    while (i.hasNext()) {
      console.log(i.next());
    }
  });
});
