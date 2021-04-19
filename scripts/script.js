// Content Areas

// Modal/Quiz
let quizContainerEl = document.querySelector('.quiz');
// Modal/Question and Label
let quizQuestionLabelEl = document.querySelector('.question-label')
let quizCurrentQuestionEl = document.querySelector('#question');
// Modal/Fieldset Label
let quizSelectLabelEl = document.querySelector('.select-label')
// Modal/Choices
let quizChoiceEls = document.getElementsByName("choices");
let quizCurrentChoiceAEl = document.querySelector('#choice-A');
let quizCurrentChoiceBEl = document.querySelector('#choice-B');
let quizCurrentChoiceCEl = document.querySelector('#choice-C');
let quizCurrentChoiceDEl = document.querySelector('#choice-D');
// Modal/Results Feedback
let quizResultsEl = document.querySelector('#results');
// Modal/Time Remaining
let quizTimeRemainingEl = document.querySelector('#time');
// Modal/Fieldset 2
let quizFieldsetEl = document.querySelector('.fieldset')
//Modal/Score Form
let quizScoreFormEl = document.querySelector('.score-form')
let quizStaticScoreEl = document.querySelector('#static-score')

// Buttons
let btnBegin = document.querySelector('.begin');
let btnModalButton = document.querySelector('.modal-button');
let btnModalClose = document.querySelector('.close');
let buttonState = 'Next'
// Modal Button Spans
let btnModalButtonNextSpan = document.querySelector('#next');
let btnModalButtonSubmitSpan = document.querySelector('#submit');
let btnModalButtonSaveSpan = document.querySelector('#save');

// Event Listeners
btnBegin.addEventListener('click', setTime);
btnModalButton.addEventListener('click', nextQuestion);
for (let i = 0; i < quizChoiceEls.length; i++) {
    const currentQuizChoiceEl = quizChoiceEls[i];
    currentQuizChoiceEl.addEventListener('click', updateCurrentAnswer)
};

// Input + Output
let numCorrect = 0;
let score = 0;
let userInitials = "";
let currentQuestion = '';
let currentChoiceA = ''; 
let currentChoiceB = ''; 
let currentChoiceC = ''; 
let currentChoiceD = ''; 
let currentChoiceValue = '';
let quizContentLength;
let lastQuestion;

// Index
let currentQuestionIndex = 0;

// Timer (First Function Called)
let timerInterval;
let secondsLeft = 60;
let incorrectPenalty = 5;

function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
    secondsLeft--;
    quizTimeRemainingEl.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Alert Time's Up
        quizTimeRemainingEl.innerHTML = '<div class="font-weight-bold text-danger">Time\'s Up!</div>';
        // Runs Quiz Complete Function (Score/Update Text with User Initials Form Entry Field)
        quizComplete();
    };
    }, 1000);

    //Starts Quiz
    createQuiz();
};

// Question + Answer Array
let quizContent = [
    {
    question: "JavaScript is _____ typed.",
        choices: {
        a: "strongly",
        b: "camel-case",
        c: "weakly",
        d: "I don't know"
        },
    answer: "c"
    },
    {
    question: "Variables in JavaScript can be defined using the keywords _____, _____, or _____.",
        choices: {
        a: "var, let, const",
        b: "and, or, not",
        c: "if, else, else if",
        d: "I don't know"
        },
    answer: "a"
    },
    {
    question: "JavaScript is a _____ language",
        choices: {
        a: "cacophonous",
        b: "zero-index",
        c: "spoken",
        d: "I don't know"
        },
    answer: "b"
    },
    {
    question: "Alongside _____ and _____, JavaScript is one of the core technologies of the World Wide Web.",
        choices: {
        a: "Python, React",
        b: "HTML, CSS",
        c: "Vue, Java",
        d: "I don't know"
        },
    answer: "b"
    },
    {
    question: "Inside which HTML element do we put the JavaScript?",
        choices: {
        a: "js",
        b: "scripting",
        c: "script",
        d: "I don't know"
        },
    answer: "c"
    },
];

// Assigns Var Values for Brevity in Later Functions
quizContentLength = quizContent.length;
lastQuestion = (quizContentLength -1);

function createQuiz() {
    displayQuestion();
};

