//your JS code here. If required.
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const currentData = quizData[currentQuiz];
  questionEl.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
}

function getSelected() {
  const answers = document.getElementsByName("answer");
  let selected = null;
  answers.forEach(answer => {
    if (answer.checked) {
      selected = answer.id;
    }
  });
  return selected;
}

function deselectAnswers() {
  const answers = document.getElementsByName("answer");
  answers.forEach(answer => answer.checked = false);
}

submitBtn.addEventListener("click", () => {
  const selected = getSelected();
  if (selected) {
    if (selected === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score} / ${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Reload Quiz</button>
      `;
    }
  } else {
    alert("Please select an option before submitting.");
  }
});

loadQuiz();