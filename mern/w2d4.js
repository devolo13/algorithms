/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
const k1 = 16;
const arr1 = [2, 5, 3, 6, 7, 0, 0, 23, 11];

output = [
  [2, 5, 3, 6],
  [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take ~10 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return here:
function consecutiveSums(arr, k) {
  let options = [];
  for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    let runningSum = 0;
    let index = i;
    while (runningSum < k && index < arr.length) {
      runningSum += arr[index];
      tempArr.push(arr[index]);
      if (runningSum === k) {
        options.push(tempArr);
        let zeros = index + 1;
        let zerosArr = [...tempArr];
        while (arr[zeros] === 0) {
          zerosArr.push(arr[zeros]);
          options.push([...zerosArr]);
          zeros++;
        }
      }
      index++;
    }
  }
  return options;
}

function consecutiveSumsV2(arr, k) {
  // setup our options array so we can push all our answers to it
  let options = [];
  for (let i = 0; i < arr.length; i++) {
    // setup a loop for the array
    // setup our variables and reset them if this isn't our first loop
    let tempArr = [];
    let runningSum = 0;
    let index = i;
    while (runningSum <= k && index < arr.length) {
      // do a loop starting at index(i) and going until we overshoot our sum or our array length
      // increase our sum and push our new value to our temp array
      runningSum += arr[index];
      tempArr.push(arr[index]);
      if (runningSum === k) {
        // if we found a solution, push it to the options array
        // spread operator
        options.push([...tempArr]);
      }
      // infinite loops are bad mkay
      index++;
    }
  }
  return options;
}

// console.log(consecutiveSums(arr1, k1));

console.log(consecutiveSumsV2(arr1, k1));
