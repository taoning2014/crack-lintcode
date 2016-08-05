'use strict';

// ========================================================================
// Time:   17min
// Submit: 1
// ========================================================================

// You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

// Define a pair (u,v) which consists of one element from the first array and one element from the second array.

// Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

// Example 1:
// Given nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

// Return: [1,2],[1,4],[1,6]

// The first 3 pairs are returned from the sequence:
// [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// Example 2:
// Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

// Return: [1,1],[1,1]

// The first 2 pairs are returned from the sequence:
// [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
// Example 3:
// Given nums1 = [1,2], nums2 = [3],  k = 3

// Return: [1,3],[2,3]

// All possible pairs are returned from the sequence:
// [1,3],[2,3]

function exchange(array, p, q) {
  const temp = array[p];
  array[p] = array[q];
  array[q] = temp;
}

function compare(array, p, q) {
  return array[p][0] + array[p][1] - array[q][0] - array[q][1];
}

function MinPQ() {
  this.array = [];
}

MinPQ.prototype.isEmpty = function() {
  return this.array.length === 0;
}

MinPQ.prototype.enqueue = function(item) {
  this.array.push(item);
}

MinPQ.prototype.delMin = function() {
  let curMin = 0;
  for (let i = 1; i < this.array.length; i++) {
    if (compare(this.array, i, curMin) < 0) {
      curMin = i;
    }
  }

  exchange(this.array, curMin, this.array.length - 1);
  return this.array.pop();
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2) || k < 1 || nums1.length === 0 || nums2.length === 0) {
    return [];
  }

  const pq = new MinPQ();
  for (let i = 0; i < nums1.length && i < k; i++) {
    pq.enqueue([nums1[i], nums2[0], 0]);
  }

  const result = [];
  for (let i = 0; i < k && !pq.isEmpty(); i++) {
    const cur = pq.delMin();
    result.push([cur[0], cur[1]]);

    if (cur[2] === nums2.length - 1) {
      continue;
    }

    pq.enqueue([cur[0], nums2[cur[2] + 1], cur[2] + 1]);
  }

  return result;
};

console.log(kSmallestPairs([1, 3, 5], [2, 4], 10));
