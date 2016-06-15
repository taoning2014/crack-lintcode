// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Determine the maximum amount of money the thief can rob tonight without alerting the police.

// Example 1:
//      3
//     / \
//    2   3
//     \   \
//      3   1
// Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
// Example 2:
//      3
//     / \
//    4   5
//   / \   \
//  1   3   1
// Maximum amount of money the thief can rob = 4 + 5 = 9.

// Definition for a binary tree node.
'use strict';
require('chai').should();

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function _rob(node, couldRobCur, map) {
  if (!node) {
    return 0;
  }

  if (couldRobCur) {
    if (map.has(node) && map.get(node)['couldRobCur']) {
      return map.get(node)['couldRobCur'];
    }

    // BUG: Could not simply rob this node, otherwise can't pass test case 3
    let val1 = node.val + _rob(node.left, false, map) + _rob(node.right, false, map);
    let val2 = _rob(node.left, true, map) + _rob(node.right, true, map);
    let value = Math.max(val1, val2);

    if (map.has(node)) {
      map.get(node)['couldRobCur'] = value;
    } else {
      map.set(node, {'couldRobCur': value});
    }

    return value;
  } else {
    if (map.has(node) && map.get(node)['couldNotRobCur']) {
      return map.get(node)['couldNotRobCur'];
    }

    let value = _rob(node.left, true, map) + _rob(node.right, true, map);

    if (map.has(node)) {
      map.get(node)['couldNotRobCur'] = value;
    } else {
      map.set(node, {'couldNotRobCur': value});
    }

    return value
  }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  let map = new Map();

  let val1 = _rob(root, true, map);
  let val2 = _rob(root, false, map);


  return Math.max(val1, val2);
};

describe('Test', function() {
  it('Should pass 1', function() {
    console.log(rob(null));
  });

  it('Should pass 2', function() {
    let n1 = new TreeNode(3);
    let n2 = new TreeNode(4);
    let n3 = new TreeNode(5);
    let n4 = new TreeNode(1);
    let n5 = new TreeNode(3);
    let n6 = new TreeNode(1);
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.right = n6;
    console.log(rob(n1));
  });

  it('Should pass 3', function() {
    let n1 = new TreeNode(4);
    let n2 = new TreeNode(1);
    let n3 = new TreeNode(2);
    let n4 = new TreeNode(3);
    n1.left = n2;
    n2.left = n3;
    n3.left = n4;
    console.log(rob(n1));
  });
});
