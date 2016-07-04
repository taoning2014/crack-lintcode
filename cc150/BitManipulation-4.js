'use strict';

function decToBinary(num) {
  let numChars = num.toString(2).split('');
  for (let i = 0; i < 32; i++) {
    numChars.unshift('0');
  }
  return numChars;
}

function findOneToMove(numChars) {
  let leftHasZero = false;
  let i;

  for (i = numChars.length - 1; i >= 0; i--) {
    if (numChars[i] === '0') {
      leftHasZero = true;
    } else if (numChars[i] === '1' && leftHasZero) {
      break;
    }
  }

  return i;
}

function getNextSmaller(numChars, position) {
  let copy = numChars.slice();
  copy[position] = '0';

  for (let j = position + 1; j < copy.length; j++) {
    if (copy[j] === '0') {
      copy[j] = 1;
      break;
    }
  }
  console.log('Next smaller: ' + parseInt(copy.join(''), 2));
}

function getNextLarger(numChars, position) {
  numChars[position] = '0';
  for (let j = position - 1; j >= 0; j--) {
    if (numChars[j] === '0') {
      numChars[j] = '1'
      break;
    }
  }

  console.log('Next larger: ' + parseInt(numChars.join(''), 2));
}
// Note:
// 1, When convert to binary, won't have 32 bits by default.
//  1) Positive number need to append 0 manually
//  2) Negative number can use -3 >>> 0. Refer: http://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
var nextNumber = function(num) {
  if (!Number.isInteger(num) || num < 1) {
    console.log('Invalid input');
    return;
  }

  let numChars = decToBinary(num);

  let position = findOneToMove(numChars);

  let nextSmaller = getNextSmaller(numChars, position);

  let nextLarger = getNextLarger(numChars, position);

}

describe('Test', function() {
  it('Should pass', function() {
    nextNumber(6);
  });

  it('Should pass', function() {
    nextNumber(5);
  });

});
