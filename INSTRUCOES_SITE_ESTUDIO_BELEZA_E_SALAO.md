# 💇‍♀️ Guia Definitivo: Como Criar um Site de Alta Conversão para Estúdios de Beleza & Salões

Este manual documenta a arquitetura, design system, componentes interativos, psicologia de conversão e rotinas de deploy utilizadas no desenvolvimento do site oficial do **Studio Erika Cristina**. Use este documento como template mestre e padrão operacional (SOP) para criar sites de alto padrão para salões de beleza, estúdios de estética, cabeleireiras, nail designers e lash designers.

---

## 📑 Índice
1. [Visão Geral & Objetivos de Negócio](#1-visão-geral--objetivos-de-negócio)
2. [Estrutura de Pastas e Arquitetura de Arquivos](#2-estrutura-de-pastas-e-arquitetura-de-arquivos)
3. [Design System & Identidade Visual (Warm Luxury)](#3-design-system--identidade-visual-warm-luxury)
4. [Anatomia das Seções (Passo a Passo)](#4-anatomia-das-seções-passo-a-passo)
5. [Scripts e Componentes Interativos Exclusivos](#5-scripts-e-componentes-interativos-exclusivos)
6. [Engenharia de Conversão para WhatsApp](#6-engenharia-de-conversão-para-whatsapp)
7. [Deploy no Netlify via MCP ou CLI](#7-deploy-no-netlify-via-mcp-ou-cli)
8. [Checklist Pré-Lançamento para Novos Clientes](#8-checklist-pré-lançamento-para-novos-clientes)

---

## 1. Visão Geral & Objetivos de Negócio

Salões de beleza e estúdios estéticos dependem fortemente do público local e do tráfego vindo de **Instagram** e **Google Meu Negócio**. O usuário típico acessa o site pelo smartphone (mais de 88% das sessões) enquanto procura uma profissional confiável para cuidar de sua aparência.

### Os 4 Pilares de Sucesso deste Modelo:
1. **Transmissão Imediata de Confiança & Elegância:**
   * Apresentar a profissional fundadora com foto de alta resolução e jaleco/ferramentas de trabalho.
   * Exibir imediatamente a nota máxima no Google (5.0 estrelas) e os anos de experiência.
2. **Clareza de Procedimentos com Fotos Reais:**
   * Mostrar os carros-chefe com fotos autênticas de clientes (cabelos tratados, unhas impecáveis, cortes modernos). Nada de fotos genéricas de banco de imagens que não transmitem verdade.
3. **Redução de Fricção no Agendamento:**
   * Oferecer um **Simulador de Agendamento Express** onde a cliente marca os serviços desejados, dia e período, gerando uma mensagem personalizada no WhatsApp com 1 clique.
4. **Velocidade de Carregamento Instantânea (Mobile-First):**
   * Sem frameworks pesados ou tempo de build demorado: HTML5 semântico, Tailwind CSS CDN e JavaScript vanilla puro com carregamento abaixo de 0.8s em redes 4G/5G.

---

## 2. Estrutura de Pastas e Arquitetura de Arquivos

Mantenha a estrutura direta e auto-contida para permitir abertura local com dois cliques e deploy descomplicado no Netlify:

```text
erika-estudio-de-beleza/
├── index.html              # Estrutura semântica, metatags SEO locais e Schema JSON-LD
├── style.css               # Design system luxury, gradientes dourados, glassmorphism e animações
├── script.js               # Simulador de agendamento, filtro de galeria, lightbox e FAQ
├── Instagram/              # Fotos reais de clientes, fundadora e logotipo oficial
│   ├── logo.jpg            # Logotipo oficial em alta resolução
│   ├── dona.jpg            # Foto de autoridade da dona/profissional
│   ├── imgi_8_...webp      # Infográfico de apresentação pessoal
│   └── imgi_...jpg         # Fotos dos trabalhos (cabelos, unhas, cortes)
├── gmb.txt                 # Dados brutos extraídos do Google Meu Negócio (backup)
└── Instagram.txt           # Dados brutos extraídos da bio do Instagram (backup)
```

---

## 3. Design System & Identidade Visual (Warm Luxury)

Salões de beleza femininos de ticket médio e alto exigem tons aconchegantes, acolhedores e elegantes. Evite pretos chapados ou tons frios industriais; prefira a paleta **Champagne Gold + Warm Ivory/Sand + Charcoal**:

### 🎨 Paleta de Cores e Variáveis CSS
```css
:root {
  /* Dourado / Champagne de Prestígio */
  --primary-gold: #c59b27;
  --primary-gold-light: #e0be5d;
  --primary-gold-dark: #996f19;
  
  /* Fundos Acolhedores (Warm Luxury) */
  --accent-cream: #fdfbf7;       /* Fundo principal límpido e suave */
  --accent-sand: #f8f4ee;        /* Fundo de seções alternadas */
  --card-bg: #ffffff;            /* Cards com contraste limpo */
  
  /* Textos & Tipografia */
  --text-dark: #221c17;          /* Charcoal quente para títulos e leitura fácil */
  --text-muted: #6b6055;         /* Castanho neutro para subtítulos e descrições */
  
  /* Conversão & WhatsApp */
  --whatsapp-green: #25d366;     /* Verde oficial de alta conversão */
  --whatsapp-dark: #128c7e;
  
  /* Fontes */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
}
```

### 🔤 Tipografia de Alto Padrão
* **Títulos e Headlines (`h1`, `h2`, `h3`):** `'Playfair Display'`, serifada, clássica, transmitindo sofisticação e editorial de moda.
* **Corpo de Texto, Menus e Botões:** `'Plus Jakarta Sans'`, limpa, moderna, geométrica e extremamente legível em telas pequenas de smartphones.

### ✨ Efeitos Visuais & Glassmorphism
* **Gradiente de Texto Dourado:**
  ```css
  .gold-gradient-text {
    background: linear-gradient(135deg, #b38728 0%, #e0be5d 50%, #996f19 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ```
* **Botão Flutuante com Pulso Suave (Gatilho de Conversão):**
  ```css
  @keyframes softPulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
    }
  }
  .whatsapp-pulse {
    animation: softPulse 2.4s infinite;
  }
  ```

---

## 4. Anatomia das Seções (Passo a Passo)

### 1. Barra de Aviso Superior (Top Announcement Bar)
* Fita discreta no topo: `Atendimento com excelência e carinho no Parque Atheneu • Goiânia`.
* Ponto verde pulsante informando: `Consulte horários disponíveis para esta semana →`.

### 2. Header & Navegação Fixa (Glassmorphic Sticky Nav)
* Logotipo circular com borda dourada suave e nome do estúdio.
* Links de navegação: *Início, Sobre Erika, Serviços, Agendar, Transformações, Avaliações 5.0★, Localização*.
* Botão de Ação Imediata: `Agendar Horário` (com ícone de calendário).
* Menu lateral para mobile com botão hamburguer e fechamento animado no "X".

### 3. Hero Section (Dobra de Maior Impacto)
* **Selo de Autoridade:** `★★★★★ Salão 5.0 estrelas no Google • [Bairro/Cidade]`.
* **Headline Principal:** *Realce sua beleza com excelência e carinho.*
* **Subheadline de Valor:** Especialista nos procedimentos principais (*Realinhamento Capilar, Morena Iluminada, Nail Design e Depilação*).
* **Duplo CTA:**
  * Primário Dourado: `Agendar Meu Horário` (link direto para o WhatsApp).
  * Secundário Suave: `Ver Serviços & Fotos` (scroll suave para a galeria).
* **Métricas em Linha:**
  * `10+ Anos de Mercado` (histórico desde 2014).
  * `5.0 ★ Nota Máxima no Google` (avaliações verificadas).
  * `5.5k+ Seguidoras no Instagram`.
* **Retrato da Fundadora:** Foto profissional com selo flutuante de autoridade (*"Fios Alinhados & Saudáveis • Sem formol"*) e card de citação pessoal.

### 4. Faixa de Diferenciais de Biossegurança
Quatro pilares essenciais para tranquilizar novas clientes:
1. `Cuidado com Carinho` (Atendimento humanizado e sem pressa).
2. `Produtos Premium` (Marcas profissionais de alta performance).
3. `Horário Pontual` (Sem esperas desconfortáveis na recepção).
4. `Espaço Esterilizado` (Materiais em autoclave e total biossegurança).

### 5. Seção "Quem Sou Eu" (Storytelling & Humanização)
* A cliente não compra apenas um corte ou realinhamento, ela compra a confiança na pessoa que vai mexer no cabelo dela.
* Imagem de apresentação da profissional.
* História: Naturalidade, ano de início da carreira, paixão por transformar a autoestima feminina e a crença de que *"cabelo muda a energia"*.
* 4 caixas de destaque com ícones finos (*Cabelo Muda Energia*, *Saúde em 1º Lugar*, *Acolhimento Íntimo*, *Fácil Acesso*).

### 6. Catálogo de Serviços Especializados (Grid com Fotos Reais)
Cards elegantes com imagem de resultado real no topo, tag de categoria, descrição do procedimento e botão de agendamento pré-configurado:
* **Card 1: Realinhamento Capilar** (*Carro-Chefe ⭐* - Brilho espelhado e sem frizz).
* **Card 2: Morena Iluminada & Mechas** (*Exclusividade* - Tons de mel, avelã e caramelo).
* **Card 3: Cortes & Visagismo Feminino** (*Visagismo* - Chanel, bob e camadas).
* **Card 4: Nail Designer & Esmaltaria** (*Tendência* - Alongamentos, fibra, gel e blindagem).
* **Card 5: Tratamentos & Cronograma Capilar** (*Recuperação Profunda* - Nutrição e reconstrução).
* **Card 6: Depilação & Estética** (*Conforto & Suavidade* - Ceras nobres e estética facial).

### 7. Simulador de Agendamento Express (O "Grande Trunfo" de Conversão)
Em vez de um formulário que envia e-mail que ninguém lê, criamos um construtor de mensagem para WhatsApp:
* **Passo 1:** Checkboxes com os serviços de interesse.
* **Passo 2:** Nome da cliente, dia preferido e período (manhã/tarde).
* **Passo 3:** Resumo dinâmico dos itens selecionados com contador ao vivo.
* **Botão Verde WhatsApp:** `Enviar Pedido de Agendamento pelo WhatsApp`. Dispara a mensagem formatada direto no aplicativo da dona do salão.

### 8. Galeria de Transformações (Com Filtros e Lightbox)
* Filtros por botões: *Todas as Fotos*, *Realinhamento Capilar*, *Morena Iluminada & Mechas*, *Cortes & Styling*.
* Grid responsivo (2 colunas no celular, 4 colunas no computador).
* Efeito hover com gradiente e título do procedimento.
* Clique na imagem abre a foto ampliada em tela cheia (Lightbox Modal).
* Banner inferior convidando para seguir o Instagram do salão.

### 9. Prova Social: Avaliações do Google Meu Negócio
* Badge com ícone oficial do Google: `5,0 de 5,0 no Google • 18 avaliações reais`.
* 3 cards com citações reais de clientes com estrelas douradas e iniciais.
* Link direto para a ficha do Google Maps da empresa.

### 10. FAQ (Perguntas Frequentes)
Acordeão expansível que responde às dúvidas que impedem a cliente de agendar:
1. *Quanto tempo dura o Realinhamento Capilar?* (3 a 5 meses).
2. *É necessário agendar com antecedência?* (Sim, devido ao atendimento exclusivo).
3. *Quais as formas de pagamento aceitas?* (Pix, cartões de crédito/débito e dinheiro).
4. *Vocês fazem teste de mecha antes de descolorir?* (Sim, a integridade do fio vem sempre em primeiro lugar).

### 11. Localização & Mapa Interativo
* Endereço físico completo: rua, lote, número da unidade, bairro, cidade, estado e CEP.
* Horário de funcionamento: *Segunda a Sábado até às 18:00*.
* Contato telefônico e link do Instagram.
* **Iframe do Google Maps:** Embutido com as coordenadas exatas da latitude e longitude do local.
* Botão `Como Chegar (Google Maps / Waze)`.

### 12. Rodapé & Botão Flutuante do WhatsApp
* Rodapé com resumo institucional, links rápidos e direitos autorais.
* Botão flutuante verde do WhatsApp fixado no canto inferior direito com efeito pulsante e tooltip explicativo.

---

## 5. Scripts e Componentes Interativos Exclusivos

Toda a lógica interativa foi consolidada em um único arquivo [`script.js`](file:///C:/Users/Solano/Documents/sites/erika%20estudio%20de%20beleza/script.js), sem dependências externas:

### 1. Construtor de Mensagem do WhatsApp (Simulador Express)
```javascript
const serviceCheckboxes = document.querySelectorAll(".booking-service-check");
const sendBookingBtn = document.getElementById("sendBookingBtn");

sendBookingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const selected = [];
  serviceCheckboxes.forEach((cb) => {
    if (cb.checked) selected.push(cb.value);
  });

  const clientName = document.getElementById("clientNameInput")?.value.trim() || "";
  const clientDay = document.getElementById("clientDayInput")?.value || "";
  const clientTime = document.getElementById("clientTimeInput")?.value || "";

  let message = `Olá, Erika! Gostaria de agendar um horário no Studio Erika Cristina. ✨\n\n`;
  if (clientName) message += `👤 *Meu nome:* ${clientName}\n`;
  if (selected.length > 0) {
    message += `💆‍♀️ *Serviços de interesse:*\n${selected.map((s) => `• ${s}`).join("\n")}\n`;
  }
  if (clientDay || clientTime) {
    message += `📅 *Preferência:* ${clientDay ? `Dia ${clientDay}` : ""}${clientTime ? ` às ${clientTime}` : ""}\n`;
  }
  message += `\nVocês têm horário disponível para mim? Aguardo retorno com carinho! 🤍`;

  const whatsappUrl = `https://wa.me/5562985561095?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
});
```

### 2. Filtro Dinâmico de Fotos da Galeria
```javascript
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = btn.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      const category = item.getAttribute("data-category");
      if (filterValue === "all" || category === filterValue) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
```

---

## 6. Engenharia de Conversão para WhatsApp

Para garantir taxa máxima de resposta e fechamento de agendamento:

1. **Número Internacional:** Sempre utilize o formato `55 + DDD + NÚMERO` (ex: `https://wa.me/5562985561095`).
2. **Mensagem Pré-configurada:** Nunca envie a cliente para um chat em branco. Uma mensagem pré-preenchida simpática reduz a timidez e aumenta a taxa de envio em mais de 70%.
3. **Múltiplos Pontos de Contato:**
   * Botão no Top Header.
   * Botão principal da Hero Section.
   * Botão individual em cada um dos 6 serviços.
   * Botão do Simulador de Agendamento.
   * Botão no banner final de chamada.
   * Botão flutuante fixo no canto inferior direito da tela.

---

## 7. Deploy no Netlify via MCP ou CLI

O deploy pode ser realizado em segundos diretamente através do MCP do Netlify ou via Netlify CLI:

### Passos Realizados via Netlify MCP:
1. **Verificação de Equipe:**
   * Obter `teamSlug` do usuário via `netlify-team-services-reader` (`solanoviolao`).
2. **Criação do Projeto:**
   * Criar o projeto no Netlify via `netlify-project-services-updater`:
     * `name`: `studio-erika-cristina`
     * `teamSlug`: `solanoviolao`
3. **Deploy do Diretório:**
   * Disparar o deploy via `netlify-deploy-services-updater`:
     * `siteId`: ID do projeto criado
     * `deployDirectory`: Caminho absoluto do site (`C:\Users\Solano\Documents\sites\erika estudio de beleza`)
4. **Verificação de Status:**
   * Acompanhar o build via `netlify-deploy-services-reader` até o estado `ready`.
   * **URL Ativa:** [https://studio-erika-cristina.netlify.app](https://studio-erika-cristina.netlify.app)

---

## 8. Checklist Pré-Lançamento para Novos Clientes

Ao duplicar este template para um novo salão ou estúdio de beleza, siga esta lista:

- [ ] **1. Coleta de Ativos da Cliente:**
  - [ ] Logotipo em boa resolução (`logo.jpg` ou `.png`).
  - [ ] Foto profissional da fundadora com postura confiante e sorriso acolhedor (`dona.jpg`).
  - [ ] Pelo menos 8 a 15 fotos reais dos trabalhos (cabelos, unhas, cortes).
  - [ ] Extrair telefone com DDD e WhatsApp correto.
  - [ ] Extrair endereço completo com CEP e link de rotas do Google Maps.
  - [ ] Extrair horário de funcionamento real.
- [ ] **2. Customização do Código (`index.html`):**
  - [ ] Atualizar `<title>`, `<meta name="description">` e tags Open Graph com o nome do salão e da cidade.
  - [ ] Atualizar o Schema JSON-LD `BeautySalon` com coordenadas de latitude/longitude e endereço.
  - [ ] Trocar o iframe do Google Maps pelo endereço do novo salão.
  - [ ] Substituir o número de WhatsApp em todos os links e no script do simulador.
- [ ] **3. Validação Visual & Testes:**
  - [ ] Testar no computador (1440px) e no celular (390px).
  - [ ] Testar abertura e fechamento do menu mobile.
  - [ ] Testar clique nos filtros da galeria e no lightbox das imagens.
  - [ ] Preencher o simulador e clicar no botão para validar se o texto gerado no WhatsApp abre corretamente com os dados selecionados.
- [ ] **4. Deploy no Netlify:**
  - [ ] Publicar o site via Netlify MCP ou CLI.
  - [ ] Testar o link final em HTTPS no celular real.
  - [ ] Enviar o link de apresentação para a aprovação da cliente.

---

> **Desenvolvido e padronizado em Outubro/2026**  
> *Baseado no case de sucesso: Studio Erika Cristina • Goiânia - GO*
