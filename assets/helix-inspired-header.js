(() => {
  const SELECTOR = '[data-lhx-header]';
  const DESKTOP = '(min-width: 991px)';

  const init = (root) => {
    if (root.dataset.lhxReady === 'true') return;
    root.dataset.lhxReady = 'true';

    const $ = (selector, scope = root) => scope.querySelector(selector);
    const $$ = (selector, scope = root) => [...scope.querySelectorAll(selector)];
    const isDesktop = () => window.matchMedia(DESKTOP).matches;
    const shell = $('[data-header-shell]');
    const backdrop = $('[data-header-backdrop]');
    const pagesMenu = $('[data-pages-menu]');
    const pagesTrigger = $('[data-pages-trigger]');
    const desktopNav = $('.lhx-nav');
    const megaPanels = $$('[data-mega-panel]');
    const megaTriggers = $$('[data-mega-trigger]');

    let activeDrawer = null;
    let activeDrawerTrigger = null;
    let activeMega = null;
    let megaCloseTimer = 0;
    let megaTransitionTimer = 0;
    let megaAnimationFrame = 0;
    let megaTransitionVersion = 0;
    let closingMegaPanel = null;
    let pagesCloseTimer = 0;
    let backdropTimer = 0;
    let backdropVisible = false;
    let searchTimer = 0;
    let mobilePanelTimer = 0;
    let activeMobilePanel = 'root';
    let mobilePanelStack = [];
    let closingMobilePanel = null;
    let cancelMobilePanelCompletion = null;
    let lastScroll = window.scrollY;
    let scrollFrame = 0;

    const setDrawerTriggers = (name, expanded) => {
      $$(`[data-drawer-open="${name}"], [data-drawer-switch="${name}"]`).forEach((trigger) => {
        trigger.setAttribute('aria-expanded', String(expanded));
      });
    };

    const showBackdrop = (show) => {
      if (!backdrop) return;
      backdropVisible = show;
      window.clearTimeout(backdropTimer);
      backdrop.setAttribute('aria-hidden', String(!show));
      if (show) {
        backdrop.hidden = false;
        requestAnimationFrame(() => {
          if (backdropVisible) backdrop.classList.add('is-visible');
        });
        return;
      }
      backdrop.classList.remove('is-visible');
      backdropTimer = window.setTimeout(() => {
        if (!backdropVisible && !backdrop.classList.contains('is-visible')) backdrop.hidden = true;
      }, 280);
    };

    const lockBody = (lock) => {
      document.documentElement.classList.toggle('lhx-body-lock', lock);
    };

    const positionPages = () => {
      if (!pagesMenu || !pagesTrigger || !shell || pagesMenu.hidden) return;
      const triggerRect = pagesTrigger.getBoundingClientRect();
      const shellRect = shell.getBoundingClientRect();
      const menuWidth = pagesMenu.offsetWidth || 270;
      const left = Math.max(0, Math.min(triggerRect.left - shellRect.left, shellRect.width - menuWidth));
      pagesMenu.style.left = `${left}px`;
      pagesMenu.style.right = 'auto';
      pagesMenu.style.top = `${triggerRect.bottom - shellRect.top}px`;
    };

    const closePages = (instant = false) => {
      window.clearTimeout(pagesCloseTimer);
      if (!pagesMenu || !pagesTrigger) return;
      pagesTrigger.setAttribute('aria-expanded', 'false');
      pagesMenu.classList.remove('is-open');
      const finish = () => {
        if (!pagesMenu.classList.contains('is-open')) pagesMenu.hidden = true;
      };
      if (instant) finish();
      else window.setTimeout(finish, 260);
    };

    const openPages = () => {
      if (!isDesktop() || !pagesMenu || !pagesTrigger) return;
      closeMega(true);
      pagesMenu.hidden = false;
      pagesTrigger.setAttribute('aria-expanded', 'true');
      positionPages();
      requestAnimationFrame(() => {
        pagesMenu.classList.add('is-open');
        positionPages();
      });
    };

    const schedulePagesClose = () => {
      window.clearTimeout(pagesCloseTimer);
      pagesCloseTimer = window.setTimeout(() => {
        if (!pagesTrigger?.matches(':hover') && !pagesMenu?.matches(':hover')) closePages();
      }, 150);
    };

    const positionMega = () => {
      if (!shell) return;
      const rootRect = root.getBoundingClientRect();
      const shellRect = shell.getBoundingClientRect();
      root.style.setProperty('--lhx-mega-top', `${shellRect.bottom - rootRect.top}px`);
      root.style.setProperty('--lhx-sticky-mega-top', `${shellRect.bottom}px`);
    };

    const resetMegaPanel = (panel, hide = true) => {
      if (!panel) return;
      panel.classList.remove('is-open', 'is-switching-in', 'is-switching-out', 'is-closing');
      if (hide) panel.hidden = true;
    };

    const cancelMegaTransition = () => {
      window.clearTimeout(megaTransitionTimer);
      megaTransitionTimer = 0;
      if (megaAnimationFrame) cancelAnimationFrame(megaAnimationFrame);
      megaAnimationFrame = 0;
      megaTransitionVersion += 1;
    };

    const setMegaHeight = (panel) => {
      if (!panel) return;
      const inner = $('.lhx-mega__inner', panel);
      const top = panel.getBoundingClientRect().top || 119;
      const available = Math.max(280, window.innerHeight - top - 16);
      const measured = Math.max(382, Math.ceil(inner?.scrollHeight || 382));
      root.style.setProperty('--lhx-mega-height', `${Math.min(measured, available)}px`);
    };

    function closeMega(instant = false) {
      window.clearTimeout(megaCloseTimer);
      if (!activeMega) {
        if (instant && closingMegaPanel) {
          cancelMegaTransition();
          resetMegaPanel(closingMegaPanel);
          closingMegaPanel = null;
          root.classList.remove('mega-open', 'mega-closing');
          root.style.removeProperty('--lhx-mega-height');
          showBackdrop(false);
        }
        return;
      }

      cancelMegaTransition();
      const version = megaTransitionVersion;
      const id = activeMega;
      const panel = $(`[data-mega-panel="${id}"]`);
      const trigger = $(`[data-mega-trigger="${id}"]`);
      activeMega = null;
      closingMegaPanel = panel;
      root.classList.add('mega-open', 'mega-closing');
      trigger?.setAttribute('aria-expanded', 'false');
      megaPanels.forEach((candidate) => {
        if (candidate !== panel) resetMegaPanel(candidate);
      });
      panel?.classList.remove('is-open', 'is-switching-in', 'is-switching-out');
      panel?.classList.add('is-closing');
      showBackdrop(false);

      const finish = () => {
        if (version !== megaTransitionVersion || activeMega) return;
        resetMegaPanel(panel);
        closingMegaPanel = null;
        root.classList.remove('mega-open', 'mega-closing');
        root.style.removeProperty('--lhx-mega-height');
      };
      if (instant) finish();
      else megaTransitionTimer = window.setTimeout(finish, 340);
    }

    const openMega = (id) => {
      if (!isDesktop()) return;
      window.clearTimeout(megaCloseTimer);
      closePages(true);
      if (activeDrawer) closeDrawer(true, false);
      const panel = $(`[data-mega-panel="${id}"]`);
      const trigger = $(`[data-mega-trigger="${id}"]`);
      if (!panel || !trigger) return;

      if (activeMega === id && panel.classList.contains('is-open')) return;

      const previousId = activeMega;
      const previous = previousId ? $(`[data-mega-panel="${previousId}"]`) : null;
      const switching = Boolean(previous && previousId !== id);
      cancelMegaTransition();
      const version = megaTransitionVersion;
      if (closingMegaPanel) {
        resetMegaPanel(closingMegaPanel);
        closingMegaPanel = null;
      }
      root.classList.remove('mega-closing');

      megaPanels.forEach((candidate) => {
        if (candidate !== previous && candidate !== panel) resetMegaPanel(candidate);
        if (candidate.dataset.megaPanel !== id) {
          $(`[data-mega-trigger="${candidate.dataset.megaPanel}"]`)?.setAttribute('aria-expanded', 'false');
        }
      });

      resetMegaPanel(panel, false);
      panel.hidden = false;
      positionMega();
      setMegaHeight(panel);
      activeMega = id;
      root.classList.add('mega-open');
      trigger.setAttribute('aria-expanded', 'true');
      showBackdrop(true);

      if (switching) {
        previous.classList.remove('is-open', 'is-switching-in', 'is-closing');
        previous.classList.add('is-switching-out');
        panel.classList.add('is-switching-in');
      }

      void panel.offsetHeight;
      megaAnimationFrame = requestAnimationFrame(() => {
        megaAnimationFrame = 0;
        if (version !== megaTransitionVersion || activeMega !== id || panel.hidden) return;
        panel.classList.add('is-open');
        updateRails();
      });

      if (switching) {
        megaTransitionTimer = window.setTimeout(() => {
          if (version !== megaTransitionVersion || activeMega !== id) return;
          resetMegaPanel(previous);
          panel.classList.remove('is-switching-in');
          megaTransitionTimer = 0;
        }, 340);
      }
    };

    const scheduleMegaClose = () => {
      window.clearTimeout(megaCloseTimer);
      megaCloseTimer = window.setTimeout(() => {
        const panel = activeMega ? $(`[data-mega-panel="${activeMega}"]`) : null;
        const trigger = activeMega ? $(`[data-mega-trigger="${activeMega}"]`) : null;
        if (!panel?.matches(':hover') && !trigger?.matches(':hover')) closeMega();
      }, 150);
    };

    const mobileSubpanels = $$('[data-mobile-subpanel]');
    const mobilePanelTriggers = $$('[data-mobile-panel-open]');
    const mobileRootPanel = $('[data-mobile-panel="root"]');
    const findMobilePanel = (name) => mobileSubpanels.find((panel) => panel.dataset.mobileSubpanel === name);
    const setMobileRootInteractive = (interactive) => {
      if (!mobileRootPanel) return;
      mobileRootPanel.setAttribute('aria-hidden', String(!interactive));
      mobileRootPanel.toggleAttribute('inert', !interactive);
    };
    const finishMobilePanel = (panel) => {
      if (!panel) return;
      panel.classList.remove('is-active', 'is-closing', 'is-underlay');
      panel.setAttribute('aria-hidden', 'true');
      panel.setAttribute('inert', '');
    };

    const updateMobilePanelTriggers = () => {
      const expanded = new Set(mobilePanelStack.map((entry) => entry.trigger).filter(Boolean));
      mobilePanelTriggers.forEach((button) => {
        button.setAttribute('aria-expanded', String(expanded.has(button)));
      });
    };

    const stopMobilePanelCompletion = () => {
      window.clearTimeout(mobilePanelTimer);
      mobilePanelTimer = 0;
      cancelMobilePanelCompletion?.();
      cancelMobilePanelCompletion = null;
    };

    const completeAfterMobilePanelTransition = (panel, callback) => {
      let complete = false;
      const cleanup = () => panel.removeEventListener('transitionend', onTransitionEnd);
      const finish = () => {
        if (complete) return;
        complete = true;
        cleanup();
        window.clearTimeout(mobilePanelTimer);
        mobilePanelTimer = 0;
        cancelMobilePanelCompletion = null;
        callback();
      };
      const onTransitionEnd = (event) => {
        if (event.target === panel && event.propertyName === 'transform') finish();
      };
      panel.addEventListener('transitionend', onTransitionEnd);
      cancelMobilePanelCompletion = cleanup;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      mobilePanelTimer = window.setTimeout(finish, reducedMotion ? 0 : 360);
    };

    const setMobilePanel = (name = 'root', instant = false, sourceTrigger = null) => {
      if (instant) {
        stopMobilePanelCompletion();
        activeMobilePanel = 'root';
        mobilePanelStack = [];
        setMobileRootInteractive(true);
        mobileSubpanels.forEach(finishMobilePanel);
        closingMobilePanel = null;
        updateMobilePanelTriggers();
        return;
      }

      if (name === activeMobilePanel) return;
      stopMobilePanelCompletion();
      if (closingMobilePanel) {
        finishMobilePanel(closingMobilePanel);
        closingMobilePanel = null;
      }
      const current = activeMobilePanel === 'root' ? null : findMobilePanel(activeMobilePanel);

      const backEntry = mobilePanelStack[mobilePanelStack.length - 1];
      if (current && backEntry?.name === name) {
        mobilePanelStack.pop();
        activeMobilePanel = name;
        closingMobilePanel = current;
        current.classList.remove('is-active');
        current.classList.add('is-closing');
        if (name === 'root') {
          setMobileRootInteractive(true);
        } else {
          const parent = findMobilePanel(name);
          parent?.classList.remove('is-underlay', 'is-closing');
          parent?.classList.add('is-active');
          parent?.setAttribute('aria-hidden', 'false');
          parent?.removeAttribute('inert');
        }
        updateMobilePanelTriggers();
        completeAfterMobilePanelTransition(current, () => {
          backEntry.trigger?.focus({ preventScroll: true });
          finishMobilePanel(current);
          closingMobilePanel = null;
        });
        return;
      }

      const target = findMobilePanel(name);
      if (!target) return;
      if (current) {
        current.classList.remove('is-active', 'is-closing');
        current.classList.add('is-underlay');
        current.setAttribute('aria-hidden', 'true');
        current.setAttribute('inert', '');
      } else {
        setMobileRootInteractive(false);
      }
      mobilePanelStack.push({ name: activeMobilePanel, trigger: sourceTrigger });
      activeMobilePanel = name;
      closingMobilePanel = null;
      finishMobilePanel(target);
      target.setAttribute('aria-hidden', 'false');
      target.removeAttribute('inert');
      void target.offsetWidth;
      target.classList.add('is-active');
      updateMobilePanelTriggers();
      const targetBody = target.querySelector('.lhx-mobile-subpanel__body');
      if (targetBody) targetBody.scrollTop = 0;
      target.querySelector('[data-mobile-panel-back]')?.focus({ preventScroll: true });
    };

    const positionLocalization = (drawer, trigger) => {
      const source = trigger?.getClientRects().length
        ? trigger
        : $$('[data-drawer-open="localization"]').find((item) => item.getClientRects().length);
      if (!source) return;
      const rect = source.getBoundingClientRect();
      drawer.style.setProperty('--lhx-popover-top', `${rect.bottom + 1}px`);
      drawer.style.setProperty('--lhx-popover-right', `${Math.max(16, window.innerWidth - rect.right)}px`);
    };

    function closeDrawer(instant = false, restoreFocus = true) {
      if (!activeDrawer) return;
      const name = activeDrawer;
      const drawer = $(`[data-drawer="${name}"]`);
      const wasPopover = drawer?.classList.contains('is-popover');
      const previousTrigger = activeDrawerTrigger;
      activeDrawer = null;
      activeDrawerTrigger = null;
      drawer?.classList.remove('is-open');
      drawer?.setAttribute('aria-hidden', 'true');
      setDrawerTriggers(name, false);
      root.classList.remove('drawer-open');
      lockBody(false);
      if (!activeMega) showBackdrop(false);
      const finish = () => {
        if (!drawer?.classList.contains('is-open')) {
          drawer.hidden = true;
          drawer.classList.remove('is-popover');
          drawer.style.removeProperty('--lhx-popover-top');
          drawer.style.removeProperty('--lhx-popover-right');
          if (name === 'menu') setMobilePanel('root', true);
        }
        if (restoreFocus && previousTrigger?.isConnected) previousTrigger.focus({ preventScroll: true });
      };
      if (instant) finish();
      else window.setTimeout(finish, wasPopover ? 260 : 410);
    }

    function openDrawer(name, trigger) {
      if (activeDrawer === name) {
        closeDrawer();
        return;
      }
      closeMega(true);
      closePages(true);
      if (activeDrawer) closeDrawer(true, false);
      const drawer = $(`[data-drawer="${name}"]`);
      if (!drawer) return;
      const popover = name === 'localization' && isDesktop();
      activeDrawer = name;
      activeDrawerTrigger = trigger || null;
      drawer.hidden = false;
      drawer.setAttribute('aria-hidden', 'false');
      drawer.setAttribute('aria-modal', String(!popover));
      setDrawerTriggers(name, true);
      if (popover) {
        drawer.classList.add('is-popover');
        positionLocalization(drawer, trigger);
        showBackdrop(false);
        lockBody(false);
      } else {
        drawer.classList.remove('is-popover');
        root.classList.add('drawer-open');
        showBackdrop(true);
        lockBody(true);
      }
      if (name === 'menu') setMobilePanel('root', true);
      requestAnimationFrame(() => drawer.classList.add('is-open'));
      if (name === 'search') window.setTimeout(() => $('[data-search-input]')?.focus(), 160);
      else window.setTimeout(() => drawer.focus({ preventScroll: true }), 120);
      if (name === 'cart') refreshCart();
    }

    $$('[data-drawer-open]').forEach((button) => {
      button.addEventListener('click', () => openDrawer(button.dataset.drawerOpen, button));
    });
    $$('[data-drawer-switch]').forEach((button) => {
      button.addEventListener('click', () => openDrawer(button.dataset.drawerSwitch, button));
    });
    $$('[data-drawer-close]').forEach((button) => button.addEventListener('click', () => closeDrawer()));
    backdrop?.addEventListener('click', () => {
      closeDrawer();
      closeMega();
      closePages();
    });

    megaTriggers.forEach((trigger) => {
      const id = trigger.dataset.megaTrigger;
      trigger.addEventListener('mouseenter', () => openMega(id));
      trigger.addEventListener('focus', () => openMega(id));
      trigger.addEventListener('click', () => {
        if (activeMega !== id) openMega(id);
      });
    });
    desktopNav?.addEventListener('mouseenter', () => window.clearTimeout(megaCloseTimer));
    desktopNav?.addEventListener('mouseleave', scheduleMegaClose);
    $$('.lhx-nav__link', desktopNav || root).forEach((link) => {
      link.addEventListener('mouseenter', () => closeMega());
    });
    megaPanels.forEach((panel) => {
      panel.addEventListener('mouseenter', () => window.clearTimeout(megaCloseTimer));
      panel.addEventListener('mouseleave', scheduleMegaClose);
    });

    pagesTrigger?.addEventListener('mouseenter', openPages);
    pagesTrigger?.addEventListener('focus', openPages);
    pagesTrigger?.addEventListener('mouseleave', schedulePagesClose);
    pagesTrigger?.addEventListener('click', () => {
      if (!pagesMenu?.classList.contains('is-open')) openPages();
    });
    pagesMenu?.addEventListener('mouseenter', () => window.clearTimeout(pagesCloseTimer));
    pagesMenu?.addEventListener('mouseleave', schedulePagesClose);

    document.addEventListener('pointerdown', (event) => {
      const target = event.target;
      if (pagesMenu?.classList.contains('is-open') && !pagesMenu.contains(target) && !pagesTrigger?.contains(target)) closePages();
      if (activeMega) {
        const panel = $(`[data-mega-panel="${activeMega}"]`);
        const trigger = $(`[data-mega-trigger="${activeMega}"]`);
        if (!panel?.contains(target) && !trigger?.contains(target) && target !== backdrop) closeMega();
      }
      if (activeDrawer === 'localization' && isDesktop()) {
        const drawer = $('[data-drawer="localization"]');
        const trigger = $('[data-drawer-open="localization"]');
        if (!drawer?.contains(target) && !trigger?.contains(target)) closeDrawer();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeDrawer();
      closeMega();
      closePages();
    });

    mobilePanelTriggers.forEach((button) => {
      button.addEventListener('click', () => setMobilePanel(button.dataset.mobilePanelOpen, false, button));
    });
    $$('[data-mobile-panel-back]').forEach((button) => {
      button.addEventListener('click', () => setMobilePanel(button.dataset.mobilePanelBack || 'root'));
    });
    setMobilePanel('root', true);

    const announcementItems = $$('[data-announcement-item]');
    if (announcementItems.length > 1) {
      let current = Math.max(0, announcementItems.findIndex((item) => item.classList.contains('is-active')));
      let announcementTimer = 0;
      const delay = Math.max(3000, Number(root.dataset.announcementDelay || 5000));
      const autoplay = root.dataset.announcementAutoplay !== 'false';
      announcementItems.forEach((item, index) => item.setAttribute('aria-hidden', String(index !== current)));

      const goToAnnouncement = (next, direction = 1) => {
        const targetIndex = (next + announcementItems.length) % announcementItems.length;
        if (targetIndex === current) return;
        const outgoing = announcementItems[current];
        const incoming = announcementItems[targetIndex];
        const leaving = direction > 0 ? 'is-leaving-to-top' : 'is-leaving-to-bottom';
        const entering = direction > 0 ? 'is-entering-from-bottom' : 'is-entering-from-top';
        outgoing.classList.remove('is-leaving-to-top', 'is-leaving-to-bottom');
        incoming.classList.remove('is-active', 'is-entering-from-top', 'is-entering-from-bottom', 'is-leaving-to-top', 'is-leaving-to-bottom');
        incoming.classList.add(entering);
        incoming.setAttribute('aria-hidden', 'false');
        outgoing.classList.remove('is-active');
        outgoing.classList.add(leaving);
        outgoing.setAttribute('aria-hidden', 'true');
        void incoming.offsetHeight;
        requestAnimationFrame(() => {
          incoming.classList.remove(entering);
          incoming.classList.add('is-active');
        });
        window.setTimeout(() => outgoing.classList.remove(leaving), 430);
        current = targetIndex;
      };

      const startAnnouncements = () => {
        window.clearInterval(announcementTimer);
        if (autoplay && !document.hidden) {
          announcementTimer = window.setInterval(() => goToAnnouncement(current + 1, 1), delay);
        }
      };
      $('[data-announcement-prev]')?.addEventListener('click', () => {
        goToAnnouncement(current - 1, -1);
        startAnnouncements();
      });
      $('[data-announcement-next]')?.addEventListener('click', () => {
        goToAnnouncement(current + 1, 1);
        startAnnouncements();
      });
      document.addEventListener('visibilitychange', startAnnouncements);
      startAnnouncements();
    }

    function updateRails() {
      $$('[data-product-rail]').forEach((rail) => {
        const track = $('[data-product-rail-track]', rail);
        const prev = $('[data-rail-prev]', rail);
        const next = $('[data-rail-next]', rail);
        if (!track) return;
        if (prev) prev.disabled = track.scrollLeft <= 2;
        if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      });
    }

    $$('[data-product-rail]').forEach((rail) => {
      const track = $('[data-product-rail-track]', rail);
      const move = (direction) => {
        if (!track) return;
        const card = track.firstElementChild;
        const gap = Number.parseFloat(getComputedStyle(track).gap) || 12;
        const distance = card ? card.getBoundingClientRect().width + gap : 235;
        track.scrollBy({ left: distance * direction, behavior: 'smooth' });
        window.setTimeout(updateRails, 380);
      };
      $('[data-rail-prev]', rail)?.addEventListener('click', () => move(-1));
      $('[data-rail-next]', rail)?.addEventListener('click', () => move(1));
      track?.addEventListener('scroll', updateRails, { passive: true });
    });

    const rootUrl = root.dataset.rootUrl || window.Shopify?.routes?.root || '/';
    const route = (value, fallback) => value || `${rootUrl.replace(/\/?$/, '/')}${fallback.replace(/^\//, '')}`;
    const cartUrl = route(root.dataset.cartUrl, 'cart');
    const cartAddUrl = route(root.dataset.cartAddUrl, 'cart/add');
    const searchSuggestUrl = route(root.dataset.searchSuggestUrl, 'search/suggest');
    const allProductsUrl = root.dataset.allProductsUrl || `${rootUrl}collections/all`;

    const money = (cents) => new Intl.NumberFormat(document.documentElement.lang || 'en', {
      style: 'currency',
      currency: root.dataset.currency || window.Shopify?.currency?.active || 'USD'
    }).format(Number(cents || 0) / 100);

    function updateCartBadges(cart) {
      $$('[data-cart-count]').forEach((badge) => {
        badge.textContent = cart.item_count;
        badge.toggleAttribute('data-empty', cart.item_count === 0);
      });
      $$('[data-cart-drawer-count]').forEach((count) => { count.textContent = `(${cart.item_count})`; });
    }

    function renderCart(cart) {
      const content = $('[data-cart-content]');
      if (!content) return;
      content.replaceChildren();
      if (!cart.item_count) {
        const message = document.createElement('p');
        const link = document.createElement('a');
        message.className = 'lhx-cart-empty';
        message.textContent = 'Your cart is empty.';
        link.className = 'lhx-button';
        link.href = allProductsUrl;
        link.textContent = 'Continue shopping';
        content.append(message, link);
        return;
      }
      cart.items.forEach((item) => {
        const line = document.createElement('div');
        const imageLink = document.createElement('a');
        const details = document.createElement('div');
        const title = document.createElement('a');
        const footer = document.createElement('div');
        const quantity = document.createElement('span');
        const price = document.createElement('span');
        line.className = 'lhx-cart-line';
        imageLink.href = item.url;
        if (item.image) {
          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.product_title || '';
          imageLink.append(image);
        }
        details.className = 'lhx-cart-line__details';
        title.href = item.url;
        title.textContent = item.product_title;
        footer.className = 'lhx-cart-line__footer';
        quantity.textContent = `${item.quantity} ×`;
        price.textContent = money(item.final_price);
        footer.append(quantity, price);
        details.append(title, footer);
        line.append(imageLink, details);
        content.append(line);
      });
      const action = document.createElement('a');
      action.className = 'lhx-button';
      action.href = cartUrl;
      action.textContent = `View cart · ${money(cart.total_price)}`;
      content.append(action);
    }

    async function refreshCart() {
      const content = $('[data-cart-content]');
      content?.setAttribute('aria-busy', 'true');
      try {
        const url = cartUrl.endsWith('.js') ? cartUrl : `${cartUrl}.js`;
        const response = await fetch(url, { headers: { Accept: 'application/json' } });
        if (!response.ok) return;
        const cart = await response.json();
        updateCartBadges(cart);
        renderCart(cart);
      } catch (_) {
        /* Keep the server-rendered state if Shopify is temporarily unavailable. */
      } finally {
        content?.setAttribute('aria-busy', 'false');
      }
    }

    $$('[data-quick-add]').forEach((button) => {
      button.addEventListener('click', async () => {
        const original = button.textContent;
        const originalAriaLabel = button.getAttribute('aria-label');
        const isIconButton = button.hasAttribute('data-quick-add-icon');
        const setQuickAddState = (state, label) => {
          if (isIconButton) {
            button.dataset.quickAddState = state;
            button.setAttribute('aria-label', label);
          } else {
            button.textContent = label;
          }
        };
        button.disabled = true;
        setQuickAddState('loading', 'Adding…');
        try {
          const url = cartAddUrl.endsWith('.js') ? cartAddUrl : `${cartAddUrl}.js`;
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ items: [{ id: Number(button.dataset.variantId), quantity: 1 }] })
          });
          if (!response.ok) throw new Error('Unable to add item');
          setQuickAddState('added', 'Added');
          await refreshCart();
        } catch (_) {
          setQuickAddState('error', 'Try again');
        }
        window.setTimeout(() => {
          button.disabled = false;
          if (isIconButton) {
            delete button.dataset.quickAddState;
            if (originalAriaLabel) button.setAttribute('aria-label', originalAriaLabel);
            else button.removeAttribute('aria-label');
          } else {
            button.textContent = original;
          }
        }, 1300);
      });
    });

    const searchInput = $('[data-search-input]');
    const searchResults = $('[data-search-results]');
    searchInput?.addEventListener('input', () => {
      window.clearTimeout(searchTimer);
      const term = searchInput.value.trim();
      const drawer = $('[data-drawer="search"]');
      drawer?.classList.toggle('has-query', Boolean(term));
      if (term.length < 2) {
        searchResults?.replaceChildren();
        searchResults?.setAttribute('aria-busy', 'false');
        return;
      }
      searchTimer = window.setTimeout(async () => {
        searchResults?.setAttribute('aria-busy', 'true');
        try {
          const endpoint = searchSuggestUrl.endsWith('.json') ? searchSuggestUrl : `${searchSuggestUrl}.json`;
          const url = `${endpoint}?q=${encodeURIComponent(term)}&resources[type]=product&resources[limit]=6`;
          const response = await fetch(url, { headers: { Accept: 'application/json' } });
          const data = await response.json();
          const products = data.resources?.results?.products || [];
          searchResults?.replaceChildren();
          if (!products.length) {
            const empty = document.createElement('p');
            empty.className = 'lhx-search-empty';
            empty.textContent = 'No products found.';
            searchResults?.append(empty);
          }
          products.forEach((product) => {
            const link = document.createElement('a');
            const body = document.createElement('span');
            const title = document.createElement('span');
            link.className = 'lhx-search-result';
            link.href = product.url;
            if (product.image) {
              const image = document.createElement('img');
              image.src = product.image;
              image.alt = '';
              link.append(image);
            }
            body.className = 'lhx-search-result__body';
            title.className = 'lhx-search-result__title';
            title.textContent = product.title;
            body.append(title);
            link.append(body);
            searchResults?.append(link);
          });
        } catch (_) {
          searchResults?.replaceChildren();
        } finally {
          searchResults?.setAttribute('aria-busy', 'false');
        }
      }, 220);
    });

    const countrySearch = $('[data-country-search]');
    const countrySelect = $('[data-country-select]');
    const countryButtons = $$('[data-country-option]');
    $$('[data-country-flag]').forEach((flag) => {
      const code = (flag.dataset.countryFlag || '').toUpperCase();
      if (/^[A-Z]{2}$/.test(code)) {
        flag.textContent = [...code].map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0))).join('');
      }
    });
    countrySearch?.addEventListener('input', () => {
      const term = countrySearch.value.trim().toLocaleLowerCase();
      countryButtons.forEach((button) => {
        button.hidden = Boolean(term) && !button.textContent.toLocaleLowerCase().includes(term) && !button.dataset.countryCode.toLocaleLowerCase().includes(term);
      });
    });
    countryButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (!countrySelect) return;
        countrySelect.value = button.dataset.countryCode;
        countryButtons.forEach((item) => {
          const selected = item === button;
          item.classList.toggle('is-selected', selected);
          item.setAttribute('aria-selected', String(selected));
        });
        button.closest('form')?.requestSubmit();
      });
    });

    const updateScrollState = () => {
      scrollFrame = 0;
      const y = window.scrollY;
      if (isDesktop()) {
        if (activeDrawer === 'menu') closeDrawer(true, false);
        root.classList.toggle('is-sticky', root.dataset.sticky === 'true' && y > 110);
        root.classList.remove('mobile-scrolled', 'mobile-hidden', 'mobile-dock-visible');
      } else {
        if (activeMega || closingMegaPanel) closeMega(true);
        if (pagesMenu?.classList.contains('is-open')) closePages(true);
        root.classList.remove('is-sticky');
        if (y <= 64) {
          root.classList.remove('mobile-scrolled', 'mobile-hidden', 'mobile-dock-visible');
        } else {
          root.classList.add('mobile-scrolled');
          const delta = y - lastScroll;
          if (delta > 4) root.classList.add('mobile-hidden', 'mobile-dock-visible');
          else if (delta < -4) root.classList.remove('mobile-hidden', 'mobile-dock-visible');
        }
      }
      lastScroll = y;
      positionMega();
      if (activeMega) setMegaHeight($(`[data-mega-panel="${activeMega}"]`));
      positionPages();
      if (activeDrawer === 'localization' && isDesktop()) {
        const drawer = $('[data-drawer="localization"]');
        if (drawer) positionLocalization(drawer, activeDrawerTrigger);
      }
    };

    const requestScrollUpdate = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollState);
    };
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', () => {
      requestScrollUpdate();
      updateRails();
      if (activeDrawer === 'localization' && isDesktop()) {
        const drawer = $('[data-drawer="localization"]');
        drawer?.classList.add('is-popover');
        drawer?.setAttribute('aria-modal', 'false');
        root.classList.remove('drawer-open');
        showBackdrop(false);
        lockBody(false);
        if (drawer) positionLocalization(drawer, activeDrawerTrigger);
      } else if (activeDrawer === 'localization') {
        const drawer = $('[data-drawer="localization"]');
        drawer?.classList.remove('is-popover');
        drawer?.setAttribute('aria-modal', 'true');
        root.classList.add('drawer-open');
        showBackdrop(true);
        lockBody(true);
      }
    });
    updateScrollState();
    requestAnimationFrame(updateRails);
  };

  const boot = () => document.querySelectorAll(SELECTOR).forEach(init);
  document.addEventListener('DOMContentLoaded', boot);
  document.addEventListener('shopify:section:load', boot);
  boot();
})();
