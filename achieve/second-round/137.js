'use strict';

// ========================================================================
// Time:   15min
// Submit: 3
//  1, how to use '~' to convert negative number bits into positive
//  2, num.toString(2) will put '-' in front of the string, if you want
//    total 32 bits, need to do: (num >>> 0).toString(2)
// ========================================================================

function addBits(bits, numStr) {
  for (let i = 31, j = numStr.length - 1; i >= 0 && j >= 0; i--, j--) {
    if (numStr[j] === '1') {
      bits[i] += 1;
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return NaN;
  }

  const bits = new Array(32);
  bits.fill(0);

  // add bits of each number to array
  for (let i = 0; i < nums.length; i++) {
    addBits(bits, (nums[i] >>> 0).toString(2));
  }

  // process array by mod 3
  for (let i = 0; i < 32; i++) {
    bits[i] = bits[i] % 3;
  }

  if (bits[0]) {
    // BUG: 尝试将其转化为正数然后再乘1，但是由于负数比正数多1，所以-2147483648不能通过这种办法转化了表示
    if (bits.indexOf(1, 1) === -1) {
      return -2147483648;
    }
    return (~(parseInt(bits.join(''), 2) - 1) * -1);
  } else {
    return parseInt(bits.join(''), 2);
  }
};

console.log(singleNumber([-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]));
