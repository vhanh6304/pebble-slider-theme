(() => {
  const init = (root) => {
    if (root.dataset.lhxReady === 'true') return;
    root.dataset.lhxReady = 'true';
    const $ = (selector, scope = root) => scope.querySelector(selector);
    const $$ = (selector, scope = root) => [...scope.querySelectorAll(selector)];
    const backdrop = $('[data-header-backdrop]');
    const drawers = $$('[data-drawer]');
    const megas = $$('[data-mega-panel]');
    const menuTriggers = $$('[data-mega-trigger]');
    const pagesMenu = $('[data-pages-menu]');
    const pagesTrigger = $('[data-pages-trigger]');
    let activeDrawer = null;
    let activeMega = null;
    let closeTimer = null;
    let lastScroll = window.scrollY;
    let searchTimer = null;

    const showBackdrop = (show) => {
      if (!backdrop) return;
      backdrop.hidden = !show;
      requestAnimationFrame(() => backdrop.classList.toggle('is-visible', show));
    };
    const lockBody = (lock) => document.documentElement.classList.toggle('lhx-body-lock', lock);
    const closePages = () => {
      if (!pagesMenu || !pagesTrigger) return;
      pagesTrigger.setAttribute('aria-expanded', 'false');
      pagesMenu.classList.remove('is-open');
      setTimeout(() => { if (!pagesMenu.classList.contains('is-open')) pagesMenu.hidden = true; }, 240);
    };
    const closeMega = () => {
      if (!activeMega) return;
      const panel = $(`[data-mega-panel="${activeMega}"]`);
      const trigger = $(`[data-mega-trigger="${activeMega}"]`);
      panel?.classList.remove('is-open');
      trigger?.setAttribute('aria-expanded', 'false');
      setTimeout(() => { if (!panel?.classList.contains('is-open')) panel.hidden = true; }, 320);
      activeMega = null;
      showBackdrop(false);
    };
    const openMega = (id) => {
      clearTimeout(closeTimer);
      closePages();
      if (activeMega === id) return;
      closeMega();
      const panel = $(`[data-mega-panel="${id}"]`);
      const trigger = $(`[data-mega-trigger="${id}"]`);
      if (!panel || !trigger) return;
      activeMega = id;
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(() => panel.classList.add('is-open'));
      showBackdrop(true);
    };
    const resetMobilePanels = () => {
      $$('[data-mobile-panel]').forEach((panel) => panel.classList.toggle('is-active', panel.dataset.mobilePanel === 'root'));
    };
    const closeDrawer = () => {
      if (!activeDrawer) return;
      const drawer = $(`[data-drawer="${activeDrawer}"]`);
      drawer?.classList.remove('is-open');
      drawer?.setAttribute('aria-hidden', 'true');
      const old = activeDrawer;
      activeDrawer = null;
      root.classList.remove('drawer-open');
      showBackdrop(Boolean(activeMega));
      lockBody(false);
      setTimeout(() => { if (!drawer?.classList.contains('is-open')) drawer.hidden = true; }, 390);
      if (old === 'menu') resetMobilePanels();
    };
    const openDrawer = (name) => {
      closeMega();
      closePages();
      if (activeDrawer === name) return;
      closeDrawer();
      const drawer = $(`[data-drawer="${name}"]`);
      if (!drawer) return;
      activeDrawer = name;
      drawer.hidden = false;
      drawer.setAttribute('aria-hidden', 'false');
      root.classList.add('drawer-open');
      showBackdrop(true);
      lockBody(true);
      requestAnimationFrame(() => drawer.classList.add('is-open'));
      if (name === 'search') setTimeout(() => $('[data-search-input]')?.focus(), 130);
      if (name === 'cart') refreshCart();
    };
    const refreshCart = async () => {
      const content = $('[data-cart-content]');
      if (!content) return;
      try {
        const cart = await fetch('/cart.js', { headers: { Accept: 'application/json' } }).then((response) => response.json());
        $$('[data-cart-count]').forEach((item) => { item.textContent = cart.item_count; });
        $$('[data-cart-drawer-count]').forEach((item) => { item.textContent = `(${cart.item_count})`; });
        if (!cart.item_count) {
          content.innerHTML = '<p class="lhx-cart-empty">Your cart is empty.</p><a class="lhx-button" href="/collections/all">Continue shopping</a>';
          return;
        }
        const money = (cents) => new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: window.Shopify?.currency?.active || 'USD' }).format(cents / 100);
        content.innerHTML = cart.items.map((item) => `<div class="lhx-cart-line"><a href="${item.url}">${item.image ? `<img src="${item.image}" alt="${item.product_title.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}">` : ''}</a><div><a href="${item.url}">${item.product_title}</a><span>${item.quantity} × ${money(item.final_price)}</span></div></div>`).join('') + `<a class="lhx-button" href="/cart">View cart · ${money(cart.total_price)}</a>`;
      } catch (_) { /* Keep server-rendered cart if the AJAX request is unavailable. */ }
    };

    $$('[data-drawer-open]').forEach((button) => button.addEventListener('click', () => openDrawer(button.dataset.drawerOpen)));
    $$('[data-drawer-switch]').forEach((button) => button.addEventListener('click', () => openDrawer(button.dataset.drawerSwitch)));
    $$('[data-drawer-close]').forEach((button) => button.addEventListener('click', closeDrawer));
    backdrop?.addEventListener('click', () => { closeDrawer(); closeMega(); closePages(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeDrawer(); closeMega(); closePages(); } });

    menuTriggers.forEach((trigger) => {
      const id = trigger.dataset.megaTrigger;
      trigger.addEventListener('mouseenter', () => openMega(id));
      trigger.addEventListener('focus', () => openMega(id));
      trigger.addEventListener('click', () => openMega(id));
      trigger.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeMega, 160); });
    });
    megas.forEach((panel) => {
      panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      panel.addEventListener('mouseleave', () => { closeTimer = setTimeout(closeMega, 160); });
    });
    pagesTrigger?.addEventListener('click', () => {
      const opening = pagesMenu?.hidden;
      closeMega();
      if (!pagesMenu) return;
      if (!opening) { closePages(); return; }
      pagesMenu.hidden = false;
      pagesTrigger.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(() => pagesMenu.classList.add('is-open'));
    });

    $$('[data-mobile-panel-open]').forEach((button) => button.addEventListener('click', () => {
      const target = button.dataset.mobilePanelOpen;
      $$('[data-mobile-panel]').forEach((panel) => panel.classList.toggle('is-active', panel.dataset.mobilePanel === target));
    }));
    $$('[data-mobile-panel-back]').forEach((button) => button.addEventListener('click', resetMobilePanels));
    $$('[data-rail-prev]').forEach((button) => button.addEventListener('click', () => button.closest('[data-product-rail]')?.querySelector('[data-product-rail-track]')?.scrollBy({ left: -235, behavior: 'smooth' })));
    $$('[data-rail-next]').forEach((button) => button.addEventListener('click', () => button.closest('[data-product-rail]')?.querySelector('[data-product-rail-track]')?.scrollBy({ left: 235, behavior: 'smooth' })));
    $$('[data-quick-add]').forEach((button) => button.addEventListener('click', async () => {
      const original = button.textContent;
      button.disabled = true;
      button.textContent = 'Adding…';
      try {
        const response = await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: [{ id: Number(button.dataset.variantId), quantity: 1 }] }) });
        if (!response.ok) throw new Error('Unable to add item');
        button.textContent = 'Added';
        await refreshCart();
      } catch (_) { button.textContent = 'Try again'; }
      setTimeout(() => { button.disabled = false; button.textContent = original; }, 1300);
    }));

    const input = $('[data-search-input]');
    const results = $('[data-search-results]');
    input?.addEventListener('input', () => {
      clearTimeout(searchTimer);
      const term = input.value.trim();
      if (term.length < 2) { if (results) results.innerHTML = ''; return; }
      searchTimer = setTimeout(async () => {
        try {
          const url = `/search/suggest.json?q=${encodeURIComponent(term)}&resources[type]=product&resources[limit]=6`;
          const data = await fetch(url, { headers: { Accept: 'application/json' } }).then((response) => response.json());
          const products = data.resources?.results?.products || [];
          if (results) results.innerHTML = products.map((product) => `<a class="lhx-search-result" href="${product.url}">${product.image ? `<img src="${product.image}" alt="">` : ''}<span>${product.title}</span></a>`).join('') || '<p>No products found.</p>';
        } catch (_) { if (results) results.innerHTML = ''; }
      }, 220);
    });

    const announcementItems = $$('[data-announcement-item]');
    if (announcementItems.length > 1) {
      let current = 0;
      const delay = Number(root.dataset.announcementDelay || 5000);
      const setAnnouncement = (next) => {
        announcementItems[current].classList.remove('is-active');
        current = (next + announcementItems.length) % announcementItems.length;
        announcementItems[current].classList.add('is-active');
      };
      let timer = setInterval(() => setAnnouncement(current + 1), delay);
      $('[data-announcement-prev]')?.addEventListener('click', () => { setAnnouncement(current - 1); clearInterval(timer); timer = setInterval(() => setAnnouncement(current + 1), delay); });
      $('[data-announcement-next]')?.addEventListener('click', () => { setAnnouncement(current + 1); clearInterval(timer); timer = setInterval(() => setAnnouncement(current + 1), delay); });
    }

    const updateScrollState = () => {
      const y = window.scrollY;
      const desktop = window.matchMedia('(min-width: 991px)').matches;
      root.classList.toggle('is-sticky', desktop && root.dataset.sticky === 'true' && y > 110);
      if (!desktop) {
        root.classList.toggle('mobile-scrolled', y > 64);
        root.classList.toggle('mobile-hidden', y > 100 && y > lastScroll);
      } else root.classList.remove('mobile-scrolled', 'mobile-hidden');
      lastScroll = y;
    };
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    updateScrollState();
  };
  const boot = () => document.querySelectorAll('[data-lhx-header]').forEach(init);
  document.addEventListener('DOMContentLoaded', boot);
  document.addEventListener('shopify:section:load', boot);
})();
