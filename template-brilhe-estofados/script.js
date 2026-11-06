/**
 * Brilhe Estofados - Anápolis - GO
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initMobileMenu();
  initDiagnosticTabs();
  initFabricSwitcher();
  initMultiItemCart();
  initFaqAccordion();
  initFloatingHub();
});

/* ==========================================================================
   1. Live Business Hours Engine (Brasília/Goiás GMT-3)
   ========================================================================== */
function initLiveClock() {
  const statusPill = document.getElementById('live-status-pill');
  const statusText = document.getElementById('live-status-text');
  if (!statusPill || !statusText) return;

  function updateStatus() {
    // Get current time in America/Sao_Paulo (Anápolis - GO)
    const now = new Date();
    const options = { timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric', weekday: 'short', hour12: false };
    const formatter = new Intl.DateTimeFormat('pt-BR', options);
    const parts = formatter.formatToParts(now);

    let hour = 0;
    let weekday = '';
    for (const part of parts) {
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'weekday') weekday = part.value.toLowerCase();
    }

    const isSunday = weekday.startsWith('dom');
    const isOpen = !isSunday && hour >= 8 && hour < 17;

    if (isOpen) {
      statusText.textContent = 'Aberto Agora · Atendimento em Anápolis até 17h';
      statusPill.style.backgroundColor = 'rgba(37, 211, 102, 0.2)';
      statusPill.style.color = '#86EFAC';
    } else {
      statusText.textContent = 'Plantão WhatsApp Ativo · Agendamentos Abertos';
      statusPill.style.backgroundColor = 'rgba(56, 189, 248, 0.2)';
      statusPill.style.color = '#BAE6FD';
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000); // Check every minute
}

/* ==========================================================================
   2. Mobile Menu
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navItems = document.querySelectorAll('.nav-item');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('active');
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.classList.remove('active');
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

/* ==========================================================================
   3. Interactive Diagnostic Tabs ("Qual o problema do seu sofá?")
   ========================================================================== */
function initDiagnosticTabs() {
  const tabs = document.querySelectorAll('.diag-tab-btn');
  const img = document.getElementById('diag-img');
  const badge = document.getElementById('diag-badge');
  const title = document.getElementById('diag-title');
  const text = document.getElementById('diag-text');
  const stepsList = document.getElementById('diag-steps');
  const btn = document.getElementById('diag-btn');

  if (!tabs.length || !img || !badge || !title || !text || !stepsList || !btn) return;

  const data = {
    mancha: {
      img: 'assets/manchas-sofa-solucao.webp',
      badge: 'URGÊNCIA MODERADA',
      badgeColor: '#FEE2E2',
      badgeTextColor: '#DC2626',
      title: 'Manchas no Sofá? A Gente Resolve!',
      text: 'Derrubou café, vinho, refrigerante ou molho? Nunca esfregue com produtos abrasivos caseiros, pois isso queima as fibras e espalha o pigmento para dentro da espuma. Nosso método realiza a flotação química que descola a mancha e suga 100% da umidade com extratora italiana.',
      steps: [
        '✓ Aspiração mecânica de alta potência',
        '✓ Injeção de flotador biodegradável específico para a mancha',
        '✓ Extração a vácuo com eliminação completa de resíduos',
        '✓ Secagem expressa em poucas horas'
      ],
      whatsappMsg: 'Olá! Estou com mancha recente no meu estofado e gostaria de um socorro técnico da Brilhe Estofados.'
    },
    pet: {
      img: 'assets/derramou-liquido-sofa.webp',
      badge: 'DESINFECÇÃO BIOLÓGICA',
      badgeColor: '#FEF3C7',
      badgeTextColor: '#D97706',
      title: 'Xixi de Pet, Pelos & Neutralização de Odor',
      text: 'Acidentes com animais de estimação infiltram na espuma e proliferam bactérias responsáveis pelo mau cheiro recorrente. Aplicamos bactericida enzimático atóxico que decompõe a ureia e elimina a fonte do odor na raiz.',
      steps: [
        '✓ Bactericida enzimático neutralizador hospitalar',
        '✓ Eliminação da fonte bacteriana e fungos',
        '✓ Remoção eletrostática de pelos entranhados',
        '✓ 100% atóxico e seguro para cães e gatos'
      ],
      whatsappMsg: 'Olá! Preciso de higienização com neutralização de odores e pelos de pet no meu estofado.'
    },
    bracos: {
      img: 'assets/bracos-sofa-escuros.webp',
      badge: 'RESTAURAÇÃO PROFUNDA',
      badgeColor: '#E0F2FE',
      badgeTextColor: '#0284C7',
      title: 'Braços e Assentos Muito Mais Escuros?',
      text: 'Algumas áreas recebem contato constante de braços, pernas e suor do corpo, acumulando oleosidade natural da pele que escurece a fibra. Uma higienização profissional trata o estofado como um conjunto harmonioso, clareando e renovando o tecido por inteiro.',
      steps: [
        '✓ Escovação mecânica suave com cerdas macias',
        '✓ Dissolução profunda de gordura corporal e oleosidade',
        '✓ Extração italiana com sucção de alta potência',
        '✓ Revitalização da tonalidade original do estofado'
      ],
      whatsappMsg: 'Olá! Os braços e assentos do meu sofá estão escuros e encardidos. Gostaria de agendar uma revitalização.'
    },
    bebe: {
      img: 'assets/cadeirinha-bebe.webp',
      badge: 'SAÚDE & PROTEÇÃO DO BEBÊ',
      badgeColor: '#DCFCE7',
      badgeTextColor: '#16A34A',
      title: 'Higienização de Cadeirinha Infantil & Bebê Conforto',
      text: 'Restos de leite, bolacha e saliva criam um ambiente propício para ácaros nocivos à respiração dos pequenos. Nossa higienização para bebês utiliza flotador neutro hipoalergênico homologado pela ANVISA que não causa dermatites ou alergias.',
      steps: [
        '✓ Flotador neutro hipoalergênico e atóxico ANVISA',
        '✓ Extermínio de ácaros, fungos e bactérias',
        '✓ Secagem acelerada sem cheiro de químicos',
        '✓ Segurança e frescor para a pele delicada do bebê'
      ],
      whatsappMsg: 'Olá! Gostaria de agendar a higienização da cadeirinha infantil / bebê conforto do meu bebê.'
    },
    escritorio: {
      img: 'assets/cadeira-escritorio.webp',
      badge: 'CONFORTO ERGONÔMICO',
      badgeColor: '#F3E8FF',
      badgeTextColor: '#9333EA',
      title: 'Sua Cadeira de Escritório Merece Esse Cuidado',
      text: 'Trabalhar em um ambiente limpo aumenta o foco e previne crises respiratórias. Removemos todo o suor, poeira e ácaros acumulados no tecido acolchoado ou mesh da sua cadeira de home office ou consultório.',
      steps: [
        '✓ Higienização no local sem interromper sua rotina',
        '✓ Neutralização de odores e poeira do dia a dia',
        '✓ Secagem rápida pronta para uso em poucas horas',
        '✓ Pacotes com desconto para múltiplos postos de trabalho'
      ],
      whatsappMsg: 'Olá! Gostaria de um orçamento para higienização de cadeiras de escritório / home office.'
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const diagKey = tab.dataset.diag;
      const item = data[diagKey];
      if (!item) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Animate Transition
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = item.img;
        badge.textContent = item.badge;
        badge.style.backgroundColor = item.badgeColor;
        badge.style.color = item.badgeTextColor;
        title.textContent = item.title;
        text.innerHTML = item.text;

        stepsList.innerHTML = '';
        item.steps.forEach(st => {
          const li = document.createElement('li');
          li.textContent = st;
          stepsList.appendChild(li);
        });

        const encoded = encodeURIComponent(item.whatsappMsg);
        btn.href = `https://wa.me/5562995736083?text=${encoded}`;
        img.style.opacity = '1';
      }, 150);
    });
  });
}

