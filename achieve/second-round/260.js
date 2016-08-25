'use strict';

// ========================================================================
// Time:   15min
// Submit: 1
// ========================================================================

function findFilterBit(bits) {
  while (bits.length < 32) {
    bits.unshift('0');
  }

  const n = 32 - bits.lastIndexOf('1') - 1;

  let filterBit = 1;
  for (let i = 0; i < n; i++) {
    filterBit = filterBit << 1;
  }

  return filterBit;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    return [];
  }

  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    cur ^= nums[i];
  }

  const filterBit = findFilterBit((cur >>> 0).toString(2).split(''));

  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (filterBit & nums[i]) {
      num1 ^= nums[i];
    } else {
      num2 ^= nums[i];
    }
  }

  return [num1, num2];
};

console.log(singleNumber([-1, -1, -2, 3]));
