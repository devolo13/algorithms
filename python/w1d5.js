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

const keys1 = ['abc', 3, 'yo'];
const vals1 = [42, 'wassup', true];
const expected1 = {
  abc: 42,
  3: 'wassup',
  yo: true,
};

console.log(isPalindrome('Racecar'));
console.log(zipArraysIntoMap(keys1, vals1));
