/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                           v
const str1 = 'b70a164c32a20c10';
const expected1 = 'a184b70c42';

// isNaN
// parseInt()
// someObj.hasOwnProperty("key")

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {
  // initiate some values
  let dict = {};
  let i = 0;
  // loop through the string
  while (i < str.length) {
    // if you hit a letter in the string
    if (isNaN(str[i])) {
      // initiate j and num
      let j = i + 1;
      let num = '';
      // while string[j] is a number
      while (!isNaN(str[j])) {
        // add the number's string to num and increment j
        num += str[j];
        j++;
      }
      // if this key is already in our dict
      if (dict.hasOwnProperty(str[i])) {
        // add the value of num (as a number) to that key's value
        dict[str[i]] += parseInt(num);
      } else {
        // if the key isn't in our dictionary, create it
        // and set it's value to the number value of num
        dict[str[i]] = parseInt(num);
      }
      // set i to j to avoid unnecessary loops
      i = j;
    } else {
      // edge case if there are two letters next to each other or str[0] is a number to avoid infinite loops
      i++;
    }
  }
  // get an array of the dictionary's keys and sort it alphabetically
  let keys = Object.keys(dict);
  keys.sort();
  // setup our final answer variable
  let stringifiedAnswer = '';
  for (key of keys) {
    // loop through all our keys and push a formatted answer to our stringified variable
    stringifiedAnswer += `${key}${dict[key]}`;
  }
  // return the stringified answer
  return stringifiedAnswer;
}

console.log(rehash(str1));
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");
