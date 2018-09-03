// Create a series of questions
var theQuestions = [
    {
        // Question One
        question: "What is Salem's favorite color?",
        answers: {
            a: "Black",
            b: "Blue",
            c: "Green",
            d: "Pink",
        },
        correctAnswer: "a"

    },
    {
        // Question Two
        question: "What was the name of Salem's first pet?",
        answers: {
            a: "Olive",
            b: "Annabelle",
            c: "Marvin",
            d: "Corky",
        },

        correctAnswer: "b"
    }
]

var showQuestions;

var questionCount = 0;

$("#start-game").click(startGame);

function displayQuestion () {
    $("#question-holder").text(theQuestions.question);
}

function nextQuestion () {
    questionCount++;

    if (questionCount === theQuestions.length) {
        questionCount = 0;
    }
}

function startGame () {

    showQuestions = setInterval(nextQuestion, 20 * 1000);

}

displayQuestion ();
// Create a welcome page - ready to begin?

// function triviaQuiz () {
//     questions.forEach( (currentQuestion, questionNumber) => {

//     });
// }


window.onload = function() {
    $("#readyButton").on("click", timer.countDown);
};

var intervalId;

var timerRunning = false;

var timer = {
    
    timeLeft: 20,

    newQuestion: function() {

        timer.timeLeft = 20;
        
        $("#timer").text("");
    },
  
    countDown: function() {
        
        timer.timeLeft = 20;

        if (!timerRunning) {
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
        }
    },

    count: function() {
        
        timer.timeLeft--;
        console.log(timer.timeLeft);
        
        if (timer.timeLeft === -1) {
            clearInterval(intervalId);
            timerRunning = false;        
        } else {
            $("#timer").text(timer.timeLeft);
        }

    }
}

// In each question "mark" an answer as right or wrong

// There needs to be a correct or incorrect indicator

// keep tally of the progress at the bottom

// decide what percentage wins/loses

// Change page to announce winner/loser at the end

