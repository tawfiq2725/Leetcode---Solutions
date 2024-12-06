/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let resultArr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (resultArr.length % 2 !== 0) {
    // odd
    let result = Math.floor(resultArr.length / 2);
    return resultArr[result];
  } else {
    // even
    let result = resultArr.length / 2;
    return (resultArr[result] + resultArr[result - 1]) / 2;
  }
};
