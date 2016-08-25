/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums) {
//   if (!Array.isArray(nums) || nums.length === 0) {
//     return 0;
//   }

//   const dp = new Array(nums.length);
//   dp.fill(Number.POSITIVE_INFINITY);
//   dp[0] = 1;

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (i - j <= nums[j]) {
//         dp[i] = Math.min(dp[j] + 1, dp[i]);
//       }
//     }
//   }

//   return dp[nums.length - 1];
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return -1;
  }

  if (nums.length === 1) {
    return 0;
  }

  let curJump = nums[0];
  let nextJump = nums[0];
  let step = 1;

  for (let i = 0; i < nums.length; i++) {
    if (curJump < i) {
      curJump = nextJump;
      step++;
    }

    if (nextJump < i + nums[i]) {
      nextJump = i + nums[i];
    }

    if (curJump >= nums.length - 1) {
      return step;
    }
  }
}
