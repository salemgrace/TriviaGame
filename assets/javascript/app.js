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

        timer = setInterval(game.countDown, 1000);

        gameDisplay.html("<h2>" + theQuestions[this.currentQuestion].question + "<h2>");

        for (var i = 0; i < theQuestions[this.currentQuestion].answers.length; i++) {
            gameDisplay.append("button class='answer-button' id='button' data-name='" + theQuestions[this.currentQuestion].answers[i]
            + "'>" + theQuestions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {

        game.timeLeft = countStartNumber;
        $("timer").text(game.timeLeft);
        game.currentQuestion++;
        game.displayQuestion();
    },

    timeUp: function() {

        clearInterval(timer);

        $("timer").html(game.timeLeft);

        gameDisplay.html("<h2>Out of Time!</h2>");
        gameDisplay.append("<h3>The Correct Answer was: " + theQuestions[this.currentQuestion].correctAnswer);

        if (game.currentQuestion === theQuestions.length -1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    results: function() {

        clearInterval(timer);

        $("timer").text(game.timeLeft);

        gameDisplay.html("<h2>Here is how much you knew...</h2>");
        gameDisplay.append("<h3>Correct Answers: " + game.correct + "</h3>");
        gameDisplay.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    },

    clicked: function(e) {
        clearInterval(timer);

    },

    answeredIncorrectly: function() {

        game.incorrect++;
    },

    answeredCorrectly: function() {

        game.correct++;
    },

    reset: function() {
        this.currentQuestion = 0;
        this.timeLeft = countStartNumber;
        this.correct = 0;
        this.incorrect = 0; 
        this.displayQuestion();
    }
};



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


$(document).on("click", "#start-over", function() {
    
    game.reset();
});

$(document).on("click", "#next-question-button", function() {
    
    game.clicked(e);
});

$(document).on("click", "#start-game", function(){
    
    game.displayQuestion();
    $("#start-game").remove();
    $("#answer-choices-container").show();
});

// In each question "mark" an answer as right or wrong

// There needs to be a correct or incorrect indicator

// keep tally of the progress at the bottom

// decide what percentage wins/loses

// Change page to announce winner/loser at the end

