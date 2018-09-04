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
    
}

function nextQuestion () {
    for (i = 0; i < theQuestions.length; i++) {
        $("#question-holder").text(theQuestions[i].question);
        $("#choice-a").html('<input type="radio">     ' + theQuestions[i].answers.a + '</input>')
        $("#choice-b").html('<input type="radio">     ' + theQuestions[i].answers.b + '</input>')
        $("#choice-c").html('<input type="radio">     ' + theQuestions[i].answers.c + '</input>')
        $("#choice-d").html('<input type="radio">     ' + theQuestions[i].answers.d + '</input>')
    }
    // for (j = 0; j < theQuestions[questionCount].answers.length; j++) {
    //     var radioBtn = $('<input type="radio" name="radioBtn" >' + answers[j] + '</input>');
    //     radioBtn.appendTo("#choicesForAnswers");
    questionCount++;
}

function startGame () {

    nextQuestion ();
    // $("#question-holder").text("Question One");
    // showQuestions = setInterval(nextQuestion, 20 * 1000);

}

// Create a welcome page - ready to begin?

// function triviaQuiz () {
//     questions.forEach( (currentQuestion, questionNumber) => {

//     });
// }


window.onload = function() {
    $("#start-game").on("click", timer.countDown);
};

var intervalId;

var timerRunning = false;

var timer = {
    
    timeLeft: 11,

    newQuestion: function() {

        timer.timeLeft = 11;
        $("#timer").text("");
    },
  
    countDown: function() {
        
        timer.timeLeft = 11;
        $("#start-game").text("Next Question");

        if (!timerRunning) {
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
            timer.newQuestion()
        }
    },

    count: function() {
        
        timer.timeLeft--;
        console.log(timer.timeLeft);
        
        if (timer.timeLeft === -1) {
            clearInterval(intervalId);
            timerRunning = false;
            $("#timer").text("Time's up!");        
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

