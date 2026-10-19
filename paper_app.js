(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const filters = ['q', 'category', 'scope', 'week'];
  let papers = [], signature = '', pending = false;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = value => /^https?:\/\//i.test(value || '') ? escape(value) : '#';
  const badges = values => values.map(v => `<span class="badge">${escape(v)}</span>`).join('');

  function options(id, values, label) {
    const previous = $(id).value;
    $(id).innerHTML = `<option value="">${label}</option>` + values.map(v => `<option value="${escape(v)}">${escape(v)}</option>`).join('');
    if (values.includes(previous)) $(id).value = previous;
  }

  function validate(data) {
    if (!data || !Array.isArray(data.main) || !Array.isArray(data.mentioned)) throw Error('数据结构不完整');
    const all = [...data.main, ...data.mentioned];
    const ids = new Set();
    for (const p of all) {
      if (!p.id || ids.has(p.id) || !p.title || !p.category || !p.datasets) throw Error('论文字段缺失或 ID 重复');
      ids.add(p.id);
    }
  }

  function applyData(data) {
    validate(data);
    const next = JSON.stringify(data);
    if (signature === next) return;
    const opened = new Set([...document.querySelectorAll('details[open]')].map(d => d.dataset.id));
    papers = [...data.main.map(p => ({...p, tableScope:'main'})), ...data.mentioned.map(p => ({...p, tableScope:'mentioned'}))];
    const latest = data.latestReadWeek;
    papers.forEach(p => { p.isNew = Boolean(latest && p.week === latest); p.searchText = Object.values(p).flat().join(' ').toLowerCase(); });
    options('category', [...new Set(papers.map(p => p.category))], '全部研究问题');
    $('scope').options[0].textContent = `${data.main.length} 篇主表论文`;
    $('scope').options[1].textContent = `全部 ${papers.length} 篇（含背景）`;
    $('scope').options[2].textContent = `${data.mentioned.length} 篇背景提及`;
    $('week').options[1].textContent = `本周阅读 · ${latest || '未标记'}`;
    $('description').textContent = `已读主表 ${data.main.length} 篇，另有 ${data.mentioned.length} 篇背景提及。更新于 ${data.date}。`;
    $('total').textContent = data.main.length;
    $('newTotal').textContent = papers.filter(p => p.isNew).length;
    $('datasetTotal').textContent = data.datasetCatalogCount || '—';
    $('latestList').textContent = papers.filter(p => p.isNew).map(p => p.short || p.title).join('、');
    $('rows').innerHTML = papers.map(p => `<tr data-id="${escape(p.id)}">
      <td><a href="${safeURL(p.url)}" target="_blank" rel="noopener">${escape(p.short || p.title)}</a>${p.isNew ? '<span class="new">本周阅读</span>' : ''}
        <details data-id="${escape(p.id)}" ${opened.has(p.id) ? 'open' : ''}><summary>完整题名与来源</summary><p>${escape(p.title)}</p><p>${escape(p.locator)}</p><p>${escape(p.provenance)}</p>${p.code_url ? `<p><a href="${safeURL(p.code_url)}" target="_blank" rel="noopener">代码仓库</a></p>` : ''}</details></td>
      <td>${escape(p.category)}<br><small>${p.tableScope === 'mentioned' ? '背景提及' : '已读主表'}</small></td>
      <td>${escape(p.framework)}</td>
      <td>${escape(p.organization)}<br><b>读取：</b>${escape(p.retrieval)}</td>
      <td>${escape(p.datasets)}</td>
      <td>${escape(p.data_use || p.notes)}</td>
      <td>${escape(p.notes)}</td>
    </tr>`).join('');
    signature = next;
    update();
  }

  function update() {
    const terms = $('q').value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;
    const rows = [...$('rows').children];
    papers.forEach((p, i) => {
      const ok = (!$('category').value || p.category === $('category').value)
        && ($('scope').value === 'all' || p.tableScope === $('scope').value)
        && (!$('week').value || p.isNew)
        && terms.every(term => p.searchText.includes(term));
      rows[i].hidden = !ok;
      if (ok) count++;
    });
    $('count').textContent = `${count} 篇`;
    $('empty').hidden = count !== 0;
  }

  async function reload() {
    if (pending) return;
    pending = true;
    const previousData = window.PAPER_RESEARCH_DATA;
    window.PAPER_RESEARCH_DATA = undefined;
    const script = document.createElement('script');
    script.src = `./paper_data.js?t=${Date.now()}`;
    script.onload = () => {
      try {
        applyData(window.PAPER_RESEARCH_DATA);
        $('sync').textContent = `自动同步中 · 最近检查 ${new Date().toLocaleTimeString('zh-CN', {hour12:false})}`;
        $('sync').classList.remove('error');
      } catch (e) {
        window.PAPER_RESEARCH_DATA = previousData;
        $('sync').textContent = '数据格式有误，保留上次内容；请检查数据文件。';
        $('sync').classList.add('error');
      } finally { script.remove(); pending = false; }
    };
    script.onerror = () => {
      window.PAPER_RESEARCH_DATA = previousData;
      $('sync').textContent = '暂时无法读取数据，保留上次内容；请确认 paper_data.js 在同一文件夹。';
      $('sync').classList.add('error');
      script.remove(); pending = false;
    };
    document.head.append(script);
  }

  filters.forEach(id => $(id).addEventListener(id === 'q' ? 'input' : 'change', update));
  $('reload').addEventListener('click', reload);
  $('reset').addEventListener('click', () => { filters.forEach(id => $(id).value = id === 'scope' ? 'main' : ''); update(); });
  $('print').addEventListener('click', () => window.print());
  document.addEventListener('visibilitychange', () => { if (!document.hidden) reload(); });
  window.addEventListener('focus', reload);
  reload();
  setInterval(() => { if (!document.hidden) reload(); }, 10000);
})();
