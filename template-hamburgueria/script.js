/**
 * MICKEY'S HAMBURGUERIA — PIT-DOG RAIZ GOIANO DESDE 1991
 * Core E-Commerce Logic & Cakto / WhatsApp Integration
 */

// 1. Catálogo Oficial com Mapeamento da API Cakto
const PRODUCTS = [
  {
    id: 'mickey-especial',
    name: 'Mickey Especial (X-Tudo Raiz)',
    category: 'especiais',
    badge: 'Mais Pedido',
    badgeClass: 'badge-bestseller',
    price: 36.90,
    img: 'assets/images/mickey-especial.jpg',
    description: 'Pão chapeado, 2 hambúrgueres artesanais, queijo muçarela duplo, ovo, bacon crocante, presunto, Catupiry, milho e muita batata palha fininha.',
    caktoUrl: 'https://pay.cakto.com.br/ofukudq_1228202',
    removals: ['Sem cebola', 'Sem milho', 'Sem tomate', 'Sem batata palha', 'Sem maionese'],
    extras: [
      { name: 'Bacon Crocante Extra', price: 6.00 },
      { name: 'Catupiry Legítimo', price: 5.00 },
      { name: 'Hambúrguer Artesanal Extra', price: 8.00 },
      { name: 'Ovo Chapeado Extra', price: 3.50 }
    ]
  },
  {
    id: 'mickey-cheddar-bacon',
    name: 'Mickey Cheddar Bacon Duplo',
    category: 'especiais',
    badge: 'Puro Cheddar',
    badgeClass: 'badge-tradition',
    price: 38.90,
    img: 'assets/images/mickey-cheddar-bacon.jpg',
    description: 'Pão brioche quentinho, 2 blends artesanais de 150g, piscina de cheddar cremoso, tiras generosas de bacon tostado e cebola na chapa.',
    caktoUrl: 'https://pay.cakto.com.br/et4ugwu_1228203',
    removals: ['Sem cebola', 'Sem molho cheddar', 'Sem batata palha'],
    extras: [
      { name: 'Bacon Crocante Extra', price: 6.00 },
      { name: 'Cheddar Cremoso Extra', price: 5.00 },
      { name: 'Hambúrguer Extra', price: 8.00 }
    ]
  },
  {
    id: 'combo-mickey-raiz',
    name: 'Combo Mickey Raiz (Burger + Fritas + Refri)',
    category: 'combos',
    badge: 'Combo Completo',
    badgeClass: 'badge-combo',
    price: 49.90,
    img: 'assets/images/pitdog-combo-heinz.jpg',
    description: '1 Mickey Burguer Especial + Porção generosa de Batata Frita crocante com páprica + Refrigerante lata 350ml gelado + Maionese Heinz da casa.',
    caktoUrl: 'https://pay.cakto.com.br/gbxnn8o_1228206',
    removals: ['Sem cebola', 'Sem milho'],
    extras: [
      { name: 'Trocar por Suco Natural', price: 3.00 },
      { name: 'Bacon nas Fritas', price: 5.00 },
      { name: 'Cheddar nas Fritas', price: 5.00 }
    ]
  },
  {
    id: 'mickey-frango-catupiry',
    name: 'Mickey Frango Especial Catupiry',
    category: 'especiais',
    badge: 'Favorito',
    badgeClass: 'badge-tradition',
    price: 32.90,
    img: 'assets/images/mickey-frango-catupiry.jpg',
    description: 'Frango desfiado temperado na chapa com queijo muçarela derretido, Catupiry original, bacon crocante, ovo caipira, milho e batata palha.',
    caktoUrl: 'https://pay.cakto.com.br/5jj2qym_1228205',
    removals: ['Sem milho', 'Sem tomate', 'Sem batata palha'],
    extras: [
      { name: 'Catupiry Extra', price: 5.00 },
      { name: 'Bacon em Cubos Extra', price: 6.00 },
      { name: 'Queijo Muçarela Extra', price: 4.50 }
    ]
  },
  {
    id: 'mickey-smash-classico',
    name: 'Mickey Clássico Smash Pit-Dog',
    category: 'classicos',
    badge: 'Desde 1991',
    badgeClass: 'badge-tradition',
    price: 28.90,
    img: 'assets/images/mickey-especial.jpg',
    description: 'Pão macio prensado na manteiga de garrafa, smash burger suculento, queijo derretido, presunto, alface, tomate fresco, milho e batata palha.',
    caktoUrl: 'https://pay.cakto.com.br/9cn2wew_1228204',
    removals: ['Sem milho', 'Sem cebola', 'Sem tomate'],
    extras: [
      { name: 'Ovo Adicional', price: 3.50 },
      { name: 'Hambúrguer Extra', price: 7.00 },
      { name: 'Queijo Duplo', price: 4.50 }
    ]
  },
  {
    id: 'batata-frita-mickey',
    name: 'Batata Frita Rústica Crocante',
    category: 'acompanhamentos',
    badge: 'Petisco',
    badgeClass: 'badge-combo',
    price: 19.90,
    img: 'assets/images/pitdog-combo-heinz.jpg',
    description: 'Porção de 250g de batata palito crocante dourada na hora, temperada com sal fino e páprica, servida com maionese especial da casa.',
    caktoUrl: 'https://pay.cakto.com.br/ysuroa4_1228207',
    removals: [],
    extras: [
      { name: 'Bacon em Tiras por cima', price: 6.00 },
      { name: 'Cheddar Cremoso derretido', price: 5.00 }
    ]
  }
];

