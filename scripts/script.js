let buttonBegin = $('#begin-ID');
let questionText = $('.question-text');

buttonBegin.on('click', startQuiz);

function startQuiz() {
    questionText.text("<p>Testing</p>");
    console.log(questionText);
};

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


// let buttonSubmit = $('#submit');
// let buttonRadio = $('[name="userAnswer"]');



// let quiz = $("#quiz");
// let validationAnswer = $("#validation");
// let scoreCurrent = $("#current-score");
// let progressBar = $("#my-bar");

// let quizContent = [];
// let answers = [];
// let correctAnswer = [];

// let questionNumber;
// let question;
// let answers;
// let correctAnswer;

// //Question Array
// let quizContent = [
//     {
//     questionNumber: "1",
//     question: "Question1",
//         answers: {
//         a: "Q1a",
//         b: "Q1b",
//         c: "Q1c",
//         d: "Q1d"
//         },
//         correctAnswer: "Q1a"
//     },
//     {
//     questionNumber: "2",
//     question: "Question2",
//         answers: {
//         a: "Q2a",
//         b: "Q2b",
//         c: "Q2c",
//         d: "Q2d"
//         },
//         correctAnswer: "Q2a"
//     },
//     {
//     questionNumber: "3",
//     question: "Question3",
//         answers: {
//         a: "Q3a",
//         b: "Q3b",
//         c: "Q3c",
//         d: "Q3d"
//         },
//         correctAnswer: "Q3a"
//     },
//     {
//     questionNumber: "4",
//     question: "Question4",
//         answers: {
//         a: "Q4a",
//         b: "Q4b",
//         c: "Q4c",
//         d: "Q4d"
//         },
//         correctAnswer: "Q4a"
//     },
//     {
//     questionNumber: "5",
//     question: "Question5",
//         answers: {
//         a: "Q5a",
//         b: "Q5b",
//         c: "Q5c",
//         d: "Q5d"
//         },
//         correctAnswer: "Q5a"
//     },
// ];

// ---------------------------------------------------Start Functions --------------------------------- //
//VAR


//Starts Quiz when the Begin button is clicked

    // isCorrect = false;
    // timerCount = 500000;
    // Prevents start button from being clicked when round is in progress
    // buttonBegin.disabled = true;
    // score();
    // startTimer();
//     presentQuestions;
// };

// function presentQuestions() {
    

    // $('.question-text').text("<span>Testing</span>");

// for (var i = 0; i < quizContent.length; i++) {

// }};
        // Replace QuestionText Field with next question.
        // $('.question-text').replaceWith(question-text.text(question.each);



        // $('.question-text').replaceWith(question-text.text(question.each);
        //  question.each = (question-text.text(question.each);



/*
//Question: Should I do this on the form or button? Want to console-log true/not true...we'll get there.
buttonSubmit.on('click', function(event) {
    console.log("Saving Answer", form.elements.userAnswer.value);
    event.preventDefault();
});

function correctAnswer() {
    var val= "";
    for (var i = 0, length = buttonRadio.length; i < length; i++) {
        if (buttonRadio[i].checked) {
        val = buttonRadio[i].value; 
        break;
        }
    }

    if (val == "") {
        alert('Please Select an Answer');
        } else if ( val == "(HOW TO INPUT/textContent or value?)" ) {
        alert('Correct');
        correctAnswer++;
        } else {
        alert('Incorrect');
        timerCount--;
        }
};


buttonRadio.each(function() {
        console.log( this.value + ":" + this.checked );
    });


// TO DO: Call when Start Quiz is initiated via the Begin button
function score() {
    getCorrectAnswer();
    getIncorrectAnswer();
}


//Scoring. 
let sumArray = function(arr) {
    let result = 0;
    for (let iScore = 0; iScore < arr.length; iScore++) {
    let currentNumber = arr[iScore];
    result += currentNumber;
    }

    return result;
};


// Timer
// setTimeout(timer, milliseconds, arg(s))

// function timer () {

// };

//Timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          score();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        score();
      }
    }, 1000);
  }

//Progress Bar copied from W3 Schools. Need to update and Customize
let iProgress = 0;

function move() {
    if (iProgress == 0) {
        iProgress = 1;
        let width = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                iProgress = 0;
            } else {
                width++;
                progressBar.style.width = width + "%";
            }
        }
    }
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
