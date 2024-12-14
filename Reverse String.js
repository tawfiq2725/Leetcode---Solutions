/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (str) {
  let newString = str
    .split(" ")
    .reverse()
    .join(" ")
    .replace(/^\s+|\s+$/g, "");
  return newString.replace(/\s{2,}/g, " ");
};
