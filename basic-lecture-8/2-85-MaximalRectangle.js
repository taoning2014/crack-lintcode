// Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle
// containing all ones and return its area

'use strict';
require('chai').should();

// [
//   [1, 1, 0, 0, 1],
//   [0, 1, 0, 0, 1],
//   [0, 0, 1, 1, 1],
//   [0, 0, 1, 1, 1],
//   [0, 0, 0, 0, 1]
// ];

// 思路： 看成将每行为底的直方图，然周转换为84题
// BUG: notice input type

// Solution 1. Time Limit Exceeded.
// function buildRect(nums, rowNum) {
//   let rects = [];
//   for (let i = 0; i < nums[rowNum].length; i++) {
//     let curSum = 0;
//     for (let j = rowNum; j >= 0; j--) {
//       if (nums[j][i] === 0) {
//         break;
//       }
//       curSum += nums[j][i];
//     }
//     rects.push(curSum);
//   }

//   return rects;
// }

// function findLargestRect(rects) {
//   let curMaxRect = Number.NEGATIVE_INFINITY;
//   let stack = [];

//   for (let i = 0; i <= rects.length; i++) {
//     let cur = (i === rects.length ? -1 : rects[i]);
//     while (stack.length && stack[stack.length - 1][1] > cur) {
//       let h = stack.pop()[1];
//       let w = (stack.length === 0 ? i : i - stack[stack.length - 1][0] - 1);
//       curMaxRect = Math.max(w * h, curMaxRect);
//     }
//     stack.push([i, rects[i]]);
//   }

//   return curMaxRect;
// }

/**
 * @param {character[][]} matrix
 * @return {number}
 */
// var maximalRectangle = function(matrix) {
//   let maxRect = Number.NEGATIVE_INFINITY;

//   if (!matrix || !matrix.length || !matrix[0].length) {
//     return 0;
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     let curRects = buildRect(matrix, i);
//     maxRect = Math.max(findLargestRect(curRects), maxRect);
//   }

//   return maxRect;
// };


// Solution 2. Use dp in calculate the height of each row
function charToNumber(chars) {
  let matrix = [];
  for (let i = 0; i < chars.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < chars[i].length; j++) {
      matrix[i].push(parseInt(chars[i][j], 10));
    }
  }

  return matrix;
}

function buildRect(nums, rowNum, dp) {
  dp[rowNum] = [];
  for (let i = 0; i < nums[rowNum].length; i++) {
    if (nums[rowNum][i] === 0) {
      dp[rowNum][i] = 0;
      continue;
    }
    dp[rowNum][i] = nums[rowNum][i] + dp[rowNum - 1][i];
  }

  return dp[rowNum];
}

function findLargestRect(rects) {
  let curMaxRect = Number.NEGATIVE_INFINITY;
  let stack = [];

  for (let i = 0; i <= rects.length; i++) {
    let cur = (i === rects.length ? -1 : rects[i]);
    while (stack.length && stack[stack.length - 1][1] > cur) {
      let h = stack.pop()[1];
      let w = (stack.length === 0 ? i : i - stack[stack.length - 1][0] - 1);
      curMaxRect = Math.max(w * h, curMaxRect);
    }
    stack.push([i, rects[i]]);
  }

  return curMaxRect;
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  let maxRect = Number.NEGATIVE_INFINITY;
  let dp = [];

  if (!matrix || !matrix.length || !matrix[0].length) {
    return 0;
  }

  // convert matrix to numbers
  matrix = charToNumber(matrix);
  console.log(matrix);
  // init first row
  dp[0] = [];
  for (let i = 0; i < matrix[0].length; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let i = 0; i < matrix.length; i++) {
    let curRects = (i === 0 ? dp[0] : buildRect(matrix, i, dp));
    maxRect = Math.max(findLargestRect(curRects), maxRect);
  }

  return maxRect;
};

describe('Test', function() {
  it('Should pass 1', function() {
    let matrix = [['0']];
    console.log(maximalRectangle(matrix));
  });

  it('Should pass 2', function() {
    let matrix = [['0','1'], ['1','0']];
    console.log(maximalRectangle(matrix));
  });
});
