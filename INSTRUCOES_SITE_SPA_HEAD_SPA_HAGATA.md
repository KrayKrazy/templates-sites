# 🌿 Guia Definitivo: Como Criar um Site de Alta Conversão & Experiência Sensorial para Spas e Head Spas

Este manual documenta a arquitetura, identidade visual, psicologia de experiência sensorial, componentes interativos de agendamento e a esteira de deploy na **Vercel** utilizada no desenvolvimento do site oficial da **Clínica Hágata SPA e Estética** — o primeiro Head Spa de Águas Lindas de Goiás e região.

Use este documento como template mestre e padrão operacional (SOP) para criar sites de alto luxo para spas urbanos, clínicas de estética integrativa, head spas orientais, massoterapeutas e centros de bem-estar.

---

## 🌐 Links do Projeto em Produção
* **URL de Produção Vercel:** [https://hagata-spa.vercel.app](https://hagata-spa.vercel.app)
* **Alias Alternativo:** [https://hagata-spa-kelevra.vercel.app](https://hagata-spa-kelevra.vercel.app)
* **Pasta do Cliente:** `C:\Users\Solano\Documents\sites\hagata`
* **Template Mestre Reutilizável:** `C:\Users\Solano\Documents\sites\templates sites\template-spa`

---

## 📑 Índice
1. [Visão Geral & Posicionamento de Negócio](#1-visão-geral--posicionamento-de-negócio)
2. [Estrutura de Pastas e Arquitetura de Arquivos](#2-estrutura-de-pastas-e-arquitetura-de-arquivos)
3. [Identidade Visual & Design System (Emerald Luxury)](#3-identidade-visual--design-system-emerald-luxury)
4. [Anatomia das Seções & Experiência do Usuário](#4-anatomia-das-seções--experiência-do-usuário)
5. [Scripts e Componentes Interativos Exclusivos](#5-scripts-e-componentes-interativos-exclusivos)
6. [Engenharia de Conversão para WhatsApp](#6-engenharia-de-conversão-para-whatsapp)
7. [Deploy Automatizado na Vercel](#7-deploy-automatizado-na-vercel)
8. [Checklist Pré-Lançamento para Novos Clientes de SPA](#8-checklist-pré-lançamento-para-novos-clientes-de-spa)

---

## 1. Visão Geral & Posicionamento de Negócio

Negócios do nicho de SPA e bem-estar não vendem apenas procedimentos; eles vendem **tempo, refúgio, silêncio e descompressão mental**. O cliente busca uma fuga da rotina agitada e deseja ter a certeza de que será acolhido em um ambiente limpo, sofisticado e afetuoso.

### Os 4 Pilares de Sucesso deste Modelo:
1. **Pioneirismo & Exclusividade:**
   * Destaque imediato como o **1º Head Spa da Região** (técnica inspirada nos rituais de águas do Japão e da Tailândia).
   * Diferenciação clara: *"Ao contrário do que muitos pensam, Head Spa não é só lavar o cabelo — é terapia crânio-cervical profunda"*.
2. **Autoridade em Estética Íntima:**
   * Referência em tratamentos para manchas, atrito e foliculite (virilha, axilas e glúteos), comunicados com delicadeza, respeito e discrição.
3. **Imersão Visual com Fotos Reais:**
   * Sem banco de imagens impessoal. Todas as fotos do site são de clientes reais da clínica (arco dourado de água, ofurô com morangos e fondue, noivas, escalda-pés com ervas e flores, louça de chá personalizada).
4. **Agendamento Sem Fricção (Mobile-First):**
   * Mais de 90% das clientes chegam pelo Instagram via smartphone. O site conta com o **Simulador de Experiência Express**, permitindo escolher procedimento, duração, mimos extras (fondue, espumante, velas) e gerar uma mensagem pronta no WhatsApp com 1 clique.

---

## 2. Estrutura de Pastas e Arquitetura de Arquivos

A estrutura foi montada para ser auto-contida, rápida, sem peso de dependências e pronta para abertura local com dois cliques ou deploy estático na Vercel:

```text
hagata/ (e template-spa/)
├── index.html              # Estrutura semântica, metatags SEO locais e Schema JSON-LD (DaySpa)
├── style.css               # Design system luxury (Emerald & Gold, glassmorphism e animações)
├── script.js               # Simulador de agendamento, filtros do cardápio, lightbox e FAQ acordeão
├── vercel.json             # Roteamento limpo e headers de performance para Vercel
├── deploy_hagata.mjs       # Script Node.js de deploy automatizado via Vercel REST API
├── Instagram/              # Fotos reais dos procedimentos e identidade visual oficial
│   ├── logo.webp           # Logotipo oficial (mandala dourada em fundo verde esmeralda)
│   ├── imgi_20_...jpg      # Foto do Head Spa com arco dourado de água
│   ├── imgi_34_...jpg      # Foto da massagem crânio-cervical durante o Head Spa
│   ├── imgi_28_...jpg      # Bandeja de chá de acolhimento e carta de boas-vindas
│   ├── imgi_46_...jpg      # Maca preparada com rosas, velas e iluminação estrelada
│   ├── imgi_40_...jpg      # Casal de roupão com rosas e fondue de chocolate
│   ├── imgi_32_...jpg      # Ofurô com cromoterapia, morangos e velas
│   ├── imgi_42_...jpg      # Brinde do casal com taças
│   ├── imgi_21_...jpg      # Escalda-pés floral com pétalas e frutas cítricas
│   ├── imgi_52_...jpg      # Banho de imersão com leite e rosas
│   ├── imgi_17_...jpg      # Micropigmentação labial e sobrancelhas
│   ├── imgi_45_...jpg      # Macro detalhado de lábios hidratados
│   ├── imgi_24_...jpg      # Dia da Noiva com vestido e buquê
│   └── imgi_39_...jpg      # Xícara personalizada com logo Hágata e rosa vermelha
├── gmb.txt                 # Backup dos dados do Google Meu Negócio (nota 5.0, 54 avaliações)
├── instagram.txt           # Backup dos dados e bio do perfil do Instagram (+6.5k seguidores)
└── serviços gmb.txt        # Tabela original de preços e procedimentos
```

---

## 3. Identidade Visual & Design System (Emerald Luxury)

A paleta de cores foi extraída diretamente do logotipo oficial da **Clínica Hágata**:

### 🎨 Paleta de Cores
* **Verde Esmeralda Nobre (`#163A29` / `#0A1F14`):** Transmite conexão com a natureza, serenidade profunda, saúde botânica e sofisticação.
* **Dourado Imperial & Champanhe (`#D4AF37` / `#C5A059` / `#F4E5C8`):** Representa o luxo calmo, o cuidado precioso e a exclusividade do arco dourado de água.
* **Areia & Alabastro Quente (`#FBF9F5` / `#F5F0E6`):** Proporciona uma leitura limpa, acolhedora e que descansa a visão.
* **Verde WhatsApp (`#25D366` / `#128C7E`):** Cor de alta conversão para o botão de agendamento imediato.

### 🔤 Tipografia de Luxo
* **Headlines (`h1`, `h2`, `h3`):** `'Playfair Display'`, clássica, refinada e editorial.
* **Textos Corridos e Botões:** `'Plus Jakarta Sans'`, ultra-nítida e legível em qualquer dispositivo móvel.

---

## 4. Anatomia das Seções & Experiência do Usuário

1. **Barra de Status Superior:**
   * Sinaliza que a clínica atende com hora marcada, garantindo privacidade e atendimento sem pressa.
2. **Navbar Flutuante com Glassmorphism:**
   * Logotipo em destaque, menu de navegação suave e botão rápido de agendamento.
3. **Hero Section Sensorial:**
   * Imagem de fundo com atmosfera acolhedora, headline impactante (*"Desconecte do mundo. Reconecte com você"*), selo de nota máxima no Google (5.0 com 54 avaliações) e botões de ação imediata.
4. **Destaque Head Spa Tailandês & Japonês:**
   * Explicação didática dos benefícios: alívio de estresse, melhora do sono, desobstrução do bulbo capilar e cascata morna de relaxamento crânio-cervical.
5. **Cardápio de Rituais & Day Spa com Filtros:**
   * Cards com valores reais, tempo de duração e botão individual para agendar o procedimento desejado.
6. **Celebrações a Dois & Dia da Noiva:**
   * Apresentação das salas decoradas com pétalas de rosas, velas, ofurô com cromoterapia, fondue de morango com chocolate e espumante.
7. **Os 4 Passos da Sua Visita:**
   * Boas-vindas com chá exclusivo, escalda-pés floral, ritual de calmaria e despertar gradual sem pressa.
8. **Simulador de Experiência Express:**
   * Calculadora interativa onde a cliente escolhe o procedimento, duração, mimos adicionais, data preferida e gera a mensagem no WhatsApp.
9. **Galeria de Fotos do Instagram com Lightbox:**
   * Fotos reais em alta qualidade com modal para ampliação.
10. **Depoimentos Reais do Google Meu Negócio:**
    * Comentários autênticos de clientes satisfeitas comprovando a excelência do espaço.
11. **FAQ Interativo em Acordeão:**
    * Respostas claras sobre o Head Spa, clareamento íntimo, antecedentes de agendamento e vales-presente.
12. **Localização com Mapa Embebido:**
    * Endereço no Jardim Pérola 2, horários de atendimento e botão de traçar rota no GPS.
13. **Barra Mobile Fixa & Botão Flutuante Pulsante de WhatsApp:**
    * Conversão rápida e acessível em qualquer rolagem de tela.

---

## 5. Scripts e Componentes Interativos Exclusivos

* **Simulador de Agendamento:** Calcula dinamicamente o valor total com os adicionais selecionados e monta o link `wa.me` com texto estruturado.
* **Filtros por Categoria:** Alterna suavemente entre Head Spa, Day Spa, Estética Íntima e Micropigmentação/Sobrancelhas sem recarregar a página.
* **FAQ com Acordeão Suave:** Abre apenas a pergunta clicada e fecha as demais automaticamente.
* **Lightbox da Galeria:** Modal responsivo com tecla `Escape` e clique no fundo para fechar.
* **Header Inteligente:** Adiciona fundo escuro com desfoque e sombra suave ao rolar a página.

---

## 6. Engenharia de Conversão para WhatsApp

Ao utilizar o **Simulador de Agendamento**, o cliente clica no botão e seu WhatsApp abre com uma mensagem já estruturada:

```text
🌿 *Olá, Clínica Hágata SPA & Estética!*
Gostaria de solicitar um agendamento de experiência:

✨ *Procedimento/Ritual:* Day SPA Urbano Relaxante
⏳ *Duração estimada:* 1 hora e 30 minutos
🎁 *Mimos & Adicionais:* Fondue de Frutas com Chocolate, Decoração com Velas & Rosas
💰 *Investimento estimado:* R$ 362,00

📅 *Previsão de Data:* 25/10/2026
⏰ *Período preferido:* Tarde (13:00 às 17:00)
👤 *Meu Nome:* Camila Rodrigues
📝 *Observações:* Comemoração de aniversário de casamento

Poderiam verificar os horários disponíveis para viver essa experiência? Muito obrigada(o)!
```

---

## 7. Deploy Automatizado na Vercel

O deploy foi realizado utilizando a **API REST da Vercel** com hash SHA-1 de cada arquivo para upload atômico, garantindo 100% de integridade dos arquivos e velocidade máxima em CDN global:

1. **Criação do Projeto:** Projeto `hagata-spa` criado no time `team_FQHt125SYh8CKhjI2vSpBExb`.
2. **Upload Atômico:** Upload via `POST /v2/files` de todos os arquivos HTML, CSS, JS e imagens WebP/JPEG otimizadas.
3. **Criação do Deployment:** `POST /v13/deployments` com `target: "production"`.
4. **Atribuição Automática de Domínios:**
   * Domínio Principal: `https://hagata-spa.vercel.app`
   * Domínio de Equipe: `https://hagata-spa-kelevra.vercel.app`

---

## 8. Checklist Pré-Lançamento para Novos Clientes de SPA

Ao adaptar este template para outro cliente do nicho de beleza e SPA:
- [ ] Substituir o arquivo `Instagram/logo.webp` pelo logotipo oficial do novo cliente.
- [ ] Atualizar o número de WhatsApp nas URLs `https://wa.me/55...` em `index.html` e `script.js`.
- [ ] Atualizar as coordenadas e endereço do Google Maps no iframe e no Schema JSON-LD.
- [ ] Inserir fotos reais do espaço na pasta `Instagram/`.
- [ ] Ajustar a tabela de preços e nomes de procedimentos no simulador e nos cards.
- [ ] Rodar o script `node deploy_hagata.mjs` para atualizar o site em produção na Vercel.
