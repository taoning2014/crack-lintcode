'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!Number.isInteger(numRows) || numRows < 1) {
    return [];
  }

  if (numRows === 1) {
    return [[1]];
  }

  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  const result = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    const lastRow = result[i - 1];
    const curRow = [1];
    for (let j = 0; j < lastRow.length - 1; j++) {
      curRow.push(lastRow[j] + lastRow[j + 1]);
    }
    curRow.push(1);
    result.push(curRow);
  }

  return result;
};

console.log(generate(1));
console.log(generate(3));
console.log(generate(5));
