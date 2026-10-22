/**
 * LEU'S ÓTICA - INTERACTIVE SCRIPTS
 * Simulador de Óculos, Menu Responsivo, Filtros de Vitrine & FAQ
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSimulator();
  initCatalogFilters();
  initFaqAccordion();
});

/* ========================================================
   1. MENU MOBILE DRAWER
   ======================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('drawerClose');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ========================================================
   2. SIMULADOR INTERATIVO DE ÓCULOS & LENTES
   ======================================================== */
let currentSimulatorData = {
  publico: 'Feminino',
  lente: 'Monofocal (Perto ou Longe)',
  receita: 'Sim, tenho a receita em mãos'
};

function initSimulator() {
  const form = document.getElementById('glassesSimulatorForm');
  if (!form) return;

  // Listeners para atualizar dados em tempo real
  form.querySelectorAll('input[name="publico"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentSimulatorData.publico = e.target.value;
      updateSummary();
    });
  });

  form.querySelectorAll('input[name="lente"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentSimulatorData.lente = e.target.value;
      updateSummary();
    });
  });

  form.querySelectorAll('input[name="receita"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentSimulatorData.receita = e.target.value;
      updateSummary();
    });
  });

  updateSummary();
}

function nextStep(stepNumber) {
  const steps = document.querySelectorAll('.simulator-step');
  const progressBar = document.getElementById('stepProgress');

  steps.forEach(s => s.classList.remove('active'));
  const targetStep = document.querySelector(`.simulator-step[data-step="${stepNumber}"]`);
  if (targetStep) targetStep.classList.add('active');

  if (progressBar) {
    if (stepNumber === 1) progressBar.style.width = '33.33%';
    if (stepNumber === 2) progressBar.style.width = '66.66%';
    if (stepNumber === 3) progressBar.style.width = '100%';
  }

  updateSummary();
}

function prevStep(stepNumber) {
  nextStep(stepNumber);
}

function updateSummary() {
  const summaryBox = document.getElementById('summaryDetailsText');
  if (!summaryBox) return;

  summaryBox.innerHTML = `
    <strong>• Perfil Selecionado:</strong> ${currentSimulatorData.publico}<br />
    <strong>• Tipo de Lente Desejada:</strong> ${currentSimulatorData.lente}<br />
    <strong>• Situação da Receita:</strong> ${currentSimulatorData.receita}<br />
    <span style="color: #22c55e; font-weight: 700; display: inline-block; margin-top: 6px;">
      ✨ Condição Especial Ativada: Armações a partir de R$ 99,00 + Menor Preço Garantido!
    </span>
  `;
}

function sendSimulatorWhatsApp() {
  const phone = '5561981853514';
  const text = `Olá, Leu's Ótica! Fiz a simulação de óculos no site e gostaria de um orçamento:\n\n` +
    `👤 *Público / Estilo:* ${currentSimulatorData.publico}\n` +
    `🔬 *Tipo de Lente:* ${currentSimulatorData.lente}\n` +
    `📋 *Situação da Receita:* ${currentSimulatorData.receita}\n\n` +
    `Podem me passar os modelos disponíveis e os valores especiais?`;

  const encodedUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(encodedUrl, '_blank');
}

// Tornar funções acessíveis globalmente no inline onclick
window.nextStep = nextStep;
window.prevStep = prevStep;
window.sendSimulatorWhatsApp = sendSimulatorWhatsApp;

/* ========================================================
   3. FILTROS DO CATÁLOGO DE PRODUTOS
   ======================================================== */
function initCatalogFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ========================================================
   4. FAQ ACCORDION
   ======================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Fecha outros itens
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));

      // Alterna o atual
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
