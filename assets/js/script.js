var timeLeft = 75;
var questionCounter = 0;
var startButton = document.querySelector("#start-quiz");
var instructionsEl = document.querySelector("#instructions");
var questionList = document.querySelector("#question-list");
var pageContentEl = document.querySelector("#page-content");
var questionEl = document.querySelector("#question");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");
var minutesLabel = document.querySelector("#minutes");
var secondsLabel = document.querySelector("#seconds");
var timerEl = document.querySelector("#countdown-timer");
var userInitialsEl = document.querySelector("#userInitials");


const questionArray = [
  {
    question: "1. Commonly used data types do NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctChoice: "Alerts"
  },
  {
    question: "2. The condition in an if/else statement is enclosed in:",
    choices: ["Quotes", "Parenthisis", "Curly brackets", "Square brackets"],
    correctChoice: "Parenthesis"
  },
  {
    question: "3. Arrays in JavaScript can be used to store:",
    choices: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"],
    correctChoice: "All of the above"
  },
  {
    question: "4. String values must be enclosed with ______ when being assigned to variables",
    choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    correctChoice: "Quotes"
  },
  {
    question: "5. A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal Bash", "for loops", "console.log"],
    correctChoice: "console.log"
  }
];


// create question 1
var generateQuestion = function () {
  // disappear start quiz button
  document.querySelector("#start-quiz").style.display="none";
  document.querySelector("#instructions").style.display="none";

  // loop through questionArray
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
  
  timer();
}

var timer = function() {
  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (questionCounter === 5) {
      // clear timer
      clearTimeout(timerId);
      // clear quiz question and answers
      document.querySelector("#question").style.display="none";
      document.querySelector("#answerOne").style.display="none";
      document.querySelector("#answerTwo").style.display="none";
      document.querySelector("#answerThree").style.display="none";
      document.querySelector("#answerFour").style.display="none";
      timerEl.innerHTML = "Quiz complete!";
      gameOver();
    }
    else if (timeLeft === -1) {
      clearTimeout(timerId);
      gameOver();
    } else {
      timerEl.innerHTML = timeLeft + " seconds remaining!";
      timeLeft--;
    }
  }
}

var answerHandler = function() {
  if (this.innerText !== questionArray[questionCounter].correctChoice) {
    // check if answer is wrong
    console.log("wrong");
    // speed up timer for wrong answers
    timerEl.innerHTML = timeLeft + " seconds remaining!";
    if (timeLeft = timeLeft - 15) {
      timer();
    }
  }
  else {
    // answer is correct
    console.log("correct");
  }
  
  questionCounter++;
  if (questionCounter === questionArray.length) {
    // check if question counter has any questions left
    timer();
    } else {
    generateQuestion();
  }
}

var gameOver = function() {

  // generate final score
  let finalScoreEl = document.querySelector("#finalScore");
  finalScoreEl.classList.remove("final-score");
  finalScoreEl.classList.add("final-score::after");

  let scoreTitleEl = document.querySelector("#scoreTitle");
  scoreTitleEl.classList.remove("final-score-title");
  scoreTitleEl.classList.add("final-score-title::after");

  // // generate scores container element
  // let scoresContainerEl = document.querySelector("#scoresContainer");
  // scoresContainerEl.classList.remove("scores-container");
  // scoresContainerEl.classList.add("scores-container::after")

  // // generate scores title element
  // let scoresTitleEl = document.querySelector("#scoresTitle");
  // scoresTitleEl.classList.remove("scores-title");
  // scoresTitleEl.classList.add("scores-title::after");

  // // generate scores list element
  // let scoresListEl = document.querySelector("#scoresList");
  // scoresListEl.classList.remove("scores-list");
  // scoresListEl.classList.add("scores-list::after");

  // // generate scores item
  // let scoresItemEl = document.querySelector("#scoresItem");
  // scoresItemEl.classList.remove("class-list");
  // scoresItemEl.classList.add("scores-item::after");

  // prompt user for initials and save them

    // generate score
    var generateFinalScoreEl = timeLeft;
    if (timeLeft <= -1) {
      timeLeft = 0;
      finalScoreEl.textContent = "Game over! You scored: " + timeLeft;
    } else {
      finalScoreEl.textContent = "Game over! You scored: " + timeLeft;
    }
    console.log("This is the final score: " + generateFinalScoreEl);
    if (generateFinalScoreEl >= 0) {
      promptUserInitials();
    }
}

var promptUserInitials = function() {
  var userInitialsFormEl = document.createElement("form");
  userInitialsFormEl.className = "user-initials-form";
  userInitialsFormEl.id = "userInitialsForm";
  userInitialsFormEl.innerHTML = '<div class="user-initials-form" id="userInitialsForm"></div>';

  var userInitialsEl = document.createElement("input");
  userInitialsEl.className = "user-initials";
  userInitialsEl.id = "userInitials";
  userInitialsEl.innerHTML = '"<input type="text" name="user-initials" placeholder="Enter initials to save your score: />"';

  userInitialsEl.appendChild(userInitialsEl);


}

  // if (initials.length <= 3) {
  //   console.log(initials);
  //   return;
  // } else {
  //   window.prompt("Invalid entry! Please enter initials containing three or less characters.");
  //   return;
  
  // display high score list
  // var generateScoreList = function() {
  //   var highScoreEl = document.querySelector("#high-scores");
  //   console.log(highScoreEl);
  //   var scoreOneEl = document.querySelector("#scoreOne");
  //   console.log(scoreOneEl);
  //   var scoreTwoEl = document.querySelector("#scoreTwo");
  //   console.log(scoreTwoEl);
  //   var scoreThreeEl = document.querySelector("#scoreThree");
  //   console.log(scoreThreeEl);
  //   var scoreFourEl = document.querySelector("#scoreFour");
  //   console.log(scoreFourEl);
  //   var scoreFiveEl = document.querySelector("#scoreFive");
  //   console.log(scoreFiveEl);
  // }


startButton.addEventListener("click", generateQuestion);