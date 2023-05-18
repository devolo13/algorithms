/* 
  findByIdAndUpdate(id, updateObject, arr)
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found

  check 
  someObj.hasOwnProperty("key")
  obj[key] === undefined
  Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
  {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false
  },
  {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false
  },
  {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false
  }
];

// Ninja.findByIdAndUpdate(req.params._id, {})
function findByIdAndUpdate(id, updatedVals, collection) {
  for (const object of collection) {
    // loop through our collection
    if (object['id'] === id) {
      // check if we found the object we want
      for (const key in updatedVals) {
        // loop through each key in our updated values array
        if (object.hasOwnProperty(key)){
          // if the updated value key exists in our our old object
          object[key] = updatedVals[key];
          // update the old object
        }
      }
      return object;
      // after we've updated all the values, return the updated object
    }
  }
  return 'error. object not found in collection';
  // if we loop through the entire collection without finding our object, return an error message
}



console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));

/*--- TEST the following: ---
Input: 3, { redBeltStatus: true }, students
Output: {
id: 3,
name: "student3",
isLateToday: false,
lateCount: 0,
redBeltStatus: true
}
*/

/*
Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
Output: {
id: 1,
name: "student1",
isLateToday: true,
lateCount: 16,
redBeltStatus: false
}
*/

// Input: 5, {}, students
// Output: null

// Message #🚀cohort-johnm
