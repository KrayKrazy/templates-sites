/**
 * SoffCar Higienização e Limpeza - Interactive Engine
 * Samambaia & Distrito Federal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Current Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-active');
    });

    // Close when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('mobile-active');
      });
    });
  }

  // 3. Dual-Focus Switcher (Residential vs. Automotive)
  const switchBtns = document.querySelectorAll('.switch-btn');
  const focusPanels = document.querySelectorAll('.focus-panel');

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBtns.forEach(b => b.classList.remove('active'));
      focusPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 4. Video Showcase Filter Tabs
  const videoTabs = document.querySelectorAll('.video-tab-btn');
  const videoCards = document.querySelectorAll('.video-card');

  videoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      videoTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      videoCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Video Modal Lightbox Handlers
  const videoModal = document.getElementById('videoModal');
  const closeModalBtn = document.getElementById('closeVideoModal');
  const modalTitle = document.getElementById('modalVideoTitle');
  const modalDesc = document.getElementById('modalVideoDesc');
  const modalPoster = document.getElementById('modalVideoPoster');

  window.openVideoModal = function(title, desc, poster) {
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalPoster) modalPoster.src = poster;
    if (videoModal) videoModal.classList.add('open');
  };

  if (closeModalBtn && videoModal) {
    closeModalBtn.addEventListener('click', () => {
      videoModal.classList.remove('open');
    });

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.remove('open');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('open')) {
        videoModal.classList.remove('open');
      }
    });
  }

  // 6. Interactive Before & After Slider
  const compSlider = document.getElementById('comparisonSlider');
  const afterWrapper = document.getElementById('afterImageWrapper');
  const sliderHandle = document.getElementById('sliderHandle');

  if (compSlider && afterWrapper && sliderHandle) {
    let isDragging = false;

    const updateSlider = (clientX) => {
      const rect = compSlider.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;

      const percentage = (offsetX / rect.width) * 100;
      afterWrapper.style.width = `${percentage}%`;
      sliderHandle.style.left = `${percentage}%`;
    };

    compSlider.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    // Touch events for mobile
    compSlider.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches.length > 0) updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length === 0) return;
      updateSlider(e.touches[0].clientX);
    }, { passive: true });
  }

  // 7. Express Budget Simulator & WhatsApp Dispatch
  const calcService = document.getElementById('calcService');
  const calcRegion = document.getElementById('calcRegion');
  const calcDetail = document.getElementById('calcDetail');
  const priceDisplay = document.getElementById('calcPriceDisplay');
  const btnSendWhatsapp = document.getElementById('btnSendWhatsappCalc');

  const priceMap = {
    'sofa-retratil': { min: 180, label: 'A partir de R$ 180,00', name: 'Sofá Retrátil / Reclinável' },
    'sofa-comum': { min: 140, label: 'A partir de R$ 140,00', name: 'Sofá Tradicional (2 a 4 Lugares)' },
    'sofa-canto': { min: 220, label: 'A partir de R$ 220,00', name: 'Sofá de Canto / Modular com Chaise' },
    'carro-completo': { min: 200, label: 'A partir de R$ 200,00', name: 'Higienização Automotiva Completa' },
    'colchao': { min: 130, label: 'A partir de R$ 130,00', name: 'Higienização de Colchão' },
    'cadeiras': { min: 120, label: 'A partir de R$ 120,00 (Conjunto)', name: 'Conjunto de Cadeiras de Jantar' },
    'impermeabilizacao': { min: 280, label: 'A partir de R$ 280,00', name: 'Impermeabilização Blindada Nanotecnológica' },
    'combo-sofa-carro': { min: 320, label: 'A partir de R$ 320,00 (Combo VIP)', name: 'Combo VIP: Sofá + Veículo' }
  };

  const updatePriceEstimate = () => {
    if (!calcService || !priceDisplay) return;
    const selected = calcService.value;
    const item = priceMap[selected] || { label: 'Sob consulta' };
    priceDisplay.textContent = item.label;
  };

  if (calcService) {
    calcService.addEventListener('change', updatePriceEstimate);
  }

  if (btnSendWhatsapp) {
    btnSendWhatsapp.addEventListener('click', () => {
      const serviceVal = calcService ? calcService.value : 'sofa-retratil';
      const serviceObj = priceMap[serviceVal] || { name: 'Higienização Geral' };
      const regionVal = calcRegion ? calcRegion.value : 'Samambaia';
      const detailVal = calcDetail ? calcDetail.value : 'Manutenção preventiva';

      const message = `Olá SoffCar! Vi o simulador no site e gostaria de um orçamento para:\n\n` +
        `🛋️ *Serviço:* ${serviceObj.name}\n` +
        `📍 *Região do DF:* ${regionVal}\n` +
        `🔍 *Situação:* ${detailVal}\n\n` +
        `Qual a disponibilidade de horário para atendimento?`;

      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5561981083659?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // 8. FAQ Accordion
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const isExpanded = item.classList.contains('active');

      // Close other accordion items
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBody = otherItem.querySelector('.accordion-body');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      if (!isExpanded) {
        item.classList.add('active');
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        if (body) body.style.maxHeight = null;
      }
    });
  });
});
