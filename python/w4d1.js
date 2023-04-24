/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num11 = 5;
const expected11 = 15;
// Explanation: (1+2+3+4+5)

const num12 = 2.5;
const expected12 = 3;
// Explanation: (1+2)

const num13 = -1;
const expected13 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
  if (num < 0) {
    return 0;
  }
  let sum = Math.floor(num) + recursiveSigma(num - 1);
  return sum;
}


// console.log(recursiveSigma(2.5));


/* 
  Recursively sum an arr of ints
*/

const nums21 = [1, 2, 3];
const expected21 = 6;

const nums22 = [1];
const expected22 = 1;

const nums23 = [];
const expected23 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
  if (nums.length <= 0) {
    return 0;
  }
  sum = nums[0];
  nums.splice(0, 1);
  sum += sumArr(nums);
  return sum;
}

console.log(sumArr(nums21));
