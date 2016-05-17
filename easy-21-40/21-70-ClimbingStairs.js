// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// @param {number} n
// @return {number}

// ====
// Note: Use record to avoid timeout
'use strict';

var record = {};

var climbStairs = function(n) {
  if (!Number.isInteger(n) || n < 0) {
    return -1;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  if (record[n]) {
    return record[n];
  } else {
    record[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return record[n];
  }
};
