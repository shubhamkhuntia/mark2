var readline = require("readline-sync");
var score = 0;
var userAnswer = readline.question("Hey! I am Shubham. What's your name? \n");
console.log("Hi " + userAnswer + ", Welcome to DO YOU KNOW bhagavad Gita ! \n");
var highScores = [
  {
    name: "Shubham",
    score: 4
  },
  {
    name: "Shruti",
    score: 3
  },
  {
    name: "Vroom",
    score: 2
  }
]

var questionOne = {
  question: "What is the literary meaning of Bhagavad Gita ?\n",
  answer: "Song of the Lord",
}

var questionTwo = {
  question: "Who is the speaker of Bhagavad Gita? \n",
  answer: "Sri Krishna",
}


var questionThree = {
  question: "Who had the sacred knowledge of Gita before Arjuna ?\n",
  answer: "Lord Sun",
}

var questionFour = {
  question: "How much time did Lord Krishna take in completing the Gita ?\n",
  answer: "45",
}

var questionFive = {
  question: "Who is the writer of the Bhagavad Gita ? \n",
  answer: "Sage Vyasa",
}
function play(question, answer) {
  var quizAnswer = readline.question(question);
  if (quizAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log("That's cool dude !!\n");
  } else {
    console.log("OOPS, You lost me here !");
    console.log("Answer : " + answer + "\n");
  }
}
var arr = [questionOne, questionTwo, questionThree, questionFour, questionFive];
for (var i = 0; i < 5; i++) {
  play(arr[i].question, arr[i].answer);
}
console.log("Current score", score);
if (score == 5) {
  console.log("Woo, You rocked it . You scored full!")
} else {
  console.log("You can try again. Visit my linkedn to know more about me : https://www.linkedin.com/in/shubhamkhuntia/");
}

console.log("--High Scorers--");
for (var i = 0; i < 3; i++) {
  console.log(highScores[i].name);

}
if (score > highScores[0].score) {
  console.log("Looks like you are a high scorer. Send me a screenshot and I will update it");
}
