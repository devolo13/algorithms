/* 
    Array: Binary Search (non recursive)
    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, 'divide and conquer',
    taking advantage of the fact that the array is sorted .
    Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
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

// bonus, how many times does the search num appear?
const nums14 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum14 = 2;
const expected14 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function recursiveBinarySearch(sortedNums, searchNum) {
  if (sortedNums.length < 1) {
    return false;
  } else if (sortedNums[Math.floor(sortedNums.length / 2)] == searchNum) {
    return true;
  } else if (sortedNums[Math.floor(sortedNums.length / 2)] < searchNum) {
    let newArr = sortedNums.splice(Math.floor(sortedNums.length / 2 + 1), sortedNums.length / 2);
    return binarySearch(newArr, searchNum);
  } else {
    let newArr = sortedNums.splice(0, Math.floor(sortedNums.length / 2));
    return binarySearch(newArr, searchNum);
  }
}

// doesn't work. should make a variable for left index and right index. then you can move them around and search between them
function binarySearch(sortedNums, searchNum) {
  let i = Math.floor(sortedNums.length / 2);
  while (i != -1) {
    if (sortedNums[i] == searchNum) {
      return true;
    } else if (i == sortedNums.length - 1 || i == 0) {
      return false;
    } else if (sortedNums[i] > searchNum) {
      i = 'something';
    } else if (sortedNums[i] < searchNum) {
      i = 'something else';
    }
  }
}

// console.log(recursiveBinarySearch(nums13,searchNum13));

/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums21 = [1, 1, 1, 1];
const expected21 = [1];

const nums22 = [1, 1, 2, 2, 3, 3];
const expected22 = [1, 2, 3];

const nums23 = [1, 1, 2, 3, 3, 4];
const expected23 = [1, 2, 3, 4];

const nums24 = [1, 1];
const expected24 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
  let i = 1;
  let number = nums[0];
  while (i < nums.length) {
    if (nums[i] == number) {
      nums.splice(i, 1);
    } else {
      number = nums[i];
      i++;
    }
  }
  return nums;
}

console.log(dedupeSorted(nums23));
