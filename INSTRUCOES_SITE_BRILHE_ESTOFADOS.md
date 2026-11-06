# 🧼 Guia Definitivo: Como Criar um Site de Alta Conversão com Diagnóstico Interativo e Simulador Multi-Peças (Brilhe Estofados)

Este manual documenta a arquitetura, o design system Vibrant Hydro Clean, os novos componentes interativos e as técnicas avançadas de CRO aplicadas no desenvolvimento do site oficial da **Brilhe Estofados** (Anápolis - GO). 

Utilize este documento como **Procedimento Operacional Padrão (SOP)** e template mestre para criar landing pages inovadoras no nicho de higienização de sofás, colchões, tapetes, cortinas, cadeirinhas infantis e estofamento automotivo.

---

## 📑 Índice
1. [Visão Geral & Diferenciação Técnica (Brilhe vs. UltraClean)](#1-visão-geral--diferenciação-técnica-brilhe-vs-ultraclean)
2. [As 5 Novas Técnicas de Engenharia & CRO Aplicadas](#2-as-5-novas-técnicas-de-engenharia--cro-aplicadas)
3. [Design System & Identidade Visual (Vibrant Hydro Clean & Deep Slate)](#3-design-system--identidade-visual-vibrant-hydro-clean--deep-slate)
4. [Curadoria dos 12 Ativos Oficiais em Alta Resolução (1440px WebP)](#4-curadoria-dos-12-ativos-oficiais-em-alta-resolução-1440px-webp)
5. [Diagnóstico Visual Interativo de Estofados ("Qual o Problema Hoje?")](#5-diagnóstico-visual-interativo-de-estofados-qual-o-problema-hoje)
6. [Simulador de Orçamento Multi-Peças com Desconto Progressivo](#6-simulador-de-orçamento-multi-peças-com-desconto-progressivo)
7. [Guia Interativo de Fibras & Tolerância de Tecidos](#7-guia-interativo-de-fibras--tolerância-de-tecidos)
8. [Motor de Horário Local em Tempo Real (Live Duty Clock)](#8-motor-de-horário-local-em-tempo-real-live-duty-clock)
9. [Central Dual WhatsApp Flutuante (Hub Multi-Canal)](#9-central-dual-whatsapp-flutuante-hub-multi-canal)
10. [SEO Local, Schemas JSON-LD & Geolocalização (Anápolis - GO)](#10-seo-local-schemas-json-ld--geolocalização-anápolis---go)
11. [Deploy Contínuo na Vercel & Repositório GitHub](#11-deploy-contínuo-na-vercel--repositório-github)
12. [URLs Oficiais do Projeto](#12-urls-oficiais-do-projeto)
13. [Checklist de Customização para Novos Clientes](#13-checklist-de-customização-para-novos-clientes)

---

## 1. Visão Geral & Diferenciação Técnica (Brilhe vs. UltraClean)

Enquanto o projeto anterior (**UltraClean**) foi construído sob uma estética *Dark Luxury Obsidian & Liquid Gold* com ênfase primordial em impermeabilização por nanotecnologia e efeito lótus, a **Brilhe Estofados** adota uma abordagem totalmente distinta:

| Pilar de Engenharia | UltraClean | Brilhe Estofados |
| :--- | :--- | :--- |
| **Atmosfera Visual** | Dark Obsidian (`#080C14`) + Ouro Líquido (`#D4AF37`) | Vibrant Hydro Clean (`#FFFFFF`, `#F0F9FF`) + Ciano Elétrico (`#0284C7`) + Deep Slate (`#0F172A`) |
| **Gatilho Psicológico** | Preservação de luxo e pânico do sofá novo manchar | Saúde respiratória familiar, eliminação de ácaros/bactérias, cuidado com bebês e pets |
| **Interatividade Hero** | Slider antes & depois com foco em impermeabilização | Diagnóstico de sintomas do estofado em tempo real com orientações de primeiro socorro |
| **Simulador de Preço** | Seletor de peça única com tabela linear | **Carrinho Multi-Peças (+/-) com Desconto Combo Progressivo (10% a 15%)** |
| **Educação Técnica** | Ciência da tensão superficial dos líquidos | **Guia Interativo de Fibras Têxteis** (Linho, Suede, Veludo, Bouclé, Couro, Auto) |
| **Atendimento WhatsApp** | Canal único com mensagem única | **Dual WhatsApp Hub** com comutação entre linha principal e plantão |

---

## 2. As 5 Novas Técnicas de Engenharia & CRO Aplicadas

1. **Diagnóstico Visual de Sintomas:** Em vez de forçar o usuário a preencher campos longos, ele escolhe o sintoma visual do estofado (mancha recente, xixi de pet, braços encardidos, cadeirinha de bebê, cadeira de escritório) e recebe o protocolo técnico instantâneo.
2. **Desconto Progressivo Dinâmico:** Carrinho de compras interativo que calcula economia real: 1 item (preço cheio), 2 itens (10% de desconto no combo), 3+ itens (15% de desconto máximo + neutralizador de odor cortesia).
3. **Guia Interativo de Fibras Têxteis:** Tabela interativa que ensina o cliente como a Brilhe trata cada tipo de tecido com pH balanceado sem risco de desbotar ou encolher.
4. **Live Duty Clock (Motor de Horário Local):** Script JS que verifica o fuso horário de Goiás/Brasília em tempo real e exibe o selo dinâmico de status operacional ("🟢 Aberto Agora até 17h" / "🟡 Plantão WhatsApp Ativo").
5. **Dual WhatsApp Floating Popover:** Widget flutuante que oferece acesso rápido aos dois números oficiais da empresa: `(62) 99573-6083` e `(62) 99442-5950`.

---

## 3. Design System & Identidade Visual (Vibrant Hydro Clean & Deep Slate)

Baseado no logotipo oficial da **Brilhe Estofados**, que apresenta o sofá com bocal extrator e estrelas de brilho em tons de ciano sobre fundo ardósia escuro.

### 🎨 Variáveis CSS (:root)
```css
:root {
  /* Ciano Elétrico & Água Pura */
  --cyan-primary: #0284C7;
  --cyan-light: #38BDF8;
  --cyan-soft: #E0F2FE;
  --cyan-bg: #F0F9FF;
  --cyan-dark: #0369A1;
  --cyan-gradient: linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #38BDF8 100%);
  --cyan-glow: rgba(2, 132, 199, 0.28);

  /* Deep Navy & Slate */
  --navy-dark: #0A192F;
  --navy-slate: #0F172A;
  --navy-card: #1E293B;

  /* Superfícies & Fundo Claro */
  --bg-body: #FFFFFF;
  --bg-alt: #F8FAFC;
  --border-light: #E2E8F0;
  --border-hover: #BAE6FD;

  /* Tipografia */
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```

---

## 4. Curadoria dos 12 Ativos Oficiais em Alta Resolução (1440px WebP)

Todos os criativos oficiais do Instagram da empresa foram catalogados e organizados com nomenclatura semântica em `assets/`:
1. `logo-brilhe-estofados.jpg`: Logotipo oficial com o sofá e o bocal extrator.
2. `banner-todos-servicos.webp`: Banner oficial consolidando os 7 serviços da Brilhe.
3. `manchas-sofa-solucao.webp`: Criativo com xícara de café derramada no sofá de linho.
4. `cuidado-especial-sofa.webp`: Imagem de cabeceira "Seu sofá não é apenas mais um tecido".
5. `cadeira-escritorio.webp`: Higienização de cadeiras de escritório e home office.
6. `cadeirinha-bebe.webp`: Protocolo especial hipoalergênico para cadeirinha infantil.
7. `bracos-sofa-escuros.webp`: Tratamento de braços e assentos escurecidos pelo uso.
8. `estofados-automotivos.webp`: Bocal extrator em ação em bancos de veículo.
9. `higienizacao-tapete.webp`: Enceradeira/lavadora industrial de tapetes e carpetes.
10. `cuidado-poltrona.webp`: Higienização delicada de poltronas de leitura e amamentação.
11. `limpeza-cortinas.webp`: Limpeza no local de cortinas de tecido e blecaute.
12. `derramou-liquido-sofa.webp`: Alerta de primeiro socorro para acidentes com líquidos.

---

## 5. Diagnóstico Visual Interativo de Estofados ("Qual o Problema Hoje?")

O componente `#diag-tabs` permite ao usuário clicar nas 5 situações mais comuns:
* **Mancha de Bebida/Comida:** Explicação sobre flotação química e extração mecânica sem esfregar.
* **Xixi de Pet / Pelos:** Neutralização enzimática hospitalar da fonte do odor e remoção de pelos.
* **Braços Escurecidos:** Dissolução profunda de oleosidade corporal e suor acumulado.
* **Cadeirinha de Bebê:** Flotador neutro antialérgico ANVISA com secagem rápida sem vapores químicos.
* **Cadeira de Escritório:** Revitalização no próprio local de trabalho para empresas e home office.

---

## 6. Simulador de Orçamento Multi-Peças com Desconto Progressivo

O componente `#calculadora` utiliza seletores de quantidade incrementais (`-` e `+`) para 7 categorias de peças:
* Sofá Retrátil (R$ 260)
* Sofá de Canto em L (R$ 350)
* Colchão Casal/Queen (R$ 190)
* Cadeiras de Jantar (R$ 35/un)
* Cadeirinha de Bebê (R$ 120)
* Tapete de Sala Médio (R$ 150)
* Bancos Automotivos Completos (R$ 220)

### Lógica de Desconto Acumulado:
* **1 item:** Atendimento individual regular (0% de desconto).
* **2 itens:** Combo Duplo com **10% de desconto** no subtotal.
* **3 ou mais itens:** Super Combo com **15% de desconto** + Neutralizador de Odor grátis.

A mensagem gerada para o WhatsApp lista cada item selecionado, o subtotal, o desconto obtido e o valor final estimado, enviando direto para `(62) 99573-6083`.

---

## 7. Guia Interativo de Fibras & Tolerância de Tecidos

O componente `#tecidos` educa o cliente sobre a ciência da higienização:
* **Linho & Algodão:** Fibras naturais sensíveis que exigem pH neutro e controle estrito de umidade.
* **Suede & Camurça:** Escovação direcionada com cerdas macias sem manchar a felpa.
* **Veludo:** Desincrustação profunda com realinhamento do pelo para devolver o brilho nobre.
* **Bouclé & Chenille:** Extração delicada por injeção e sucção sem puxar as tramas em relevo.
* **Couro:** Limpeza emoliente seguida de hidratação protetora contra ressecamento e rachaduras.
* **Tecido Automotivo:** Extração com água pressurizada para remover poeira da estrada e suor.

---

## 8. Motor de Horário Local em Tempo Real (Live Duty Clock)

Script executado a cada 60 segundos calculando o fuso horário de Anápolis (`America/Sao_Paulo`):
* **Segunda a Sábado, das 08:00 às 17:00:**
  - Status: `🟢 Aberto Agora · Atendimento em Anápolis até 17h`
* **Domingos ou após as 17:00:**
  - Status: `🟡 Plantão WhatsApp Ativo · Agendamentos Abertos`

---

## 9. Central Dual WhatsApp Flutuante (Hub Multi-Canal)

O botão flutuante abre um popover inteligente que permite ao lead escolher com qual atendente deseja conversar:
1. **WhatsApp Principal:** `(62) 99573-6083` (wa.me/5562995736083)
2. **WhatsApp Plantão / Suporte:** `(62) 99442-5950` (wa.me/5562994425950)

---

## 10. SEO Local, Schemas JSON-LD & Geolocalização (Anápolis - GO)

Metadados estruturados configurados com fidelidade aos dados oficiais:
* **Nome Fantasia:** Brilhe Estofados - Limpeza de Estofados
* **Endereço Completo:** El Had - R. Juriti, Quadra 17 - Lote 31 - Jibran El Hadj, Anápolis - GO, 75131-525
* **Coordenadas Geográficas:** Latitude `-16.3727054`, Longitude `-48.9770041`
* **Avaliações:** 5.0 estrelas com 13 avaliações no Google Meu Negócio.
* **Bairros Mencionados:** Jibran El Hadj, Bairro Jundiaí, Vila Jaiara, Cidade Universitária, Centro e Anápolis City.

---

## 11. Deploy Contínuo na Vercel & Repositório GitHub

* **Repositório GitHub:** `https://github.com/KrayKrazy/brilhe-estofados`
* **Projeto Vercel:** `brilhe-estofados` (`prj_Pgg5GDymeKYleXiUBUa3EiBnds6v`)
* **Headers de Segurança no `vercel.json`:** `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Cache-Control: public, max-age=31536000, immutable` para a pasta de assets.
* **Status:** **READY / Produção Ativa**.

---

## 12. URLs Oficiais do Projeto

* 🌐 **Site em Produção:** [https://brilhe-estofados.vercel.app](https://brilhe-estofados.vercel.app)
* 🌐 **Espelho Vercel:** [https://brilhe-estofados-kelevra.vercel.app](https://brilhe-estofados-kelevra.vercel.app)
* 💻 **Código-Fonte no GitHub:** [https://github.com/KrayKrazy/brilhe-estofados](https://github.com/KrayKrazy/brilhe-estofados)
* 📁 **Pasta do Template Mestre:** `C:\Users\Solano\Documents\sites\templates sites\template-brilhe-estofados`
* 📁 **Pasta de Dados do Cliente:** `C:\Users\Solano\Documents\sites\brilho estofados`

---

## 13. Checklist de Customização para Novos Clientes

- [ ] Atualizar os telefones nos botões e no `script.js` (`(62) 99573-6083` e `(62) 99442-5950`).
- [ ] Substituir o logo em `assets/logo-brilhe-estofados.jpg`.
- [ ] Personalizar a tabela de preços nos atributos `data-price` do `#calculadora`.
- [ ] Ajustar o endereço, CEP e iframe do Google Maps no rodapé e no Schema JSON-LD.
- [ ] Conectar ao repositório ou rodar `vercel --prod`.
