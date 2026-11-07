# Central de Serviços ARION — Branch `alpha` (experimental)

> **Versão experimental 2.0.0-alpha.17.** Visual novo, barra rápida de vidro e Categorização com Atacado, Suporte TI e **Comercial (teste)**.
> Instala ao lado da versão normal (é outra extensão). A versão estável continua na branch `main`.

![Telas da versão Alpha](imagens/alpha-telas.png)

| | |
|---|---|
| **Versão** | 2.0.0-alpha.17 |
| **Navegadores** | Google Chrome, Microsoft Edge, Mozilla Firefox 128+ |
| **Download** | [`arion-central-2.0.0-alpha.17.zip`](arion-central-2.0.0-alpha.17.zip) |
| **Arquivo de versão** | [`versao.json`](versao.json) |

## Ferramentas

| Aba | Ferramenta | O que faz | Site |
|---|---|---|---|
| Copiar | **Copiar Chamado** | Captura o chamado e gera a máscara. A máscara é editável. | ServiceAide |
| Categorizar | **Categorização** | Categoriza e encaminha: NOC - ATACADO, ENG - SISTEMAS, NOC - CANCELAMENTOS NGO ou NOC - ACESSOS E CADASTROS. | OTRS |
| Abrir | **Abertura de Chamados** | Preenche o formulário do chamado e gera o texto do chamado. | ServiceAide |
| Voos | **Inspeção de Voos** | Lê a planilha, toca os alarmes de Inspeção e Acompanhamento e preenche os chamados. | ServiceAide |

### Barra rápida

Pílula de vidro no rodapé: **Início | Copiar · Abrir · Voos | Categorizar**.

- A aba aberta mostra o nome. As outras mostram o nome ao passar o mouse.
- Ponto verde: ferramenta do site aberto na aba.
- `Alt+1` a `Alt+5` troca de aba. `Alt+Shift+A` abre a Central.

## Instale

1. Faça o download de `arion-central-2.0.0-alpha.17.zip`.
2. Extraia em `C:\ARION\`.
3. Abra `chrome://extensions` (Edge: `edge://extensions`). Ligue **Modo do desenvolvedor**.
4. Clique em **Carregar sem compactação**. Selecione `C:\ARION\arion-central-alpha`.

### Firefox: libere o acesso aos sites

No Firefox, o acesso ao OTRS e ao ServiceAide não vem ligado na instalação.

1. Abra a Central. No Início, clique em **Permitir acesso**.
2. Clique em **Permitir** na janela do Firefox.

**Resultado:** Categorização, Abertura de Chamados e Inspeção de Voos leem o OTRS e o ServiceAide.

## Como usar

### Copiar Chamado

1. Primeira vez: clique na engrenagem. Digite seu nome de atendente. Clique em **Salvar**.
2. Abra o chamado no ServiceAide.
3. Clique em **Capturar chamado**.
4. Confira a máscara. Clique no texto para editar.
5. Clique em **Copiar**. As edições vão junto. **Limpar** apaga a máscara.

### Categorização (OTRS)

1. Abra o chamado no OTRS.
2. Escolha **Atacado**, **Suporte TI** ou **Comercial**.
3. Confira os dados. Clique em **Categorizar**.
4. Clique em **Encaminhar**. Depois, clique em **Mover para a fila** e confirme.

**Modelos (Atacado)**

| Modelo | Exemplo de máscara |
|---|---|
| Restauração · Não Geográficos (Urbanos) | `Não Geográficos (Urbanos) - CLARO S.A. - RESTAURAÇÃO - INTERNET - PROJETO CARREFOUR - BL300000097058 - CI: 473084` |
| Restauração · Bradesco | `BRAD - TELEFONICA BRASIL S.A. - RESTAURAÇÃO - INTERNET - BRADESCO - BD0001222 - BRAD: 791` |
| Restauração · Projetos BB, CEF, Correios e FUST | `Projeto FUST - TELEFONICA BRASIL S.A. - RESTAURAÇÃO - INTERNET - PROJETO FUST - VIVO.BA.BLIVR000093 - INC10412506` |
| Reincidência · Bradesco | `[REINCIDENCIA MONITORAMENTO] - TELMEX - BRADESCO - BD500000098988 - BRAD:2950` |
| Cancelamento | `NGO - TELEFONICA BRASIL S.A. - CANCELAMENTO - INTERNET - OP:AN TELECOM - BD0001246 - NP:15576` |
| **Cancelar Serviços · NGO** | `Não Geográficos (Urbanos) - LAVEZZO CORPORACOES COMERCIAIS LTDA - CANCELAMENTO - INTERNET - Pedido: 16003` |
| Restauração · Arcos Dourados - CNF | Igual ao Arcos Dourados. No Encaminhar, escolha **OPE - FIELD SERVICES** ou **NOC - SUPORTE AVANÇADO**. |
| Solicitação de Tratativa de Qualidade | Título e Assunto = o título que veio. Fila **NOC - QUALIDADE ATACADO**. |
| **Solicitação · Cadastro no CMDB** | `Não Geográficos (Urbanos) - NORTH TELECOM - SOLICITAÇÃO - INTERNET - CADASTRO NO CMDB` |

