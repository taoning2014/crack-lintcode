'use strict';

function isAdditive(rest, num1, num2) {
  if (rest === '') {
    return true;
  }

  //TODO: implement a function to add 2 str directly to handle big integer
  const sum = (parseInt(num1, 10) + parseInt(num2, 10)).toString();
  if (!rest.startsWith(sum)) {
    return false;
  }

  return isAdditive(rest.substring(sum.length), num2, sum);
}

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  if (typeof num !== 'string') {
    return false;
  }

  const n = num.length;
  for (let i = 1; i <= Math.floor((n - 1) / 2); i++) {
    if (num[0] === '0' && i > 1) {
      return false;
    }

    for (let j = i + 1; n - j >= j - i && n - j >= i; j++) {
      if (num[i] === '0' && j - i > 1) {
        break;
      }

      const num1 = num.substring(0, i);
      const num2 = num.substring(i, j);
      const rest = num.substring(j);
      console.log(`${num1} ${num2} ${rest}`)
      if (isAdditive(rest, num1, num2)) {
        return true;
      }
    }
  }

  return false;
};

// console.log(isAdditiveNumber('"1980 1982 3962"'));
console.log(isAdditiveNumber('198019823962'));
