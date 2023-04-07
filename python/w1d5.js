function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function zipArraysIntoMap(keys, values) {
  let map = {};
  for (let i = 0; i < keys.length; i++) {
    if (values[i] == undefined) {
      return map;
    } else {
      map[keys[i]] = values[i];
    }
  }
  return map;
}

const keys3 = [ "a", "b", "c", "d" ];
const vals3 = [ 1, 2, 3 ];

console.log(isPalindrome('Racecar'));
console.log(zipArraysIntoMap(keys3, vals3));
