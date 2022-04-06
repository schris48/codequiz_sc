var timeLeft = 75;
var questionCounter = 0;
var scoreIdCounter = 0;
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
var submitInitialsBtnEl = document.querySelector("#submitInitialsBtn");
var finalScoreEl = document.querySelector("#finalScore");
var questionWrapperEl = document.querySelector(".question-wrapper");
var finalScoreContainer = document.querySelector("#finalScoreContainer");
var scoresContainerEl = document.querySelector("#scoresContainer");
var scoresTitleEl = document.querySelector("#scoresTitle");
var finalTitleEl = document.querySelector("#finalTitle");
var scoresListEl = document.querySelector("#scoresList");
var scoresItemOne = document.querySelector("#scoresItemOne");
var scoresItemTwo = document.querySelector("#scoresItemTwo");
var scoresItemThree = document.querySelector("#scoresItemThree");
var scoresItemFour = document.querySelector("#scoresItemFour");
var scoresItemFive = document.querySelector("#scoresItemFive");
var scoresItemSix = document.querySelector("#scoresItemSix");
var scoresItemSeven = document.querySelector("#scoresItemSeven");
var scoresItemEight = document.querySelector("#scoresItemEight");
var scoresItemNine = document.querySelector("#scoresItemNine");
var scoresItemTen = document.querySelector("#scoresItemTen");
var playAgainBtnEl = document.querySelector("#playAgainBtn");

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
  questionWrapperEl.style.display="block";
  

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
  var generateFinalScoreEl = timeLeft;
  if (timeLeft <= -1) {
    timeLeft = 0;
    finalScoreEl.textContent = "You scored: " + timeLeft;
  } else {
    finalScoreEl.textContent = "You scored: " + timeLeft;
  }
  if (generateFinalScoreEl <= -1) {
    generateFinalScoreEl = 0;
  }
  console.log("This is the final score: " + generateFinalScoreEl);
  
  // display question wrapper
  questionWrapperEl.style.display="none";
  
  // display user's current round score
  finalScoreContainer.style.display="block";
  finalTitleEl.style.display="block";
  
  // display high scores ordered list
  scoresContainerEl.style.display="block";
  scoresTitleEl.style.display="block";
  
  // display high score list heading
  scoresListEl.style.display="block";
  
  // display high score list items
  scoresItemOne.style.display="block";
  scoresItemTwo.style.display="block";
  scoresItemThree.style.display="block";
  scoresItemFour.style.display="block";
  scoresItemFive.style.display="block";
  scoresItemSix.style.display="block";
  scoresItemSeven.style.display="block";
  scoresItemEight.style.display="block";
  scoresItemNine.style.display="block";
  scoresItemTen.style.display="block";
  
  // display play again button
  playAgainBtnEl.style.display="block";
}

var submitInitials = function() {
  var initialsValue = userInitialsEl.value.trim();
  var scores = []
  var newUserScore = {
    score: timeLeft,
    initials: initialsValue
  }
  newUserScore.id = scoreIdCounter;
  scores.push(newUserScore);
  console.log(scores);
  

  // stringify value of local storage
  localStorage.setItem("allScores", JSON.stringify(scores));
  
  // var userInitialsFormEl = document.createElement("form");
  // userInitialsFormEl.className = "user-initials-form";
  // userInitialsFormEl.id = "userInitialsForm";
  // userInitialsFormEl.innerHTML = '<div class="user-initials-form" id="userInitialsForm"></div>';

  // var userInitialsEl = document.createElement("input");
  // userInitialsEl.className = "user-initials";
  // userInitialsEl.id = "userInitials";
  // userInitialsEl.innerHTML = '"<input type="text" name="user-initials" placeholder="Enter initials to save your score: />"';

  // userInitialsEl.appendChild(userInitialsEl);

  scoreIdCounter++;
}

function playAgain() {
  timeLeft = 75;
  questionCounter = 0;
  questionWrapperEl.style.display="block";
  finalScoreContainer.style.display="none";
  scoresContainerEl.style.display="none";
  scoresTitleEl.style.display="none";
  scoresListEl.style.display="none";
  scoresItemOne.style.display="none";
  playAgainBtnEl.style.display="none";
  document.querySelector("#question").style.display="block";
  document.querySelector("#answerOne").style.display="block";
  document.querySelector("#answerTwo").style.display="block";
  document.querySelector("#answerThree").style.display="block";
  document.querySelector("#answerFour").style.display="block";
  generateQuestion();
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
submitInitialsBtnEl.addEventListener("click", submitInitials);
playAgainBtnEl.addEventListener("click", playAgain);