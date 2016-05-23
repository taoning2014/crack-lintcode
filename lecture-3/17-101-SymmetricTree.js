// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

'use strict';
require('chai').should();

var isSymmetricTree;

// Solution 1.
function _isSymmetric(array, size) {
  // console.log('Debug _isSymmetric: ');
  // console.log(array);
  // console.log('size: ' + size);

  var i;
  for (i = 0; i < Math.floor(size / 2); i++) {
    if (!array[i] && !array[size - i - 1]) {
      continue;
    }

    if ((!array[i] || !array[size - i - 1]) || (array[i].val !== array[size - i - 1].val)) {
      isSymmetricTree = false;
      return;
    }
  }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  var queue = [];
  var size;
  var temp;
  var i;
  isSymmetricTree = true;

  if (!root) {
    return isSymmetricTree;
  }

  queue.push(root);
  while (queue.length) {
    size = queue.length;

    // test whether isSymmetric at this level
    // if this level is false, don't need to go deeper
    _isSymmetric(queue, size);
    if (!isSymmetricTree) {
      return isSymmetricTree;
    }

    // push next level to queue;
    for (i = 0; i < size; i++) {
      temp = queue.shift();
      if (temp) {
        queue.push(temp.left);
        queue.push(temp.right);
      }
    }
  }

  return isSymmetricTree;
};

// Solution 2.
function _isSymmetric(l, r) {
  if (!l && !r) {
    return true;
  }

  if (!l || !r) {
    return false;
  }

  return (l.val === r.val) && _isSymmetric(l.left, r.right) && _isSymmetric(l.right, r.left);
}

var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  return _isSymmetric(root.left, root.right);
};

describe('Test', function() {
  var T0N0;
  var T0N1;
  var T0N2;

  before(function() {
    T0N0 = new TreeNode(1);
    T0N1 = new TreeNode(2);
    T0N2 = new TreeNode(2);
  });

  it('Should pass', function() {
    T0N0.left = T0N1;
    T0N0.right = T0N2;
    isSymmetric(T0N0).should.be.true;
  });
});
