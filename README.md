# Central de Serviços ARION — Branch `alpha` (experimental)

> **Versão experimental 2.0.0-alpha.13.** Visual novo, barra rápida de vidro, Cancelar Serviços (NGO) e Cadastro no CMDB no Categorizar.
> Instala ao lado da versão normal (é outra extensão). A versão estável continua na branch `main`.

![Telas da versão Alpha](imagens/alpha-telas.png)

| | |
|---|---|
| **Versão** | 2.0.0-alpha.13 |
| **Navegadores** | Google Chrome, Microsoft Edge, Mozilla Firefox 128+ |
| **Download** | [`arion-central-2.0.0-alpha.13.zip`](arion-central-2.0.0-alpha.13.zip) |
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

1. Faça o download de `arion-central-2.0.0-alpha.13.zip`.
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
2. Escolha **Atacado** ou **Suporte TI**.
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
| **2.0.0-alpha.13** | Cadastro no CMDB no Categorizar (Urbanos ou Aeroportos, nota e fila NOC - ACESSOS E CADASTROS). |
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

# Central de Serviços ARION

**Uma extensão. Quatro ferramentas. Navegação por ícones.**
Extensão de navegador para o atendimento do Grupo ARION (uso interno).

![As quatro ferramentas da Central](imagens/capa.png)

| | |
|---|---|
| **Versão** | 1.3.3 (teste) |
| **Navegadores** | Google Chrome, Microsoft Edge, Mozilla Firefox 128+ |
| **Download** | [`central-servicos-v1.3.3-teste.zip`](central-servicos-v1.3.3-teste.zip) |
| **Manual do usuário** | [GUIA-DO-USUARIO.md](GUIA-DO-USUARIO.md) (linguagem ASD-STE100) |

---

## O que é

A Central junta quatro extensões antigas em uma só. Cada ferramenta tem um ícone na barra lateral.

| Ícone | Ferramenta | Objetivo | Sites |
|---|---|---|---|
| 💬 | **Máscara de Chamado** | Captura o chamado e gera a máscara para o WhatsApp. | Service Aide |
| 🖧 | **NOC** | Categoriza chamados de Atacado e de Suporte TI (Engenharia). Encaminha para NOC - ATACADO ou ENG - SISTEMAS. | OTRS |
| 📋 | **Preenchimento de Chamados** | Preenche o formulário do chamado e gera o modelo de texto. | ServiceAide |
| ✈️ | **Central de Voos** | Lê a planilha de voos, avisa Inspeção e Acompanhamento (CUPPS) e preenche os chamados. | ServiceAide |

![Mapa da barra de ícones](imagens/mapa-da-barra.png)

---

## Instalação rápida

1. Faça o download de [`central-servicos-v1.3.3-teste.zip`](central-servicos-v1.3.3-teste.zip).
2. Extraia em `C:\ARION\`.
3. Abra `chrome://extensions` (Edge: `edge://extensions`).
4. Ligue **Modo do desenvolvedor**.
5. Clique em **Carregar sem compactação** e selecione `C:\ARION\arion-central`.

Passo a passo com imagens, Firefox e uso de cada ferramenta: **[Guia do usuário](GUIA-DO-USUARIO.md)**.

---

## Recursos

- **Barra de ícones** com as 4 ferramentas, recolhível (`Alt+0`).
- **Guia** com objetivo e passo a passo de cada ferramenta, mais ajuda contextual (`?`).
- **Site detectado:** a Central indica a ferramenta certa para a aba aberta.
- **Painel lateral fixo ou bandeja**, à escolha do usuário.
- **Tema claro e escuro** único para todas as ferramentas.
- **Alarmes de voo** com notificação, som, adiar e silenciar — funcionam com a Central fechada.
- **Meus alarmes:** o botão **+** cria tarefas e lembretes (ex.: passagem de turno). Repetição: uma vez, diário ou segunda a sexta. Lista separada dos alarmes de voo.
- **10 sons de alarme** com nomes simples (ex.: Clássico, Sino, Avião decolando).
- **NOC com tipo de chamado:** NOC Atacado ou Suporte TI (Engenharia). Máscaras de Restauração, Reincidência e Cancelamento.
- **Campos de seleção com filtro:** digite parte do texto. A lista mostra só as opções que combinam.
- **Ir para o voo:** o link **Partida HH:MM ↗** abre o cartão do voo. Um pulso mostra o botão de colar correto.
- **Localizar solicitante:** o botão **Localizar** procura nome e sobrenome no ServiceAide. A Central não repete a busca no preenchimento.
- **E-mail protegido:** se você digita outro e-mail, a Central não muda o e-mail.
- **Departamento com sugestões:** digite parte do nome. A lista mostra os departamentos do ServiceAide.
- **Atalhos:** `Alt+Shift+A` abre; `Alt+1…5` troca de ferramenta.
- **Visual padronizado:** mesmo cabeçalho, cores, fontes, botões e campos nas 4 ferramentas.

