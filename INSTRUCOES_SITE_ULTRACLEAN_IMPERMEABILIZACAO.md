# 🛡️ Guia Definitivo: Como Criar um Site de Alta Conversão para Impermeabilização e Estética de Estofados

Este manual documenta a arquitetura técnica, o benchmarking via GitHub, o design system Dark Luxury & Liquid Gold, os componentes interativos de CRO, a otimização de SEO Local (Anápolis - GO) e a esteira de deploy na Vercel para a **UltraClean - Estética para Estofados**. 

Utilize este documento como **Procedimento Operacional Padrão (SOP)** e template mestre para criar landing pages de altíssimo padrão para os nichos de impermeabilização têxtil, blindagem de sofás, higienização profunda bactericida e limpeza a seco de tapeçaria.

---

## 📑 Índice
1. [Visão Geral & Psicologia do Nicho de Impermeabilização](#1-visão-geral--psicologia-do-nicho-de-impermeabilização)
2. [Benchmarking Estratégico no GitHub via MCP](#2-benchmarking-estrategico-no-github-via-mcp)
3. [Design System & Identidade Visual (Dark Obsidian & Liquid Gold)](#3-design-system--identidade-visual-dark-obsidian--liquid-gold)
4. [Curadoria do Acervo Fotográfico Real de Anápolis](#4-curadoria-do-acervo-fotográfico-real-de-anápolis)
5. [Componentes Interativos & Engenharia de CRO](#5-componentes-interativos--engenharia-de-cro)
6. [Simulador de Orçamento Interativo 1-Minuto para WhatsApp](#6-simulador-de-orçamento-interativo-1-minuto-para-whatsapp)
7. [SEO Local, Schemas Estruturados & Otimização AEO](#7-seo-local-schemas-estruturados--otimização-aeo)
8. [Deploy Contínuo, Repositório GitHub & Vercel](#8-deploy-contínuo-repositório-github--vercel)
9. [URLs Oficiais do Projeto](#9-urls-oficiais-do-projeto)
10. [Checklist de Customização para Novos Clientes](#10-checklist-de-customização-para-novos-clientes)

---

## 1. Visão Geral & Psicologia do Nicho de Impermeabilização

O cliente que busca impermeabilização ou blindagem de estofados difere do cliente comum de limpeza:
1. **Desejo de Preservação de Bens de Alto Valor:** Frequentemente acabou de comprar um sofá novo (investimento de R$ 3.000 a R$ 15.000) ou reformou a sala e sente **medo agudo do primeiro acidente**.
2. **Pânico de Manchas Irreversíveis:** Acidentes com vinho tinto, café quente, refrigerante ou urina de pets que mancham tecidos nobres (linho, suede, veludo, bouclé).
3. **Segurança Familiar & Prevenção de Incêndios:** Dúvida recorrente sobre produtos inflamáveis ou intoxicação de bebês e animais domésticos.

### Os 4 Pilares de Alta Conversão deste Modelo:
* **Quebra Imediata da Objeção de Inflamabilidade:** Destaque enfático de fórmula não inflamável, atóxica e regulamentada pela **ANVISA**.
* **Demonstração do Efeito Lótus (Tensão Superficial):** Imagens e cards comprovando que o líquido derramado vira gotas e não penetra na espuma.
* **Garantia de Manutenção da Textura:** Explicação clara de que a nanotecnologia impermeabiliza as microfibras sem deixar o sofá duro ou plastificado.
* **Combo Ouro (Higienização + Blindagem):** Upsell integrado que ensina o cliente a renovar a fibra antes de selá-la.

---

## 2. Benchmarking Estratégico no GitHub via MCP

Utilizamos o **MCP do GitHub** para minerar os repositórios mais conceituados e eficientes do setor:

1. **`contatocapclean-hue/capclean`:**
   - Referência de ponta em calculadora interativa de orçamento por peça e tecido (`precos.json`), com fluxo mobile ultra-otimizado.
   - Padrão de explicações didáticas em 5 etapas (Avaliação, Aspiração, Pré-tratamento, Extração e Acabamento).
2. **`juliana15paak/ac-renova-estofados`:**
   - Referência de estrutura de SEO Local responsivo e parametrização de links para WhatsApp por bairro.
3. **`Celso-Ribas/projeto-imper` & `elvisoliveira/luxorclean`:**
   - Referências de argumentos técnicos sobre repelência de líquidos quentes e frios, durabilidade de 1 a 2 anos e certificados de aplicação.

---

## 3. Design System & Identidade Visual (Dark Obsidian & Liquid Gold)

O visual foi adaptado estritamente à identidade da marca **UltraClean - Estética para Estofados**, cujo logo oficial apresenta o ícone da gota/chama metálica dourada sobre fundo escuro.

### 🎨 Paleta Cromática (:root)
```css
:root {
  /* Dourado Líquido & Gradientes de Luxo */
  --gold-primary: #D4AF37;
  --gold-light: #F7E5A9;
  --gold-bright: #FFDF73;
  --gold-dark: #996515;
  --gold-gradient: linear-gradient(135deg, #FFDF73 0%, #D4AF37 50%, #996515 100%);
  --gold-glow: rgba(212, 175, 55, 0.28);

  /* Superfícies & Fundo Escuro Obsidiana */
  --bg-deep: #05070B;
  --bg-obsidian: #080C14;
  --bg-card: rgba(14, 20, 32, 0.78);
  --border-card: rgba(212, 175, 55, 0.16);
  --border-card-hover: rgba(212, 175, 55, 0.45);

  /* Ação & Conversão */
  --accent-green: #25D366;       /* WhatsApp Oficial */
  --accent-green-hover: #1EBE5D;
  --accent-green-glow: rgba(37, 211, 102, 0.35);

  /* Tipografia */
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```

---

## 4. Curadoria do Acervo Fotográfico Real de Anápolis

Foram aproveitadas as 11 fotografias reais captadas no atendimento do cliente em Anápolis:
1. `logo-ultraclean.jpg`: Emblema oficial da UltraClean (gota dourada sobre preto).
2. `hero-impermeabilizacao-vinho.jpg`: Prova suprema — cliente tomando vinho tinto em poltrona branca impermeabilizada com logo oficial.
3. `gotas-impermeabilizacao.jpg`: Macrofotografia demonstrando o efeito lótus de hidrorrepelência.
4. `teste-cafe-sofa.jpg`: Xícara de café derramada diretamente no tecido sem penetração.
5. `teste-agua-sofa.jpg`: Água derramada em sofá de suede/veludo laranja formando lâmina repelente.
6. `antes-depois-cadeiras.jpg`: Cadeiras de jantar com método UltraClean de higienização profunda.
7. `sofa-sala-luxo.jpg`: Sofá e sala de estar residencial de alto padrão entregues.
8. `sala-jantar-tapete.jpg`: Conjunto de mesa de jantar e tapetes higienizados no local.
9. `pet-sofa-protegido.jpg`: Pet descansando tranquilamente sobre estofado blindado.
10. `cliente-anapolis.jpg`: Registro autêntico de cliente atendido na Avenida Universitária - Anápolis.
11. `repelencia-sofa-laranja.jpg`: Teste de tensão superficial em estofado colorido.

---

## 5. Componentes Interativos & Engenharia de CRO

1. **Slider Interativo Antes & Depois:**
   - Permite que o usuário arraste com o dedo no celular ou com o mouse no computador a linha divisória (`#ba-slider`), revelando o contraste entre a fibra suja/ácaros e o tecido revitalizado.
2. **Cards de Demonstração Científica:**
   - Teste do Café Quente, Tensão Superficial e Selo Pet Friendly.
3. **Acordeão de FAQ Inteligente:**
   - Respostas completas para as dúvidas mais críticas (inflamabilidade, maciez, prazo de secagem e formas de pagamento).
4. **Floating WhatsApp com Bubble Tip:**
   - Botão flutuante com indicador pulsante de status online e mensagem de boas-vindas acionável.

---

## 6. Simulador de Orçamento Interativo 1-Minuto para WhatsApp

O simulador reduz o atrito da cotação a quase zero:
1. **Passo 1 (Peça):** Sofá Retrátil, Sofá de Canto (L), Sofá Fixo, Colchão, Cadeiras de Jantar ou Poltrona.
2. **Passo 2 (Tratamento):** Impermeabilização Blindada, Higienização Profunda ou **Combo Ouro (15% de Desconto)**.
3. **Passo 3 (Bairro):** Cidade Universitária, Jundiaí, Parque dos Pirineus, Jaiara, Centro, etc.
4. **Disparo Dinâmico:** Gera a mensagem estruturada no WhatsApp:
   ```text
   Olá, equipe UltraClean Anápolis! 🛋️✨

   Gostaria de agendar / confirmar o orçamento que simulei no site:
   • Estofado: Sofá Retrátil/Reclinável
   • Tratamento Escolhido: Combo Ouro (Limpeza + Blindagem)
   • Localização: Cidade Universitária / Av. Universitária (Anápolis - GO)
   • Estimativa do Site: A partir de R$ 380

   Poderiam me informar os próximos horários disponíveis para atendimento a domicílio?
   ```

---

## 7. SEO Local, Schemas Estruturados & Otimização AEO

O site foi estruturado com foco em buscas locais em Anápolis e inteligências artificiais de busca (AEO):
* **Schema.org JSON-LD:** Tipos `LocalBusiness` e `CleaningService` com latitude `-16.2764408` e longitude `-48.9557276`.
* **NAP Consistente:**
  - **Nome:** UltraClean Anápolis - Limpeza e Impermeabilização de Sofá
  - **Endereço:** R. Pp 12 - Parque dos Pirineus, Anápolis - GO, 75071-720
  - **Telefone:** (62) 99142-6532
  - **Avaliações:** 5.0 estrelas no Google Meu Negócio.
* **Palavras-chave Regionais:** Inserção orgânica de termos como *"impermeabilização de sofá anápolis"*, *"higienização de estofados bairro jundiaí"* e *"blindagem de tecidos anápolis go"*.

---

## 8. Deploy Contínuo, Repositório GitHub & Vercel

1. **Repositório GitHub Oficial:**
   - `https://github.com/KrayKrazy/ultraclean-anapolis`
   - Configurado com branch `main` e commits rastreáveis.
2. **Pipeline de Produção Vercel:**
   - Projeto: `ultraclean-anapolis`
   - Headers de segurança no `vercel.json`: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Cache-Control: public, max-age=31536000` para a pasta de assets.
   - Status: **READY (Produção Instantânea)**.

---

## 9. URLs Oficiais do Projeto

* 🌐 **Site em Produção:** [https://ultraclean-anapolis.vercel.app](https://ultraclean-anapolis.vercel.app)
* 🌐 **Espelho Vercel:** [https://ultraclean-anapolis-kelevra.vercel.app](https://ultraclean-anapolis-kelevra.vercel.app)
* 💻 **Código-Fonte no GitHub:** [https://github.com/KrayKrazy/ultraclean-anapolis](https://github.com/KrayKrazy/ultraclean-anapolis)
* 📁 **Pasta do Template Mestre:** `C:\Users\Solano\Documents\sites\templates sites\template-ultraclean-impermeabilizacao`
* 📁 **Pasta de Dados do Cliente:** `C:\Users\Solano\Documents\sites\templates sites\ultraclean`

---

## 10. Checklist de Customização para Novos Clientes

Ao clonar este template para outra empresa de impermeabilização:
- [ ] Alterar o telefone no `script.js` (variável `whatsappPhone = '5562...'`).
- [ ] Substituir o logo em `assets/logo-ultraclean.jpg`.
- [ ] Atualizar endereço, CEP, coordenadas de latitude/longitude e lista de bairros no `index.html` e no Schema JSON-LD.
- [ ] Atualizar o link de rotas e o iframe do Google Maps no rodapé.
- [ ] Ajustar os valores-base das peças no `calc-option` (`data-base="280"` etc.) de acordo com a tabela do cliente.
- [ ] Subir para a Vercel com comando `vercel --prod` ou conectar o repositório GitHub à Vercel.
