'use strict';

// ========================================================================
// Time:   9min
// Submit: 3
//  1, slice should return length - 1. length has incresed 1, and slice's
//    end index won't include the itself
//  2, line 25 and 26 shouldn't just assgin to update, but should +=
// ========================================================================

/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
  if (!Number.isInteger(length) || !Array.isArray(updates)) {
    return [];
  }

  const result = new Array(length + 1);
  result.fill(0);

  for (let i = 0; i < updates.length; i++) {
    result[updates[i][0]] += updates[i][2];
    result[updates[i][1] + 1] += -updates[i][2];
  }

  let curInc = 0;
  for (let i = 0; i < result.length; i++) {
    result[i] += curInc;
    curInc = result[i];
  }

  return result.slice(0, result.length - 1);
};
