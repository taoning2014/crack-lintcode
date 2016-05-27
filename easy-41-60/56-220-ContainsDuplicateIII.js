// Given an array of integers, find out whether there are two distinct indices i and j
// in the array such that the difference between nums[i] and nums[j] is at most t and
// the difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  var i;
  var j;

  if (!nums || !Number.isInteger(k) || k < 1) {
    return false;
  }

  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (j - i <= k && Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }

  return false;
};
