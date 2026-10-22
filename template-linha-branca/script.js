/**
 * TEMPLATE LINHA BRANCA - JAVASCRIPT REUTILIZÁVEL
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.style.display = (navMenu.style.display === 'flex') ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '80px';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = '#ffffff';
      navMenu.style.padding = '20px';
      navMenu.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
    });
  }

  // 2. Interação com Pills do Simulador
  const pillGroups = document.querySelectorAll('.pill-group');
  pillGroups.forEach(group => {
    const buttons = group.querySelectorAll('.pill-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  // 3. Envio do Diagnóstico via WhatsApp
  const btnEnviar = document.getElementById('btnEnviarDiagnostico');
  if (btnEnviar) {
    btnEnviar.addEventListener('click', () => {
      const getVal = (grp) => {
        const el = document.querySelector(`.pill-group[data-group="${grp}"] .pill-btn.active`);
        return el ? el.getAttribute('data-val') : '';
      };

      const aparelho = getVal('aparelho');
      const marca = getVal('marca');
      const defeito = getVal('defeito');
      const phone = btnEnviar.getAttribute('data-phone') || '5562982248282';

      const msg = `Olá! Gostaria de um orçamento em domicílio:

🛠️ Aparelho: ${aparelho}
🏷️ Marca: ${marca}
⚠️ Defeito: ${defeito}

Poderiam me informar a disponibilidade de um técnico?`;

      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
});
