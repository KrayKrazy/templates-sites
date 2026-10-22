# 🏋️‍♂️ Guia Definitivo: Como Criar um Site de Alta Conversão para Box de CrossFit & Treinamento

Este manual documenta a arquitetura, design system, componentes interativos, estratégias de conversão e rotinas de deploy utilizadas no desenvolvimento do site oficial da **Thunder Cross CF**. Use este documento como template mestre para criar sites idênticos para outros boxes, academias ou estúdios funcionais.

---

## 📑 Índice
1. [Visão Geral & Objetivos de Negócio](#1-visão-geral--objetivos-de-negócio)
2. [Estrutura de Pastas e Arquivos](#2-estrutura-de-pastas-e-arquivos)
3. [Design System & Identidade Visual](#3-design-system--identidade-visual)
4. [Anatomia das Seções (Passo a Passo)](#4-anatomia-das-seções-passo-a-passo)
5. [Scripts e Componentes Interativos](#5-scripts-e-componentes-interativos)
6. [Engenharia de Conversão para WhatsApp](#6-engenharia-de-conversão-para-whatsapp)
7. [Deploy no Netlify & Cuidados no Windows](#7-deploy-no-netlify--cuidados-no-windows)
8. [Checklist Pré-Lançamento](#8-checklist-pré-lançamento)

---

## 1. Visão Geral & Objetivos de Negócio

Sites de academias convencionais costumam pecar por excesso de páginas e falta de clareza na conversão. O modelo **CrossFit Landing Page** foi desenhado com foco em:

1. **Ação Principal Única:** Levar o visitante a agendar uma **Aula Experimental Gratuita** no WhatsApp.
2. **Eliminação de Objeções:** Responder logo de cara:
   - *"Nunca treinei, posso começar?"* (100% de treinos adaptados).
   - *"Tem horário antes do trabalho?"* (Abre às 05:45h).
   - *"Tem vestiário/estacionamento?"* (Destaque para comodidades).
3. **Prova Social Imediata:** Exibir nota máxima no Google Meu Negócio (5.0 estrelas) com avaliações reais.
4. **Performance Instantânea:** Zero dependências pesadas, carregamento em menos de 1 segundo no 4G/5G móvel.

---

## 2. Estrutura de Pastas e Arquivos

Mantenha uma organização limpa, sem compilações complexas:

```text
projeto-crossfit/
├── index.html              # Estrutura semântica completa e SEO
├── css/
│   └── style.css           # Design system athletic dark e responsividade
├── js/
│   └── main.js             # Lógica interativa (modal, calculadora, abas, FAQ)
├── assets/
│   └── images/
│       └── logo.svg        # Logotipo vetorizado esportivo
└── README.md               # Documentação técnica do projeto
```

---

## 3. Design System & Identidade Visual

### 🎨 Paleta de Cores (Athletic Dark Theme)
O tema esportivo utiliza alto contraste sobre fundo escuro, com acentos avermelhados de potência e dourado para avaliações:

```css
:root {
  /* Cores de Ação e Potência */
  --primary: #de0f1b;            /* Vermelho vibrante para CTAs e ênfase */
  --primary-light: #ff2e3a;      /* Hover e destaques */
  --primary-dark: #99000a;       /* Gradientes e profundidade */
  --primary-glow: rgba(222, 15, 27, 0.35);

  /* Fundo Esportivo Profundo */
  --bg-black: #08080a;           /* Fundo principal da página */
  --bg-dark: #0f0f13;            /* Fundo de seções alternadas */
  --bg-card: #15151b;            /* Cards e blocos elevados */
  --bg-card-hover: #1c1c24;      /* Efeito hover de cards */

  /* Textos & Tipografia */
  --text-main: #ffffff;          /* Títulos e textos de alto contraste */
  --text-muted: #9ca3af;         /* Subtítulos e descrições */
  --border-color: #26262e;       /* Bordas sutis dos cards */
  --star-color: #fbbf24;         /* Dourado para as estrelas do Google */
}
```

### 🔤 Tipografia
- **Headlines e Títulos:** `Barlow Condensed` (Google Fonts), em **itálico**, **peso 800/900** e **maiúsculo** (`uppercase`). Esse estilo remete a cronômetros, uniformes atléticos e marcas esportivas de alto nível.
- **Corpo e Leituras:** `Inter` (Google Fonts), em pesos 400, 500 e 600 para máxima legibilidade no celular.

---

## 4. Anatomia das Seções (Passo a Passo)

### 1. Header & Navbar
- Logo à esquerda.
- Links de âncora para navegação rápida: *Início, Sobre, O Que Oferecemos, Estrutura, Horários, Alunos, Dúvidas, Contato*.
- Botão CTA destacado com ícone do WhatsApp: `Aula Gratuita`.
- Menu hambúrguer animado no mobile.

### 2. Hero Section (Dobra Superior)
- **Badge Flutuante:** Selo dourado com `★★★★★ 5,0 no Google · 42+ Avaliações`.
- **Headline Poderosa:** Ex: *"Seja seu Melhor."* (máximo 4 a 6 palavras).
- **Subtítulo Direto:** Explicando o foco do box (fortalecimento, condicionamento, comunidade e localização).
- **Duplo CTA:**
  1. *Primário com Efeito Pulsante:* `Agende uma Aula Gratuita` (abre WhatsApp).
  2. *Secundário Translúcido:* `Conhecer o Box` (rola até Sobre).
- **Barra de Métricas Rápidas:**
  - `5.0 ★` (Nota Google)
  - `05:45h` (Primeiro horário)
  - `100%` (Treinos Adaptados)
  - `SÁB` (Aulões Especiais)

### 3. Sobre o Box
- Layout em 2 colunas:
  - Esquerda: Imagem imersiva do treino com badge fixo (*ex: Thunder Cross · Centro de Treinamento*).
  - Direita: Texto humanizado com 4 pilares em bullets com ícones (*Instrutores Qualificados, Para Todos os Níveis, Aulões aos Sábados, Espaço Amplo e Acolhedor*).

### 4. O Que Oferecemos (Os 4 Pilares)
Cards modulares com ícone, título condensado e breve descrição:
1. **Treinos Personalizados:** Adaptação para iniciantes ao avançado.
2. **Qualidade de Vida:** Queima calórica, sono e saúde mental.
3. **Box Completo:** Equipamentos oficiais (barras, anilhas, rigs, kettlebells).
4. **Comunidade & Aulões:** Camaradagem e treinos em duplas/trios no sábado.

### 5. Estrutura & Comodidades
Galeria de 4 fotos em grid com sobreposição gradiente:
- Área de WOD Completa.
- Equipamentos Oficiais.
- Vestiários com Chuveiro Quente.
- Estacionamento Próprio no Local.

### 6. Grade de Horários Interativa
- **Abas de Filtro:** *Todos, Manhã, Tarde/Noite, Sábado Especial*.
- Tabela limpa com horário, badge de intensidade, foco da aula e botão de reserva individual.
- Callout inferior informando horários gerais de funcionamento e botão para tirar dúvidas de vagas no WhatsApp.

### 7. Calculadora de IMC / Fitness
- Formulário com campos de **Peso (kg)** e **Altura (cm)**.
- Card de resultado dinâmico: Exibe o valor do IMC, categoria colorida (*Abaixo do peso, Peso Saudável, Sobrepeso, Obesidade*) e um feedback incentivando a prática do CrossFit como acelerador de resultados.

### 8. Depoimentos dos Alunos (Google Reviews)
- 5 a 6 cards baseados em **avaliações reais do Google Meu Negócio**.
- Cada card traz: 5 estrelas douradas, citação com aspas, iniciais do aluno em avatar circular e selo com ícone do Google.
- Card especial com a nota consolidada `5.0 / 5.0` e link para o perfil oficial no Google Maps.

### 9. FAQ (Perguntas Frequentes)
Acordeão interativo com as 5 principais dúvidas de iniciantes:
1. *Nunca fiz CrossFit, posso começar?*
2. *Como funciona a aula gratuita?*
3. *O que levar no primeiro treino?*
4. *Tem chuveiro e vestiário?*
5. *O que são os aulões de sábado?*

### 10. Localização & Contatos
- Coluna esquerda: Nome do box, endereço completo, telefone, WhatsApp, Instagram e horário.
- Coluna direita: Iframe embutido do **Google Maps** em modo escuro/noturno.

### 11. Modal Popup de Lead
- Disparado ao clicar em qualquer botão "Aula Gratuita" ou "Agendar".
- Pede: **Nome**, **Turno de Preferência** e **Principal Objetivo**.
- Ao clicar em confirmar, monta a mensagem customizada e abre o WhatsApp diretamente.

### 12. Botão Flutuante do WhatsApp
- Fixo no canto inferior direito (`position: fixed; bottom: 25px; right: 25px;`).
- Ícone verde oficial `#25d366` com animação contínua de ondas (`pulse-wa`).

---

## 5. Scripts e Componentes Interativos

O arquivo `js/main.js` opera de forma 100% nativa sem bibliotecas externas:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // 1. Header com sombra ao rolar a página
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // 2. Filtro da Grade de Horários
  const tabs = document.querySelectorAll('.schedule-tab');
  const rows = document.querySelectorAll('.schedule-table tbody tr');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');

      rows.forEach(row => {
        const period = row.getAttribute('data-period');
        row.style.display = (filter === 'all' || period === filter) ? '' : 'none';
      });
    });
  });

  // 3. Calculadora de IMC
  const calcBtn = document.getElementById('calc-bmi');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('bmi-weight').value);
      const height = parseFloat(document.getElementById('bmi-height').value) / 100;
      if (!weight || !height) return;

      const imc = (weight / (height * height)).toFixed(1);
      document.getElementById('bmi-score').textContent = imc;
      // Define categoria e dica personalizada...
    });
  }

  // 4. Acordeão de FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const active = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!active) item.classList.add('active');
    });
  });

  // 5. Modal e Geração de Mensagem para WhatsApp
  const modalForm = document.getElementById('modal-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('lead-nome').value;
      const horario = document.getElementById('lead-horario').value;
      const objetivo = document.getElementById('lead-objetivo').value;

      const msg = `Olá! Meu nome é ${nome}. Quero agendar minha Aula Gratuita!\n- Turno: ${horario}\n- Objetivo: ${objetivo}`;
      window.open(`https://wa.me/5562984316490?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
});
```

---

## 6. Engenharia de Conversão para WhatsApp

Todas as pontas do site devem encaminhar o lead diretamente para a conversa com uma mensagem pré-preenchida contextualizada:

| Botão / Origem | Formato da Mensagem Gerada |
| :--- | :--- |
| **Hero Principal** | `Olá, vi seu anúncio e gostaria de saber mais sobre as aulas!` |
| **Botão Flutuante** | `Olá, vim pelo site e gostaria de agendar uma aula experimental!` |
| **Modal de Agendamento** | `Olá! Meu nome é [NOME]. Gostaria de agendar minha Aula Gratuita!\n- Horário: [TURNO]\n- Objetivo: [OBJETIVO]` |
| **Grade de Horários** | `Olá, gostaria de consultar a disponibilidade de vagas para os horários!` |

> **Atenção:** Sempre use `encodeURIComponent()` no JavaScript para que quebras de linha e caracteres especiais funcionem no link `https://wa.me/55DDDNÚMERO?text=...`.

---

## 7. Deploy no Netlify & Cuidados no Windows

### ⚠️ O "Pitfall" das Barras Invertidas no Windows
Ao compactar arquivos no Windows usando ferramentas como `Compress-Archive` do PowerShell, os caminhos internos do ZIP são salvos com barras invertidas:
```text
css\style.css   <-- Erro! No Linux do Netlify vira um nome literal de arquivo
```
Quando o navegador requisita `/css/style.css`, o servidor retorna **404 Not Found**, resultando em um site "em texto puro sem formatação".

### ✅ A Solução Correta (Caminhos POSIX)
Sempre empacote com caminhos usando barras normais (`/`). Você pode usar Python:

```python
import os, zipfile

with zipfile.ZipFile('deploy.zip', 'w', zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk('sua-pasta-site'):
        for f in files:
            full = os.path.join(root, f)
            # Força barras normais (POSIX)
            rel = os.path.relpath(full, 'sua-pasta-site').replace('\\', '/')
            z.write(full, rel)
```

### Comandos de Deploy via CLI ou API
1. **Via Netlify CLI:**
   ```bash
   npx --yes netlify-cli deploy --prod --dir .
   ```
2. **Via Drag & Drop:** Arraste a pasta diretamente no painel do [app.netlify.com](https://app.netlify.com).
3. **Via Netlify API:** Faça upload do buffer do `.zip` via `POST /api/v1/sites/{site_id}/deploys`.

---

## 8. Checklist Pré-Lançamento

Antes de divulgar ou rodar tráfego pago para o site:

- [ ] **WhatsApp:** Testar se o número abre o chat correto com o DDD e nono dígito.
- [ ] **Mobile:** Testar no celular Android e iOS (menu, botões e touch).
- [ ] **Google Maps:** Verificar se o iframe está centralizado no endereço exato do box.
- [ ] **Calculadora de IMC:** Fazer uma simulação com números válidos e verificar o retorno.
- [ ] **Horários:** Confirmar se os turnos e o aulão de sábado batem com a grade real.
- [ ] **Meta Tags:** Conferir título e imagem OpenGraph para que o preview no WhatsApp/Instagram apareça bonito ao compartilhar o link.
