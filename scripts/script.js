// Buttons
let btnBegin = document.querySelector('.begin');
let btnModalButton = document.querySelector('.modal-button');
let btnModalClose = document.querySelector('.close');

// Content Areas
let quizContainerEl = document.querySelector('.quiz');
let quizCurrentQuestionEl = document.querySelector('#question');
let quizCurrentChoiceAEl = document.querySelector('#choice-A');
let quizCurrentChoiceBEl = document.querySelector('#choice-B');
let quizCurrentChoiceCEl = document.querySelector('#choice-C');
let quizCurrentChoiceDEl = document.querySelector('#choice-D');
let quizResultsEl = document.querySelector('#results');
let quizTimeRemainingEl = document.querySelector('#time');
let quizQuestionLabelEl = document.querySelector('.question-label')
let quizSelectLabelEl = document.querySelector('.select-label')
let quizFieldsetEl = document.querySelector('.fieldset')
let quizScoreFormEl = document.querySelector('.score-form')
let quizStaticScoreEl = document.querySelector('#static-score')

let quizChoiceEl = document.getElementsByName("choices");

// let quizChoiceEl = [];


// Event Listeners
btnBegin.addEventListener('click', setTime);

// Input + Output
let numCorrect = 0;
let currentQuestion = '';
let currentChoiceA = ''; 
let currentChoiceB = ''; 
let currentChoiceC = ''; 
let currentChoiceD = ''; 
let i;
let v;
let score = 0;
let userInitials = "";

// Timer
let secondsLeft = 60;
let incorrectPenalty = 5;

function setTime() {

    // Sets interval in variable
    let timerInterval = setInterval(function() {
    secondsLeft--;
    quizTimeRemainingEl.innerHTML = secondsLeft;

    if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Alert Time's Up
        quizTimeRemainingEl.innerHTML = '<div class="font-weight-bold text-danger">Time\'s Up!</div>';
        quizComplete();
    }

    }, 1000);

    createQuiz();
};

// Function to Feed Questions to HTML
function createQuiz() {
for (i = 0; i < quizContentLength; i++) { {

    currentQuestion = quizContent[i].question;
    quizCurrentQuestionEl.innerHTML = currentQuestion;

    currentChoiceA = quizContent[i].choices.a;
    quizCurrentChoiceAEl.innerHTML = currentChoiceA;

    currentChoiceB = quizContent[i].choices.b;
    quizCurrentChoiceBEl.innerHTML = currentChoiceB;

    currentChoiceC = quizContent[i].choices.c;
    quizCurrentChoiceCEl.innerHTML = currentChoiceC;

    currentChoiceD = quizContent[i].choices.d;
    quizCurrentChoiceDEl.innerHTML = currentChoiceD;

    
};

btnModalButton.addEventListener('click', userResponse);

function userResponse() {
    console.log('clicked');
};

// function userResponse() {
//     if (document.getElementByName('choices').checked) {
//         console.log(quizChoiceEl.value);
//     } else {
//         console.log("EMPTY")
//     }
// };

// function userResponse() {
//     var ele = document.getElementsByName('choices');
//     for(v = 0; v < ele.length; v++) {
//         if(ele[v].checked)
//         console.log(ele[v].value);
//     }
// };

function scoreQuestion(event) {
    // IF answered correctly + *not* the last question THEN numCorrect++, render next question
    if ((quizChoiceEl.checked.value == quizContent[i].answer) && (quizContent[i] < lastQuestion)) {
        quizResultsEl.innerHTML = '<div class="text-success">Correct!</div>';
        numCorrect++;
        // createQuiz();
    // IF answered incorrectly correctly + *not* the last question THEN time penalty, render next question
    } else if ((event.target.value != quizContent[i].answer) && (quizContent[i] < lastQuestion)) {
        quizResultsEl.innerHTML = '<div class="text-warning">Incorrect</div>';
        secondsLeft = secondsLeft - penalty;
        // createQuiz();
    // IF answered correctly + the last question THEN numCorrect++, quiz complete
    } else if ((event.target.value = quizContent[i].answer) && (quizContent[i] = lastQuestion)) {
            quizResultsEl.innerHTML = '<div class="text-success">Correct!</div>';
            numCorrect++;
            quizComplete();
    // IF answered incorrectly + the last question THEN time penalty, quiz complete
    } else {
        quizResultsEl.innerHTML = '<div class="text-warning">Incorrect</div>';
        secondsLeft = secondsLeft - penalty;
        quizComplete();
    }
}};};

// Question + Answer Array
let quizContent = [
    {
    question: "JavaScript is _____ typed.",
        choices: {
        a: "strongly",
        b: "camel-case",
        c: "weakly",
        d: "I don't know."
        },
    answer: "c"
    },
    {
    question: "Variables in JavaScript can be defined using the keywords _____, _____, or _____.",
        choices: {
        a: "var, let, const",
        b: "and, or, not",
        c: "if, else, else if",
        d: "I don't know."
        },
    answer: "a"
    },
    {
    question: "JavaScript is a _____ language",
        choices: {
        a: "cacophonous",
        b: "zero-index",
        c: "spoken",
        d: "I don't know."
        },
    answer: "b"
    },
    {
    question: "Alongside _____ and _____, JavaScript is one of the core technologies of the World Wide Web.",
        choices: {
        a: "Python, React",
        b: "HTML, CSS",
        c: "Vue, Java",
        d: "I don't know."
        },
    answer: "b"
    },
    {
    question: "Inside which HTML element do we put the JavaScript?",
        choices: {
        a: "js",
        b: "scripting",
        c: "script",
        d: "I don't know."
        },
    answer: "c"
    },
];

let quizContentLength = quizContent.length;
let lastQuestion = quizContent.length - 1;

function scoreQuiz() {
    clearInterval(timerInterval);
};

function quizComplete() {
    // scoreQuiz();
    quizQuestionLabelEl.textContent = "Quiz Complete";
    quizCurrentQuestionEl.innerHTML = "";
    quizSelectLabelEl.textContent = "Save Your Score";
    quizFieldsetEl.innerHTML = "";
    quizScoreFormEl.style.display = "block";
    score = numCorrect/quizContent.length;
    quizStaticScoreEl.value = score;
    //Write User Name and Score to logal storage
    // storeLocally()
};



// renderHighScore();

// // function displayMessage(type, message) {
// //   msgDiv.textContent = message;
// //   msgDiv.setAttribute("class", type);
// // }

// function renderHighScore() {
//   var initialsHS = localStorage.getItem("Initials");
//   var passwordHS = localStorage.getItem("Score");

//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;
  
//     if (email === "") {
//       displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//       displayMessage("error", "Password cannot be blank");
//     } else {
//       displayMessage("success", "Registered successfully");
  
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//       renderLastRegistered();
//     }
//   });




// function storeLocally() {
//     localStorage.setItem("Initials", userInitials);
//     localStorage.setItem("Score", score);
// }

// Attaches event listener to close button
// closeButton.addEventListener("click", resetGame);

// ---------------------------------------------------------------
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})





