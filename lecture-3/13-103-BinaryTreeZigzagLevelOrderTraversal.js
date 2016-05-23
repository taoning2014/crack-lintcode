// Given a binary tree, return the zigzag level order traversal of its nodes' values.
// (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree {3,9,20,#,#,15,7},
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  var resultArray = [];
  var queue = [];
  var lToR = true;
  var temp;
  var size;
  var level;
  var i;

  if (!root) {
    return resultArray;
  }

  queue.push(root);
  while (queue.length) {
    size = queue.length;
    level = [];

    for (i = 0; i < size; i++) {
      temp = queue.shift();
      if (lToR) {
        level.push(temp.val);
      } else {
        level.unshift(temp.val);
      }
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    lToR = !lToR;
    resultArray.push(level);
  }

  return resultArray;
};
