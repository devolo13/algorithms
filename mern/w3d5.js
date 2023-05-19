/*
  Given an array of ailments, and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null
const medications = [
  {
    name: 'Sulforaphane',
    treatableSymptoms: [
      'dementia',
      "alzheimer's",
      'inflammation',
      'neuropathy',
    ],
  },
  {
    name: 'Longvida Curcumin',
    treatableSymptoms: [
      'pain',
      'inflammation',
      'depression',
      'arthritis',
      'anxiety',
    ],
  },
  {
    name: 'Hericium erinaceus',
    treatableSymptoms: ['anxiety', 'cognitive decline', 'depression'],
  },
  {
    name: 'Nicotinamide mononucleotide',
    treatableSymptoms: [
      'ageing',
      'low NAD',
      'obesity',
      'mitochondrial myopathy',
      'diabetes',
    ],
  },
  {
    name: 'PainAssassinator',
    treatableSymptoms: [
      'pain',
      'inflammation',
      'cramps',
      'headache',
      'toothache',
      'back pain',
      'fever',
    ],
  },
];

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/
// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null

function webMD(ailments, meds) {
  // setup our initial values for later use
  let answers = [];
  let currentTreatableSymptoms = 0;
  for (medicine of meds) {
    // start looping through all of our medicines
    let treatableSymptoms = 0;
    // treatableSymptoms will keep track of how many ailments this medicine treats
    for (issue of ailments) {
      // start looping through the ailments
      if (medicine.treatableSymptoms.includes(issue)) {
        treatableSymptoms++;
        // if the current medicine treats the current ailment, increase the count of this medicine's treatableSymptoms
      }
    }
    if (treatableSymptoms != 0) {
      // if the current medicine treats any of our symptoms
      if (treatableSymptoms > currentTreatableSymptoms) {
        currentTreatableSymptoms = treatableSymptoms;
        answers = [medicine.name];
        // if the current medicine treats more symptoms than previous medicines, then reset the answers array with the name of our current medicine
      } else if (treatableSymptoms === currentTreatableSymptoms) {
        answers.push(medicine.name);
        // if the current medicine treats the same number of symptoms as our best medicine, we push this medicine's name to the answers array
      }
    }
  }
  return answers;
}

console.log(webMD(['pain'], medications));
console.log(webMD(['pain', 'inflammation', 'depression'], medications));
console.log(webMD(['existential dread'], medications));