/* ==========================================================================
   4. Interactive Fabric Switcher (Guia de Fibras)
   ========================================================================== */
function initFabricSwitcher() {
  const buttons = document.querySelectorAll('.fabric-btn');
  const nameEl = document.getElementById('fabric-name');
  const descEl = document.getElementById('fabric-desc');

  if (!buttons.length || !nameEl || !descEl) return;

  const fabrics = {
    linho: {
      name: 'Linho & Algodão (Fibras Naturais)',
      desc: 'Tecidos nobres de linho exigem controle milimétrico de umidade e pH neutro para evitar encolhimento e manchas amareladas causadas pela celulose. Tratamento de extração leve com secagem rápida.'
    },
    suede: {
      name: 'Suede & Camurça Amassada',
      desc: 'O queridinho dos lares brasileiros. Tratamos a fibra com escovação direcionada, soltando as sujidades profundas sem deixar marcas d’água ou desbotar o tom original.'
    },
    veludo: {
      name: 'Veludo & Tecidos Felpudos',
      desc: 'O veludo absorve muita poeira e oleosidade. Aplicamos extração potente que renova o brilho e alinha o pelo do tecido, devolvendo o toque macio e o aspecto de sofisticação.'
    },
    boucle: {
      name: 'Bouclé & Chenille (Tramas em Relevo)',
      desc: 'As tramas em relevo não podem ser escovadas com cerdas duras para não puxar fios. Usamos injeção flotadora de espuma controlada e sucção delicada.'
    },
    couro: {
      name: 'Couro Natural & Sintético',
      desc: 'O couro necessita de limpeza bactericida que não resseque a camada protetora, seguida de hidratação nobre com ativos emolientes que previnem rachaduras.'
    },
    auto: {
      name: 'Estofamento Automotivo',
      desc: 'Tecidos resistentes que sofrem com poeira da rua, suor e resíduos de alimentos. Desinfecção profunda com remoção de odores de ar-condicionado e umidade.'
    }
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.fabric;
      const f = fabrics[key];
      if (!f) return;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      nameEl.textContent = f.name;
      descEl.textContent = f.desc;
    });
  });
}

