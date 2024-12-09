/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let result = [];
  let i = 0;
  for (let num of arr) {
    result.push(fn(num, i++));
  }
  return result;
};