- **Reincidência** e **Cancelamento** só fazem a máscara. Clique em **Copiar**.
- **FUST:** Localidade **Projeto FUST**. Identificador INC da Vivo.

**Cancelar Serviços · NGO**

Chamado do SGF com o título `Cancelar Serviços do Pedido: N` (fila ATENDIMENTO).

1. A Central lê do pedido: Razão social, Nome fantasia, Telefone, CNPJ, Contato, E-mail e produtos.
2. **POP** (GRU, GIG, BSB, CNF, VCP, FLN, MEA, VIX, POA, FOR, Congonhas, Curitiba, Cuiabá, NAT): a Central avisa e não categoriza. POP não tem este processo.
3. Fora dos POP, **Categorizar** preenche:
   - Localidade **Não Geográficos (Urbanos)**;
   - Razão social, Nome fantasia e Telefone;
   - Enviar N1 = **Sim**;
   - Título e Assunto = a máscara;
   - Texto: *Arion - Central de Atendimento · Este ticket foi categorizado e encaminhado para a fila Service Desk.*
4. **Encaminhar** faz a nota (Abertura chamado ISP = **Não**) e move para **NOC - CANCELAMENTOS NGO**.

> **NOTA:** o campo **Local** corrige o POP à mão. Tipo (Cancelamento) e SLA (primeira opção) ainda estão em definição.

**Solicitação · Cadastro no CMDB**

Chamado com a palavra `CMDB` no título ou no corpo.

1. Localidade: **Não Geográficos (Urbanos)**. Com a palavra "aeroporto": **Não Geográficos (Aeroportos)**.
2. **Empresa:** a Central procura `Empresa:`, `Razão Social:` ou `Nome Fantasia:` no chamado. Se não achar, digite no painel.
3. **Categorizar** preenche:
   - Tipo **Solicitação**;
   - Razão social e Nome fantasia com a empresa;
   - Serviço SGF **Internet** e Serviço **Internet**;
   - SLA **24 Horas 24x7** e Site **NGO - NAO GEOGRAFICO**;
   - Título e Assunto = a máscara;
   - Texto: *Arion - Central de Atendimento · Este ticket foi categorizado e encaminhado para a fila Service Desk.*
4. **Encaminhar** faz a nota (Abertura chamado ISP = **Não**) e move para **NOC - ACESSOS E CADASTROS**.

> **NOTA:** a empresa precisa existir na lista do OTRS. Se não existir, a Central avisa: Razão social não preenchida.

**Arcos Dourados em Confins (CNF)**

Chamado do Arcos Dourados com `CNF` ou `Confins`: a Central escolhe o cliente **Arcos Dourados - CNF** (cliente POP).

1. Categorizar: igual ao Arcos Dourados.
2. Escolha a **Fila do Encaminhar**: OPE - FIELD SERVICES ou NOC - SUPORTE AVANÇADO.
3. Encaminhar: nota com a fila escolhida e move para ela.

**Solicitação de Tratativa de Qualidade**

Título `SOLICITAÇÃO DE TRATATIVA DE QUALIDADE | OQ-… | TQ-… | Cliente | Operadora | Designação`.

1. A Central lê cliente, operadora e designação do título e categoriza normalmente.
2. Título e Assunto ficam com o título que veio.
3. Encaminhar: nota e fila **NOC - QUALIDADE ATACADO**.

**Comercial (teste)**

1. Abra o chamado no OTRS. Clique em **Capturar chamado**.
   - Chamado: número do ticket.
   - Nome do cliente, Empresa, Contato, E-mail e Descrição: a Central procura no chamado e mostra de onde veio. Não achou: digite.
   - **Localidade:** começa vazia. Digite e escolha uma das 137 localidades do OTRS.
2. Clique em **Abrir chamado** (fica fixo no rodapé). A Central:
   - grava **Data e Hora** do clique;
   - abre "Novo chamado de Restauração/Solicitação" e preenche os campos. Confira e clique em **Enviar**.
3. No card **Planilha CSTI**, copie cada campo pelo ícone de copiar (CHAMADO, NOME DO CLIENTE, EMPRESA, DATA, HORA) e cole na planilha.
   - **Copiar linha**: as 5 colunas de uma vez, para colar na coluna A da linha vazia.

> **NOTA:** os valores do chamado novo (Tipo, Serviço SGF, Serviço, SLA, Site e Assunto) ficam em **Campos do chamado novo (OTRS)**.