// Base Checkout do Carrinho no Cakto
const CAKTO_CART_BASE_URL = 'https://pay.cakto.com.br/ysuroa4_1228207';
const WHATSAPP_PHONE = '5562991811354';

// 2. Estado Global do Carrinho
let cart = JSON.parse(localStorage.getItem('mickeys_cart')) || [];
let activeDeliveryType = 'delivery'; // 'delivery' ou 'pickup'
let selectedDeliveryFee = 5.00;
let appliedDiscount = 0;
let currentCustomizingProduct = null;

// Taxas de Entrega por Bairro em Goiânia (Perto da Av. T-63 / Av. Circular)
const DELIVERY_FEES = {
  'pedro_ludovico': { name: 'Setor Pedro Ludovico (Local)', fee: 5.00 },
  'bueno': { name: 'Setor Bueno', fee: 7.00 },
  'marista': { name: 'Setor Marista', fee: 7.00 },
  'bela_vista': { name: 'Setor Bela Vista', fee: 6.00 },
  'sul': { name: 'Setor Sul', fee: 7.00 },
  'jardim_america': { name: 'Jardim América', fee: 8.00 },
  'jardim_goias': { name: 'Jardim Goiás', fee: 8.00 },
  'oeste': { name: 'Setor Oeste', fee: 9.00 },
  'outro': { name: 'Outro Bairro em Goiânia', fee: 10.00 }
};

// 3. Inicialização e Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('todos');
  updateCartUI();
  initStoreStatus();
  setupEventListeners();
});

