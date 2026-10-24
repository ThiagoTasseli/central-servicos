# Central de Serviços ARION

**Uma extensão. Quatro ferramentas. Navegação por ícones.**
Extensão de navegador para o atendimento do Grupo ARION (uso interno).

![As quatro ferramentas da Central](imagens/capa.png)

| | |
|---|---|
| **Versão** | 1.3.1 (teste) |
| **Navegadores** | Google Chrome, Microsoft Edge, Mozilla Firefox 128+ |
| **Download** | [`central-servicos-v1.3.1-teste.zip`](central-servicos-v1.3.1-teste.zip) |
| **Manual do usuário** | [GUIA-DO-USUARIO.md](GUIA-DO-USUARIO.md) (linguagem ASD-STE100) |

---

## O que é

A Central junta quatro extensões antigas em uma só. Cada ferramenta tem um ícone na barra lateral.

| Ícone | Ferramenta | Objetivo | Sites |
|---|---|---|---|
| 💬 | **Máscara de Chamado** | Captura o chamado e gera a máscara para o WhatsApp. | Service Aide, Connecta (Smart IT) |
| 🖧 | **NOC Atacado** | Categoriza chamados de atacado e encaminha para a fila NOC - ATACADO. | OTRS |
| 📋 | **Preenchimento de Chamados** | Preenche o formulário do chamado e gera o modelo de texto. | ServiceAide |
| ✈️ | **Central de Voos** | Lê a planilha de voos, avisa Inspeção e Acompanhamento (CUPPS) e preenche os chamados. | ServiceAide |

![Mapa da barra de ícones](imagens/mapa-da-barra.png)

---

## Instalação rápida

1. Faça o download de [`central-servicos-v1.3.1-teste.zip`](central-servicos-v1.3.1-teste.zip).
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
- **Meus alarmes:** o botão **+** cria tarefas e lembretes (ex.: passagem de turno). Repetição: uma vez, diário ou segunda a sexta.
- **Ir para o voo:** o link **Partida HH:MM ↗** abre o cartão do voo. Um pulso mostra o botão de colar correto.
- **Localizar solicitante:** o botão **Localizar** procura nome e sobrenome no ServiceAide. A Central não repete a busca no preenchimento.
- **Atalhos:** `Alt+Shift+A` abre; `Alt+1…5` troca de ferramenta.
- **Visual padronizado:** mesmo cabeçalho, cores, fontes, botões e campos nas 4 ferramentas.

<p>
  <img src="imagens/tela-site-detectado.png" width="260" alt="Site detectado">
  <img src="imagens/tela-ajuda.png" width="260" alt="Ajuda da ferramenta">
  <img src="imagens/tela-tema-claro.png" width="260" alt="Tema claro">
</p>

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
├── shared/              Design system: cores, tema, fontes, logo
└── apps/
    ├── mascara/         Máscara de Chamado
    ├── noc-atacado/     NOC Atacado
    ├── preenchimento/   Preenchimento de Chamados
    └── voos/            Central de Voos
```

**Tecnologias:** WebExtensions Manifest V3 · JavaScript puro (sem build) · HTML5 e CSS3 · SheetJS · DM Sans e Syne (OFL).

---

## Versões

| Versão | Mudanças |
|---|---|
| **1.3.1 (teste)** | Meus alarmes (tarefas e lembretes, botão +); link **Partida** com destaque no botão de colar; botão **Localizar** no Nome do Preenchimento. |
| 1.3.0 (teste) | Visual padronizado; tema único; fontes locais; correções de segurança; SheetJS 0.20.3; limpeza de dados após 7 dias; aviso de versão nova. |
| 1.2.0 | Botão para recolher a barra. |
| 1.1.0 | Modo bandeja ou lateral fixa. |
| 1.0.0 | Primeira versão: 4 extensões em uma. |

---

## Problemas

Na Central, abra o **Guia** → **Copiar dados para relatar problema** e envie o texto para o responsável,
ou abra uma *issue* neste repositório.

*Grupo ARION · uso interno*
