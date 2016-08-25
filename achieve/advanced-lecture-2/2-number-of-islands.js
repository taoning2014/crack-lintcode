// From http://www.lintcode.com/zh-cn/problem/number-of-islands/

// 给一个01矩阵，求不同的岛屿的个数。

// 0代表海，1代表岛，如果两个1相邻，那么这两个1属于同一个岛。我们只考虑上下左右为相邻。

// 您在真实的面试中是否遇到过这个题？ Yes
// 样例
// 在矩阵：

// [
//   [1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 1],
//   [0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1]
// ]

// 中有 3 个岛.
'use strict';
require('chai').should();

function dfs(matrix, row, col, rowLength, colLength) {
  if (row < 0 || row >= rowLength || col < 0 || col >= colLength) {
    return;
  }

  if (matrix[row][col]) {
    matrix[row][col] = false;
    dfs(matrix, row - 1, col, rowLength, colLength);
    dfs(matrix, row + 1, col, rowLength, colLength);
    dfs(matrix, row, col - 1, rowLength, colLength);
    dfs(matrix, row, col + 1, rowLength, colLength);
  }
}

function numOfIslands(matrix) {
  var row;
  var col;
  var rowLength;
  var colLength;

  var count = 0;

  if (!matrix || !matrix.length || !matrix[0].length) {
    return 0;
  }

  rowLength = matrix.length;
  colLength = matrix[0].length;

  for (row = 0; row < rowLength; row++) {
    for (col = 0; col < colLength; col++) {
      if (!matrix[row][col]) {
        continue;
      } else {
        count++;
        dfs(matrix, row, col, rowLength, colLength);
      }
    }
  }

  return count;
}

describe('Test', function() {
  it('Should pass', function() {
    var matrix = [
      [1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1]
    ]
    console.log(numOfIslands(matrix));
  });

  it('Should pass', function() {
    var matrix = [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1]
    ]
    console.log(numOfIslands(matrix));
  });
});
