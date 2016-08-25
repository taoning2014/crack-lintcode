'use strict';

// ========================================================================
// Time:   8min
// Submit: 1
// ========================================================================

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n === 2) {
    return 1;
  }

  if (n === 3) {
    return 2;
  }

  if (n === 4) {
    return 4;
  }

  let result = 1;
  while (n > 7) {
    result *= 3;
    n -= 3;
  }

  switch (n) {
    case 5:
      return 6 * result;
    case 6:
      return 9 * result;
    case 7:
      return 12 * result;
  }
};

console.log(integerBreak(8));
