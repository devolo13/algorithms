/*

Setup a function that takes in two variables, an array and a value
  setup an i loop to loop through the array
    if the element at i is greater than our target value
      don't bother going through the second loop
    setup a j loop to loop through the rest of the array from i+1 onwards
      if the sum of arr[i] and arr[j] is our value
        return the i and j indexes
  if we have broken through all our loops without a return, return an error message

*/

/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    example 1
    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    example 2
    given: [3,2,4]
    target: 6
    output: [1,2]

    example 3
    given: [3,3]
    target: 6
    output: [0,1]
*/

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take ~10 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return here:
function twoSums(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= val) {
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === val) {
        return [i, j];
      }
    }
  }
  return 'Error';
}

function twoSumsOneLoop(arr, val) {
  let i = 0;
  let j = 1;
  while (i < arr.length) {
    if (j >= arr.length) {
      i++;
      j = i + 1;
    } else if (arr[i] + arr[j] === val) {
      return [i, j];
    } else {
      j++;
    }
  }
  return 'Error';
}

console.log(twoSums([2, 11, 7, 15], 26));
console.log(twoSumsOneLoop([2, 11, 7, 15], 26));




// stolen from https://javascript.plainenglish.io/how-to-solve-two-sum-algorithm-in-javascript-90c998dd8aad
function twoSumsCopiedFromPlace(nums, target){
  //FIRST STEP: create an empty Object 
  let numObject = {};
  //SECOND STEP: use a for-loop to iterate through the array
  for(let eachNum in nums){
    let otherNum = target - nums[eachNum] //we'll check for otherNum in the object and if it's there, we got it and can push in our result array. if(otherNum in numObject){
      let resultArr = [];
      resultArr.push(otherNum, nums[eachNum])
      return resultArr;
  }
  numObject[nums[eachNum]] = eachNum //NB! adding key/value has to go after the if-statement to avoid adding the same index twice. We add the value or a new pair on each iteration.
    return "not found";
}

// console.log(twoSumsCopiedFromPlace([2, 11, 7, 15], 26));