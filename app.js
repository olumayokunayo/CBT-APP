let questions = [
  {
    question: ` Who is the president of Nigeria?`,
    options: ["Obasanjo", "Atiku", "Buhari", "Tinubu"],
    answer: "Buhari",
    chosenAnswer: "",
  },
  {
    question: `Who is the first woman to drive a car?`,
    options: ["Felicia", "Funmilayo Kuti", "Aishat", "Bola"],
    answer: "Funmilayo Kuti",
    chosenAnswer: "",
  },
  {
    question: `Which is a color on the Nigeria flag? `,
    options: ["Purple", "Green", "Red", "Yellow"],
    answer: "Green",
    chosenAnswer: "",
  },
  {
    question: `Who designed the Nigeria flag?`,
    options: ["Taiwo", "Kehinde", "Idowu", "Alaba"],
    answer: "Taiwo",
    chosenAnswer: "",
  },
  {
    question: `Who stopped the killings of twins?`,
    options: ["Felicia", "Funmilayo Kuti", "Aishat", "Bola"],
    answer: "Funmilayo Kuti",
    chosenAnswer: "",
  },
  {
    question: `Which is not a programming language?`,
    options: ["CSP", "CSS", "JS", "C++"],
    answer: "CSP",
    chosenAnswer: "",
  },
  {
    question: `Full meaning of CSS?`,
    options: [
      "Cascading style sheet",
      "Common style sheet",
      "Check style sheet",
      "Control style sheet",
    ],
    answer: "Cascading style sheet",
    chosenAnswer: "",
  },
  {
    question: `Who is the first lady of Nigeria?`,
    options: ["Aishat", "Kemi", "Stella", "Remi"],
    answer: "Aishat",
    chosenAnswer: "",
  },
  {
    question: `Who sang Ojuelegba?`,
    options: ["Olamide", "Burna Boy", "Psquare", "Wizkid"],
    answer: "Wizkid",
    chosenAnswer: "",
  },
  {
    question: `How many colors are on the Nigeria flag?`,
    options: [3, 2, 4, 1],
    answer: "2",
    chosenAnswer: "",
  },
];
console.log(questions.length - 1);
let questionsBox = document.querySelector(".main");
let queCount = 0;
let nextBtn = questionsBox.querySelector(".nextBtn");
let prevBtn = questionsBox.querySelector(".prevBtn");
let questionsOf = document.querySelector(".questionsOf");
let questionCount = 1;
questionsOf.textContent = `${questionCount} of ${questions.length} questions.`;

nextBtn.onclick = () => {
  let selectedOption = document.querySelector('input[name="options"]:checked');
  console.log(selectedOption);
  if (selectedOption) {
    questions[queCount].chosenAnswer = selectedOption.value;
    console.log(questions[queCount].chosenAnswer);
    if (queCount < questions.length - 1) {
      queCount++;
      questionCount++;
      showQuestions();
    }
  } else {
    if (queCount < questions.length - 1) {
      queCount++;
      questionCount++;
      showQuestions();
    }
  }
  questionsOf.textContent = `${questionCount} of ${questions.length} questions`;
  questionsOf.textContent = `${questionCount} of ${questions.length} questions.`;
};

prevBtn.onclick = () => {
  let selectedOption = document.querySelector('input[name="options"]:checked');
  if (selectedOption) {
    questions[queCount].chosenAnswer = selectedOption.value;
    console.log(questions[queCount].chosenAnswer);
    if (queCount > 0) {
      queCount--;
      questionCount--;
      showQuestions();
    }
  } else {
    if (queCount > 0) {
      queCount--;
      questionCount--;
      showQuestions();
    }
  }
  questionsOf.textContent = `${questionCount} of ${questions.length} questions`;
  questionsOf.textContent = `${questionCount} of ${questions.length} questions.`;
};

const showQuestions = function () {
  let i = queCount;
  let showQuest = document.getElementById("showQuest");
  let showOpt = document.getElementById("showOpt");

  showQuest.innerHTML = `<p>${i + 1} .${questions[i].question}</p>`;
  showOpt.innerHTML = `<p><input type="radio" name="options" id="radio0" value="${
    questions[i].options[0]
  }" ${
    questions[i].chosenAnswer === questions[i].options ? "checked" : ""
  } /> ${questions[i].options[0]}</p><br>
  <p><input type="radio" name="options" id="radio1" value="${
    questions[i].options[1]
  }" ${questions[i].chosenAnswer === questions[i].options ? "checked" : ""} />${
    questions[i].options[1]
  }</p><br>
  <p><input type="radio" name="options" id="radio2" value="${
    questions[i].options[2]
  }" ${questions[i].chosenAnswer === questions[i].options ? "checked" : ""}/>${
    questions[i].options[2]
  }</p><br>
  <p><input type="radio" name="options" id="radio3" value="${
    questions[i].options[3]
  }" ${questions[i].chosenAnswer === questions[i].options ? "checked" : ""} />${
    questions[i].options[3]
  }</p>`;
};
showQuestions();

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
  let count = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].chosenAnswer === questions[i].answer) {
      count++;
    }
  }
  alert(`You scored ${count} of ${questions.length} questions.`);
  window.location.href = "landing.html";
});

window.onload = function () {
  let remainingTime = 60;
  let timerDisplay = document.querySelector(".timer");
  let countdown = setInterval(updateTimer, 1000);

  function updateTimer() {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;

    timerDisplay.textContent = `${minutes
      .toString()
      .padStart(2, "0")}: ${seconds.toString().padStart(2, "0")}`;

    if (remainingTime <= 0) {
      timerDisplay.textContent = `Time is up!`;
      clearInterval(countdown);
      window.location.href = "landing.html";
    } else {
      remainingTime--;
    }
  }
};
