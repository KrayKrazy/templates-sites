# ❄️ Guia Definitivo: Como Criar um Site de Alta Conversão para Assistência Técnica & Linha Branca (Geladeiras, Lavadoras e Freezers)

Este manual documenta a arquitetura, design system, componentes interativos, psicologia de conversão e rotinas de deploy utilizadas no desenvolvimento do site oficial da **BRADIZA Assistência Técnica**. Use este documento como template mestre e Procedimento Operacional Padrão (SOP) para criar sites de altíssimo padrão para assistências técnicas de refrigeração, conserto de geladeiras, máquinas de lavar roupas, lava e seca, freezers e climatização.

---

## 📑 Índice
1. [Visão Geral & Psicologia do Nicho de Linha Branca](#1-visão-geral--psicologia-do-nicho-de-linha-branca)
2. [Estrutura de Pastas e Arquitetura de Arquivos](#2-estrutura-de-pastas-e-arquitetura-de-arquivos)
3. [Design System & Identidade Visual (Industrial Trust & Emergency)](#3-design-system--identidade-visual-industrial-trust--emergency)
4. [Anatomia das Seções de Alta Conversão](#4-anatomia-das-seções-de-alta-conversão)
5. [Scripts e Componentes Interativos Exclusivos](#5-scripts-e-componentes-interativos-exclusivos)
6. [Engenharia de Conversão para WhatsApp](#6-engenharia-de-conversão-para-whatsapp)
7. [Deploy no Netlify via MCP ou CLI](#7-deploy-no-netlify-via-mcp-ou-cli)
8. [Checklist Pré-Lançamento para Novos Clientes](#8-checklist-pré-lançamento-para-novos-clientes)

---

## 1. Visão Geral & Psicologia do Nicho de Linha Branca

Quem procura por conserto de geladeira ou máquina de lavar no Google está passando por uma **urgência imediata**:
* Geladeira parou: alimentos estragando, carnes descongelando, prejuízo financeiro iminente.
* Máquina de lavar estragou: roupas sujas acumulando, água vazando no piso do apartamento/casa.
* Freezer comercial desligou: estoque de comércio (restaurante, açougue, lanchonete) em risco crítico.

Mais de **90% dos acessos ocorrem via celular**, com o usuário aflito querendo falar com alguém em menos de 10 segundos.

### Os 5 Pilares de Sucesso deste Modelo:
1. **Transmissão Imediata de Confiança Técnica:**
   - Destacar tempo de mercado (ex.: 38 anos de tradição em Goiás).
   - Selo de especialização nas principais montadoras (Brastemp, Consul, Electrolux).
   - Avaliação real no Google Meu Negócio (ex.: nota 4.9 com +350 avaliações).
2. **Eliminadores Críticos de Objeção:**
   - **Garantia Estendida:** Oferecer 12 meses de garantia formal (enquanto os curiosos dão apenas 90 dias).
   - **Cobertura de Orçamentos:** "Cobrimos qualquer orçamento comprovado".
   - **Atendimento em Domicílio:** O cliente não precisa carregar uma geladeira de 80kg nem pagar frete de carretinha.
   - **Facilidade de Pagamento:** Parcelamento no cartão de crédito e PIX.
3. **Simulador de Diagnóstico Rápido:**
   - Reduz o atrito de digitação: o visitante escolhe o aparelho, a marca e o defeito em botões rápidos tipo "pills" e gera a mensagem perfeita no WhatsApp com 1 clique.
4. **Hiperlocalização para SEO Local:**
   - Bairros atendidos, cidades da região metropolitana e endereço físico com mapa para rotas.
5. **Velocidade de Carregamento Ultra-Rápida:**
   - HTML5 semântico puro, CSS modular moderno sem frameworks pesados e JavaScript vanilla leve, garantindo carregamento instantâneo em 4G.

---

## 2. Estrutura de Pastas e Arquitetura de Arquivos

Mantenha uma estrutura auto-contida, sem etapas complexas de compilação, permitindo teste local instantâneo e deploy sem atrito no Netlify:

```text
site-linha-branca/
├── index.html              # Estrutura semântica, metatags SEO locais e Schema JSON-LD
├── style.css               # Design system responsivo, variáveis CSS e animações
├── script.js               # Simulador de diagnóstico, menu responsivo e FAQ accordion
├── robots.txt              # Diretrizes para indexadores de busca
├── sitemap.xml             # Mapa XML para SEO local
├── logo.jpg / logo.png     # Logotipo oficial em alta resolução
├── gbm.txt                 # Backup dos dados do Google Meu Negócio do cliente
└── instagram.txt           # Backup dos dados da bio do Instagram do cliente
```

---

## 3. Design System & Identidade Visual (Industrial Trust & Emergency)

Empresas de conserto técnico de eletrodomésticos exigem uma paleta que equilibre **autoridade técnica**, **alerta de urgência** e **conversão imediata**:

### 🎨 Paleta de Cores e Variáveis CSS
```css
:root {
  /* Cores Principais da Marca */
  --primary: #0a3d82;            /* Azul Royal Profundo — confiança, autoridade técnica */
  --primary-light: #0d4fa8;      /* Azul de contraste */
  --primary-dark: #072b5c;       /* Azul marinho escuro para fundos fortes */
  --secondary: #d92525;          /* Vermelho Brastemp/Técnico — urgência e precisão */
  --secondary-hover: #b81c1c;

  /* Cores Neutras e Fundos */
  --bg-page: #f8fafc;            /* Fundo suave para evitar cansaço visual */
  --bg-white: #ffffff;           /* Fundo limpo de cards */
  --bg-subtle: #f1f5f9;          /* Fundo de seções alternadas */
  --bg-dark: #0f172a;            /* Slate escuro para cards de tecnologia/simulador */

  /* Textos */
  --text-main: #1e293b;          /* Charcoal legível */
  --text-muted: #64748b;         /* Cinza neutro para detalhes */
  --text-white: #ffffff;

  /* Ação & Conversão */
  --wa-green: #25d366;           /* Verde oficial do WhatsApp */
  --wa-green-hover: #1ebd5a;
  --wa-green-dark: #128c7e;
  --star-gold: #f59e0b;          /* Amarelo ouro para as estrelas do Google */
  --border-color: #e2e8f0;

  /* Tipografia */
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
}
```

### ✨ Efeitos Visuais & Gatilhos de Ação
* **Efeito de Pulso no Botão WhatsApp (`pulse-btn`):**
  Chama a atenção do olho humano no smartphone sem ser agressivo.
  ```css
  .pulse-btn::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
    animation: ripple 2s infinite;
  }
  @keyframes ripple {
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
    70% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
  }
  ```

---

## 4. Anatomia das Seções de Alta Conversão

Para garantir a máxima taxa de conversão (acima de 12% dos cliques virando conversas no WhatsApp), o layout deve seguir esta ordem psicológica:

### 1. Barra de Notificação Superior (Top Bar)
- Indicador pulsante em tempo real: `🟢 Plantão de Atendimento em Domicílio`.
- Badges de autoridade: `Garantia de 12 Meses` e `Parcelamos no Cartão`.
- Telefone com link `tel:`.

### 2. Header & Navegação
- Logotipo oficial nítido.
- Menu de navegação para rolagem suave.
- Botão verde de destaque "Pedir Orçamento".

### 3. Hero Section (Primeira Dobra)
- Badges de prova social: Anos de mercado + Nota no Google.
- **Headline focada na dor:** *"Sua Geladeira Parou ou a Máquina de Lavar Travou?"*
- **Subheadline de solução:** Atendimento em domicílio, marcas atendidas, 12 meses de garantia e cobertura de orçamentos.
- **CTAs Duplos:** "Chamar Técnico no WhatsApp Agora" (primário) + "Simular Diagnóstico Rápido" (secundário).
- **Card Lateral "Socorro Imediato":** Reforça urgência e atendimento em domicílio com número de plantão.

### 4. Barra de Métricas & Autoridade
- Grid com 4 números impressionantes:
  - Anos de atuação no mercado (ex.: 38 Anos).
  - Meses de garantia por escrito (ex.: 12 Meses).
  - Avaliação no Google Meu Negócio (ex.: 4.9 ★).
  - 100% Atendimento em Domicílio.

### 5. Seção de Marcas Especializadas
- Destaque com coroa de especialista para montadoras principais (ex.: Brastemp e Consul).
- Grid com Electrolux, Samsung, LG, Panasonic, Midea, etc.

### 6. Grade de Serviços com CTAs Individuais
- Geladeiras Frost Free, Inverse e Duplex.
- Máquinas de Lavar e Lava & Seca.
- Freezers Comerciais e Residenciais.
- Troca de Compressor & Carga de Gás Ecológico.
- *Cada serviço possui botão que abre o WhatsApp já com a mensagem específica preenchida!*

### 7. Banner "Cobrimos Qualquer Orçamento"
- Quebra a última barreira de quem está cotando em outros lugares.

### 8. Simulador Interativo de Diagnóstico (Widget de Conversão)
- O usuário clica em pills: Aparelho -> Marca -> Sintoma -> Região.
- Botão "Enviar Diagnóstico para o Técnico" formata e abre o WhatsApp diretamente.

### 9. Diferenciais da Empresa
- Experiência, garantia estendida, conserto no local, parcelamento e peças de procedência.

### 10. Prova Social (Avaliações do Google Meu Negócio)
- Depoimentos reais com nome e aspas retiradas do perfil do cliente.
- Link direto para o Google Maps / rotas.

### 11. FAQ Accordion (Perguntas Frequentes)
- Sanar dúvidas sobre atendimento no local, garantias, pagamentos e prazos.

### 12. Seção de Contato, Endereço e Mapa
- Dados físicos, horários de funcionamento, bairros atendidos e botão para traçar rota.

### 13. Rodapé Institucional & Botão Flutuante
- Botão flutuante do WhatsApp no canto inferior direito com pulso e balão explicativo.

---

## 5. Scripts e Componentes Interativos Exclusivos

### 🛠️ O Motor do Simulador de Diagnóstico
O script captura os seletores ativos e formata a mensagem para o WhatsApp sem exigir digitação de formulários pelo cliente:

```javascript
const btnEnviarDiagnostico = document.getElementById('btnEnviarDiagnostico');
if (btnEnviarDiagnostico) {
  btnEnviarDiagnostico.addEventListener('click', () => {
    const getActiveVal = (groupName) => {
      const activeBtn = document.querySelector(`.pill-group[data-group="${groupName}"] .pill-btn.active`);
      return activeBtn ? activeBtn.getAttribute('data-val') : 'Não especificado';
    };

    const aparelho = getActiveVal('aparelho');
    const marca = getActiveVal('marca');
    const defeito = getActiveVal('defeito');
    const cidade = getActiveVal('cidade');

    const mensagem = `Olá, Assistência Técnica! Gostaria de um orçamento em domicílio:

🛠️ Aparelho: ${aparelho}
🏷️ Marca: ${marca}
⚠️ Sintoma: ${defeito}
📍 Região: ${cidade}

Poderiam me informar a disponibilidade de um técnico para atendimento?`;

    const whatsappUrl = `https://wa.me/5562982248282?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  });
}
```

---

## 6. Engenharia de Conversão para WhatsApp

No mercado de eletrodomésticos, links vazios que abrem apenas `"Olá"` têm 35% menos resposta útil do que mensagens contextuais. Crie links específicos para cada ponto da página:

| Ponto de Contato | Texto Pré-Preenchido no Link do WhatsApp |
|---|---|
| **Botão Hero** | `"Olá! Minha geladeira/máquina está com defeito. Gostaria de um orçamento urgente em domicílio."` |
| **Card Geladeira** | `"Olá! Preciso de conserto para minha GELADEIRA. Poderia me passar um orçamento?"` |
| **Card Máquina** | `"Olá! Preciso de conserto para minha MÁQUINA DE LAVAR. Poderia me passar um orçamento?"` |
| **Card Freezer** | `"Olá! Preciso de conserto urgente para meu FREEZER. Poderia me ajudar?"` |
| **Card Compressor** | `"Olá! Preciso de orçamento para TROCA DE MOTOR / RECARGA DE GÁS."` |
| **Banner Cobertura** | `"Olá! Tenho um orçamento de outra assistência e gostaria que vocês cobrissem com a garantia de 12 meses."` |

---

## 7. Deploy no Netlify via MCP ou CLI

### Opção 1: Via MCP Tool do Netlify (Recomendado no Mycelium/Antigravity)
1. Chame `create-new-project` no `netlify-project-services-updater`:
   ```json
   {
     "selectSchema": {
       "operation": "create-new-project",
       "params": {
         "name": "nome-do-cliente-assistencia",
         "teamSlug": "seu-team-slug"
       }
     }
   }
   ```
2. Chame `deploy-site` no `netlify-deploy-services-updater`:
   ```json
   {
     "selectSchema": {
       "operation": "deploy-site",
       "params": {
         "deployDirectory": "C:\\Users\\Solano\\Documents\\sites\\nome-do-cliente",
         "siteId": "SITE_ID_RETORNADO"
       }
     }
   }
   ```

### Opção 2: Via Terminal CLI
```bash
cd "C:\Users\Solano\Documents\sites\nome-do-cliente"
netlify deploy --prod --dir=.
```

---

## 8. Checklist Pré-Lançamento para Novos Clientes

Ao criar um novo site de linha branca para outro cliente, siga este roteiro de 10 minutos:

1. [ ] **Dados Básicos:** Substituir Nome Fantasia, Razão Social, CNPJ (se houver), Telefone e WhatsApp.
2. [ ] **Endereço e Raio de Atuação:** Atualizar bairro, cidades atendidas e link do Google Maps com coordenadas exatas no Schema JSON-LD.
3. [ ] **Identidade Visual:** Se a marca tiver logo próprio, inserir como `logo.jpg` e ajustar as variáveis CSS `--primary` e `--secondary` no `style.css`.
4. [ ] **Diferenciais Comerciais:** Adaptar tempo de fundação (ex.: 10 anos, 25 anos, 38 anos) e tempo de garantia (3 meses, 6 meses, 12 meses).
5. [ ] **Depoimentos:** Copiar 3 avaliações reais do Google Meu Negócio do cliente com nome dos autores.
6. [ ] **Redes Sociais:** Inserir o `@` do Instagram do cliente no rodapé e links de contato.
7. [ ] **Verificação Mobile:** Abrir no celular e testar se todos os botões de WhatsApp abrem o app com a mensagem correta.
8. [ ] **Deploy no Netlify:** Executar o deploy e registrar o domínio ou alias no painel.
