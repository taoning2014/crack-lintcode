'use strict';

// Write a program to find the nth super ugly number.

// Super ugly numbers are positive numbers whose all prime factors are in the given prime
// list primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the
// sequence of the first 12 super ugly numbers given primes = [2, 7, 13, 19] of size 4.

// Note:
// (1) 1 is a super ugly number for any given primes.
// (2) The given numbers in primes are in ascending order.
// (3) 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.20-313-SuperUglyNumber.js

// Solution 1 Time out
function exchange(array, p, q) {
  const temp = array[p];
  array[p] = array[q];
  array[q] = temp;
}

function sink(array, i, N) {
  while (i * 2 <= N) {
    let j = i * 2;
    if (j < N && array[j] > array[j + 1]) {
      j++;
    }
    if (array[j] > array[i]) break;
    exchange(array, i, j);
    i = j;
  }
}

function swim(array, i) {
  while (i > 1) {
    const j = Math.floor(i / 2);
    if (array[j] > array[i]) {
      exchange(array, i, j);
    }
    i = j;
  }
}

function MinPQ() {
  this.array = [0];
  this.N = 0;
}

MinPQ.prototype.delMin = function() {
  const minEle = this.array[1];
  exchange(this.array, 1, this.N--);
  sink(this.array, 1, this.N);
  return minEle;
}

MinPQ.prototype.enqueue = function(ele) {
  this.array[++this.N] = ele;
  swim(this.array, this.N);
}

MinPQ.prototype.size = function() {
  return this.N;
}

MinPQ.prototype.isEmpty = function() {
  return this.N === 0;
}

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
// var nthSuperUglyNumber = function(n, primes) {
//   if (!Number.isInteger(n) || !Array.isArray(primes) || n < 1) {
//     return NaN;
//   }

//   const set = new Set();
//   const pq = new MinPQ();
//   let count = 0;
//   let cur;
//   pq.enqueue(1);
//   while (count < n) {
//     cur = pq.delMin();
//     count++;
//     primes.forEach(num => {
//       let next = num * cur;
//       if (!set.has(next)) {
//         set.add(next);
//         pq.enqueue(next);
//       }
//     });
//   }

//   return cur;
// };

// Solution 2, refer: https://discuss.leetcode.com/topic/31012/7-line-consice-o-kn-c-solution
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  if (!Number.isInteger(n) || !Array.isArray(primes) || n < 1) {
    return NaN;
  }

  const k = primes.length;
  let index = new Array(k);
  let result = new Array(n);
  index.fill(0);
  result.fill(Number.POSITIVE_INFINITY);
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < k; j++) {
      result[i] = Math.min(result[i], result[index[j]] * primes[j]);
    }
    for (let j = 0; j < k; j++) {
      if (result[i] === result[index[j]] * primes[j]) {
        index[j]++;
      }
    }
  }

  return result[n - 1];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
