# 🍔 Guia Definitivo: Como Criar um E-Commerce de Alta Conversão para Hamburguerias & Pit-Dogs Tradicionais

Este manual documenta a arquitetura técnica, design system, engenharia de cardápio interativo, psicologia de conversão por apetite e rotinas de integração de pagamento (**Cakto Gateway**) e deploy (**Vercel**) utilizadas no desenvolvimento do e-commerce oficial da **Mickey's Hamburgueria** (Goiânia - GO, desde 1991).

Use este documento como Procedimento Operacional Padrão (SOP) e template mestre para criar lojas virtuais e sistemas de delivery para hamburguerias artesanais, pit-dogs, lanchonetes e operações gastronômicas de entrega rápida.

---

## 📑 Índice
1. [Visão Geral & Psicologia do Nicho Gastronômico Noturno](#1-visão-geral--psicologia-do-nicho-gastronômico-noturno)
2. [Estrutura de Pastas e Arquitetura de Arquivos](#2-estrutura-de-pastas-e-arquitetura-de-arquivos)
3. [Design System & Identidade Visual (Pit-Dog Raiz & Dark Theme)](#3-design-system--identidade-visual-pit-dog-raiz--dark-theme)
4. [Integração de Pagamento com Cakto Gateway](#4-integração-de-pagamento-com-cakto-gateway)
5. [Componentes Interativos de Alta Conversão](#5-componentes-interativos-de-alta-conversão)
6. [Engenharia de Conversão para WhatsApp](#6-engenharia-de-conversão-para-whatsapp)
7. [Deploy Automatizado na Vercel via MCP](#7-deploy-automatizado-na-vercel-via-mcp)
8. [SEO Local, Google Meu Negócio & Schema JSON-LD](#8-seo-local-google-meu-negócio--schema-json-ld)
9. [Checklist Pré-Lançamento para Novos Clientes](#9-checklist-pré-lançamento-para-novos-clientes)

---

## 1. Visão Geral & Psicologia do Nicho Gastronômico Noturno

O cliente que busca uma hamburgueria ou pit-dog entre 19h e 03h da manhã age por **estímulo visual imediato e fome aguda**:
* **Sensação de Fartura:** Em praças como Goiânia, o conceito de "Pit-Dog" é patrimônio imaterial. O cliente não quer porções minimalistas: ele busca o pão chapeado na manteiga, queijo derretendo, tiras generosas de bacon, milho doce e a crocância inconfundível da batata palha.
* **Tolerância Zero a Atrito:** Mais de 95% dos pedidos são feitos pelo smartphone. Se o cliente precisar criar uma conta de 5 minutos ou baixar um aplicativo pesado de 100MB, ele desiste e pede em outro lugar.
* **Segurança no Pagamento:** Oferecer pagamento direto via Pix com aprovação em 3 segundos ou cartão de crédito parcelado transmite credibilidade superior aos cardápios em PDF improvisados.

### Os 5 Pilares de Sucesso deste Modelo:
1. **Fotografia Gastronômica Real em Primeiro Plano:** O cliente "come com os olhos". As fotos reais do produto em corte frontal com queijo derretido aumentam a taxa de conversão em mais de 40%.
2. **Slide-Out Cart Drawer (Gaveta Lateral Sem Troca de Página):** O usuário adiciona o item ao pedido e vê o resumo subir imediatamente, continuando na tela para escolher refrigerantes e adicionais.
3. **Customizador de Lanche (Remoções & Adicionais):** Permite ao cliente retirar o que não gosta ("sem cebola", "sem milho") e turbinar com adicionais de alta margem de lucro ("+ bacon extra", "+ catupiry legítimo").
4. **Calculadora Dinâmica de Frete por Bairro:** Seleção intuitiva de bairros locais com taxa calculada instantaneamente, permitindo também retirada no balcão a R$ 0,00.
5. **Dual-Checkout:** Botão direto para **Cakto Pay** (para quem quer pagar no Pix/Cartão) e botão para **WhatsApp** (para quem prefere mandar o pedido direto para a chapa).

---

## 2. Estrutura de Pastas e Arquitetura de Arquivos

A arquitetura foi desenhada no modelo Jamstack ultra-otimizado, sem sobrecarga de compilação pesada em runtime, garantindo carregamento instantâneo mesmo no 4G:

```text
template-hamburgueria/
├── index.html                   # Estrutura semântica, Schema.org FastFoodRestaurant e OpenGraph
├── style.css                    # Design System responsivo, variáveis CSS, tema escuro e drawer
├── script.js                    # Catálogo, lógica de carrinho, cálculo de frete, Cakto e WhatsApp
├── robots.txt                   # Diretrizes para motores de busca e rastreadores
├── sitemap.xml                  # Mapa XML do site para indexação no Google
├── gmb.txt                      # Backup de dados do Google Meu Negócio (horários, reviews, endereço)
├── instagram.txt                # Backup dos dados de bio e métricas sociais
└── assets/
    └── images/
        ├── logo.jpg             # Logotipo oficial em alta resolução
        ├── mickey-especial.jpg  # Foto real do sanduíche X-Tudo Raiz
        ├── mickey-cheddar-bacon.jpg # Foto real do Cheddar Bacon duplo
        ├── mickey-frango-catupiry.jpg # Foto real do Frango Especial Catupiry
        └── pitdog-combo-heinz.jpg # Foto real do combo com maionese especial
```

---

## 3. Design System & Identidade Visual (Pit-Dog Raiz & Dark Theme)

A identidade visual equilibra o calor do apetite noturno com uma atmosfera moderna e sofisticada:

### 🎨 Paleta de Cores e Variáveis CSS
```css
:root {
  /* Cores da Marca */
  --color-primary: #F59E0B;        /* Amarelo Cheddar / Pão Dourado — estimula fome e calor */
  --color-primary-hover: #D97706;
  --color-secondary: #DC2626;      /* Vermelho Pit-Dog / Ketchup — urgência e paixão */
  --color-secondary-hover: #B91C1C;

  /* Superfícies Escuras (Dark Theme) */
  --bg-main: #0B0B0E;              /* Preto meia-noite profundo */
  --bg-card: #14141A;              /* Carvão texturizado */
  --bg-card-hover: #1C1C24;
  --bg-surface-elevated: #22222D;
  --bg-input: #191922;

  /* Textos */
  --text-primary: #FFFFFF;
  --text-secondary: #9CA3AF;
  --text-accent: #FBBF24;

  /* Conversão */
  --wa-green: #22C55E;           /* Verde oficial do WhatsApp */
  --cakto-blue: #2563EB;          /* Azul de confiança bancária */
  --star-gold: #F59E0B;           /* Amarelo das 5 estrelas do Google */

  /* Tipografia */
  --font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}
```

---

## 4. Integração de Pagamento com Cakto Gateway

A integração com o gateway da Cakto segue rigorosamente os padrões do skill `ecommerce-cakto`:

### 4.1. Estrutura de Products e Offers na API
No Cakto, a cobrança reside dentro da **Offer** (Oferta) atrelada ao Produto.
* Ao criar o produto via `POST /public_api/products/`, o preço inicial deve ser consolidado na oferta via `PUT /public_api/offers/{offer_id}/`.
* Para delivery físico, é mandatório habilitar a coleta de endereço no checkout via `PUT /public_api/products/{id}/checkouts/{checkout_id}/` com `config: { showAddressFields: true }`.

### 4.2. Mapeamento dos Produtos Mickey's no Cakto
| Produto | Preço | Offer ID | Checkout ID | Link de Pagamento Direto |
| :--- | :--- | :--- | :--- | :--- |
| **Mickey Especial (X-Tudo Raiz)** | R$ 36,90 | `ofukudq` | `1228202` | `https://pay.cakto.com.br/ofukudq_1228202` |
| **Mickey Cheddar Bacon Duplo** | R$ 38,90 | `et4ugwu` | `1228203` | `https://pay.cakto.com.br/et4ugwu_1228203` |
| **Mickey Clássico Smash Pit-Dog** | R$ 28,90 | `9cn2wew` | `1228204` | `https://pay.cakto.com.br/9cn2wew_1228204` |
| **Mickey Frango Especial Catupiry** | R$ 32,90 | `5jj2qym` | `1228205` | `https://pay.cakto.com.br/5jj2qym_1228205` |
| **Combo Mickey Raiz (Burger+Fritas+Refri)** | R$ 49,90 | `gbxnn8o` | `1228206` | `https://pay.cakto.com.br/gbxnn8o_1228206` |
| **Pedido Mickey Burguer (Carrinho Dinâmico)** | R$ 36,90 | `ysuroa4` | `1228207` | `https://pay.cakto.com.br/ysuroa4_1228207` |

### 4.3. Rastreamento e Parâmetros UTM
Como o Cakto não possui campos arbitrários para opcionais de cozinha, os dados do pedido (ingredientes removidos, ponto da carne, endereço e bairro) são serializados e injetados na URL via **parâmetros UTM**:
```javascript
const utmUrl = `${targetCheckoutUrl}?utm_source=ecommerce&utm_medium=${activeDeliveryType}&utm_campaign=pedido_mickeys&utm_content=${encodeURIComponent(orderItemsSummary)}&utm_term=${encodeURIComponent(neighborhood)}`;
```
Isso garante que o lojista visualize todo o detalhamento do pedido diretamente no dashboard de transações do Cakto.

---

## 5. Componentes Interativos de Alta Conversão

### 5.1. Slide-Out Cart Drawer (Gaveta Lateral)
* Aberto ao clicar no botão flutuante de Pedido ou ao adicionar qualquer sanduíche.
* Mantém o cliente na página para permitir upsell de refrigerantes e batatas fritas.
* Atualização em tempo real das quantidades (`+` e `-`) e recalculo automático do subtotal.

### 5.2. Modal de Customização de Sanduíches
* Ao clicar em *"Personalizar adicionais / retirar itens"*, abre-se um modal flutuante:
  - **Deseja retirar algo?** Checkboxes para retirar cebola, milho, tomate, batata palha ou maionese.
  - **Turbine seu lanche:** Checkboxes com adicionais tarifados (Bacon crocante +R$ 6, Catupiry legítimo +R$ 5, Hambúrguer artesanal extra +R$ 8, Ovo caipira +R$ 3,50).
  - **Observações Especiais:** Campo de texto livre para instruções à chapa ("cortar ao meio", "ponto bem passado").

### 5.3. Seletor de Bairros de Goiânia com Frete Automático
* Lista inteligente cobrindo os principais setores atendidos no raio da Av. T-63:
  - Setor Pedro Ludovico: R$ 5,00
  - Setor Bueno: R$ 7,00
  - Setor Marista: R$ 7,00
  - Setor Bela Vista: R$ 6,00
  - Setor Sul: R$ 7,00
  - Jardim Goiás: R$ 8,00
  - Jardim América: R$ 8,00
  - Setor Oeste: R$ 9,00
  - Outros Bairros: R$ 10,00
  - Opção de **Retirada no Balcão** com taxa R$ 0,00.

### 5.4. Sistema de Cupons de Desconto
* Validação no próprio navegador:
  - `RAIZ10`: Aplica 10% de desconto sobre o valor dos lanches.
  - `MICKEY1991`: Aplica R$ 5,00 de desconto fixo em homenagem ao ano de fundação.

---

## 6. Engenharia de Conversão para WhatsApp

Para clientes que preferem falar diretamente com a equipe do pit-dog, o botão **"Enviar Pedido no WhatsApp"** sintetiza toda a comanda no padrão industrial para a cozinha:

```text
🍔 *NOVO PEDIDO - MICKEY'S HAMBURGUERIA* 🍔
-----------------------------------------
👤 *Nome:* João Silva
🛵 *Tipo:* Entrega em Casa
📍 *Bairro:* Setor Bueno
🏠 *Endereço:* Rua T-36, Qd 120, Lt 14, Apto 802
-----------------------------------------
📋 *ITENS DO PEDIDO:*

1. *1x Mickey Especial (X-Tudo Raiz)* - R$ 42,90
   ❌ Sem cebola
   ➕ Bacon Crocante Extra (+R$ 6,00)
   *Obs:* Cortar ao meio e maionese à parte

2. *1x Combo Mickey Raiz Completo* - R$ 49,90
   *Obs:* Coca-Cola bem gelada

-----------------------------------------
Subtotal: R$ 92,80
Taxa de Entrega: R$ 7,00
*TOTAL DO PEDIDO: R$ 99,80*
-----------------------------------------
💳 *Forma de Pagamento:* Pix Instantâneo (Cakto) / Cartão / Dinheiro
🚀 *Enviado pelo site oficial:* Mickey's Pit-Dog 1991
```

O link gerado aponta para: `https://wa.me/5562991811354?text=...`

---

## 7. Deploy Automatizado na Vercel via MCP

O deploy foi executado utilizando a esteira corporativa integrada ao Vercel MCP:

### 7.1. Fluxo de Publicação
1. **Otimização de Imagens:** Fotos originais de 1,5 MB foram processadas via Pillow (`thumbnail((800, 800), LANCZOS)` com `quality=80`), reduzindo o peso total do site para **337 KB**, garantindo nota 98+ no PageSpeed.
2. **Criação do Projeto:** Criado projeto headless `mickeys-hamburgueria` com `framework: null`.
3. **Upload de Arquivos:** Submissão das 10 unidades de arquivo (HTML, CSS, JS, Imagens, Robots e Sitemap) via endpoint `/v13/deployments`.
4. **Atribuição de Domínio:** Configurado o alias de produção:
   - **URL de Produção:** [https://mickeys-hamburgueria.vercel.app](https://mickeys-hamburgueria.vercel.app)
   - **URL Espelho do Time:** `https://mickeys-hamburgueria-kelevra.vercel.app`

---

## 8. SEO Local, Google Meu Negócio & Schema JSON-LD

### 8.1. Marcação Schema.org para o Google
Injeção nativa de tag `<script type="application/ld+json">` com `@type: "FastFoodRestaurant"`, contendo:
* **GeoCoordinates:** Latitude `-16.7136039` e Longitude `-49.2547711` para vincular com a ficha do Google Maps.
* **OpeningHoursSpecification:** Declarando abertura diária das 19:00 às 03:30.
* **AggregateRating:** 4.0 estrelas comprovadas no Google Meu Negócio.
* **PriceRange:** `$$`.

### 8.2. Prova Social Integrada
Exibição em destaque de resenhas reais de clientes de Goiânia:
* *"Preço justo, pois os sanduíches são gostosos e deixam você saciado."*
* *"Lanche e atendimento excelente! Peço há anos aqui em Goiânia."*
* Selo do Google com link direto para rota no Waze e Google Maps.

---

## 9. Checklist Pré-Lançamento para Novos Clientes

Ao replicar este template para uma nova hamburgueria ou lanchonete:
- [ ] Obter a logo e fotos reais dos sanduíches (preferencialmente em corte frontal).
- [ ] Rodar o script de otimização de imagens para não ultrapassar 100KB por foto.
- [ ] Ajustar cores primárias no `:root` do `style.css` (ex.: amarelo cheddar, vermelho pit-dog ou verde artesanal).
- [ ] Cadastrar os produtos e ofertas na API da Cakto com `showAddressFields: true`.
- [ ] Atualizar os links de checkout no array `PRODUCTS` do `script.js`.
- [ ] Inserir o WhatsApp do cliente na constante `WHATSAPP_PHONE`.
- [ ] Customizar a lista de bairros e taxas de entrega da cidade do cliente.
- [ ] Atualizar as coordenadas de latitude/longitude e horários no Schema JSON-LD do `index.html`.
- [ ] Executar o deploy na Vercel e registrar o domínio oficial `.com.br`.
