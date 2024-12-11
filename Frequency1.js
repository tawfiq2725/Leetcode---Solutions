/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let obj = {};

  // Step 1: Count the occurrences of each character
  for (let num of s) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  // Step 2: Check if all frequencies are equal
  const frequencies = Object.values(obj); // Get all the frequency values

  // Check if all frequencies are the same as the first frequency
  for (let i = 1; i < frequencies.length; i++) {
    if (frequencies[i] !== frequencies[0]) {
      return false; // If any frequency is different, return false
    }
  }

  return true; // If all frequencies are the same, return true
};
