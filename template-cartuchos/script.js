/**
 * MULTI CARTUCHOS & INFORMÁTICA - INTERACTIVE LOGIC & CONVERSION ENGINE
 * Gerador de mensagens inteligentes para WhatsApp e controle de componentes
 */

document.addEventListener('DOMContentLoaded', function () {
  // Configuração oficial de atendimento
  const PRIMARY_WHATSAPP = '5561991103434'; // (61) 99110-3434
  const SECONDARY_PHONE = '5561993378839'; // (61) 99337-8839

  // =========================================================================
  // 1. SIMULADOR INTERATIVO DE RECARGA & SUPRIMENTOS
  // =========================================================================
  const simRadios = document.querySelectorAll('input[name="sim-service"]');
  const simBrandSelect = document.getElementById('sim-brand');
  const simModelInput = document.getElementById('sim-model');
  const simSendBtn = document.getElementById('sim-send-btn');
  const simPreview = document.getElementById('sim-preview-content');

  function updateSimulator() {
    let selectedService = document.querySelector('input[name="sim-service"]:checked')?.value || 'Recarga de Cartucho XL';
    let selectedBrand = simBrandSelect ? simBrandSelect.value : 'HP';
    let modelOrDefect = simModelInput && simModelInput.value.trim() ? simModelInput.value.trim() : 'Modelo a consultar';

    if (simPreview) {
      simPreview.innerHTML = `<strong>${selectedService}</strong> para equipamento <strong>${selectedBrand}</strong> (Ref: <strong>${modelOrDefect}</strong>)`;
    }

    // Gerar link formatado para o WhatsApp
    const message = `Olá, Multi Cartuchos! Fiz uma simulação pelo site e gostaria de saber o valor e disponibilidade:\n\n` +
      `🛠️ *Serviço / Produto:* ${selectedService}\n` +
      `🖨️ *Marca do Equipamento:* ${selectedBrand}\n` +
      `📄 *Modelo do Cartucho/Toner ou Defeito:* ${modelOrDefect}\n\n` +
      `Podem me passar o orçamento e o tempo estimado para entrega/pronto atendimento?`;

    const encodedUrl = `https://wa.me/${PRIMARY_WHATSAPP}?text=${encodeURIComponent(message)}`;

    if (simSendBtn) {
      simSendBtn.setAttribute('href', encodedUrl);
    }
  }

  // Event Listeners do Simulador
  simRadios.forEach(radio => {
    radio.addEventListener('change', updateSimulator);
  });

  if (simBrandSelect) {
    simBrandSelect.addEventListener('change', updateSimulator);
  }

  if (simModelInput) {
    simModelInput.addEventListener('input', updateSimulator);
  }

  // Inicialização
  updateSimulator();

  // =========================================================================
  // 2. FAQ ACCORDION INTERATIVO
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Fecha todos os outros itens
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
          }
        });

        // Alterna o item atual
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        }
      });
    }
  });

  // =========================================================================
  // 3. MENU MOBILE EXPANSÍVEL
  // =========================================================================
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Fechar ao clicar em qualquer link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // =========================================================================
  // 4. ANO AUTOMÁTICO NO COPYRIGHT
  // =========================================================================
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // 5. ROLAGEM SUAVE PARA LINKS ÂNCORA
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
