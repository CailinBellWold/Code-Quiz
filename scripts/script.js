// Buttons
let btnBegin = document.querySelector('.begin');
let btnNextQuestion = document.querySelector('.next');
let btnSubmit = document.querySelector('.submit');
let btnClose = document.querySelector('.close');

// Content Areas
let quizContainer = document.querySelector('.quiz');
let quizResults = document.querySelector('.results');

// Event Listeners
// btnBegin.addEventListener('click', createQuiz);
btnSubmit.addEventListener('click', displayResults);

// Input + Output
// let output= [];
// let choices = [];
let currentQuestion = '';
let questionNumber = '';

// Question + Answer Array
let quizContent = [
    {
    question: "Question1",
        choices: {
        a: "Q1a",
        b: "Q1b",
        c: "Q1c",
        d: "Q1d"
        },
    answer: "Q1a"
    },
    {
    question: "Question2",
        choices: {
        a: "Q2a",
        b: "Q2b",
        c: "Q2c",
        d: "Q2d"
        },
    answer: "Q2a"
    },
    {
    question: "Question3",
        choices: {
        a: "Q3a",
        b: "Q3b",
        c: "Q3c",
        d: "Q3d"
        },
    answer: "Q3a"
    },
    {
    question: "Question4",
        choices: {
        a: "Q4a",
        b: "Q4b",
        c: "Q4c",
        d: "Q4d"
        },
    answer: "Q4a"
    },
    {
    question: "Question5",
        choices: {
        a: "Q5a",
        b: "Q5b",
        c: "Q5c",
        d: "Q5d"
        },
    answer: "Q5a"
    },
];

// Functions

createQuiz();

function createQuiz(){
    const output= [];
    quizContent.forEach((currentQuestion, questionNumber) => {
        const choices = [];
        for(letter in currentQuestion.choices){
        choices.push(`<label><input type="radio" name="question${questionNumber}" value="${letter}"> ${letter}: ${currentQuestion.choices[letter]}</label>`);
        }
        output.push(`<div class="slide"><div class="question"> ${currentQuestion.question} </div><div class="choices"> ${choices.join('')} </div></div>`);
    });
    
    quizContainer.innerHTML = output.join('');
};

function displayResults(){
    const answerContainers = quizContainer.querySelectorAll('.choices');
    let numCorrect = 0;

    quizContent.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.answer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizContent.length}`;
};




// Attaches event listener to close button
closeButton.addEventListener("click", resetGame);

// ---------------------------------------------------------------
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


//   document.getElementById("countdown-Timer").innerHTML = "";






// ---------------------------------------------------Start Functions --------------------------------- //


//Scoring. 
// let sumArray = function(arr) {
//     let result = 0;
//     for (let iScore = 0; iScore < arr.length; iScore++) {
//     let currentNumber = arr[iScore];
//     result += currentNumber;
//     }

//     return result;
// };


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

