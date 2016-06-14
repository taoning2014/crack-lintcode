// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example,
// 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

// Note that 1 is typically treated as an ugly number.

// Hint:

// 1) The naive approach is to call isUgly for every number until you reach the nth one. Most numbers
//  are not ugly. Try to focus your effort on generating only the ugly ones.
// 2) An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.
// 3) The key is how to maintain the order of the ugly numbers. Try a similar approach of merging from
//  three sorted lists: L1, L2, and L3.
// 4) Assume you have Uk, the kth ugly number. Then Uk+1 must be Min(L1 * 2, L2 * 3, L3 * 5).
'use strict';
require('chai').should();

function exchange(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function swim(array, k) {
  while (Math.floor(k / 2) >= 1) {
    let preIndex = Math.floor(k / 2);
    if (array[k] > array[preIndex]) {
      break;
    }
    exchange(array, preIndex, k);
    k = preIndex;
  }
}

function sink(array, k, size) {
  while (k * 2 <= size) {
    let j = k * 2;
    if (j < size && array[j] > array[j + 1]) {
      j++;
    }
    if (array[k] < array[j]) {
      break;
    }
    exchange(array, k, j);
    k = j;
  }
}

function PriorityQueue() {
  this.array = [0];
  this.size = 0;
}

PriorityQueue.prototype.isEmpty = function() {
  return this.size === 0;
}

PriorityQueue.prototype.push = function(n) {
  this.array.push(n);
  ++this.size;
  swim(this.array, this.size);
}

PriorityQueue.prototype.delMin = function() {
  let value = this.array[1];
  exchange(this.array, 1, this.size);
  --this.size;
  // BUG: must remove this element in the array
  this.array.pop();
  sink(this.array, 1, this.size);
  return value;
}

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  if (!Number.isInteger(n) || n < 1) {
    return -1;
  }

  let pq = new PriorityQueue();
  let map = new Map();
  let count = 0;
  let val;

  pq.push(1);

  while (!pq.isEmpty() && count !== n) {
    val = pq.delMin();
    if (!map.has(val * 2)) {
      pq.push(val * 2);
      map.set(val * 2, true);
    }
    if (!map.has(val * 3)) {
      pq.push(val * 3);
      map.set(val * 3, true);
    }
    if (!map.has(val * 5)) {
      pq.push(val * 5);
      map.set(val * 5, true);
    }
    count++;
  }

  return val;
};

describe('Test', function() {
  // it('Test priorityqueue', function() {
  //   let pq = new PriorityQueue();
  //   pq.push(5);
  //   pq.push(3);
  //   pq.push(2);
  //   pq.push(1);
  //   pq.push(7);
  //   console.log(pq.delMin());
  //   console.log(pq.delMin());
  //   console.log(pq.delMin());
  //   console.log(pq.delMin());
  //   console.log(pq.delMin());
  // });

  it('Test priorityqueue', function() {
    console.log(nthUglyNumber(1));
    console.log(nthUglyNumber(10));
  })
});
