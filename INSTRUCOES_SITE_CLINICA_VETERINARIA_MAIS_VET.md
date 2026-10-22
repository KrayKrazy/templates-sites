# 🐾 Guia Definitivo: Como Criar um Site de Alta Conversão para Clínicas Veterinárias e Pronto Socorro 24 Horas (Mais Vet Clínica Veterinária)

Este manual documenta a arquitetura técnica, engenharia de conversão, psicologia do tutor de animais, design system, componentes interativos, rotinas de triagem para WhatsApp e procedimentos de deploy na nuvem utilizados no desenvolvimento do site oficial da **Mais Vet Clínica Veterinária 24h** (Setor Faiçalville, Goiânia - GO).

Use este documento como template mestre e Procedimento Operacional Padrão (SOP) para criar landing pages e sites institucionais de alta performance para clínicas veterinárias, hospitais de pequenos animais, consultórios veterinários e centros cirúrgicos com plantão de emergência 24h.

---

## 📑 Índice
1. [Visão Geral & Psicologia do Nicho Veterinário 24h](#1-visão-geral--psicologia-do-nicho-veterinário-24h)
2. [Pesquisa e Benchmarking via GitHub MCP](#2-pesquisa-e-benchmarking-via-github-mcp)
3. [Estrutura de Pastas e Arquitetura de Arquivos](#3-estrutura-de-pastas-e-arquitetura-de-arquivos)
4. [Design System & Identidade Visual Médica Animal](#4-design-system--identidade-visual-médica-animal)
5. [Logomarca Oficial e Otimização dos Ativos Visuais](#5-logomarca-oficial-e-otimização-dos-ativos-visuais)
6. [Anatomia das Seções de Alta Conversão](#6-anatomia-das-seções-de-alta-conversão)
7. [Simulador de Triagem Rápida & Encaminhamento para WhatsApp](#7-simulador-de-triagem-rápida--encaminhamento-para-whatsapp)
8. [Engenharia de Tráfego e Conversão para WhatsApp e Ligações](#8-engenharia-de-tráfego-e-conversão-para-whatsapp-e-ligações)
9. [Deploy e Publicação na Vercel via MCP](#9-deploy-e-publicação-na-vercel-via-mcp)
10. [Checklist Pré-Lançamento para Clínicas Veterinárias](#10-checklist-pré-lançamento-para-clínicas-veterinárias)

---

## 1. Visão Geral & Psicologia do Nicho Veterinário 24h

O setor veterinário — especialmente quando opera com pronto socorro 24 horas — possui um comportamento de compra e busca drasticamente diferente de comércios tradicionais. Ele se divide em dois estados mentais do tutor:

* **Estado de Emergência Crítica (Pânico & Agilidade Máxima):**
  - Ocorre em acidentes, atropelamentos, convulsões, intoxicações e partos distócicos (geralmente à noite ou em fins de semana).
  - O tutor **não tem tempo para ler textos longos**. Ele precisa de 3 respostas em menos de 3 segundos na tela do celular:
    1. A clínica está **aberta agora**?
    2. Onde fica e quanto tempo demora para chegar?
    3. Como ligo ou aviso que estou a caminho para prepararem a maca?
* **Estado de Decisão Racional & Confiança Afetiva (Consultas, Castração e Especialidades):**
  - Cães e gatos são membros da família ("filhos de quatro patas"). O tutor busca segurança, acolhimento, higienização impecável e comprovação de competência médica.
  - A quebra de objeções depende de:
    - Ver a foto real dos veterinários com jaleco e estetoscópio.
    - Prova social autêntica de outros tutores cujos animais foram salvos e curados.
    - Clareza sobre procedimentos cirúrgicos (anestesia inalatória segura, monitoramento multiparamétrico).

### Os 5 Pilares de Sucesso Deste Modelo:
1. **Ticker & Badge de Plantão 24 Horas em Tempo Real:** Confirmação visual imediata com indicador luminoso verde (`live-dot pulse`) informando que o plantão está ativo ininterruptamente.
2. **Prova Social Real do Google (Nota 4.9★ com +127 avaliações):** Destaque aos depoimentos reais de tutores de Goiânia, com ênfase no atendimento humanizado e na recuperação de casos graves.
3. **Simulador de Triagem Veterinária Inteligente:** Ferramenta interativa que coleta espécie do pet (Cão/Gato), tipo de necessidade (Emergência, Consulta, Vacinas, Castração, Especialista), idade e relato dos sintomas, gerando mensagem pré-formatada para o WhatsApp de plantão.
4. **Filtro Dinâmico de Especialidades por Categoria:** Navegação rápida entre *Emergência & Cirurgias*, *Consultas & Especialidades* e *Exames & Preventivos*.
5. **SEO Local Rigoroso com GeoTags & Schema JSON-LD:** Metatags `VeterinaryCare` e `LocalBusiness`, mapeando latitude/longitude exatas do Setor Faiçalville para ranqueamento prioritário nas buscas "veterinário 24 horas goiânia".

---

## 2. Pesquisa e Benchmarking via GitHub MCP

Utilizando o servidor MCP do GitHub (`github-mcp-server`), foram pesquisados e analisados repositórios públicos internacionais e de alto nível técnico focados em clínicas veterinárias:

* **Repositório de Referência 1: `AlexIA-24/Template-Veterinaire-CSS`**
  - *Destaques aproveitados:* Arquitetura moderna sem dependência de frameworks pesados (Vanilla HTML/CSS/JS puro), status dinâmico de funcionamento em tempo real, abas segmentadas por espécies animais e conformidade com acessibilidade e performance PageSpeed.
* **Repositório de Referência 2: `Rubel011/Vetspot_veterinary-clinic_website`**
  - *Destaques aproveitados:* Estrutura de agendamento de consultas com triagem de sintomas, catálogo de especialidades clínicas e comunicação de suporte hospitalar.
* **Repositório de Referência 3: `basitmanzoor/Bootstrap-PSD-to-Web`**
  - *Destaques aproveitados:* Grid visual de equipe médica, apresentação de exames diagnósticos e bloco de FAQ para quebra de dúvidas pré-atendimento.

A partir desse benchmark global, desenvolveu-se uma solução customizada para o mercado brasileiro, integrando o botão flutuante com pulso para WhatsApp, barra fixa de contato mobile (Call/WhatsApp) e linguagem direta e acolhedora.

---

## 3. Estrutura de Pastas e Arquitetura de Arquivos

O projeto está estruturado de forma modular e espelhado tanto no diretório de produção do cliente quanto no repositório de templates replicáveis:

```text
C:\Users\Solano\Documents\sites\mais vet clínica\
├── site/
│   ├── index.html                   # Estrutura semântica, SEO local Goiânia e Schema JSON-LD
│   ├── style.css                    # Design system responsivo, variáveis CSS e microinterações
│   ├── script.js                    # Motor de triagem WhatsApp, filtros e FAQ interativo
│   └── assets/                      # Imagens otimizadas extraídas dos ativos reais do cliente
│       ├── logo.jpg                 # Logomarca oficial circular (Verde Floresta institucional)
│       ├── equipe-veterinaria.jpg   # Foto da equipe médica veterinária com jaleco/estetoscópio
│       ├── checkup-emergencia-24h.jpg # Atendimento clínico e plantão 24h
│       ├── castracao-cirurgias.jpg  # Campanha de castração segura para cães e gatos
│       ├── vacinas-vermifugacao.jpg # Imunização e vermifugação preventiva
│       ├── dermatologia-cuidados.jpg# Especialidade de dermatologia e cuidados de pele/pelos
│       ├── clinica-geral-respiratoria.jpg # Proteção respiratória no frio e clínica geral
│       ├── nutricao-petiscos.jpg    # Nutrologia animal e alimentos saudáveis
│       └── felinos-gatos.jpg        # Medicina felina e conscientização FeLV
├── deploy_mais_vet.mjs              # Script de automação de deploy na Vercel via API REST v13
├── gmb.txt                          # Dados brutos extraídos do Google Meu Negócio (4.9★, 127 avaliações)
├── instagram.txt                    # Informações do perfil oficial @maisvetgo
└── Instagram/                       # Diretório com os criativos originais em alta resolução

C:\Users\Solano\Documents\sites\templates sites\
├── template-veterinaria/             # Template replicável pronto para novos clientes veterinários
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
└── INSTRUCOES_SITE_CLINICA_VETERINARIA_MAIS_VET.md # Este manual mestre
```

---

## 4. Design System & Identidade Visual Médica Animal

A paleta de cores foi desenvolvida diretamente a partir da logomarca oficial da Mais Vet e de seus criativos no Instagram:

### 🎨 Variáveis CSS Oficiais (`style.css`)
```css
:root {
  /* Cores Primárias da Marca Mais Vet */
  --color-primary-dark: #072718;       /* Verde floresta profundo */
  --color-primary: #0a3a24;            /* Verde médico institucional Mais Vet */
  --color-primary-light: #125737;      /* Verde médio de realce */
  --color-primary-glow: rgba(10, 58, 36, 0.15);

  /* Acentos de Ação & Sucesso */
  --color-accent-mint: #10b981;        /* Menta vivo para CTAs e confirmações */
  --color-accent-mint-hover: #059669;
  --color-accent-glow: rgba(16, 185, 129, 0.25);

  /* Alerta Crítico 24 Horas */
  --color-emergency: #dc2626;          /* Vermelho alerta de pronto socorro 24h */
  --color-emergency-dark: #b91c1c;
  --color-emergency-glow: rgba(220, 38, 38, 0.35);

  /* Avaliações & Destaques de Confiança */
  --color-gold: #f59e0b;               /* Ouro para estrelas 4.9 no Google */
  --color-gold-glow: rgba(245, 158, 11, 0.25);

  /* Superfícies e Tipografia */
  --bg-page: #f8fafc;
  --bg-surface: #ffffff;
  --bg-surface-tint: #f0fdf4;
  --font-main: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```

---

## 5. Logomarca Oficial e Otimização dos Ativos Visuais

O logotipo oficial traz a clássica cruz médica com as silhuetas de um cão e de um gato integradas, em fundo verde floresta e tipografia sólida com o slogan: **"Cuidado e carinho em um só lugar"**.

Todos os ativos visuais utilizados no site foram extraídos diretamente do arquivo do cliente e nomeados de acordo com sua função semântica no funil de vendas:
* `logo.jpg`: Utilizado no Header, Footer, Favicon e no Card Final de Conversão.
* `equipe-veterinaria.jpg`: Utilizado como imagem principal da Hero e na seção institucional do corpo clínico, humanizando a empresa com os veterinários reais.
* `checkup-emergencia-24h.jpg`: Card flutuante na Hero comunicando a estrutura hospitalar 24h.
* `castracao-cirurgias.jpg`, `vacinas-vermifugacao.jpg`, `dermatologia-cuidados.jpg`, etc.: Utilizados no grid de conscientização e aconselhamento médico, reforçando o valor de cada especialidade.

---

## 6. Anatomia das Seções de Alta Conversão

### 1. Top Emergency Bar (Faixa Vermelha de Alerta)
- Informa que o plantão de emergência 24h está ativo ininterruptamente.
- Botão de ligação rápida direta com um toque `(62) 4141-8515` e link imediato para o WhatsApp.

### 2. Header Fixo & Transparente com Glassmorphism
- Logotipo com contorno mint green, nome da marca e tagline.
- Navegação fluida para as seções principais.
- Botão CTA prioritário *"Agendar Consulta"* e menu hamburger responsivo para celulares.

### 3. Hero Section com Métricas de Autoridade
- Título de alto impacto: *"Saúde, Amor e Medicina Veterinária Avançada 24 Horas por Dia"*.
- Grade de métricas de confiança: `24h Plantão`, `4.9★ (+127 Avaliações)`, `15+ Especialidades`, `100% Amor e Dedicação`.
- Dois botões de ação: Emergência 24h (com efeito de pulso contínuo) e Simulação de Atendimento.
- Card visual em destaque com a foto dos médicos de plantão e indicação do horário em tempo real.

### 4. Banner de Emergência 24h & Pronto Socorro
- Caixa de alto contraste com fundo escuro avermelhado e lista de sintomas críticos que exigem socorro imediato (intoxicações, atropelamentos, dificuldade respiratória, convulsões, vômitos/diarreias agudas e complicações de parto).
- Botão *"Avisar Chegada no WhatsApp"* e *"Traçar Rota GPS (Faiçalville)"*.

### 5. Catálogo Completo de Serviços com Filtro por Abas
- Abas interativas: *Todas as Especialidades*, *Emergência & Cirurgias*, *Consultas & Especialidades*, *Exames & Preventivos*.
- 12 cards detalhados contemplando: Emergência & UTI, Cirurgias Gerais e Castração, Internação Monitorada, Consultas Cães & Gatos, Cardiologia, Ortopedia, Dermatologia, Oftalmologia, Raio-X & Ultrassom, Vacinas Importadas, Oncologia & Fisioterapia e Farmácia Veterinária Integrada.

### 6. Ferramenta Interativa de Triagem Rápida
- Formulário inteligente que permite ao tutor relatar a condição do animal de forma guiada, montando a mensagem perfeita para o veterinário no WhatsApp.

### 7. Grade de Conscientização Médica & Bem-Estar Animal
- 6 cards educativos baseados nos posts reais da Mais Vet (Castração precoce, Vermifugação, Cuidados com Pele/Pelos, Gripes no Frio, Leucemia Felina e Nutrição Saudável).

### 8. Estrutura Hospitalar & Apresentação da Equipe
- Explicação do atendimento humanizado, controle estrito de biossegurança e laboratório próprio para diagnósticos rápidos.

### 9. Prova Social Autêntica do Google Meu Negócio
- Destaque à nota média **4.9★** com mais de 127 avaliações reais.
- Depoimentos verídicos de tutores locais que tiveram seus pets curados e atendidos de madrugada na Mais Vet.

### 10. Localização, Horários & Mapa Interativo
- Endereço físico completo no Setor Faiçalville, Goiânia.
- Mapa dinâmico integrado via Google Maps com marcação de coordenadas exatas e botão de rota.

### 11. FAQ Accordion (Perguntas Frequentes)
- Respostas para as principais dúvidas sobre emergências sem agendamento, cirurgias, idade de castração, atendimento a domicílio e facilidades de pagamento.

### 12. Floating WhatsApp & Barra Fixa Mobile
- Botão flutuante no canto inferior direito com animação de pulso e tooltip.
- Barra fixa inferior nos celulares com botões largos de *"Ligar Agora"* e *"Plantão 24h"*.

---

## 7. Simulador de Triagem Rápida & Encaminhamento para WhatsApp

A ferramenta desenvolvida em `script.js` elimina o atrito de digitação do tutor aflito e entrega um lead pronto e categorizado para a equipe da clínica:

### Lógica de Funcionamento:
1. **Seleção do Pet:** Cachorro 🐶, Gato 🐱 ou Outro 🐾.
2. **Motivo do Atendimento:** Seleção entre Emergência 24h, Consulta Geral, Castração, Vacinas, Raio-X, Especialista ou Atendimento em Domicílio.
3. **Dados do Animal:** Nome, idade aproximada e relato breve dos sintomas ou necessidades.
4. **Horário de Preferência:** Agora (Emergência imediata), Manhã, Tarde, Noite ou Próximo dia útil.

### Formato da Mensagem Gerada para o WhatsApp:
```text
🐾 *NOVA TRIAGEM / AGENDAMENTO - MAIS VET 24H*

📌 *Tipo de Pet:* Cachorro 🐶
🏷️ *Nome do Pet:* Thor
⏳ *Idade/Porte:* 3 anos
🩺 *Motivo / Especialidade:* 🆘 Plantão de Emergência 24 Horas
⏰ *Horário Desejado:* 🚨 Imediatamente / O mais rápido possível (Emergência)
📝 *Relato dos Sintomas / Dúvidas:*
"Ingeriu chocolate e está apresentando vômitos e salivação."

📍 *Unidade:* Setor Faiçalville, Goiânia - GO
_Enviado pelo site oficial Mais Vet._
```

---

## 8. Engenharia de Tráfego e Conversão para WhatsApp e Ligações

Cada botão e link de contato do site possui parametrização personalizada para rastrear a origem do lead:

| Ponto de Contato | Ação Disparada | Texto Pré-configurado |
| :--- | :--- | :--- |
| **Top Bar Emergência** | Botão WhatsApp | `Olá, estou com uma EMERGÊNCIA veterinária e preciso de atendimento imediato!` |
| **Top Bar Telefone** | Chamada Telefônica | `tel:+556241418515` (discagem imediata) |
| **Header CTA** | Botão WhatsApp | `Olá! Gostaria de agendar um atendimento na Mais Vet.` |
| **Hero Botão 1** | Botão Emergência | `Olá, estou com uma EMERGÊNCIA veterinária agora!` |
| **Hero Duty Card** | Chamada Telefônica | `tel:+556241418515` |
| **Banner Vermelho** | Botão Avisar Chegada | `EMERGÊNCIA VETERINÁRIA 24H: Estou a caminho com meu pet em estado grave!` |
| **Banner Vermelho** | Botão Rota GPS | Link direto para navegação do Google Maps no Setor Faiçalville |
| **Cards de Serviços** | Links individuais | Textos contextualizados para cada especialidade |
| **Triagem Rápida** | Formulário dinâmico | Mensagem completa estruturada com os dados do pet |
| **Botão Flutuante** | Botão WhatsApp | `Olá! Vim pelo site da Mais Vet e gostaria de atendimento.` |
| **Barra Fixa Mobile** | Ligar / WhatsApp | Ligações e mensagens com 1 toque no polegar |

---

## 9. Deploy e Publicação na Vercel via MCP

O deploy foi automatizado via infraestrutura da **Vercel** utilizando as ferramentas do MCP e API REST v13:

### 1. Dados Técnicos da Infraestrutura:
* **Nome do Projeto:** `mais-vet-clinica`
* **Project ID:** `prj_3rNrocLxKeVVYy4ag7m1QrDJCQGE`
* **Team ID:** `team_FQHt125SYh8CKhjI2vSpBExb`
* **Status do Build:** `READY` (Produção Global em Edge Network com latência ultra baixa)

### 2. URLs de Acesso Público:
* 🌐 **URL Oficial de Produção:** [https://mais-vet-clinica.vercel.app](https://mais-vet-clinica.vercel.app)
* 🔗 **Deploy Hash Direto:** [https://mais-vet-clinica-kelevra.vercel.app](https://mais-vet-clinica-kelevra.vercel.app)

---

## 10. Checklist Pré-Lançamento para Clínicas Veterinárias

Ao aplicar este template para uma nova clínica veterinária de outro cliente, execute os seguintes passos:

1. [ ] **Atualização do Número de WhatsApp & Telefone:**
   - Altere em `index.html` e `script.js` todas as ocorrências de `556241418515` pelo número do novo cliente.
2. [ ] **Substituição da Logomarca & Favicon:**
   - Adicione o novo logotipo em `assets/logo.jpg`.
3. [ ] **Ajuste de Endereço & Coordenadas no Google Maps:**
   - Substitua o iframe de geolocalização e as coordenadas latitude/longitude nas meta tags e no Schema JSON-LD.
4. [ ] **Validação do Horário de Funcionamento:**
   - Se a clínica não for 24h, adapte as badges para o horário real de atendimento (ex: 08h às 20h).
5. [ ] **Substituição de Imagens da Equipe e Estrutura:**
   - Insira as fotos reais do corpo clínico na pasta `assets/`.
6. [ ] **Execução do Script de Deploy:**
   - Execute o script de publicação na Vercel para propagar as alterações globalmente em menos de 1 minuto.
