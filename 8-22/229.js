'use strict';

// refer: https://discuss.leetcode.com/topic/17564/boyer-moore-majority-vote-algorithm-and-my-elaboration/2
// BUG: need to init num1 and num2 with different value, otherwise can't pass [0, 0, 0]
function count(nums, number) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === number) {
      count++;
    }
  }

  return count;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }

  let count1 = 0;
  let count2 = 0;
  let num1 = 0;
  let num2 = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num1) {
      count1++;
    } else if (nums[i] === num2) {
      count2++;
    } else if (count1 === 0) {
      num1 = nums[i];
      count1 = 1;
    } else if (count2 === 1) {
      num2 = nums[i];
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  const result = [];
  if (count(nums, num1) > nums.length / 3) {
    result.push(num1);
  }

  if (count(nums, num2) > nums.length / 3) {
    result.push(num2);
  }

  return result;
};

console.log(majorityElement([1]));
