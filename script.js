const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "None of these"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  let q = questions[currentQuestion];
  questionEl.textContent = q.question;

  options.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.className = "option";
    btn.disabled = false;
    btn.onclick = () => checkAnswer(btn, index);
  });
}

function checkAnswer(btn, selected) {
  const correctIndex = questions[currentQuestion].answer;

  
  options.forEach(o => o.disabled = true);

  if (selected === correctIndex) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    options[correctIndex].classList.add("correct"); 
  }
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Finished!";
    scoreEl.textContent = `Your score: ${score}/${questions.length}`;
    document.querySelector(".options").style.display = "none";
    nextBtn.style.display = "none";
  }
};

loadQuestion();
