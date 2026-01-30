const questions = [
    {
        question: "Which language runs in a web browser?",
        answers: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does CSS stand for?",
        answers: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"],
        correct: 1
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
        correct: 2
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Microsoft", "Netscape", "Google", "IBM"],
        correct: 1
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        answers: ["<js>", "<script>", "<javascript>", "<code>"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

const questionNumberEl = document.getElementById("question-number");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

function startTimer() {
    timeLeft = 15;
    timerEl.textContent = "Time Left: " + timeLeft + "s";

    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = "Time Left: " + timeLeft + "s";

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            autoSelectCorrect();
        }
    }, 1000);
}

function loadQuestion() {
    const q = questions[currentQuestion];

    questionNumberEl.textContent = (currentQuestion + 1) + "/" + questions.length;
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(index);
        answersEl.appendChild(btn);
    });

    startTimer();
}

function selectAnswer(index) {
    clearInterval(timerInterval);

    const buttons = answersEl.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    if (index === questions[currentQuestion].correct) {
        buttons[index].classList.add("correct");
        score++;
    } else {
        buttons[index].classList.add("wrong");
        buttons[questions[currentQuestion].correct].classList.add("correct");
    }

    nextBtn.style.display = "block";
}

function autoSelectCorrect() {
    const buttons = answersEl.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    buttons[questions[currentQuestion].correct].classList.add("correct");
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionNumberEl.textContent = "";
    timerEl.textContent = "";
    questionEl.textContent = "Quiz Finished!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = "Your Score: " + score + " / " + questions.length;
}

loadQuestion();