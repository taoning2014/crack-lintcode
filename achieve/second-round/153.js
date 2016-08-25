'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//   if (!Array.isArray(nums) || nums.length === 0) {
//     return NaN;
//   }

//   const cmp = nums[nums.length - 1];
//   let l = 0;
//   let r = nums.length - 1;

//   while (l <= r) {
//     const mid = l + Math.floor((r - l) / 2);
//     if (nums[mid] < cmp) {
//       r = mid - 1;
//     } else (nums[mid] > cmp) {
//       l = mid + 1;
//     } else {
//       return l;
//     }
//   }

//   return l;
// };

// Solution 2, romve r to the right instead of use cmp
var findMin = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return NaN;
  }

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < nums[r]) {
      r = mid;
    } else if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      return nums[l];
    }
  }

  return nums[l];
};

// console.log(findMin([4, 5, 6, 1, 2, 3]));
console.log(findMin([3, 1, 2]));
