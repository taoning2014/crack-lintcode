'use strict';

function getRange(nums1, nums2) {
  if (nums2 - nums1 === 1) {
    return '';
  }

  if (nums2 - nums1 === 2) {
    return nums1 + 1 + '';
  }

  nums1++;
  nums2--;
  return nums1 + '->' + nums2;
}

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  if (!Array.isArray(nums) || !Number.isInteger(lower)
    || !Number.isInteger(upper) || lower > upper) {
    return [];
  }

  if (nums.length === 0) {
    if (lower === upper) {
      const str = lower + '';
      return [str];
    } else {
      const str = lower + '->' + upper;
      return [str];
    }
  }

  // check front and end
  if (nums[0] !== lower) {
    nums.unshift(--lower);
  }

  if (nums[nums.length - 1] !== upper) {
    nums.push(++upper);
  }

  const result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    const curRange = getRange(nums[i], nums[i + 1]);
    if (curRange !== '') {
      result.push(curRange);
    }
  }

  return result;
};

console.log(findMissingRanges([-1], -2, -1));
