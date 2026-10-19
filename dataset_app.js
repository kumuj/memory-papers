(() => {
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const data = window.DATASET_CATALOG || {datasets: [], categories: []};
  const category = $('category'), q = $('q'), rows = $('rows'), count = $('count');
  category.innerHTML = '<option value="">全部数据集分类</option>' + data.categories.map(v => `<option>${escape(v)}</option>`).join('');
  const papers = new Map();
  (window.PAPER_RESEARCH_DATA?.main || []).concat(window.PAPER_RESEARCH_DATA?.mentioned || []).forEach(p => papers.set(p.id, p));
  function update() {
    const term = q.value.trim().toLowerCase(); let n = 0;
    rows.innerHTML = data.datasets.map(d => {
      const text = [d.name, d.category, d.type, d.description].join(' ').toLowerCase();
      const ok = (!category.value || d.category === category.value) && (!term || text.includes(term));
      if (ok) n++;
      const links = d.papers.map(id => papers.get(id)).filter(Boolean).map(p => `<a href="${escape(p.url || '#')}" target="_blank" rel="noopener">${escape(p.short || p.title)}</a>`).join('、');
      return `<tr ${ok ? '' : 'hidden'}><td><b>${escape(d.name)}</b></td><td>${escape(d.category)}</td><td>${escape(d.type)}</td><td>${escape(d.description)}</td><td>${links || '—'}</td></tr>`;
    }).join('');
    count.textContent = `${n} 个公开数据集`;
  }
  q.addEventListener('input', update); category.addEventListener('change', update); $('reset').addEventListener('click', () => {q.value=''; category.value=''; update();}); update();
})();