### Abertura de Chamados

1. Abra o formulário do chamado no ServiceAide.
2. **1 · Solicitante:** digite o nome e clique em **Localizar**. O Telefone é opcional.
3. **2 · Chamado:** Solicitação ou Incidente, Equipamento, Departamento, Localização e Problema.
4. Clique em **Preencher no ServiceAide**. Confira e salve.
5. **Copiar** captura o chamado e copia o texto no modelo da máscara.

A **engrenagem** ao lado de **Equipamento** abre a lista de equipamentos: Adicionar e remover (✕).

### Inspeção de Voos

1. Importe a planilha do dia (`.xlsx`, `.xls` ou `.csv`).
2. Escolha a data. Aparecem só os voos de **Partida Internacional**.
3. Os alarmes tocam 4 h antes (Inspeção) e 1 h antes (Acompanhamento), mesmo com a Central fechada.
4. Com o formulário aberto no ServiceAide, clique em **Colar**.

### Trocar tema

Início → ⋯ → **Trocar tema**: Claro, Escuro, Areia, Noite ou Alto contraste. Passe o mouse para ver. Clique para aplicar.

![Temas](imagens/alpha-temas.png)

## Aviso de versão nova

A Central lê o [`versao.json`](versao.json) desta branch a cada 6 horas e ao abrir o navegador.

Se a versão do arquivo é maior que a instalada:

- o ícone ARION mostra o selo **1**;
- aparece uma notificação. Clique nela para baixar;
- o Início mostra o aviso com o botão **Baixar**.

Para atualizar: extraia o zip novo na mesma pasta. Clique em recarregar em `chrome://extensions`.

> **NOTA:** A extensão não se troca sozinha. O Chrome não permite isso no modo "Carregar sem compactação".

## Levar equipamentos e localizações

Os dados ficam no navegador, em cada extensão. Para adicionar uma lista:

1. Abra `chrome://extensions`. No card **ARION Central**, clique em **service worker**.
2. Na aba **Console**, cole (troque as listas pelas suas):

```js
const novosEq  = ["CUPPS", "BCBP", "TOTEM"];
const novasLoc = ["CHECK IN TAP", "PORTÃO 12"];
chrome.storage.local.get(['equips', 'locsUsadas'], ({ equips = [], locsUsadas = [] }) => {
  const base = equips.length ? equips : ['CUPPS', 'CUSS', 'FIDS'];
  const unir = a => [...new Map(a.map(x => [x.trim().toUpperCase(), x.trim()])).values()];
  chrome.storage.local.set({ equips: unir([...base, ...novosEq]), locsUsadas: unir([...locsUsadas, ...novasLoc]) }, () => console.log('Pronto'));
});
```

3. Feche e abra a Central.

Firefox: `about:debugging` → Este Firefox → ARION Central → **Inspecionar**.

## Versões (alpha)

| Versão | Mudanças |
|---|---|
| **2.0.0-alpha.17** | Comercial: copiar cada campo da planilha; Data e Hora no Abrir chamado; Localidade por digitação; botão fixo. |
| 2.0.0-alpha.16 | Comercial preenche a planilha sozinho, na ordem, na 1ª linha vazia. |
| 2.0.0-alpha.15 | Comercial (teste) e Tratativa de Qualidade. |
| 2.0.0-alpha.14 | Categorizar mais rápido, Arcos Dourados - CNF, correções do CMDB e do .csv dos Voos. |
| 2.0.0-alpha.13 | Cadastro no CMDB no Categorizar (Urbanos ou Aeroportos, nota e fila NOC - ACESSOS E CADASTROS). |
| 2.0.0-alpha.12 | Cancelar Serviços · NGO no Categorizar (POP, nota e fila NOC - CANCELAMENTOS NGO); barra só de ícones. |
| 2.0.0-alpha.11 | Barra de vidro; nomes novos; Copiar Chamado só com a máscara editável; engrenagem de Equipamento; Telefone opcional; FUST em Projetos; textos revisados. |
| 2.0.0-alpha.10 | Firefox acha os scripts da página (caminho a partir da raiz). |
| 2.0.0-alpha.9 | Copiar da Abertura de Chamados captura e copia. |
| 2.0.0-alpha.8 | Texto do chamado no modelo da máscara. |

## Publique uma versão nova (responsável)

1. Mude `version` e `version_name` no `manifest.json`.
2. Gere o zip (com a pasta `arion-central-alpha` dentro) e envie para esta branch.
3. Mude `versao`, `nome`, `download` e `notas` no `versao.json`. Envie.

**Resultado:** em até 6 horas, todos recebem o aviso.

---

A documentação da versão estável (1.3.3) está na branch [`main`](https://github.com/ThiagoTasseli/central-servicos/tree/main).
