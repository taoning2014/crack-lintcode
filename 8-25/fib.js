'use strict';

setTimeout(fib, 1000);


function bar() {
  console.log('bar');
}

var fib = (function() {
  var pre = 0;
  var cur = 1;

  function _fib() {
    console.log(cur);
    const temp = cur;
    cur = cur + pre;
    pre = temp;
    setTimeout(_fib, 100);
  }
  return _fib;
})();
