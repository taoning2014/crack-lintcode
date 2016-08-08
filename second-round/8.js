'use strict';

// ========================================================================
// Time:   10min
// Submit: 3
//  1, didn't consider result out of bound
//  2, because of too familiar with those 'easy' questions, I didn't even
//    read them carefully, shame on me!
// ========================================================================

function isDigit(char) {
  return char >= '0' && char <= '9';
}

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if (!str || typeof str !== 'string') {
    return 0;
  }

  str = str.trim();

  let sign = 1;
  if (str[0] === '-') {
    sign = -1;
    str = str.slice(1);
  } else if (str[0] === '+') {
    sign = 1;
    str = str.slice(1);
  }

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (isDigit(str[i])) {
      result = result * 10 + parseInt(str[i], 10);
    } else {
      break;
    }
  }

  result = result * sign;

  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (result < Math.pow(2, 31) * -1) {
    return Math.pow(2, 31) * -1;
  }

  return result;
};

console.log(myAtoi('+-2'));
