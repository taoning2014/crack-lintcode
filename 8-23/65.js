'use strict';

// Note:
// 1, scientific notation: 6.022e23 and 1.6e-35
//
// test: +1 -1 +-1 1.2 1.2e5 -1.2e-10
// BUG: consider '.', ' ', 'e9', '+-.', '4e+', '.-4', '+.8'
// 2, solution: 每次拆分一部分(split)，每拆分一次都检验拆分是否正确(check)
function _isDigit(numStr) {
  for (let i = 0; i < numStr.length; i++) {
    if ('0123456789'.indexOf(numStr[i]) === -1) {
      return false;
    }
  }

  return true;
}

function _isFloat(numStr) {
  if (numStr.indexOf('.') === -1) {
    return _isInteger(numStr);
  }

  let nums = numStr.split('.');
  if (nums.length !== 2 || (nums[0] === '' && nums[1] === '')) {
    return false;
  }

  if (nums[0] === '+' || nums[0] === '-') {
    if (nums[1] === '') {
      return false;
    }

    return _isDigit(nums[1]);
  }

  // digit
  return _isInteger(nums[0]) && _isDigit(nums[1]);
}

function _isInteger(numStr) {
  if (!numStr) {
    return true;
  }

  // sign
  if (numStr[0] === '+' || numStr[0] === '-') {
    numStr = numStr.substr(1);
  }

  if (numStr === '') {
    return false;
  }

  return _isDigit(numStr);
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (!s || typeof s !== 'string') {
    return false;
  }

  // split space
  s = s.trim().toLowerCase();
  // check
  if (s === '') {
    return false;
  }

  // split 'e'
  if (s.indexOf('e') !== -1) {
    let nums = s.split('e');
    // check
    if (nums.length !== 2 || nums[0] === '' || nums[1] === '') {
      return false;
    }

    return _isFloat(nums[0]) && _isInteger(nums[1]);
  }

  return _isFloat(s);
};


// '.', ' ', 'e9', '+-.', '4e+', '.-4'
console.log(isNumber('+.8'));
console.log(isNumber('+-.'));
console.log(isNumber(' '));
console.log(isNumber('e9'));
console.log(isNumber('4e+'));
console.log(isNumber('.-4'));
console.log(isNumber('.'));
console.log(isNumber(' -.'));
