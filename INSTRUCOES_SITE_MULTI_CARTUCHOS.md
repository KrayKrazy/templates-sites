# 🖨️ Guia Definitivo: Como Criar um Site de Alta Conversão para Recarga de Cartuchos, Toner e Informática (Multi Cartuchos & Informática)

Este manual documenta a arquitetura técnica, engenharia de conversão, componentes interativos, psicologia do consumidor local, design system e rotinas de deploy utilizadas no desenvolvimento do site oficial da **Multi Cartuchos & Informática** (Águas Lindas de Goiás - GO).

Use este documento como template mestre e Procedimento Operacional Padrão (SOP) para criar landing pages e sites institucionais de alto rendimento para lojas de suprimentos para impressoras, recarga de cartuchos e toners, assistência técnica de informática e centros de cópias/impressões.

---

## 📑 Índice
1. [Visão Geral & Psicologia do Nicho de Cartuchos e Suprimentos](#1-visão-geral--psicologia-do-nicho-de-cartuchos-e-suprimentos)
2. [Pesquisa e Benchmarking via GitHub MCP](#2-pesquisa-e-benchmarking-via-github-mcp)
3. [Estrutura de Pastas e Arquitetura de Arquivos](#3-estrutura-de-pastas-e-arquitetura-de-arquivos)
4. [Design System & Identidade Visual CMYK Tech](#4-design-system--identidade-visual-cmyk-tech)
5. [Logomarca Oficial e Otimização de Mídias](#5-logomarca-oficial-e-otimização-de-mídias)
6. [Anatomia das Seções de Alta Conversão](#6-anatomia-das-seções-de-alta-conversão)
7. [Simulador Interativo de Recarga & Suprimentos](#7-simulador-interativo-de-recarga--suprimentos)
8. [Engenharia de Tráfego e Conversão para WhatsApp](#8-engenharia-de-tráfego-e-conversão-para-whatsapp)
9. [Deploy e Publicação na Vercel via MCP](#9-deploy-e-publicação-na-vercel-via-mcp)
10. [Checklist Pré-Lançamento para Novos Clientes deste Ramo](#10-checklist-pré-lançamento-para-novos-clientes-deste-ramo)

---

## 1. Visão Geral & Psicologia do Nicho de Cartuchos e Suprimentos

O mercado de recargas de impressoras e informática opera sobre três dores críticas do consumidor (residencial, comercial e corporativo):
* **Urgência Crítica de Impressão:** O cliente quase sempre procura uma recarga quando a tinta acabou no meio de uma tarefa inadiável (boletos, contratos, trabalhos escolares, documentos judiciais). Ele precisa saber imediatamente se o serviço é feito no mesmo dia.
* **Medo de Danificar o Equipamento ou Tinta de Má Qualidade:** O usuário tem receio de que a recarga vaze dentro da impressora, manche papéis ou resseque os cabeçotes. A quebra dessa objeção ocorre ao explicitar o uso de tintas premium e a realização do **teste de impressão na hora** (no balcão da loja).
* **Economia Comparativa Extrema:** Um cartucho original pode custar mais de 40% a 60% do valor de uma impressora de entrada. Demonstrar uma economia de até **70%** com a **Recarga XL** (que rende o dobro ou triplo de páginas) transforma a decisão em algo irresistível.
* **Proximidade e Acesso Físico:** Usuários de cidades como Águas Lindas de Goiás valorizam comércios locais estabelecidos, com endereço claro no Google Meu Negócio, estacionamento e suporte técnico humano acessível.

### Os 5 Pilares de Sucesso deste Modelo:
1. **Âncora de Rendimento XL & Teste na Hora:** Destaque contínuo de que a recarga é testada na frente do cliente antes de sair da loja.
2. **Prova Social Real do Google (Nota 4.3★ com mais de 40 avaliações):** Exibição de depoimentos verídicos e reputação consolidada no Setor 2.
3. **Simulador de Orçamento Interativo:** Elimina o atrito de digitação no WhatsApp, permitindo ao usuário escolher a marca, tipo de serviço e modelo do cartucho, gerando a mensagem formatada para o atendente.
4. **Card de Ordem de Atendimento Estilo Ticket Express:** Inspirado em painéis de diagnósticos técnicos que transmitem seriedade, agilidade (15 a 30 minutos) e precisão.
5. **Velocidade Extrema (PageSpeed 100):** Código 100% nativo (HTML5 semântico, CSS3 modular puro e Vanilla JavaScript), carregando em milissegundos sem travamentos no 4G/5G mobile.

---

## 2. Pesquisa e Benchmarking via GitHub MCP

Utilizando o servidor MCP do GitHub (`github-mcp-server`), foram minerados repositórios públicos internacionais do nicho de manutenção de impressoras, assistência técnica e recarga de toner/cartuchos:

* **Repositório de Referência 1: `quickprinter/quick-printer-website`**
  - *Destaques aproveitados:* Estrutura de *Service Ticket Motif* (cantos identificados como ordem de serviço, chips de status operacional), faixa de marcas suportadas (HP, Canon, Epson, Brother, Samsung, Xerox) e foco em atendimento direto sem centrais telefônicas burocráticas.
* **Repositório de Referência 2: `akramahmed1/xerotech`**
  - *Destaques aproveitados:* Grid minimalista de serviços (Reparos, Vendas, Suprimentos, Locação), botões diretos de ligação rápida e textos concisos focados em resolver a dor imediata do cliente.

A partir desse benchmark, foi desenvolvida uma identidade própria e moderna, agregando paleta CMYK, simulador dinâmico de orçamento e foco extremo no WhatsApp brasileiro.

---

## 3. Estrutura de Pastas e Arquitetura de Arquivos

O projeto foi organizado de maneira modular e espelhado tanto no repositório de templates quanto na pasta de produção do cliente:

```text
C:\Users\Solano\Documents\sites\multi cartuchos\
├── site/
│   ├── index.html                   # Estrutura semântica, metatags SEO locais e Schema JSON-LD
│   ├── style.css                    # Design system responsivo, variáveis CSS e microinterações
│   ├── script.js                    # Simulador de recargas, FAQ accordion e controle do menu
│   └── logo.jpg                     # Logotipo oficial circular da empresa
├── deploy_cartuchos.mjs             # Script de automação de deploy na Vercel via API REST v13
├── gmb.txt                          # Dados brutos extraídos do Google Meu Negócio
├── instagram.txt                    # Informações da bio e serviços extraídos do Instagram
└── logo.jpg                         # Logomarca original em alta resolução

C:\Users\Solano\Documents\sites\templates sites\
├── template-cartuchos/              # Template replicável idêntico
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── logo.jpg
└── INSTRUCOES_SITE_MULTI_CARTUCHOS.md # Este manual mestre de arquitetura
```

---

## 4. Design System & Identidade Visual CMYK Tech

A paleta de cores combina o **Azul Royal Profundo** e o **Vermelho Alerta** da marca física com as 4 cores de impressão da escala **CMYK** (Cyan, Magenta, Yellow, Black), criando uma identidade vibrante e técnica:

### 🎨 Variáveis CSS Oficiais (`style.css`)
```css
:root {
  /* Cores Primárias da Marca */
  --primary-blue: #0b4bd8;        /* Azul Royal oficial de destaque */
  --primary-dark: #072e88;        /* Azul escuro para contrastes e gradientes */
  --primary-deep: #051a4f;        /* Azul marinho profundo */
  --primary-glow: rgba(11, 75, 216, 0.25);

  --accent-red: #e11d48;          /* Vermelho rubi para chamadas de atenção */
  --accent-red-hover: #be123c;
  --accent-red-glow: rgba(225, 29, 72, 0.3);

  /* Acentos CMYK Técnicos */
  --cmyk-cyan: #00b4d8;           /* Ciano de alta saturação */
  --cmyk-magenta: #f72585;        /* Magenta vibrante */
  --cmyk-yellow: #ffb703;         /* Amarelo impressão para badges e métricas */
  --cmyk-black: #111827;          /* Preto gráfico neutro */

  /* Superfícies & Fundos */
  --bg-dark: #0b1120;             /* Fundo slate escuro de alta tecnologia */
  --bg-dark-card: #131d33;        /* Superfície para cards escuros */
  --paper-bg: #f8fafc;            /* Fundo clean suave para leitura */
  --paper-white: #ffffff;         /* Branco puro */
  --paper-border: #e2e8f0;        /* Linhas divisórias sutis */

  /* Conversão & WhatsApp */
  --wa-green: #25d366;            /* Verde oficial do WhatsApp */
  --wa-green-hover: #1ebd56;
  --wa-green-glow: rgba(37, 211, 102, 0.35);

  /* Tipografia */
  /* Títulos: 'Outfit', sans-serif */
  /* Corpo: 'Inter', sans-serif */
}
```

---

## 5. Logomarca Oficial e Otimização de Mídias

A logomarca oficial presente em `logo.jpg` foi integrada com precisão:
- **Formato Circular 1:1:** Otimizada para exibição como avatar no cabeçalho (52x52px) e no rodapé.
- **Favicon & OpenGraph:** Configurada nas metatags `<link rel="icon">` e `<meta property="og:image">` para visualização instantânea em prévias no WhatsApp e redes sociais.
- **Sincronização com o Servidor:** Servida diretamente pela infraestrutura Edge da Vercel com resposta HTTP 200 e cache otimizado.

---

## 6. Anatomia das Seções de Alta Conversão

O site foi estruturado com base nas melhores práticas de copywriting para negócios locais:

### 1. Top Announcement Bar
Barra superior permanente informando:
- Ponto pulsante de atividade: *"Recargas Express XL com Teste na Hora em Águas Lindas de Goiás • Aberto até às 19:00"*.
- Acessos rápidos para ligação telefônica `(61) 99110-3434` e WhatsApp.

### 2. Header & Sticky Navbar
- Identidade visual com logotipo, nome da marca e subtítulo descritivo.
- Navegação fluida com links âncora: Início, Serviços, Simulador, Marcas, Diferenciais, Avaliações e Localização.
- Botão verde de WhatsApp com microinteração de elevação ao passar o mouse.
- Menu hambúrguer lateral dinâmico para smartphones.

### 3. Hero Section & Ticket Card
- Headline focada na dor e benefício principal: *"Recarga de Cartuchos & Toner com Máximo Rendimento"*.
- Subheadline com garantia de economia de 70% e aviso de teste no ato da entrega.
- Dois CTAs contrastantes: *"Pedir Orçamento no WhatsApp"* e *"Simular Recarga"*.
- **Card Estilo Ordem de Serviço:** Inspirado em tíquetes de diagnóstico, detalhando o tempo médio (15 a 30 min), marcas atendidas, endereço do Setor 2 e status *"Pronto p/ Atender"*.

### 4. Faixa de Métricas de Confiança
Faixa em slate escuro com 4 números comprováveis:
- **4.3★ no Google:** Mais de 40 avaliações de clientes.
- **70% de Economia:** Comparado à compra de cartuchos originais descartáveis.
- **XL de Rendimento:** Capacidade máxima preenchida com tintas de alta densidade.
- **100% Testado:** Prova impressa antes de o cliente sair da loja.

### 5. Simulador Interativo de Recarga & Suprimentos
Componente de 3 etapas com atualização em tempo real do texto de resumo e botão de envio automático para o WhatsApp.

### 6. Grid de 6 Serviços Principais
Cards com ícone temático, lista de benefícios em check verde e link direto:
1. **Recarga de Cartuchos XL:** Pressurização a vácuo, desentupimento ultrassônico e teste elétrico.
2. **Toner Laser (Recarga & Novos):** Pó gráfico ultra black, troca de cilindro (OPC), lâmina dosadora e chips.
3. **Manutenção de Impressoras:** Remoção de atolamento de papel, reparo de roletes, reset de almofadas e duto.
4. **Manutenção de Computadores & Notebooks:** Formatação completa, upgrade para SSD, limpeza e pasta térmica.
5. **Suprimentos & Acessórios:** Cabos USB/HDMI, teclados, mouses, papéis sulfite e fotográficos.
6. **Centro de Cópias & Impressões:** Impressão colorida/P&B de alta definição e digitalização para PDF na hora.

### 7. Faixa de Marcas Atendidas
Exibição em destaque das marcas líderes do mercado: HP, Epson, Canon, Brother, Samsung, Xerox e Lexmark.

### 8. Diferenciais Competitivos (Por Que Escolher a Multi Cartuchos)
Explicação detalhada dos 4 diferenciais: Teste na sua frente, Tinta & Pó Premium, Atendimento Rápido e Garantia Comprovada.

### 9. Prova Social do Google Meu Negócio
Avaliações verídicas de 5 estrelas destacando qualidade, preço justo e cordialidade do atendimento.

### 10. Localização, Horários e Mapa GPS
- Endereço físico completo: **QD 37 CONJUNTO A LOTE 2B LOJA 05 SETOR 2, Águas Lindas de Goiás - GO, CEP 72910-145**.
- Horário semanal detalhado: Segunda a Sexta das 08:00 às 19:00 e Sábado das 08:00 às 14:00.
- Telefones: (61) 99110-3434 e (61) 99337-8839.
- Link direto para o perfil do Instagram: `@multicartuchos.informatica`.
- Botão para traçar rota direta no aplicativo de GPS do smartphone (Google Maps).
- Iframe do Google Maps integrado e responsivo.

### 11. FAQ Accordion (Perguntas Frequentes)
Respostas sobre tempo de recarga, compatibilidade, segurança para a impressora, conceito da recarga XL, serviços de informática e formas de pagamento (PIX, cartões e dinheiro).

### 12. Floating WhatsApp & Mobile Sticky Bar
- Botão flutuante no canto inferior direito com animação de pulso luminoso contínuo e tooltip informativo.
- Barra fixa inferior nos celulares com dois botões largos: *"Ligar Agora"* e *"Chamar no WhatsApp"*.

---

## 7. Simulador Interativo de Recarga & Suprimentos

O simulador em JavaScript (`script.js`) elimina a barreira de digitação do cliente e entrega um lead qualificado para o balconista da loja:

### Lógica dos 3 Passos:
1. **Passo 1 (Serviço):** Rádios estilizados para Cartucho XL, Recarga de Toner, Toner Novo, Reparo de Impressora, Manutenção de PC ou Cópias.
2. **Passo 2 (Marca):** Select com HP, Epson, Canon, Brother, Samsung, Xerox, PC Geral ou Outra.
3. **Passo 3 (Modelo/Defeito):** Campo de texto livre (ex: *HP 664, TN-1060, papel preso*).

### Saída Automática no WhatsApp:
```text
Olá, Multi Cartuchos! Fiz uma simulação pelo site e gostaria de saber o valor e disponibilidade:

🛠️ *Serviço / Produto:* Recarga de Cartucho Jato de Tinta XL
🖨️ *Marca do Equipamento:* HP
📄 *Modelo do Cartucho/Toner ou Defeito:* HP 667 Preto

Podem me passar o orçamento e o tempo estimado para entrega/pronto atendimento?
```

---

## 8. Engenharia de Tráfego e Conversão para WhatsApp

Todos os pontos de contato possuem parâmetros que informam o contexto da chamada, agilizando o atendimento:

| Ponto de Contato | Ação Disparada | Texto Pré-formatado no WhatsApp |
| :--- | :--- | :--- |
| **Top Bar** | Link do topo | `Olá, vim pelo site e gostaria de um orçamento de recarga!` |
| **Header** | Botão WhatsApp | `Olá! Vim pelo site da Multi Cartuchos e gostaria de um orçamento.` |
| **Hero Principal** | Botão de destaque | `Olá, vim pelo site e gostaria de um orçamento urgente de recarga!` |
| **Ticket Express** | Botão "Levar Hoje" | `Olá, gostaria de levar meu cartucho/toner hoje para recarga!` |
| **Card de Cartuchos** | Link de serviço | `Olá, quero recarregar meu cartucho de tinta!` |
| **Card de Toner** | Link de serviço | `Olá, preciso de orçamento para Toner Laser!` |
| **Card de Impressoras**| Link de serviço | `Olá, minha impressora está com defeito e preciso de manutenção!` |
| **Card de Informática**| Link de serviço | `Olá, gostaria de um orçamento para manutenção de computador/notebook!` |
| **Simulador** | Botão dinâmico | `Olá, Multi Cartuchos! Fiz uma simulação pelo site... [dados]` |
| **Botão Flutuante** | Botão de pulso | `Olá, estou no site da Multi Cartuchos e gostaria de um orçamento rápido!` |
| **Barra Fixa Mobile** | Botão inferior | `Olá, vim pelo site da Multi Cartuchos e gostaria de um orçamento!` |

---

## 9. Deploy e Publicação na Vercel via MCP

O deploy foi realizado através da infraestrutura de ponta da **Vercel** com auxílio dos MCPs (`vercel:create_project`, `create_deployment` e `add_project_domain`):

### 1. Dados Técnicos da Infraestrutura:
* **Nome do Projeto:** `multi-cartuchos`
* **Project ID:** `prj_B5rC0npM8LSdfLVZUEgGg7nZcLu9`
* **Team ID:** `team_FQHt125SYh8CKhjI2vSpBExb` (kelevra)
* **Deployment ID:** `dpl_6Z8rbguKNvscNGoYuADa2fVosyQc`
* **Status:** `READY` (Produção Global em Edge Network)

### 2. URLs de Acesso Público Disponíveis:
* 🌐 **Domínio Principal de Produção:** [https://multi-cartuchos-informatica.vercel.app](https://multi-cartuchos-informatica.vercel.app)
* 🔗 **Domínio Geográfico Alternativo:** [https://multicartuchos-aguaslindas.vercel.app](https://multicartuchos-aguaslindas.vercel.app)
* 🚀 **Domínio de Equipe:** [https://multi-cartuchos-kelevra.vercel.app](https://multi-cartuchos-kelevra.vercel.app)
* ⚡ **Deployment Hash Direto:** [https://multi-cartuchos-79ignvafy-kelevra.vercel.app](https://multi-cartuchos-79ignvafy-kelevra.vercel.app)

---

## 10. Checklist Pré-Lançamento para Novos Clientes deste Ramo

Ao reaproveitar este template para uma nova loja de recargas ou assistência técnica, siga este roteiro:

1. [ ] **Substituição da Logomarca:** Salve o logo do novo cliente em `logo.jpg` no mesmo diretório (proporção quadrada ou circular).
2. [ ] **Atualização dos Telefones de Atendimento:** Altere o número de WhatsApp no arquivo `index.html` e na constante `PRIMARY_WHATSAPP` em `script.js` (inserindo DDI + DDD + Telefone sem traços ou parênteses, e.g., `5561991103434`).
3. [ ] **Endereço Físico e Coordenadas:** Atualize o endereço, CEP e cidade no HTML, nas tags Schema.org e no link do Google Maps Embed.
4. [ ] **Avaliações do Google Meu Negócio:** Extraia 3 avaliações 5 estrelas reais da ficha do cliente no Google para gerar autoridade imediata.
5. [ ] **Horário de Funcionamento:** Ajuste a grade de horários (dias úteis e sábados) de acordo com a rotina do estabelecimento.
6. [ ] **Deploy via Script:** Execute `node deploy_cartuchos.mjs` ou utilize o Vercel MCP para obter a URL pública instantânea.

---
*Manual homologado para o ecossistema de templates de alta performance Mycelium.*
