/* ==========================================================================
   Cleytinho Imóveis - Interactive Controller & Property Engine
   Vanilla JS - Ultra Fast, Responsive & High Converting
   ========================================================================== */

// Configurações Centrais do Corretor (Fácil de alterar para qualquer cliente)
const REALTOR_CONFIG = {
  name: "Cleytinho Imóveis",
  phone: "5511999998888",
  phoneDisplay: "(11) 99999-8888",
  creci: "184.290-F",
  interestRateAnnual: 0.095 // 9.5% a.a. taxa média mercado
};

// Banco de Dados Dinâmico de Imóveis Selecionados
const PROPERTIES = [
  {
    id: 1,
    title: "Mansão Contemporânea Reserva Tamboré",
    category: "casa",
    intent: "comprar",
    region: "alphaville",
    price: 3850000,
    priceDisplay: "R$ 3.850.000",
    priceTier: "2m-5m",
    location: "Alphaville / Tamboré, SP",
    area: 480,
    bedrooms: 4,
    suites: 4,
    parking: 4,
    badge: "Exclusivo",
    badgeClass: "exclusivo",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Belíssima residência moderna com pé-direito duplo de 6 metros, energia solar instalada, espaço gourmet integrado à piscina de borda infinita com vista para a mata nativa e acabamento em mármore travertino."
  },
  {
    id: 2,
    title: "Apartamento Luxo Jardim Europa",
    category: "apartamento",
    intent: "comprar",
    region: "jardins",
    price: 2450000,
    priceDisplay: "R$ 2.450.000",
    priceTier: "2m-5m",
    location: "Jardins & Moema, SP",
    area: 195,
    bedrooms: 3,
    suites: 3,
    parking: 3,
    badge: "Oportunidade",
    badgeClass: "oportunidade",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    description: "Planta ampla com living integrado, varanda com fechamento em vidro retrátil, marcenaria planejada Ornare, automação completa de iluminação e som, a 3 quadras do Parque do Povo."
  },
  {
    id: 3,
    title: "Cobertura Duplex Penthouse Faria Lima",
    category: "cobertura",
    intent: "comprar",
    region: "itaim",
    price: 6900000,
    priceDisplay: "R$ 6.900.000",
    priceTier: "5m+",
    location: "Itaim Bibi & Vila Olímpia, SP",
    area: 360,
    bedrooms: 4,
    suites: 4,
    parking: 5,
    badge: "Exclusivo",
    badgeClass: "exclusivo",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    description: "Cobertura espetacular com piscina privativa aquecida no rooftop, deck em madeira nobre, churrasqueira gourmet e vista panorâmica de 360º de São Paulo. Edifício com heliponto e segurança armada."
  },
  {
    id: 4,
    title: "Residencial Origami Alto de Pinheiros",
    category: "lancamento",
    intent: "lancamento",
    region: "perdizes",
    price: 980000,
    priceDisplay: "R$ 980.000",
    priceTier: "500k-1m",
    location: "Perdizes & Pinheiros, SP",
    area: 88,
    bedrooms: 2,
    suites: 2,
    parking: 2,
    badge: "Lançamento",
    badgeClass: "lancamento",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80",
    description: "Projeto assinado por renomado escritório de arquitetura internacional. Lazer no rooftop com sky pool, academia equipada pela Life Fitness, coworking e ponto de recarga veicular individual."
  },
  {
    id: 5,
    title: "Casa Térrea Villa Serena",
    category: "casa",
    intent: "comprar",
    region: "alphaville",
    price: 1850000,
    priceDisplay: "R$ 1.850.000",
    priceTier: "1m-2m",
    location: "Alphaville, SP",
    area: 280,
    bedrooms: 3,
    suites: 3,
    parking: 3,
    badge: "Pronto p/ Morar",
    badgeClass: "oportunidade",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    description: "Conforto em pavimento único sem escadas, integração total de ambientes, piscina com prainha, aquecimento solar, esquadrias pretas em alumínio e condomínio com segurança biométrica 24 horas."
  },
  {
    id: 6,
    title: "Apartamento Design Moema Pássaros",
    category: "apartamento",
    intent: "comprar",
    region: "jardins",
    price: 1390000,
    priceDisplay: "R$ 1.390.000",
    priceTier: "1m-2m",
    location: "Jardins & Moema, SP",
    area: 115,
    bedrooms: 3,
    suites: 1,
    parking: 2,
    badge: "Destaque",
    badgeClass: "exclusivo",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    description: "Fora da rota de aviões, a 500 metros do Shopping Ibirapuera e metrô Moema. Sala ampla em 2 ambientes, varanda gourmet fechada, depósito privativo no subsolo e lazer completo de clube."
  }
];

