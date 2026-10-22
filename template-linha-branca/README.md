# ❄️ Template Boilerplate — Linha Branca & Assistência Técnica

Template pronto para uso e clonagem para qualquer empresa de conserto de geladeiras, máquinas de lavar, freezers e eletrodomésticos.

## Como Usar para um Novo Cliente em 5 Minutos:

1. **Copie a pasta `template-linha-branca`** para a pasta do novo cliente (ex.: `C:\Users\Solano\Documents\sites\nome-do-cliente`).
2. **Abra o arquivo `index.html`** e faça a substituição das variáveis entre chaves duplas:
   - `{{NOME_EMPRESA}}`: Nome fantasia do cliente (ex.: Refrigeração Silva).
   - `{{CIDADE}}`: Cidade principal (ex.: São Paulo, Goiânia, Campinas).
   - `{{ESTADO_SIGLA}}`: UF (ex.: SP, GO, RJ).
   - `{{ENDERECO_COMPLETO}}`: Endereço da base ou oficina.
   - `{{CEP}}`: CEP do local.
   - `{{TELEFONE_FORMATADO}}`: Telefone visível (ex.: (11) 98765-4321).
   - `{{TELEFONE_NUMEROS}}`: Apenas dígitos (ex.: 11987654321).
   - `{{WHATSAPP_NUMEROS}}`: DDI + DDD + Número (ex.: 5511987654321).
   - `{{ANOS_MERCADO}}`: Anos de experiência (ex.: 15, 20, 38).
   - `{{GARANTIA_MESES}}`: Tempo de garantia oferecido (ex.: 3, 6, 12).
   - `{{NOTA_GOOGLE}}`: Nota no Google Meu Negócio (ex.: 4.9, 5.0).
   - `{{TOTAL_AVALIACOES}}`: Quantidade de reviews (ex.: +120, +350).
   - `{{LINK_GOOGLE_MAPS}}`: Link para rotas no Google Maps.
3. **Substitua a imagem `logo.jpg`** pela logo oficial do cliente.
4. **Deploy no Netlify:**
   - Execute o deploy pelo Netlify MCP ou via CLI:
   ```bash
   netlify deploy --prod --dir=.
   ```
Pronto! O site estará no ar e gerando leads diretamente para o WhatsApp do cliente.
