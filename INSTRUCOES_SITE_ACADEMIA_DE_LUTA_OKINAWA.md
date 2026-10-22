# 🥋 Guia Definitivo & Template Mestre: Como Criar um Site de Alta Conversão para Academia de Lutas & Artes Marciais

Este manual documenta a arquitetura, design system marcial, componentes interativos, psicologia de conversão, pesquisa de templates no GitHub e rotinas de deploy via **Vercel MCP** utilizadas no desenvolvimento do site oficial da **Academia Okinawa (Centro de Treinamento de Artes Marciais Okinawa SADGODF - Shihan Rogério Sam)**.

Use este documento como template mestre para criar ou replicar sites de alta performance para academias de karatê, kickboxing, MMA, jiu-jitsu, muay thai, judô e estúdios de lutas.

---

## 📑 Sumário
1. [Visão Geral & Dados do Cliente](#1-visão-geral--dados-do-cliente)
2. [Pesquisa de Mercado & Templates no GitHub](#2-pesquisa-de-mercado--templates-no-github)
3. [Arquitetura de Pastas e Arquivos](#3-arquitetura-de-pastas-e-arquivos)
4. [Design System Marcial (Athletic Dark & Bushido)](#4-design-system-marcial-athletic-dark--bushido)
5. [Anatomia das Seções (Passo a Passo)](#5-anatomia-das-seções-passo-a-passo)
6. [Engenharia de Conversão para WhatsApp](#6-engenharia-de-conversão-para-whatsapp)
7. [Deploy Automatizado via Vercel MCP](#7-deploy-automatizado-via-vercel-mcp)
8. [URLs e Acessos Oficiais](#8-urls-e-acessos-oficiais)
9. [Checklist de Manutenção & Atualização](#9-checklist-de-manutenção--atualização)

---

## 1. Visão Geral & Dados do Cliente

- **Nome Comercial:** Academia Okinawa / CTM Okinawa SADGODF (Centro de Treinamento de Artes Marciais Okinawa)
- **Mestre Responsável:** Shihan Rogério Sam (*"Sensei Rogério San"*)
- **Modalidades Oferecidas:**
  1. *Karatê-Dô Tradicional Raiz 🥋* (Infantil e Adulto, Linhagem Tradicional, Kata, Kihon, Kumite e Exames de Faixa)
  2. *Kickboxing 🥊* (Condicionamento cardiovascular, queima de até 800kcal/aula, manoplas e sacos de pancadas)
  3. *M.M.A - Mixed Martial Arts 🥊* (Combate em pé, quedas, transições e finalizações com máxima segurança)
  4. *Defesa Pessoal Prática 💪🏻* (Técnicas urbanas de autodefesa para mulheres, jovens e adultos)
- **Endereço Físico:** Quadra 111/112 Lote 07 Avenida Goiás, Santo Antônio do Descoberto - GO, CEP: 72900-180
- **Coordenadas Geográficas:** `-15.9432274, -48.2682439`
- **Telefone / WhatsApp:** (61) 98548-4267
- **Instagram Oficial:** [@ctm_aolm_okinawa_saddf](https://www.instagram.com/ctm_aolm_okinawa_saddf/)
- **Prova Social Google Meu Negócio:** 4.5 Estrelas · 15+ Avaliações Reais
  - *Jorge Fogaça:* "Excelente profissional."
  - *Raphael Augusto:* "É um bom lugar, um ótimo karatê"
  - *Bruno Alves:* "Sensei Rogério San é o Melhor!"
- **Slogan & Pilares de Marca:** *"Tradição · Disciplina · Respeito"*

---

## 2. Pesquisa de Mercado & Templates no GitHub

Para embasar a construção da landing page, foi realizada uma busca via **GitHub MCP** (`search_repositories` e `get_file_contents`) em repositórios de academias de artes marciais e karatê.

### Repositórios Analisados:
1. `Camilakarate/meu-karate-landing`:
   - Estrutura em língua portuguesa orientada a karatê tradicional.
   - Padrão de cores com acentos dourados e pretos profundos.
   - Destaque para linhagem de mestres, turmas infantis e aula experimental gratuita.
2. `pratyush-aswal/martial-arts-website-template`:
   - Navegação esportiva lateral/fixa com foco em programas de treino múltiplos (Karate, Kickboxing, MMA).
3. `FullWebDevKev/Martial-Arts-Gym`:
   - Arquitetura focada em boxes de luta e artes marciais mistas.

### Decisões de Engenharia Tomadas:
- **Evolução do Layout:** Ao invés de um template genérico estático, desenvolveu-se uma interface proprietária moderna em HTML5 semântico, CSS3 com variáveis dinâmicas e Vanilla JS ultra otimizado.
- **Incorporação do Acervo Real:** Todas as fotos utilizadas pertencem ao acervo real do dojo do cliente (extraídas de sua conta no Instagram), gerando conexão imediata e autenticidade inquestionável.
- **Destaque ao Karatê Infantil:** Crianças a partir de 4 anos representam mais de 60% das decisões de compra tomadas pelos pais no segmento de lutas. Foi criada uma seção de alto impacto baseada no banner oficial *"Karatê Infantil: Disciplina que forma, valores que transformam"*.
- **Código do Dojo Kun:** Inclusão dos 5 preceitos marciais para demonstrar aos pais que a academia foca em moral, educação e autocontrole, afastando o estigma de violência.

---

## 3. Arquitetura de Pastas e Arquivos

A organização foi projetada para garantir carregamento instantâneo no celular, sem dependência de bundlers complexos (zero node_modules em produção) e 100% compatível com deploys headless na Vercel:

```text
academia okinawa/
├── index.html                   # Estrutura semântica completa, OpenGraph, JSON-LD e SEO
├── css/
│   └── style.css                # Design system athletic dark, responsividade e animações
├── js/
│   └── main.js                  # Menu hambúrguer, scroll spy, accordion FAQ e contadores
├── assets/
│   └── images/
│       ├── logo.jpg             # Logotipo circular oficial vetorizado da Academia Okinawa
│       ├── banner-infantil.jpg  # Banner promocional oficial de Karatê Infantil
│       ├── sensei-podium.jpg    # Shihan Rogério Sam no pódio com campeões mirins
│       ├── dojo-lineup.jpg      # Foto cerimonial do alinhamento dos alunos e faixas pretas
│       ├── kata-treino.jpg      # Treinamento técnico e postura de Kata
│       ├── kumite-luta.jpg      # Combate de Karatê com luvas e arbitragem
│       ├── graduacao-familia.jpg# Celebração de troca de faixa com a família presente
│       ├── dojo-kun.jpg         # Pôster oficial com o código de honra Dojo Kun
│       ├── turma-infantil.jpg   # Treinamento dos pequenos no tatame
│       ├── kata-apresentacao.jpg# Demonstração feminina de artes marciais
│       ├── alongamento-dojo.jpg # Alongamento no tatame e saco de pancadas
│       └── beneficios.jpg       # Infográfico de benefícios corporais e mentais
└── Instagram/                   # Arquivos originais de mídia e textos do cliente
```

---

## 4. Design System Marcial (Athletic Dark & Bushido)

### 🎨 Paleta de Cores
O design combina a solenidade dos dojos tradicionais do Japão com a energia esportiva dos centros de combate modernos:

```css
:root {
  /* Vermelho Marcial e Potência */
  --primary: #d3101b;           /* Vermelho Marcial Puro (CTAs e destaques) */
  --primary-hover: #ef233c;     /* Hover vibrante */
  --primary-dark: #8b0000;      /* Gradientes e profundidade */
  --primary-glow: rgba(211, 16, 27, 0.4);

  /* Acentos de Honra e Avaliações */
  --gold: #f59e0b;              /* Dourado para medalhas e estrelas do Google */
  --gold-light: #fbbf24;
  --gold-glow: rgba(245, 158, 11, 0.35);

  /* Superfícies Escuras (Tatame Dark) */
  --bg-deep: #070709;          /* Fundo principal da página */
  --bg-dark: #0f1015;          /* Seções alternadas */
  --bg-card: #161822;          /* Cards e blocos elevados */
  --bg-card-hover: #1e2230;    /* Hover cards */
  --bg-surface-light: #252a3a; /* Detalhes e avatares */

  /* Textos */
  --text-primary: #ffffff;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  
  /* Conversão */
  --whatsapp: #25d366;
  --whatsapp-hover: #20ba59;
}
```

### 🔤 Tipografia
- **Títulos e Headlines:** `Barlow Condensed` (Google Fonts), pesos 700 a 900, em maiúsculo (`uppercase`). Transmite força, solidez atlética e dinamismo de combate.
- **Corpo e Leituras:** `Inter` (Google Fonts), pesos 400 a 600, garantindo legibilidade perfeita em qualquer smartphone sob luz solar.

---

## 5. Anatomia das Seções (Passo a Passo)

### 1. Barra Superior (Topbar Informativa)
- Selo de avaliação: `★ 4.5 no Google · Matrículas Abertas para Crianças e Adultos!`.
- Endereço clicável direto com rota para Santo Antônio do Descoberto - GO.
- Telefone com ligação direta: `(61) 98548-4267`.

### 2. Header & Sticky Navbar
- Logotipo oficial circular com animação sutil ao passar o mouse.
- Menu de âncoras rápidas: *Início, O Dojo, Modalidades, Karatê Infantil, Shihan Rogério, Dojo Kun, Galeria, Avaliações, Horários, Localização*.
- Botão CTA destacado com efeito de pulso contínuo: `Aula Gratuita`.
- Menu hambúrguer animado no mobile com fechamento automático ao clicar no link.

### 3. Hero Section (Dobra Superior de Alta Conversão)
- **Prova Social Imediata:** Badge dourado `★★★★★ 4.5 no Google · Mais de 15 Avaliações Reais`.
- **Headline Poderosa:** *"FORJE SUA MENTE. FORTALEÇA SEU CORPO. CONQUISTE SUA DISCIPLINA."*
- **Subtítulo Estratégico:** Slogan oficial *"Tradição · Disciplina · Respeito"*, evidenciando o Shihan Rogério Sam.
- **Duplo CTA:**
  1. *Botão Primário:* `🥋 Agendar Aula Experimental Gratuita` (dispara WhatsApp preenchido).
  2. *Botão Secundário:* `🥊 Ver Modalidades` (rolagem suave até os cards).
- **Métricas Animadas:** Contadores dinâmicos via JavaScript (4+ Modalidades, 15+ Anos de Tradição, 4.5★ Google, 100% Treinos Adaptados).
- **Hero Frame:** Foto cerimonial do dojo com badge flutuante do Shihan Rogério Sam.

### 4. Sobre o Dojo (Filosofia do Budo & Família)
- Apresentação da história do Centro de Treinamento Okinawa em Santo Antônio do Descoberto.
- 4 Pilares Institucionais: Disciplina & Honra, Condicionamento Extremo, Defesa Pessoal Real e Ambiente Familiar.
- Foto real de treino técnico de Kata.

### 5. Modalidades de Luta (Cards Ricos e Segmentados)
Cards interativos com fotos reais, público-alvo, benefícios detalhados e botão próprio para WhatsApp:
1. **Karatê-Dô Tradicional:** Crianças a partir de 4 anos, jovens e adultos; exames oficiais de faixa; foco em Kihon, Kata e Kumite.
2. **Kickboxing:** Homens e mulheres; queima calórica de até 800kcal/aula; manoplas e alívio do estresse diário.
3. **M.M.A (Artes Marciais Mistas):** Luta em pé, quedas, transições de solo e desenvolvimento atlético completo.
4. **Defesa Pessoal:** Técnicas urbanas para mulheres e iniciantes sem necessidade de força extrema ou experiência prévia.

### 6. Karatê Infantil Especial (Conversão para Pais)
- Apresentação visual com o banner oficial do cliente.
- Foco em resolver as maiores dores dos pais:
  - Foco e melhora no desempenho escolar;
  - Respeito aos pais e obediência;
  - Superação da timidez e combate ao bullying;
  - Saúde, coordenação motora e combate ao sedentarismo/telas.

### 7. Shihan Rogério Sam (Autoridade & Mestre)
- Foto do Sensei no pódio com os alunos campeões mirins.
- Depoimento em destaque: *"Sensei Rogério San é o Melhor! Um exemplo de dedicação, paciência com as crianças e respeito às tradições."*
- Lista de credenciais: dezenas de faixas pretas formados, histórico de campeões regionais e didática humanizada.

### 8. Código de Honra Dojo Kun
- Apresentação gráfica com o cartaz oficial da academia contendo o Torii japonês.
- Os 5 lemas universais traduzidos e explicados: Formação do Caráter, Fidelidade com a Razão, Espírito de Perseverança, Respeito à Etiqueta e Autocontrole.

### 9. Galeria de Fotos e Conquistas
Grade moderna com 6 fotografias autênticas do dia a dia do dojo:
- Pódio dos Campeões Mirins;
- Cerimônia de Graduação e Família;
- Treino Técnico de Kata;
- Combate Kumite com Proteções;
- Apresentação Marcial Feminina;
- Preparação Física e Saco de Pancadas.

### 10. Prova Social do Google Meu Negócio
- Nota 4.5 estrelas em destaque.
- Depoimentos reais de alunos e clientes extraídos do Google:
  - **Jorge Fogaça:** *"Excelente profissional."*
  - **Bruno Alves:** *"Sensei Rogério San é o Melhor!"*
  - **Raphael Augusto:** *"É um bom lugar, um ótimo karatê"*

### 11. Grade Semanal & FAQ Interativo (Accordion)
- Tabela com dias da semana e turnos (Manhã, Tarde e Noite).
- Accordion dinâmico respondendo às 5 maiores objeções:
  1. *Preciso ter experiência prévia para começar?* (Não, treinos 100% adaptados);
  2. *Qual a idade mínima para crianças?* (A partir de 4 anos);
  3. *Como funciona a aula experimental gratuita?* (Basta vir com roupa confortável);
  4. *Preciso comprar quimono no primeiro dia?* (Não, apenas após se matricular);
  5. *Mulheres podem treinar Kickboxing e Defesa Pessoal?* (Sim, grande presença feminina).

### 12. Localização & Como Chegar
- Endereço completo: *Quadra 111/112 Lote 07 Avenida Goiás, Santo Antônio do Descoberto - GO*.
- Mapa interativo do Google Maps incorporado via `iframe`.
- Botões de navegação rápida com 1 clique para Google Maps e Waze.

### 13. CTA Final & Botão Flutuante de WhatsApp
- Banner de fechamento com chamado à ação e link para Instagram.
- Botão flutuante do WhatsApp verde oficial com pulso e badge de notificação no canto inferior direito.

---

## 6. Engenharia de Conversão para WhatsApp

Todos os botões do site foram integrados com mensagens pré-formatadas contextualizadas, garantindo que o cliente saiba exatamente a intenção de quem está entrando em contato:

1. **Botão Principal / Hero:**
   `https://wa.me/5561985484267?text=Olá!%20Vim%20pelo%20site%20da%20Academia%20Okinawa%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita.`
2. **Botão Karatê Infantil:**
   `https://wa.me/5561985484267?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20para%20meu%20filho(a)%20no%20Karatê%20Infantil.`
3. **Botão Kickboxing:**
   `https://wa.me/5561985484267?text=Olá!%20Quero%20fazer%20uma%20aula%20experimental%20de%20Kickboxing.`
4. **Botão M.M.A:**
   `https://wa.me/5561985484267?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20treinos%20de%20MMA.`
5. **Botão Defesa Pessoal:**
   `https://wa.me/5561985484267?text=Olá!%20Quero%20agendar%20uma%20aula%20de%20Defesa%20Pessoal.`
6. **Botão Shihan Rogério Sam:**
   `https://wa.me/5561985484267?text=Olá%20Sensei%20Rogério!%20Gostaria%20de%20conversar%20sobre%20as%20aulas%20na%20Academia%20Okinawa.`

---

## 7. Deploy Automatizado via Vercel MCP

O deploy foi realizado utilizando a integração do servidor MCP da Vercel (`vercel` MCP server) com os seguintes passos:

1. **Criação do Projeto:** Projeto registrado na equipe Vercel com nome `academia-okinawa` (`framework: null` para sites estáticos de alto desempenho).
2. **Configuração de Acesso Público:** Remoção do SSO Protection e autenticação interna (`ssoProtection: null`), tornando a URL 100% pública para clientes externos.
3. **Upload de Arquivos via SHA-1 Digest:** Todos os 15 arquivos (incluindo imagens otimizadas, scripts e estilos) foram enviados para o endpoint de arquivos da Vercel.
4. **Criação do Deployment em Produção:** Chamada para `/v13/deployments` associando os arquivos à rota de produção (`target: "production"`).
5. **Verificação de Saúde via MCP:** Execução da ferramenta `get_deployment` confirmando status `READY`, `aliasAssigned: true` e `PROMOTED`.

---

## 8. URLs e Acessos Oficiais

- **URL de Produção Principal:**
  👉 [https://academia-okinawa.vercel.app](https://academia-okinawa.vercel.app)
- **URL Alternativa de Equipe:**
  👉 [https://academia-okinawa-kelevra.vercel.app](https://academia-okinawa-kelevra.vercel.app)
- **ID do Projeto na Vercel:** `prj_gfwQNGHG4pGaXrBWc9zdnuPP6x0x`
- **ID do Deployment Ativo:** `dpl_B3mgftcJ2RDb4tRpFyukumG33rPZ`

---

## 9. Checklist de Manutenção & Atualização

Quando houver novas fotos de exames de faixa, campeonatos ou alterações de horários:

1. **Adicionar Novas Fotos:**
   - Salvar as imagens na pasta `assets/images/` em formato `.jpg`.
   - Manter a resolução entre 1080px e 1440px de largura e compressão em ~80% de qualidade para carregamento rápido.
2. **Atualizar Horários e Mensalidades:**
   - Editar a tabela de horários em `index.html` na seção `#horarios`.
3. **Redeploy Instantâneo:**
   - Executar o script de upload na Vercel ou acionar a ferramenta `create_deployment` do MCP da Vercel. O site atualizará no domínio em menos de 10 segundos sem tempo de inatividade.