// Estado da Aplicação
let currentFilter = "todos";
let currentIntent = "comprar";

document.addEventListener("DOMContentLoaded", () => {
  renderProperties(PROPERTIES);
  initSearch();
  initSimulator();
  initFaqAccordion();
  initMobileMenu();
  initLeadForm();
  initModal();
});

// Renderização dos Cards de Imóveis
function renderProperties(list) {
  const container = document.getElementById("propertiesContainer");
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border-radius: 12px; border: 1px dashed #cbd5e1;">
        <i class="fa-solid fa-house-chimney-crack" style="font-size: 2.5rem; color: #94a3b8; margin-bottom: 12px;"></i>
        <h3 style="color: #0b132b; margin-bottom: 8px;">Nenhum imóvel encontrado para este filtro</h3>
        <p style="color: #64748b; margin-bottom: 16px;">Temos imóveis exclusivos off-market que não estão no site público. Fale diretamente comigo no WhatsApp!</p>
        <a href="https://wa.me/${REALTOR_CONFIG.phone}?text=Ol%C3%A1%20Cleytinho!%20Procuro%20um%20im%C3%B3vel%20espec%C3%ADfico%20e%20gostaria%20de%20consultar%20seu%20cat%C3%A1logo%20privado." target="_blank" class="btn btn-emerald">
          <i class="fa-brands fa-whatsapp"></i> Consultar Catálogo Off-Market
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    const waText = encodeURIComponent(`Olá Cleytinho! Tenho interesse no imóvel "${item.title}" (${item.priceDisplay}) em ${item.location}. Poderia me passar mais fotos e detalhes?`);
    return `
      <div class="property-card" data-id="${item.id}">
        <div class="property-thumb">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <span class="prop-badge ${item.badgeClass}">${item.badge}</span>
          <span class="prop-location-badge"><i class="fa-solid fa-location-dot"></i> ${item.location}</span>
        </div>
        <div class="property-body">
          <span class="prop-category">${formatCategory(item.category)}</span>
          <h3 class="prop-title">${item.title}</h3>
          
          <div class="prop-features">
            <div class="feature-box">
              <i class="fa-solid fa-ruler-combined"></i>
              <span>${item.area} m²</span>
            </div>
            <div class="feature-box">
              <i class="fa-solid fa-bed"></i>
              <span>${item.bedrooms} Dorms</span>
            </div>
            <div class="feature-box">
              <i class="fa-solid fa-bath"></i>
              <span>${item.suites} Suítes</span>
            </div>
            <div class="feature-box">
              <i class="fa-solid fa-car"></i>
              <span>${item.parking} Vagas</span>
            </div>
          </div>

          <div class="property-footer">
            <div class="price-tag">
              <span class="price-label">Valor de Venda</span>
              <span class="price-val">${item.priceDisplay}</span>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-outline-primary btn-sm btn-quick-view" data-id="${item.id}" title="Ver Detalhes">
                <i class="fa-regular fa-eye"></i>
              </button>
              <a href="https://wa.me/${REALTOR_CONFIG.phone}?text=${waText}" target="_blank" class="btn-card-wa" title="Tenho Interesse">
                <i class="fa-brands fa-whatsapp"></i> Visita
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach quick view event
  container.querySelectorAll(".btn-quick-view").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      openPropertyModal(id);
    });
  });
}

function formatCategory(cat) {
  const map = {
    casa: "Casa em Condomínio",
    apartamento: "Apartamento Alto Padrão",
    cobertura: "Cobertura Penthouse",
    lancamento: "Lançamento Exclusivo",
    terreno: "Terreno em Condomínio"
  };
  return map[cat] || "Residencial";
}

// Inicialização dos Filtros e Barra de Pesquisa
function initSearch() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentIntent = btn.getAttribute("data-intent");
    });
  });

  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-category");

      if (currentFilter === "todos") {
        renderProperties(PROPERTIES);
      } else {
        const filtered = PROPERTIES.filter(p => p.category === currentFilter);
        renderProperties(filtered);
      }
    });
  });

  const btnSearch = document.getElementById("btnSearchProperties");
  if (btnSearch) {
    btnSearch.addEventListener("click", () => {
      const type = document.getElementById("filterType").value;
      const location = document.getElementById("filterLocation").value;
      const price = document.getElementById("filterPrice").value;

      let results = PROPERTIES;

      if (type !== "todos") {
        results = results.filter(p => p.category === type);
      }
      if (location !== "todas") {
        results = results.filter(p => p.region === location);
      }
      if (price !== "todos") {
        results = results.filter(p => p.priceTier === price);
      }

      renderProperties(results);

      // Scroll suave até a grade de imóveis
      const imoveisSec = document.getElementById("imoveis");
      if (imoveisSec) {
        imoveisSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

// Simulador de Financiamento Habitacional (Sistema SAC aproximado)
function initSimulator() {
  const propRange = document.getElementById("propertyValueRange");
  const downRange = document.getElementById("downPaymentRange");
  const termRange = document.getElementById("termMonthsRange");

  const dispProp = document.getElementById("displayPropValue");
  const dispDown = document.getElementById("displayDownPayment");
  const dispTerm = document.getElementById("displayTermMonths");

  const resFinanced = document.getElementById("resFinanced");
  const resInstallment = document.getElementById("resInstallment");
  const btnSendSimulation = document.getElementById("btnSendSimulation");

  function calculate() {
    let propVal = parseFloat(propRange.value);
    let downVal = parseFloat(downRange.value);
    const months = parseInt(termRange.value);

    // Entrada mínima de 20%
    const minDown = propVal * 0.20;
    downRange.min = minDown;
    downRange.max = propVal * 0.85;

    if (downVal < minDown) {
      downVal = minDown;
      downRange.value = minDown;
    }

    const financed = propVal - downVal;

    // Cálculo Parcela SAC: Amortização + Juros 1ª parcela
    const monthlyRate = REALTOR_CONFIG.interestRateAnnual / 12;
    const amortization = financed / months;
    const firstMonthInterest = financed * monthlyRate;
    const firstInstallment = amortization + firstMonthInterest;

    dispProp.textContent = formatCurrency(propVal);
    dispDown.textContent = formatCurrency(downVal);
    dispTerm.textContent = `${months} meses (${(months / 12).toFixed(0)} anos)`;

    resFinanced.textContent = formatCurrency(financed);
    resInstallment.textContent = `${formatCurrency(firstInstallment)}/mês`;
  }

  propRange.addEventListener("input", calculate);
  downRange.addEventListener("input", calculate);
  termRange.addEventListener("input", calculate);

  // Executa o cálculo inicial
  calculate();

  btnSendSimulation.addEventListener("click", () => {
    const propVal = formatCurrency(parseFloat(propRange.value));
    const downVal = formatCurrency(parseFloat(downRange.value));
    const term = `${termRange.value} meses`;
    const financed = resFinanced.textContent;
    const installment = resInstallment.textContent;

    const message = `Olá Cleytinho! Fiz uma simulação de financiamento no site e gostaria da sua ajuda para aprovar meu crédito:\n\n` +
      `🏠 Valor do Imóvel: ${propVal}\n` +
      `💵 Entrada Disponível: ${downVal}\n` +
      `🏦 Financiamento: ${financed}\n` +
      `📅 Prazo: ${term}\n` +
      `📈 Parcela Estimada: ${installment}\n\n` +
      `Podemos verificar as melhores taxas com a Caixa, Itaú ou Santander?`;

    window.open(`https://wa.me/${REALTOR_CONFIG.phone}?text=${encodeURIComponent(message)}`, "_blank");
  });
}

