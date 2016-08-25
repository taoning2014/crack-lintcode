'use strict';

// Given n non-negative integers a1, a2, ..., an, where each represents a point at
// coordinate (i, ai). n vertical lines are drawn such that the two endpoints of
// line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms
// a container, such that the container contains the most water.

// Note: You may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
// Solution 1. Time out
// var maxArea = function(height) {
//   if (!Array.isArray(height) || height.length < 2) {
//     return 0;
//   }

//   let curMax = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       const w = j - i;
//       const h = Math.min(height[i], height[j]);
//       curMax = Math.max(w * h, curMax);
//     }
//   }

//   return curMax;
// }

// Solution 2. Refer: https://discuss.leetcode.com/topic/16754/simple-and-fast-c-c-with-explanation

var maxArea = function(height) {
  if (!Array.isArray(height) || height.length < 2) {
    return 0;
  }

  let curHeight = Math.min(height[0], height[height.length - 1]);
  let curMax = curHeight * (height.length - 1);
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    while (height[l] <= curHeight) {
      l++;
      if (l >= r) {
        break;
      }
    }

    while(height[r] <= curHeight) {
      r--;
      if (l >= r) {
        break;
      }
    }

    if (l >= r) {
      break;
    }

    curHeight = Math.min(height[l], height[r]);
    const curArea = (r - l) * curHeight;
    curMax = Math.max(curArea, curMax);
  }
  return curMax;
}

// [2,3,10,5,7,8,9] 24 -> 36
console.log(maxArea([1, 1]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([2,3,10,5,7,8,9]));