<p>
  <img src="imagens/tela-site-detectado.png" width="260" alt="Site detectado">
  <img src="imagens/tela-ajuda.png" width="260" alt="Ajuda da ferramenta">
  <img src="imagens/tela-tema-claro.png" width="260" alt="Tema claro">
</p>

### Novo na versão 1.3.3

**Tipo de chamado (NOC)**

1. Abra o chamado no OTRS.
2. Clique no ícone **NOC**.
3. Em **Tipo de chamado**, selecione **NOC Atacado** ou **Suporte TI (Engenharia)**.

**Resultado:** a Central mostra os campos e a máscara do tipo selecionado.

<p>
  <img src="imagens/tela-noc.png" width="260" alt="NOC Atacado">
  <img src="imagens/tela-noc-modelos.png" width="260" alt="Modelos de máscara">
  <img src="imagens/tela-noc-suporte.png" width="260" alt="Suporte TI (Engenharia)">
</p>

**NOC Atacado — modelos de máscara**

| Modelo | Exemplo de máscara | Identificador |
|---|---|---|
| Restauração · Não Geográficos (Urbanos) | `Não Geográficos (Urbanos) - CLARO S.A. - RESTAURAÇÃO - INTERNET - PROJETO CARREFOUR - BL300000097058 - CI: 473084` | CI (McDonald's: SIGLA) |
| Restauração · Bradesco | `BRAD - TELEFONICA BRASIL S.A. - RESTAURAÇÃO - INTERNET - BRADESCO - BD0001222 - BRAD: 791` | BRAD (Vivo) / CI (Telmex) |
| Restauração · Projetos BB, CEF e Correios | `Projeto BB - CLARO S.A. - RESTAURAÇÃO - INTERNET - PROJETO BB - … - CI: …` | CI |
| Reincidência · Bradesco | `[REINCIDENCIA MONITORAMENTO] - TELMEX - BRADESCO - BD500000098988 - BRAD:2950` | BRAD |
| Cancelamento | `NGO - TELEFONICA BRASIL S.A. - CANCELAMENTO - INTERNET - OP:AN TELECOM - BD0001246 - NP:15576` | NP |

- Para **Não Geográficos (Urbanos)** e **Projetos**, selecione também o **Cliente**.
- **Reincidência** e **Cancelamento** só fazem a máscara. Clique em **Copiar**.

**Suporte TI (Engenharia)**

1. Selecione o **Motivo**: Notebook, Celular, Acessos, E-mails, Softwares ou Outras.
2. Clique em **Categorizar**.
3. Clique em **Encaminhar para ENG - SISTEMAS**.

**Resultado:** assunto `Grupo Arion - SOLICITAÇÃO - SUPORTE TI (Engenharia) - <Motivo>`. Tipo Solicitação, SLA Sem SLA, Site NGO - NAO GEOGRAFICO, Empresa Grupo Arion. A nota de encaminhamento vai para a equipe Eng. Sistemas.

**Meus alarmes e Alarmes de voo (Central de Voos → Alarme)**

- Os alarmes próprios ficam em **Meus alarmes**. Os alarmes de voo ficam em **Alarmes de voo**.
- Um alarme adiado (**Adiar 5 min**) mostra **Agendado**.

<img src="imagens/tela-meus-alarmes.png" width="300" alt="Meus alarmes e Alarmes de voo">

**Som do alarme**

1. Clique na aba **Alarme**.
2. Em **Som do alarme**, selecione um som. A Central toca o som durante 3 segundos.

<img src="imagens/tela-som-alarme.png" width="300" alt="Som do alarme">

**Máscara de Chamado**

- O Connecta (Smart IT) foi removido. A Máscara funciona só no Service Aide.
- O campo **Técnico** não mostra mais a lista de nomes. Digite o nome.

### Novo na versão 1.3.2

**Departamento (Preenchimento de Chamados)**

1. Clique no campo **Departamento**.
2. Digite parte do nome. Exemplo: `pol`.
3. Clique no departamento. Também é possível usar as setas e `Enter`.

**Resultado:** o campo recebe o nome correto do departamento.

<img src="imagens/tela-chamados-departamento.png" width="300" alt="Sugestões de departamento">

**E-mail**

Se você digita um e-mail depois de **Localizar**, a Central não muda este e-mail.
**Preencher automaticamente** escreve o seu e-mail no formulário. A mensagem diz **E-mail mantido**.

### Novo na versão 1.3.1

**Meus alarmes (Central de Voos → Alarme)**

1. Clique em **+**.
2. Selecione **Tarefa** ou **Lembrete**.
3. Digite o **Título** e o **Horário**.
4. Selecione **Repetir**.
5. Clique em **Criar alarme**.

**Resultado:** o alarme aparece em **Meus alarmes**, com os alarmes de voo.

**Partida HH:MM ↗**

1. Clique em **Partida HH:MM ↗** num alarme de voo.

**Resultado:** a Central abre o cartão do voo. O botão para colar pulsa durante 8 segundos.
Laranja = Inspeção. Verde = Acompanhamento.

**Localizar (Preenchimento de Chamados)**

1. Digite o **Nome** completo do solicitante.
2. Clique em **Localizar** (ou pressione `Enter`).

**Resultado:** a Central mostra **Encontrado** ou **Não encontrado**.
Se encontrou, o nome fica no formulário e o e-mail é preenchido.
**Preencher automaticamente** não busca o nome outra vez.

<p>
  <img src="imagens/tela-alarme-novo.png" width="260" alt="Novo alarme">
  <img src="imagens/tela-meus-alarmes.png" width="300" alt="Meus alarmes">
</p>
<p>
  <img src="imagens/tela-voo-destaque.png" width="300" alt="Botão de colar em destaque">
  <img src="imagens/tela-chamados-localizar.png" width="300" alt="Localizar solicitante">
</p>

---

## Privacidade e segurança

- Nenhum dado sai do navegador. Sem servidores, sem telemetria.
- Fontes e bibliotecas ficam dentro da extensão (não usa CDN nem Google Fonts).
- Dados de chamados e solicitantes são apagados após **7 dias** (inclui o nome localizado).
- Textos vindos de páginas e planilhas são tratados antes de aparecer na tela.
- Biblioteca de planilhas: SheetJS 0.20.3.

---

## Estrutura do pacote

```
arion-central/
├── manifest.json        Manifest V3 único (Chrome, Edge, Firefox)
├── background.js        Painel lateral, alarmes, limpeza de dados
├── hub/                 Barra de ícones, Guia, ajuda, avisos
├── shared/              Design system: cores, tema, fontes, logo, campo de seleção com filtro
├── sounds/              Sons dos alarmes (lista em sons.js)
└── apps/
    ├── mascara/         Máscara de Chamado
    ├── noc-atacado/     NOC (Atacado e Suporte TI)
    ├── preenchimento/   Preenchimento de Chamados
    └── voos/            Central de Voos
```

**Tecnologias:** WebExtensions Manifest V3 · JavaScript puro (sem build) · HTML5 e CSS3 · SheetJS · DM Sans e Syne (OFL).

---

## Versões

| Versão | Mudanças |
|---|---|
| **1.3.3 (teste)** | NOC: tipo de chamado (Atacado ou Suporte TI), máscaras novas, cliente para Não Geográficos; Meus alarmes e Alarmes de voo separados; adiado = Agendado; 10 sons; Connecta removido; filtro nos campos de seleção. |
| 1.3.2 (teste) | E-mail digitado não é sobrescrito; Departamento com sugestões (41 opções do ServiceAide). |
| 1.3.1 (teste) | Meus alarmes (tarefas e lembretes, botão +); link **Partida** com destaque no botão de colar; botão **Localizar** no Nome do Preenchimento. |
| 1.3.0 (teste) | Visual padronizado; tema único; fontes locais; correções de segurança; SheetJS 0.20.3; limpeza de dados após 7 dias; aviso de versão nova. |
| 1.2.0 | Botão para recolher a barra. |
| 1.1.0 | Modo bandeja ou lateral fixa. |
| 1.0.0 | Primeira versão: 4 extensões em uma. |

---

## Problemas

Na Central, abra o **Guia** → **Copiar dados para relatar problema** e envie o texto para o responsável,
ou abra uma *issue* neste repositório.

*Grupo ARION · uso interno*
