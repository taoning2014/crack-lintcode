'use strict';

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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// Solution 1. Wrong, can't pass: [1,1,2], [1,2,3], 10
// var kSmallestPairs = function(nums1, nums2, k) {
//   if (!Array.isArray(nums1) || !Array.isArray(nums2)
//     || nums1.length === 0 || nums2.length === 0
//     || !Number.isInteger(k) || k < 1) {
//     return [];
//   }

//   const result = (nums1[0] < nums2[0] ? [[nums1[0], nums2[0]]] : [[nums2[0], nums1[0]]]);
//   let l = 0;
//   let r = 0;
//   let lLen = nums1.length;
//   let rLen = nums2.length;
//   while ((l < lLen - 1 || r < rLen - 1) && result.length < k) {
//     if ((l < lLen - 1 && nums1[l + 1] + nums2[r] < nums1[l] + nums2[r + 1]) || r === rLen - 1) {
//       result.push([nums1[++l], nums2[r]]);
//       if (l === lLen - 1 && r !== rLen - 1) {
//         l = 0;
//         r++;
//       }
//     } else {
//       result.push([nums1[l], nums2[++r]]);
//       if (r === rLen - 1 && l !== lLen - 1) {
//         r = 0;
//         l++;
//       }
//     }
//   }

//   return result;
// };

// Solution 2. Wrong thinking
// function merge(nums1, nums2) {
//   const nums = [];
//   let l = 0;
//   let r = 0;
//   let len = nums1.length + nums2.length;
//   for (let i = 0; i < len; i++) {
//     if (l === nums1.length) {
//       nums[i] = nums2[r++];
//     } else if (r === nums2.length) {
//       nums[i] = nums1[l++];
//     } else if (nums1[l] < nums2[r]) {
//       nums[i] = nums1[l++];
//     } else {
//       nums[i] = nums2[r++];
//     }
//   }

//   return nums;
// }

// var kSmallestPairs = function(nums1, nums2, k) {
//   if (!Array.isArray(nums1) || !Array.isArray(nums2)
//     || nums1.length === 0 || nums2.length === 0
//     || !Number.isInteger(k) || k < 1) {
//     return [];
//   }

//   const nums = merge(nums1, nums2);
//   const result = []
//   for (let i = 0; i < nums.length - 1 && result.length < k; i++) {
//     for (let j = i + 1; j < nums.length && result.length < k; j++) {
//       result.push([nums[i], nums[j]]);
//     }
//   }

//   return result;
// };
console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
console.log(kSmallestPairs([1, 2], [3], 3));
console.log(kSmallestPairs([1,1,2], [1,2,3], 10));
