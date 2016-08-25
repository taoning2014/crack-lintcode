'use strict';

function buildString(array) {
  let curStr = '';
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (curStr === '' || array[i] === '->') {
      curStr += "" + array[i];
    } else if (curStr.indexOf('->') !== -1) {
      curStr += array[i];
      result.push(curStr);
      curStr = '';
    } else {
      result.push(curStr);
      curStr = "" + array[i];
    }
  }

  if (curStr !== '') {
    result.push(curStr);
  }

  return result;
}

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }

  // BUG: Don't need to consider: length should be more than 2 to add '->' between
  // let curLength = 0;
  // const n = nums.length;
  // const array = [];
  // for (let i = 0; i < n - 1; i++) {
  //   if (curLength === 0) {
  //     array.push(nums[i]);
  //     if (nums[i + 1] - nums[i] === 1) {
  //       curLength++;
  //     }
  //   } else if (nums[i + 1] - nums[i] === 1) {
  //     curLength++;
  //   } else {
  //     if (curLength > 1) {
  //       array.push('->');
  //     }
  //     array.push(nums[i]);
  //     curLength = 0;
  //   }
  // }

  let curLength = 0;
  const n = nums.length;
  const array = [];
  for (let i = 0; i < n - 1; i++) {
    if (curLength === 0) {
      array.push(nums[i]);
      if (nums[i + 1] - nums[i] === 1) {
        curLength++;
      }
    } else if (nums[i + 1] - nums[i] === 1) {
      curLength++;
    } else {
      array.push('->');
      array.push(nums[i]);
      curLength = 0;
    }
  }

  // test and push last element
  if (curLength === 0) {
    array.push(nums[n - 1]);
  } else {
    array.push('->', nums[n - 1]);
  }

  return buildString(array);
};
console.log(summaryRanges([0, 1, 2, 8]));
