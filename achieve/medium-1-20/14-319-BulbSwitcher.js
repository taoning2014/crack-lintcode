// There are n bulbs that are initially off. You first turn on all the bulbs.
// Then, you turn off every second bulb. On the third round, you toggle every
// third bulb (turning on if it's off or turning off if it's on). For the ith
// round, you toggle every i bulb. For the nth round, you only toggle the last
// bulb. Find how many bulbs are on after n rounds.

// Example:

// Given n = 3.

// At first, the three bulbs are [off, off, off].
// After first round, the three bulbs are [on, on, on].
// After second round, the three bulbs are [on, off, on].
// After third round, the three bulbs are [on, off, off].

// So you should return 1, because there is only one bulb is on.

'use strict';
require('chai').should();

// Solution 1. Memory Limit Exceeded
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  var bulbs = [];
  var result = 0;
  var i;
  var step;
  var curPosition;

  if (!Number.isInteger(n) || n < 1) {
    return 0;
  }

  for (i = 0; i < n; i++) {
    bulbs.push(false);
  }

  // nth round, toogle every n bulb
  for (i = 1; i < n + 1; i++) {
    curPosition = i - 1;
    step = i;
    while (curPosition < n) {
      bulbs[curPosition] = !bulbs[curPosition];
      curPosition += step;
    }
  }

  for (i = 0; i < n; i++) {
    if (bulbs[i]) {
      result++;
    }
  }

  return result;
};


// Solution 2. Refer: https://leetcode.com/discuss/89449/the-simplest-and-most-efficient-solution-in-well-explained
var bulbSwitch = function(n) {
  return Math.floor(Math.sqrt(n));
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(bulbSwitch(1));
    console.log(bulbSwitch(3));
  });
});
