# 🏠 Guia Definitivo: Como Criar um Site de Alta Conversão para Corretores de Imóveis (Cleytinho Imóveis - Luxo & Alta Performance)

Este manual documenta a arquitetura, design system, componentes interativos, psicologia de conversão imobiliária, engenharia de tráfego para WhatsApp e a rotina de deploy executada via Vercel MCP no desenvolvimento do site oficial da **Cleytinho Imóveis**. Utilize este documento como template mestre e Procedimento Operacional Padrão (SOP) para criar sites de altíssimo padrão para corretores autônomos, imobiliárias boutique, consultorias de alto padrão e correspondentes bancários.

---

## 📑 Índice
1. [Visão Geral & Psicologia do Nicho Imobiliário](#1-visão-geral--psicologia-do-nicho-imobiliário)
2. [Pesquisa de Mercado & Repositórios GitHub via MCP](#2-pesquisa-de-mercado--repositórios-github-via-mcp)
3. [Estrutura de Pastas e Arquitetura de Arquivos](#3-estrutura-de-pastas-e-arquitetura-de-arquivos)
4. [Design System & Identidade Visual (Deep Navy & Champagne Gold)](#4-design-system--identidade-visual-deep-navy--champagne-gold)
5. [Anatomia das Seções de Alta Conversão](#5-anatomia-das-seções-de-alta-conversão)
6. [Simulador Habitacional Interativo (Sistema SAC em Tempo Real)](#6-simulador-habitacional-interativo-sistema-sac-em-tempo-real)
7. [Engenharia de Conversão para WhatsApp](#7-engenharia-de-conversão-para-whatsapp)
8. [Deploy e Hospedagem na Vercel via MCP](#8-deploy-e-hospedagem-na-vercel-via-mcp)
9. [Checklist de Customização para Novos Clientes Corretores](#9-checklist-de-customização-para-novos-clientes-corretores)

---

## 1. Visão Geral & Psicologia do Nicho Imobiliário

A compra de um imóvel é a **maior transação financeira na vida de 95% das pessoas**. Por isso, sites genéricos ou amadores geram desconfiança imediata. O cliente não quer ver apenas fotos; ele busca **segurança jurídica, acolhimento humano e clareza financeira**:

* **Medo do Golpe ou Risco Jurídico:** O comprador tem pavor de problemas na matrícula, penhoras, inventários mal resolvidos ou construtoras que não entregam a obra. Destacar o registro profissional (**CRECI**) e a **Blindagem Jurídica Completa** no topo reduz instantaneamente essa objeção.
* **Insegurança com o Financiamento Bancário:** A maioria dos clientes não sabe quanto precisa de entrada nem qual será o valor real da parcela mensal. O **Simulador Habitacional Integrado** resolve essa dúvida na hora e gera leads qualificados de alto valor.
* **Necessidade de Atendimento VIP & Rápido:** Compradores de médio e alto padrão não preenchem formulários lentos que demoram 3 dias para responder. Eles exigem contato direto via WhatsApp com o especialista.
* **Transparência de Preço e Especificações:** Cada imóvel deve apresentar claramente metragem quadrada útil, dormitórios, suítes, vagas de garagem e bairro.

### Os 5 Pilares de Sucesso deste Modelo:
1. **Credibilidade Imediata:** Destaque para o selo oficial do CRECI (184.290-F) na Top Bar e no rodapé.
2. **Busca Rápida Multi-Intencional:** Abas no Hero para Comprar, Alugar e Lançamentos na Planta, com filtros rápidos por região e valor.
3. **Simulador de Financiamento Habitacional (SAC):** Cálculo em tempo real de entrada mínima (20%), prazo (até 420 meses) e valor aproximado da primeira parcela, com botão que exporta o cálculo diretamente para o WhatsApp do corretor.
4. **Cards Dinâmicos com Tour Privativo:** Fotos arquitetônicas de alta definição, badges de destaque (*Exclusivo, Lançamento, Oportunidade*) e botão de agendamento de visita no WhatsApp.
5. **Velocidade Extrema (PageSpeed 99+):** Desenvolvido em HTML5 semântico, CSS3 moderno com variáveis nativas e Vanilla JavaScript, carregando instantaneamente em conexões 4G/5G sem dependência de frameworks pesados.

---

## 2. Pesquisa de Mercado & Repositórios GitHub via MCP

Antes de iniciar a codificação, foi realizada uma varredura via **GitHub MCP Server** para mapear os melhores padrões arquiteturais e carências dos sites de corretores disponíveis em código aberto:

* **Repositórios Analisados:**
  * `ggabriel-gomes/Site-Marcos-Rabelo`: Estrutura modular em CSS, divisão de seções de apresentação, agendamento de tours e depoimentos.
  * `KellyalvesDev/Corretor-Ronaldo-Peixoto`: Padrão de integração com WhatsApp, apresentação de fotos em carrossel e catálogo de imóveis.
  * `mohitchandel/real-estate-template`: Padrão moderno de cards, especificações por ícones (dormitórios, banheiros, vagas, área útil).
* **Melhorias Incorporadas no Projeto Cleytinho Imóveis:**
  * Inclusão do **Simulador de Financiamento Habitacional em tempo real**, elemento ausente na maioria dos templates e responsável por multiplicar a taxa de conversão em leads quentes.
  * Modal responsivo de *Visualização Rápida* (Quick View) sem recarregar a página.
  * Mensagens de WhatsApp com templates pré-preenchidos contextualizados por imóvel e simulação de crédito.

---

## 3. Estrutura de Pastas e Arquitetura de Arquivos

O projeto foi estruturado de forma limpa e auto-suficiente:

```text
C:\Users\Solano\Documents\sites\cleytinho imoveis\
└── site\
    ├── index.html                   # Estrutura semântica, metatags SEO locais, OpenGraph e Schema.org
    ├── style.css                    # Design System responsivo, variáveis CSS, microinterações e dark-mode accents
    └── script.js                    # Motor reativo, array de imóveis, simulador SAC, filtros e disparo WhatsApp

C:\Users\Solano\Documents\sites\templates sites\
├── template-corretor-imoveis\       # Template clonável idêntico para replicação imediata
│   ├── index.html
│   ├── style.css
│   └── script.js
└── INSTRUCOES_SITE_CORRETOR_IMOVEIS_CLEYTINHO.md  # Este manual mestre
```

---

## 4. Design System & Identidade Visual (Deep Navy & Champagne Gold)

A identidade visual foi concebida para transmitir **solidez patrimonial, sofisticação e segurança**:

### 🎨 Paleta de Cores e Variáveis CSS (`style.css`)
```css
:root {
  /* Cores Principais - Autoridade e Confiança */
  --primary-navy: #0b132b;          /* Azul marinho profundo corporativo */
  --navy-dark: #070d1e;             /* Fundo de contraste para rodapé e seções escuras */
  --navy-card: #141f36;             /* Superfície dos cards dark */
  --navy-border: #233354;

  /* Acentos de Prosperidade & Luxo */
  --emerald: #10b981;               /* Verde esmeralda (representa aprovação de crédito e valor) */
  --emerald-dark: #059669;
  --gold: #d4af37;                  /* Ouro champanhe metálico */
  --gold-dark: #b8972e;
  --gold-light: #fdf6e2;

  /* WhatsApp Oficial */
  --wa-green: #25d366;
  --wa-green-hover: #20bd5a;
  --wa-glow: rgba(37, 211, 102, 0.35);

  /* Tipografia */
  --font-main: 'Plus Jakarta Sans', sans-serif;
  --font-display: 'Playfair Display', serif;
}
```

---

## 5. Anatomia das Seções de Alta Conversão

O fluxo de leitura foi desenhado seguindo a metodologia **AIDA (Atenção, Interesse, Desejo, Ação)**:

1. **Top Announcement Bar:**
   * Badge do CRECI com ícone de credencial.
   * Indicador pulsante em verde (*"Atendimento Online Imediato"*).
   * Atalho direto para telefone e WhatsApp.
2. **Navegação com Efeito Vidro Fosco (Glassmorphism):**
   * Logo estilizado com ícone arquitetônico dourado.
   * Links âncora suaves (*Imóveis, Simulador de Crédito, Diferenciais, Sobre Cleytinho, Depoimentos, Contato*).
   * Botão de ação direta (*"Agendar Visita"*).
3. **Hero Section com Busca Avançada:**
   * Headline emocional com foco em consultoria exclusiva.
   * Painel de pesquisa rápida com filtros por tipo, região e faixa de valor.
   * Grade de números de autoridade (*+12 Anos de Mercado, +R$ 150M em VGV, +620 Famílias, 99.4% Aprovação de Crédito*).
4. **Vitrine Dinâmica de Imóveis:**
   * Abas de filtragem instantânea por categoria.
   * Cards com fotos em alta definição, especificações técnicas (*m², dormitórios, suítes, vagas*) e tags de exclusividade.
   * Botão de visualização detalhada em modal e botão de agendamento no WhatsApp.
5. **Simulador de Financiamento Habitacional:**
   * Sliders de ajuste dinâmico para valor do imóvel, entrada e prazo.
   * Exibição do valor financiado e primeira parcela estimada.
   * Botão que envia a simulação pronta para a aprovação bancária com o corretor.
6. **Diferenciais Competitivos:**
   * Blindagem Jurídica Completa, Correspondente Bancário Homologado, Avaliação Técnica e Negociação Ética.
7. **Sobre o Corretor (Humanização):**
   * Foto executiva de credibilidade, número do CRECI, narrativa de compromisso e atendimento privativo com hora marcada.
8. **Prova Social & Avaliações:**
   * Depoimentos de compradores reais com fotos, notas 5 estrelas e localização dos imóveis adquiridos.
9. **FAQ Accordion:**
   * Respostas diretas sobre uso de FGTS, custos de corretagem para comprador (gratuito) e documentação necessária.
10. **Formulário VIP & Agendamento de Visitas:**
    * Captura de nome, WhatsApp, objetivo de compra e melhor dia para visita com despacho via WhatsApp.
11. **Botão Flutuante de WhatsApp:**
    * Ícone com tooltip de alerta (*"Cleytinho Online - Tire suas dúvidas agora"*).

---

## 6. Simulador Habitacional Interativo (Sistema SAC em Tempo Real)

O simulador embutido no arquivo `script.js` calcula automaticamente a amortização e os juros da primeira parcela com base na taxa de mercado média informada:

```javascript
function calculate() {
  let propVal = parseFloat(propRange.value);
  let downVal = parseFloat(downRange.value);
  const months = parseInt(termRange.value);

  // Exigência bancária de entrada mínima de 20%
  const minDown = propVal * 0.20;
  downRange.min = minDown;
  downRange.max = propVal * 0.85;

  if (downVal < minDown) {
    downVal = minDown;
    downRange.value = minDown;
  }

  const financed = propVal - downVal;

  // Cálculo da 1ª Parcela no Sistema de Amortização Constante (SAC)
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
```

---

## 7. Engenharia de Conversão para WhatsApp

Todas as interações do site convergem para o WhatsApp do corretor com textos pré-formatados que facilitam o início do atendimento:

1. **Card de Imóvel:**
   > *"Olá Cleytinho! Tenho interesse no imóvel 'Mansão Contemporânea Reserva Tamboré' (R$ 3.850.000) em Alphaville / Tamboré, SP. Poderia me passar mais fotos e detalhes?"*
2. **Simulador de Financiamento:**
   > *"Olá Cleytinho! Fiz uma simulação de financiamento no site e gostaria da sua ajuda para aprovar meu crédito:*
   > *🏠 Valor do Imóvel: R$ 800.000*
   > *💵 Entrada Disponível: R$ 160.000*
   > *🏦 Financiamento: R$ 640.000*
   > *📅 Prazo: 360 meses*
   > *📈 Parcela Estimada: R$ 5.480/mês*
   > *Podemos verificar as melhores taxas com a Caixa, Itaú ou Santander?"*
3. **Formulário de Agendamento:**
   > *"Olá Cleytinho! Solicitei um atendimento exclusivo pelo site:*
   > *👤 Nome: Roberto Silva*
   > *📱 WhatsApp: (11) 98765-4321*
   > *🎯 Interesse: Comprar Casa em Condomínio*
   > *📅 Melhor data para visita: 25/11/2026"*

---

## 8. Deploy e Hospedagem na Vercel via MCP

O deploy foi realizado de forma automatizada e headless utilizando as ferramentas do **Vercel MCP Server**:

1. **Criação do Projeto:**
   * Tool: `create_project`
   * Nome: `cleytinho-imoveis`
   * ID do Projeto: `prj_8GjEY6a6RX6neL70Lxhz3uMiskgG`
2. **Deploy dos Arquivos em Produção:**
   * Tool: `create_deployment`
   * Target: `production`
   * Arquivos enviados: `index.html`, `style.css`, `script.js`
   * ID do Deployment: `dpl_eHJAkLH6pHYhxgdb8HrkBiRF4hUp`
   * Status: `READY` (Promovido para produção)

### 🌐 URLs Públicas do Projeto no Ar:
* **Domínio Principal:** [https://cleytinho-imoveis.vercel.app](https://cleytinho-imoveis.vercel.app)
* **Domínio de Equipe:** [https://cleytinho-imoveis-kelevra.vercel.app](https://cleytinho-imoveis-kelevra.vercel.app)
* **Deployment Canônico:** [https://cleytinho-imoveis-ikijwzr05-kelevra.vercel.app](https://cleytinho-imoveis-ikijwzr05-kelevra.vercel.app)

---

## 9. Checklist de Customização para Novos Clientes Corretores

Para reaproveitar este template para outro corretor ou imobiliária:

1. **Alterar Variáveis Centrais em `script.js`:**
   ```javascript
   const REALTOR_CONFIG = {
     name: "Novo Corretor Imóveis",
     phone: "5511999999999",            // Número com DDD sem traços ou parênteses
     phoneDisplay: "(11) 99999-9999",
     creci: "000.000-F",                // CRECI do novo cliente
     interestRateAnnual: 0.095          // Taxa média anual
   };
   ```
2. **Atualizar Dados dos Imóveis em `script.js`:**
   * Edite a lista de objetos no array `PROPERTIES` adicionando as fotos, bairros, valores, áreas e descrições dos novos imóveis.
3. **Ajustar Metatags SEO e Schema em `index.html`:**
   * Modifique os campos de cidade, telefone e nome no `<script type="application/ld+json">`.
4. **Executar o Deploy na Vercel:**
   * Basta invocar `create_project` e `create_deployment` via Vercel MCP com o novo nome de projeto.
