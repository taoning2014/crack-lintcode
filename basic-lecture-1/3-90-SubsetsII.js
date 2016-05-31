// Given a collection of integers that might contain duplicates, nums, return all possible subsets.

// Note:
// Elements in a subset must be in non-descending order.
// The solution set must not contain duplicate subsets.
// For example,
// If nums = [1,2,2], a solution is:

// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

// Solution 1.
// Note:
// 1, 理解错题意了，晕！是subsets中不能有重复subset，不是在一开始去除重复。
// 2, 最好不要滥用closure， 嵌套函数还是不好阅读。
// 3, 作为参数传入的array([1,2,3,4])，element会变成char，所以需要自己传入比较函数

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsArray;

// function remoteDuplicate(nums) {
//   var i;
//   var j;
//   var uniqueArray = [];

//   // remove duplicate
//   nums.sort(function(p, q) {
//     return parseInt(p, 10) - parseInt(q, 10);
//   });

//   for (i = 0; i < nums.length - 1;) {
//     uniqueArray.push(nums[i]);
//     j = i + 1;
//     while (nums[i] === nums[j]) {
//       j++;
//     }

//     i = j;
//   }

//   if (nums[nums.length - 1] !== nums[nums.length - 2]) {
//     uniqueArray.push(nums[nums.length - 1]);
//   }

//   return uniqueArray;
// }

// function dfs(cur, beginIndex, uniqueArray) {
//   if (beginIndex === uniqueArray.length) {
//     return;
//   }

//   for (var i = beginIndex; i < uniqueArray.length; i++) {
//     var temp = cur.slice();
//     temp.push(uniqueArray[i]);
//     subsetsArray.push(temp);
//     dfs(temp, i + 1, uniqueArray);
//   }
// }

// var subsetsWithDup = function(nums) {
//   subsetsArray = [];

//   if (!nums || nums.length === 0) {
//     return subsetsArray;
//   }

//   subsetsArray.push([]);

//   if (nums.length === 1) {
//     subsetsArray.push(nums[0]);
//     return subsetsArray;
//   }

//   var uniqueArray = remoteDuplicate(nums);
//   dfs([], 0, uniqueArray);
//   return subsetsArray;
// };

var subsetsArray;

function dfs(cur, beginIndex, nums) {
  subsetsArray.push(cur);

  for (var i = beginIndex; i < nums.length; i++) {
    if (i !== beginIndex && nums[i] === nums[i-1]) {
      continue;
    }
    var temp = cur.slice();
    temp.push(nums[i]);
    dfs(temp, i + 1, nums);
  }
}

var subsetsWithDup = function(nums) {
  subsetsArray = [];

  if (!nums || nums.length === 0) {
    return subsetsArray;
  }

  nums.sort(function(p, q) {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  dfs([], 0, nums);
  return subsetsArray;
};

describe('Test', function() {
  it('Should Pass', function() {
    // console.log(remoteDuplicate([3, 2, 1, 5, 3, 2, 1, 4, 5, 7, 3, 2, 10, 10]));
    // console.log(subsetsWithDup([3, 2, 1, 5, 3, 2, 1, 4, 5, 7, 3, 2, 10, 10]));
    console.log(subsetsWithDup([1, 2, 2]));
  });
});
