let str = "The quick brown fox jumps over the lazy gigantic dog";

function stringMan(string) {
  let n = string.length;
  let result = "";
  for (let i = 0; i < n; i++) {
    if (string[i] === " ") {
      result += ` ${string[i + 1].toUpperCase()}`;
      ++i;
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(stringMan(str));
