/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums11 = [1, 3, 5, 6];
const searchNum11 = 4;
const expected11 = false;

const nums12 = [4, 5, 6, 8, 12];
const searchNum12 = 5;
const expected12 = true;

const nums13 = [3, 4, 6, 8, 12];
const searchNum13 = 3;
const expected13 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
  if (sortedNums.length < 1) {
    return false;
  } else if (sortedNums[Math.floor(sortedNums.length / 2)] == searchNum) {
    return true;
  } else if (sortedNums[Math.floor(sortedNums.length / 2)] < searchNum) {
    let newArr = sortedNums.splice(
      Math.floor(sortedNums.length / 2 + 1),
      sortedNums.length / 2
    );
    return binarySearch(newArr, searchNum);
  } else {
    let newArr = sortedNums.splice(0, Math.floor(sortedNums.length / 2));
    return binarySearch(newArr, searchNum);
  }
}

// console.log(binarySearch(nums12, searchNum12));

/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str21 = 'abc';
const expected21 = 'cba';

const str22 = '';
const expected22 = '';

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
  if (str === '') {
    return '';
  }
  let strArr = str.slice(1);
  let str0 = str[0];
  return reverseStr(strArr) + str0;
}

console.log(reverseStr('hello world'));
