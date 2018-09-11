var gameDisplay = $("game-area");

var intervalId;

var timerRunning = false;

var showQuestions;

var count = 0;

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
        correctAnswer: "Black"

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

        correctAnswer: "Annabelle"
    },
    {
        // Question Three
        question: "What was Salem's first pet?",
        answers: {
            a: "Dog",
            b: "Cat",
            c: "Goldfish",
            d: "Guinea Pig",
        },

        correctAnswer: "Guinea Pig"
    }
]

var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    timeLeft: countStartNumber,
    correct: 0,
    incorrect: 0,

    countDown: function() {

        game.timeLeft--;
        $("timer").text(game.counter);

        if (game.timeLeft === 0) {
            
            console.log("Time's up!")
            game.timeUp();
        }
    },

    displayQuestion: function () {

        timer = setInterval(game.countdown, 1000);

        displayQuestion.html("<h2>" + theQuestions[this.currentQuestion].question + "<h2>");

        for (var i = 0; i < theQuestions[this.currentQuestion].answers.length; i++) {
            displayQuestion.append("button class='answer-button' id='button' data-name='" + theQuestions[this.currentQuestion].answers[i]
            + "'>" + theQuestions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        game.timeLeft = countStartNumber;
        $("timer").text(game.timeLeft);
        game.currentQuestion++;
        game.displayQuestion();
    },
    // $("#next-question-button").text("Next Question");
    // $("#next-question-button").on("click", nextQuestion);
    
    // // Display new question with answer choices
    // $("#question-holder").text(theQuestions[count].question);
    // $("#choice-a").text(theQuestions[count].answers.a);
    // $("#choice-b").text(theQuestions[count].answers.b);
    // $("#choice-c").text(theQuestions[count].answers.c);
    // $("#choice-d").text(theQuestions[count].answers.d);
    
    // var selected = $("input[type='radio'][name='choice']:checked");
    // var selectedVal = "";
    
    // if (selected.length > 0) {
        
    //     selectedVal = selected.val();
    //     console.log(selectedVal);
    //     nextQuestion();
    // }

    // $("#next-question-button").click(nextQuestion);
}

function nextQuestion () {

    count++;
    timer.countDown();
}


window.onload = function() {
    $("#start-game").on("click", timer.firstQuestion);
    $("#answer-choices-container").hide();
}


var timer = {
    
    timeLeft: 11,

    firstQuestion: function() {

        $("#start-game").remove();
        $("#answer-choices-container").show();
        timer.countDown();
    },
  

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

