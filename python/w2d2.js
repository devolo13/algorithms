const nums1 = [1];
// const expected1 = 1;
const nums2 = [5, 4, 5];
// const expected2 = 4;
const nums3 = [5, 4, 3, 4, 3, 4, 5];
// const expected3 = 4; // there is a pair of 4s but one 4 has no pair.
const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
// const expected4 = 1;

const str1 = 'abcABC';
// const expected1 = "abcABC";
const str2 = 'helloo';
// const expected2 = "helo";
const str3 = '';
// const expected3 = "";
const str4 = 'aaaaaa';
// const expected4 = "a";
/* For BONUS */
const str5 = "programming";
// const expected5 = "poraming";


function oddOccurrencesInArray(nums) {
  let indexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (!indexes.includes(i)) {
      let temp = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] == temp) {
          indexes.push(i);
          indexes.push(j);
          j += nums.length;
        } else if (j == nums.length - 1) {
          return nums[i];
        }
      }
    }
  }
  return 'failed';
}


function stringDedupe(str){
  let newString = ``;
  for (let i = str.length - 1; i >= 0; i --){
    if (!newString.includes(str[i])){
      newString += str[i];
    }
  }
  newString = newString.split("").reverse().join("");
  return newString;
}

console.log(oddOccurrencesInArray(nums4));
console.log(stringDedupe(str3));
