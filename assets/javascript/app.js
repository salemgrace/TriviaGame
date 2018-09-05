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

$("#start-game").click(startQuestions);

function displayQuestion () {
    
}

function startQuestions () {
    $("#next-question-button").text("Next Question");
    $("#next-question-button").on("click", nextQuestion);
    // Display new question with answer choices
    $("#question-holder").text(theQuestions[count].question);
    $("#choice-a").text(theQuestions[count].answers.a);
    $("#choice-b").text(theQuestions[count].answers.b);
    $("#choice-c").text(theQuestions[count].answers.c);
    $("#choice-d").text(theQuestions[count].answers.d);
    
    $("input[name=choice]:checked").val();

    for (i = 0; i < theQuestions[count].answers.length; i++) {
        var answerChosen =  $("input[name=choice]:checked");
        console.log(answerChosen, "Answer selected");
        // radioBtn.appendTo("#choicesForAnswers");

    
}

}

function nextQuestion () {

    count++;

}


window.onload = function() {
    $("#start-game").on("click", timer.countDown);
    // $("#answer-choices").detach();
}



var timer = {
    
    timeLeft: 11,

    newQuestion: function() {

        timer.timeLeft = 11;
        $("#timer").text("");
    },
  
    countDown: function() {
        
        timer.timeLeft = 11;
        $("#start-game").remove();
        // $("#answer-choices").appendTo($("#answer-choices-container"));

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

