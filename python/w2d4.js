const str11 = 'Y(3(p)p(3)r)s';
// const expected1 = true;
const str12 = 'N(0(p)3';
// const expected2 = false;
// Explanation: not every parenthesis is closed.
const str13 = 'N(0)t ) 0(k';
// const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.
const str14 = 'a(b))(c';
// const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(string) {
  // par = [(,)]
  let par = [0, 0];
  for (i in string) {
    if (string[i] == '(') {
      par[0]++;
    } else if (string[i] == ')') {
      par[1]++;
      if (par[1] > par[0]) {
        return false;
      }
    }
  }
  if (par[0] == par[1]) {
    return true;
  } else {
    return false;
  }
}

const str21 = 'W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!';
// const expected1 = true;
const str22 = 'D(i{a}l[ t]o)n{e';
// const expected2 = false;
const str23 = 'A(1)s[O (n]0{t) 0}k';
// const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */

// DOESN'T WORK FOR STR23
function bracesValid(string) {
  // par = [ ( , ) , [ , ] , { , } ]
  let par = [0, 0, 0, 0, 0, 0];
  for (i in string) {
    if (string[i] == '(') {
      par[0]++;
    } else if (string[i] == ')') {
      par[1]++;
    } else if (string[i] == '[') {
      par[2]++;
    } else if (string[i] == ']') {
      par[3]++;
    } else if (string[i] == '{') {
      par[4]++;
    } else if (string[i] == '}') {
      par[5]++;
    }
    if (par[1] > par[0] || par[3] > par[2] || par[5] > par[4]) {
      return false;
    }
  }
  if (par[0] == par[1] && par[2] == par[3] && par[4] == par[5]) {
    return true;
  } else {
    return false;
  }
}

// DOESN'T WORK FOR STR23
function otherBracesValid(string) {
  let par = {
    '(': 0,
    ')': 0,
    '{': 0,
    '}': 0,
    '[': 0,
    ']': 0,
  };
  for (i in string) {
    if (par[string[i]] != undefined) {
      par[string[i]]++;
      if (par[')'] > par['('] || par[']'] > par['['] || par['}'] > par['{']) {
        return false;
      }
    }
  }
  if (par[')'] == par['('] && par[']'] == par['['] && par['}'] == par['{']) {
    return true;
  }
  return false;
}

// WORKS FOR ALL TEST CASES
function otherOtherBracesValid(string) {
  par = [];
  for (i in string) {
    if (string[i] == '(' || string[i] == '[' || string[i] == '{') {
      par.push(string[i]);
    } else if (string[i] == ')') {
      if (par[par.length - 1] == '(') {
        par.pop();
      } else {
        return false;
      }
    } else if (string[i] == ']') {
      if (par[par.length - 1] == '[') {
        par.pop();
      } else {
        return false;
      }
    } else if (string[i] == '}') {
      if (par[par.length - 1] == '{') {
        par.pop();
      } else {
        return false;
      }
    }
  }
  if (par.length == 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(parensValid(str1));
// console.log(bracesValid(str22));
// console.log(otherBracesValid(str22));
console.log(otherOtherBracesValid(str23));
