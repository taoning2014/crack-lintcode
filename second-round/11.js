'use strict';

// ========================================================================
// Time:   12min
// Submit: 2 after line 50, shouldn't do l++ and r--, and put <= instead of
//  < to line 32 and line 39. Think of [2, 3, 10, 5, 7, 8, 9]
// ========================================================================

// Given n non-negative integers a1, a2, ..., an, where each represents a point
// at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
// of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis
// forms a container, such that the container contains the most water.

// Note: You may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (!Array.isArray(height) || height.length === 0) {
    return 0;
  }

  const len = height.length;
  let l = 0;
  let r = len - 1;
  let curHeight = Math.min(height[0], height[len - 1]);
  let curMax = curHeight * (r - l);

  while (l < r) {
    while (height[l] <= curHeight) {
      if (l === len) {
        break;
      }
      l++
    }

    while (height[r] <= curHeight) {
      if (r === 0) {
        break;
      }
      r--;
    }

    if (l >= r) {
      break;
    }

    curHeight = Math.min(height[l], height[r]);
    curMax = Math.max(curHeight * (r - l), curMax);
  }

  return curMax;
};

console.log(maxArea([2, 3, 10, 5, 7, 8, 9]));
