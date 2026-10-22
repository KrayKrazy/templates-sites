# 🌐 Ecossistema Master de Templates & Sites de Alta Conversão

> **Framework de Engenharia & CRO (Conversion Rate Optimization) para Negócios Locais, Clínicas, Gastronomia e Prestadores de Serviços.**  
> Criado e mantido por [@KrayKrazy](https://github.com/KrayKrazy).

---

## 📑 Sumário
1. [Visão Geral do Repositório](#-visão-geral-do-repositório)
2. [Arquiteturas & Padrões de Engenharia](#-arquiteturas--padrões-de-engenharia)
3. [Catálogo dos Templates Disponíveis](#-catálogo-dos-templates-disponíveis)
4. [Acervo de Manuais Mestres e SOPs (Instruções em Markdown)](#-acervo-de-manuais-mestres-e-sops)
5. [Diretório Geral de Sites e Projetos Criados (70+ Repositórios)](#-diretório-geral-de-sites-e-projetos-criados)
6. [Guia de Deploy Rápido (Netlify & Vercel em 5 Minutos)](#-guia-de-deploy-rápido)

---

## 🎯 Visão Geral do Repositório

Este repositório consolida o **arsenal completo de landing pages, micro e-commerces e design systems** desenvolvidos com foco obsessivo em **conversão direta, velocidade mobile e tração comercial local**.

Diferente de templates convencionais de mercado que sofrem com excesso de bibliotecas pesadas (*bundle bloat*) e formulários que ninguém preenche, todas as interfaces aqui presentes seguem os seguintes preceitos:
* **Mobile-First Real:** Projetados para consumidores acessando via 4G/5G com tolerância zero a lentidão (FCP < 0.8s, Lighthouse 95–100).
* **Engenharia de Conversão para WhatsApp:** Todos os fluxos, filtros, quizzes e seleções compilam mensagens dinâmicas personalizadas no link direto do WhatsApp (`wa.me/55...`), eliminando atritos de digitação.
* **Dual-Checkout:** Integração nativa entre gateways de pagamento digital (**Cakto Pay**) com liquidação instantânea via Pix/Cartão e despacho tradicional direto para a cozinha/atendimento.
* **SEO Local & Schema.org JSON-LD:** Metadados estruturados para `LocalBusiness`, `MedicalBusiness`, `HomeAndConstructionBusiness`, `Restaurant` e `RealEstateAgent` pré-configurados.

---

## 🏗 Arquiteturas & Padrões de Engenharia

### 1. Jamstack Ultra-Lean (Vanilla Core)
* **Stack:** HTML5 Semântico + CSS3 Dinâmico (`:root` tokens) + Vanilla JavaScript puro.
* **Vantagens:** Zero dependência de Node/npm em tempo de execução, imune a vulnerabilidades de dependências, abertura local instantânea e custo de hospedagem de **R$ 0,00**.
* **Utilizado em:** `template-cartuchos`, `template-coach-emocional`, `template-corretor-imoveis`, `template-hamburgueria`, `template-linha-branca`, `template-otica`, `template-veterinaria`.

### 2. Utility-First Jamstack (Tailwind CSS CDN + Lucide)
* **Stack:** Tailwind CSS via CDN + Lucide Icons SVG + Micro-interações.
* **Vantagens:** Prototipação veloz, design moderno de luxo sensorial e manutenção limpa.
* **Utilizado em:** `template-spa`.

### 3. Micro E-Commerce Local & Dual-Checkout
* **Stack:** Catálogo reativo em JavaScript, Slide-out Cart Drawer, Customizador de Lanches (adicionais e remoções) e persistência via `localStorage`.
* **Checkout Duplo:** Pagamento digital seguro via **Cakto Pay** ou envio de comanda pronta para o WhatsApp.
* **Utilizado em:** `template-hamburgueria`.

### 4. White-Label Parametrizável (Engine de Escala)
* **Stack:** Interpolação via marcadores mustache (`{{NOME_EMPRESA}}`, `{{CIDADE}}`, `{{TELEFONE}}`, `{{GARANTIA_MESES}}`).
* **Vantagens:** Clonagem e deploy de novas operações de assistência técnica em menos de 5 minutos.
* **Utilizado em:** `template-linha-branca`.

### 5. Living Brand System (Manuais Vivos de Marca)
* **Stack:** HTML/CSS interativo com paletas cromáticas completas (HEX, RGB, CMYK, Pantone), regras tipográficas e suíte completa de SVGs vetoriais (monogramas, logos horizontais/verticais e selos).
* **Utilizado em:** `brand-michelle-cristina`.

---

## 📦 Catálogo dos Templates Disponíveis

| Diretório | Nicho / Segmento | Stack Principal | Componentes Interativos & CRO | Manual SOP Vinculado |
| :--- | :--- | :--- | :--- | :--- |
| [`brand-michelle-cristina`](./brand-michelle-cristina/) | Design System & Identidade Visual | HTML5 + CSS3 + SVGs | Manual vivo de marca com paleta completa e acervo vetorial | [README_BRAND](./brand-michelle-cristina/README_BRAND_MICHELLE_CRISTINA.md) |
| [`template-cartuchos`](./template-cartuchos/) | Suprimentos de TI & Recarga | HTML5 + CSS3 + Vanilla JS | Simulador interativo de recarga/toner por marca e modelo com WhatsApp | [INSTRUCOES](./INSTRUCOES_SITE_MULTI_CARTUCHOS.md) |
| [`template-coach-emocional`](./template-coach-emocional/) | Coach, Mentoria & Liderança | Vanilla JS + AOS + CSS Tokens | **Termômetro da Inteligência Emocional** (Quiz interativo com diagnóstico) | [INSTRUCOES](./INSTRUCOES_SITE_COACH_INTELIGENCIA_EMOCIONAL_MICHELLE.md) |
| [`template-corretor-imoveis`](./template-corretor-imoveis/) | Imóveis Médio & Alto Padrão | Vanilla JS + Modal Engine | **Property Engine**: Filtro dinâmico por categoria/bairro e **Simulador de Financiamento** | [INSTRUCOES](./INSTRUCOES_SITE_CORRETOR_IMOVEIS_CLEYTINHO.md) |
| [`template-crossfit`](./template-crossfit/) | Box de CrossFit & Treino Funcional | HTML5 + CSS3 + Vanilla JS | Grade interativa de horários, cálculo de IMC/metas e agendamento de aula experimental | [INSTRUCOES](./INSTRUCOES_SITE_CROSSFIT.md) |
| [`template-estudio-beleza`](./template-estudio-beleza/) | Salão, Estética, Nail & Lash | HTML5 + CSS3 + Vanilla JS | Seletor de procedimentos múltiplos e agendamento express no WhatsApp | [INSTRUCOES](./INSTRUCOES_SITE_ESTUDIO_BELEZA_E_SALAO.md) |
| [`template-hamburgueria`](./template-hamburgueria/) | E-Commerce Delivery / Pit-Dog | Vanilla JS + Cart Drawer + Cakto | **Dual-Checkout Cakto/WhatsApp**, Customizador de Lanches e taxa por bairro | [INSTRUCOES](./INSTRUCOES_SITE_HAMBURGUERIA_PITDOG.md) |
| [`template-linha-branca`](./template-linha-branca/) | Assistência Técnica de Eletros | White-Label (`{{TOKENS}}`) | Top Bar com `.live-pulse`, gatilhos de emergência e orçamentação direta | [INSTRUCOES](./INSTRUCOES_SITE_LINHA_BRANCA_REFRIGERACAO.md) |
| [`template-otica`](./template-otica/) | Óticas & Saúde Visual | HTML5 + CSS3 + Vanilla JS | Vitrine filtrável de armações (Masculino, Feminino, Solar) e Simulador de Lentes | [INSTRUCOES](./INSTRUCOES_SITE_OTICA_LEUS.md) |
| [`template-spa`](./template-spa/) | Head Spa & Terapias Sensoriais | Tailwind CSS + Lucide Icons | Protocolos de terapia capilar, simulador de experiência e galeria sensorial | [INSTRUCOES](./INSTRUCOES_SITE_SPA_HEAD_SPA_HAGATA.md) |
| [`template-veterinaria`](./template-veterinaria/) | Clínica Veterinária & Pronto Socorro 24h | Vanilla JS + Live Clock Engine | **Live Duty Clock** (Plantão ativo a cada 30s) e Triagem de Emergência SOS | [INSTRUCOES](./INSTRUCOES_SITE_CLINICA_VETERINARIA_MAIS_VET.md) |

---

## 📘 Acervo de Manuais Mestres e SOPs

Cada manual detalha a psicologia de compra do nicho, benchmarking extraído do GitHub, anatomia das seções e estratégias de SEO Local:

* [🥋 Academia de Luta & Karatê Tradicional (Okinawa SAD)](./INSTRUCOES_SITE_ACADEMIA_DE_LUTA_OKINAWA.md)
* [🐾 Clínica Veterinária & Emergência 24 Horas (Mais Vet)](./INSTRUCOES_SITE_CLINICA_VETERINARIA_MAIS_VET.md)
* [🕊️ Mentoria Sistêmica & Inteligência Emocional (Michelle Cristina)](./INSTRUCOES_SITE_COACH_INTELIGENCIA_EMOCIONAL_MICHELLE.md)
* [🏡 Corretor de Imóveis de Alta Performance (Cleytinho Imóveis)](./INSTRUCOES_SITE_CORRETOR_IMOVEIS_CLEYTINHO.md)
* [🏋️ Box de CrossFit & Treinamento de Alta Intensidade](./INSTRUCOES_SITE_CROSSFIT.md)
* [💇‍♀️ Estúdios de Beleza, Salões, Cabeleireiras & Nail Designers](./INSTRUCOES_SITE_ESTUDIO_BELEZA_E_SALAO.md)
* [🍔 E-Commerce para Hamburguerias & Pit-Dogs Tradicionais (Mickey's)](./INSTRUCOES_SITE_HAMBURGUERIA_PITDOG.md)
* [❄️ Assistência Técnica & Conserto de Linha Branca](./INSTRUCOES_SITE_LINHA_BRANCA_REFRIGERACAO.md)
* [🖨️ Recarga de Cartuchos, Toner e Informática Express (Multi Cartuchos)](./INSTRUCOES_SITE_MULTI_CARTUCHOS.md)
* [👓 Óticas, Armações de Grau e Solares (Leu's Ótica)](./INSTRUCOES_SITE_OTICA_LEUS.md)
* [🌿 Head Spa, Estética Avançada e Bem-Estar Sensorial (Hágata SPA)](./INSTRUCOES_SITE_SPA_HEAD_SPA_HAGATA.md)

---

## 🌐 Diretório Geral de Sites e Projetos Criados

Catálogo completo dos mais de 70 repositórios e projetos desenvolvidos no ecossistema de [@KrayKrazy](https://github.com/KrayKrazy):

### 🍕 Gastronomia, Alimentação & Delivery
* [`cardapio`](https://github.com/KrayKrazy/cardapio) — Sistema e cardápio digital para operações gastronômicas.
* [`cardapio-vitale`](https://github.com/KrayKrazy/cardapio-vitale) — Cardápio interativo e institucional para o Grupo Vitale.
* [`nete-torteria`](https://github.com/KrayKrazy/nete-torteria) — E-commerce e vitrine para doceria e tortaria artesanal.
* [`polyassados`](https://github.com/KrayKrazy/polyassados) — Landing page e pedidos para casa de assados e carnes.
* [`RR-bolos-e-festas-`](https://github.com/KrayKrazy/RR-bolos-e-festas-) — Site para confeitaria, bolos decorados e kits para festas.
* [`pesquepague`](https://github.com/KrayKrazy/pesquepague) — Site de lazer, restaurante campestre e pesque-pague.
* [`novo-empreendimento`](https://github.com/KrayKrazy/novo-empreendimento) — Portal e landing page para novo empreendimento Vitale Brasil.

### 💄 Saúde, Beleza, Estética & Bem-Estar
* [`ls-estetica-das-unhas`](https://github.com/KrayKrazy/ls-estetica-das-unhas) — Site oficial LS Estética das Unhas (Nail designer e estética em Águas Lindas).
* [`divinolook`](https://github.com/KrayKrazy/divinolook) — Landing page de moda, vestuário e beleza feminina.
* [`Vit-ria-Fashion-Cabeleireiros-`](https://github.com/KrayKrazy/Vit-ria-Fashion-Cabeleireiros-) — Salão de beleza e estética capilar feminina.
* [`podologa`](https://github.com/KrayKrazy/podologa) — Landing page para clínica de podologia e saúde dos pés.
* [`institutoameixa`](https://github.com/KrayKrazy/institutoameixa) — Portal institucional para clínica de saúde e estética.
* [`dravivi`](https://github.com/KrayKrazy/dravivi) — Presença digital e agendamento para profissional de saúde/estética.
* [`encanto`](https://github.com/KrayKrazy/encanto) — Landing page para espaço de estética e bem-estar.
* [`barbearia`](https://github.com/KrayKrazy/barbearia) — Landing page para barbearia moderna com agendamento direto.

### 🐾 Saúde Animal & Veterinária
* [`centralpet`](https://github.com/KrayKrazy/centralpet) — Site institucional e catálogo para clínica veterinária e pet shop.

### 🥊 Esportes, Luta & Fitness
* [`safari-crossfit`](https://github.com/KrayKrazy/safari-crossfit) — Website oficial da Safari CrossFit e Treinamento Funcional.
* [`7bikes`](https://github.com/KrayKrazy/7bikes) — Oficina especializada, venda e manutenção de bicicletas.

### 🚗 Automotivo, Borracharia & Baterias
* [`borracharia`](https://github.com/KrayKrazy/borracharia) — Landing page para atendimento emergencial e socorro de pneus.
* [`borrachariasolnascente`](https://github.com/KrayKrazy/borrachariasolnascente) — Borracharia e socorro 24h em Sol Nascente.
* [`jrautoportas`](https://github.com/KrayKrazy/jrautoportas) — Manutenção de travas, vidros elétricos e portas automotivas.
* [`jfbaterias`](https://github.com/KrayKrazy/jfbaterias) — Disk baterias e troca emergencial automotiva.
* [`rkbaterias`](https://github.com/KrayKrazy/rkbaterias) — Distribuidora e entrega expressa de baterias automotivas.

### ❄️ Refrigeração, Manutenção & Construção Civil
* [`brasstec`](https://github.com/KrayKrazy/brasstec) — Assistência técnica especializada em linha branca.
* [`brastol`](https://github.com/KrayKrazy/brastol) — Conserto de geladeiras, lavadoras e eletrodomésticos.
* [`wprefrigeracoes`](https://github.com/KrayKrazy/wprefrigeracoes) — Instalação e manutenção de ar-condicionado e câmaras frias.
* [`eficaz-manutencao`](https://github.com/KrayKrazy/eficaz-manutencao) — Assistência técnica para geladeiras e lavadoras Lava & Seca.
* [`msmanuten-es`](https://github.com/KrayKrazy/msmanuten-es) — Manutenção predial, reformas e instalações residenciais.
* [`bsbeletrica`](https://github.com/KrayKrazy/bsbeletrica) — Serviços de instalações elétricas e laudos técnicos em Brasília.
* [`sadeletronica`](https://github.com/KrayKrazy/sadeletronica) — Reparo e manutenção de placas e eletrônicos residenciais.
* [`sad-tec`](https://github.com/KrayKrazy/sad-tec) — Site institucional SAD Tec Eletrônica e Automação.
* [`serralheria`](https://github.com/KrayKrazy/serralheria) — Portões automáticos, grades, estruturas metálicas e coberturas.
* [`maderart`](https://github.com/KrayKrazy/maderart) — Marcenaria fina e móveis planejados de alto padrão.
* [`marmogran`](https://github.com/KrayKrazy/marmogran) — Marmoraria, granitos, bancadas e acabamentos nobres.
* [`rgvidros`](https://github.com/KrayKrazy/rgvidros) — Vidraçaria, box blindex, espelhos bisotados e cortinas de vidro.
* [`Chaveiro`](https://github.com/KrayKrazy/Chaveiro) — Socorro 24h e cópias de chaves residenciais e automotivas.
* [`Chaveiro_fernando`](https://github.com/KrayKrazy/Chaveiro_fernando) — Landing page com plantão de atendimento de chaveiro emergencial.
* [`betoneira`](https://github.com/KrayKrazy/betoneira) — Locação e manutenção de betoneiras e maquinário para obras.
* [`vazamentos`](https://github.com/KrayKrazy/vazamentos) — Caça-vazamentos não destrutivo com geofone digital.
* [`Paisagismo`](https://github.com/KrayKrazy/Paisagismo) — Projetos de paisagismo, jardins residenciais e manutenção verde.

### 🏢 Serviços Profissionais, Imobiliário & Negócios
* [`sdr-imobiliario`](https://github.com/KrayKrazy/sdr-imobiliario) *(Privado)* — Sistema Lívia AI de pré-atendimento e qualificação de leads imobiliários.
* [`ricardobrandao`](https://github.com/KrayKrazy/ricardobrandao) — Presença profissional e portfólio executivo.
* [`afcassessoria`](https://github.com/KrayKrazy/afcassessoria) — Assessoria contábil, tributária e empresarial.
* [`Limpa-nome`](https://github.com/KrayKrazy/Limpa-nome) — Recuperação de crédito e assessoria financeira individual.
* [`lkelevra-corp`](https://github.com/KrayKrazy/lkelevra-corp) — Portal corporativo lKelevra Corp de gestão de licitações.
* [`dlucas`](https://github.com/KrayKrazy/dlucas) — Landing page e apresentação de serviços especializados.
* [`katia`](https://github.com/KrayKrazy/katia) — Página de conversão de serviços profissionais.
* [`edinilson`](https://github.com/KrayKrazy/edinilson) — Site institucional e captação de clientes.
* [`isaac`](https://github.com/KrayKrazy/isaac) — Página de atendimento e captação de leads.
* [`kiki`](https://github.com/KrayKrazy/kiki) — Presença digital e portfólio de serviços.
* [`plano`](https://github.com/KrayKrazy/plano) *(Privado)* — Planejamento estratégico e documentos internos.
* [`reuniao`](https://github.com/KrayKrazy/reuniao) — Agendamento de consultorias e reuniões estratégicas.
* [`ConsultorIA-empresarial`](https://github.com/KrayKrazy/ConsultorIA-empresarial) — Consultoria de negócios potencializada por Inteligência Artificial.

### ⚙️ SaaS, Plataformas, Automações & Core Kelevra
* [`kelevra-micro-saas`](https://github.com/KrayKrazy/kelevra-micro-saas) *(Privado)* — Infraestrutura, automações e landing pages para Micro-SaaS Kelevra (*SocialAuto* e *Kelevra Cobranças*).
* [`SalesOps-as-Code`](https://github.com/KrayKrazy/SalesOps-as-Code) — Metodologia de operações de vendas e prospecção programável.
* [`mycellium`](https://github.com/KrayKrazy/mycellium) — Sistema neural corporativo de automação, skills e memória operacional.
* [`kelevra`](https://github.com/KrayKrazy/kelevra) — Repositório central de ecossistema da holding Kelevra.
* [`kelevra-shop`](https://github.com/KrayKrazy/kelevra-shop) — Loja e plataforma de e-commerce do grupo.
* [`crm`](https://github.com/KrayKrazy/crm) *(Privado)* — Módulo central de CRM e pipeline de oportunidades comerciais.
* [`gmb-claw`](https://github.com/KrayKrazy/gmb-claw) — Ferramenta de extração e otimização de dados do Google Meu Negócio.
* [`repairon`](https://github.com/KrayKrazy/repairon) — Plataforma de intermediação e orçamentação técnica.
* [`Dryanno-`](https://github.com/KrayKrazy/Dryanno-) — Sistema de climatização e automação de ar.
* [`lachicra`](https://github.com/KrayKrazy/lachicra) — Landing page e vitrine temática de produtos.
* [`cf-gifts-site`](https://github.com/KrayKrazy/cf-gifts-site) / [`cfgifts`](https://github.com/KrayKrazy/cfgifts) / [`cf`](https://github.com/KrayKrazy/cf) — Plataforma de presentes personalizados e brindes corporativos.
* [`album-girassol-tulipa`](https://github.com/KrayKrazy/album-girassol-tulipa) — Álbum digital interativo e comemorativo.
* [`fazendola`](https://github.com/KrayKrazy/fazendola) — Apresentação imobiliária rural e agronegócio.
* [`torres`](https://github.com/KrayKrazy/torres) — Gestão de projetos e serviços especializados.
* [`Clean`](https://github.com/KrayKrazy/Clean) — Serviços de limpeza e higienização especializada.
* [`maosdeouro`](https://github.com/KrayKrazy/maosdeouro) — Massoterapia e cuidados corporais integrativos.
* [`biodinamica`](https://github.com/KrayKrazy/biodinamica) — Saúde integrativa e bem-estar corporal.

---

## 🚀 Guia de Deploy Rápido

### Deploy na Vercel (Recomendado para rotas e APIs)
1. Instale a CLI ou use via MCP:
```bash
vercel deploy --prod
```
2. Ou simplesmente vincule o repositório na dashboard da Vercel. Cada pasta de template possui suporte nativo sem compilação.

### Deploy no Netlify (Recomendado para White-Labels e Landing Pages)
1. Abra a pasta do cliente clonada no terminal:
```bash
netlify deploy --prod --dir=.
```
2. O site estará online com certificado SSL gratuito em menos de 15 segundos.

---

<p align="center">
  <b>Ecossistema Kelevra</b> · Desenvolvido com foco em velocidade máxima e alta conversão local.
</p>
