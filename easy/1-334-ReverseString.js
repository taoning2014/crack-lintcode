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

describe('Test', function() {
  it('should pass', function() {
    reverseString('hello').should.equal('olleh');
    reverseString('').should.equal('');
    reverseString('o').should.equal('o');
    reverseString('bood').should.equal('doob');
  });
});
