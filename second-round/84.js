'use strict';

// ========================================================================
// Time:   25min
// Submit: 2 confused about what stored in stack (positin infor rather than
//  value), in line 25, use stack[stack.length - 1] haven't put heights outside
// ========================================================================

// Given n non-negative integers representing the histogram's bar height where the
// width of each bar is 1, find the area of largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!Array.isArray(heights)) {
    return 0;
  }

  const stack = [];
  let curMax = 0;
  for (let i = 0; i <= heights.length; i++) {
    const cur = (i === heights.length ? -1 : heights[i]);
    while (stack.length !== 0 && cur <= heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
      curMax = Math.max(h * w, curMax);
    }
    stack.push(i);
  }

  return curMax;
};

console.log(largestRectangleArea([2, 1, 5, 6, 1, 2]));
