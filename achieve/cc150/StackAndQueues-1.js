'use strict';

var sortStack = function(stack) {
  let result = [];

  if (!stack) {
    return result;
  }

  while (stack.length > 0) {
    let temp = stack.pop();
    while (result.length > 0 && result[result.length - 1] > temp) {
      stack.push(result.pop());
    }
    result.push(temp);
  }

  return result;
}

describe('Test', function() {
  it('Should pass', function() {
    let stack = [];
    console.log(sortStack(stack));
  });

  it('Should pass', function() {
    let stack = [7];
    console.log(sortStack(stack));
  });

  it('Should pass', function() {
    let stack = [1, 1, 1, 1, 1];
    console.log(sortStack(stack));
  });

  it('Should pass', function() {
    let stack = [7, 2, 8, 5, 4, 9];
    console.log(sortStack(stack));
  });
});
