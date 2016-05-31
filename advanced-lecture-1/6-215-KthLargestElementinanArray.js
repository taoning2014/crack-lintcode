// PQ solution from algorithm course: https://www.coursera.org/course/algs4partI

// Find the kth largest element in an unsorted array. Note that it
// is the kth largest element in the sorted order, not the kth distinct element.

// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.
'use strict';
require('chai').should();

function exchange(array, p, q) {
  var temp = array[p];
  array[p] = array[q];
  array[q] = temp;
}

function swim(array, k) {
  var parent;
  while (k > 1) {
    parent = Math.floor(k / 2);
    if (array[k] < array[parent]) {
      exchange(array, k, parent);
      k = parent;
    } else {
      break;
    }
  }
}

function sink(array, k) {
  var N = array.length - 1;
  var child;

  while (2 * k <= N) {
    child = 2 * k;
    if (child < N && array[child] > array[child + 1]) {
      child++;
    }
    if (array[k] < array[child]) {
      break;
    }
    exchange(array, k, child);
    k = child;
  }
}

function MinPQ() {
  this.array = [];
  // put dummy in first element
  this.array.push(0);
}

MinPQ.prototype.size = function() {
  return this.array.length - 1;
}

MinPQ.prototype.enqueue = function(number) {
  this.array.push(number);
  swim(this.array, this.array.length - 1);
}

MinPQ.prototype.deque = function() {
  var value;
  exchange(this.array, 1, this.array.length - 1);
  value = this.array.pop();
  sink(this.array, 1);
  return value;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  var pq = new MinPQ();
  var i;

  if (!nums) {
    return NaN;
  }

  for (i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
    if (pq.size() > k) {
      pq.deque();
    }
  }
  return pq.deque();
};


describe('Test', function() {
  // it('Test implement of PQ', function() {
  //   var pq = new MinPQ();
  //   pq.enqueue(4);
  //   pq.enqueue(1);
  //   pq.enqueue(6);
  //   console.log(pq.size());
  //   console.log(pq.deque());
  //   console.log(pq.deque());
  //   console.log(pq.deque());
  //   console.log(pq.size());
  //   console.log('=============');
  // });

  // it('Test findKthLargest()', function() {
  //   var nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3];
  //   var i;
  //   var pq = new MinPQ();

  //   for (i = 0; i < nums.length; i++) {
  //     pq.enqueue(nums[i]);
  //   }

  //   while (pq.size()) {
  //     console.log(pq.deque());
  //   }

  // });

  // it('Test findKthLargest()', function() {
  //   console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
  // });

  it('Test findKthLargest()', function() {
    var nums = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];
    console.log(findKthLargest(nums, 20));
  });
});
