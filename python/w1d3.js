/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ', ';
// const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = '-';
// const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = ' - ';
// const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ', ';
// const expected4 = "1";

const arr5 = [];
const separator5 = ', ';
// const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator = ', ') {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += arr[i];
    if (arr[i + 1] != undefined) {
      string += separator;
    }
  }
  return string;
}

function joinArr(arr, sep = ', ') {
  let str = '';
  arr.forEach((a) => (str += a + sep + ' '));
  return str;
}

/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = '1, 13-15, 37-38, 70';

const nums2 = [5, 6, 7, 8, 9];
const expected2 = '5-9';

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = '1-3, 7, 9, 15-17';

// /**
//  * Turns the given arr of page numbers into a string of comma hyphenated
//  * page ranges.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums Page numbers.
//  * @returns {string} The given page numbers as comma separated hyphenated
//  *    page ranges.
//  */
function bookIndex(nums) {
  let string = '';
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] !== undefined && nums[i + 1] === nums[i] + 1) {
      let tempstring = '';
      for (let j = i; j < nums.length; j++) {
        if (nums[j + 1] !== nums[j] + 1) {
          tempstring += '-';
          tempstring += nums[j];
          string += tempstring;
          i = j;
          break;
        } else if (tempstring == '') {
          tempstring += nums[j].toString();
        }
      }
    } else {
      string += nums[i].toString();
    }
    if (nums[i + 1] !== undefined) {
      string += ', ';
    }
  }
  return string;
}

console.log(bookIndex(nums3));
