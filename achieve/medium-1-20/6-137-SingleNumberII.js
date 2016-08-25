// Given an array of integers, every element appears three times except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
'use strict';
require('chai').should();

// Note:
// 1, BUG, didn't consider negative numbers
// 2, BUG, Can't  pass [-401451,-177656,-2147483646,-473874,-814645,-2147483646,-852036,-457533,-401451,-473874,-401451,-216555,-917279,-457533,-852036,-457533,-177656,-2147483646,-177656,-917279,-473874,-852036,-917279,-216555,-814645,2147483645,-2147483648,2147483645,-814645,2147483645,-216555];
// 3, Read in detail: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift。
//  1) 深入理解负数在计算机中的表示。取反加一。
//  2) 011111..1 => 2147483647
//  3) 100000..1 => -2147483647
//  4) 由于有2, 3两种情况，所以负数多了一个100000....0，所以就用它表示－2147483648

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var bits = [];
  var binaryStrArray;
  var i;
  var j;

  for (i = 0; i < 32; i++) {
    bits[i] = 0;
  }

  for (i = 0; i < nums.length; i++) {
    binaryStrArray = dec2bin(nums[i]).split('');

    while (binaryStrArray.length < 32) {
      binaryStrArray.unshift('0');
    }

    for (j = 0; j < 32; j++) {
      bits[j] += parseInt(binaryStrArray[j], 2);
    }
  }

  for (i = 0; i < 32; i++) {
    if (bits[i] % 3 === 0) {
      bits[i] = 0
    } else {
      bits[i] = 1;
    }
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

describe('Test', function() {
  it('Should pass', function() {
    console.log(singleNumber([1, 1, 1, 2, 2, 2, 3]));
    console.log(singleNumber([-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]));
    console.log(singleNumber([-401451,-177656,-2147483646,-473874,-814645,-2147483646,-852036,-457533,-401451,-473874,-401451,-216555,-917279,-457533,-852036,-457533,-177656,-2147483646,-177656,-917279,-473874,-852036,-917279,-216555,-814645,2147483645,-2147483648,2147483645,-814645,2147483645,-216555]));
  })
})
