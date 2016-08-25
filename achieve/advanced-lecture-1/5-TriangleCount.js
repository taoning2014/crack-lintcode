// From: http://www.lintcode.com/en/problem/triangle-count/

// Given an array of integers, how many three numbers can be found in
// the array, so that we can build an triangle whose three edges length
// is the three numbers that we find?

// Example
// Given array S = [3,4,6,7], return 3. They are:

// [3,4,6]
// [3,6,7]
// [4,6,7]
// Given array S = [4,4,4,4], return 4. They are:

// [4(1),4(2),4(3)]
// [4(1),4(2),4(4)]
// [4(1),4(3),4(4)]
// [4(2),4(3),4(4)]
'use strict';
require('chai').should();

var triangleCount = function(nums) {
  var i;
  var l;
  var r;
  var N;
  var count = 0;

  if (!nums || nums.length < 3) {
    return [];
  }

  nums.sort(function(p, q) {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  N = nums.length;
  for (i = 2; i < N; i++) {
    l = 0;
    r = i - 1;
    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) {
        count = count + r - l;
        r--;
      } else {
        l++;
      }
    }
  }

  return count;
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(triangleCount([3, 4, 6, 7])); // 3
    console.log(triangleCount([4, 4, 4, 4])); // 4
  });
});
