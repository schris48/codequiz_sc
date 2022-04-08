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
var playAgainBtnEl = document.querySelector("#playAgainBtn");

const questionArray = [
  {
    question: "1. Commonly used data types do NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctChoice: "Alerts"
  },
  {
    question: "2. The condition in an if/else statement is enclosed in:",
    choices: ["Quotes", "Parentheses", "Curly brackets", "Square brackets"],
    correctChoice: "Parentheses"
  },
  {
    question: "3. Arrays in JavaScript can be used to store:",
    choices: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"],
    correctChoice: "All of the above"
  },
  {
    question: "4. String values must be enclosed with ______ when being assigned to variables",
    choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
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
  
  // start timer
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
    // if there are more questions left, generate next question
    generateQuestion();
  }
}

var gameOver = function() {
  // calculate final score
  var generateFinalScoreEl = timeLeft;
  if (timeLeft <= -1) {
    timeLeft = 0;
    finalScoreEl.textContent = "You scored: " + timeLeft;
  } else {
    finalScoreEl.textContent = "You scored: " + timeLeft;
  }
  // generate final score
  if (generateFinalScoreEl <= -1) {
    generateFinalScoreEl = 0;
  }
  console.log("The final score is: " + generateFinalScoreEl);
  
  // display question wrapper
  questionWrapperEl.style.display="none";
  
  // display user's current round score
  finalScoreContainer.style.display="block";
  finalTitleEl.style.display="block";
  
  // display high scores ordered list
  scoresContainerEl.style.display="block";
  scoresTitleEl.style.display="block";
  
  // display play again button
  playAgainBtnEl.style.display="block";
}

var submitInitials = function() {
  var initialsValue = userInitialsEl.value.trim();
  // check for empty or null value in initials field
  if (!initialsValue) {
    window.alert("Please enter initials to submit score!")
    return false;
  }
  // check for local storage or empty array
  var scores = JSON.parse(localStorage.getItem('allScores')) || []
  var newUserScore = {
    score: timeLeft,
    initials: initialsValue
  }

  // store user score info in local storage
  scores.push(newUserScore);
  console.log(scores);
  
  // stringify value of local storage
  localStorage.setItem("allScores", JSON.stringify(scores));

  createScoreEl();
}
  
var createScoreEl = function() {
  // sort score items by ascending order
  var storedScores = JSON.parse(localStorage.getItem('allScores'))

  storedScores.sort(function(a, b){
    return b.score - a.score;
  })
  
  // unhide score info ordered list
  var olEl = document.getElementById('scoresList')
  olEl.style.display="block";

  // unhide score item list
  storedScores.forEach(function(storedScore){
    var scoresListItem = document.createElement("li");
    scoresListItem.className = "scores-item";
    scoresListItem.innerHTML = '<div class="user-name">' + "Initials: " + storedScore.initials + '<div><span class="user-score">' + "Score: " + storedScore.score + '</span>';
    olEl.appendChild(scoresListItem);
    scoresListItem.style.display="block";
  })
};

// reload page on button click
function playAgain() {
  window.location.reload();
}

// event handlers
startButton.addEventListener("click", generateQuestion);
submitInitialsBtnEl.addEventListener("click", submitInitials);
playAgainBtnEl.addEventListener("click", playAgain);