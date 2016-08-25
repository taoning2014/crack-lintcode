'use strict';

// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place, do not allocate extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

// Solution 1. Wrong, can't pass [1, 3, 2]
// function exchange(nums, i, j) {
//   const temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function(nums) {
//   if (!Array.isArray(nums) || nums.length < 2) {
//     return;
//   }

//   const n = nums.length;
//   let num1Index = n - 1;

//   let i;
//   for (i = n - 2; i >= 0; i--) {
//     if (nums[i] < nums[num1Index]) {
//       break;
//     } else if (nums[i] > nums[num1Index]) {
//       num1Index = i;
//     }
//   }

//   if (i === -1) {
//     nums.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));
//   } else {
//     exchange(nums, i, num1Index);
//   }

// };

// Solution 2. Refer: https://discuss.leetcode.com/topic/2542/share-my-o-n-time-solution

function exchange(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function sort(nums, start, end) {
  const temp = nums.slice(start, end + 1);
  temp.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));

  for (let i = start, j = 0; i <= end; i++, j++) {
    nums[i] = temp[j];
  }
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    return;
  }

  const n = nums.length;
  let i;

  // find inverse
  for (i = n - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      break;
    }
  }

  if (i === 0) {
    sort(nums, 0, n - 1);
    return;
  }

  // find min to exchange
  let curMinIndex = i;
  for (let j = i; j < n; j++) {
    if (nums[j] > nums[i - 1] && nums[j] <= nums[curMinIndex]) {
      curMinIndex = j;
    }
  }

  exchange(nums, i - 1, curMinIndex);

  // reverse sort range i + 1 to n - 1
  sort(nums, i, n - 1);
}

nextPermutation([1, 2, 3]);
nextPermutation([3, 2, 1]);
nextPermutation([1, 1, 5]);
nextPermutation([1, 3, 2]);