/* ==========================================================================
   5. Interactive Multi-Item Cart & Budget Calculator
   ========================================================================== */
function initMultiItemCart() {
  const rows = document.querySelectorAll('.calc-item-row');
  const cartDisplay = document.getElementById('cart-items-display');
  const discountBanner = document.getElementById('discount-banner');
  const discountText = document.getElementById('discount-text');
  const comboBadge = document.getElementById('combo-badge');
  const subtotalEl = document.getElementById('cart-subtotal');
  const rowDiscount = document.getElementById('row-discount');
  const discountEl = document.getElementById('cart-discount');
  const totalEl = document.getElementById('cart-total');
  const btnWhatsApp = document.getElementById('btn-cart-whatsapp');

  if (!rows.length || !cartDisplay || !subtotalEl || !totalEl || !btnWhatsApp) return;

  const cart = {};

  // Initialize with row data
  rows.forEach(row => {
    const id = row.dataset.id;
    const price = parseFloat(row.dataset.price);
    const name = row.dataset.name;
    const qtySpan = row.querySelector('.qty-val');
    const initialQty = parseInt(qtySpan.textContent, 10) || 0;

    cart[id] = {
      id,
      name,
      price,
      qty: initialQty,
      rowEl: row,
      qtySpan: qtySpan
    };

    const btnMinus = row.querySelector('.btn-minus');
    const btnPlus = row.querySelector('.btn-plus');

    btnPlus.addEventListener('click', () => {
      cart[id].qty += 1;
      cart[id].qtySpan.textContent = cart[id].qty;
      updateCartState();
    });

    btnMinus.addEventListener('click', () => {
      if (cart[id].qty > 0) {
        cart[id].qty -= 1;
        cart[id].qtySpan.textContent = cart[id].qty;
        updateCartState();
      }
    });
  });

  function updateCartState() {
    let totalItems = 0;
    let subtotal = 0;
    const selectedItems = [];

    for (const key in cart) {
      const item = cart[key];
      if (item.qty > 0) {
        totalItems += item.qty;
        subtotal += item.price * item.qty;
        selectedItems.push(item);
        item.rowEl.classList.add('selected-row');
      } else {
        item.rowEl.classList.remove('selected-row');
      }
    }

    // Determine Progressive Discount
    let discountPct = 0;
    let discountBadge = 'Individual';
    let bannerMsg = 'Adicione mais itens para desbloquear até 15% de desconto combo!';

    if (totalItems === 1) {
      discountPct = 0;
      discountBadge = 'Atendimento Regular';
      bannerMsg = '🎁 Adicione mais 1 item para ganhar 10% de desconto!';
    } else if (totalItems === 2) {
      discountPct = 10;
      discountBadge = 'Combo Duplo (10% OFF)';
      bannerMsg = '🎉 Você ganhou 10% de desconto! Adicione +1 para atingir 15% OFF!';
    } else if (totalItems >= 3) {
      discountPct = 15;
      discountBadge = 'Super Combo (15% OFF)';
      bannerMsg = '🔥 DESCONTO MÁXIMO ATIVADO: 15% OFF + Aplicação de Neutralizador Grátis!';
    } else {
      bannerMsg = 'Selecione ao menos 1 estofado para simular o orçamento.';
    }

    const discountValue = Math.round(subtotal * (discountPct / 100));
    const finalTotal = Math.max(0, subtotal - discountValue);

    // Render Display
    comboBadge.textContent = discountBadge;
    discountText.textContent = bannerMsg;
    subtotalEl.textContent = `R$ ${subtotal}`;

    if (discountValue > 0) {
      rowDiscount.style.display = 'flex';
      discountEl.textContent = `- R$ ${discountValue} (${discountPct}%)`;
    } else {
      rowDiscount.style.display = 'none';
    }

    totalEl.textContent = `R$ ${finalTotal}`;

    // Render Cart Preview List
    cartDisplay.innerHTML = '';
    if (selectedItems.length === 0) {
      cartDisplay.innerHTML = '<span style="font-size:0.85rem; color:#94A3B8;">Nenhum item selecionado ainda.</span>';
    } else {
      selectedItems.forEach(it => {
        const itemLine = document.createElement('div');
        itemLine.className = 'cart-item-preview';
        itemLine.innerHTML = `<span>${it.qty}x ${it.name}</span><strong>R$ ${it.price * it.qty}</strong>`;
        cartDisplay.appendChild(itemLine);
      });
    }

    // Generate WhatsApp Link
    const phone = '5562995736083';
    let itemsText = selectedItems.map(it => `• ${it.qty}x ${it.name}`).join('\n');
    if (!itemsText) itemsText = 'Nenhum item selecionado';

    const message = `Olá, equipe Brilhe Estofados! 🛋️✨

Gostaria de agendar / confirmar o orçamento que montei no site:

*Itens Selecionados:*
${itemsText}

*Subtotal:* R$ ${subtotal}
*Desconto Aplicado:* ${discountPct}% (- R$ ${discountValue})
*Investimento Estimado:* A partir de R$ ${finalTotal}

Poderiam me informar os próximos horários disponíveis para atendimento a domicílio em Anápolis?`;

    btnWhatsApp.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  // Initial Calculation
  updateCartState();
}

/* ==========================================================================
   6. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const rows = document.querySelectorAll('.faq-row');

  rows.forEach(row => {
    const btn = row.querySelector('.faq-btn');
    const panel = row.querySelector('.faq-panel');

    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isActive = row.classList.contains('active');

      rows.forEach(r => {
        r.classList.remove('active');
        const p = r.querySelector('.faq-panel');
        if (p) p.style.maxHeight = null;
      });

      if (!isActive) {
        row.classList.add('active');
        panel.style.maxHeight = `${panel.scrollHeight + 30}px`;
      }
    });
  });
}

/* ==========================================================================
   7. Floating Dual WhatsApp Hub
   ========================================================================== */
function initFloatingHub() {
  const trigger = document.getElementById('floating-trigger');
  const popover = document.getElementById('floating-popover');
  const close = document.getElementById('popover-close');

  if (!trigger || !popover || !close) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    popover.classList.toggle('active');
  });

  close.addEventListener('click', (e) => {
    e.stopPropagation();
    popover.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && e.target !== trigger) {
      popover.classList.remove('active');
    }
  });
}
