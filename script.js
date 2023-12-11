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

// POLIOMIELITE
      poliomielite: {
          question: "Você sentiu febre?",
          options: [
            { label: "Sim", next: "poliomielite2" },
            {
              label: "Não",
              next: "poliomielite2"
            },
          ],
        },
        
        poliomielite2: {
          question: "Você sentiu dores no estomâgo?",
          options: [
            { label:"Sim, senti dores intensas", next: "poliomielite4" },
            {label: "Sim, senti dores leves", next: "poliomielite3"},
            {label: "Não senti dores.",result: "Provalmente você não está com Poliomielite. Consulte um médico para avaliação completa."
          },
          ],
        },

        poliomielite3: {
          question: "Você teve espasmos frequentes?",
          options: [
            { label: "Sim", next: "poliomielite3_1" },
            {
              label: "Não",
              result: "Provalmente você não está com Poliomielite. Consulte um médico para avaliação completa."

            },
          ],
        },
        poliomielite3_1: {
          question: "Qual a intensidade de dor dos espamos?",
          options: [
            { label: "Leve", next: "poliomielite4" },
            { label: "Moderada", next: "poliomielite4" },
            { label: "Alta", next: "poliomielite4"
            },
          ],
        },
        poliomielite4: {
          question: "Você sentiu rigidez no pescoço ou paralisia no corpo?",
          options: [
            { label: "Sim, tive paralisias no corpo.", result: "Provalmente você não está com Poliomielite. Consulte um médico para avaliação completa." },
            { label: "Sim, tive rigidez na nuca.", result: "Você tem sintomas semelhantes aos da poliomielite. Consulte um médico para avaliação completa." },
            { label: "Sim, tive paralisia no corpo e rigidez no pescoço.", result: "Você tem sintomas semelhantes aos da poliomielite. Consulte um médico para avaliação completa." },
            {
              label: "Não senti nenhuma desses sintomas.", result: "Provalmente você não está com Poliomielite. Consulte um médico para avaliação completa."
            },
          ],
        },

  // EBOLA
  ebola: {
    question: "Você esteve em uma área afetada pelo vírus Ebola nos últimos 21 dias?",
    options: [
      { label: "Sim", next: "ebolaAffectedArea" },
      { label: "Não", result: "Provavelmente você não foi exposto ao vírus Ebola. Continue monitorando sua saúde." },
    ],
  },

  ebolaAffectedArea: {
    question: "Você teve contato próximo com alguém que foi diagnosticado com Ebola?",
    options: [
      { label: "Sim", next: "ebolaSymptoms" },
      { label: "Não", result: "Continue monitorando sua saúde. Se desenvolver sintomas como febre, vômitos, dor abdominal, entre outros, procure ajuda médica imediatamente." },
    ],
  },

  ebolaSymptoms: {
    question: "Você está apresentando algum dos seguintes sintomas?",
    options: [
      { label: "Febre alta", next: "ebolaFever" },
      { label: "Dor de cabeça intensa", next: "ebolaHeadache" },
      { label: "Vômitos persistentes", next: "ebolaVomiting" },
      { label: "Dor muscular intensa", next: "ebolaMusclePain" },
      { label: "Diarreia severa", next: "ebolaDiarrhea" },
    ],
  },

  ebolaFever: {
    question: "Qual é a sua temperatura corporal atual?",
    options: [
      { label: "38.0°C a 38.9°C", result: "Continue monitorando sua saúde. Se os sintomas persistirem, procure ajuda médica." },
      { label: "39.0°C a 39.9°C", result: "Procure ajuda médica imediatamente." },
      { label: "40.0°C ou mais", result: "Procure ajuda médica imediatamente." },
      { label: "Não sei", result: "Meça sua temperatura e, se estiver alta, procure ajuda médica imediatamente." },
    ],
  },

  ebolaHeadache: {
    question: "A dor de cabeça é acompanhada por rigidez do pescoço?",
    options: [
      { label: "Sim", result: "Procure ajuda médica imediatamente." },
      { label: "Não", result: "Continue monitorando sua saúde. Se os sintomas persistirem, procure ajuda médica." },
    ],
  },

  ebolaVomiting: {
    question: "Você está conseguindo manter líquidos para evitar desidratação?",
    options: [
      { label: "Sim", result: "Continue monitorando sua saúde. Se os sintomas persistirem, procure ajuda médica." },
      { label: "Não", result: "Procure ajuda médica imediatamente para evitar desidratação grave." },
    ],
  },

  ebolaMusclePain: {
    question: "A dor muscular é intensa e incapacitante?",
    options: [
      { label: "Sim", result: "Procure ajuda médica imediatamente." },
      { label: "Não", result: "Continue monitorando sua saúde. Se os sintomas persistirem, procure ajuda médica." },
    ],
  },

  ebolaDiarrhea: {
    question: "A diarreia é persistente e grave?",
    options: [
      { label: "Sim", result: "Procure ajuda médica imediatamente." },
      { label: "Não", result: "Continue monitorando sua saúde. Se os sintomas persistirem, procure ajuda médica." },
    ],
  },

  ebolaContactHealthcare: {
    question: "Você já procurou ajuda médica para esses sintomas?",
    options: [
      { label: "Sim, já procurei ajuda médica", result: "Continue seguindo as orientações do profissional de saúde." },
      { label: "Não, ainda não procurei ajuda médica", result: "É altamente recomendável procurar ajuda médica imediatamente para avaliação e tratamento adequados." },
    ],
  },
};

  let currentQuestion;
  let userChoices = [];

  function showQuestionWithChoices(questionData) {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <p>${questionData.question}</p>
      ${questionData.options.map((option, index) => `
        <input type="radio" name="answer" id="${option.label}" value="${index}">
        <label for="${option.label}">${option.label}</label><br>
      `).join('')}
      <button onclick="processAnswerWithChoices()">Responder</button>
    `;
  }

  function processAnswerWithChoices() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
      const selectedOption = currentQuestion.options[selectedAnswer.value];
      userChoices.push({ question: currentQuestion.question, answer: selectedOption.label });

      const nextQuestionKey = selectedOption.next;
      const result = selectedOption.result;
      const nextQuestion = nextQuestionKey ? anamneseData[nextQuestionKey] : null;
      currentQuestion = nextQuestion;

      if (nextQuestion) {
        showQuestionWithChoices(nextQuestion);
      } else {
        alert(result); // Exibir resultado final
        displayUserChoices();
      }
    } else {
      alert("Por favor, selecione uma resposta.");
    }
  }

  function displayUserChoices() {
    const choicesContainer = document.getElementById("user-choices-container");
    choicesContainer.innerHTML = "<h2>Suas Escolhas:</h2>";
    userChoices.forEach(choice => {
      choicesContainer.innerHTML += `<p><strong>${choice.question}</strong>: ${choice.answer}</p>`;
    });
  }

  function iniciarAnamnese(doenca) {
    currentQuestion = anamneseData[doenca];
    showQuestionWithChoices(currentQuestion);
  }