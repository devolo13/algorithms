const obj0 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected0 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
  let returnedObject = {};
  let value = Object.values(obj);
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i ++){
    returnedObject[value[i]] = keys[i];
  }
  return returnedObject;
}

// console.log(invertObj(obj0));




const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
  let finalObj = {};
  while (arr.length > 0){
    let number = 0;
    let tempName = arr[0];
    for (let j = 0; j< arr.length; j ++){
      if (arr[j] == tempName){
        number ++;
        arr.splice(j,1);
        j--;
      }
    }
    finalObj[tempName] = number;
  }
  return finalObj;
}

function frequencyTable2(arr){
  let finalObj = {};
  for (let i = 0; i < arr.length; i++){
    if (finalObj[arr[i]] == undefined){
      finalObj[arr[i]] = 1;
    } else {
      finalObj[arr[i]] += 1;
    }
  }
  return finalObj;
}


console.log(invertObj(obj0));
console.log(frequencyTable2(arr2));
console.log(makeFrequencyTable(arr2));