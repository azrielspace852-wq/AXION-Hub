(() => {
  'use strict';
  const storageKeys = { lang: 'axion-hub-lang', theme: 'axion-hub-theme' };
  const translations = {
    id: {
      'nav.home':'Beranda','nav.donate':'Donasi','nav.social':'Social Media','nav.romance':'Romance Engine','nav.axion':'AXION Neuralis','nav.settings':'Settings',
      'home.eyebrow':'Pusat tautan','home.title':'Satu tempat untuk menjelajahi ekosistem AXION.','home.subtitle':'Temukan layanan, dokumentasi, komunitas, dan kanal resmi AXION Neuralis.','home.cta.primary':'Coba Romance Engine','home.cta.secondary':'Lihat AXION Neuralis',
      'home.explore.eyebrow':'Explore','home.explore.title':'Pilih halaman yang ingin dikunjungi.',
      'cards.donate.title':'Donasi','cards.donate.desc':'Dukung pengembangan infrastruktur dan layanan AXION Neuralis.','cards.social.title':'Social Media','cards.social.desc':'Akun TikTok, WhatsApp, dan Telegram AXION Neuralis.','cards.romance.desc':'Surat Cinta Digital dari AXION Neuralis, gratis sepenuhnya.','cards.axion.desc':'Kenali platform AXION Neuralis dan buka dokumentasinya.','cards.settings.title':'Settings','cards.settings.desc':'Atur bahasa, tema, dan lihat email kontak AXION.',
      'donate.eyebrow':'Dukung AXION','donate.title':'Bantu AXION terus berkembang.','donate.subtitle':'Donasi bersifat sukarela dan digunakan untuk meningkatkan infrastruktur serta layanan AXION Neuralis, bukan untuk kebutuhan pribadi.','donate.paypal1.desc':'Dukungan langsung melalui halaman PayPal AXION Neuralis.','donate.open':'Buka PayPal','donate.paypal2.desc':'QR tambahan sesuai aset pembayaran yang disediakan.','donate.dana.desc':'QR DANA tersedia pada aset paket ini dan dapat ditampilkan penuh.','donate.sociabuzz.desc':'Dukung AXION Neuralis melalui Sociabuzz Tribe dan jadi bagian dari supporter resmi.','donate.sociabuzz.open':'Buka Sociabuzz',
      'social.eyebrow':'Connect','social.title':'Temui AXION di berbagai kanal.','social.subtitle':'Ikuti pembaruan, komunitas, dan konten AXION Neuralis melalui kanal berikut.','social.community':'Komunitas WhatsApp AXION','social.group':'Group WhatsApp AXION','social.telegramGroup':'Group Telegram AXION',
      'romance.title':'Kirim perasaanmu dalam bentuk Surat Cinta Digital.','romance.subtitle':'Gunakan Romance Engine dari AXION Neuralis secara gratis sepenuhnya untuk membuat surat cinta digital yang personal.','romance.open':'Buka Romance Engine',
      'axion.title':'Kenali AXION Neuralis.','axion.subtitle':'Lihat cuplikan dan kunjungi dokumentasi resmi untuk mempelajari ekosistem AXION Neuralis.','axion.docs':'Buka Dokumentasi',
      'settings.eyebrow':'Preferences','settings.title':'Atur pengalaman AXION Hub.','settings.subtitle':'Preferensi disimpan di perangkat Anda menggunakan localStorage.','settings.language':'Bahasa','settings.theme':'Tema','settings.contact':'Email',
      'common.showQr':'Tampilkan QR','common.qrUnavailable':'QR belum tersedia','common.noQr':'QR belum tersedia','common.qrTitle':'Kode QR','common.close':'Tutup','common.menuOpen':'Buka menu','common.menuClose':'Tutup menu',
      'search.placeholder':'Cari nama atau konten...','search.empty':'Tidak ada hasil ditemukan.','search.section.page':'Halaman','search.section.donate':'Donasi','search.section.social':'Social Media','search.section.settings':'Settings',
      'error.title':'Halaman tidak ditemukan.','error.subtitle':'Tautan yang Anda buka mungkin salah, sudah dipindahkan, atau sedang mengalami masalah.','error.home':'Kembali ke Beranda','footer.tagline':'Built for a connected ecosystem.'
    },
    en: {
      'nav.home':'Home','nav.donate':'Donate','nav.social':'Social Media','nav.romance':'Romance Engine','nav.axion':'AXION Neuralis','nav.settings':'Settings',
      'home.eyebrow':'Link hub','home.title':'One place to explore the AXION ecosystem.','home.subtitle':'Discover services, documentation, communities, and official AXION Neuralis channels.','home.cta.primary':'Try Romance Engine','home.cta.secondary':'Explore AXION Neuralis',
      'home.explore.eyebrow':'Explore','home.explore.title':'Choose a page to visit.',
      'cards.donate.title':'Donate','cards.donate.desc':'Support AXION Neuralis infrastructure and service development.','cards.social.title':'Social Media','cards.social.desc':'AXION Neuralis TikTok, WhatsApp, and Telegram channels.','cards.romance.desc':'Digital Love Letter from AXION Neuralis, completely free.','cards.axion.desc':'Learn about AXION Neuralis and open its documentation.','cards.settings.title':'Settings','cards.settings.desc':'Manage language, theme, and AXION contact emails.',
      'donate.eyebrow':'Support AXION','donate.title':'Help AXION keep growing.','donate.subtitle':'Donations are voluntary and are used to improve AXION Neuralis infrastructure and services, not for personal needs.','donate.paypal1.desc':'Direct support through the AXION Neuralis PayPal page.','donate.open':'Open PayPal','donate.paypal2.desc':'Additional QR based on the provided payment asset.','donate.dana.desc':'The DANA QR asset is included in this package and can be displayed in full.','donate.sociabuzz.desc':'Support AXION Neuralis through Sociabuzz Tribe and become an official supporter.','donate.sociabuzz.open':'Open Sociabuzz',
      'social.eyebrow':'Connect','social.title':'Find AXION across its channels.','social.subtitle':'Follow updates, communities, and AXION Neuralis content through the channels below.','social.community':'AXION WhatsApp Community','social.group':'AXION WhatsApp Group','social.telegramGroup':'AXION Telegram Group',
      'romance.title':'Turn your feelings into a Digital Love Letter.','romance.subtitle':'Use AXION Neuralis Romance Engine completely free to create a personal digital love letter.','romance.open':'Open Romance Engine',
      'axion.title':'Explore AXION Neuralis.','axion.subtitle':'Watch the preview and open the official documentation to learn about the AXION Neuralis ecosystem.','axion.docs':'Open Documentation',
      'settings.eyebrow':'Preferences','settings.title':'Customize your AXION Hub experience.','settings.subtitle':'Preferences are stored on your device using localStorage.','settings.language':'Language','settings.theme':'Theme','settings.contact':'Email',
      'common.showQr':'Show QR','common.qrUnavailable':'QR not available yet','common.noQr':'QR not available yet','common.qrTitle':'QR Code','common.close':'Close','common.menuOpen':'Open menu','common.menuClose':'Close menu',
      'search.placeholder':'Search by name or content...','search.empty':'No results found.','search.section.page':'Page','search.section.donate':'Donate','search.section.social':'Social Media','search.section.settings':'Settings',
      'error.title':'Page not found.','error.subtitle':'The link may be incorrect, moved, or temporarily unavailable.','error.home':'Return Home','footer.tagline':'Built for a connected ecosystem.'
    }
  };
  // Indeks pencarian: mencakup nama (title) dan isi konten (content) dalam dua bahasa.
  const searchIndex = [
    { title:{id:'Beranda', en:'Home'}, content:{id:'Pusat tautan ekosistem AXION Neuralis layanan dokumentasi komunitas kanal explore', en:'Link hub AXION Neuralis ecosystem services documentation community channels explore'}, url:'index.html', sectionKey:'search.section.page' },
    { title:{id:'Donasi', en:'Donate'}, content:{id:'Dukung AXION Neuralis donasi sukarela infrastruktur layanan PayPal DANA Sociabuzz pembayaran', en:'Support AXION Neuralis voluntary donation infrastructure services PayPal DANA Sociabuzz payment'}, url:'donate.html', sectionKey:'search.section.page' },
    { title:{id:'Social Media', en:'Social Media'}, content:{id:'TikTok WhatsApp Telegram grup komunitas channel kanal AXION Neuralis connect', en:'TikTok WhatsApp Telegram group community channel AXION Neuralis connect'}, url:'social-media.html', sectionKey:'search.section.page' },
    { title:{id:'Romance Engine', en:'Romance Engine'}, content:{id:'Surat Cinta Digital gratis AXION Neuralis romance love letter perasaan', en:'Digital Love Letter free AXION Neuralis romance feelings'}, url:'romance-engine.html', sectionKey:'search.section.page' },
    { title:{id:'AXION Neuralis', en:'AXION Neuralis'}, content:{id:'Platform dokumentasi resmi video cuplikan ekosistem docs', en:'Platform official documentation video preview ecosystem docs'}, url:'axion.html', sectionKey:'search.section.page' },
    { title:{id:'Settings', en:'Settings'}, content:{id:'Pengaturan bahasa tema email kontak preferensi dark light', en:'Settings language theme email contact preferences dark light'}, url:'settings.html', sectionKey:'search.section.page' },
    { title:{id:'PayPal', en:'PayPal'}, content:{id:'paypal.me AXIONNeuralis pembayaran donasi QR', en:'paypal.me AXIONNeuralis payment donation QR'}, url:'donate.html#paypal', sectionKey:'search.section.donate' },
    { title:{id:'PayPal QR 2', en:'PayPal QR 2'}, content:{id:'QR PayPal tambahan pembayaran donasi', en:'Additional PayPal QR payment donation'}, url:'donate.html#paypal-qr2', sectionKey:'search.section.donate' },
    { title:{id:'DANA', en:'DANA'}, content:{id:'QR DANA dompet digital pembayaran donasi', en:'DANA QR digital wallet payment donation'}, url:'donate.html#dana', sectionKey:'search.section.donate' },
    { title:{id:'Sociabuzz Tribe', en:'Sociabuzz Tribe'}, content:{id:'Sociabuzz tribe supporter donasi dukungan axionneuralis membership', en:'Sociabuzz tribe supporter donation support axionneuralis membership'}, url:'donate.html#sociabuzz', sectionKey:'search.section.donate' },
    { title:{id:'TikTok azriel.py', en:'TikTok azriel.py'}, content:{id:'@azriel.py TikTok akun video konten', en:'@azriel.py TikTok account video content'}, url:'social-media.html#tiktok-azriel', sectionKey:'search.section.social' },
    { title:{id:'TikTok AXION Neuralis', en:'TikTok AXION Neuralis'}, content:{id:'@axion.neuralis TikTok akun video konten', en:'@axion.neuralis TikTok account video content'}, url:'social-media.html#tiktok-axion', sectionKey:'search.section.social' },
    { title:{id:'WhatsApp Community', en:'WhatsApp Community'}, content:{id:'Komunitas WhatsApp AXION grup chat wa', en:'AXION WhatsApp community chat group wa'}, url:'social-media.html#wa-community', sectionKey:'search.section.social' },
    { title:{id:'WhatsApp Group', en:'WhatsApp Group'}, content:{id:'Group WhatsApp AXION chat wa', en:'AXION WhatsApp group chat wa'}, url:'social-media.html#wa-group', sectionKey:'search.section.social' },
    { title:{id:'Telegram Channel', en:'Telegram Channel'}, content:{id:'@AXION_Neuralis Telegram channel kanal broadcast', en:'@AXION_Neuralis Telegram channel broadcast'}, url:'social-media.html#telegram-channel', sectionKey:'search.section.social' },
    { title:{id:'Telegram Group', en:'Telegram Group'}, content:{id:'Group Telegram AXION chat', en:'AXION Telegram group chat'}, url:'social-media.html#telegram-group', sectionKey:'search.section.social' },
    { title:{id:'Bahasa', en:'Language'}, content:{id:'Indonesia English pengaturan bahasa id en', en:'Indonesia English language setting id en'}, url:'settings.html#bahasa', sectionKey:'search.section.settings' },
    { title:{id:'Tema', en:'Theme'}, content:{id:'Dark Light gelap terang mode pengaturan tema', en:'Dark Light mode theme setting'}, url:'settings.html#tema', sectionKey:'search.section.settings' },
    { title:{id:'Email Kontak', en:'Contact Email'}, content:{id:'azrielspace852@gmail.com axionneuralis@gmail.com kontak email hubungi', en:'azrielspace852@gmail.com axionneuralis@gmail.com contact email reach'}, url:'settings.html#email', sectionKey:'search.section.settings' }
  ];
  const pageNav = ['index.html', 'donate.html', 'social-media.html', 'romance-engine.html', 'axion.html', 'settings.html'];
  const allowedLangs = new Set(['id', 'en']);
  const allowedThemes = new Set(['dark', 'light']);
  const read = (key, fallback) => { try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  let lang = read(storageKeys.lang, 'id');
  let theme = read(storageKeys.theme, 'dark');
  if (!allowedLangs.has(lang)) lang = 'id';
  if (!allowedThemes.has(theme)) theme = 'dark';
  function t(key, fallback = '') {
    return Object.prototype.hasOwnProperty.call(translations[lang], key) ? translations[lang][key] : fallback;
  }
  function applyTheme(next) {
    if (!allowedThemes.has(next)) return;
    theme = next;
    document.documentElement.dataset.theme = theme;
    write(storageKeys.theme, theme);
    document.querySelectorAll('[data-theme-choice]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.themeChoice === theme));
    });
    document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
      meta.content = theme === 'light' ? '#f4f7fb' : '#090b10';
    });
  }
  function applyLanguage(next) {
    if (!allowedLangs.has(next)) return;
    lang = next;
    document.documentElement.lang = lang;
    write(storageKeys.lang, lang);
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dict, key)) node.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(node => {
      const key = node.dataset.i18nAria;
      if (Object.prototype.hasOwnProperty.call(dict, key)) node.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
    document.querySelectorAll('[data-theme-choice]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.themeChoice === theme));
    });
    const menuBtn = document.querySelector('[data-action="toggle-menu"]');
    if (menuBtn) {
      const open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-label', open ? t('common.menuClose') : t('common.menuOpen'));
    }
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.setAttribute('placeholder', t('search.placeholder'));
      searchInput.setAttribute('aria-label', t('search.placeholder'));
    }
  }
  function normalizePath(pathname) {
    const path = pathname.split('?')[0].split('#')[0].replace(/\\+/g, '/');
    const last = path.substring(path.lastIndexOf('/') + 1);
    return last || 'index.html';
  }
  function initActiveNav() {
    const current = normalizePath(window.location.pathname);
    document.querySelectorAll('.desktop-nav a, [data-mobile-panel] a').forEach(anchor => {
      const href = anchor.getAttribute('href') || '';
      if (!href || /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//') || href.startsWith('#')) return;
      const target = normalizePath(href);
      const active = pageNav.includes(target) && target === current;
      anchor.classList.toggle('active', active);
      if (active) anchor.setAttribute('aria-current', 'page');
      else anchor.removeAttribute('aria-current');
    });
  }
  function initMenu() {
    const btn = document.querySelector('[data-action="toggle-menu"]');
    const panel = document.querySelector('[data-mobile-panel]');
    const topbar = document.querySelector('.topbar');
    if (!btn || !panel) return;
    const setTopbarHeight = () => {
      if (topbar) document.documentElement.style.setProperty('--topbar-height', `${topbar.offsetHeight}px`);
    };
    let lastFocused = null;
    const close = (restoreFocus = false) => {
      panel.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', t('common.menuOpen'));
      setTopbarHeight();
      document.body.classList.remove('menu-open');
      if (restoreFocus) (lastFocused || btn).focus();
    };
    const open = () => {
      lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : btn;
      panel.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', t('common.menuClose'));
      setTopbarHeight();
      document.body.classList.add('menu-open');
    };
    btn.addEventListener('click', () => {
      if (panel.hasAttribute('hidden')) open(); else close(true);
    });
    panel.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', () => close(false)));
    document.addEventListener('click', event => {
      if (panel.hasAttribute('hidden')) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!panel.contains(target) && !btn.contains(target)) close(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !panel.hasAttribute('hidden')) close(true);
    });
    window.addEventListener('resize', () => {
      setTopbarHeight();
      if (window.innerWidth > 950 && !panel.hasAttribute('hidden')) close(false);
    }, { passive: true });
    setTopbarHeight();
  }
  function initQrModal() {
    const modal = document.querySelector('[data-qr-modal]');
    const image = document.querySelector('[data-qr-modal-img]');
    const label = document.querySelector('[data-qr-modal-label]');
    if (!modal || !image || !label) return;
    let lastTrigger = null;
    const close = () => {
      modal.setAttribute('hidden', '');
      image.removeAttribute('src');
      document.body.classList.remove('modal-open');
      if (lastTrigger instanceof HTMLElement) lastTrigger.focus();
      lastTrigger = null;
    };
    document.querySelectorAll('[data-qr]').forEach(trigger => trigger.addEventListener('click', () => {
      const path = trigger.dataset.qr;
      if (!path) return;
      lastTrigger = trigger;
      image.src = path;
      image.alt = trigger.dataset.qrTitle || t('common.qrTitle');
      label.textContent = trigger.dataset.qrTitle || t('common.qrTitle');
      modal.removeAttribute('hidden');
      document.body.classList.add('modal-open');
    }));
    modal.querySelectorAll('[data-action="close-qr"]').forEach(node => node.addEventListener('click', close));
    image.addEventListener('error', () => {
      image.removeAttribute('src');
      label.textContent = t('common.qrUnavailable');
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !modal.hasAttribute('hidden')) close();
    });
  }
  function initSearch() {
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    const menuBtn = topbar.querySelector('[data-action="toggle-menu"]');
    const wrap = document.createElement('div');
    wrap.className = 'site-search';
    wrap.innerHTML =
      '<svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
      '<input class="search-input" type="search" autocomplete="off" spellcheck="false" aria-label="' + t('search.placeholder') + '" placeholder="' + t('search.placeholder') + '">' +
      '<div class="search-results" hidden role="listbox"></div>';
    if (menuBtn) topbar.insertBefore(wrap, menuBtn); else topbar.appendChild(wrap);
    const input = wrap.querySelector('.search-input');
    const results = wrap.querySelector('.search-results');
    let activeIndex = -1;
    const highlight = (items) => {
      items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
    };
    const render = (list) => {
      activeIndex = -1;
      if (!list.length) {
        results.innerHTML = '<div class="search-empty">' + t('search.empty') + '</div>';
        results.hidden = false;
        return;
      }
      results.innerHTML = list.map((item, i) => {
        const title = item.title[lang] || item.title.id;
        const section = t(item.sectionKey, '');
        return '<a class="search-result" href="' + item.url + '" role="option" data-index="' + i + '">' +
          '<span class="search-result-title">' + title + '</span>' +
          '<span class="search-result-section">' + section + '</span></a>';
      }).join('');
      results.hidden = false;
    };
    const close = () => { results.hidden = true; };
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { close(); return; }
      const tokens = q.split(/\s+/).filter(Boolean);
      const matched = searchIndex.map(item => {
        const hay = (item.title.id + ' ' + item.title.en + ' ' + item.content.id + ' ' + item.content.en).toLowerCase();
        let score = 0;
        let allMatch = true;
        tokens.forEach(tok => {
          if (hay.includes(tok)) {
            const inTitle = item.title.id.toLowerCase().includes(tok) || item.title.en.toLowerCase().includes(tok);
            score += inTitle ? 2 : 1;
          } else {
            allMatch = false;
          }
        });
        return allMatch ? { item, score } : null;
      }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 10).map(s => s.item);
      render(matched);
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { close(); input.blur(); return; }
      if (results.hidden) return;
      const items = results.querySelectorAll('.search-result');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = Math.min(activeIndex + 1, items.length - 1);
        highlight(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
        highlight(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const target = activeIndex >= 0 ? items[activeIndex] : items[0];
        if (target) window.location.href = target.getAttribute('href');
      }
    });
    results.addEventListener('click', (e) => {
      const a = e.target.closest('.search-result');
      if (a) { e.preventDefault(); window.location.href = a.getAttribute('href'); }
    });
    document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) close(); });
    input.addEventListener('focus', () => { if (input.value.trim()) input.dispatchEvent(new Event('input')); });
  }
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(theme);
    applyLanguage(lang);
    initActiveNav();
    initMenu();
    initQrModal();
    initSearch();
    document.querySelectorAll('[data-theme-choice]').forEach(btn => btn.addEventListener('click', () => applyTheme(btn.dataset.themeChoice)));
    document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
    document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
  });
})();
