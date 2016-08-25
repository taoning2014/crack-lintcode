// Given n non-negative integers representing the histogram's bar height where the width of
// each bar is 1, find the area of largest rectangle in the histogram.

// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// For example,
// Given heights = [2,1,5,6,2,3],
// return 10.

// Refer:
//  1) http://baike.baidu.com/view/2935301.htm
//  2) http://www.jiuzhang.com/solutions/largest-rectangle-in-histogram/
'use strict';
require('chai').should();

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights || !heights.length) {
    return 0;
  }

  let maxRect = Number.NEGATIVE_INFINITY;
  let stack = [];

  for (let i = 0; i <= heights.length; i++) {
    let cur = (i === heights.length ? -1 : heights[i]);
    while (stack.length && stack[stack.length - 1][1] > cur) {
      let h = stack.pop()[1];
      let w = (stack.length === 0 ? i : i - stack[stack.length - 1][0] - 1);
      maxRect = Math.max(h * w, maxRect);
    }
    stack.push([i, heights[i]]);
  }

  return maxRect;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
    console.log(largestRectangleArea([0]));
    console.log(largestRectangleArea([1]));
  });
});
