'use strict';

// ========================================================================
// Time:   5min
// Submit: 2 didn't know row index should begin from 0, it's a good question
//  to ask the interviewer
// ========================================================================

// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (!Number.isInteger(rowIndex) || rowIndex < 0) {
    return [];
  }

  if (rowIndex === 0) {
    return [1];
  }

  if (rowIndex === 1) {
    return [1, 1];
  }

  let lastRow = [1, 1];
  let curRow;
  for (let i = 2; i <= rowIndex; i++) {
    curRow = [1];
    for (let j = 0; j < lastRow.length - 1; j++) {
      curRow.push(lastRow[j] + lastRow[j + 1]);
    }
    curRow.push(1);
    lastRow = curRow;
  }

  return curRow;
};

console.log(getRow(4));
