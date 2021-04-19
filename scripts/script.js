// Content Areas

// Modal/Quiz
let quizContainerEl = document.querySelector('.quiz');
// Modal/Question and Label
let quizQuestionLabelEl = document.querySelector('.question-label')
let quizCurrentQuestionEl = document.querySelector('#question');
// Modal/Legend Label
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
let userInitialsEl = document.querySelector('#inputInitials')
let quizStaticScoreEl = document.querySelector('#static-score')

// Buttons
let btnBegin = document.querySelector('.begin');
let btnModalButton = document.querySelector('.modal-button');
let btnModalClose = document.querySelector('.close');
let buttonState = 'Next'

// Buttons/Modal Button Spans
let btnModalButtonNextSpan = document.querySelector('#next');
let btnModalButtonSubmitSpan = document.querySelector('#submit');
let btnModalButtonSaveSpan = document.querySelector('#save');

// High Score Scoreboard
// High Score Scoreboard/Initials
let outputHSInitials1 = document.querySelector('#Initials1');
let outputHSInitials2 = document.querySelector('#Initials2');
let outputHSInitials3 = document.querySelector('#Initials3');
let outputHSInitials4 = document.querySelector('#Initials4');
let outputHSInitials5 = document.querySelector('#Initials5');
// High Score Scoreboard/Scores
let outputHSScore1 = document.querySelector('#Score1');
let outputHSScore2 = document.querySelector('#Score2');
let outputHSScore3 = document.querySelector('#Score3');
let outputHSScore4 = document.querySelector('#Score4');
let outputHSScore5 = document.querySelector('#Score5');

// Event Listeners
// Event Listeners/Begin
btnBegin.addEventListener('click', setTime);
// Event Listeners/Quiz Choices El
for (let i = 0; i < quizChoiceEls.length; i++) {
    const currentQuizChoiceEl = quizChoiceEls[i];
    currentQuizChoiceEl.addEventListener('click', updateCurrentAnswer)
};
// Event Listeners/Modal Button/States
function btnModalEventListener() {
    btnModalButton.addEventListener('click', function() {
    if (buttonState === 'Next') {
        nextQuestion();
    } else if (buttonState === 'Submit') {
        quizComplete();
    } else if (buttonState === 'Save') {
        function storeUserInitialVar(event) {
            event.preventDefault();
            if (userInitialsEl.value) {
                userInitialsValue = userInitialsEl.value;
                storeScore();
                // return(event);
            } else {
                //TO DO: Update This to inner HTML when I get this to run
                alert("Please Enter Your Initials and Press Save");
            }
        }
    } else {
        alert("Fix Yo Buttons");
    }
});
};

// if (buttonState === 'Next') {
//     btnModalButton.addEventListener('click', nextQuestion);
// };
// // Event Listeners/Modal Button/States/Submit
// if (buttonState === 'Submit') {
//     btnModalButton.addEventListener('click', quizComplete);
// };
// // Event Listeners/Modal Button/States/Save
// if (buttonState === 'Save') {
//     btnModalButton.addEventListener('click', function(event) {
//         event.preventDefault();
//         if (userInitialsEl.value) {
//             userInitialsValue = userInitialsEl.value;
//             storeScore();
//         } else {
//             //TO DO: Update This to inner HTML when I get this to run
//             alert("Please Enter Your Initials and Press Save");
//         }
//     })
// };  

// Button State Functions
function buttonStatetoSave() {
    buttonState = 'Save';
    btnModalButtonNextSpan.innerHTML = '';
    btnModalButtonSubmitSpan.innerHTML = '';
    btnModalButtonSaveSpan.innerHTML = "Save";
};

function buttonStatetoSubmit() {
    buttonState = 'Submit';
    btnModalButtonNextSpan.innerHTML = '';
    btnModalButtonSubmitSpan.innerHTML = 'Submit';
    btnModalButtonSaveSpan.innerHTML = '';
};

function buttonStatetoNext() {
    buttonState = 'Next';
    btnModalButtonNextSpan.innerHTML = 'Next';
    btnModalButtonSubmitSpan.innerHTML = '';
    btnModalButtonSaveSpan.innerHTML = '';
};

// Input + Output
let numCorrect = 0;
let score = 0;
let userInitialsValue = "";
let currentQuestion = '';
let currentChoiceA = ''; 
let currentChoiceB = ''; 
let currentChoiceC = ''; 
let currentChoiceD = ''; 
let currentChoiceValue = '';
let quizContentLength;
let lastQuestion;
let locStoreInitials;
let locStoreScore

// Index
let currentQuestionIndex = 0;

// Timer (First Function Called)
let timerInterval;
let secondsLeft = 60;
let incorrectPenalty = 5;

function setTime() {
    buttonStatetoNext();
    btnModalEventListener();
    // Sets interval in variable
    timerInterval = setInterval(function() {
    secondsLeft--;
    quizTimeRemainingEl.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
        // Stops Checking
        clearInterval(timerInterval);
        // Alerts "Time's Up"
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
    question: "JavaScript is a _____ language.",
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

// Does this need to be its own Function? May rearrange.
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
};

// Function to 1.) Score the question and 2.) Update the button state if last question, Called by Modal Button 
function nextQuestion() {
    // If Last Question, Update Button State to Submit
    if (currentQuestionIndex === lastQuestion) {
    buttonStatetoSubmit();
    btnModalEventListener();
    };
    scoreQuestion();
};

// Function to Determine Value of Checked Radio Button at time of Modal Button Click Event
function updateCurrentAnswer(event) {
    currentChoiceValue = event.target.value;
};

// Function to Score Question, Called By Next Question or via Timer Running Out through Quiz Complete function
function scoreQuestion(event) {
    // IF answered correctly + *not* the last question, THEN numCorrect++, render next question
    if ((currentChoiceValue == quizContent[currentQuestionIndex].answer) && (currentQuestionIndex < lastQuestion)) {
        quizResultsEl.innerHTML = '<div class="text-success h5">Correct!</div>';
        numCorrect++;
        currentQuestionIndex++;
        setTimeout(displayQuestion, 2000);
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
        setTimeout(quizComplete, 2000);
        //TO DO: Clear Check-Marks
        return(event);
    }
};

function scoreQuiz() {
    clearInterval(timerInterval);
    score = numCorrect/quizContentLength * 100;
    quizStaticScoreEl.value = score;
    return;
};

function quizComplete() {
    buttonStatetoSave();
    btnModalEventListener();
    scoreQuiz();
    quizQuestionLabelEl.textContent = 'Quiz Complete';
    quizCurrentQuestionEl.innerHTML = '';
    quizSelectLabelEl.textContent = 'Save Your Score';
    quizFieldsetEl.innerHTML = '';
    quizScoreFormEl.style.display = "block";
    quizResultsEl.innerHTML = '';
    quizTimeRemainingEl.innerHTML = '<div class=""text-uppercase">PAUSED</div>';
    console.log(buttonState);
};

function storeScore() {
    localStorage.setItem('initials', userInitialsValue);
    localStorage.setItem('score', score);
    renderHighScore();
};

// renderHighScore();

function renderHighScore() {
    locStoreInitials = localStorage.getItem('initials');
    locStoreScore = localStorage.getItem('score');

    if (!locStoreInitials || !locStoreScore) {
        return;
    } else {
        //TO DO: How to Properly Populate Bootstrap Grid. For now, populate one field.
        outputHSInitials1.innerHTML = locStoreInitials;
        outputHSScore1.innerHTML = locStoreScore;
    };
};

// Attaches event listener to close button
// closeButton.addEventListener("click", resetGame);

// ---------------------------------------------------------------
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});