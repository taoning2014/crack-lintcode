'use strict';

// BUG: Didn't consider whether should around the result, I feel double value should be find
// So does it a good question to ask the interviewer????

function findNextOperator(tokens) {
  const operators = ['+', '-', '*', '/'];
  for (let i = 0; i < tokens.length; i++) {
    if (operators.indexOf(tokens[i]) !== -1) {
      return i;
    }
  }

  return NaN;
}

function calculate(num1, num2, operator) {
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);

  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return NaN;
  }
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  if (!Array.isArray(tokens) || tokens.length < 2) {
    return parseInt(tokens[0]);
  }

  while (tokens.length > 1) {
    const next = findNextOperator(tokens);
    const num = calculate(tokens[next - 2], tokens[next - 1], tokens[next]);
    tokens.splice(next - 2, 3, num);
  }
  return Math.round(tokens[0]);
};

// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// console.log(evalRPN(["4", "13", "5", "/", "+"]));

// ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
// ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
