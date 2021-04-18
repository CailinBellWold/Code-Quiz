// Buttons
let btnBegin = document.querySelector('.begin');
let btnNextQuestion = document.querySelector('#next');
let btnSubmit = document.querySelector('#submit');
let btnClose = document.querySelector('.close');

// Content Areas
let quizContainerEl = document.querySelector('.quiz');
let quizCurrentQuestionEl = document.querySelector('#question');
let quizCurrentChoiceAEl = document.querySelector('#choice-A');
let quizCurrentChoiceBEl = document.querySelector('#choice-B');
let quizCurrentChoiceCEl = document.querySelector('#choice-C');
let quizCurrentChoiceDEl = document.querySelector('#choice-D');
let quizResultsEl = document.querySelector('#results');
let quizTimeRemainingEl = document.querySelector('#time');

// Event Listeners
btnBegin.addEventListener('click', setTime);
btnSubmit.addEventListener('click', displayResults);

// Input + Output
let numCorrect = 0;
// let lastQuestion = quizContent.length - 1;
let currentQuestion = '';
let currentChoiceA = ''; 
let currentChoiceB = ''; 
let currentChoiceC = ''; 
let currentChoiceD = ''; 
let i;
let score = 0;
let userName = "";

let qUserName = ("To save your quiz results, please enter your name and click OK!");

// Timer
let secondsLeft = 60;

function setTime() {
    createQuiz();
    // Sets interval in variable
    let timerInterval = setInterval(function() {
    secondsLeft--;
    quizTimeRemainingEl.innerHTML = secondsLeft;

    if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls Function to Alert Time's Up
        sendMessage();
    };

    }, 1000);
};

// Function to Alert user that Time's Up
function sendMessage() {
    quizTimeRemainingEl.innerHTML = '<div class="font-weight-bold text-danger">Time\'s Up!</div>';
}

// Function to Feed Questions to HTML
function createQuiz() {
for (i = 0; i < quizContentLength; i++) {

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

    btnNextQuestion.addEventListener('click', scoreQuestion);
};

function scoreQuestion() {
    if (value = quizContent[i].answer) {
        quizResultsEl.innerHTML = '<div class="text-success">Correct!</div>';
        numCorrect++;
        i++;
        createQuiz();
    } else {
    quizResultsEl.innerHTML = '<div class="text-warning">Incorrect</div>';
    timerCount--;
    i++;
    createQuiz();
};
};};

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

function scoreQuiz() {
    clearInterval(timerInterval);
    score = numCorrect/quizContent.length;
    userName = prompt(qUserName + 'You scored ${numCorrect} out of ${quizContent.length}', ["First Last"]);
    //Write User Name and Score to logal storage
};

function displayResults() {
        quizContent.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.answer) {
            numCorrect++;
        }
        else {
            answerContainers[questionNumber].style.color = 'red';
        }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizContent.length}`;
};

// Attaches event listener to close button
// closeButton.addEventListener("click", resetGame);

// ---------------------------------------------------------------
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})





