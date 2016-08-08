/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (!Number.isInteger(n) || n < 1) {
    return 0;
  }

  const isPrime = new Array(n);
  isPrime.fill(true);

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) {
      continue;
    }

    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
};
