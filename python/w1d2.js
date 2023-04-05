// Acronyms
// Create a function that, given a string, returns the string’s acronym
// (first letter of each word capitalized).
// Do it with .split first if you need to, then try to do it without
// */

const str1 = 'object oriented programming';
const expected1 = 'OOP';

// The 4 pillars of OOP
const str2 = 'abstraction polymorphism inheritance encapsulation';
const expected2 = 'APIE';

const str3 = 'software development life cycle';
const expected3 = 'SDLC';

// Bonus: ignore extra spaces
const str4 = '  global   information tracker    ';
const expected4 = 'GIT';

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
  var abbrev = '';
  var temp = 0;
  for (var i = 0; i < 3; i++) {
    if (str[i] == ' ') {
      temp++;
    }
  }
  for (var i = temp; i < str.length; i++) {
    if (i == temp) {
      abbrev += str[i];
    } else if (str[i] != ' ' && str[i - 1] == ' ') {
      abbrev += str[i];
    }
  }
  abbrev = abbrev.toUpperCase();
  return abbrev;
}
console.log(acronymize(str4));
