let str1 = "pots";
let str2 = "posttopshellstop";

function anagram(s1, s2) {
  let result = [];
  let check = s1.split("").sort().join("");
  let length = check.length;
  for (let i = 0; i <= s2.length - length; i++) {
    let slice = s2.slice(i, i + length);
    if (check === slice.split("").sort().join("")) {
      result.push(slice);
    }
  }
  return result;
}
console.log(anagram(str1, str2));
// expected output : [post , tops , stop]
