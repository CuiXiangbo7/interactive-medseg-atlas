(() => {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

  const initHomeSearch = () => {
    const home = document.querySelector('.atlas-home');
    if (!home || home.dataset.searchReady === 'true') return;

    const input = home.querySelector('.atlas-search-box input');
    const cards = Array.from(home.querySelectorAll('.atlas-result-card'));
    const buttons = Array.from(home.querySelectorAll('.atlas-filter'));
    const count = home.querySelector('.atlas-total-count');
    const empty = home.querySelector('.atlas-empty-state');
    if (!input || !count || !empty) return;

    home.dataset.searchReady = 'true';
    const locale = home.getAttribute('lang');
    let filter = 'all';

    const update = () => {
      const query = input.value.trim().toLocaleLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const kindMatches = filter === 'all' || card.dataset.kind === filter;
        const queryMatches = !query || card.dataset.search.includes(query);
        card.hidden = !(kindMatches && queryMatches);
        if (!card.hidden) visible += 1;
      });
      empty.hidden = visible > 0;
      count.textContent = query || filter !== 'all'
        ? visible + ' ' + (locale === 'zh-CN' ? '条匹配' : 'matches')
        : (locale === 'zh-CN' ? '共 ' + cards.length + ' 条记录' : cards.length + ' records');
    };

    input.addEventListener('input', update);
    buttons.forEach((button) => button.addEventListener('click', () => {
      filter = button.dataset.filter;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      update();
    }));
    update();
  };

  document.addEventListener('DOMContentLoaded', initHomeSearch);
  document.addEventListener('pjax:complete', initHomeSearch);
  document.addEventListener('keydown', (event) => {
    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;
    const target = event.target;
    if (target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) return;
    const input = document.querySelector('.atlas-search-box input');
    if (!input) return;
    event.preventDefault();
    input.focus();
  });

  document.addEventListener('pointerdown', (event) => {
    if (motionPreference.matches || event.isPrimary === false) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    const target = event.target instanceof Element
      ? event.target.closest('a[href], button, [role="button"]')
      : null;
    if (!target || target.getAttribute('aria-disabled') === 'true' || target.matches(':disabled')) return;

    const ripple = document.createElement('span');
    ripple.className = 'atlas-click-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.left = event.clientX + 'px';
    ripple.style.top = event.clientY + 'px';
    document.body.append(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    window.setTimeout(() => ripple.remove(), 600);
  }, { passive: true });
})();
