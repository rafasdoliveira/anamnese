const anamneseData = {
  
  // COVID
  covid: {
    question: "Você foi diagnosticado com COVID-19, ou você suspeita que já teve ou tem COVID-19?",
    options: [
      { label: "Sim", next: "covidPositive" },
      {
        label: "Não",
        result:
          "Se você não está com febre, é possível que seus sintomas não estejam relacionados ao COVID-19. Consulte um médico para uma avaliação completa.",
      },
    ],
  },
  
  covidPositive: {
    question: "Quando e onde você confirmou positivo?",
    options: [
      { label: "Eu suspeito que tive.", result: "Consulte um médico para avaliação." },
      {
        label: "Eu testei positivo no teste de coleta nasal.",
        next: "covidPositiveNasalTest",
      },
      {
        label: "Eu testei positivo no teste sanguíneo.",
        result: "Continue monitorando sua saúde.",
      },
      {
        label: "Eu testei positivo no teste de saliva.",
        result: "Continue monitorando sua saúde.",
      },
      {
        label: "Estou tendo sintomas atualmente e estou aguardando um teste.",
        result: "Aguarde o resultado do teste e siga as orientações médicas.",
      },
    ],
  },
  
  covidPositiveNasalTest: {
    question: "Como você confirmou que não está mais doente?",
    options: [
      {
        label: "Fui diagnosticado negativo por um teste de coleta nasal.",
        next: "covidNegativeNasalTest",
      },
      { label: "Apresentei anticorpos em um teste sanguíneo.", result: "Continue monitorando sua saúde." },
      {
        label: "Meu médico falou que eu não tenho mais a doença, pois parei de apresentar sintomas.",
        result: "Continue monitorando sua saúde.",
      },
      { label: "Não tenho mais sintomas.", result: "Continue monitorando sua saúde." },
    ],
  },
  
  covidNegativeNasalTest: {
    question: "Quando você confirmou negativo?",
    options: [
      { label: "24 horas atrás", result: "Continue monitorando sua saúde." },
      { label: "Hoje", result: "Continue monitorando sua saúde." },
      { label: "10 dias após o teste", result: "Continue monitorando sua saúde." },
    ],
  },
};

let currentQuestion;

function showQuestion(questionData) {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <p>${questionData.question}</p>
    ${questionData.options.map((option, index) => `
      <input type="radio" name="answer" id="${option.label}" value="${index}">
      <label for="${option.label}">${option.label}</label><br>
    `).join('')}
    <button onclick="processAnswer()">Responder</button>
  `;
}

function processAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    const selectedOption = currentQuestion.options[selectedAnswer.value];
    const nextQuestionKey = selectedOption.next;
    const result = selectedOption.result;
    const nextQuestion = nextQuestionKey ? anamneseData[nextQuestionKey] : null;
    currentQuestion = nextQuestion;

    if (nextQuestion) {
      showQuestion(nextQuestion);
    } else {
      alert(result); // Exibir resultado final
    }
  } else {
    alert("Por favor, selecione uma resposta.");
  }
}

function iniciarAnamnese(doenca) {
  currentQuestion = anamneseData[doenca];
  showQuestion(currentQuestion);
}
