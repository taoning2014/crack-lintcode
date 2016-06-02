// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// UPDATE (2016/2/13):
// The return format had been changed to zero-based indices. Please read the above updated description carefully.

// =====
// Note:
// 1, Add more test case: 0, negative...
// 2, Awesome o(n) solution: http://www.jiuzhang.com/solutions/two-sum/
'use strict';
require('chai').should();

// Solution 1.
function binarySearch(nums, target) {
  var l = 0;
  var r = nums.length - 1;
  var mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (target < nums[mid]) {
      r = mid - 1;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   var i;
//   var index;
//   var sorted;
//   var p1;
//   var p2;
//   var startFrom = 0;

//   if (!nums || nums.length < 2) {
//     return [-1, -1];
//   }

//   // BUG: Need to keep refer to the origin array, just copy refer won't work
//   // sorted = nums
//   sorted = nums.slice();

//   sorted.sort(function(p, q) {
//     return parseInt(p, 10) - parseInt(q, 10);
//   });

//   for (i = 0; i < sorted.length; i++) {
//     // BUG: Originally I want to jump the rest if the current elem is larger that target
//     //  I didn't think of negative numbers
//     // for (i = 0; i < sorted.length && sorted[i] <= target; i++) {
//     index = binarySearch(sorted, target - sorted[i]);
//     if (index !== -1) {
//       p1 = nums.indexOf(sorted[i]);
//       // BUG: Can't pass [0, 4, 3, 0], 0. Since both of them will return first element position
//       if (sorted[i] === sorted[index]) {
//         startFrom = p1 + 1;
//       }

//       p2 = nums.indexOf(sorted[index], startFrom);
//       return (p1 < p2 ? [p1, p2] : [p2, p1])
//     }
//   }

//   return [-1, -1];
// };

// Solution 2.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  var i;

  for (i = 0; i < nums.length; i++) {
    // BUG: can't do if (map[nums[i]]) since when the key is 0, this will faulse
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]] + 1, i + 1];
    }

    map[target - nums[i]] = i;
  }

  return [-1, -1];
}
describe('Test', function() {
  it('Should pass', function() {
    // console.log(twoSum([2, 7, 11, 15], 13));
    // console.log(twoSum([2, 7, 11, 15], 22));
    // console.log(twoSum([3, 2, 4], 6));
    console.log(twoSum([0, 4, 3, 1], 3));
    console.log(twoSum([0, 4, 3, 0], 0));
    console.log(twoSum([-1, -2, -3, -4, -5], -8));
    // Won't happen. 'You may assume that each input would have exactly one solution.'
    // console.log(twoSum([11, 15], 22));
  });
});
