// jsdoc

/**
 * Given an array and an additional value, inserts the
 * value at the beginning of the array. Do this in-place,
 * without using any built-in array methods.
 * 
 * @param {Array} nums - The given array.
 * @param {Number} val - The value to be inserted.
 * @returns {Array} The mutated array.
 */
function pushFront(nums, val) {
  for(let i = nums.length -1; i>=0; i--){
    nums[i+1]=nums[i];
  }
  nums[0]=val;
  return nums;
}

const nums1 = [20, 25, 30, 28, 7];
const val1 = 8;
const expected1 = [8, 20, 25, 30, 28, 7];


/**
 * Given an array, index, and additional value, insert
 * the value into the array at the given index. Do this
 * in-place, without using built-in array methods. You
 * can think of pushFront(arr, val) as equivalent to
 * insertAt(arr, 0, val).
 * 
 * @param {Array} nums - The given array.
 * @param {Number} idx - The index at which to insert the value.
 * @param {Number} val - The given value to be inserted.
 * @returns {Array} The mutated array.
 */
function insertAt(nums, idx, val) {
  for(let i = nums.length -1; i>=idx; i--){
    nums[i+1]=nums[i];
  }
  nums[idx]=val;
  return nums;
}

const nums2 = [5, 11, 29, 6, 27];
const idx2 = 3;
const val2 = 18;
const expected2 = [5, 11, 29, 18, 6, 27]



/**
 * Given an array, remove and return the value at
 * the beginning of the array. Do this in-place
 * without using any built-in array methods except
 * pop().
 * 
 * @param {Array} nums - The given array.
 * @returns {Number} - The removed value.
 */
function popFront(nums) {
  nums[nums.length]=nums[0];
  for (let i = 1; i< nums.length; i++){
    nums[i-1]=nums[i];
  }
  nums.pop();
  return nums.pop();
}

const arr3 = [25, 16, 5, 21, 7];
const expected3 = 25;



/**
 * Given an array and an index into the array,
 * remove and return the array value at that index.
 * Do this without using any built-in array methods
 * except pop(). Think of popFront(arr) as
 * equivalent to removeAt(arr, 0).
 * 
 * @param {Array} nums - The given array.
 * @param {Number} idx - The index at which to remove the value.
 * @returns {Number} The removed value.
 */
function removeAt(nums, idx) {
  nums[nums.length]=nums[idx];
  for (let i = idx+1; i< nums.length; i++){
    nums[i-1]=nums[i];
  }
  nums.pop();
  return nums.pop();
}

const arr4 = [5, 21, 2, 30, 8];
const idx4 = 1;
const expected4 = 21;

console.log(removeAt(arr4,idx4));