function formatCurrency(val) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(val);
}

// Acordeão FAQ
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      items.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// Menu Mobile
function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });

    menu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
      });
    });
  }
}

// Formulário de Lead / Agendamento de Visita VIP
function initLeadForm() {
  const form = document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("leadName").value.trim();
    const phone = document.getElementById("leadPhone").value.trim();
    const objective = document.getElementById("leadObjective").value;
    const date = document.getElementById("leadDate").value;
    const notes = document.getElementById("leadNotes").value.trim();

    let text = `Olá Cleytinho! Solicitei um atendimento exclusivo pelo site:\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `🎯 *Interesse:* ${objective}\n`;

    if (date) {
      const formattedDate = date.split("-").reverse().join("/");
      text += `📅 *Melhor data para visita:* ${formattedDate}\n`;
    }
    if (notes) {
      text += `📝 *Observações:* ${notes}\n`;
    }

    text += `\nAguardando seu retorno para alinharmos os próximos passos!`;

    window.open(`https://wa.me/${REALTOR_CONFIG.phone}?text=${encodeURIComponent(text)}`, "_blank");
  });
}

// Modal de Detalhes Rápidos do Imóvel
function initModal() {
  const modal = document.getElementById("propertyModal");
  const close = document.getElementById("modalClose");

  if (!modal || !close) return;

  close.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

function openPropertyModal(id) {
  const prop = PROPERTIES.find(p => p.id === id);
  if (!prop) return;

  const modal = document.getElementById("propertyModal");
  const body = document.getElementById("modalBody");

  const waText = encodeURIComponent(`Olá Cleytinho! Gostaria de agendar uma visita privativa no imóvel "${prop.title}" (${prop.priceDisplay}) em ${prop.location}.`);

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr; gap: 20px; max-height: 80vh; overflow-y: auto; padding: 24px;">
      <div style="border-radius: 12px; overflow: hidden; height: 280px;">
        <img src="${prop.image}" alt="${prop.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div>
        <span style="font-size: 0.8rem; font-weight: 700; color: #b8972e; text-transform: uppercase;">${formatCategory(prop.category)} • ${prop.location}</span>
        <h2 style="font-family: 'Playfair Display', serif; font-size: 1.6rem; color: #0b132b; margin: 6px 0 12px;">${prop.title}</h2>
        <p style="color: #64748b; font-size: 0.95rem; line-height: 1.7; margin-bottom: 20px;">${prop.description}</p>
        
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; background: #f8fafc; padding: 14px; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 24px; text-align: center;">
          <div><strong style="color: #0b132b; font-size: 1.1rem; display: block;">${prop.area} m²</strong><span style="color: #64748b; font-size: 0.78rem;">Área Útil</span></div>
          <div><strong style="color: #0b132b; font-size: 1.1rem; display: block;">${prop.bedrooms}</strong><span style="color: #64748b; font-size: 0.78rem;">Quartos</span></div>
          <div><strong style="color: #0b132b; font-size: 1.1rem; display: block;">${prop.suites}</strong><span style="color: #64748b; font-size: 0.78rem;">Suítes</span></div>
          <div><strong style="color: #0b132b; font-size: 1.1rem; display: block;">${prop.parking}</strong><span style="color: #64748b; font-size: 0.78rem;">Vagas</span></div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <span style="font-size: 0.8rem; color: #94a3b8; text-transform: uppercase;">Investimento</span>
            <div style="font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 700; color: #059669;">${prop.priceDisplay}</div>
          </div>
          <a href="https://wa.me/${REALTOR_CONFIG.phone}?text=${waText}" target="_blank" class="btn btn-emerald btn-lg">
            <i class="fa-brands fa-whatsapp"></i> Agendar Visita Privativa
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}
