# Central de Serviços ARION — Branch `alpha` (experimental)

> **Versão experimental 2.0.0-alpha.17.** Visual novo, barra rápida de vidro e Categorização com Atacado, Suporte TI e **Comercial (teste)**

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
