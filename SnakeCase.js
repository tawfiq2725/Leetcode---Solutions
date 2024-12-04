let string = "_snake_case_string";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Converts a snake_case string to camelCase.
 * @param {string} str - The input string in snake_case.
 * @returns {string} The converted string in camelCase.
 */
/******  2c4bec3f-4e44-4f90-a2f3-ecfc44ad65ec  *******/
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
