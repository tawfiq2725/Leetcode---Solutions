/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let maxlength = Math.max(word1.length, word2.length);
  let result = "";
  for (let i = 0; i < maxlength; i++) {
    result += `${word1[i] ?? ""}` + `${word2[i] ?? ""}`;
  }
  return result;
};
