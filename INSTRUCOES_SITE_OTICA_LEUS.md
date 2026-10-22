# 👓 Guia Definitivo: Como Criar um Site de Alta Conversão para Óticas (Leu's Ótica - Tecnologia e Menor Preço)

Este manual documenta a arquitetura, design system, componentes interativos, psicologia de conversão, engenharia de tráfego para WhatsApp e rotinas de deploy utilizadas no desenvolvimento do site oficial da **Leu's Ótica**. Use este documento como template mestre e Procedimento Operacional Padrão (SOP) para criar sites de altíssimo padrão para óticas, joalherias ópticas, clínicas optométricas e revendedoras de óculos solares e receituários.

---

## 📑 Índice
1. [Visão Geral & Psicologia do Nicho de Óticas](#1-visão-geral--psicologia-do-nicho-de-óticas)
2. [Estrutura de Pastas e Arquitetura de Arquivos](#2-estrutura-de-pastas-e-arquitetura-de-arquivos)
3. [Design System & Identidade Visual (Luxury & Accessible Trust)](#3-design-system--identidade-visual-luxury--accessible-trust)
4. [Logomarca 3D Gerada em Alta Definição](#4-logomarca-3d-gerada-em-alta-definição)
5. [Anatomia das Seções de Alta Conversão](#5-anatomia-das-seções-de-alta-conversão)
6. [Simulador Interativo de Óculos & Lentes](#6-simulador-interativo-de-óculos--lentes)
7. [Engenharia de Conversão para WhatsApp](#7-engenharia-de-conversão-para-whatsapp)
8. [Deploy e Hospedagem na Vercel via MCP](#8-deploy-e-hospedagem-na-vercel-via-mcp)
9. [Checklist Pré-Lançamento para Novos Clientes de Ótica](#9-checklist-pré-lançamento-para-novos-clientes-de-ótica)

---

## 1. Visão Geral & Psicologia do Nicho de Óticas

O mercado de óticas lida com duas dores fundamentais do consumidor: **saúde visual** e **autoestima/estética facial**:
* **Medo do Preço Abusivo:** A maioria dos clientes tem receio de entrar em uma ótica tradicional e ser cobrada em R$ 1.500+ por lentes e armações básicas. Destacar abertamente *"Armações a partir de R$ 99,00"* e *"Cobrimos orçamentos da região"* quebra instantaneamente a principal barreira de entrada.
* **Insegurança com a Escolha da Armação:** O cliente quer saber se o modelo combina com seu estilo de rosto (delicado, moderno, executivo, infantil ou despojado).
* **Confusão com Tipos de Lentes:** Lentes multifocais, antirreflexo, fotossensíveis e proteção de luz azul geram dúvidas técnicas. O site deve desmistificar esses tratamentos de maneira simples e pedagógica.
* **Urgência e Prova Social Local:** O usuário quer saber a nota no Google Meu Negócio, se a loja é aconchegante e se a entrega é rápida.

### Os 5 Pilares de Sucesso deste Modelo:
1. **Âncora de Preço Irresistível:** Promoção em destaque logo no Top Announcement Bar e no Hero: *"Armações a partir de R$ 99,00"*.
2. **Prova Social Real do Google (Nota 5.0):** Depoimentos autênticos com nomes reais e selo de cliente verificado do Google Meu Negócio.
3. **Simulador de Orçamento Interativo de 3 Passos:** Reduz em 80% o atrito de digitação no WhatsApp, entregando ao atendente o perfil, necessidade de lente e status da receita médica.
4. **Vitrine Dinâmica com Fotos Reais:** Produtos organizados por abas (Feminino, Masculino, Solares, Clip-On 2 em 1 e Infantil), com botão individual que envia o produto exato no WhatsApp.
5. **Velocidade Extrema (PageSpeed 99+):** Código limpo (HTML5 semântico, CSS3 modular moderno e Vanilla JS), sem dependência de frameworks pesados que deixam o carregamento lento no 4G móvel.

---

## 2. Estrutura de Pastas e Arquitetura de Arquivos

O projeto foi organizado de forma auto-contida tanto na pasta do cliente quanto no repositório central de templates:

```text
C:\Users\Solano\Documents\sites\leus oticas\
├── site/
│   ├── index.html                   # Estrutura semântica, metatags SEO locais e Schema
│   ├── style.css                    # Design system responsivo, variáveis CSS e microinterações
│   ├── script.js                    # Simulador de lentes, filtros de vitrine, menu e FAQ
│   └── fotos/                       # Imagens otimizadas (Web-ready)
│       ├── logo.jpg                 # Logotipo oficial gerado em 3D
│       ├── logo_hd.jpg              # Versão HD do logo
│       ├── logo_original.jpg        # Versão original preservada
│       ├── promocao-armacoes-99.jpg # Foto real do mix promocional a R$ 99
│       ├── armacao-fem-nude-dourada.jpg
│       ├── armacao-fem-luxo-rosegold.jpg
│       ├── armacao-clipon-magnetico.jpg
│       ├── armacao-masc-retangular-red.jpg
│       ├── solar-aviador-flattop.jpg
│       ├── armacao-rimless-titanio.jpg
│       ├── colecao-cristal-acetato.jpg
│       ├── armacao-infantil-juvenil.jpg
│       └── vitrine-solar-store.jpg
├── fotos/                           # Repositório de mídias brutas e logo_generated.jpg
├── gmb.txt                          # Dados brutos extraídos do Google Meu Negócio
└── instagram.txt                    # Dados da bio e métricas do Instagram

C:\Users\Solano\Documents\sites\templates sites\
├── template-otica/                  # Template replicável idêntico
└── INSTRUCOES_SITE_OTICA_LEUS.md    # Este manual mestre
```

---

## 3. Design System & Identidade Visual (Luxury & Accessible Trust)

A identidade visual equilibra a tradição e o calor do **vermelho rubi** da Leu's Ótica com a sofisticação do **dourado champagne**, transmitindo alta tecnologia e preço justo:

### 🎨 Paleta de Cores e Variáveis CSS (`style.css`)
```css
:root {
  /* Cores Principais */
  --primary: #c2182b;             /* Vermelho vibrante oficial da marca */
  --primary-dark: #8a0c1b;        /* Vermelho profundo para gradientes */
  --primary-light: #e62e43;
  --primary-glow: rgba(194, 24, 43, 0.25);

  /* Dourado & Champagne */
  --gold: #d4af37;                /* Ouro metálico para detalhes e luxo */
  --gold-dark: #b8972e;
  --gold-light: #fef8e7;
  --gold-glow: rgba(212, 175, 55, 0.35);

  /* Superfícies & Fundos */
  --bg-page: #0f172a;             /* Slate escuro moderno */
  --bg-dark: #090e17;             /* Fundo para alternância de seções */
  --bg-card: #182235;             /* Superfície dos cards de produto */
  --bg-card-hover: #1f2b42;

  /* Ação & Conversão */
  --wa-green: #25d366;            /* Verde oficial do WhatsApp */
  --wa-green-hover: #20bd5a;
  --wa-green-glow: rgba(37, 211, 102, 0.35);

  /* Tipografia */
  --font-main: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-heading: 'Outfit', var(--font-main);
}
```

---

## 4. Logomarca 3D Gerada em Alta Definição

A partir da imagem base de baixa resolução presente em `C:\Users\Solano\Documents\sites\leus oticas\fotos\logo.jpg`, foi gerada uma logomarca 3D de altíssima definição (1024x1024) com:
1. **Emblema Oval Tridimensional:** Acabamento em acrílico vermelho rubi e anel metálico chanfrado em ouro polido.
2. **Armação de Óculos Estilizada:** Óculos preto clássico repousando sobre a borda superior do distintivo, reforçando o ramo óptico.
3. **Tipografia Cursiva "Leu's":** Letras em relevo 3D na cor champagne com sombra projetada e brilho dourado.
4. **Tipografia "ÓTICA":** Em caixa alta, moderna, em acabamento branco puro com chanfro tridimensional.
5. **Localização dos Arquivos da Logo:**
   - `C:\Users\Solano\Documents\sites\leus oticas\fotos\logo_generated.jpg`
   - `C:\Users\Solano\Documents\sites\leus oticas\site\fotos\logo.jpg` e `logo_hd.jpg`

---

## 5. Anatomia das Seções de Alta Conversão

### 1. Top Announcement Bar
Barra superior de urgência com mensagem promocional destacada:
`🔥 SUPER OFERTA: Armações de grau a partir de R$ 99,00! Aproveite hoje mesmo` + Link direto de WhatsApp e horário comercial.

### 2. Header & Navegação Fixa (Sticky Glass)
- Logotipo oficial com anel dourado sutil.
- Menu desktop ancorado com indicador de seção ativa.
- Botão de ação direta: `Falar no WhatsApp` (com brilho esmeralda).
- Menu hambúrguer lateral (Drawer) animado com backdrop para dispositivos móveis.

### 3. Hero Section (Dobra Principal)
- Headline magnética: *"Enxergue a Vida com Estilo, Nitidez e o Menor Preço Garantido"*.
- Checklist de confiança: armações a partir de R$ 99, lentes antirreflexo e Blue UV, cobertura de qualquer orçamento e loja climatizada.
- Dual CTA: Botão principal para o WhatsApp e botão secundário para rolar até a vitrine.
- Prova social instantânea com 5 estrelas e selo do Google.
- Card 3D flutuante com a logomarca oficial e badges laterais animados (*"A partir de R$ 99"* e *"Garantia & Precisão"*).

### 4. Barra de Métricas e Confiabilidade
Quatro indicadores visuais rápidos:
1. *A partir de R$ 99* (Preço justo e acessível).
2. *Nota 5.0 no Google* (100% de satisfação real).
3. *Tecnologia de Ponta* (Lentes digitais de precisão).
4. *Agilidade na Entrega* (Seus óculos prontos com rapidez).

### 5. Simulador Interativo de Óculos & Lentes (Exclusivo)
Permite que o visitante configure seu perfil antes de chamar no WhatsApp (veja detalhes no tópico 6).

### 6. Catálogo de Armações & Vitrine Real com Filtros
Filtros dinâmicos em Javascript:
- **Todos**
- **🔥 Promoção R$ 99:** Mix promocional de armações de qualidade.
- **Feminino:** Armações Nude & Gold, Geométrica Rose Gold, Coleções Gatinho e Oversized.
- **Masculino:** Armações Retangulares Black & Red, Linha Executive e Titânio.
- **Solares & Clip-On:** Modelos 2 em 1 magnéticos (grau + solar instantâneo) e Aviador Flat-Top UV400.
- **Infantil & Conforto:** Armações flexíveis em silicone antialérgico para crianças e jovens.
- *Cada card possui botão que envia a foto e o nome exato do modelo diretamente para o WhatsApp da ótica.*

### 7. Tecnologia de Lentes (Educação do Paciente)
Cards explicativos que valorizam a compra das lentes:
- **Filtro de Luz Azul (Blue UV):** Proteção para computadores e celulares.
- **Multifocal Digital Free-Form:** Visão panorâmica perto, média e longe sem tontura.
- **Lentes Fotossensíveis:** Escurecimento automático no sol e transparência interna.
- **Lentes de Alto Índice / Policarbonato:** Até 50% mais finas e leves para graus altos.

### 8. Sobre Nós (História Autêntica)
Apresentação humanizada da ótica, fundamentada na declaração oficial do Google Meu Negócio da Leu's Ótica:
> *"Na Leu’s Ótica, acreditamos que enxergar bem vai muito além de lentes e armações: é uma experiência de cuidado, estilo e confiança..."*

### 9. Avaliações Reais do Google Meu Negócio
Cards com as avaliações reais de clientes de Águas Lindas:
- **Rayane de Lima Carvalho Lima:** *"Preço baixo, atendimentos excelente Loja aconchegante."*
- **Denise Botelho:** *"Atendimento excelente, preços muito bons."*
- **Kauanne Vitória:** *"Ótimo atendimento, equipe muito atenciosa e prestativa."*

### 10. Localização, Horários e Mapa Interativo
- Endereço completo: Av. JK, Quadra 34, Lote 04, Loja 01, Jardim Brasília / Jardim da Barragem II, Águas Lindas de Goiás.
- Mapa do Google Maps embutido com suporte a zoom e navegação.
- Botão com rota direta no Google Maps com 1 toque no celular.

### 11. FAQ Accordion (Perguntas Frequentes)
Perguntas essenciais sobre garantia, prazos de entrega, cobertura de orçamentos, formas de pagamento (cartão em várias vezes sem juros e desconto no PIX) e aceitação de receitas externas.

### 12. Floating WhatsApp com Efeito Pulso
Botão flutuante no canto inferior direito com pulso luminoso verde contínuo e tooltip indicando *"Online Agora • Orçamento Rápido"*.

---

## 6. Simulador Interativo de Óculos & Lentes

O simulador em 3 passos foi projetado para eliminar o atrito de comunicação entre o cliente e o balconista:

### Passo 1: Para quem é o óculos?
- Feminino
- Masculino
- Infantil / Juvenil
- Óculos Solar (com ou sem grau)

### Passo 2: Qual o tipo de lente necessária?
- Visão Simples (Monofocal para perto ou longe)
- Multifocal Digital Free-Form
- Proteção Blue UV (Para telas de celular/computador)
- Fotossensível (Transitions - escurece no sol)

### Passo 3: Situação da Receita Médica
- Sim, já tenho a receita em mãos
- Não, preciso de exame de vista
- Quero apenas a armação da promoção

### Saída Automática para o WhatsApp:
Ao clicar em **"Enviar e Receber Orçamento no WhatsApp"**, o script gera a seguinte mensagem codificada:
```text
Olá, Leu's Ótica! Fiz a simulação de óculos no site e gostaria de um orçamento:

👤 Público / Estilo: [Opção Selecionada]
🔬 Tipo de Lente: [Opção Selecionada]
📋 Situação da Receita: [Opção Selecionada]

Podem me passar os modelos disponíveis e os valores especiais?
```

---

## 7. Engenharia de Conversão para WhatsApp

Todos os botões do site possuem mensagens personalizadas que informam a origem do clique, facilitando o atendimento pelo time de vendas:

| Botão / Origem | Mensagem Pré-formatada no WhatsApp |
| :--- | :--- |
| **Header / Top Bar** | `Olá! Vim pelo site da Leu's Ótica e gostaria de um orçamento.` |
| **Hero Principal** | `Olá! Vim pelo site da Leu's Ótica e gostaria de um orçamento personalizado.` |
| **Card de Produto Específico** | `Olá! Tenho interesse na [Nome do Modelo] que vi no site. Pode me passar valores?` |
| **Promoção R$ 99** | `Olá! Tenho interesse na Armação da Promoção de R$ 99 que vi no site.` |
| **Simulador de Óculos** | `Olá, Leu's Ótica! Fiz a simulação de óculos no site e gostaria de um orçamento: [Resumo]...` |
| **Localização / Mapa** | `Olá! Gostaria da localização da loja no WhatsApp.` |

---

## 8. Deploy e Hospedagem na Vercel via MCP

O deploy foi realizado utilizando a integração com a **Vercel** através da suíte de ferramentas do MCP (`create_project`, `create_deployment` e `get_deployment`):

### 1. Dados do Projeto Criado na Vercel:
- **Nome do Projeto:** `leus-otica`
- **ID do Projeto:** `prj_GIN9alUe5DZ2ZRga0SfcDA1pPUpI`
- **Team ID:** `team_FQHt125SYh8CKhjI2vSpBExb` (kelevra)
- **Deployment ID:** `dpl_9jvZZ1NDCVfAcSzmdyQxCAdAQY7j`
- **Status da Publicação:** `READY` (Promovido para Produção)

### 2. URLs de Acesso Público:
- 🌐 **Domínio Principal de Produção:** [https://leus-otica.vercel.app](https://leus-otica.vercel.app)
- 🔗 **Alias Alternativo:** [https://leus-otica-kelevra.vercel.app](https://leus-otica-kelevra.vercel.app)
- 🚀 **Deployment Hash URL:** [https://leus-otica-ndwgac5xe-kelevra.vercel.app](https://leus-otica-ndwgac5xe-kelevra.vercel.app)

---

## 9. Checklist Pré-Lançamento para Novos Clientes de Ótica

Ao replicar este template para uma nova ótica, siga este checklist:

1. [ ] **Substituição de Imagens:** Coloque as fotos das armações na pasta `fotos/` e execute o script de otimização WebP/JPEG (tamanho máximo de 600-800px para manter carregamento abaixo de 1 segundo).
2. [ ] **Número do WhatsApp:** Altere o número de telefone em `index.html` e `script.js` (atualmente configurado para `5561981853514`).
3. [ ] **Endereço e Coordenadas:** Atualize o endereço físico, CEP, cidade e o link do Google Maps Embed no iframe.
4. [ ] **Preço Âncora:** Se a nova ótica tiver outro valor de entrada (ex: R$ 79, R$ 119 ou R$ 149), ajuste os textos de promoção e badges.
5. [ ] **Avaliações do Google Meu Negócio:** Copie 3 a 5 avaliações 5 estrelas reais da ficha do cliente no Google para gerar autoridade imediata.
6. [ ] **Deploy na Vercel:** Execute o script de publicação na Vercel ou utilize o MCP da Vercel para gerar o link final.

---
*Manual homologado para o ecossistema de templates de alta conversão Mycelium.*
