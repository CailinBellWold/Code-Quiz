let buttonBegin = document.getElementById("begin");
let buttonSubmit = document.getElementById("submit");

let quiz = document.getElementById("quiz");
let validationAnswer = document.getElementById("validation");
let scoreCurrent = document.getElementById("current-score");
let progressBar = document.getElementById("my-bar");

let question;
let answers;
let correctAnswer;

//Question Array
let questions = [
    {
    question: "Question1",
        answers: {
        a: "Q1a",
        b: "Q1b",
        c: "Q1c",
        d: "Q1d"
        },
        correctAnswer: "Q1a"
    },
    {
    question: "Question2",
        answers: {
        a: "Q2a",
        b: "Q2b",
        c: "Q2c",
        d: "Q2d"
        },
        correctAnswer: "Q2a"
    },
    {
    question: "Question3",
        answers: {
        a: "Q3a",
        b: "Q3b",
        c: "Q3c",
        d: "Q3d"
        },
        correctAnswer: "Q3a"
            },
];

//Score. Add items from an array.
let sumArray = function(arr) {
    let result = 0;

    for (let iScore = 0; iScore < arr.length; iScore++) {
    let currentNumber = arr[iScore];
    result += currentNumber;
    }

    return result;
};

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

//Timer
setTimeout(timer, milliseconds, arg(s))

function timer () {

};