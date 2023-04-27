/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num11 = 5;
const expected11 = 5;

const num12 = 10;
const expected12 = 1;

const num13 = 25;
const expected13 = 7;

const num14 = 487;
const expected14 = 1;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
  num = num.toString().split('')
  if (num.length == 1){
    return Number(num.join(''))
  }
  let sum = 0;
  for (let i = 0; i < num.length; i++){
    sum += Number(num[i]);
  }
  return sumToOneDigit(sum)
}

// console.log(sumToOneDigit(143452435));

/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str21 = "lim";
const expected21 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str, arr=[]) {
  if (typeof(str) == String){
    let letters = str.split('');
  } else{
    let letters = str;
  }
  for (let i = 0; i < letters.length; i ++){
    let options = generateAnagrams(letters.slice(2, letters.length-1));
    for (let j = 0; j < options.length; j ++){
      arr[arr.length] = (letters[i] + options[j]).join('');
    }
  }
  return arr
}
// GENERATE ANAGRAMS IS BROKEN

console.log(generateAnagrams('lim'));

// console.log('hello World'.split(''));