// Function to Feed Questions to HTML
function displayQuestion() {

    // Clears Previous Result Feedback
    quizResultsEl.innerHTML = "";

    // Question
    currentQuestion = quizContent[currentQuestionIndex].question;
    quizCurrentQuestionEl.innerHTML = currentQuestion;
    // Choice A
    currentChoiceA = quizContent[currentQuestionIndex].choices.a;
    quizCurrentChoiceAEl.innerHTML = currentChoiceA;
    // Choice B
    currentChoiceB = quizContent[currentQuestionIndex].choices.b;
    quizCurrentChoiceBEl.innerHTML = currentChoiceB;
    // Choice C
    currentChoiceC = quizContent[currentQuestionIndex].choices.c;
    quizCurrentChoiceCEl.innerHTML = currentChoiceC;
    // Choice D
    currentChoiceD = quizContent[currentQuestionIndex].choices.d;
    quizCurrentChoiceDEl.innerHTML = currentChoiceD;
    // If last Question, new Button State
    if (buttonState === 'End') {
        btnModalButton.addEventListener('click', quizComplete);
    }
};

// Function to 1.) Score the question and 2.) Update the button state if last question, Called by Modal Button 
function nextQuestion() {
    scoreQuestion ();
    if (currentQuestionIndex === lastQuestion) {
        buttonState = 'End';
        btnModalButtonNextSpan.innerHTML = "";
        btnModalButtonSubmitSpan.innerHTML = "Submit Quiz"
    };
    //     if (buttonState !== 'End') {
    //     setInterval(function() {
    //         displayQuestion();
    //     }, 2000);
    // }
};

// Function to Determine Value of Checked Radio Button at time of Modal Button Click Event
function updateCurrentAnswer(event) {
    currentChoiceValue = event.target.value;
}

// Function to Score Question, Called By Next Question or via Timer Running Out through Quiz Complete function
function scoreQuestion(event) {
    // IF answered correctly + *not* the last question, THEN numCorrect++, render next question
    if ((currentChoiceValue == quizContent[currentQuestionIndex].answer) && (currentQuestionIndex < lastQuestion)) {
        quizResultsEl.innerHTML = '<div class="text-success h5">Correct!</div>';
        numCorrect++;
        currentQuestionIndex++;
        setTimeout(displayQuestion, 2000);
        // displayQuestion();
        //TO DO: Clear Check-Marks
        return(event);
    // IF answered incorrectly + *not* the last question, THEN time penalty, render next question
    } else if ((currentChoiceValue != quizContent[currentQuestionIndex].answer) && (currentQuestionIndex < lastQuestion)) {
        quizResultsEl.innerHTML = '<div class="text-warning h5">Incorrect</div>';
        secondsLeft = secondsLeft - incorrectPenalty;
        currentQuestionIndex++;
        setTimeout(displayQuestion, 2000);
        //TO DO: Clear Check-Marks
        return(event);
    // IF answered correctly + last question, THEN numCorrect++, quiz complete
    } else if ((currentChoiceValue == quizContent[currentQuestionIndex].answer) && (currentQuestionIndex == lastQuestion)) {
        quizResultsEl.innerHTML = '<div class="text-success h5">Correct!</div>';
        numCorrect++;
        setTimeout(quizComplete, 2000);
        //TO DO: Clear Check-Marks
        return(event);
    // IF answered incorrectly + last question, THEN time penalty, quiz complete
    } else {
        quizResultsEl.innerHTML = '<div class="text-warning h5">Incorrect</div>';
        secondsLeft = secondsLeft - incorrectPenalty;
        setTimeout(quizComplete, 1500);
        //TO DO: Clear Check-Marks
        return(event);
    }
};

function scoreQuiz() {
    clearInterval(timerInterval);
};

function quizComplete() {
    scoreQuiz();
    quizQuestionLabelEl.textContent = 'Quiz Complete';
    quizCurrentQuestionEl.innerHTML = '';
    quizSelectLabelEl.textContent = 'Save Your Score';
    quizFieldsetEl.innerHTML = '';
    quizScoreFormEl.style.display = "block";
    score = numCorrect/quizContentLength * 100;
    quizStaticScoreEl.value = score;
    quizResultsEl.innerHTML = '';
    quizTimeRemainingEl.innerHTML = '<div class=""text-uppercase">Timer Stopped</div>';
    btnModalButtonSubmitSpan.innerHTML = '';
    btnModalButtonSaveSpan.innerHTML = "Save";
    //Write User Name and Score to local storage
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
});