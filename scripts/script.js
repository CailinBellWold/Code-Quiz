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
let quizResultsEl = document.querySelector('.results');
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

//Timer

var secondsLeft = 60;

function setTime() {
    createQuiz();
    // Sets interval in variable
    var timerInterval = setInterval(function() {
    secondsLeft--;
    quizTimeRemainingEl.innerHTML = secondsLeft;

    if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
    };

    }, 1000);
};

// Function to create and append colorsplosion image
function sendMessage() {
    quizTimeRemainingEl.innerHTML = '<div class="font-weight-bold text-danger">Time\'s Up!</div>';
}




// function setTimeout() {
//     // Sets timer
//     timer = setInterval(function() {
//     timerCount--;
//     countdownTimer.innerHTML = timerCount;
//     // Has time run out?
//     if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         score();
//     }
//     }, 50000);
//     //Starting Timer should Create QUiz
// };

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
return;
    // console.log(currentQuestion);
    // console.log(currentChoiceA);
    // console.log(currentChoiceB);
    // console.log(currentChoiceC);
    // console.log(currentChoiceD);
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

let scoreQuestion;

btnNextQuestion.addEventListener('click', scoreQuestion);

// --------Turning this off makes questions appear. Why? -----
// function scoreQuestion() {
//     if (value = quizContent[i].answer) {
//         numCorrect++;
//         i++;
//         createQuiz();
//     };
// }   else {
//     alert("wrong");
//     timerCount--;
//     i++;
//     createQuiz();
//     //Alert
//     //Remove Time
// };




function score(){
    score = numCorrect/quizContent.length
    console.log(score);
};

function displayResults() {
    clearInterval(timer);
    
    const answerContainers = quizContainer.querySelectorAll('.choices');

    quizContent.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.answer) {
            numCorrect++;
            score();
        }
        else {
            answerContainers[questionNumber].style.color = 'red';
            timerCount--;
            score();
            //Add a line to remove time from timer
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


//   document.getElementById("countdown-Timer").innerHTML = "";

// ---------------------------------------------------Start Functions --------------------------------- //




// Timer
// setTimeout(timer, milliseconds, arg(s))

// function timer () {

// };




