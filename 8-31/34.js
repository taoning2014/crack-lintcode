'use strict';

function searchL(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  if (l === nums.length) {
    return -1;
  }

  return l;
}


function searchR(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  if (r === -1) {
    return -1;
  }

  return r;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (!Array.isArray(nums) || !Number.isInteger(target)) {
    return [];
  }

  const l = searchL(nums, target);
  const r = searchR(nums, target);

  if (nums[l] === target) {
    return [l, r];
  }

  return [-1, -1];
};

console.log(searchRange([1, 2, 2,4], 2));
