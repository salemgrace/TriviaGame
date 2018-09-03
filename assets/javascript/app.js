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

// Create a welcome page - ready to begin?

function triviaQuiz () {
    questions.forEach( (currentQuestion, questionNumber) => {

    });
}







$("#timer").click(function () {

    var timeLeft = 20;
    var count = setInterval(countDown, 1000); 

    countDown();

    function countDown {
    if (timeLeft === -1) {
        clearTimeout(count);
    } else {
        document.getElementById("timer").textContent = timeLeft;
        timeLeft--;
        }
    }
}); 



// var timeLeft = 20;
// var timer = setInterval(countDown, 1000);

// function countDown() {
//     if (timeLeft === -1) {
//         clearTimeout(timer);
//     } else {
//         document.getElementById("timer").textContent = timeLeft;
//         timeLeft--;
//     }
// }


// var intervalId;

// var stopWatch = {
//     time: 0,

//     newQuestion: function() {
//         stopWatch.time = 1000 * 20;
//         $("#timer").text("00:20");
//         intervalId = setInterval(stopWatch.count, -1000);
//     },

//     answerClicked: function() {
//         clearInterval(intervalId);
//     },

//     count: function() {
//         stopWatch.time--;

//         var converted = stopWatch.timeConverter(stopWatch.time);
//         console.log(converted);
//         $("#timer").text(converted);
//     },

//     timeConverter: function(t) {
//         var minutes = Math.floor(t / 60);
//         var seconds = t - (minutes * 60);
    
//         if (seconds < 10) {
//           seconds = "0" + seconds;
//         }
    
//         if (minutes === 0) {
//           minutes = "00";
//         }
//         else if (minutes < 10) {
//           minutes = "0" + minutes;
//         }
    
//         return minutes + ":" + seconds;
//     }
// }

// In each question "mark" an answer as right or wrong

// There needs to be a correct or incorrect indicator

// keep tally of the progress at the bottom

// decide what percentage wins/loses

// Change page to announce winner/loser at the end

