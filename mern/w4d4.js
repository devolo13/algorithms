/* 
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/

// racecar
// radar
// tacocat
// level
// kayak

const str1 = '';
const expected1 = false;

const str2 = 'a';
const expected2 = true;

const str3 = 'ddaa';
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = 'dda';
const expected4 = true;
// Explanation: "dad"

//            V
const str5 = 'aadda';
const expected5 = true;
// Explanation: "daaad"

const str6 = 'abc';
const expected6 = false;

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

function canBecomePalindrome(str) {
  if (str.length === 0) {
    // edge case check for empty strings
    return false;
  }
  // setup our final dictionary
  let dict = {};
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    // check to see if the dictionary has a key for our current letter
    if (dict.hasOwnProperty(str[i])) {
      // if the key exists, increment it
      dict[str[i]]++;
    } else {
      // if the key doesn't exist, create it and set it to 1
      dict[str[i]] = 1;
    }
  }
  if (str.length % 2 === 0) {
    // if our string has an even length
    for (key in dict) {
      // loop through the keys
      if (dict[key] % 2 != 0) {
        // if we find any keys with an odd number of occurrences, return false
        return false;
      }
    }
    // if we don't find any odd number occurrences then we can return true
    return true;
  } else {
    // if the string has an odd length
    // setup an odds variable to keep track of how many letters have an odd number of occurrences
    let odds = 0;
    for (key in dict) {
      if (dict[key] % 2 != 0) {
        // when we find a key with an odd number of occurrences, we increment the odds count
        odds++;
      }
    }
    if (odds === 1) {
      // if there is exactly one letter with an odd number of occurrences then we return true
      return true;
    } else {
      // otherwise we return false
      return false;
    }
  }
}

console.log(canBecomePalindrome(str1));
console.log(canBecomePalindrome(str2));
console.log(canBecomePalindrome(str3));
console.log(canBecomePalindrome(str4));
console.log(canBecomePalindrome(str5));
console.log(canBecomePalindrome(str6));
