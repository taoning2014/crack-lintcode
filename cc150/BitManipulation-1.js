'use strict';

var insert = function(M, N, i, j) {
  if (i - j + 1 !== N.length) {
    return;
  }

  M = parseInt(M, 2);
  N = parseInt(N, 2);

  // make mask
  M &= ~(((1 << (i - j + 2)) - 1) << j)
  M |= N << j;
  return M.toString(2);
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(insert('10000000000', '10011', 6, 2))
  })
})
