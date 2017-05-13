$(document).ready(function() {


// function created for initial start screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start</a></p>";
	$(".mainArea").html(startScreen);
}

// call initial start screen

initialScreen ();

// on mouseclick the new HTML screen is generated

$("body").on("click", ".start-button", function(event){
	generateHTML();
	timerWrapper();


}); //closing onclick start-button event after generating new HTML page




var score = 0;
var questionIndex = 0;
var userGuess;
var questionArray = ["Which of the following items was owned by the fewest U.S. homes in 1990?", "Who holds the record for the most victories in a row on the professional golf tour?", "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?", "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?", "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?"];
var answerArray = [["home computer","compact disc player", "cordless phone", "dishwasher"], ["Jack Nicklaus", "Arnold Palmer", "Byron Nelson", "Ben Hogan"],["Reggie Jackson", "Harmon Killebrew", "Willie Mays", "Frank Robinson"], ["8", "18", "38", "58"], ["cocker spaniel", "labrador retriever", "German shepherd", "poodle"]];	
var correctAnswers = ["compact disc player", "Byron Nelson", "Willie Mays", "18", "cocker spaniel"];
var questionCounter = 0

function randomQuestionFromArray() {
    return Math.floor(Math.random() * questionArray.length);
    console.log(randomQuestionFromArray);

	 }



function renderQuestion() {


	// If there are still more questions, render the next one.
        if (questionIndex <= (questionArray.length - 1))



         {
         	var currentQuestion = randomQuestionFromArray()



          $("#question").text(currentQuestion);
        }
        // If there aren't, render the end game screen.
        else {
          $("#question").text("Game Over!");
          $("#score").text("Final Score: " + score + " out of " + questionArray.length + "correct!");
        }
      }


function updateScore() {

        $("#score").text("Score: " + score);
      }

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);

}});

// Calling functions to start the game.
      // renderQuestion();


      // updateScore();













