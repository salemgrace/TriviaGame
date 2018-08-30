// Create a series of questions
var questions = [
    {
        questionOne: "What is Salem's favorite color?",
        answers: {
            a: "Black",
            b: "Blue",
            c: "Green",
            d: "Pink",
        },

        correctAnswerOne: "a"
    },
    {
        questionTwo: "What was the name of Salem's first pet?",
        answers: {
            a: "Olive",
            b: "Annabelle",
            c: "Marvin",
            d: "Corky",
        },

        correctAnswerTwo: "b"
    }
]

// Create a welcome page - ready to begin?

function triviaQuiz () {
    questions.forEach( (currentQuestion, questionNumber) => {

    });
}


window.onload = function() {
    $("#readyButton").on("click", stopWatch.newQuestion);
  };

var intervalId;

var stopWatch = {
    time: 0,

    newQuestion: function() {
        stopWatch.time = 1000 * 20;
        $("#timer").text("00:20");
        intervalId = setInterval(stopWatch.count, -1000);
    },

    answerClicked: function() {
        clearInterval(intervalId);
        timerRunning = false;
    },

    count: function() {
        stopWatch.time--;

        var converted = stopWatch.timeConverter(stopWatch.time);
        console.log(converted);
        $("#timer").text(converted);
    },

    timeConverter: function(t) {
        var seconds = Math.floor(t);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return seconds;
    }
}

// In each question "mark" an answer as right or wrong

// There needs to be a correct or incorrect indicator

// keep tally of the progress at the bottom

// decide what percentage wins/loses

// Change page to announce winner/loser at the end

