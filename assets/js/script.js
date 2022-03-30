var questionCounter = 0;
var startButton = document.querySelector("#start-quiz");
var questionList = document.querySelector("#question-list");
var pageContentEl = document.querySelector("#page-content");
var questionEl = document.querySelector("#question");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");
var minutesLabel = document.querySelector("#minutes");
var secondsLabel = document.querySelector("#seconds");
var totalSeconds = 30;

const questionArray = [
  {
    question: "Commonly used data types do NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctChoice: "Alerts"
  },
  {
    question: "The condition in an if/else statement is enclosed in:",
    choices: ["Quotes", "Parenthisis", "Curly brackets", "Square brackets"],
    correctChoice: "Parenthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    choices: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"],
    correctChoice: "All of the above"
  },
  {
    question: "String values must be enclosed with ______ when being assigned to variables",
    choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    correctChoice: "Quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printin content to the debugger is:",
    choices: ["JavaScript", "Terminal Bash", "for loops", "console.log"],
    correctChoice: "console.log"
  }
];


// create question 1
var generateQuestion = function () {
  // loop through questionArray
  // for (var i = 0; i < questionArray.length; i++) {
  var questionTitle = questionArray[questionCounter].question;
  questionEl.textContent = questionTitle;
  console.log(questionTitle);

  var questionChoiceOne = questionArray[questionCounter].choices[0];
  answerOne.textContent = questionChoiceOne;
  answerOne.setAttribute("value", questionChoiceOne);
  answerOne.addEventListener("click", answerHandler);
  console.log(questionChoiceOne);

  var questionChoiceTwo = questionArray[questionCounter].choices[1];
  answerTwo.textContent = questionChoiceTwo;
  answerTwo.setAttribute("value", questionChoiceTwo);
  answerTwo.addEventListener("click", answerHandler);
  console.log(questionChoiceTwo);

  var questionChoiceThree = questionArray[questionCounter].choices[2];
  answerThree.textContent = questionChoiceThree;
  answerThree.setAttribute("value", questionChoiceThree);
  answerThree.addEventListener("click", answerHandler);
  console.log(questionChoiceThree);

  var questionChoiceFour = questionArray[questionCounter].choices[3];
  answerFour.textContent = questionChoiceFour;
  answerFour.setAttribute("value", questionChoiceFour);
  answerFour.addEventListener("click", answerHandler);
  console.log(questionChoiceFour);
  
  setInterval(setTime, 1000);

  function setTime() {
    --totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
  
  function pad(val) {
    var valString = val + "";
    console.log(valString);
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  } if (secondsLabel.innerHTML <= 00) {
    gameOver();
  }
}

var answerHandler = function() {

  // var imCorrect = questionArray[questionCounter].correctChoice;
  // console.log("Correct Choice: ", imCorrect);
  // console.log("This.value: ", this.innerText);
  if (this.innerText !== questionArray[questionCounter].correctChoice) {

    console.log("wrong");
    // deduct time for wrong answers
    --totalSeconds;
  }
  else {
    console.log("correct");
  }

  questionCounter++;
  if (questionCounter === questionArray.length) {
    //game over function
    gameOver();
  } else {
    generateQuestion();
  }
}

var gameOver = function() {
  console.log("Game Over");
  return;

  //stop interval
}

//suggestion for score, time left i

    // var questionAnswer = questionArray[questionCounter].correctChoice;
    // console.log("The answer is: " + questionAnswer);

    // var questionWrapperEl = document.createElement("section");
    // questionWrapperEl.className = "question-wrapper";
    // // create unordered list
    // var questionAnswerListEl = document.createElement("ul");
    // questionAnswerListEl.className = "question-answer-list";

    // questionWrapperEl.appendChild(questionAnswerListEl);

    // create question
    // var questionEl = document.createElement("h2");
    // questionEl.className = "question-title";
    // questionEl.textContent = questionTitle;

    // questionWrapperEl.appendChild(questionEl);
  // }
  // create list items


// var createQuestionEl = function(questionEl) {
//   var questionListEl = document.createElement("h2");
//   questionListEl.className = "question-title";

//   questionListEl.setAttribute("question-id", questionCounter);

//   var questionListItem = document.createElement("ul");
//   questionListItem.classname = "question-answer-list";
//   questionListItem.innerHTML = '<li class="question-answer-item">' + questionEl.choices + '</li></ul>';
// }

startButton.addEventListener("click", generateQuestion);