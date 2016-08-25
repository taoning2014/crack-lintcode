'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (!s) {
    return 0;
  }

  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      return result + map[s[i]];
    }

    const ch1 = s[i];
    const ch2 = s[i + 1];
    if (map[ch1] > map[ch2]) {
      result += map[ch1];
    } else {
      result -= map[ch1];
    }
  }
};

console.log(romanToInt('M'));
console.log(romanToInt('MV'));
console.log(romanToInt('CM'));
console.log(romanToInt('VI'));
console.log(romanToInt('IV'));
