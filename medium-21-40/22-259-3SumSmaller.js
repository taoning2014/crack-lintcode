// Given an array of n integers nums and a target, find the number of index triplets i, j, k
// with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

// For example, given nums = [-2, 0, 1, 3], and target = 2.

// Return 2. Because there are two triplets which sums are less than 2:

// [-2, 0, 1]
// [-2, 0, 3]
// Follow up:
// Could you solve it in O(n2) runtime?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  let result = 0;

  if (!nums || nums.length < 3) {
    return result;
  }

  nums.sort((p, q) => {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let curSum = nums[i] + nums[l] + nums[r];
      if (curSum < target) {
        // push all the numbers from right to array
        result = result + (r - l);
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
};
