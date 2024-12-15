/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (arr) {
  if (arr.length <= 1) {
    return arr.length;
  }

  let writeIndex = 0;
  let readIndex = 0;

  while (readIndex < arr.length) {
    let currentChar = arr[readIndex];
    let count = 0;

    while (readIndex < arr.length && arr[readIndex] === currentChar) {
      readIndex++;
      count++;
    }

    arr[writeIndex] = currentChar;
    writeIndex++;

    if (count > 1) {
      for (let digit of count.toString()) {
        arr[writeIndex] = digit;
        writeIndex++;
      }
    }
  }

  return writeIndex;
};
