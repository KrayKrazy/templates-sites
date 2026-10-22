/**
 * CLÍNICA HÁGATA SPA & ESTÉTICA - SCRIPTS DE INTERATIVIDADE E CONVERSÃO
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa ícones do Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initMobileMenu();
  initExperienceSimulator();
  initServiceFilters();
  initFaqAccordion();
  initGalleryLightbox();
  initScrollHeader();
});

/* ==========================================================================
   1. MENU MOBILE
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileBackdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   2. HEADER TRANSPARENTE / SCROLL
   ========================================================================== */
function initScrollHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-emerald-950/95', 'shadow-lg', 'backdrop-blur-md', 'py-3');
      header.classList.remove('bg-transparent', 'py-5');
    } else {
      header.classList.remove('bg-emerald-950/95', 'shadow-lg', 'backdrop-blur-md', 'py-3');
      header.classList.add('bg-transparent', 'py-5');
    }
  });
}

/* ==========================================================================
   3. SIMULADOR DE EXPERIÊNCIA E AGENDAMENTO EXPRESS
   ========================================================================== */
function initExperienceSimulator() {
  const ritualSelect = document.getElementById('simRitual');
  const durationSelect = document.getElementById('simDuration');
  const dateInput = document.getElementById('simDate');
  const periodSelect = document.getElementById('simPeriod');
  const nameInput = document.getElementById('simName');
  const notesInput = document.getElementById('simNotes');
  const addonCheckboxes = document.querySelectorAll('.sim-addon');

  const summaryRitual = document.getElementById('sumRitual');
  const summaryDuration = document.getElementById('sumDuration');
  const summaryPrice = document.getElementById('sumPrice');
  const submitBtn = document.getElementById('simSubmitBtn');

  // Define data mínima como amanhã
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  function calculateSummary() {
    if (!ritualSelect) return;

    const selectedOption = ritualSelect.options[ritualSelect.selectedIndex];
    const basePrice = parseFloat(selectedOption.getAttribute('data-price') || '197');
    const ritualName = selectedOption.text.split(' - ')[0];

    let addonsTotal = 0;
    const selectedAddons = [];

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        addonsTotal += parseFloat(cb.getAttribute('data-price') || '0');
        selectedAddons.push(cb.getAttribute('data-name'));
      }
    });

    const durationText = durationSelect ? durationSelect.value : '1 hora';
    const totalPrice = basePrice + addonsTotal;

    if (summaryRitual) summaryRitual.textContent = ritualName;
    if (summaryDuration) summaryDuration.textContent = durationText;
    if (summaryPrice) {
      summaryPrice.textContent = totalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }

    return {
      ritual: ritualName,
      price: totalPrice,
      duration: durationText,
      addons: selectedAddons
    };
  }

  // Ouvintes de alteração
  if (ritualSelect) ritualSelect.addEventListener('change', calculateSummary);
  if (durationSelect) durationSelect.addEventListener('change', calculateSummary);
  addonCheckboxes.forEach(cb => cb.addEventListener('change', calculateSummary));

  // Executa uma vez no início
  calculateSummary();

  // Envio para o WhatsApp
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = calculateSummary();
      const clientName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Cliente';
      const chosenDate = dateInput && dateInput.value ? formatDateBR(dateInput.value) : 'A combinar';
      const chosenPeriod = periodSelect ? periodSelect.value : 'Manhã ou Tarde';
      const notes = notesInput && notesInput.value.trim() ? notesInput.value.trim() : 'Nenhuma observação extra';

      let msg = `🌿 *Olá, Clínica Hágata SPA & Estética!*\n`;
      msg += `Gostaria de solicitar um agendamento de experiência:\n\n`;
      msg += `✨ *Procedimento/Ritual:* ${current.ritual}\n`;
      msg += `⏳ *Duração estimada:* ${current.duration}\n`;
      if (current.addons.length > 0) {
        msg += `🎁 *Mimos & Adicionais:* ${current.addons.join(', ')}\n`;
      }
      msg += `💰 *Investimento estimado:* R$ ${current.price.toFixed(2).replace('.', ',')}\n\n`;
      msg += `📅 *Previsão de Data:* ${chosenDate}\n`;
      msg += `⏰ *Período preferido:* ${chosenPeriod}\n`;
      msg += `👤 *Meu Nome:* ${clientName}\n`;
      if (notes !== 'Nenhuma observação extra') {
        msg += `📝 *Observações:* ${notes}\n`;
      }
      msg += `\nPoderiam verificar os horários disponíveis para viver essa experiência? Muito obrigada(o)!`;

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/5561993577982?text=${encodedMsg}`;

      window.open(whatsappUrl, '_blank');
    });
  }
}

function formatDateBR(dateStr) {
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

/* ==========================================================================
   4. FILTROS DO CARDÁPIO DE RITUAIS
   ========================================================================== */
function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-800', 'text-white', 'border-gold');
        b.classList.add('bg-white', 'text-emerald-900', 'border-emerald-800/10');
      });

      btn.classList.add('bg-emerald-800', 'text-white', 'border-gold');
      btn.classList.remove('bg-white', 'text-emerald-900', 'border-emerald-800/10');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   5. ACORDEÃO DO FAQ
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. LIGHTBOX DA GALERIA
   ========================================================================== */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-thumb');
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('galleryModalImg');
  const modalCaption = document.getElementById('galleryModalCaption');
  const modalClose = document.getElementById('galleryModalClose');

  if (!modal || !modalImg) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-src') || item.querySelector('img').src;
      const caption = item.getAttribute('data-caption') || 'Experiência Clínica Hágata SPA';

      modalImg.src = imgSrc;
      if (modalCaption) modalCaption.textContent = caption;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
