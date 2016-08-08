'use strict';

// ========================================================================
// Time:   5min
// Submit: 2
//  1, line 33, should put result behind aToZ array
// ========================================================================

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (!Number.isInteger(n) || n < 1) {
    return '';
  }

  const aToZArray = [
    'Z', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'
  ];

  let result = '';
  while (n !== 0) {
    const cur = n % 26;
    n = Math.floor(n / 26);

    if (cur === 0) {
      n--;
    }

    result  = aToZArray[cur] + result;
  }

  return result;
};

console.log(convertToTitle(1));
console.log(convertToTitle(26));
console.log(convertToTitle(27));
console.log(convertToTitle(52));
