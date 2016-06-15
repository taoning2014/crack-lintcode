// After robbing those houses on that street, the thief has found himself a new place for his
// thievery so that he will not get too much attention. This time, all houses at this place are
// arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile,
// the security system for these houses remain the same as for those in the previous street.

// Given a list of non-negative integers representing the amount of money of each house, determine
// the maximum amount of money you can rob tonight without alerting the police.
'use strict';

// Solution 1. Wrong solution
/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//   if (!nums.length) {
//     return 0;
//   }

//   if (nums.length < 4) {
//     return Math.max.apply(null, nums);
//   }

//   // not add the constrain, may choose both front and end
//   let sumArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     sumArray[i] = nums[i];
//   }

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i - 1; j++) {
//       if (sumArray[i] < sumArray[j] + nums[i]) {
//         sumArray[i] = sumArray[j] + nums[i];
//       }
//     }
//   }

//   // let rob front and end and rest
//   let sum = nums.shift();
//   sum += nums.pop();
//   nums.shift();
//   nums.pop();
//   // console.log(`nums: ${nums}`);
//   // edge case length is 4
//   let newSumArray = (nums.length === 0 ? [sum] : []);
//   for (let i = 0; i < nums.length; i++) {
//     newSumArray[i] = nums[i] + sum;
//   }
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i - 1; j++) {
//       if (newSumArray[i] < newSumArray[j] + nums[i]) {
//         newSumArray[i] = newSumArray[j] + nums[i];
//       }
//     }
//   }
//   // console.log(`newSumArray: ${newSumArray}`);

//   // find if max is the last one, if yes, return the second largest.
//   //  else return it.
//   let maxSumArray = Math.max.apply(null, sumArray);
//   let maxNewSumArray = Math.max.apply(null, newSumArray);
//   if (maxSumArray === maxNewSumArray) {
//     let index = sumArray.indexOf(maxSumArray);
//     sumArray.splice(index, 1);
//     return Math.max.apply(null, sumArray);
//   } else {
//     return maxSumArray;
//   }

// };


// Solution 2. Wrong solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let max = Number.NEGATIVE_INFINITY;

  if (!nums.length) {
    return 0;
  }

  if (nums.length < 4) {
    return Math.max.apply(null, nums);
  }

  // case 1. choose position 0 so add it to every other element
  //  in this case, we can't use last element
  let sumArray = [];
  sumArray[0] = nums[0];
  sumArray[1] = nums[1];
  for (let i = 2; i < nums.length - 1; i++) {
    sumArray[i] = nums[0] + nums[i];
  }

  for (let i = 3; i < nums.length - 1; i++) {
    for (let j = 1; j < i - 1; j++) {
      if (sumArray[i] < sumArray[j] + nums[i]) {
        sumArray[i] = sumArray[j] + nums[i];
      }
    }
  }

  max = Math.max(max, Math.max.apply(null, sumArray));

  // case 2, don't choose position 1
  sumArray = [];
  sumArray[0] = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < nums.length; i++) {
    sumArray[i] = nums[i];
  }

  for (let i = 2; i < nums.length; i++) {
    for (let j = 1; j < i - 1; j++) {
      if (sumArray[i] < sumArray[j] + nums[i]) {
        sumArray[i] = sumArray[j] + nums[i];
      }
    }
  }

  max = Math.max(max, Math.max.apply(null, sumArray))

  return max;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(rob([2, 1, 2, 1, 2]));
    console.log(rob([1, 1, 1]));
    console.log(rob([2, 1, 1, 2]));
    console.log(rob([2, 7, 9, 3, 1]));
  });
});
