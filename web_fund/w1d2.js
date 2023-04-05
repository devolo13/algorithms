// // predict the output
// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = 'I should bring: ';
// if (isSunny) {
//   whatToBring += 'sunglasses, ';
// }
// if (temperature < 50) {
//   whatToBring += 'a coat, ';
// }
// if (isRaining) {
//   whatToBring += 'an umbrella, ';
// }
// whatToBring += 'and a smile!';
// console.log(whatToBring);
// // I should bring: sunglasses, a coat, and a smile!

// // predict the output
// for (var i = 10; i > 0; i--) {
//   if (i != 2) {
//     console.log(i);
//   } else {
//     console.log('ignition!');
//   }
// }
// console.log('liftoff!');
// // 10, 9, 8, 7, 6, 5, 4, 3, ignition!, 1, liftoff!

// // finish the function
// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     countPositives++;
//   }
// }
// console.log('there are ' + countPositives + ' positive values');
// there are 4 positive values

/* 
  Clock Hand Angles
  
  Traditional clocks are increasingly uncommon, but
  most can still read rotating hands of hours,
  minutes, and seconds.

  Create function clockHandAngles(seconds) that, given
  the number of seconds since 12:00:00, will print the
  angles (in degrees) of the hour, minute and second
  hands. As a quick review, there are 360 degrees in a
  full arc rotation. Treat “straight-up” 12:00:00 as 0
  degrees for all hands.
*/

function clockHandAngles(seconds) {
  var secAngle = seconds * 6;
  var minAngle = secAngle / 60;
  var hourAngle = secAngle / 360;
  while (secAngle >= 360 || minAngle >= 360 || hourAngle >= 360) {
    if (secAngle >= 360) {
      secAngle -= 360;
    }
    if (minAngle >= 360) {
      minAngle -= 360;
    }
    if (hourAngle >= 360) {
      hourAngle -= 360;
    }
  }
  return `The hour hand is at ${hourAngle} degrees. The minute hand is at ${minAngle} degrees. The second hand is at ${secAngle} degrees.`;
}
console.log(clockHandAngles(60 * 60 * 12));
