// Given a list of non negative integers, arrange them such that they form the largest number.

// For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

// Note: The result may be very large, so you need to return a string instead of an integer.
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  let strArray = nums.map(num => num.toString(10));

  strArray.sort((p, q) => {
    for (let i = 0; i < p.length && i < q.length; i++) {
      if (parseInt(p[i], 10) - parseInt(q[i], 10) !== 0) {
        return parseInt(p[i], 10) - parseInt(q[i], 10);
      }
    }
    // if the beginning part are same, compare the first rest
    // hard to think compare rest, so make 2 nums to compare
    // notice return -1 and 1 rather than p and q
    return parseInt(p + q, 10) < parseInt(q + p, 10) ? -1 : 1;
  });

  strArray.reverse();
  console.log(strArray);
  // BUG: didn't consider edge case ['0', '0'];
  return parseInt(strArray.join('')) === 0 ? '0' : strArray.join('');
};

describe('Test', function() {
  it('Should pass', function() {
    // console.log(largestNumber([3, 30, 34, 5, 9]));
    // console.log(largestNumber([0, 0]));
    // console.log(largestNumber([999999998,999999997,999999999]));
    console.log(largestNumber([121, 12]));
    console.log(largestNumber([824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247]));
  })
})

// outp: "9609 938 824 782469735703560743981399"

// expt: "9609 938 824 824769735703560743981399"
