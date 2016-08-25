'use strict';

// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

// Examples:

// Given binary tree [3,9,20,null,null,15,7],
//    3
//   /\
//  /  \
//  9  20
//     /\
//    /  \
//   15   7
// return its vertical order traversal as:
// [
//   [9],
//   [3,15],
//   [20],
//   [7]
// ]
// Given binary tree [3,9,8,4,0,1,7],
//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7
// return its vertical order traversal as:
// [
//   [4],
//   [9],
//   [3,0,1],
//   [8],
//   [7]
// ]
// Given binary tree [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5),
//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7
//     /\
//    /  \
//    5   2
// return its vertical order traversal as:
// [
//   [4],
//   [9,5],
//   [3,0,1],
//   [8,2],
//   [7]
// ]

// Bug:
// 1, when build list, can't do preOrder, won't pass: [3,9,8,4,0,1,7,null,null,null,2,5]
// 2, to fix 1, use queue, but still didn't pass a wired tree. So when record, not just record col, aslo record row

// Note:
// 1, Instead of using array then sort, could use map.
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function exchange(list, i, j) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

function sort(list) {
  for (let i = 1; i < list.length; i++) {
    for (let j = i; j > 0; j--) {
      if (list[j][1] < list[j - 1][1]) {
        exchange(list, j, j - 1);
      } else {
        break;
      }
    }
  }
}

function traversal(node, list) {
  const queue = [];
  // node, colNum, rowNum
  queue.push([node, 0]);

  while (queue.length !== 0) {
    const cur = queue.shift();

    list.push([cur[0].val, cur[1]]);

    if (cur[0].left) {
      queue.push([cur[0].left, cur[1] - 1]);
    }

    if (cur[0].right) {
      queue.push([cur[0].right, cur[1] + 1]);
    }
  }
}

function buildList(list) {
  const result = [];

  sort(list);

  let curCol = list[0][1];
  result.push([list[0][0]]);
  for (let i = 1; i < list.length; i++) {
    if (list[i][1] === curCol) {
      result[result.length - 1].push(list[i][0]);
    } else {
      result.push([list[i][0]]);
      curCol = list[i][1];
    }
  }

  return result;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  if (!root) {
    return [];
  }

  const list = [];
  // preOrder(root, 0, list);
  traversal(root, list);

  return buildList(list);
};

var t1 = new TreeNode(3);
var t2 = new TreeNode(9);
var t3 = new TreeNode(20);
var t4 = new TreeNode(15);
var t5 = new TreeNode(7);

t1.left = t2;
t1.right = t3;
t3.left = t4;
t3.right = t5;

console.log(verticalOrder(t1));
