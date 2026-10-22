/**
 * Mais Vet Clínica Veterinária 24h (Goiânia - GO)
 * Lógica Interativa: Triagem para WhatsApp, Filtros, Accordion e Menu Mobile
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initTriageForm();
  initCategoryFilters();
  initFaqAccordion();
  initLiveDutyStatus();
  initSmoothScroll();
});

/**
 * 1. Menu Mobile
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const isOpen = navLinks.classList.contains('show');
    toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Fecha o menu ao clicar em qualquer link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * 2. Triagem Rápida & Encaminhamento para WhatsApp
 */
function initTriageForm() {
  const form = document.getElementById('triageForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Coleta dos dados do formulário
    const petTypeInput = document.querySelector('input[name="petType"]:checked');
    const petType = petTypeInput ? petTypeInput.value : 'Pet';
    const service = document.getElementById('serviceSelect')?.value || 'Consulta Geral';
    const petName = document.getElementById('petName')?.value.trim() || 'Não informado';
    const petAge = document.getElementById('petAge')?.value.trim() || 'Não informada';
    const symptoms = document.getElementById('petSymptoms')?.value.trim() || 'Gostaria de agendar avaliação clínica.';
    const preferredTime = document.getElementById('preferredTime')?.value || 'O mais rápido possível';

    // Número oficial da Mais Vet no formato internacional
    const whatsappPhone = '556241418515';

    // Montagem da mensagem estruturada para atendimento rápido
    const message = 
      `🐾 *NOVA TRIAGEM / AGENDAMENTO - MAIS VET 24H*\n\n` +
      `📌 *Tipo de Pet:* ${petType}\n` +
      `🏷️ *Nome do Pet:* ${petName}\n` +
      `⏳ *Idade/Porte:* ${petAge}\n` +
      `🩺 *Motivo / Especialidade:* ${service}\n` +
      `⏰ *Horário Desejado:* ${preferredTime}\n` +
      `📝 *Relato dos Sintomas / Dúvidas:*\n"${symptoms}"\n\n` +
      `📍 *Unidade:* Setor Faiçalville, Goiânia - GO\n` +
      `_Enviado pelo site oficial Mais Vet._`;

    // Redirecionamento seguro para a API do WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

    // Feedback visual momentâneo no botão
    const submitBtn = document.getElementById('submitTriage');
    if (submitBtn) {
      const originalHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Encaminhando ao Plantão...';
      submitBtn.disabled = true;

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        submitBtn.innerHTML = originalHtml;
        submitBtn.disabled = false;
      }, 600);
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  });
}

/**
 * 3. Filtros de Categorias das Especialidades
 */
function initCategoryFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const serviceCards = document.querySelectorAll('.service-card');

  if (!filterTabs.length || !serviceCards.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove a classe ativa de todos e adiciona no selecionado
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 4. Accordion de Perguntas Frequentes (FAQ)
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha outros itens
      faqItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove('active');
      });

      // Alterna o item atual
      if (!isActive) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
}

/**
 * 5. Status do Plantão 24h em Tempo Real
 */
function initLiveDutyStatus() {
  function updateTime() {
    const now = new Date();
    // Horário formatado de Brasília
    const timeString = now.toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit'
    });

    const dutyTextElement = document.querySelector('.live-duty-card .duty-text');
    if (dutyTextElement) {
      dutyTextElement.innerHTML = `Plantão Veterinário 24h ativo agora (${timeString}) no Setor Faiçalville`;
    }
  }

  updateTime();
  setInterval(updateTime, 30000); // Atualiza a cada 30 segundos
}

/**
 * 6. Rolagem Suave com Ajuste de Altura do Header Sticky
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
