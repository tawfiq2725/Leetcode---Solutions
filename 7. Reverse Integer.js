/**
 * @param {number} num
 * @return {number}
 */
var reverse = function (num) {
  let result = "";
  let str = num.toString();
  let len = str.length;
  let flag = false;
  for (let i = len - 1; i >= 0; i--) {
    if (str[i] === "-") {
      flag = true;
    } else if (str[i] !== 0) {
      result += str[i];
    }
  }
  let reversedNum = Number(result);
  if (flag) {
    reversedNum = -reversedNum;
  }
  if (reversedNum < -2147483648 || reversedNum > 2147483647) {
    return 0;
  }
  return reversedNum;
};
