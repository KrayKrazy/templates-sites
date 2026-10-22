/**
 * THUNDER CROSS CF - CENTRO DE TREINAMENTO
 * Interactive Frontend Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  // 3. Schedule Filter Tabs
  const scheduleTabs = document.querySelectorAll('.schedule-tab');
  const scheduleRows = document.querySelectorAll('.schedule-table tbody tr');

  scheduleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      scheduleTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      scheduleRows.forEach(row => {
        const period = row.getAttribute('data-period');
        if (filter === 'all' || period === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  // 4. BMI (IMC) Calculator
  const calcBtn = document.getElementById('calc-bmi');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('bmi-weight').value);
      const heightCm = parseFloat(document.getElementById('bmi-height').value);
      const scoreEl = document.getElementById('bmi-score');
      const categoryEl = document.getElementById('bmi-category');
      const tipEl = document.getElementById('bmi-tip');

      if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
      }

      const heightM = heightCm / 100;
      const imc = (weight / (heightM * heightM)).toFixed(1);
      scoreEl.textContent = imc;

      let category = '';
      let tip = '';
      let color = '';

      if (imc < 18.5) {
        category = 'Abaixo do peso';
        tip = 'O CrossFit pode te ajudar no ganho de massa magra e fortalecimento muscular.';
        color = '#38bdf8';
      } else if (imc >= 18.5 && imc < 25) {
        category = 'Peso Saudável';
        tip = 'Excelente! Nossos treinos vão elevar sua potência, fôlego e condicionamento.';
        color = '#22c55e';
      } else if (imc >= 25 && imc < 30) {
        category = 'Sobrepeso';
        tip = 'Ideal para queima calórica intensa e transformação corporal acelerada.';
        color = '#f59e0b';
      } else {
        category = 'Obesidade';
        tip = 'Nossos coaches adaptam os treinos para proteger suas articulações enquanto você recupera sua saúde e energia.';
        color = '#ef4444';
      }

      categoryEl.textContent = category;
      categoryEl.style.color = color;
      tipEl.textContent = tip;
    });
  }

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 6. Modal Agendamento Aula Experimental
  const modal = document.getElementById('modal-agendamento');
  const openModalBtns = document.querySelectorAll('.js-open-modal');
  const closeModalBtn = document.querySelector('.modal-close');
  const modalForm = document.getElementById('modal-form');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('active');
    });
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('lead-nome').value.trim();
      const horario = document.getElementById('lead-horario').value;
      const objetivo = document.getElementById('lead-objetivo').value;

      const texto = `Olá, Thunder Cross CF! Meu nome é ${nome}. Gostaria de agendar minha Aula Gratuita!\n- Horário de preferência: ${horario}\n- Objetivo principal: ${objetivo}`;
      const url = `https://wa.me/5562984316490?text=${encodeURIComponent(texto)}`;

      window.open(url, '_blank');
      modal.classList.remove('active');
      modalForm.reset();
    });
  }
});
