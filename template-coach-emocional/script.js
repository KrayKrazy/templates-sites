/**
 * Michelle Cristina Sousa - Master Coach & Inteligência Emocional
 * Interactive Engine: Termômetro Emocional, Navegação & Modal de Aniversário
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Menu Mobile Toggle
  // =========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  const navBackdrop = document.getElementById('navBackdrop');

  function closeMobileNav() {
    if (mainNav) mainNav.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('active');
    if (mobileToggle) {
      const spans = mobileToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }

  function openMobileNav() {
    if (mainNav) mainNav.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('active');
    if (mobileToggle) {
      const spans = mobileToggle.querySelectorAll('span');
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    }
  }

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mainNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Fechar menu ao clicar no backdrop
    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileNav);
    }

    // Fechar menu ao clicar em qualquer link ou botão interno
    const navClickables = mainNav.querySelectorAll('a, button');
    navClickables.forEach(elem => {
      elem.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Fechar ao pressionar a tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('open')) {
        closeMobileNav();
      }
    });
  }

  // =========================================================================
  // 2. FAQ Accordion
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Abre/fecha o atual
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // =========================================================================
  // 3. Termômetro da Inteligência Emocional (Interactive Quiz Engine)
  // =========================================================================
  const quizQuestions = [
    {
      title: "1. Como você lida quando imprevistos, críticas ou conflitos tiram sua rotina do eixo?",
      options: [
        { text: "Fico paralisada ou explodo na hora, e depois me sinto extremamente culpada.", points: 1 },
        { text: "Guardo tudo para mim para evitar discussões, mas fico remoendo por dias.", points: 2 },
        { text: "Tento respirar e ponderar, mas sinto que ainda gasto muita energia emocional nisso.", points: 3 },
        { text: "Consigo manter o equilíbrio, separar fatos de sentimentos e agir com firmeza e amor.", points: 4 }
      ]
    },
    {
      title: "2. Em relação à sua identidade e chamado de vida, o que você mais sente hoje?",
      options: [
        { text: "Sinto-me perdida, vivendo no piloto automático e tentando agradar a todos.", points: 1 },
        { text: "Sei que tenho potencial, mas o medo do julgamento dos outros me trava.", points: 2 },
        { text: "Tenho clareza de onde quero chegar, porém me sinto sobrecarregada para agir.", points: 3 },
        { text: "Sei exatamente quem eu sou diante de Deus e sigo convicta do meu propósito.", points: 4 }
      ]
    },
    {
      title: "3. Como está o equilíbrio entre sua carreira, sua vida familiar e espiritual?",
      options: [
        { text: "Caótico. Sinto que estou falhando em uma área para conseguir dar conta da outra.", points: 1 },
        { text: "A rotina está pesada e sinto falta de momentos de paz real e conexão familiar.", points: 2 },
        { text: "Bom, mas preciso aprender a delegar mais e colocar limites saudáveis.", points: 3 },
        { text: "Harmonioso. Aprendi a priorizar o essencial e viver em governo sobre meu tempo.", points: 4 }
      ]
    },
    {
      title: "4. Diante de feridas e frustrações do passado, como seu coração reage?",
      options: [
        { text: "Ainda sinto mágoa ou aperto no peito ao lembrar de certas pessoas ou fases.", points: 1 },
        { text: "Finjo que superei, mas percebo que certas travas se repetem nas minhas escolhas.", points: 2 },
        { text: "Estou em processo de cura, buscando perdoar e avançar com maturidade.", points: 3 },
        { text: "Livre e curada. Entendo que o que passei virou autoridade para transformar outros.", points: 4 }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  let totalPoints = 0;

  const quizQuestionContainer = document.getElementById('quizQuestionContainer');
  const quizResultContainer = document.getElementById('quizResultContainer');
  const stepIndicator = document.getElementById('stepIndicator');
  const progressFill = document.getElementById('progressFill');
  const resultTitle = document.getElementById('resultTitle');
  const resultDescription = document.getElementById('resultDescription');
  const resultCallout = document.getElementById('resultCallout');
  const resultWhatsAppBtn = document.getElementById('resultWhatsAppBtn');
  const restartQuizBtn = document.getElementById('restartQuizBtn');

  function renderQuestion(index) {
    if (!quizQuestionContainer) return;

    const q = quizQuestions[index];
    stepIndicator.textContent = `Pergunta ${index + 1} de ${quizQuestions.length}`;
    progressFill.style.width = `${((index + 1) / quizQuestions.length) * 100}%`;

    const letters = ['A', 'B', 'C', 'D'];
    let html = `
      <h4 class="quiz-question-title">${q.title}</h4>
      <div class="quiz-options-list">
    `;

    q.options.forEach((opt, i) => {
      html += `
        <button class="quiz-option-btn" data-points="${opt.points}">
          <span class="quiz-option-letter">${letters[i]}</span>
          <span class="quiz-option-text">${opt.text}</span>
        </button>
      `;
    });

    html += `</div>`;
    quizQuestionContainer.innerHTML = html;

    // Attach click events to options
    const optionBtns = quizQuestionContainer.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pts = parseInt(btn.getAttribute('data-points'), 10);
        totalPoints += pts;

        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
          renderQuestion(currentQuestionIndex);
        } else {
          showQuizResults();
        }
      });
    });
  }

  function showQuizResults() {
    quizQuestionContainer.classList.add('hidden');
    stepIndicator.textContent = 'Diagnóstico Finalizado';
    quizResultContainer.classList.remove('hidden');

    let title = '';
    let desc = '';
    let callout = '';
    let profile = '';

    if (totalPoints <= 7) {
      title = 'Nível 1: Sobrecarga Emocional & Busca por Identidade';
      profile = 'Sobrecarga Emocional';
      desc = 'Você está carregando um peso maior do que deveria, tentando agradar expectativas alheias e sentindo-se exausta. O medo de errar ou o cansaço do dia a dia têm drenado sua clareza de visão.';
      callout = '"Você não é o oleiro de ninguém. Barro não molda barro. O primeiro passo da sua libertação é restaurar quem você é diante de Deus e aprender a dizer não com firmeza e amor."';
    } else if (totalPoints <= 11) {
      title = 'Nível 2: Transição & Despertar de Consciência';
      profile = 'Fase de Transição';
      desc = 'Você já possui consciência dos seus desafios e busca crescer, mas ainda se depara com travas emocionais, inseguranças ocultas ou oscilações de foco que atrasam o seu verdadeiro potencial.';
      callout = '"Escolhas te levam, mas direção te liberta. Você já está pronta para o próximo nível; o que falta é a metodologia certa e uma mentoria intencional para alinhar suas ações ao seu propósito."';
    } else {
      title = 'Nível 3: Pronta para o Governo & Autoridade com Propósito';
      profile = 'Maturidade & Governo';
      desc = 'Você já conquistou um alto grau de equilíbrio emocional e espiritual. O seu momento agora é de refinamento estratégico, aceleração de liderança e impacto sobre a vida de outras pessoas e famílias.';
      callout = '"As pessoas certas ao seu lado transformam a velocidade do seu crescimento. É hora de expandir sua autoridade e cumprir plenamente o seu chamado ministerial e profissional."';
    }

    resultTitle.textContent = title;
    resultDescription.textContent = desc;
    resultCallout.innerHTML = callout;

    const waText = encodeURIComponent(
      `Olá, Michelle! Acabei de fazer o Termômetro da Inteligência Emocional no seu site.\n\n` +
      `Minha pontuação foi ${totalPoints}/${quizQuestions.length * 4} pontos e meu resultado indicou: *${profile}*.\n\n` +
      `Gostaria de agendar uma conversa para entender como a sua Mentoria de Identidade e Propósito pode me ajudar nesse momento!`
    );

    resultWhatsAppBtn.href = `https://wa.me/556193120730?text=${waText}`;
  }

  if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', () => {
      currentQuestionIndex = 0;
      totalPoints = 0;
      quizResultContainer.classList.add('hidden');
      quizQuestionContainer.classList.remove('hidden');
      renderQuestion(0);
    });
  }

  // Inicializa o quiz
  if (quizQuestionContainer) {
    renderQuestion(0);
  }

  // =========================================================================
  // 4. Modal de Aniversário (Birthday Tribute Easter Egg)
  // =========================================================================
  const openBirthdayModalBtn = document.getElementById('openBirthdayModalBtn');
  const closeBirthdayModalBtn = document.getElementById('closeBirthdayModalBtn');
  const closeModalActionBtn = document.getElementById('closeModalActionBtn');
  const birthdayModal = document.getElementById('birthdayModal');

  function openModal() {
    if (birthdayModal) {
      birthdayModal.classList.remove('hidden');
    }
  }

  function closeModal() {
    if (birthdayModal) {
      birthdayModal.classList.add('hidden');
    }
  }

  if (openBirthdayModalBtn) {
    openBirthdayModalBtn.addEventListener('click', openModal);
  }

  if (closeBirthdayModalBtn) {
    closeBirthdayModalBtn.addEventListener('click', closeModal);
  }

  if (closeModalActionBtn) {
    closeModalActionBtn.addEventListener('click', closeModal);
  }

  if (birthdayModal) {
    birthdayModal.addEventListener('click', (e) => {
      if (e.target === birthdayModal) {
        closeModal();
      }
    });
  }

});
