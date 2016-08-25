'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)
    || nums1.length === 0 || nums2.length === 0) {
    return [];
  }

  const set1 = new Set(nums1);
  const set2 = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      set2.add(nums2[i]);
    }
  }

  return Array.from(set2);
};

// ================= Solution 2 =================
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)
    || nums1.length === 0 || nums2.length === 0) {
    return [];
  }

  nums1.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));
  nums2.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));

  const result = new Set();
  let l = 0;
  let r = 0;
  while (l < nums1.length && r < nums2.length) {
    const cmp = nums1[l] - nums2[r];
    if (cmp < 0) {
      l++;
    } else if (cmp > 0) {
      r++;
    } else {
      result.add(nums1[l]);
      l++;
      r++;
    }
  }

  return Array.from(result);
};

console.log(intersection([1,2,2,1], [2,2]));
