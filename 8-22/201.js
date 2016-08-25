'use strict';

// refer: https://discuss.leetcode.com/topic/12133/bit-operation-solution-java/2

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  if (!Number.isInteger(m) || !Number.isInteger(n)
    || m <= 0 || n < m) {
    return 0;
  }

  let record = 0;
  while (m !== n) {
    m = m >>> 1;
    n = n >>> 1;
    record++;
  }

  return m << record;
};

var a = parseInt('1110', 2);
var b = parseInt('1111', 2);
console.log(rangeBitwiseAnd(a, b));
