'use strict';

// Given a sorted array of integers nums and integer values a, b and c. Apply a function of the form f(x) = ax2 + bx + c to each element x in the array.

// The returned array must be in sorted order.

// Expected time complexity: O(n)

// Example:
// nums = [-4, -2, 2, 4], a = 1, b = 3, c = 5,

// Result: [3, 9, 15, 33]

// nums = [-4, -2, 2, 4], a = -1, b = 3, c = 5

// Result: [-23, -5, 1, 7]

function merge(lArray, rArray) {
  const m = lArray.length;
  const n = rArray.length;
  const result = [];
  let l = 0;
  let r = 0;

  for (let i = 0; i < m + n; i++) {
    if (l === m) {
      result.push(rArray[r++]);
    } else if (r === n) {
      result.push(lArray[l++]);
    } else if (lArray[l] < rArray[r]) {
      result.push(lArray[l++]);
    } else {
      result.push(rArray[r++]);
    }
  }

  return result;
}

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
  if (!Array.isArray(nums)) {
    return [];
  }

  if (a === 0) {
    nums = nums.map(x => x * b + c);
    if (b < 0) {
      nums.reverse();
    }

    return nums;
  }

  const midPoint = (-b / (2 * a));
  let lArray = nums.filter(x => x < midPoint);
  let rArray = nums.filter(x => x >= midPoint);
  if (a < 0) {
    rArray.reverse();
  } else {
    lArray.reverse();
  }

  lArray = lArray.map(x => a * x * x + b * x + c);
  rArray = rArray.map(x => a * x * x + b * x + c);
  return merge(lArray, rArray);
};

console.log(sortTransformedArray([-4, -2, 1, 4], 0, 3, 5));
console.log(sortTransformedArray([-4, -2, 1, 4], 0, -3, 5));
console.log(sortTransformedArray([-4, -2, 2, 4], 1, 3, 5));
console.log(sortTransformedArray([-99,-94,-90,-88,-84,-83,-79,-68,-58,-52,-52,-50,-47,-45,-35,-29,-5,-1,9,12,13,25,27,33,36,38,40,46,47,49,57,57,61,63,73,75,79,97,98], -2, 44, -56));
