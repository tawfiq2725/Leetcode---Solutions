let string = "_snake_case_string";

/**
 * Converts a snake_case string to camelCase.
 * @param {string} str - The input string in snake_case.
 * @returns {string} The converted string in camelCase.
 */
function strConver(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      result += str[i + 1].toUpperCase();
      ++i;
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(strConver(string));
