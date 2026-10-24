// Central ARION — lista os departamentos do ServiceAide.
// Uso: abra o formulário do chamado, F12 → Console, cole e pressione Enter.
// O resultado vai para a área de transferência (JSON).
(async () => {
  // Procura o ExtJS na página e nos iframes
  const wins = [window, ...[...document.querySelectorAll('iframe')].map(f => { try { return f.contentWindow; } catch { return null; } })].filter(w => w && w.Ext);
  let lista = [];
  for (const w of wins) {
    const cb = w.Ext.ComponentQuery.query('combobox, combo').find(c =>
      /departamento/i.test([c.fieldLabel, c.name, c.autoidentifier, c.getFieldLabel && c.getFieldLabel()].join(' ')));
    if (!cb) continue;
    const st = cb.getStore(), campo = cb.displayField;
    const ler = () => (st.getData ? st.getData().items : st.data.items).map(r => r.get(campo));
    // Lista paginada/remota: carrega tudo de uma vez
    if (st.getTotalCount && st.getTotalCount() > st.getCount()) {
      st.setPageSize && st.setPageSize(5000);
      await new Promise(ok => st.load({ params: { limit: 5000, start: 0 }, callback: ok }));
    } else if (!st.getCount()) {
      await new Promise(ok => st.load({ callback: ok }));
    }
    lista = ler();
    break;
  }
  // Plano B: abra a lista do Departamento e role até o fim antes de rodar
  if (!lista.length) lista = [...document.querySelectorAll('.x-boundlist-item, [role="option"]')].map(e => e.textContent);
  lista = [...new Set(lista.map(t => (t || '').trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  copy(JSON.stringify(lista, null, 2));
  console.log(`${lista.length} departamentos copiados`, lista);
})();
