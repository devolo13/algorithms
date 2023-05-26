// setup max variable
// loop thru array
// loop thru array starting at i
// create dictionary with keys = str[j]
// break from loop when str[j] already exists in the dict
// see if the dictionary has more elements than our max value
// save the new max value if necessary
// return the max value

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/
//                👇
const str1 = 'abcabcbb';
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

//                v
const str2 = 'bbbbb';
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

//                 👀
const str3 = 'pwwkew';
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

//              v
const str4 = 'dvadf';
const expected4 = 4;
// Explanation: "vadf"

function lengthOfLongestSubString(str) {
  // setup a max variable to keep track of the longest non-repeating string
  let max = 0;
  // loop through the array and keep track of the start index (i)
  for (let i = 0; i < str.length && str.length - i > max; i++) {
    // setup a dictionary to keep track of what characters are already in our non-repeating string
    let dict = {};
    // loop through the array starting at i to create our non-repeating string
    for (let j = i; j < str.length; j++) {
      // check to see if str[j] is already in the non-repeating string
      // if it is, break
      if (dict.hasOwnProperty(str[j])) {
        break;
      }
      // add str[j] to our dictionary to keep track of what characters we've seen
      dict[str[j]] = true;
    }
    // see if our non-repeating string is longer than our previous strings
    if (Object.keys(dict).length > max) {
      // if it is, set max to this strings length
      max = Object.keys(dict).length;
    }
  }
  // return the max string length
  return max;
}

console.log(lengthOfLongestSubString(str1));
console.log(lengthOfLongestSubString(str2));
console.log(lengthOfLongestSubString(str3));
console.log(lengthOfLongestSubString(str4));
