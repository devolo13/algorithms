// roll a d6
function d6() {
  var roll = Math.random();
  roll=(roll*6)+1;
  roll=Math.floor(roll);
  return roll;
}
  
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// make a function that chooses a random answer
var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];
function eightBall(){
  var random=Math.random();
  random = random * 20;
  random = Math.floor(random);
  return lifesAnswers[random];
}
console.log(eightBall());