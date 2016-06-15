// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
'use strict';
require('chai').should();

function _generateParenthesis(left, right, n, cur, result) {
  if (left === n) {
    // push all remaining right
    while (right < n) {
      cur.push(')');
      right++;
    }
    // add to result
    result.push(cur.join(''));
    return;
  }

  // if possible, add right parenthese
  if (left > right) {
    const copy = cur.slice();
    copy.push(')');
    _generateParenthesis(left, right + 1, n, copy, result);
  }

  // add left parenthese
  const copy = cur.slice();
  copy.push('(');
  _generateParenthesis(left + 1, right, n, copy, result);

}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];

  if (n < 1) {
    return result;
  }

  _generateParenthesis(0, 0, n, [], result);

  return result;
};


describe('Test', function() {
  it('Should pass', function() {
    console.log(generateParenthesis(3));
  });
});
