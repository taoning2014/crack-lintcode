// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given an encoded message containing digits, determine the total number of ways to decode it.

// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

// The number of ways decoding "12" is 2.

// Note:
// 真的不是算法想出来面试就能过，这道题自己纠结了许久，各种情况没有考虑清楚！
//  最开始只考虑到了dp[i]与dp[i-1]，dp[i-2]的关系，但是没有想清楚chars[i-2] + chars[i-1]
//  应该用什么数代表。
'use strict';
require('chai').should();

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  var dp = [];
  var chars;
  var i;

  if (!s) {
    return 0;
  }

  chars = s.split('');
  if (chars[0] === '0') {
    return 0;
  }

  dp[0] = 1;
  dp[1] = 1;

  for (i = 2; i < chars.length + 1; i++) {
    dp[i] = 0;

    // needs to be 2 digits
    if (parseInt(chars[i-2] + chars[i-1], 10) >= 10 && parseInt(chars[i-2] + chars[i-1], 10) <= 26) {
      dp[i] += dp[i-2]
    }

    // needs to be 1 digit
    if (parseInt(chars[i-1], 10) > 0) {
      dp[i] += dp[i-1]
    }

  }

  return dp[chars.length];
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(numDecodings('00'));
    console.log(numDecodings('01'));
    console.log(numDecodings('8'));
    console.log(numDecodings('81'));
    console.log(numDecodings('18'));
    console.log(numDecodings('123'));
    console.log(numDecodings('10'));
    console.log(numDecodings('26'));
    console.log(numDecodings('100'));
    console.log(numDecodings('101'));
  });
});
