const anamneseData = {
  
  // CORAÇÃO
  coracao: {
    question: "Você está experimentando algum desconforto no peito?",
    options: [
      { label: "Sim", next: "question2" },
      { label: "Não", result: "Se você não está experimentando desconforto no peito, é possível que não haja uma emergência cardíaca. Consulte um médico para uma avaliação completa." }
    ]
  },
  question2: {
    question: "A dor no peito irradia para o braço esquerdo?",
    options: [
      { label: "Sim", result: "Isso pode ser um sintoma de problemas cardíacos. Recomenda-se procurar ajuda médica imediatamente." },
      { label: "Não", result: "A dor no peito pode ter várias causas. Consulte um médico para uma avaliação detalhada." }
    ]
  },

  // COVID
  covid: {
    question: "Você está com febre?",
    options: [
      { label: "Sim", next: "questionCovid2" },
      { label: "Não", result: "Se você não está com febre, é possível que seus sintomas não estejam relacionados ao COVID-19. Consulte um médico para uma avaliação completa." }
    ]
  },
  questionCovid2: {
    question: "Você teve contato com alguém diagnosticado com COVID-19 nos últimos 14 dias?",
    options: [
      { label: "Sim", result: "Recomenda-se procurar um teste para COVID-19 e seguir as orientações das autoridades de saúde." },
      { label: "Não", result: "Se você não teve contato com alguém diagnosticado, continue monitorando seus sintomas e consulte um médico se necessário." }
    ]
  },

  // HIPERTENSÃO
  hipertensao: {
    question: "Você tem histórico de pressão alta?",
    options: [
      { label: "Sim", next: "questionHipertensao2" },
      { label: "Não", result: "Se você não tem histórico de pressão alta, é possível que seus sintomas não estejam relacionados à hipertensão. Consulte um médico para uma avaliação completa." }
    ]
  },
  questionHipertensao2: {
    question: "Você está sentindo dores de cabeça frequentes?",
    options: [
      { label: "Sim", result: "Dores de cabeça frequentes podem ser um sintoma de hipertensão. Recomenda-se monitorar a pressão arterial e consultar um médico." },
      { label: "Não", result: "Se você não está sentindo dores de cabeça frequentes, continue monitorando sua saúde e consulte um médico se necessário." }
    ]
  }
};

let currentQuestion;

function showQuestion(questionData) {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <p>${questionData.question}</p>
    ${questionData.options.map(option => `
      <input type="radio" name="answer" id="${option.label}" value="${option.label}">
      <label for="${option.label}">${option.label}</label><br>
    `).join('')}
    <button onclick="processAnswer('${questionData.options[0].next}', '${questionData.options[1].result}')">Responder</button>
  `;
}

function processAnswer(nextQuestionKey, result) {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
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
