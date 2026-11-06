# 🎬 Guia Definitivo: Como Criar um Site de Alta Conversão com Showcase de Vídeos e Foco Dual (Sofá & Automotivo) — SoffCar

Este manual documenta a arquitetura, o design system Dark Tech Obsidian & Neon Cyan, o espaço exclusivo para demonstrações em vídeo, o sistema dual de especialidades (residencial + automotivo) e as técnicas avançadas de CRO aplicadas no site da **SoffCar Higienização Limpeza e Impermeabilização de Estofados** (Samambaia / Distrito Federal).

Utilize este documento como **Procedimento Operacional Padrão (SOP)** e template mestre para criar landing pages inovadoras no nicho de higienização de sofás, colchões e estética interna automotiva.

---

## 📑 Índice
1. [Visão Geral & Posicionamento da SoffCar](#1-visão-geral--posicionamento-da-soffcar)
2. [O Espaço Dedicado para Vídeos ("SoffCar Cinema Showcase")](#2-o-espaço-dedicado-para-vídeos)
3. [Instruções para Inserir os Vídeos do Cliente (Após o Fechamento)](#3-instruções-para-inserir-os-vídeos-do-cliente)
4. [As Novas Técnicas de Engenharia & CRO Exclusivas](#4-as-novas-técnicas-de-engenharia--cro-exclusivas)
5. [Design System & Identidade Visual (Dark Tech Obsidian & Neon Cyan)](#5-design-system--identidade-visual)
6. [Simulador de Orçamento Express com Seletor de Cidades do DF](#6-simulador-de-orçamento-express-com-seletor-do-df)
7. [Slider Interativo Antes & Depois (Touch & Drag)](#7-slider-interativo-antes--depois)
8. [Prova Social GMB (Ficha Oficial 5.0 com 119 Avaliações)](#8-prova-social-gmb)
9. [SEO Local, Schemas JSON-LD & Geolocalização (Samambaia / DF)](#9-seo-local-schemas-json-ld--geolocalização)
10. [Deploy Contínuo na Vercel & Repositório GitHub](#10-deploy-contínuo-na-vercel--repositório-github)
11. [Checklist de Customização Rápida para Novos Clientes](#11-checklist-de-customização-rápida)

---

## 1. Visão Geral & Posicionamento da SoffCar

A SoffCar possui um diferencial marcante em seu próprio nome: **SOFF** (Sofás & Estofados Residenciais) + **CAR** (Estética & Higienização Interna Automotiva). O site foi construído sob medida para consolidar esse posicionamento premium no mercado de Samambaia e de todo o Distrito Federal.

### Pilares Fundamentais do Projeto:
* **Atmosfera Visual:** Dark Tech Obsidian (`#070D1D`) + Neon Cyan Glow (`#00E5FF`) com efeitos de profundidade e glassmorphism.
* **Foco Central:** Showcase de Vídeos Reais + Especialização Dual (Estofados da Casa & Detalhamento Interno de Veículos).
* **Demonstração de Prova:** Player dinâmico de vídeos com abas de categoria, lightbox modal em tela cheia e slider interativo antes/depois.
* **Orçamento:** Simulador Express integrado às Regiões Administrativas do DF, gerando mensagem pronta para o WhatsApp.
* **Técnica de Vídeo CRO:** Chamada para o cliente gravar um vídeo curto de 5s do seu estofado ou veículo para avaliação instantânea.

---

## 2. O Espaço Dedicado para Vídeos ("SoffCar Cinema Showcase")

O site conta com um módulo cinematográfico de conversão estruturado na seção `#videos`:

1. **Grid de Vídeos Responsivo:** Estruturado para exibir 3 grandes frentes de serviço (Sofá Retrátil, Higienização Automotiva VIP e Teste Hidrofóbico da Impermeabilização).
2. **Play Button Pulsante Neon:** Animação com anéis de radar (`@keyframes playGlow`) em tom Ciano Elétrico, atraindo o olhar e incentivando a reprodução.
3. **Tags de Duração e Categoria:** Indicadores (`0:48`, `1:12`, `0:35`) que transmitem a sensação de conteúdo dinâmico, rápido e sem enrolação.
4. **Filtro Dinâmico por Abas:** Permite ao visitante filtrar entre *Todos os Vídeos*, *Sofás & Colchões*, *Bancos Automotivos* e *Impermeabilização*.
5. **Lightbox Modal em Tela Cheia:** Ao clicar em qualquer card, abre um modal escuro com player centralizado, dados do atendimento e botão de conversão direta para o WhatsApp.
6. **Box de CRO "Envie seu Vídeo":** Convite para que o cliente grave um vídeo de 5 segundos do seu estofado ou veículo e envie para o WhatsApp, acelerando o fechamento do orçamento.

---

## 3. Instruções para Inserir os Vídeos do Cliente (Após o Fechamento)

Quando o cliente enviar os vídeos reais gravados pela equipe dele, siga este passo a passo simples:

### Opção A: Inserir Vídeos Locais em Formato MP4
1. Otimize os vídeos para a web (resolução 720p ou 1080p, formato MP4 / H.264).
2. Salve os arquivos na pasta `assets/`:
   - `assets/video-sofa.mp4`
   - `assets/video-automotivo.mp4`
   - `assets/video-impermeabilizacao.mp4`
3. No arquivo `index.html`, localize o comentário:
   `<!-- [ESPAÇO RESERVADO PARA VÍDEO DO CLIENTE - VÍDEO 1: SOFÁ] -->`
4. Substitua a tag `<img>` pelo elemento `<video>`:
   ```html
   <video controls poster="assets/video-thumb-sofa.webp" style="width: 100%; height: 100%; object-fit: cover;">
     <source src="assets/video-sofa.mp4" type="video/mp4">
     Seu navegador não suporta vídeos HTML5.
   </video>
   ```

### Opção B: Incorporar Reels do Instagram (@soffcarlimpeza) ou Shorts do YouTube
1. Copie o código de incorporação (`<iframe>`) fornecido pelo Instagram ou YouTube.
2. No elemento `.video-thumb-container`, insira o iframe mantendo a classe responsiva.

---

## 4. As Novas Técnicas de Engenharia & CRO Exclusivas

1. **Dual Focus Switcher ("Residencial" vs. "Automotivo"):**
   - Abas dinâmicas no topo permitindo alternar instantaneamente entre a visão de sofás e colchões residenciais e a visão de estética interna de veículos.
2. **Simulador de Orçamento com Cidades do DF:**
   - Dropdown com as principais Regiões Administrativas do DF (Samambaia, Taguatinga, Ceilândia, Águas Claras, Plano Piloto, Vicente Pires, Guará, etc.).
   - Geração de mensagem pronta no WhatsApp com o serviço, cidade e situação do tecido.
3. **Slider Comparativo Antes & Depois Interativo:**
   - Barra deslizável que permite ao visitante puxar com o mouse no desktop ou com o dedo no celular, revelando a diferença antes e depois da higienização.
4. **Selo de Químicos Certificados ANVISA:**
   - Tranquiliza famílias com bebês, idosos e animais de estimação, destacando que os bactericidas são hipoalergênicos e atóxicos.
5. **Gatilho de Plantão 24 Horas no DF:**
   - Notificação em tempo real de disponibilidade de atendimento e rotas diretas para Samambaia e regiões vizinhas.

---

## 5. Design System & Identidade Visual

- **Fundo Principal (Dark Canvas):** `#070D1D`
- **Superfície de Cartões:** `#0E172E` e `#131F3F`
- **Ciano Primário:** `#0EA5E9`
- **Ciano Neon Brilhante:** `#00E5FF`
- **Bordas com Brilho Sutil:** `rgba(14, 165, 233, 0.4)`
- **Tipografia:**
  - Títulos: `Montserrat` (pesos 700, 800, 900)
  - Corpo: `Plus Jakarta Sans` (pesos 400, 500, 600)

---

## 6. Prova Social GMB Oficial (Samambaia - DF)

Os depoimentos reais da ficha do Google Meu Negócio foram incorporados diretamente no HTML com Schema.org:
- **Pedro Rodrigues:** *"Agilidade no orçamento, na marcação e pontualidade conforme o combinado."*
- **Alex Gomes:** *"Excelente profissional, ótimo serviço e resultado perfeito."*
- **Sara França:** *"Um excelente trabalho, lavei sofá, colchão e cadeiras."*
- **Nota:** 5.0 estrelas com mais de 119 avaliações.

---

## 7. Deploy Contínuo na Vercel & Repositório GitHub

- **Repositório GitHub:** `https://github.com/KrayKrazy/soffcar`
- **URL de Produção na Vercel:** `https://soffcar.vercel.app` *(ou espelho `https://soffcar-kelevra.vercel.app`)*
- **Pasta Local do Template:** `C:\Users\Solano\Documents\sites\templates sites\template-soffcar`
- **Pasta do Cliente:** `C:\Users\Solano\Documents\sites\soffcar`
