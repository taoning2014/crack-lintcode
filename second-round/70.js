'use strict';

// ========================================================================
// Time:   5min
// Submit: 3 (RED FLAG! Don't pass in
//  record as second param, don't return in line 35)
// ========================================================================

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function _climbStairs(n , record) {
  if (record.has(n)) {
    return record.get(n);
  }

  const val = _climbStairs(n - 1, record) + _climbStairs(n - 2, record);
  record.set(n, val);
  return val;
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (!Number.isInteger(n) || n < 0) {
    return NaN;
  }

  const record = new Map();
  record.set(0, 1);
  record.set(1, 1);

  return _climbStairs(n, record);
};
