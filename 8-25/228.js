'use strict';

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return [];
  }

  const result = [];
  let curStr = '';

  for (let i = 0; i < nums.length - 1; i++) {
    if (curStr === '') {
      curStr += nums[i];
    }

    const diff = nums[i + 1] - nums[i];
    if (diff === 1 && curStr[curStr.length - 1] !== '>') {
      curStr += '->';
    } else if (diff !== 1) {
      if (curStr[curStr.length - 1] === '>') {
        curStr += nums[i];
      }

      result.push(curStr);
      curStr = '';
    }
  }

  curStr += nums[nums.length - 1];
  result.push(curStr);

  return result;
};

console.log(summaryRanges([1,2,3]));