// 4. Renderização do Cardápio
function renderProducts(categoryFilter = 'todos') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = categoryFilter === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === categoryFilter);

  grid.innerHTML = filtered.map(prod => `
    <article class="product-card" data-id="${prod.id}">
      <div class="product-img-wrap">
        <img src="${prod.img}" alt="${prod.name}" class="product-img" loading="lazy">
        <span class="product-badge ${prod.badgeClass}">${prod.badge}</span>
      </div>
      <div class="product-content">
        <h3 class="product-title">${prod.name}</h3>
        <p class="product-desc">${prod.description}</p>
        <div class="product-meta">
          <div class="product-price-block">
            <span class="price-currency">A partir de</span>
            <span class="price-value">R$ ${prod.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <span class="cakto-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Pix Instantâneo
          </span>
        </div>
        <div class="product-card-actions">
          <button class="btn-card-cart" onclick="addToCartQuick('${prod.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            Adicionar
          </button>
          <button class="btn-card-cakto" onclick="buyNowDirect('${prod.id}')">
            Comprar Agora
          </button>
          <button class="btn-customize-link" onclick="openCustomizeModal('${prod.id}')">
            ⚙️ Personalizar adicionais / retirar itens
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// 5. Compra Rápida Direta no Cakto (Single Item Checkout com UTM)
function buyNowDirect(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const utmParam = `?utm_source=ecommerce_mickeys&utm_medium=buy_now_direct&utm_campaign=${prod.id}`;
  window.open(prod.caktoUrl + utmParam, '_blank');
}

// 6. Adição Rápida ao Carrinho
function addToCartQuick(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existingIndex = cart.findIndex(item => 
    item.id === productId && (!item.customizations || item.customizations.length === 0)
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      basePrice: prod.price,
      price: prod.price,
      img: prod.img,
      quantity: 1,
      customizations: [],
      notes: ''
    });
  }

  saveCart();
  updateCartUI();
  showToast(`🍔 ${prod.name} adicionado ao pedido!`);
  openCartDrawer();
}

// 7. Modal de Personalização
function openCustomizeModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  currentCustomizingProduct = prod;

  document.getElementById('modal-img').src = prod.img;
  document.getElementById('modal-title').textContent = prod.name;
  document.getElementById('modal-desc').textContent = prod.description;
  document.getElementById('modal-base-price').textContent = `R$ ${prod.price.toFixed(2).replace('.', ',')}`;

  // Removals
  const removalsContainer = document.getElementById('modal-removals-list');
  if (prod.removals && prod.removals.length > 0) {
    removalsContainer.innerHTML = prod.removals.map((r, i) => `
      <label class="custom-option-label">
        <span>${r}</span>
        <input type="checkbox" name="removal" value="${r}">
      </label>
    `).join('');
    document.getElementById('removals-group').style.display = 'block';
  } else {
    document.getElementById('removals-group').style.display = 'none';
  }

  // Extras
  const extrasContainer = document.getElementById('modal-extras-list');
  if (prod.extras && prod.extras.length > 0) {
    extrasContainer.innerHTML = prod.extras.map((extra, i) => `
      <label class="custom-option-label">
        <span>+ ${extra.name}</span>
        <div>
          <span style="color: var(--color-primary); font-weight: 700; margin-right: 0.5rem;">+ R$ ${extra.price.toFixed(2).replace('.', ',')}</span>
          <input type="checkbox" name="extra" value="${extra.name}" data-price="${extra.price}" onchange="recalcModalTotal()">
        </div>
      </label>
    `).join('');
    document.getElementById('extras-group').style.display = 'block';
  } else {
    document.getElementById('extras-group').style.display = 'none';
  }

  document.getElementById('modal-notes').value = '';
  recalcModalTotal();

  const backdrop = document.getElementById('customize-modal');
  backdrop.classList.add('open');
}

function closeCustomizeModal() {
  const backdrop = document.getElementById('customize-modal');
  backdrop.classList.remove('open');
  currentCustomizingProduct = null;
}

function recalcModalTotal() {
  if (!currentCustomizingProduct) return;
  let total = currentCustomizingProduct.price;

  const extraCheckboxes = document.querySelectorAll('#modal-extras-list input[type="checkbox"]:checked');
  extraCheckboxes.forEach(cb => {
    total += parseFloat(cb.dataset.price || 0);
  });

  document.getElementById('modal-total-val').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function confirmCustomization() {
  if (!currentCustomizingProduct) return;

  const removals = [];
  document.querySelectorAll('#modal-removals-list input[type="checkbox"]:checked').forEach(cb => {
    removals.push(cb.value);
  });

  const extras = [];
  let extraCost = 0;
  document.querySelectorAll('#modal-extras-list input[type="checkbox"]:checked').forEach(cb => {
    extras.push(cb.value);
    extraCost += parseFloat(cb.dataset.price || 0);
  });

  const notes = document.getElementById('modal-notes').value.trim();

  const finalItemPrice = currentCustomizingProduct.price + extraCost;
  const customizationSummary = [
    ...removals.map(r => `❌ ${r}`),
    ...extras.map(e => `➕ ${e}`)
  ];

  cart.push({
    id: currentCustomizingProduct.id,
    name: currentCustomizingProduct.name,
    basePrice: currentCustomizingProduct.price,
    price: finalItemPrice,
    img: currentCustomizingProduct.img,
    quantity: 1,
    customizations: customizationSummary,
    notes: notes
  });

  saveCart();
  updateCartUI();
  closeCustomizeModal();
  showToast(`🍔 ${currentCustomizingProduct.name} personalizado adicionado!`);
  openCartDrawer();
}

// 8. Gerenciamento do Carrinho
function updateCartUI() {
  const cartBody = document.getElementById('cart-items-body');
  const cartCountBadges = document.querySelectorAll('.cart-count');
  const subtotalEl = document.getElementById('cart-subtotal');
  const deliveryFeeEl = document.getElementById('cart-delivery-fee');
  const discountRowEl = document.getElementById('cart-discount-row');
  const discountEl = document.getElementById('cart-discount-val');
  const totalEl = document.getElementById('cart-total-val');

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartCountBadges.forEach(b => b.textContent = totalItems);

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🍔</div>
        <h4>Seu carrinho está vazio</h4>
        <p>Adicione um dos nossos deliciosos hambúrgueres pit-dog para começar seu pedido!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = 'R$ 0,00';
    if (deliveryFeeEl) deliveryFeeEl.textContent = 'R$ 0,00';
    if (totalEl) totalEl.textContent = 'R$ 0,00';
    return;
  }

  cartBody.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <div>
          <h4 class="cart-item-title">${item.name}</h4>
          ${item.customizations && item.customizations.length > 0 
            ? `<div class="cart-item-customizations">${item.customizations.join(' • ')}</div>` 
            : ''}
          ${item.notes ? `<div class="cart-item-customizations" style="color: var(--color-primary);">Obs: "${item.notes}"</div>` : ''}
        </div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
          <div class="quantity-controls">
            <button class="btn-qty" onclick="changeItemQty(${index}, -1)">-</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="btn-qty" onclick="changeItemQty(${index}, 1)">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Totais
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const currentFee = activeDeliveryType === 'delivery' ? selectedDeliveryFee : 0;
  const total = Math.max(0, subtotal + currentFee - appliedDiscount);

  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (deliveryFeeEl) deliveryFeeEl.textContent = activeDeliveryType === 'delivery' 
    ? `R$ ${currentFee.toFixed(2).replace('.', ',')}` 
    : 'Grátis (Retirada)';

  if (appliedDiscount > 0) {
    if (discountRowEl) discountRowEl.style.display = 'flex';
    if (discountEl) discountEl.textContent = `- R$ ${appliedDiscount.toFixed(2).replace('.', ',')}`;
  } else {
    if (discountRowEl) discountRowEl.style.display = 'none';
  }

  if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function changeItemQty(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('mickeys_cart', JSON.stringify(cart));
}

function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-backdrop').classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-backdrop').classList.remove('open');
}

// 9. Seletor de Tipo de Entrega e Bairro
function setDeliveryType(type) {
  activeDeliveryType = type;
  document.querySelectorAll('.delivery-type-tabs .btn-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.type === type);
  });

  const neighborhoodBox = document.getElementById('neighborhood-wrapper');
  if (neighborhoodBox) {
    neighborhoodBox.style.display = type === 'delivery' ? 'block' : 'none';
  }

  const addressInputWrapper = document.getElementById('address-input-wrapper');
  if (addressInputWrapper) {
    addressInputWrapper.style.display = type === 'delivery' ? 'block' : 'none';
  }

  updateCartUI();
}

function onNeighborhoodChange(select) {
  const val = select.value;
  if (DELIVERY_FEES[val]) {
    selectedDeliveryFee = DELIVERY_FEES[val].fee;
  }
  updateCartUI();
}

// 10. Cupom de Desconto
function applyCoupon() {
  const codeInput = document.getElementById('coupon-input');
  if (!codeInput) return;
  const code = codeInput.value.trim().toUpperCase();

  if (code === 'RAIZ10') {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    appliedDiscount = subtotal * 0.10;
    showToast('🎉 Cupom RAIZ10 aplicado! 10% de desconto.');
  } else if (code === 'MICKEY1991') {
    appliedDiscount = 5.00;
    showToast('🎉 Cupom MICKEY1991 aplicado! R$ 5 de desconto.');
  } else {
    showToast('⚠️ Cupom inválido ou expirado.');
  }
  updateCartUI();
}

// 11. CHECKOUT CAKTO (Gateway Oficial)
function checkoutCakto() {
  if (cart.length === 0) {
    showToast('⚠️ Adicione itens ao carrinho primeiro!');
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const currentFee = activeDeliveryType === 'delivery' ? selectedDeliveryFee : 0;
  const total = Math.max(0, subtotal + currentFee - appliedDiscount);

  // Resumo do pedido para rastreamento no Cakto
  const orderItemsSummary = cart.map(item => 
    `${item.quantity}x ${item.name} (${item.customizations ? item.customizations.join(',') : ''})`
  ).join(' | ');

  const address = document.getElementById('client-address')?.value || 'Não informado';
  const neighborhood = document.getElementById('neighborhood-select')?.selectedOptions[0]?.text || 'Goiânia';

  // Se o pedido tiver apenas 1 item único e sem adicionais que alterem preço, podemos usar o checkout específico dele
  let targetCheckoutUrl = CAKTO_CART_BASE_URL;
  if (cart.length === 1 && cart[0].quantity === 1 && (!cart[0].customizations || cart[0].customizations.length === 0)) {
    const matchedProd = PRODUCTS.find(p => p.id === cart[0].id);
    if (matchedProd && matchedProd.caktoUrl) {
      targetCheckoutUrl = matchedProd.caktoUrl;
    }
  }

  // Parâmetros de UTM para o painel do lojista no Cakto registrar cada detalhe
  const utmUrl = `${targetCheckoutUrl}?utm_source=ecommerce&utm_medium=${activeDeliveryType}&utm_campaign=pedido_mickeys&utm_content=${encodeURIComponent(orderItemsSummary.substring(0, 100))}&utm_term=${encodeURIComponent(neighborhood)}`;

  showToast('🔒 Redirecionando para o Checkout Seguro Cakto...');
  setTimeout(() => {
    window.open(utmUrl, '_blank');
  }, 500);
}

// 12. CHECKOUT WHATSAPP (Direto com o Pit-Dog)
function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast('⚠️ Adicione itens ao carrinho primeiro!');
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const currentFee = activeDeliveryType === 'delivery' ? selectedDeliveryFee : 0;
  const total = Math.max(0, subtotal + currentFee - appliedDiscount);

  const clientName = document.getElementById('client-name')?.value.trim() || 'Cliente';
  const clientAddress = document.getElementById('client-address')?.value.trim() || '';
  const neighborhood = document.getElementById('neighborhood-select')?.selectedOptions[0]?.text || 'Goiânia';

  let text = `🍔 *NOVO PEDIDO - MICKEY'S HAMBURGUERIA* 🍔\n`;
  text += `-----------------------------------------\n`;
  text += `👤 *Nome:* ${clientName}\n`;
  text += `🛵 *Tipo:* ${activeDeliveryType === 'delivery' ? 'Entrega em Casa' : 'Retirada no Balcão'}\n`;
  if (activeDeliveryType === 'delivery') {
    text += `📍 *Bairro:* ${neighborhood}\n`;
    text += `🏠 *Endereço:* ${clientAddress || 'A combinar'}\n`;
  }
  text += `-----------------------------------------\n`;
  text += `📋 *ITENS DO PEDIDO:*\n\n`;

  cart.forEach((item, i) => {
    text += `${i + 1}. *${item.quantity}x ${item.name}* - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    if (item.customizations && item.customizations.length > 0) {
      text += `   ${item.customizations.join('\n   ')}\n`;
    }
    if (item.notes) {
      text += `   *Obs:* ${item.notes}\n`;
    }
    text += `\n`;
  });

  text += `-----------------------------------------\n`;
  text += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
  if (activeDeliveryType === 'delivery') {
    text += `Taxa de Entrega: R$ ${currentFee.toFixed(2).replace('.', ',')}\n`;
  }
  if (appliedDiscount > 0) {
    text += `Desconto: - R$ ${appliedDiscount.toFixed(2).replace('.', ',')}\n`;
  }
  text += `*TOTAL DO PEDIDO: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
  text += `-----------------------------------------\n`;
  text += `💳 *Forma de Pagamento:* Pix Instantâneo (Cakto) / Cartão / Dinheiro\n`;
  text += `🚀 *Enviado pelo site oficial:* Mickey's Pit-Dog 1991`;

  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

// 13. Toast Notification
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// 14. Status de Abertura da Loja
function initStoreStatus() {
  const badge = document.getElementById('store-status-badge');
  if (!badge) return;

  const now = new Date();
  const hours = now.getHours();
  // Pit-Dog tradicionalmente funciona das 19h até altas horas da madrugada (04h)
  const isOpen = (hours >= 19 || hours < 4);

  if (isOpen) {
    badge.innerHTML = '<span class="status-dot"></span> ABERTO AGORA (Abre às 19h)';
    badge.style.background = 'rgba(34, 197, 94, 0.12)';
    badge.style.color = '#4ADE80';
    badge.style.borderColor = 'rgba(34, 197, 94, 0.3)';
  } else {
    badge.innerHTML = '<span class="status-dot" style="background: #F59E0B; box-shadow: 0 0 8px #F59E0B;"></span> Abre hoje às 19:00';
    badge.style.background = 'rgba(245, 158, 11, 0.12)';
    badge.style.color = '#FBBF24';
    badge.style.borderColor = 'rgba(245, 158, 11, 0.3)';
  }
}

// 15. Setup Event Listeners
function setupEventListeners() {
  // Category tabs
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderProducts(e.target.dataset.category);
    });
  });

  // Mobile menu toggle if present
  const mobileToggle = document.querySelector('.mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const menu = document.querySelector('.nav-menu');
      if (menu) menu.classList.toggle('open');
    });
  }
}
