const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = [

  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS?	"

  ];
let correctAnswers = [
  "Sally Ride",
   "true",
    "40", 
    "Trajectory", 
    "3"
  ];
let candidateAnswers = [];


function askForName() {
  // Prompt question ask for candidate's name //
  candidateName = input.question("Hello! Can I have your name please? ")

}

function askQuestion() {
  // Loop through candidateAnswers array[i] and prompt questions from questions array[i]
  for (i = 0; i < questions.length; i++) {
    //Prompt quiz questions and save it in candidateAnswers array
    candidateAnswers[i] = input.question(`${i + 1}) ${questions[i]}`);
    
    //Provide feedback for each question
    console.log(
      `Your answer: ${candidateAnswers[i]}
      Correct answer: ${correctAnswers[i]}
      `);
  }
}

let outOf5 = 5; //variable to hold number of Qs

function gradeQuiz(candidateAnswers) {

  let score = 0; //initial score
  for (i = 0; i < questions.length; i++) {
    
    // covert all candidateAnswers and correctAnswers to upperCase for easier case comparison
    if (typeof candidateAnswers[i] === 'string') {
      candidateAnswers[i] = candidateAnswers[i].toUpperCase();
      correctAnswers[i] = correctAnswers[i].toUpperCase();
    
    }

    //if correct uppend 100 to score else deduct -1,
    //unfortunatly its kinda hacky way of doing it but since the program has 5 Qs it will do. 
    if (candidateAnswers[i] == correctAnswers[i]) {
      score += 1;
    }else {
      outOf5 = outOf5 - 1;
    } 
  }

  let grade = (score) / (questions.length) * 100

  return grade
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  console.log("Welcome " + candidateName)
  
  askQuestion();
  let finalScore = gradeQuiz(this.candidateAnswers);
  console.log(`Overall Grade:  ${finalScore}%  (${outOf5} of ${questions.length} responses correct)`);

  let status = (finalScore < 80) ? "Status: Failed" : "Status: Passed";
  console.log(status);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};