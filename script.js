const questions = [

  {

    question: "Ashneet Kaur Saal Ch Kine Baar Nhaandi eaa ?",
    answers: [
  
      { text: "Kade Bhi Nahi !", correct: true },
      { text: "Ehni v Nahi Muski Daily Nhandi ea !", correct: false },
      { text: "Mhine Ch Ek Baar !", correct: false },
      { text: "6 Mahinea ch ek baar !", correct: false },

    ]

  },
  {
    question: "Ashneet Dea Loode Kiis Karke Lagan Gea ?",
    answers: [
  
      { text: "12th Ch % Karke !", correct: false },
      { text: "Theif Nature De RisteyDaara Karke !", correct: false },
      { text: "Ehnde Ehe Ruha Aale Pyaar Karke !", correct: true },
      { text: "Yaan Mere Karke !", correct: false },
    ]
  },
  
  {
    question: "Ashneet Da Dimag Osdi Body De Kiis Hisea Ch Hai ?",
    answers: [

      { text: "Khabbea Peaar De Guthe Ch !", correct: false },
      { text: "Haeni Jhukham ea Ta Naliya Rahi Dig Gea !", correct: false },
      { text: "Obvisouly Jithe Sarea De Hundea !", correct: false },
      { text: "Dangra Ch Hundea Dimag ?", correct: true },
    ]


  },
  {
    question: "Ashneet Ashneet Badi Karli ! Panchoo Ehe Ashneet Hai Ki ?",
    answers: [

      { text: "Meri Paltu Billi !", correct: false },
      { text: "Saadi Kam Aali !", correct: false },
      { text: "Mera Aadi !", correct: false },
      { text: " Bhootni eaa Chandri !", correct: true },
    ]


  }
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();

}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
}


    button.addEventListener("click", selectAnswer);

  });


}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;

  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

}


function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }



})

startQuiz();