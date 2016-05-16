// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = 'hello', return 'olleh'.
require('chai').should();

var reverseString = function(s) {
  var i;
  var res = '';

  if (s === '') {
    return s;
  }

  for (i = s.length - 1; i >= 0; i--) {
    res += s.charAt(i);
  }

  return res;
};

// ==========
// Solution 2: When programmatically building up a string, use Array#join instead of string concatenation
// var reverseString = function(s) {
//   var i;
//   var res = Array(s.length);

//   if (s === '') {
//     return s;
//   }

//   for (i = s.length - 1; i >= 0; i--) {
//     res.push(s.charAt(i));
//   }

//   return res.join('');
// };

describe('Test', function() {
  it('should pass', function() {
    reverseString('hello').should.equal('olleh');
    reverseString('').should.equal('');
    reverseString('o').should.equal('o');
    reverseString('bood').should.equal('doob');
  });
});
