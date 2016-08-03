'use strict';
// You are given two jugs with capacities x and y litres. There is an infinite amount of water supply available. You need to determine whether it is possible to measure exactly z litres using these two jugs.

// If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.

// Operations allowed:

// Fill any of the jugs completely with water.
// Empty any of the jugs.
// Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.
// Example 1: (From the famous "Die Hard" example)

// Input: x = 3, y = 5, z = 4
// Output: True
// Example 2:

// Input: x = 2, y = 6, z = 5
// Output: False

// refer: https://discuss.leetcode.com/topic/49238/math-solution-java-solution

function GCD(x, y) {
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(y) || x < 0 || y < 0 || z < 0) {
    return false;
  }

  if (x + y < z) {
    return false;
  }

  if (x === z || y === z || x + y === z) {
    return true;
  }

  if (x < y) {
    const temp = x;
    x = y;
    y = temp;
  }

  return z % GCD(x, y) === 0;
};

// console.log(GCD(16, 2));
// console.log(GCD(24, 8));
console.log(canMeasureWater(2, 5, 4));
console.log(canMeasureWater(2, 6, 5));
